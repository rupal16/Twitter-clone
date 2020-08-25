import * as firebase from "firebase";
export const auth = firebase.auth();

export const Authentication = async (email, password) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signOut = async () => {
  return firebase.auth().signOut();
};

export const SignInAuth = async (email, password) => {
  let user = await firebase.auth().signInWithEmailAndPassword(email, password);
  return user;
};
