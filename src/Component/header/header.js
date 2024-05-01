
import {NavLink} from 'react-router-dom';

 const setActive = ({isActive})=> isActive ? "list__item--link selected": "list__item--link";
const Header = ()=>{


  return(
        <header className="header">
        <div className="logo">
            <a href="#!" className="logo__link">Добрые лапки</a>
        </div>
        <div className="container">
            <nav className="nav">
                <ul className="list">
                    <li className="list__item">
                        <NavLink to={"/waitingForOwner"} className={ setActive } >Ждут владельца</NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink to={"/LuckyOnes"} className={ setActive } >Счасливчики</NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink to={"/"} className={ setActive } >Главная</NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink to={"/helpToShelter"} className={ setActive } >Помощь приюту</NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink to={"/about"} className={ setActive }>Узнать о нас</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}


export default Header;