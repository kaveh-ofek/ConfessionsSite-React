import classes from "../CssFiles/HeaderStyling.module.css";
import { Fragment } from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/aboutme'>About Me</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </Fragment>
    )
}
export default Header;