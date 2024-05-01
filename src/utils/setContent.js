import Loading from '../Component/loading/loading';
import ErrorMessage from '../Component/errorMessage/ErrorMessage';




const setContent = (process, Component, props)=>{
switch(process){
  case 'waiting':
      return <Loading/>;
      break;
  case 'loading':
        return <Loading/>;
        break;
  case 'confirmed':
        return <Component {...props} />;
        break;
  case 'error': 
        return <ErrorMessage/>;
        break;      
  default: 
          throw new Error('Unexpected process state');
}
}


export default setContent;