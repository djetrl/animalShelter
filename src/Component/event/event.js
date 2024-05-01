
import useServices from '../../services/Service';
import setContent from '../../utils/setContent';

import { useState, useEffect } from 'react';

const Event = ()=> {
  const {getEvents, clearError, process, setProcess}= useServices();
  const [data, setData] = useState([]);
      
  useEffect(()=>{
    updateEvent();
   },[])

    const updateEvent = () => {
        clearError();
        getEvents()
            .then(onEventlLoaded)
            .then(()=>setProcess('confirmed'));
    }

    const onEventlLoaded = (data) => {
      setData(data);
   }



  const renderItems = (arr)=>{
      const items = arr.map(({photoPath, description, id,link} )=>{
        return(
          <div className="events__item" key={id}>
            <img src={photoPath} alt="благотворительная встрреча филантропов" className="events__item__img" />
            <div className="events__item__content">
                <p className="events__item__text">{description}</p>
                <a href={link} className="events__item__link">Читать далее</a>
            </div>
          </div>
        )
      })
      return items;
  }


  return(
    <section className="events">
              {setContent(process, ()=>renderItems(data))}

    </section> 
  )


}


export default Event;