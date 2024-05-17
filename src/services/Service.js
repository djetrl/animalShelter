
import { useHttp } from "../Hooks/http.hook";


const useServices = ()=> {
    const {request, clearError, process, setProcess} = useHttp();
    const  _addres = 'http://217.71.129.139:4112/';

  const postResourse = async(url, data)=>{
    return request(url,"POST",JSON.stringify(data), {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
    })
   }
 


  const getAnimal = async ()=>{
    const res = await  request(`${_addres}api/Animals`,);
     return res.animals.map(_transformAnimal);

  }
  
  const getLuckAnimal = async ()=>{
    const res = await  request(`${_addres}api/LuckyAnimals`,);
     return res.luckyAnimals.map(_transformLuckAnimal);
   
  }
  const removeAnimal = async (id)=>{
   return fetch(`${_addres}api/Animals/${id}`, {
      method: 'DELETE',
      headers: {'accept': 'application/json'}
    })

  }
  const removeEvent = async (id)=>{
    return fetch(`${_addres}api/Events/${id}`, {
       method: 'DELETE',
       headers: {'accept': 'application/json'}
     })
 
   }
   const removeKind = async (id)=>{
    return fetch(`${_addres}api/Kinds/${id}`, {
       method: 'DELETE',
       headers: {'accept': 'application/json'}
     })
 
   }
  const getKinds = async ()=>{
    const res = await request(`${_addres}api/Kinds`);
    return res.kinds;
  }
  const getEvents = async ()=>{
    const res = await request(`${_addres}api/Events`);
    return res.events.map(_transformEvents);
  }
  
  const getAnimalAvailabilities = async ()=>{
    const res = await request(`${_addres}api/AnimalAvailabilities`);  
    return res.animalAvailabilities;
  }
  const postSubcrube = async (data)=>{
    return await postResourse(`${_addres}api/subscriptions`, data );
  } 

  const postAnimal = async (data)=>{
    return await postResourse(`${_addres}api/Animals`, data );
  } 
  const postLuckyAnimal = async (data)=>{
    return await postResourse(`${_addres}api/LuckyAnimals`, data );
  } 
  const postEvent = async (data)=>{
    return await postResourse(`${_addres}api/Events`, data );
  } 
  const postKind = async (data)=>{
    return await postResourse(`${_addres}api/Kinds`, data );
  } 
  const getOrders = async ()=>{
    const res = await  request(`${_addres}api/Orders`,);
     return res.orders.map(_transformOrder);
   
  }
  const postOrders = async (data)=>{
    return await postResourse(`${_addres}api/Orders`, data );
  } 
  const removeOrders = async (id)=>{
    return fetch(`${_addres}api/Orders/${id}`, {
       method: 'DELETE',
       headers: {'accept': 'application/json'}
     })
 
   }
 const _transformAnimal =(animal)=>{
  return{
    id:animal.id,
    name: animal.name,
    photoPath: _addres + animal.photoUrl,
    description: animal.description,
    admissionDate: animal.admissionDate.split('T')[0],
    history:animal.history,
    kindsId: animal.kindId,
    height: animal.height + " см",
    weight: animal.weight + ' кг'
  }
 }
 const _transformOrder =(order)=>{
  return{
    id:order.id,
    name: order.name,
    phone: order.phone,
    email:  order.email,
    plannedDate:  order.plannedDate,
    comment:  order.comment,
    animalId:  order.animalId
  }
 }
 const _transformLuckAnimal =(animal)=>{
  return{
  
    id:animal.id,
    comment: animal.comment,
    name: animal.animal.name,
    photoPath: _addres + animal.photoUrl,
    oldPhotoPath: _addres + animal.animal.photoUrl,
    oldId:animal.animal.id,
    description: animal.animal.description,
    admissionDate: animal.animal.admissionDate.split('T')[0],
    adoptionDate: animal.adoptionDate.split('T')[0],
    history:animal.animal.history,
    kindsId: animal.animal.kindId,
    height: animal.animal.height + " см",
    weight: animal.animal.weight + ' кг'
  }
 }
 const _transformEvents =(event)=>{
  return{
    id:event.id,
    photoPath: _addres + event.photoUrl,
    description: event.description,
    link: event.link
  }
 }

 return {
  clearError,
  process,
  setProcess,
  getAnimal,
  getEvents,
  getKinds,
  getLuckAnimal,
  getAnimalAvailabilities,
  postSubcrube,
  postAnimal,
  postLuckyAnimal,
  postEvent,
  postKind,
  getOrders,
  postOrders,
  removeOrders,
  removeAnimal,
  removeEvent,
  removeKind
};
 
}


export default useServices;