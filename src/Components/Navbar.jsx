import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/data/avatar.jpg';
import { useStateContext } from '../Contexts/Context';
import {Cart, Chat, Notification, UserProfile} from '.';


const NavButton = ({title, customFunc, icons, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={() => customFunc()} style={{color}} className='relative text-xl rounded-full p-3  hover:bg-light-gray'>
<span  style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
    {icons}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {currentColor,  setActiveMenu, isClicked,screenSize, setScreenSize, setIsClicked, handleClick} = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize();
    return () => window.removeEventListener('resize', handleResize)
  })

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu(
        prev => !prev
      )} color={currentColor}  icons={<AiOutlineMenu />} />
      <div className='flex'>
        <NavButton title='Cart' customFunc={() => handleClick('cart')} color={currentColor}  icons={<FiShoppingCart />} dotColor='#03C9D7'/>
      <NavButton title='Chat' customFunc={() => handleClick('chat')} color={currentColor}  icons={<BsChatLeft />} dotColor='#03C9D7' />
      <NavButton title='Notifications' customFunc={() => handleClick('notification')} color={currentColor}  icons={<RiNotification3Line />} dotColor='#03C9D7' />
      <TooltipComponent content='Profile' position='BottomCenter'>
        <div className='flex items-center p-1 hover:bg-light-gray rounded-lg gap-2 cursor-pointer' onClick={() => handleClick('userProfile')}>
          <img src={avatar} alt='admin1' className='w-8 h-8 rounded-full'/>
          <p>
            <span className='text-gray-400 text-14 '>Hi</span> {''}
            <span className='text-gray-400 font-bold text-14 ml-1 '>Emmanuel</span>
          </p>
          <MdKeyboardArrowDown className='text-14 text-gray-400'/>
        </div>
      </TooltipComponent>
      </div>
      {isClicked.cart && <Cart/> }
      {isClicked.chat && <Chat/> }
      {isClicked.notification && <Notification/> }
      {isClicked.userProfile && <UserProfile/> }
    </div>
  )
}

export default Navbar