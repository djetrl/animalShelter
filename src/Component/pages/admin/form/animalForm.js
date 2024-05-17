import { useState } from "react";
import openNotification from '../../../../utils/openNotification'
import useServices from '../../../../services/Service';
const AnimalForm = (props)=>{
  const {postAnimal}= useServices();
  const [photoForm , setPhotoForm] = useState('');
  const [nameForm , setNameForm] = useState('');
  const [dateForm , setDateForm] = useState('');
  const [weightForm , setWeightForm] = useState();
  const [heightForm , setHeightForm] = useState();
  const [KindForm , setKindForm] = useState('');
  const [historyForm , setHistoryForm] = useState('');
  const [descForm , setDescForm] = useState('');
  const [animalAvailabilitycForm , setAnimalAvailabilityForm] = useState('');
    const renderKindsForm = (data)=>{
      const item = data.map(({name,id})=>{
          return <option key={id} value={id}>{name}</option>
      })
      return item
  }
  const uploadImage = async (e)=>{
    const file = e.target.files[0]
    const base64 = await convertBase64(file)

    setPhotoForm(base64);
  }
  const convertBase64 = (file) =>{
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
  
        fileReader.onload = ()=>{
          resolve(fileReader.result)
        }
  
        fileReader.onerror =(error)=>{
          reject(error)
        }
    })
  }
  console.log(props.setIsOpenStatus);
  const submit = (e)=>{
    e.preventDefault()
      postAnimal(
    {
      photoBase64:photoForm,
      name:nameForm,
      description: descForm ,
      descriptionExtra: descForm,
      history: historyForm,
      admissionDate: dateForm,
      height: heightForm,
      weight: weightForm,
      kindId: KindForm,
      animalAvailabilityId: animalAvailabilitycForm,
    }).then((res)=>{
      
      props.setData(
          [...props.data, {
            admissionDate: dateForm.split('T')[0],
            description:descForm,
            height: heightForm,
            history:historyForm,
            id: res,
            kindsId: KindForm,
            name: nameForm,
            photoPath: photoForm,
            weight: weightForm,
          }]
      )
      setPhotoForm('')
      setNameForm('')
      setDateForm('')
      setWeightForm('')
      setHeightForm('')
      setKindForm('')
      setHistoryForm('')
      setDescForm('')
      setAnimalAvailabilityForm('')
      props.setIsOpenStatus(false);
      openNotification({
        title: "Отлично!",
        text: "Запрос успешно отправлен.",
        type: "success"
      });
    })
  }
  return(
    <form action="" method="post" className="adding-entry__form" onSubmit={e=>submit(e)}>
    <div className="adding-entry__item">
        <h3 className="adding-entry__item__title">фото</h3>
        <div className="photo">
            <img src={photoForm} className='photo-form' alt=""/>
        </div>
        <label htmlFor="photo"  className="adding-entry__item__btn btn">
            <span>Выберите файл</span>
            <input type="file"   className='input-file-photo-form' id="photo" name="photo" value={''}  onChange={(e)=>{
              uploadImage(e);
             
            }}/>
        </label>
    </div>
    <div className="adding-entry__item adding-entry--flex">
        <label htmlFor="name" className="adding-entry__item__title">имя</label>
        <input type="text" name="name" id="name" value={nameForm} onChange={e=>setNameForm(e.target.value)}/>
    </div>
    <div className="adding-entry__item">
        <div className="adding-entry--flex">
            <label htmlFor="date" className="adding-entry__item__title">дата</label>
            <input  type="datetime-local"  name="date" id="date" value={dateForm} onChange={e=>setDateForm(e.target.value)} />
        </div>
        <div className="adding-entry--flex">
            <label htmlFor="weight" className="adding-entry__item__title">вес</label>
            <input type="number" name="weight" min='1' id="weight"  value={weightForm}  onChange={e=>setWeightForm(+e.target.value)} />
        </div>
        <div className="adding-entry--flex">
            <label htmlFor="height" className="adding-entry__item__title">рост</label>
            <input type="number" name="height"  min='1' id="height" value={heightForm}  onChange={e=>setHeightForm(+e.target.value)}   />
        </div>
        <div className="adding-entry--flex">
            <label htmlFor="kind" className="adding-entry__item__title">вид</label>
            
            <select placeholder="" className="custom-select control__select control__select--form"  
              name="kind" id="kind" value={KindForm} onChange={e=>setKindForm(e.target.value)} >
              <option ></option>
              {renderKindsForm(props.dataKind)}
            </select>
  
        </div>
        <div className="adding-entry--flex">
            <label htmlFor="kind" className="adding-entry__item__title">Доступность</label>
            
            <select className="custom-select control__select control__select--form"   name="animalAvailabilities" id="animalAvailabilities" value={animalAvailabilitycForm} onChange={e=>setAnimalAvailabilityForm(e.target.value)} >
              <option ></option>
              {renderKindsForm(props.animalAvailabData)}
            </select>
  
        </div>
    </div>
    <div className="adding-entry__item">
        <label htmlFor="history" className="adding-entry__item__title">история</label>
        <textarea name="history" id="history" cols="5" rows="5" value={historyForm} onChange={e=>setHistoryForm(e.target.value)} ></textarea>
    </div>
    <div className="adding-entry__item">
        <label htmlFor="desc" className="adding-entry__item__title">описание</label>
        <textarea name="desc" id="desc" cols="5" rows="5" value={descForm} onChange={e=>setDescForm(e.target.value)}></textarea>
    </div>
    <div className="add__btn">
        <button type="submit" className="add__btn--btn btn">Добавить запись</button>
    </div>
</form>
  )
}
export default AnimalForm;