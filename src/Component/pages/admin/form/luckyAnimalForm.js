
import { useState, useEffect } from "react";
import openNotification from '../../../../utils/openNotification'
import useServices from '../../../../services/Service';



const LuckyAnimalForm = (props)=>{

  const {postLuckyAnimal}= useServices();
  const [photoForm , setPhotoForm] = useState('');
  const [commentForm , setCommentForm] = useState('');
  const [dateForm , setDateForm] = useState('');
  const [animalIdForm , setAnimalIdForm] = useState('');
 
    const renderAnimalForm = (data)=>{
      const item = data.map(({name,id})=>{
          return <option key={id} value={id}>{name}</option>
      })
      return item
  }
  function getAllOrdersIndexes( indexAnimal) {
    var indexes = [];
    for(let i = 0; i <  props.dataOrders.length; i++){
      if ( props.dataOrders[i].animalId ===  props.dataAnimal[indexAnimal].id){
        indexes.push(i);
      }
    }
    return indexes;
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

  const submit = (e)=>{
    e.preventDefault()


    postLuckyAnimal(    {
    photoBase64:photoForm,
    comment:commentForm,
    adoptionDate: dateForm,
    animalId: animalIdForm,
  }).then((res)=>{
    const index = props.dataAnimal.findIndex( el => el.id === animalIdForm);
    const findOrderIndex = getAllOrdersIndexes(index);
    findOrderIndex.map(index =>{
      props.onRemoveOrders(props.dataOrders[index].id)
    })
    props.setData(
        [...props.data, {
            admissionDate: props.dataAnimal[index].admissionDate,
            adoptionDate:dateForm.split('T')[0],
            comment:commentForm,
            description:props.dataAnimal[index].description,
            height:props.dataAnimal[index].height,
            history: props.dataAnimal[index].history,
            id: res,
            kindsId: props.dataAnimal[index].kindsId,
            name: props.dataAnimal[index].name,
            photoPath: photoForm,
            weight: props.dataAnimal[index].weight,
        }]
    )
    setPhotoForm("")
    setCommentForm("")
    setDateForm("")
    setAnimalIdForm("")
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
            <label htmlFor="date" className="adding-entry__item__title">дата</label>
            <input  type="datetime-local"  name="date" id="date" value={dateForm} onChange={e=>setDateForm(e.target.value)} />
        </div>
    </div>
    <div className="adding-entry__item"  style={{'flexDirection':'inherit'}} >

        <div className="adding-entry--flex">
            <label htmlFor="kind" className="adding-entry__item__title">Животное</label>
            
            <select  className="custom-select control__select control__select--form" name="animalAvailabilities" id="animalAvailabilities" value={animalIdForm} onChange={e=>setAnimalIdForm(e.target.value)} >
                <option ></option>
                {renderAnimalForm(props.dataAnimal)}
            </select>

        </div>

    </div>

    <div className="adding-entry__item">
        <label htmlFor="desc" className="adding-entry__item__title">Комментарий</label>
        <textarea name="desc" id="desc" cols="5" rows="5" value={commentForm} onChange={e=>setCommentForm(e.target.value)}></textarea>
    </div>
    <div className="add__btn">
        <button type="submit" className="add__btn--btn btn">Добавить запись</button>
    </div>
</form>
  )


}


export default LuckyAnimalForm;