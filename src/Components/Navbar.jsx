import "./Navbar.css"
import logo from"../assets/logo.png"
export default function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">pages</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  )
}
