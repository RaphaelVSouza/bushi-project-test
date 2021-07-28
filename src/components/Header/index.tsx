import './styles.scss'
import { Link } from 'react-router-dom'


const Header = () => {
  const bgLogo = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/logo-header.svg')`,
  }

  return (
    <header className="header">
      <nav>
        <Link 
          className="logo" 
          to="/"
          style={bgLogo}
        >
          <h1>Bushi Legacy</h1>
        </Link>
      </nav>
    </header>
  )
}

export default Header
