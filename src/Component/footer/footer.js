import { useFormik} from 'formik';

import  * as Yup from 'yup';
import useServices from '../../services/Service';

const Footer = ()=>{


  const {postSubcrube}= useServices();
  const formik = useFormik({
    initialValues:{
      email:''
    },
    validationSchema:Yup.object({
      email: Yup.string().email().required()
    }),
    onSubmit: value=>postSubcrube(
     { email:value.email})
  })
  return(
    <footer className="footer">
    <div className="container">
        <div className="footer__inner">
            <div className="footer__content">
                <div className="footer__item">
                    <div className="footer__item__title">Наши контакты:</div>
                    <div className="footer__item--content footer__item--address">Карла Маркса 69</div>
                    <div className="footer__item--content footer__item--phone">8-800-555-35-35</div>
                </div>
                <div className="footer__item">
                    <div className="footer__item__title">Наши соц сети:</div>
                    <div className="footer__item--content footer__item--inst">@priut124</div>
                    <div className="footer__item--content footer__item--inst">@priut124</div>
                </div>
            </div>
            <div className="footer__form">
                <div className="footer__title">Подпишись на наши обновления!</div>

                  <form  className="footer__form--container" onSubmit={formik.handleSubmit}>
                      <input  type="email"  
                              className="footer__input"  
                              name="email" 
                              id="email"
                              style={{color: formik.errors.email && formik.touched.email? 'red': 'black'}} 
                              {...formik.getFieldProps('email')}/>
                              
                      <button className="footer__btn" type="submit" disabled={formik.isSubmitting} >Подписаться</button>
                  </form>
            </div>
        </div>
        <div className="developers">Developed by Rayan Goslyng</div>
    </div>
</footer>
  )


}


export default Footer;