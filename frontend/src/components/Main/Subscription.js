import { EnvelopeIcon } from '@heroicons/react/24/outline'
import {useState} from 'react'

const Subscription = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className='bg-gray-200 mt-40 pb-10'>
      <div className='flex flex-col items-center'>
        <EnvelopeIcon className='h-8 mt-10' />
        <p className='font-semibold'>{'Sign Up And Save'.toUpperCase()}</p>
        <p className='px-10 py-5 text-center'>
          {
            "Sign up for our newsletter to receive updates on new offerings, events, online promotions, and coffee-related news. You'll also receive 20% OFF your first online order!"
          }
        </p>
        <form className='p-5 flex'>
          <input type='email' name='email' value={email} onChange={handleChange} placeholder='Enter your email' className='w-60 h-8 border border-black placeholder-black p-2 font-light'/>
          <button  className='bg-black text-white text-xs p-2 h-8 font-thin border border-black -ml-1'>{'subscribe'.toUpperCase()}</button>
        </form>
      </div>
    </div>
  )
}
export default Subscription
