import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieList } from '../pages/MovieList'
import { MovieDetail } from '../pages/MovieDetail'
import { Search } from '../pages/Search'
import { PageNotFound } from '../pages/PageNotFound'

const AllRoutes = () => {
  return (
    <section>
        <Routes>
            <Route  path='/' element={<MovieList  apiPath="products" title="products"/>} />
            <Route  path='movies/:id' element={<MovieDetail  />} />
            <Route  path='products/categories' element={<MovieList  title="jewellery" apiPath="products/category/jewelery" />} />
            <Route  path='movie/top' element={<MovieList apiPath="products/category/jewelery"/>} />
            <Route  path='movie/upcoming' element={<MovieList />} />
            <Route  path='search' element={<Search />} />
            <Route  path='*' element={<PageNotFound />} />
        </Routes>
    </section>
  )
}

export default AllRoutes