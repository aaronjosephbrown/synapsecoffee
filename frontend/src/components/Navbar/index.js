import Center from './CenterNavSection'
import Left from './LeftNavSection'
import Right from './RightNavSection'
import MobileMenu from './MobileMenu'

const NavBar = () => {
  return (
    <nav>
      <MobileMenu />
      <div className='hidden md:flex items-center'>
        <Left />
        <Center />
        <Right />
      </div>
    </nav>
  )
}
export default NavBar
