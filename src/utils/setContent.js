import Loading from '../Component/loading/loading';
import ErrorMessage from '../Component/errorMessage/ErrorMessage';




const setContent = (process, Component, props)=>{
switch(process){
  case 'waiting':
      return <Loading/>;

  case 'loading':
        return <Loading/>;

  case 'confirmed':
        return <Component {...props} />;

  case 'error': 
        return <ErrorMessage/>;    
  default: 
          throw new Error('Unexpected process state');
}
}


export default setContent;