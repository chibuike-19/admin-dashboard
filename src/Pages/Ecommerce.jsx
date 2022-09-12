import React from 'react'
import { BsCurrencyPound } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked, PieChart, Buttons, SparkLine} from '../Components'
import {useStateContext} from '../Contexts/Context'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/data/dummy'

const Ecommerce = () => {
  const {currentColor} = useStateContext()


  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-full rounded-xl p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex items-center  justify-between'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$213,000</p>
            </div>
          </div>
            <div className='mt-6'>
              <Buttons
              color='white'
              bgColor={currentColor}
              borderRadius='6px'
              size='5px'
              text='Download'
              />
            </div>
        </div>
      </div>
      <div className='flex flex-wrap m-3 justify-center items-center gap-1'>
              {earningData.map((item) => (
                <div key={item.title} className='dark:bg-secondary-dark-bg dark:text-gray-200 p-4 bg-white pt-9 md:w-56 rounded-2xl'>
                  <button style={{color: item.iconColor, backgroundColor: item.iconBg}} className='text-2xl rounded-full hover:drop-shadow-xl opacity-90 p-4'>
                    {item.icon}
                  </button>
                  <p className='mt-3'>
                    <span className='text-lg font-semibold'>
                      {item.amount}
                    </span>
                    <span className={`text-sm ml-2 text-${item.pcColor}`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className='text-sm text-gray-400 mt-1'>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap justify-center gap-10'>
              <div className='bg-white dark:bg-secondary-dark-bg m-3 p-4 dark:text-gray-200 md:w-780 rounded-2xl'>
                <div className='flex justify-between'>
                  <p className='font-semibold text-xl'>
                    Revenue Updates
                  </p>
                  <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 hover:drop-shadow-xl text-gray-600'>
                      <span>
                        <GoPrimitiveDot/>
                      </span>
                      <span>Expenses</span>
                    </p>
                    <p className='flex items-center gap-2 hover:drop-shadow-xl text-green-400'>
                      <span>
                        <GoPrimitiveDot/>
                      </span>
                      <span>Budget</span>
                    </p>
                  </div>
                </div>
                <div className='flex mt-10 flex-wrap justify-center gap-10'>
                  <div className='border-r-1 border-color pr-10 m-4'>
                    <div>
                      <p>
                        <span className='text-2xl font-semibold'>$194,250</span>
                        <span className='text-white bg-green-400 ml-2 p-1.5 text-sm rounded-full hover:drop-shadow-xl'>23%</span>
                      </p>
                      <p className='text-gray-500 mt-1'>Budget</p>
                    </div>
                    <div className='mt-8'>
                      <p>
                        <span className='text-2xl font-semibold'>$48,250</span>
                      </p>
                      <p className='text-gray-500 mt-1'>Expenses</p>
                    </div>
                    <div className='mt-5'>
                      <SparkLine 
                      currentColor={currentColor}
                      height='80px'
                      width='250px'
                      color={currentColor}
                      data={SparklineAreaData}
                      type='Line'
                      id='line-sparkline'/>

                    </div>
                    <div className='mt-10'>
                      <Buttons color='white' bgColor={currentColor} text='Download report' size='8px' borderRadius='4px'/>
                    </div>
                  </div>
                  <div>
                    <Stacked  width='250px' height='400px'/>
                  </div>
                </div>
              </div>
            </div>

    </div>
  )
}

export default Ecommerce