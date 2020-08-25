import fire from "../config/Fire";
import * as firebase from "firebase";

const db = firebase.firestore();

export const isUserRegistered = (email) => {
  return db
    .collection("users")
    .get()
    .then((snapshot) => {
      let isRegistered = false;
      snapshot.docs.forEach((doc) => {
        if (email === doc.data().email) {
          isRegistered = true;
          return isRegistered;
        }
      });
      return isRegistered;
    });
};

export const saveUserService = (displayName, userName, email, dob) => {
  let userRef = db.collection("users");

  return userRef.doc(firebase.auth().currentUser.uid).set({
    displayName,
    userName,
    email,
    dob,
  });
};

export const fetchUser = async () => {
  let userId = firebase.auth().currentUser.uid;
  let userRef = await db.collection("users").doc(userId).get();
  let displayName = userRef.data().displayName;
  let userName = userRef.data().userName;
  let email = userRef.data().email;
  let dob = userRef.data().dob;

  return { displayName, userName, email, dob };
};
