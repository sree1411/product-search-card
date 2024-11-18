import React, { useEffect, useState } from 'react'

export const Search = () => {

  const [products, setProducts] = useState([]);
  const [searchquery, setSearchQuery] = useState('')
  const [filtered, setFilterd] = useState([])

  useEffect(()=>{

    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>setProducts(data))

  },[])


  useEffect(()=>{
      let searchItems = products.filter((product)=>product.title.toLowerCase().includes(searchquery.toLowerCase()))
      setFilterd(searchItems)
    }, [searchquery,products])



  return (
    <main>
       :<h1> search list items</h1>
      <input type='text' value={searchquery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='enter the product information' />
      {
        filtered.length>0 ? 
        (filtered.map((prd)=>(
          <li>{prd.title}</li>
        ))) : <h6> no products in the list</h6>
      }
    </main>
  )
}
