import {useState, useContext, createContext} from 'react'

const StateContext = createContext()

const InitialState = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false
}

export const AppProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(InitialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

    const handleClick = (clicked) => {
        setIsClicked({...InitialState, [clicked]: true})
    }

    const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

    return(
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, setCurrentColor, currentMode, setCurrentMode, themeSettings, setThemeSettings, setColor, setMode}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => {
    return useContext(StateContext)
}