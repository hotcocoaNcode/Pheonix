function initializeFireBase(){
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyBHERbD4inX8pGkf36fhWISV7cvFwQpQN4",
		authDomain: "hostserver-1v1lol.firebaseapp.com",
		projectId: "hostserver-1v1lol",
		storageBucket: "hostserver-1v1lol.appspot.com",
		messagingSenderId: "213346381613",
		appId: "1:213346381613:web:ea75d06b724188ae166da4",
		measurementId: "G-3FBWFP7JXQ"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}

function initializeFireBaseDev(){
	// Your web app's Firebase configuration
	var firebaseConfig = {
	apiKey: "AIzaSyANZ0SDhqoc62msSooQFs3SEb4XbC7gvk4",
	authDomain: "dev.1v1.lol",
	databaseURL: "https://dev1v1.firebaseio.com",
	projectId: "dev1v1",
	storageBucket: "dev1v1.appspot.com",
	messagingSenderId: "90097883404",
	appId: "1:90097883404:android:0931a7bbf3e74f2b9a5129"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}