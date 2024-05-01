
import  * as Yup from 'yup';
import { useFormik} from 'formik';

import useServices from '../../services/Service';

import '../pages/admin/admin.css';

const ModalWaitongForOwner = (props)=>{
  const {postOrders}= useServices();
  const formik = useFormik({
    initialValues:{
      email:'',
      phone: '',
      name:'',
      date:'',
      animal:'',
      comment:''
    },
    validationSchema:Yup.object({
      email: Yup.string().email().required(),
      phone: Yup.number().required()
                .typeError("That doesn't look like a phone number")
                .positive("A phone number can't start with a minus")
                .integer("A phone number can't include a decimal point")
                .min(8).required(),
      name:Yup.string().min(2).required(),
      date:  Yup.date().required(),
      comment:Yup.string().min(25).required(),
      animal: Yup.string().required()
    }),
    onSubmit: value=>{
      postOrders({
        name: value.name,
        phone: value.phone,
        email: value.email,
        plannedDate: value.date,
        comment: value.comment,
        animalId: value.animal
      })
    }
  })

  const hadleStatusToggle = ()=>{
     props.setIsOpenStatus(false);
   }

   const renderAnimalForm = (data)=>{
    const item = data.map(({name,id})=>{
        return <option key={id} value={id}>{name}</option>
    })
    return item
}


 return(
         <div className={`adding-entry modal ${ !props.status  ? 'none': ''}`} style={ {top: "15%"}} >
           <div className="adding-entry__inner" style={props.style}>
               <div className="adding-entry__header">
                   <div className="adding-entry__title">Забрать животное</div>
                   <div className="adding-entry__cross" onClick={hadleStatusToggle}>
                       <button className="cross__btn" ></button>
                   </div>
               </div>
               <div className="adding-entry__main">

               <form action="" method="post" className="adding-entry__form-kind " onSubmit={formik.handleSubmit} >
               <div className="adding-entry__item adding-entry--flex adding-entry--flex-waitingForOwner">
                    <label htmlFor="name" className="adding-entry__item__title">имя</label>
                    <input type="text" name="name" id="name"   {...formik.getFieldProps('name')} style={{color: formik.errors.name && formik.touched.name? 'red': 'black'}} />
                </div>
                <div className="adding-entry__item" style={{backgroundColor: '#D9D9D9',
    padding: '0 10%'}}>

                    <div className="adding-entry--flex adding-entry--flex-waitingForOwner">
                          <label htmlFor="phone" className="adding-entry__item__title">телефон</label>
                          <input type="text" name="phone" id="phone" size={11} minLength="11" maxLength="11"  {...formik.getFieldProps('phone')} style={{color: formik.errors.phone && formik.touched.phone? 'red': 'black'}} />
                    </div>
                    <div className="adding-entry--flex adding-entry--flex-waitingForOwner">
                          <label htmlFor="phone" className="adding-entry__item__title">email</label>
                          <input type="text"    name="phone" id="phone"   {...formik.getFieldProps('email')} style={{color: formik.errors.email && formik.touched.email? 'red': 'black'}} />
                    </div>
                    <div className="adding-entry--flex adding-entry--flex-waitingForOwner">
                        <label htmlFor="date" className="adding-entry__item__title">дата</label>
                        <input  type="datetime-local"  name="date" id="date"  {...formik.getFieldProps('date')} style={{color: formik.errors.date && formik.touched.date? 'red': 'black'}} />
                    </div>


                    <div className="adding-entry--flex adding-entry--flex-waitingForOwner">
                        <label htmlFor="animal" className="adding-entry__item__title">Животное</label>
                        <select className="custom-select control__select control__select--form"  
                                name="animal" 
                                id="animal"   
                                {...formik.getFieldProps('animal')}
                                style={{color: formik.errors.animal && formik.touched.animal? 'red': 'black'}} >
                              <option ></option>
                              {renderAnimalForm(props.data)}
                        </select>
                   </div>
                   <div className="adding-entry__item">
                      <label htmlFor="comment" className="adding-entry__item__title">Комментарий</label>
                      <textarea name="comment" id="comment" cols="5" rows="5"  {...formik.getFieldProps('comment')} style={{color: formik.errors.comment && formik.touched.comment? 'red': 'black'}}  ></textarea>
                  </div>
               </div>
                  <div className="add__btn">
                      <button type="submit" className="add__btn--btn btn" disabled={formik.isSubmitting}>Добавить запись</button>
                  </div>
              </form>
           </div>
          </div>
       </div>
 )
}


export default ModalWaitongForOwner;