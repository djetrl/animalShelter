import Helmet from "react-helmet";
import { useState ,useEffect} from 'react';

import animalListForLuckOne from "../../animalListForLuckOnes/animalListForLuckOnes";
import useServices from "../../../services/Service";
import AnimalList from '../../AnimalList/AnimalList';
import useFilterData from '../../../Hooks/useFilterData';
import setContent from "../../../utils/setContent";

import '../waitingForOwner/waitingForOwner.css';


const LuckyOnes = ()=>{

  const [selectKind, setSelectKind ] = useState("0");
  const [searchInput, setSearchInput ] = useState('');
  const [data , setData] = useState([]);
  const [kind , setKind] = useState([]);
  const {getLuckAnimal, getKinds, clearError, process, setProcess}= useServices();

  useEffect(()=>{
    updateAnimal();

   },[])

    const updateAnimal = () => {
        clearError();
        getKinds().
        then(onKindlLoaded)
        getLuckAnimal()
            .then(onAnimalLoaded)
            .then(()=>setProcess('confirmed'));
    }

  const onAnimalLoaded = (data) => {
      setData(data)
   }

   const onKindlLoaded = (data) => {
    setKind(data)
 }


  const onKindChange = (event) => {
    setSelectKind(event.target.value);
  }

  const renderKinds = (data)=>{
      const kind = data.map(data=>{
        return <option key={data.id} value={data.id}>{data.name}</option>
      })
      return kind;
  }
 const visibleData = useFilterData(data ,searchInput, selectKind )
const viewList = (data, funcRenderItem)=>{
  return  <AnimalList data={data}  funcRenderItem={funcRenderItem} />
}

  return(
    <main className="main">
          <Helmet>
              <meta
                name="description"
                content='page on which you can take animals to your home in the shelter "Good paws"' />
              <title>Счасливчики</title>
          </Helmet>
    <section className="search-and-sort">
      <div className="container">
        <div className="search-and-sort__inner">
          <div className="search-and-sort__search">
            <form className="search-and-sortsearchform" action="" method="get">
              <input className="search-and-sortsearchinput" 
                     name="nickname"
                     placeholder="Кличка"
                     type="search" 
                     value={searchInput}
                     onChange={(e)=>{setSearchInput(e.target.value)}}/>
              <button className="search-and-sortsearchbtn" type="submit"></button>
            </form>
          </div>
          <div className="search-and-sort__title">
            <h1 className="search-and-sort__title-text title">Поиск и сортировка</h1>
          </div>
          <div className="search-and-sort__sort">
            <form className="search-and-sortsortform">
              <select placeholder="Вид животного"
               className="custom-select search-and-sortsortselect"
                name="type-of-animal" 
                id="type-select" 
                value={selectKind}
                onChange={onKindChange}>
                <option className="selection" value={"0"}>Все виды</option>
                {renderKinds(kind)}
              </select>
            </form>
          </div>
        </div>
      </div>
    </section>
    {setContent(process, ()=>viewList(visibleData, animalListForLuckOne))}
  </main>
  )
}


export default LuckyOnes;