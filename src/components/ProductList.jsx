import React, { useEffect, useState } from 'react'
import axios from 'axios'

const categoryMap = {
  men: "men's clothing",
  women: "women's clothing",
  kids: "baby & kids", 
}

const ProductList = ({ filters = {}, onProductCount = () => {}, showFourCols = false }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError('something went Wrong ' + err.message)
        setLoading(false)
      })
  }, [])

  // FILTER LOGIC
  let filteredProducts = products
  if (filters['IDEAL FOR'] && filters['IDEAL FOR'].length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filters['IDEAL FOR'].some(f => product.category.toLowerCase() === categoryMap[f])
    )
  }


  useEffect(() => {
    onProductCount(filteredProducts.length)
  }, [filteredProducts, onProductCount])

  if (loading) return <div className="p-8 text-center">Loading...</div>
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>

  return (
    <div className={`w-full md:w-full p-2 md:p-4 grid grid-cols-2 ${showFourCols ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-4`}>
      {filteredProducts.map((product, idx) => (
        <div key={product.id} className="bg-white p-0 relative group">
          {/* NEW PRODUCT */}
          {idx === 0 && (
            <span className="absolute top-2 left-2 bg-white text-xs font-bold z-10">NEW PRODUCT</span>
          )}
          <div className="w-full h-56 flex items-center justify-center bg-white">
            <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="flex flex-col px-3 pt-2 pb-3">
            <div className="font-bold text-xs mb-1 truncate uppercase">{product.title}</div>
            <div className="text-xs text-gray-500 mb-6">Sign in or Create an account to see pricing</div>
          </div>
          <button className="absolute bottom-3 right-3 text-xl text-gray-500 hover:text-red-500 bg-white rounded-full p-1 border border-gray-200"><span role="img" aria-label="wishlist">♡</span></button>
        </div>
      ))}
    </div>
  )
}

export default ProductList 