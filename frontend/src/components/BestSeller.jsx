// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';


// const BestSeller = () => {
//   const {products}=useContext(ShopContext)
//   const [bestSeller, setBestSeller]=useState([]);

// useEffect(()=>{
//      const bestProduct = products.filter((item)=>(item.bestSeller));
//      setBestSeller(bestProduct.slice(0, 5));
// },[])

//   return (
//     <div className='my-10'>
//         <div className='text-center text-3xl py-8'>
//             <Title text1={'BEST'} text2={'SELLER'}/>
//             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, voluptatem dolores natus vero hic illo.
//             </p>

//         </div>
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
//          {
//           bestSeller.map((item , index)=>(
//             <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
//         ))
//     }

//       </div>
//     </div>
//   )
// }

// export default BestSeller


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // Use lowercase "bestseller" here because that's in your data
      const bestProduct = products.filter((item) => item.bestseller === true);
      setBestSeller(bestProduct.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLER'} />

         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, voluptatem dolores natus vero hic illo.             </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
        {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image[0]}   // first image from array
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No best seller products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
