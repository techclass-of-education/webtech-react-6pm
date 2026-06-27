import { Link, useNavigate } from "react-router-dom"

const Home=()=>
{
    // const navigate=useNavigate()
    // function handleClick()
    // {
    //     navigate("/dash")
    // }
    return(<div className="d-flex justify-content-center align-items-center vh-100">
    

    {/* <button type="button" onClick={handleClick} class="btn btn-success display-6">Enter the Bank</button> */}
    <Link to="/dash" class="btn btn-success display-6 fs-1">Enter Bank Dashboard</Link>
    </div>)
}

export default Home;