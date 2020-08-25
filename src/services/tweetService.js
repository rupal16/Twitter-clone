import fire from "../config/Fire";
import * as firebase from "firebase";

const db = firebase.firestore();

export const auth = firebase.auth();

export const saveTweet = async (message, url) => {
  let userRef = db.collection("users");
  await userRef
    .doc(firebase.auth().currentUser.uid)
    .collection("tweets")
    .doc()
    .set({
      displayName: "Rupal Jain",
      userName: "rupal16",
      date: "26 Jan",
      message: message,
      retweet: 6,
      likes: 10,
      isRetweet: false,
      tweetImg: url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  let posts = await fetchAllPosts();
  return posts;
};

export const fetchAllPosts = async () => {
  const userId = firebase.auth().currentUser.uid;
  let posts = [];
  let postRef = await db
    .collection("users")
    .doc(userId)
    .collection("tweets")
    .orderBy("timestamp", "desc");

  const snapshot = await postRef.get();

  snapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  return posts;
};
