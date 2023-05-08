import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Transition } from '@headlessui/react'
import centerLogo from '../../../assets/logo/synapse-coffee-nav-logo.jpg'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'


const links = [
  {
    title: 'Cafes',
    address: '#',
  },
  {
    title: 'About',
    address: '#',
  },
  {
    title: 'Shop',
    address: '#',
  },
  {
    title: 'Order',
    address: '#',
  },
  {
    title: 'Log In',
    address: '#',
  },
  {
    title: 'Wholesale',
    address: '#',
  },
]

const MobileMenu = () => {
  return (
    <div className='md:hidden'>
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex justify-between'>
                <Disclosure.Button className='py-2'>
                    {open ? (
                      <XMarkIcon className='h-8 w-10' />
                    ) : (
                      <Bars3Icon className='h-8 w-10' />
                    )}
                </Disclosure.Button>
                <div>
                  <img
                    src={centerLogo}
                    className='h-20'
                    alt='synapse-coffee-shop-logo'
                  />
                </div>

                <div className='flex w-10'><ShoppingBagIcon className='w-8'/></div>
              </div>
              <Transition
            show={open}
            enter="transition duration-100 ease-in"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
              <Disclosure.Panel>
                <div className='flex flex-col items-center'>
                {links.map((link)=>{
                  return(
                    <NavLink to={link.address} className='h-8 w-full border-b-2 border-gray-200 text-center'>{link.title}</NavLink>
                  )
                })}
                </div>
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
  )
}
export default MobileMenu