import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  {getFirestore, collection, getDocs} from 'firebase/firestore';
import dataCategorias from '../../components/Data/Category.js';
import fetchCategorias from '../../components/Data/fetchCategories.js';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'

function CategoriasId() {
  const {id} = useParams();

  const[products, setProducts] = useState([]);
  const[category, setCategory] = useState([]);
  const [productLoading, setproductLoading] = useState();

  useEffect(()=>{     
    setproductLoading(true)

      const db = getFirestore();
      const itemsCollection = collection(db, 'item');
  
      getDocs(itemsCollection).then((snapshot)=> {
        const products = snapshot.docs.map((doc)=> ({
          id: doc.id,
          ...doc.data(),
        })).filter((element)=>{
          return parseInt(id,10) === 0 ? true : element.category === parseInt(id,10) 
        });
      setproductLoading(false);
      setProducts(products);
    })    

    const readCategorys = async()=>{
      try{
        return await fetchCategorias(dataCategorias);              
      } catch (error) {
        console.log(error)
      }
    }    
    readCategorys().then(data => {      
      
      const filtroCategories = data.filter((element)=>{
        return parseInt(id,10) === element.id
      })      
      
      setCategory(filtroCategories[0])
    })    

    return ()  =>{            
    }
    
  }, [id]);

  return (
    <div>      
      <ItemListContainer products={products} categoria={category} loading={productLoading} />  
    </div>     
  )
};

export default CategoriasId;


const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]