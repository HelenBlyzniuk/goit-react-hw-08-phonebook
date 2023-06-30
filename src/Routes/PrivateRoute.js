const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")


 function PrivateRoute({children}){
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    // const location=useLocation()
    // console.log("privat",location)
    return isLoggedIn?children:<Navigate to='/login' />
}
export default PrivateRoute