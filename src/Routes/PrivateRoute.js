const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")


 function PrivateRoute({children}){
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    return isLoggedIn?children:<Navigate to='/'/>
}
export default PrivateRoute