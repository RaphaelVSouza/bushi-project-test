import './styles.scss'


const Header = () => (
  <header className="header">
    <nav>
      <img src={`${process.env.PUBLIC_URL}/logo-header.svg`} alt="bushi legacy"/>
    </nav>
  </header>
)

export default Header
