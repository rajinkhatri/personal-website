import React from 'react'

const ContactMe = () => {
  return (
    <div className='bg-zinc-400'>
    <div className="py-8 lg:py-16 px-4 mx-auto lg:w-6/12 sm:w-8/12">
      <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">Contact Me</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-white-500 sm:text-xl">"Hey folks! Whether you're a friend, a potential collaborator, my contact form is wide open and ready for action. Let's create some bugs together!"</p>
      <form className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" rows="4" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          {/* <button type="submit" class=" px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
      </form>
  <p className=' text-white font-thin pt-4 italic'>The above section is just beautiful but doesn't work.</p>
  <a href="mailto: khatrirajin64@gmail.com" className='text-black font-semibold text-2xl'><img src="" alt="" />Mail me</a>
  </div>
    </div>
  )
}

export default ContactMe