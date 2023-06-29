import  { Bars } from  'react-loader-spinner'

export const Loader=()=>{
    return(<div >
        <Bars
  height="80"
  width="80px"
  color="green"
  ariaLabel="bars-loading"
  wrapperStyle={{display: 'inline-block',
  
  marginLeft:'45%',
  marginBottom: '30px',
  marginTop:'30px',
  marginRight:'auto',
  
 
  }}
  wrapperClass=""
  visible={true}
/>
</div>

    )
}