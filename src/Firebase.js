import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBTv_7na2iGkozGTCrInXJvS62VksfCd1c",
  authDomain: "netflix-clone-e4e9f.firebaseapp.com",
  projectId: "netflix-clone-e4e9f",
  storageBucket: "netflix-clone-e4e9f.firebasestorage.app",
  messagingSenderId: "850891056152",
  appId: "1:850891056152:web:d073d3ed9b09493567cf6d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);



const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user= res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const login = async (email,password)=>{
    try{
       await signInWithEmailAndPassword(auth,email,password);
    } catch (error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout};