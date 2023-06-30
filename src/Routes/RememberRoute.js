
// const { useSelector } = require("react-redux")
// const { Navigate, useLocation } = require("react-router-dom")


//  function RememberedRoute({children}){
//     const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
//     const location=useLocation()
//     function handleNavigate(location){
//         if (location.state!==null){return children}else{return <Navigate to='/personal_contacts'/>}
//     }
//     console.log('location.state',location.state)
 
//     return !isLoggedIn?children:{handleNavigate}
//     // return !isLoggedIn?children:<Navigate to={!location.state ?'/':location.state}/>
// }
// export default RememberedRoute