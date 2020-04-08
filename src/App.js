import React, { useEffect, useState, useContext, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// import NavBar from './components/Common/NavBar/NavBar.component';

import Home from './pages/Home/Home.page';
import Explore from './pages/Explore/Explore.page';
import SpecificPosts from './pages/SpecificPosts/SpecificPosts.page';
import Alumni from './pages/Alumni/Alumni.page';
import Footer from './components/Common/Footer/Footer.component';
import Loading from './components/Common/Loading/Loading.component';


import { auth, loginOrCreateUser } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/CurrentUser.context';
import CategoryContext from './contexts/Category.context';

import './App.scss';

const NavBar = lazy(() => import('./components/Common/NavBar/NavBar.component'));

class App extends React.Component {

	state = {
		currentUser: null,
		isLoading: false,
		category: null,
	};
	
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.setState({ isLoading: true });
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await loginOrCreateUser(userAuth);	

				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					}, () => this.setState({ isLoading: false }));
				})
			} else {
				this.setState({ currentUser: userAuth }, () => this.setState({ isLoading: false }))
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser, isLoading } = this.state;
		return !isLoading ? (
			<>
				<Suspense fallback={<Loading />}>
					<CurrentUserContext.Provider value={currentUser}>
						<NavBar />
					</CurrentUserContext.Provider>
				</Suspense>
				<CurrentUserContext.Provider value={currentUser}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/explore" component={Explore} />
						<Route exact path="/explore/alumni" component={Alumni} />
						<Route match="/explore" component={SpecificPosts} />
					</Switch>
				</CurrentUserContext.Provider>
				<Footer />
			</>
		) : (
			<Loading />
		)
	}
	
};

export default App;