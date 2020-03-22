import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/Common/NavBar/NavBar.component';
import Home from './pages/Home/Home.page';
import Explore from './pages/Explore/Explore.page';
import SpecificPosts from './pages/SpecificPosts/SpecificPosts.page';

import Footer from './components/Common/Footer/Footer.component';


// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/CurrentUser.context';
import CategoryContext from './contexts/Category.context';

import './App.scss';

const App = () => {
	let [user,setUser] = useState(null);
	let category = useContext(CategoryContext);

	// useEffect(() => {
	// 	return auth.onAuthStateChanged(async loggedInUser => {
	// 		let userRef = await createUserProfileDocument(loggedInUser);
	// 		// userRef.onSnapshot(snapShot => {
	// 		// 	setUser({
	// 		// 		id: snapShot.id,
	// 		// 		...snapShot.data()
	// 		// 	});
	// 		// });
	// 	});
	// },[user]);
	
	return (
		<>
			<CurrentUserContext.Provider value={user}>
				<NavBar />
			</CurrentUserContext.Provider>
			<CategoryContext.Provider value={category}></CategoryContext.Provider>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/explore" component={Explore} />
				<Route exact path="/allposts" component={SpecificPosts} />
			</Switch>
			<Footer />
		</>
	)
};

export default App;