
import { NavLink} from "react-router-dom";

import "./style.css"

const Header = () => {
    return (
        <div className="header">
        <h1 className="title">#todo</h1>
        <ul className="menu-bar">
          <li><NavLink to="/">All</NavLink></li>
          <li><NavLink to="/active">Active</NavLink></li>
          <li><NavLink to="/completed">Completed</NavLink></li>
        </ul>
      </div>
    )
}

export default Header;