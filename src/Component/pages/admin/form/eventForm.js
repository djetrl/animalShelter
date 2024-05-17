import { useState } from "react";
import useServices from '../../../../services/Service';
import openNotification from '../../../../utils/openNotification'
const EventForm = (props)=>{
  const {postEvent}= useServices();
  const [photoForm , setPhotoForm] = useState('');
  const [descForm , setDescForm] = useState('');
  const [linkForm , setLinkForm] = useState('');
 
    const renderAnimalForm = (data)=>{
      const item = data.map(({name,id})=>{
          return <option key={id} value={id}>{name}</option>
      })
      return item
  }
  const uploadImage = async (e)=>{
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    console.log(base64);
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
  const submit = (e)=>{
    e.preventDefault()
    postEvent(    {
    photoBase64:photoForm,
    description: descForm ,
    link:linkForm,
  }).then((res)=>{
    props.setData(
        [...props.data, {
          id:res,
          photoPath:photoForm,
          description:descForm,
          link:linkForm
        }]
    )
    setPhotoForm('')
    setDescForm('')
    setLinkForm('')
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
        <h3 className="adding-entry__item__title">фоТО</h3>
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
    <div className="adding-entry__item">
        <div className="adding-entry--flex">
            <label htmlFor="link" className="adding-entry__item__title">Ссылка на ивент</label>
            <input  type="text"  name="link" id="link" value={linkForm} onChange={e=>setLinkForm(e.target.value)} />
        </div>
    </div>
    <div className="adding-entry__item">
        <label htmlFor="desc" className="adding-entry__item__title">Комментарий</label>
        <textarea name="desc" id="desc" cols="5" rows="5" value={descForm} onChange={e=>setDescForm(e.target.value)}></textarea>
    </div>
    <div className="add__btn">
        <button type="submit" className="add__btn--btn btn">Добавить запись</button>
    </div>
</form>
  )
}
export default EventForm;