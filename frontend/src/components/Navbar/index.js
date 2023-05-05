import Left from './LeftNavSection'
import Right from './RightNavSection'

const NavBar = () => {
  return (
    <nav className='flex justify-between'>
      <Left />
      <Right />
    </nav>
  )
}
export default NavBar
