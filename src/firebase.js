import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCIy7BNpW-VslOQLzUn_bmqDGpkt2AOM2k",
    authDomain: "link-65aad.firebaseapp.com",
    projectId: "link-65aad",
    storageBucket: "link-65aad.appspot.com",
    messagingSenderId: "1093320734381",
    appId: "1:1093320734381:web:e985cf822722998790b824"
}


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export default db;
export {auth};