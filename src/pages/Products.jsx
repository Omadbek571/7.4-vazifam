import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import { http } from '../axios'

function Products() {
  const [productCard, setProductCard] = useState([])
  const [loading, setLoading] = useState(true) 
  
  useEffect(() => {
    http.get("products")
      .then(data => {
        setProductCard(data.data.data);
        setLoading(false); 
      })
      .catch(err => {
        console.log(err);
        setLoading(false); 
      })
  }, [])

  const navigate = useNavigate(); 

  function handleRedirect(id) {
    navigate(`/products/${id}`) 
  }

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-4xl font-bold text-center mb-10'>
        {loading ? "Loading Products..." : `${productCard.length} Products`}
      </h1>
      
      {loading ? (
        <div className="flex justify-center items-center">
          <img 
            src="https://i.gifer.com/ZKZg.gif" 
            alt="loading" 
            className="w-20 h-20"
          />
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {productCard.length > 0 && productCard.map(product => (
            <div key={product.id} className='shadow-lg rounded-xl overflow-hidden cursor-pointer' onClick={() => handleRedirect(product.id)}>
              <img 
                src={product.attributes.image} 
                alt={product.attributes.title} 
                className='w-full h-64 object-cover'
              />
              <div className='p-5 text-center'>
                <h3 className='text-xl font-bold capitalize'>{product.attributes.title}</h3>
                <p className='text-lg text-gray-600 mt-2'>${(product.attributes.price / 100).toFixed(2)}</p> 
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products;
