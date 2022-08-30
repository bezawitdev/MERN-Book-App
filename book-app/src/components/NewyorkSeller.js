import React, {useEffect,useState} from 'react';

import axios from "axios";
import Layout from '../shared/Layout';


function NewyorkSeller() {


const API = "voBdV86J0MSLmAXydB0PgE9pynVT5j7t"

   const[seller,setSeller]= useState([]);
   
    useEffect(()=>{
    getBooks();

   },[]);
  

   const getBooks = async () => {


    try{
    const response = await  axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API}`);
        console.log("alldata", response)
    const  data= response.data.results.books ;
console.log("random", data)
    setSeller(data);


    }
    catch(error){
            return (error)
    }
   

}
  



  return (
    <div className='home'>
     <Layout />
{seller && seller.map((book)=>{
            return <div className="popularRecipes"   key={book.id} >
                
                {/* <img  onClick={()=> navigate(`/CheckCook/${item.id}`)}  src={book.book_image} alt="Post banner" /> */}
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <img src={book.book_image}/>


    </div>
       })}

    </div>

  )
}

export default NewyorkSeller