import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { MdMailOutline } from 'react-icons/md'
import { SiGooglemaps } from "react-icons/si";
import Newsletter from '../_components/NewsLetterComponent';

function Page() {
  return (
    <div className='bg-blue-50'>
      <div
        className="bg-white text-blu-800 text-center py-2 md:py-2 relative min-h-fit sm:min-h-[400px] md:min-h-[300px] w-full z-10 flex flex-col md:flex-row-reverse justify-center gap-6 items-center"
        style={{ backgroundImage: `url('/hero-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}
      >
        {/* Overlay */}
        <div className="absolute top-0 inset-0 bg-gradient-to-r from-blue-50 to-slate-50 opacity-90 z-0"></div> 
        <div className="relative z-10 flex flex-col items-center justify-center h-full pl-4 w-[90%] text-center md:ml-12 md:mr-6 md:min-w-[50%]">
          <h1 className="text-3xl md:text-5xl md:w-[40%] md:text6xl text-gray-700 uppercase font-bold mb-4">Contact Us</h1>
          <p className='max-w-[85%] md:max-w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita temporibus libero mollitia eos, doloremque voluptatum reprehenderit a. Nihil, voluptatem velit? Cum molestiae ipsa assumenda, ipsam illo rerum dolor libero?</p>
          <button className='bg-gradient-to-r from-cyan-500 to-blue-900 hover:to-cyan-500 text-white font-bold py-3 px-5 rounded mt-4'>Get a Free Quote</button>
        </div>
      </div>


      {/* contact cards */}
      <div className='flex w-full justify-center mt-[90px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='bg-white flex flex-col items-center justify-center shadow-lg rounded-lg px-4 py-5 min-h-32 mt-[20px]'>
            <div className='mt-[-50px] mb-[15px] bg-cyan-500 px-3 py-3 rounded-full'>
              <FaPhone className='text-4xl text-white' />
            </div>
            
            <h2 className='text-xl font-bold text-center'>Call Us</h2>
            <p className='text-center'>+1 555-555-5555</p>
          </div>
          <div className='bg-white flex flex-col items-center justify-center shadow-lg rounded-lg px-4 py-5 min-h-32 mt-[20px]'>
          <div className='mt-[-50px] mb-[15px] bg-cyan-500 px-3 py-3 rounded-full'>
             <MdMailOutline className='text-4xl text-white' />
          </div>
            
            <h2 className='text-xl font-bold text-center'>Email Us</h2>
            <p className='text-center'>
              <a href='mailto:email@email.com'>email@email.com</a>
            </p>
            </div>

            <div className='bg-white flex flex-col items-center justify-center shadow-lg rounded-lg px-4 py-5 min-h-32 mt-[20px]'>
            <div className='mt-[-50px] mb-[15px] bg-cyan-500 px-3 py-3 rounded-full'>
              <SiGooglemaps className='text-4xl text-white' />
            </div>
              
            <h2 className='text-xl font-bold text-center'>Address</h2>
            <p className='text-center'>
              1224 Elm Street, Suite 100, Springfield, IL 62702
            </p>
            </div>
        </div>        
      </div>

      {/* contact */}
      <div className='w-full flex justify-center my-16 px-5'>
        <div className='flex w-full md:w-[85%] flex-col md:items-start md:flex-row items-center justify-center'>

        {/* Content */}
        <div className='md:max-w-[40%] mb-3'>
          <h2 className='text-2xl md:text-4xl font-bold text-center md:text-left mb-3'>Contact Us</h2>
          <p className='text-justify md:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, quidem nesciunt quaerat voluptas distinctio eligendi architecto vitae natus. Repellat veniam natus voluptatum modi omnis autem, laborum debitis voluptate quibusdam iste?</p>
        </div>

          {/* Form */}
        <form className='w-[95%] md:w-1/2 border-2 shadow-lg bg-gradient-to-r from-blue-900 to-cyan-500 px-6 py-4 rounded-md'>
            <div className='flex flex-col mb-4'>
              
              <input
                type='text'
                id='name'
                name='name'
                placeholder='John Doe'
                className='border border-gray-300 rounded-lg px-3 py-2 mt-1'
              />
            </div>
            <div className='flex flex-col mb-4'>
             
              <input
                type='email'
                id='email'
                name='email'
                placeholder='john.doe@example.com'
                className='border border-gray-300 rounded-lg px-3 py-2 mt-1'
                />
              </div>
              <div className='flex flex-col mb-4'>
             
              <input
                type='text'
                id='subject'
                name='subject'
                placeholder='Subject'
                className='border border-gray-300 rounded-lg px-3 py-2 mt-1'
                />
              </div>
              <div className='flex flex-col mb-4'>
                
                <textarea
                id='message'
                name='message'
                placeholder='Enter your message...'
                className='border border-gray-300 rounded-lg px-3 py-2 mt-1'
                ></textarea>
              </div>
              <div className='flex justify-center'>
                <button
                type='submit'
                className='bg-white border-2 uppercase hover:translate-y-1 text-blue-900 font-bold py-2 px-4 rounded w-full'
                >
                Submit
                </button>
              </div>
          </form>
        </div>
          
           
        </div>
        <Newsletter />
    </div>
  )
}

export default Page
