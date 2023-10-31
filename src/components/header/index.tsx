import { Outlet, NavLink } from "react-router-dom";
import './header.scss'
import tabs from '../../data';

export const Header: React.FC = () => {

  
  return (
    <>
      <header className='header'>
        {tabs.sort((tab1, tab2) => tab1.order - tab2.order).map(tab => (
          <div key={tab.id} className="header__block">
            <NavLink
            to={`${tab.id}`}
            className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
             {tab.title}
          </NavLink>
           </div>
        ))}
      </header>
      <Outlet/>
    </>
  );
};
