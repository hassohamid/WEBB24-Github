import { Link } from "react-router-dom"
let Nav = () => {
    return (
        <div className="navbar">
            <Link to="/Todo">Todo</Link> <br/>
            <Link to="/Kalkylator">kalkylator</Link> <br/>
            <Link to="/Userlist">Userlist</Link> <br/>
        </div>
    )
}
export default Nav;