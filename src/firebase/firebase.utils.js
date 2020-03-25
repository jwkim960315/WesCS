import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import firebaseConfig from './firebase.config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	hd: 'wesleyan.edu',
	prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// Helper Functions
export const loginOrCreateUser = async (userAuth,additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	try {
		if (!userRef.exists) {
			await createUserProfileDocument(userAuth,userRef,additionalData);
		}

		return userRef;
	} catch (error) {
		console.log(error);
	}
	console.log(userAuth);
}

const loginUser = async (userAuth,userRef,additionalData) => {
	
};

const createUserProfileDocument = async (userAuth,userRef,additionalData) => {
	const { displayName, photoURL, email } = userAuth;
	const createdAt = new Date();

	try {
		await userRef.set({
			displayName,
			email,
			photoURL,
			gradYear: null,
			majors: [],
			minors: [],
			workExperience: [],
			notifications: [],
			createdAt,
			...additionalData
		});
	} catch (err) {
		console.log('error creating user', err.message);
	}
};