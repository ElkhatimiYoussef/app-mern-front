import React, { useState } from 'react'

function FilterByCategory({ categories, handleFilters }) {


    const [checked] = useState(new Set())
     
    const handleCategory = (category) => {
         
        if(checked.has(category._id)) {//Ila kayn dak element ra bghit nhaydo
            checked.delete(category._id) 
        }
        else {//Si non ra bghit n'affichih
            checked.add(category._id)
        }
        
        //console.log(checked);
        handleFilters(Array.from(checked));//Pour la recupere on l'a transforme sous forme de data

    }

  return (
      <div>
         <h4>Filter by Categories</h4>
          <ul>
           { categories && categories.map((category, i) => (

              <li key={i} className="list-unstyled my-3">
                  <input onClick={ () => handleCategory(category)} value={category._id} type="checkbox" id={i} className="form-check-input" />
                  <label htmlFor={i} className="form-check-label ml-3">{ category.name }</label>
              </li>

           )) }  
         </ul>
      </div>
  )
}

export default FilterByCategory