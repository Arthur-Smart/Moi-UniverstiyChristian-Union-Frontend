import React from 'react'
import SingleBook from '../singlebook/SingleBook'
import Tab from '../tab/Tab'
import { booksData } from './data'
import './librarydata.css'

function LibraryData() {
  return (
    <div className='container flex flex-col  items-center justify-center py-10'>
        <p className='font-bold text-2xl text-center text-gray-600'>Empowering the Faith and Enriching the Spirit</p>
        <Tab/>
       
        <div className='books-wrapper flex flex-wrap items-center justify-center gap-3 mt-10'>
             {booksData.map(book => (
                <SingleBook key={book.id} book={book}/>
             ))}            
        </div>
    </div>
  )
}

export default LibraryData