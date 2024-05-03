import attention from '../img/icons/attention.svg'
import home from '../img/icons/home.svg'
import phone from '../img/icons/phone.svg'

const Memo = ()=>{


  return(
        <section className="memo">
        <div className="container">
            <h2 className="memo__title">“Я нашёл животное, нуждающееся в помощи”</h2>
            <p className="memo__text">Если вы нашли питомца, позвонили в приют и у вас его забрали — это не означает, что вы его спасли. Это животное будут спасать сотрудники, волонтёры и неравнодушные подписчики приюта:</p>
            <div className="memo__block">
                <div className="memo__block__item">
                    <img src={attention} alt="attention" className="memo__block__img" />
                    <p className="memo__block__text">Не перекладывайте ответственность на других людей.</p>
                </div>
                <div className="memo__block__item">
                    <img src={home} alt="home" className="memo__block__img" />
                    <p className="memo__block__text">собирать деньги, лечить и искать ему дом.</p>
                </div>
                <div className="memo__block__item">
                    <img src={phone} alt="phone" className="memo__block__img" />
                    <p className="memo__block__text"> Постарайтесь и в дальнейшем участвовать в судьбе собаки или кошки, помогать приюту и другим животным!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Memo;