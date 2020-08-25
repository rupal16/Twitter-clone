import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAHboV7o7tv61FIFm761-2DYmBDopAdXQk",
  authDomain: "twitter-clone-f6680.firebaseapp.com",
  databaseURL: "https://twitter-clone-f6680.firebaseio.com",
  projectId: "twitter-clone-f6680",
  storageBucket: "twitter-clone-f6680.appspot.com",
  messagingSenderId: "84941839896",
  appId: "1:84941839896:web:7413f719dfe86832f4ad6d",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
