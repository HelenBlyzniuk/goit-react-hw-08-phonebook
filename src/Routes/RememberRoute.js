
const { useSelector } = require("react-redux")
const { Navigate, useLocation } = require("react-router-dom")


 function RememberedRoute({children}){
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    const location=useLocation()
    console.log('location.state',location.state)
    // return !isLoggedIn?children:<Navigate to={!location.state ?'/':location.state}/>
    return !isLoggedIn?children:<Navigate to='/personal_contacts'/>
}
export default RememberedRoute