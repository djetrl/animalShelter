
import Helmet from "react-helmet";
import { useFormik} from 'formik';
import  * as Yup from 'yup';

import './helpToShelter.css';

import imgCreditCard from '../../img/icons/creditCard.png';
import imgSponsors1 from '../../img/helpToShelter/sponsors_1.jpg';
import imgSponsors2 from '../../img/helpToShelter/sponsors_2.jpg';
import imgPartners1 from '../../img/aboutUs/partners/2.jpg';
import imgPartners2 from '../../img/aboutUs/partners/3.jpg';

import { useState, useEffect} from 'react';
import useRefInputHelp from '../../../Hooks/useRefInputHelp';



const HelpToShelter = () =>{


    const [checkBoxChecked, setCheckBoxChecked ] = useState(false);
    const [allDonatedMoney, setAllDonatedMoney] = useState(45000);
    const [maxMoney, setMaxMoney] = useState(100000);
    const [percentLine, setPercentLine] = useState();

    const CardCVVRef = useRefInputHelp();
    const CardRef = useRefInputHelp();
    const NameRef = useRefInputHelp();
    const NameCardRef = useRefInputHelp();  
    const amountRef = useRefInputHelp();


  

    const checkBoxStyle = checkBoxChecked ? 'CheckBoxActive': null;

    const AddSummMoney = (sum)=>{
      if(allDonatedMoney >= maxMoney){
        setMaxMoney(maxMoney + sum)
      }else{
        setAllDonatedMoney(  allDonatedMoney + sum)
 
      }
    
    }
    const formik = useFormik({
      initialValues:{
        name:'',
        cardNumber:'',
        cardCVC:'',
        nickname:'',
        anonymity:false,
        sum:'',
      },  
      validationSchema: Yup.object({
        name: Yup.string().min(5).max(30).required(),
        cardNumber: Yup.number().positive().required(),
        cardCVC: Yup.number().positive().required(),
        nickname: Yup.string().min(2).required(),
        sum:Yup.number().min(100).required()
        
      }),

      onSubmit: value=>console.log(AddSummMoney(value.sum))
    });
    useEffect(()=>{
      const percent = +allDonatedMoney / +maxMoney;
      if(percent <=  1){  
        setPercentLine(  (300 * percent) + "px");
      }else{ 
        setPercentLine(  (300 * 1) + "px");
      }


    }, [allDonatedMoney])

  return(
          <main className="main">
           <Helmet>
              <meta
                name="description"
                content='page where you can help the shelter "Good paws"' />
              <title>Помощь приюту</title>
          </Helmet>
          <section className="pay-form">
              <div className="container">
                  <div className="pay-form__inner">
                      <div className="pay-form__requisites">
                          <h3 className="pay-form__requisites__title">Помочь приюту</h3>
                          <form action="" method="post" className="pay-form__requisites__form" onSubmit={formik.handleSubmit}>

                              <div 
                              className={`pay-form__requisites__form__item pay-form__requisites__form--name  ${formik.errors.name && formik.touched.name? ' pay-form__requisites__form__item_error--focus': ''}`}
                              onBlur={formik.handleBlur}>
                                  <label htmlFor="name">Имя на карте</label>
                                  <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 

                                        ref={ NameCardRef.inputRef} 
                                        className={ `inputForHelpToShelter ${formik.errors.name && formik.touched.name? 'error':null}`}
                                        {...formik.getFieldProps('name')} />
                              </div>

                              <div className="pay-form__requisites__form--card">
                                  <div className={`pay-form__requisites__form__item pay-form__requisites__form__item--card-number ${formik.errors.cardNumber && formik.touched.cardNumber? ' pay-form__requisites__form__item_error--focus': ''}` }>
                                      <label htmlFor="cardNumber">
                                          <img className="pay-form__requisites__form__img" src={imgCreditCard} alt=""/>
                                          Номер карты
                                      </label>
                                      <input
                                             type="text" 
                                             name="cardNumber"
                                             id="cardNumber" 
                                             required size="18"
                                             minLength="16"
                                             ref={CardRef.inputRef}
                                             className={ `inputForHelpToShelter ${formik.errors.cardNumber && formik.touched.cardNumber ? 'error':null}`}
                                             maxLength="16"
                                             {...formik.getFieldProps('cardNumber')}/>
                                  </div>

                                  <div className={`pay-form__requisites__form__item pay-form__requisites__form__item--cvc ${formik.errors.cardCVC && formik.touched.cardCVC? ' pay-form__requisites__form__item_error--focus': ''}`}>
                                      <label htmlFor="cardCVC">CVC/CVV</label>
                                      <input type="text"
                                            name="cardCVC"
                                            id="cardCVC" 
                                            required 
                                            minLength="3"
                                            className={ `inputForHelpToShelter ${formik.errors.cardCVC && formik.touched.cardCVC? 'error':null}`}
                                            maxLength="3"
                                            ref={CardCVVRef.inputRef}  
                                            {...formik.getFieldProps('cardCVC')}/>
                                  </div>

                              </div>
                              <div className="pay-form__requisites__form--nickname">
                                  <div className={`pay-form__requisites__form__item pay-form__requisites__form__item--nickname ${formik.errors.nickname && formik.touched.nickname ? ' pay-form__requisites__form__item_error--focus': ''}`}>
                                      <label htmlFor="nickname">Ваше имя \ Псевдоним</label>
                                      <input type="text" 
                                             name="nickname"  
                                             ref={NameRef.inputRef}
                                             className={ `inputForHelpToShelter ${formik.errors.nickname  && formik.touched.nickname ? 'error':null}`}
                                             {...formik.getFieldProps('nickname')}
                                             id="nickname"/>

                                  </div>
                                  <div className="pay-form__requisites__form__item pay-form__requisites__form__item--checkbox">
                                      <input 
                                             type="checkbox" 
                                             checked={checkBoxChecked}  
                                             className={checkBoxStyle} 
                                             name="anonymity" 
                                             id="anonymity" 
                                             onChange={()=>setCheckBoxChecked(!checkBoxChecked)} />
                                      <label htmlFor="anonymity">Остаться анонимным</label>
                                  </div>
                              </div>
                              <div className={`pay-form__requisites__form__item pay-form__requisites__form--sum ${formik.errors.sum && formik.touched.sum? 'pay-form__requisites__form__item_error--focus':null}` }>
                                  <label htmlFor="sum" >Сумма</label>
                                  <input 
                                        type="number" 
                                        name="sum" 
                                        id="sum" 
                                        ref={amountRef.inputRef} 
                                        className={ `inputForHelpToShelter ${formik.errors.sum && formik.touched.sum? 'error':null}`}
                                        required
                                        {...formik.getFieldProps('sum')}/>
                              </div>
                              <button type="submit" className="submit">Пожертвовать</button>
                          </form>

                      </div>
                      <div className="pay-form__statistics">
                          <h3 className="pay-form__statistics__title">В этом месяце собрано:</h3>
                          <div className="pay-form__statistics__content">
                              <div className="pay-form__statistics--sum">{allDonatedMoney}</div>
                              <div className="pay-form__statistics--chart">
                                  <div className="pay-form__statistics--min">0</div>
                                  <div className="pay-form__statistics--max">{maxMoney}</div>
                              </div>
                              <div className="chart">
                                  <div className="chart-all"></div>
                                  <div className="chart-donated" style={{width:percentLine}}></div>
                              </div>
                              <p className="pay-form__statistics__text">Вы можете помочь не только финансово, но и своим трудом, приходя в приют и помогая волонтёрам или взять под опеку питомца</p>

                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="main-sponsors">
              <div className="container">
                  <h2 className="main-sponsors__title title">Cпособы помощи приютам для бездомных животных</h2>
                  <div className="main-sponsors__content">
                      <div className="main-sponsors__item">
                          <img src={imgSponsors1} alt="" className="main-sponsors__img"/>
                          <p className="main-sponsors__text">
                           У вас нет лишних времени и денег, но есть желание помочь местному приюту для животных? Вот несколько идей: ознакомьтесь с потребностями приютов, найдите, где ваша помощь будет наиболее ценной, и выберите подходящий способ помощи.
                          </p>
                      </div>
                      <div className="main-sponsors__item">
                          <img src={imgSponsors2} alt="" className="main-sponsors__img"/>
                          <p className="main-sponsors__text">
                           <h2> распространение информации</h2>
                                <br/>
                              •  Размещайте листовки о предстоящих акциях в зоомагазинах, ветеринарных клиниках, парках и других общественных местах
                              <br/>
                              • Делитесь ссылками о пристройстве животных в социальных сетях для привлечения потенциальных хозяев.

                          </p>
                      </div>
                      <div className="main-sponsors__item">
                          <img src={imgPartners1} alt="" className="main-sponsors__img"/>
                          <p className="main-sponsors__text">
                          <h2>Транспортировка животных</h2>
                          <br/>
                             • Помогите транспортировать животных к ветеринару.
                            <br/>
                            • Выгуливайте собак для социализации.
                            <br/>
                            • Играйте и общайтесь с кошками для подготовки к новому дому.

                          </p>
                      </div>
                      <div className="main-sponsors__item">
                          <img src={imgPartners2} alt="" className="main-sponsors__img"/>
                          <p className="main-sponsors__text">
                          И еще два пункта:
                      <br />
                          
                          • Выразите благодарность работникам приюта, чтобы помочь им восстановить энергию и мотивацию. Это может быть открытка, цветы, угощения или заказ еды для персонала.
                          <br />
                          •  Предложите временное жилье для животных, чтобы помочь им избежать стресса при нахождении в приюте и освободить место для новых спасенных животных.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  )


}





export default HelpToShelter;