

import photoNotFound from '../img/main/photoNotFound.png'
const animalListForLuckOne = (data, func, ref)=>{
  const {photoPath, history,name, admissionDate,id,comment,adoptionDate, oldPhotoPath} = data;
;
  const onRenderImg = (photoPathLocal, oldPhotoPathLocal) =>{
    if(photoPathLocal.replace('http://217.71.129.139:4112/', '') !== ''){
      return <img src={photoPath} alt={name} className="card__front__img"/>
    }else if (oldPhotoPath.replace('http://217.71.129.139:4112/', '') !== ''){
      return <img src={oldPhotoPathLocal} alt={name} className="card__front__img"/>
    }else{
      return <img src={photoNotFound} alt={name} className="card__front__img"/>
    }
  }
  return(


          
           <div className="cards__card "   key={id}
           ref={el => ref[id] = el}>
              <div className="card__front">
                  {onRenderImg(photoPath, oldPhotoPath)}
                  <div className="card__front__content">
                      <h3 className="card__front__title card__title">{name}</h3>
                      <button className="card__btn card__front__btn" onClick={()=>{func(id)}}>Узнать историю</button>
                  </div>
              </div>
              <div className="card__back">
                  <h3 className="card__back__title card__title">{name}</h3>
                  <p className="card__back__desc">{comment}</p>
                  <p className="card__back__desc card__back__desc--history">{history}</p>
                  <div className="card__back__data">
                      <p className="card__back__data--text">Попала к нам</p>
                      <p className="card__back__data--number">{ admissionDate}</p>
                  </div>
                  <div className="card__back__data">
                      <p className="card__back__data--text">Нашла хозяина</p>
                      <p className="card__back__data--number">{adoptionDate}</p>
                  </div>
                  <button className="card__btn card__back__btn" onClick={()=>{func(id)}} >Назад к фото</button>
              </div>
       </div>
  )
}


export default animalListForLuckOne;