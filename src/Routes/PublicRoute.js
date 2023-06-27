import { getIsLoggedIn } from "components/redux/selectors"

const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")


 function PublicRoute({children}){
    const isLoggedIn=useSelector(getIsLoggedIn)
    return isLoggedIn?children:<Navigate to='/'/>
}
export default PublicRoute;