import Center from './CenterNavSection'
import Left from './LeftNavSection'
import Right from './RightNavSection'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between h-20 mt-4 mx-auto sm:px-6 lg:px-8 font-semibold' >
      <Left />
      <Center />
      <Right />
    </nav>
  )
}
export default NavBar
