import React, { useState } from 'react';
import {FaSearch} from "react-icons/fa";
import "./Searchbar.css";


const SearchBar = ({setResult}) => {

  const [input, setInput] = useState("");

  //fetch data fro external api
  const fetchData = (value) => {
    //call endpoint get the response and convert to json
    fetch("http://jsonplaceholder.typicode.com/users")
      .then( (response)=> response.json())
      .then((json)=>{
        //console.log(json)

         //variable to store filtered data
         const results =  json.filter( (user) => {

            return value && user && user.name && user.name.toLowerCase().includes(value)

         });

         setResult(results)


      })


  }

  //function to handle changes in value
  const handleChange = (value) =>{

    setInput(value)
    fetchData(value)
  }



  return (
    <div className='input-wrapper'>

        <FaSearch id="search-icon"/ >
            <input  placeholder= "Type to search names"
            value={input}
            onChange={ (e)=> handleChange(e.target.value)}
            
            
            />

            <div>

              
            </div>

       
      
    </div>
  )
}

export default SearchBar
