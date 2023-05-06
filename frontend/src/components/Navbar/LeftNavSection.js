import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

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
]

const LeftLinks = () => {
  return (
    <div className='flex-1'>
      <ul className='flex'>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <NavLink to={link.address} className='flex items-center pr-3'>
                <span className='pr-1'>{link.title.toUpperCase()}</span>
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
