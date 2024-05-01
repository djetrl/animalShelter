



const animalListForWaitingForOwner = (data, func, ref , setIsOpenStatus, isOpenStatus)=>{
  const {photoPath,decrtiption, history,name, height,weight, admissionDate,id,} = data;

  return(

    <div className="cards__card "
        key={id}
        ref={el => ref[id] = el}>
      <div className="card__front">
        <img src={photoPath} alt="" className="card__front__img"  />
        <div className="card__front__content">
          <h3 className="card__front__title card__title">{name}</h3>
          <button className="card__btn card__front__btn" onClick={()=>{func(id)}}>Узнать поближе</button>
        </div>
      </div>
      <div className="card__back">
        <h3 className="card__back__title card__title">{name}</h3>
        <p className="card__back__desc">{decrtiption}</p>
        <p className="card__back__desc cardbackdesc--history">{history}</p>
        <div className="card__back__data">
          <p className="card__back__data--text">Попала к нам</p>
          <p className="card__back__data--number">{admissionDate}</p>
        </div>
        <div className="card__back__data">
          <p className="card__back__data--text">Рост в холке</p>
          <p className="card__back__data--number">{ height}</p>
        </div>
        <div className="card__back__data">
          <p className="card__back__data--text">Сейчас весит</p>
          <p className="card__back__data--number">{weight}</p>
        </div>
        <button className="card__btn card__front__btn" onClick={()=>{ setIsOpenStatus(!isOpenStatus)}}>Пустить в дом</button>
      </div>
    </div>
  )
}


export default animalListForWaitingForOwner;