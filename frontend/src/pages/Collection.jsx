import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const collection = () => {

  const{products , Search , showSearch}=useContext(ShopContext)
  const [showFliter , setShowFliter]=useState(false)
  const [filterProducts , setFilterProducts]=useState([])

  const [category , setCategory]=useState([])
  const[subCategory , setSubCategory]=useState([])
  const[sortType , setSortType]=useState('relavent')

  const toggleCategory=(e)=>{
    if(category.includes( e.target.value)){

      setCategory(prev=>prev.filter(item=> item!== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }


  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
    setSubCategory(prev=>prev.filter(item=> item!== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
    }

    const applyFilter=()=>{
      let productsCopy=products.slice()

if(showSearch && Search){
  productsCopy=productsCopy.filter(item => item.name.toLowerCase().includes(Search.toLowerCase()))
}

      if(category.length>0){
        productsCopy=productsCopy.filter(item=> category.includes(item.category.toUpperCase()))
      }

      if(subCategory.length>0){
                productsCopy=productsCopy.filter(item => subCategory.includes(item.subCategory))
      }
      setFilterProducts(productsCopy)
    }
  
  
const sortProduct=()=>{
  let fpCopy= filterProducts.slice();
  switch(sortType){
    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
   break;

case 'high-low':
  setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
  break;
  
  default:
    applyFilter();
    break
  }
}


useEffect(()=>{
  applyFilter();

},[category , subCategory , Search , showSearch])


useEffect(()=>{
  sortProduct();
},[sortType])



  return (
    <div className='flex flex-col sm:flex-row  gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter options */}

      <div className='min-w-60'>
        <p onClick={()=>setShowFliter(!showFliter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFliter ? 'rotate-90': ''}`} alt="" />
        </p>

        {/* category filters */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFliter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'MEN'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'WOMEN'} onChange={toggleCategory} />WoMen
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'KIDS'} onChange={toggleCategory} />Kids
            </p>

          </div>

        </div>


{/* sub-category filter */}

<div className={`border border-gray-300 pl-5 py-3 my-5 ${showFliter ? "" : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>

          </div>

        </div>
      </div>
      

{/* Right side */}

<div className='flex-1'>
  <div className='flex justify-between text-base sm:text-2xl mb-4'>
    <Title text1={'ALL '} text2={'COLLECTIONS'}/>

    {/* product sort */}

    <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
      <option value="relavent">Sort by: Relavent</option>
      <option value="low-high">Sort by: Low to High</option>
      <option value="high-low">Sort by: High to Low</option>
    </select>

  </div>

{/* map products */}

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

{
  filterProducts.map((item , index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
}

</div>

</div>


    </div>
  )
}

export default collection
