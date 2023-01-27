import React, {useState, useEffect } from 'react';
import  {getFirestore, collection, getDocs} from 'firebase/firestore';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'

function Ofertas() {  

  const[products, setProducts] = useState([]); 
  const [productLoading, setproductLoading] = useState(true);

  useEffect(()=>{ 
    const db = getFirestore();
    const itemsCollection = collection(db, 'item');

    getDocs(itemsCollection).then((snapshot)=> {
      const products = snapshot.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data(),
      })).filter((item)=>{
        return item.offer ? true : false
      });

      setProducts(products);
      setproductLoading(!productLoading);
    });

    return ()  =>{}    
  }, []);

  return (
    <div>      
      <ItemListContainer products={products} categoria={{"id":0,"name":"Ofertas"}} loading={productLoading} />  
    </div>     
  )
};

export default Ofertas;