import { Link } from "react-router-dom"

function About(){
    return(
        <div>
            <Link  to="/about" >About</Link><br/>
            <Link to="/dasboard">Dasboard</Link>
            <h1>About page</h1>
        </div>
    )
}export default About