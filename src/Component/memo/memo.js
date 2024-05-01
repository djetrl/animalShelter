import attention from '../img/icons/attention.svg'
import home from '../img/icons/home.svg'
import phone from '../img/icons/phone.svg'

const Memo = ()=>{


  return(
        <section className="memo">
        <div className="container">
            <h2 className="memo__title">“Я нашёл животное, нуждающееся в помощи”</h2>
            <p className="memo__text">Lorem ipsum dolor sit amet consectetur. Vivamus eget scelerisque vestibulum vel ut velit ultrices vestibulum. Sed eu sit lacinia aenean amet a arcu magna. Felis tellus consequat id ipsum in lectus pretium consequat feugiat. Eget nisi pellentesque tellus velit commodo luctus mauris egestas orci.</p>
            <div className="memo__block">
                <div className="memo__block__item">
                    <img src={attention} alt="attention" className="memo__block__img" />
                    <p className="memo__block__text">Lorem ipsum dolor sit amet consectetur. Non id ut orci ut. Odio sociis </p>
                </div>
                <div className="memo__block__item">
                    <img src={home} alt="home" className="memo__block__img" />
                    <p className="memo__block__text">Lorem ipsum dolor sit amet consectetur. Non id ut orci ut. Odio sociis </p>
                </div>
                <div className="memo__block__item">
                    <img src={phone} alt="phone" className="memo__block__img" />
                    <p className="memo__block__text">Lorem ipsum dolor sit amet consectetur. Non id ut orci ut. Odio sociis </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Memo;