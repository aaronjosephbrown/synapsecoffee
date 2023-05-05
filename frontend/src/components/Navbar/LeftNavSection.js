import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const leftLinks = [
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
    title: 'Orders',
    address: '#',
  },
]

const LeftLinks = () => {
  return (
    <div>
      <ul className='flex'>
        {leftLinks.map((link, i) => {
          return (
            <li key={i}>
              <NavLink to={link.address} className='flex items-center pr-3'>
                <span className='pr-1'>{link.title}</span>
                <ChevronDownIcon className='h-3' />
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default LeftLinks
