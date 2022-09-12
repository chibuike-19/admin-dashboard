import './App.css';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {FiSettings} from 'react-icons/fi';
import {Routes, Route} from 'react-router-dom';
import {Sidebar, Navbar, ThemeSettings, Footer} from './Components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Bar, Area, Pie, Financial, ColorPicker, Kanban, Line,  ColorMapping, Editor} from './Pages';                 
import {useStateContext} from './Contexts/Context'

function App() {
  const {activeMenu, setThemeSettings, themeSettings, currentColor, currentMode} = useStateContext()
  
  return (
    <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className='fixed right-6 bottom-4 z-50'>
          <TooltipComponent content='Settings' position='top'>
            <button className='hover:drop-shadow-xl text-white hover:bg-light-gray p-3' onClick={() => setThemeSettings(true)} style={{background: currentColor, borderRadius: '50%'}}>
              <FiSettings size={30}/>
            </button>
          </TooltipComponent> 
        </div>
          {activeMenu ? 
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar/>
          </div> : 
          <div className='w-0 dark:bg-secondary-dark-bg'>
            sidebar2
          </div>}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar'>
              <Navbar/>
            </div>
            <div>
              {themeSettings && <ThemeSettings/>}
              <Routes>
                 {/* dashboard  */}
                    <Route path="/" element={(<Ecommerce />)} />
                    <Route path="/ecommerce" element={(<Ecommerce />)} />

                    {/* pages  */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* apps  */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    {/* charts  */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
