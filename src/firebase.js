import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLgLXAkAkKzub6wdDMD4vJ5m4Od7SOjWg",
  authDomain: "luxora-9fbec.firebaseapp.com",
  projectId: "luxora-9fbec",
  storageBucket: "luxora-9fbec.appspot.com",
  messagingSenderId: "886114709002",
  appId: "1:886114709002:web:a9a53430c887fe9a6e79f3",
  measurementId: "G-TSVJPXHBHJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const analytics = getAnalytics(app);

const signInwithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    throw error;
  }
};

const signInwithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    return result;
  } catch (error) {
    throw error;
  }
};

export {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
  signInwithGoogle,
  signInwithGithub,
};

// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   GithubAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyAyEtRu2xfUAg07dTCgiGDaUJJpMSZsgKs",
// //   authDomain: "gamble-f23e0.firebaseapp.com",
// //   projectId: "gamble-f23e0",
// //   storageBucket: "gamble-f23e0.appspot.com",
// //   messagingSenderId: "752484019758",
// //   appId: "1:752484019758:web:953dcd12aad2917db279bf",
// //   measurementId: "G-9VD3W6TPRL",
// // };
// const firebaseConfig = {
//   apiKey: "AIzaSyBLgLXAkAkKzub6wdDMD4vJ5m4Od7SOjWg",
//   authDomain: "luxora-9fbec.firebaseapp.com",
//   projectId: "luxora-9fbec",
//   storageBucket: "luxora-9fbec.appspot.com",
//   messagingSenderId: "886114709002",
//   appId: "1:886114709002:web:a9a53430c887fe9a6e79f3",
//   measurementId: "G-TSVJPXHBHJ",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();
// const githubProvider = new GithubAuthProvider();
// const analytics = getAnalytics(app);
// const signInwithGoogle = () => {
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       console.log(result);
//       // navigate("/dashboard");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// const signInwithGithub = () => {
//   signInWithPopup(auth, githubProvider)
//     .then((result) => {
//       console.log(result);
//       // navigate("/dashboard");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// export { auth, googleProvider, facebookProvider, githubProvider, signInwithGoogle, signInwithGithub };
