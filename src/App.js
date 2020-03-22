import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar.component';
import Home from './pages/Home.page.jsx';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/CurrentUser.context';

import './App.scss';

const App = () => {
	let [user,setUser] = useState(null);

	useEffect(() => {
		return auth.onAuthStateChanged(async loggedInUser => {
			let userRef = await createUserProfileDocument(loggedInUser);
			// userRef.onSnapshot(snapShot => {
			// 	setUser({
			// 		id: snapShot.id,
			// 		...snapShot.data()
			// 	});
			// });
		});
	},[user]);
	
	return (
		<>
			<CurrentUserContext.Provider value={user}>
				<NavBar />
			</CurrentUserContext.Provider>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</>
	)
};

export default App;