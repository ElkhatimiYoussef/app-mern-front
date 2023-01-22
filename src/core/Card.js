import React from 'react'
import { Link } from 'react-router-dom'

import { addToCart } from './../actions/cartActions'

import { useDispatch } from 'react-redux'

import ShowImage from './ShowImage'
import moment from 'moment';


const Card = ({product, showViewBtn = true}) => {

  let dispatch = useDispatch()

     const showStock = (quantity) => {

        return quantity > 0 ? <span className='badge-pill badge-primary'>{quantity} In Stock</span> : <span className='badge badge-danger'>Out Of Stock</span>                 

     }

  return (
    <div>
      
       <div className="card text-lowercase text-secondary mb-2 px-2"> 
          <div className='card-header'>
           <h4 className="display-6 text-center">{product.name}</h4> 
          </div>
          <ShowImage item={product} url="product/photo" className="card-img-top"> </ShowImage>
           <div className="card-body">
             <p>{product.description}</p>
             <div className='text-center my-3'> 
               <span style={{fontSize: '20px'}} className='badge-pill badge-info'>${product.price}</span>
               <span style={{fontSize: '18px'}} className='badge-pill badge-light'>{product.description}</span>               
             </div>

             <div className='well'>
                 <h4>{showStock(product.quantity)}</h4>
                 
                   <span>Added {moment(product.createdAt).fromNow()}</span>

             </div>

             {showViewBtn && (

                 <Link to={`/product/${product._id}`}>
                   <button className="btn btn-warning mr-1">View</button> 
                 </Link>

             )}
              
             { product.quantity > 0 && (
              <button onClick={() => dispatch(addToCart(product))} className="btn btn-success">Add to Cart</button>

             ) } 
             
         </div>
       </div>

    </div>
  )
}

export default Card