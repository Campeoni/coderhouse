import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  {getFirestore, collection, getDocs} from 'firebase/firestore';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer.js'

const ItemId = ()=> {
  const {id} = useParams();
  const[product, setProduct] = useState([]);

  useEffect(()=>{ 
    const db = getFirestore();
    const itemsCollection = collection(db, 'item');
  
    getDocs(itemsCollection).then((snapshot)=> {
      const item = snapshot.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data(),
      })).filter((element)=>{        
        return element.id === id
      });

      setProduct(item[0])          
    })        

    return ()  =>{}
  }, [id]);

  return (
    <div className='container'>               
      <ItemDetailContainer product={product} />  
    </div>     
  )
};

export default ItemId;