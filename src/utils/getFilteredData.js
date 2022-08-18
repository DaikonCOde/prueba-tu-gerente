import { collection, getDocs, query, where, limit, startAfter } from "firebase/firestore"; 
import {db} from '../db/config';


const firstPage = (filterBy, value) => {
  const q = query(
      collection(db, 'users'), 
      where(filterBy, '>=', value.toLowerCase() ), 
      where(filterBy, '<=', value.toLowerCase() + '~'),
      limit(20) 
      )
  return q
}

const nextPage = (filterBy, value, lastVisible) => {
  const q = query(
    collection(db, 'users'), 
    where(filterBy, '>=', value.toLowerCase() ), 
    where(filterBy, '<=', value.toLowerCase() + '~'),
    startAfter(lastVisible),
    limit(20) 
  )

  return q
}


export const getFilteredData = async(filterBy, value,lastVisible, setLastVisible) => {
  try {
    let q;
    if ( !lastVisible ) {
      q = firstPage(filterBy, value)
    } else {
      q = nextPage(filterBy, value, lastVisible)
    }
    
    const querySnapshot = await getDocs(q);

    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1])

    const result = [] 
    querySnapshot.forEach((doc) => {
      result.push({
          id: doc.id,
          ...doc.data()
        }
      ) 
    });

    return result;
    
  } catch (error) {
    throw error
  }
}
