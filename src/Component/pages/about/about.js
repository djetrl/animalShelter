import Helmet from "react-helmet";

import './aboutUs.css';
import dogImg from "../../img/aboutUs/services/dog.jpg";

import img1 from "../../img/aboutUs/services/1.png";
import img2 from "../../img/aboutUs/services/2.png";
import img3 from "../../img/aboutUs/services/3.png";
import img4 from "../../img/aboutUs/services/4.png";

import imgAbout from "../../img/aboutUs/about.jpg";

import imgPart1 from "../../img/aboutUs/partners/1.jpg";
import imgPart2 from "../../img/aboutUs/partners/2.jpg";
import imgPart3 from "../../img/aboutUs/partners/3.jpg";



const About = ()=>{
  return(
        <main className="main">
          <Helmet>
              <meta
                name="description"
                content='about us page of the animal shelter "Good paws"' />
              <title>О нас</title>
          </Helmet>
          <section className="services">
                <div className="container">
                    <div className="services__inner">
                        <div className="services__photo">
                             <img src={dogImg} alt="" className="services__photo--img" />
                        </div>
                        <div className="services__content">
                            <h1 className="services__title">Чем мы занимаемся</h1>
                            <ul className="services__list">
                                <li className="services__item">
                                    <p className="services__item--text">Временный кров</p>
                                    <img src={ img1} alt="" className="services__item--img"/>
                                </li>
                                <li className="services__item">
                                    <p className="services__item--text">Медицинская помощь</p>
                                    <img src={ img2} alt="" className="services__item--img"/>
                                </li>
                                <li className="services__item">
                                    <p className="services__item--text">Услуги грумера</p>
                                    <img src={ img3} alt="" className="services__item--img"/>
                                </li>
                                <li className="services__item">
                                    <p className="services__item--text">Поиск хозяина</p>
                                    <img src={ img4} alt="" className="services__item--img"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <h2 className="about__title title">О проекте</h2>
                    <div className="about__content">
                        <div className="about__text">
                            <p className="about__text--paragraph">«Добрые лапки» – это уникальный проект, который помогает людям и питомцам из приютов встретиться и стать друзьями на всю жизнь.</p>
                            <p className="about__text--paragraph">Приют построен в 2018 году некоммерческой организацией “Добрые лапки”. </p>
                            <p className="about__text--paragraph">Наш главный отдел находится в городе Новосибирске по адресу пл. Карла Маркса 69</p>
                        </div>
                        <div className="about__img">
                            <img src={imgAbout} alt="" className="about__img--img"/>
                        </div>
                    </div>
                </div>

            </section>
            <section className="map">
            <div className="container">
              <h2 className="map__title title">Мы всегда готовы помочь безвозмездно</h2>
              <div className="map__content">
                  <iframe className="map__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A2783c03e594e8f8b3cb78d1abe56dafbd5f8c07c000615d9b2224217696f68c5&amp;source=constructor"  frameBorder="0"></iframe>
                <div className="map__contacts">
                      <p className="map__contacts__text">
                      Вы всегда можете нам позвонить или написать:<br/>
                      Тел: 8 800 555-35-35<br/>
                      Mail: dobrielapki@mail.ru
                        </p>
                        <p className="map__contacts__text">Часы работы: 8:00 - 23:00 без выходных</p>
                      
                    </div>
                </div>
            </div>
            </section>
            <section className="partners">
                <h2 className="partners__title title">Партнеры проекта</h2>
                <div className="partners__content">
                    <img src={imgPart1} alt="" className="partners__partner"/>
                    <img src={imgPart2} alt="" className="partners__partner"/>
                    <img src={imgPart3} alt="" className="partners__partner"/>
                </div>
            </section>
        </main>


        
  )
}

export default About;