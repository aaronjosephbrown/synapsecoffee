import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const RightNavSection = () => {
  
  const links = [
    {
      title: 'Log In',
      address: '#',
    },
    {
      title: 'Wholesale',
      address: '#',
    },
  ]

  return (
    <div className='flex flex-1 justify-end'>
      <ul className='flex'>
        {links.map((link, i) => {
          return (
            <li key={i} className='pr-3'>
              <NavLink to={link.address} >{link.title.toUpperCase()}</NavLink>
            </li>
          )
        })}
      </ul>
      <ShoppingBagIcon className='h-5'/>
    </div>
  )
}
export default RightNavSection
