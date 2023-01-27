import React, {useState, useContext} from 'react';

const LoadingContext = React.createContext([]);
const useLoadingContext = () => useContext(LoadingContext)

const LoadingProviedes = ({children}) => {

    const [productLoading, setProductLoading] = useState(true);
    const [categoriLoading, setCategoriLoading] = useState(true);

    const changeProductLoading = ()=>{
      setProductLoading(!productLoading)
    }
        
    const changeCategoriLoading = ()=>{
      setCategoriLoading(!categoriLoading)
    }    

    return(
      <LoadingContext.Provider value={{productLoading, categoriLoading, changeProductLoading, changeCategoriLoading}}>
        {children} 
      </LoadingContext.Provider>
    )
}

export {LoadingProviedes, useLoadingContext} ;