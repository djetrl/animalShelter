



const Modal = (props)=>{
   const hadleStatusToggle = ()=>{
      props.setIsOpenStatus(false);
    }
  return(
          <div className={`adding-entry modal ${ !props.status  ? 'none': ''}`}>
            <div className="adding-entry__inner" style={props.style}>
                <div className="adding-entry__header">
                    <div className="adding-entry__title">Добавление записи</div>
                    <div className="adding-entry__cross" onClick={hadleStatusToggle}>
                        <button className="cross__btn" ></button>
                    </div>
                </div>
                <div className="adding-entry__main">
                   {props.children}
                </div>
            </div>
        </div>
  )
}


export default Modal;