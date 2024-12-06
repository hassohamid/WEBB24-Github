import { Link } from "react-router-dom";
let Home = () => {
    return (
        <>
            <Link to="/Todo">Todo</Link> <br/>
            <Link to="/Kalkylator">kalkylator</Link> <br/>
            <Link to="/Userlist">Userlist</Link> <br/>
        </>
    )
}
export default Home;