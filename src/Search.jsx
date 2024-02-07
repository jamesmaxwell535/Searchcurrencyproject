import React, {useState} from 'react'
import axios from "axios";

export const Search = () => {
    const [searchQuery, setSearchQuery]=useState("");
    const [country, setCountry]=useState()
    const [loading, setLoading]=useState(false);
    console.log(searchQuery)
    
    const handleSearch= async() => {
        setLoading(true);
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${searchQuery}`);
        setLoading(false);
        setCountry(response.data[0]);
        console.log(response.data[0]);


    };

    

  return (
    <div className="search-container">
        <div className="input-button-container">
            <input
               type="text"
               placeholder="Search By currency"
               value={searchQuery}
               onChange={(e)=>setSearchQuery(e.target.value)}
               />
               <button onClick={handleSearch}>Search</button>
        </div>
        {country && !loading && (
             <div className="country-container">
             
             
             <p>
                 <span>country</span>:{country.name.common}
             </p>
             
         </div>

        )}
{loading &&  <h2 className="loading">Loading...</h2>}       
       
    </div>
  )
}
