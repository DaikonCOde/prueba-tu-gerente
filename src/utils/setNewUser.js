import { collection, doc, setDoc } from "firebase/firestore"; 
import { firestore } from "../db/config";

export const setNewUser = async(data) => {
  
  const newUser = doc(collection(db, "users"));

  // later...
  await setDoc(newUser, data);
  
}
