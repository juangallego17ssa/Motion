import { StyledHeader } from "./Header.style"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <StyledHeader>
            <div className="leftHeader">
                <h1>Motion page</h1>
            </div>
            <div className="rightHeader">
                <Link to="/">SignUp</Link>
            </div>
        </StyledHeader>
    )
}

export default Header;