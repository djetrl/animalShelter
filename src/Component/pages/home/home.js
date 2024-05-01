import Helmet from "react-helmet";
import { useState, useEffect } from "react";
import Sliders from '../../slider/slider'
import Memo from "../../memo/memo";
import Event from "../../event/event";
import useServices from "../../../services/Service";
import setContent from "../../../utils/setContent";

const Home = ()=>{
    const [animal, setAnimal] = useState([]);
    const {getAnimal, clearError, process, setProcess}= useServices();


  useEffect(()=>{
    updateAnimal();
   },[])

 

  const updateAnimal = () => {
    clearError();
    getAnimal()
      .then(onAnimalLoaded)
      .then(()=>setProcess('confirmed'));
  }

  const onAnimalLoaded = (data) => {
    setAnimal([...data] )
  }



 
  const renderSlider = (arr, arrLength)=>{
        let counter = 0;
        const data = arr.map(({photoPath,decrtiption, name, id} )=>{
            if(counter < arrLength){
              counter++;
              return(
                <div className="slider__item" key={id}>
                  <img src={photoPath} alt={name} className="slider__img" />
                  <div className="slider__content">
                      <div className="slider__content__title">{name}</div>
                      <p className="slider__content__text">{decrtiption}</p>
                  </div>
                  <button className="slider__btn">пустить в дом</button>
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