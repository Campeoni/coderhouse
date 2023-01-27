import React, {useState, useEffect}  from 'react';
import  {getFirestore, collection, getDocs} from 'firebase/firestore';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'

function Categorias() {
  const [products, setProducts] = useState([]);
  const [productLoading, setproductLoading] = useState(true);
  
  useEffect(()=>{
    
    const db = getFirestore();
    const itemsCollection = collection(db, 'item');

    getDocs(itemsCollection).then((snapshot)=> {
      const products = snapshot.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setProducts(products);
      setproductLoading(!productLoading);
    });
    
    return ()  =>{}
  }, []);

  return (
    <div>
      <ItemListContainer products={products} categoria={{"id":0,"name":"Productos"}} loading={productLoading} />                
    </div>      
  )
};

export default Categorias;