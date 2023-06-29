const { useSelector } = require("react-redux")
const { Navigate, useLocation } = require("react-router-dom")


 function PrivateRoute({children}){
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    const location=useLocation()
    console.log("privat",location)
    return isLoggedIn?children:<Navigate to='/' state={location}/>
}
export default PrivateRoute