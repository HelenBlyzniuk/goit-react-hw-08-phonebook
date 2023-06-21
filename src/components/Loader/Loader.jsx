import  { Bars } from  'react-loader-spinner'

export const Loader=()=>{
    return(
        <Bars
  height="80"
  width="80"
  color="green"
  ariaLabel="bars-loading"
  wrapperStyle={{display: 'block',
  marginLeft:"260px",
  marginBottom: '30px',
  marginTop:'30px'
 
  }}
  wrapperClass=""
  visible={true}
/>

    )
}