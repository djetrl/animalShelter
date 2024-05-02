import attention from '../img/icons/attention.svg'
import home from '../img/icons/home.svg'
import phone from '../img/icons/phone.svg'

const Memo = ()=>{


  return(
        <section className="memo">
        <div className="container">
            <h2 className="memo__title">“Я нашёл животное, нуждающееся в помощи”</h2>
            <p className="memo__text">В своём стремлении улучшить пользовательский опыт мы упускаем, что акционеры крупнейших компаний подвергнуты целой серии независимых исследований. Учитывая ключевые сценарии поведения, понимание сути ресурсосберегающих технологий напрямую зависит от поэтапного и последовательного развития общества.</p>
            <div className="memo__block">
                <div className="memo__block__item">
                    <img src={attention} alt="attention" className="memo__block__img" />
                    <p className="memo__block__text">Равным образом, реализация намеченных плановых заданий </p>
                </div>
                <div className="memo__block__item">
                    <img src={home} alt="home" className="memo__block__img" />
                    <p className="memo__block__text">Равным образом, реализация намеченных плановых заданий </p>
                </div>
                <div className="memo__block__item">
                    <img src={phone} alt="phone" className="memo__block__img" />
                    <p className="memo__block__text">Равным образом, реализация намеченных плановых заданий </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Memo;