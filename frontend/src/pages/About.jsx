import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nesciunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim architecto explicabo ducimus ab, quis asperiores. Porro illo eaque, est, corrupti odio consequatur repudiandae, reiciendis maxime similique provident ipsa. Modi?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed dolor corrupti similique fuga eius sit, atque dolorum autem nostrum perspiciatis optio sequi eum ipsam cupiditate eos praesentium, libero rerum in minima iste temporibus culpa ducimus! Voluptatibus incidunt a perspiciatis? Ullam repudiandae impedit reprehenderit eos facilis doloremque, accusantium quisquam excepturi fuga cumque.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque cum atque quae debitis, vitae nostrum, tempora quos odio ipsum accusamus eaque corrupti dolores? Minima quo ea accusamus accusantium quaerat soluta, mollitia numquam corporis nisi, temporibus ullam perferendis architecto sapiente?</p>
        </div>

      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>

      </div>
{/*       
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quia amet quo ad quibusdam provident, aliquam modi adipisci libero necessitatibus cum corporis quod assumenda ea similique sapiente architecto labore! Eius quibusdam soluta iure officiis natus optio delectus at dignissimos sed?</p>

      </div> */}


       <div className='flex flex-col md:flex-row text-md mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Quality Assurance:</b>          
          <p className='text-gray-600' >We meticulously select and vet each product to ensure it meets ours stringent  quality standards.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Convenience:</b>
          <p className='text-gray-600' >With our user-friendly interface and hassle-free ordering process, shopping has never been eaiser </p>


        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >Our team of dedicated professionals is here to assist you the way, ensuring satisfaction is our top priority </p>


        </div>

       </div>

         <NewsletterBox/>
    </div>
  )
}

export default About
