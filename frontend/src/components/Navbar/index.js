import Center from './CenterNavSection'
import Left from './LeftNavSection'
import Right from './RightNavSection'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import centerLogo from '../../assets/logo/synapse-coffee-nav-logo.jpg'

const NavBar = () => {
  return (
    <nav>
      <div className='hidden md:flex items-center'>
        <Left />
        <Center />
        <Right />
      </div>
      <div className='md:hidden'>
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex justify-between'>
                <Disclosure.Button className='py-2'>
                  {open ? (
                    <XMarkIcon className='h-8' />
                  ) : (
                    <Bars3Icon className='h-8' />
                  )}
                </Disclosure.Button>
                <div>
                <img
                  src={centerLogo}
                  className='h-20'
                  alt='synapse-coffee-shop-logo'
                />
                </div>
                <div>{/*Placeholder*/}</div>
              </div>
              <Disclosure.Panel>Hello! I'll be finishing this soon!</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </nav>
  )
}
export default NavBar
