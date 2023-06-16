import React from 'react';
import "./directory.styles.scss"
import catagoriesArray from "../../items/categories.json";
import CategoryItem from '../category-item/CategoryItem';

export default function Directory() {
 const categories = catagoriesArray;
  return (
    <div className='categories-container'>
      {categories.map((item)=>{ 
        return(
          <CategoryItem  category = {item} key={item.id} />
        )
      })}
    </div>
  )
}
