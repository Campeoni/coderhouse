
const fetchCategories = (categorias)=> {

    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(categorias)
        },200);
    }) 
}

export default fetchCategories;