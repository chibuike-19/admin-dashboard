import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from '../data/data/dummy';
import {useStateContext} from '../Contexts/Context'

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext()

  const activeLink = 'flex gap-5 py-3 pl-4 items-center rounded-lg text-white text-md m-2 '
  const normalLink = 'flex gap-5 py-3 pl-4 items-center rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 '

  const handleSidebarClose = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-8'>
      {activeMenu && <>
      <div className='flex justify-between items-center'>
        <Link to='/' onClick={handleSidebarClose} className='text-2xl flex gap-4 mt-4 items-center font-bold text-slate-900 dark:text-white'><p><SiShopware/></p><span>Trendy</span></Link>
        <TooltipComponent content='Menu' position='BottomCenter'>
          <button className='hover:bg-light-gray block md:hidde' onClick={() => setActiveMenu(prev => !prev)}>
            <MdOutlineCancel size={20}/>
          </button>
        </TooltipComponent>
      </div>
      <div className='w-full mt-10'>
        {links.map(item => (
          <div key={item.title}>
            <p className='m-3 mt-4 text-gray-400 uppercase'>{item.title}</p>
            {item.links.map(link => (
              <NavLink to={`/${link.name}`} key={link.name} onClick={() => handleSidebarClose()} style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''})} className={({isActive}) => isActive ? activeLink : normalLink}>
                <p>{link.icon}</p>
                <span className='capitalize'>{link.name}</span>
              </NavLink>
            ))}
          </div>
        )
          )}
      </div>
      </>}


    </div>
  )
}

export default Sidebar