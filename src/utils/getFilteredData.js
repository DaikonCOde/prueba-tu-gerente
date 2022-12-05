import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import {firestore} from '../db/config';

export const useGetUsers = () => {
  const [ list, setList] = useState([]);
  const [ exportList, setExportList] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const getUsers = async() => {
    try {
      setIsLoading(true);
      const ref = collection(firestore, 'users');
      
      const querySnapshot = await getDocs(ref);
  
      const result = [] 
      querySnapshot.forEach((doc) => {
        const obj = {
          ...doc.data(),
          id: doc.id,
        }

        obj.answers = Object.values(obj.answers);
        result.push(obj);
      });

      const resultExportList = [] 

      querySnapshot.forEach((doc) => {
        const obj = {
          ...doc.data()
        }

        delete obj.id;
        delete obj.acceptTerms;
        delete obj.reply_email;
        delete obj.answers;
        delete obj.images
        
        resultExportList.push(obj)
      })
  
      setList(result)
      setExportList(resultExportList)
      setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      throw error
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return [ list, exportList,isLoading ]
}
