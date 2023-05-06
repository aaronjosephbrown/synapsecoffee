import centerLogo from '../../assets/logo/synapse-coffee-nav-logo.jpg'
import { Link } from 'react-router-dom'

const CenterNavSection = () => {
  return (
    <div className='flex'>
      <Link to='#'>
        <img src={centerLogo} className='h-20' alt="synapse-coffee-shop-logo" />
      </Link>
    </div>
  )
}
export default CenterNavSection
