
import { useState } from "react";

import useServices from '../../../../services/Service';



const KindForm = (props)=>{


  const {postKind}= useServices();
  const [nameForm , setNameForm] = useState('');


  const submit = (e)=>{
    e.preventDefault()
    postKind(    {
      name:nameForm
  }).then((res)=>{
    console.log(res, 'KindForm');
    props.setData(
        [...props.data, {
          id:res,
          name:nameForm
        }]
    )
    
  })

  }

  
  return(
    <form action="" method="post" className="adding-entry__form-kind " onSubmit={e=>submit(e)}>
    <div className="adding-entry__item adding-entry--flex">
        <label htmlFor="name" className="adding-entry__item__title">имя</label>
        <input type="text" name="name" id="name" value={nameForm} onChange={e=>setNameForm(e.target.value)}/>
    </div>
    <div className="add__btn">
        <button type="submit" className="add__btn--btn btn">Добавить запись</button>
    </div>
</form>
  )


}


export default KindForm;