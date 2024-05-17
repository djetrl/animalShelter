import Helmet from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sliders from '../../slider/slider'
import Memo from "../../memo/memo";
import Event from "../../event/event";
import useServices from "../../../services/Service";
import setContent from "../../../utils/setContent";
import photoNotFound from '../../img/main/photoNotFound.png'
const Home = ()=>{
    const [animal, setAnimal] = useState([]);
    const {getAnimal, getLuckAnimal, clearError, process, setProcess}= useServices();


  useEffect(()=>{
    updateAnimal();
   },[])

 

  const updateAnimal = () => {
    clearError();
    getAnimal()
      .then((res)=>{
        getLuckAnimal().then((resLucky)=>{
          let filterData = res.filter(animal=>{
            return resLucky.every(
              LuckAnimal =>{
                return !animal.id.includes(LuckAnimal.oldId)
              }
            )
          })
          onAnimalLoaded(filterData)
        })  
      })
      .then(()=>setProcess('confirmed'));
  }

  const onAnimalLoaded = (data) => {
    setAnimal([...data] )
  }


  const onRenderImg = (photoPathLocal, name) =>{
    if(photoPathLocal.replace('http://217.71.129.139:4112/', '') !== ''){
      return <img src={photoPathLocal} alt={name} className="slider__img"/>
    }else{
      return <img src={photoNotFound} alt={name} className="slider__img"/>
    }
  }

 
  const renderSlider = (arr, arrLength)=>{
        let counter = 0;
        const data = arr.map(({photoPath,decrtiption, name, id} )=>{
            if(counter < arrLength){
              counter++;
              return(
                <div className="slider__item" key={id}>
                  {onRenderImg(photoPath, name)}
                  <div className="slider__content">
                      <div className="slider__content__title">{name}</div>
                      <p className="slider__content__text">{decrtiption}</p>
                  </div>
                  <Link to={'/waitingForOwner'}><button className="slider__btn">пустить в дом</button></Link>
                </div>
                )
               
            }else{
                return '';
            }
        })
    
        
        return  (
          <Sliders settings={settings} >
                {data}
          </Sliders>

        );
      
   }




    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
    };

    return(
      <main className="main">
            <Helmet>
                <meta
                  name="description"
                  content='home page of the animal shelter "Good paws"' />
                <title>Добрые лапки</title>
            </Helmet>

            {setContent(process, ()=>renderSlider(animal,6))}
            <Memo/>
            <Event/>

      </main>
    )
  
} 


export default Home;