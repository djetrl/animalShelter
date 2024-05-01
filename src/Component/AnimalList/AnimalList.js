
import { useRef ,useEffect} from "react";

const AnimalList = (props)=>{
  const itemRefs = useRef( []);
  const selectOnCard = (id)=>{
    itemRefs.current.forEach(item => {
        if(item !== null){
          item.classList.remove('flipCard')
        }
    });
    itemRefs.current[id].classList.toggle('flipCard');
  }

  useEffect(()=>{
    cards = renderCard(props.data);
  }, [props.data])

  function renderCard (data){
        const items = data.map((data )=>{
          return(
              props.funcRenderItem(data,selectOnCard,itemRefs.current, props.setIsOpenStatus, props.isOpenStatus)
            )
      })
        return items;
  }
  let cards = renderCard(props.data);


  return(
    <section className="cards">
      <div className="container">
        <div className="cards__inner">
              {cards} 
        </div>
      </div>
  </section>
  )
}


export default AnimalList;