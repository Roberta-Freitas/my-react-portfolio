import React from 'react'

const Contact = () => {

  return (
    <section id="contact">
    <div className="mt-20 text-3xl py-1 dark:text-white">
      <h2 className="text-3xl py-1 mt-10 inline border-b-4 border-teal-500 dark:text-white">Contact</h2>
    </div>
    <div name='contact' className='w-full h-screen shadow-lg rounded-xl text-gray-800 dark:bg-gray-100 flex justify-center items-center mt-10 p-4'>
        <form method='POST' action="https://getform.io/f/f33a516d-ee31-426d-a92c-78c950dfca80" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 rounded-xl'>

                <p className='py-4'>Send me a message by submitting the form below.</p>
            </div>
            <input className='bg-gray-200 p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-200 rounded-md' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-200 p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors'>Let&apos;s Collaborate</button>
        </form>
    </div>
</section>
  )
}

export default Contact;
