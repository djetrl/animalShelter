
import { useEffect ,useState, useCallback} from 'react';
import Helmet from "react-helmet";

import useServices from '../../../services/Service';
import setContent from '../../../utils/setContent';
import Modal from '../../modalWindow/modal';
import AnimalForm from './form/animalForm';
import LuckyAnimalForm from './form/luckyAnimalForm';
import EventForm from './form/eventForm';
import KindForm from './form/kindForm';

import './admin.css';

const Admin = ()=>{
  const {getAnimal,getKinds,getLuckAnimal ,getEvents, removeKind,getAnimalAvailabilities,removeAnimal,removeEvent,clearError, process, setProcess}= useServices();
  const [tables, setTables]= useState('Animals');
  const [data, setData] = useState([]);
  const [dataKind, setDataKind] = useState([]);
  const [dataEvent, setDataEvent] = useState([]);
  const [dataAnimal, setDataAnimal] = useState([]);
  const [animalAvailabData, setDataAnimalAvailab] = useState([]);
  const [isOpenStatus , setIsOpenStatus] = useState(false);


  useEffect(()=>{
    renderTableData(tables);
  },[tables,data[data.length]])


    const findKind = (kindsId)=>{
     return dataKind.filter(data =>{
        if(data.id === kindsId ) {
          return data;
        }
      
      })
    }

  
  const renderTableData = useCallback(
    (NameTable)=>{
      switch (NameTable) {
        case 'Animals':
          clearError();
          getAnimalAvailabilities().then(
            res =>setDataAnimalAvailab(res)
          )
          getKinds().then(
            res => setDataKind(res)
          ).then(
            getAnimal()
              .then(onDataLoaded)
            
          ).then(()=>setProcess('confirmed'))

          break;
          case 'LuckyAnimals':
            clearError();
            getAnimal().then(
              res=>setDataAnimal(res)
            )
            getKinds().then(
              res => setDataKind(res)
            ).then(
              getLuckAnimal()
                .then(onDataLoaded)
              
            ).then(()=>setProcess('confirmed'))

  
            break;
            case 'Kinds':break;

            case 'Events':
              getEvents()
              .then(res => setDataEvent(res)).then(()=>setProcess('confirmed'))
              break;
        default:
          alert('error data');
      }
  }, [data[data.length]]
  )

  const onDataLoaded = (data) => {
    setData(data)
 }

const findIndexForData=(data, id, SetFunc)=>{
  const index = data.findIndex( el => el.id === id)
  data.splice(index,1);
  SetFunc([...data]);
}

 const renderTable =  (nameTable)=>{
    switch (nameTable) {
      case 'Animals':
  
            const items =  data.map(({
            admissionDate,
            description,
            height,
            history,
            kindsId,
            name,
            photoPath,
            weight, 
            id,
          }, idKey) => {
              const thisKind = [...findKind(kindsId)]
              return(
              
                <tr key={idKey}>
                    <td>{idKey+1}</td>
                    <td><a href={photoPath} className="link">Ссылка</a></td>
                    <td>{name}</td>
                    <td>
                        <p className="truncate-text--desc">{description}</p>
                    </td>
                    <td>
                        <p className="truncate-text--history">{history}</p>
                    </td>
                    <td>{admissionDate}</td>
                    <td>{weight}</td>
                    <td>{height}</td>
                    <td>{thisKind[0].name}</td>
                    <td><button className="delete" onClick={()=>{removeAnimal(id).then(findIndexForData(data,id, setData))}} >delete</button></td>
                </tr>
              )
          })
          return (
            <table className="entries-list__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>фото</th>
                    <th>имя</th>
                    <th>описание</th>
                    <th>история</th>
                    <th>дата</th>
                    <th>вес</th>
                    <th>рост</th>
                    <th>вид</th>
                    <th>управление</th>
                </tr>
            </thead>
            <tbody>
             {items}        
            </tbody>
        </table>
          );
          case 'LuckyAnimals':
  
            const itemsLuckyAnimals =  data.map(({
            admissionDate,
            description,
            height,
            history,
            kindsId,
            name,
            photoPath,
            weight, 
            id,
            adoptionDate,
            comment
          }, idKey) => {
              const thisKind = [...findKind(kindsId)]
              return(
              
                <tr key={idKey}>
                    <td>{idKey+1}</td>
                    <td><a href={photoPath} className="link">Ссылка</a></td>
                    <td>{name}</td>
                    <td>
                        <p className="truncate-text--desc">{description}</p>
                    </td>
                    <td>
                        <p className="truncate-text--history">{history}</p>
                    </td>
                    <td>
                        <p className="truncate-text--desc">{comment}</p>
                    </td>
                    <td>{admissionDate} - {adoptionDate}</td>
                    <td>{weight}</td>
                    <td>{height}</td>
                    <td>{thisKind[0].name}</td>
                </tr>
              )
          })
          return (
            <table className="entries-list__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>фото</th>
                    <th>имя</th>
                    <th>описание</th>
                    <th>история</th>
                    <th>Комментарии</th>
                    <th>дата</th>
                    <th>вес</th>
                    <th>рост</th>
                    <th>вид</th>
                   
                </tr>
            </thead>
            <tbody>
             {itemsLuckyAnimals}        
            </tbody>
        </table>
          );
  
          case 'Kinds':
  
            const itemsKind =  dataKind.map(({
              id,
              name
          },idKey) => {
              return(
              
                <tr key={idKey}>
                    <td>{idKey}</td>
                    <td>{name}</td>
                    <td><button className="delete" onClick={()=>{removeKind(id).then(findIndexForData(dataKind,id, setDataKind))}} >delete</button></td>
                </tr>
              )
          })
          return (
            <table className="entries-list__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>имя</th>
                    <th>управление</th>
                </tr>
            </thead>
            <tbody>
             {itemsKind}        
            </tbody>
        </table>
          );
  
          case 'Events':
  
            const itemsEvent =  dataEvent.map(({
              id,
             photoPath,
             description,
             link
          },idKey) => {
              return(
              
                <tr key={idKey}>
                    <td>{idKey}</td>
                    <td><a href={photoPath} className="link">Ссылка</a></td>
                    <td><a href={link} className="link">Ссылка</a></td>
                    <td>{description}</td>
                    <td><button className="delete" onClick={()=>{removeEvent(id).then(findIndexForData(dataEvent,id, setDataEvent))}} >delete</button></td>
                </tr>
              )
          })
          return (
            <table className="entries-list__table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>фото</th>
                    <th>ссылка</th>
                    <th>описание</th>
                    <th>управление</th>
                </tr>
            </thead>
            <tbody>
             {itemsEvent}        
            </tbody>
        </table>
          );
   
      default : console.log('ertb');    
    }
  
  }

 


const selectForm = (nameTable)=>{
  switch (nameTable) {
    case 'Animals':
          return (
            <Modal status={isOpenStatus} setIsOpenStatus={setIsOpenStatus} >
               <AnimalForm dataKind={dataKind} animalAvailabData={animalAvailabData}   setIsOpenStatus={ setIsOpenStatus} data={data} setData={setData} />
            </Modal>
          )
       
        case 'LuckyAnimals':

          return (
            <Modal status={isOpenStatus} setIsOpenStatus={setIsOpenStatus}  >
                <LuckyAnimalForm dataAnimal={dataAnimal}  setIsOpenStatus={ setIsOpenStatus} data={data} setData={setData}/>
           </Modal>
          )

        case 'Kinds':
          return(
            <Modal status={isOpenStatus} setIsOpenStatus={setIsOpenStatus} style={{ margin: '25% auto'}} >
                <KindForm  setIsOpenStatus={ setIsOpenStatus}  data={dataKind}  setData = {setDataKind} />
            </Modal>
          )
          
     

        case 'Events':

         return (
            <Modal status={isOpenStatus} setIsOpenStatus={setIsOpenStatus} >
                <EventForm  setIsOpenStatus={ setIsOpenStatus}  data={dataEvent}  setData = {setDataEvent}/>
           </Modal>
          )

 
    default : console.log('ertb');    
  
}
}


  return(

    <main className="main">
          <Helmet>
    <meta
      name="description"
      content='home page of the animal shelter "Good paws"' />
    <title>Админ панель</title>
</Helmet>
    <section className="control">
        <div className="container">
            <div className="control__inner">
                <div className="control__sort">
                    <form className="control__form">
                        <select placeholder="Страница" className="custom-select control__select" name="page" id="page-select" 
                        value={tables}
                        onChange={e=>setTables(e.target.value)}>
                            <option value="Animals">Animals</option>
                            <option value="Events"> Events </option>
                            <option value="Kinds">Kinds</option>
                            <option value="LuckyAnimals">LuckyAnimals</option>
                        </select>
                    </form>
                </div>
                <div className="control__title">
                    <h1 className="title">Управление записями</h1>
                </div>
                <div className="control__btn">
                    <button data-modal className="btn control__btn--btn" onClick={()=>{setIsOpenStatus(true)}}>Добавить запись</button>
                </div>
            </div>
        </div>
    </section>
    <section className="entries-list">
        <div className="container">
        { setContent(process,()=>renderTable(tables))}    
        </div>
        {selectForm(tables)}
    </section>
</main>
  )
}

export default Admin;