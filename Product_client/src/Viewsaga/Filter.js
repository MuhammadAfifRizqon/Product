import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetProductRequest} from "../Redux-saga/Action/ProductActions";


export default function Filter() {
  const dispatch = useDispatch()
    
  const { viewProduct } = useSelector((state) => state.productStated);
  
  useEffect(() => {
      dispatch(GetProductRequest())
     
  }, [])
  
  return (
      <div class = 'grid grid-cols-3'>
          {viewProduct &&
          viewProduct.map((menu) => {
                  return (
                      <div class='m-10 inline-flex'>
                          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white">        
                          <div class="p-5">
                              {/* <a href="#">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{menu.menu_image}</h5>
                              </a> */}
                          <div>
                              <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Name :{menu.brand_name} </label>
                          </div>
                          <div>
                              <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Harga : {menu.area_name} </label>
                          </div>
                          {/* <div>
                              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit' onClick={() => onClick}> Check Progress </button>
                          </div> */}
                          </div>
                      </div>
                  </div>
                      )
                  })
              } 
      </div> 
  )
}

  
