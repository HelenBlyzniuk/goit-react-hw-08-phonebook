import { getIsLoggedIn } from "components/redux/selectors"

const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")


 function PublicRoute({children}){
    const isLoggedIn=useSelector(getIsLoggedIn);
    return isLoggedIn?<Navigate to='/personal_contacts'/>:children;
}
export default PublicRoute;