import {  useNavigate } from "react-router-dom";
import { useAuth } from "./Contextlogin";
import { Link } from "react-router-dom";


function Dashboard() {
    const { Logout } = useAuth();
    console.log("Logout", Logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("login"); 
        Logout();
        navigate("/");
    };

    return (
        <div>
            <Link to="/about" >About</Link><br/>
            <Link to="/dasboard">Dasboard</Link>
            <h1>Dashboard page open</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
