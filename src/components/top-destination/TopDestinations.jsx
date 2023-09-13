import {BiSolidNavigation} from 'react-icons/bi'

// eslint-disable-next-line react/prop-types
function TopDestination({image, destination, price, days}) {
  return (
    <div className='h-[400px]'>
      <div className=' overflow-hidden h-[370px]'>
      <img src={image} className='rounded-[2rem] w-[100%]'/>
      </div>
     <div className='flex flex-col gap-5 bg-white w-[100%] px-6 py-8 rounded-b-[2rem] shadow-box-shadow-3'>
     <div className='flex justify-between items-center'>
        <h2 className='info-text'>{destination}</h2>
        <h2 className='info-text'>{price}</h2>
      </div>
      <div className='flex gap-10 items-center'>
        <BiSolidNavigation size={28} className='text-primary-color'/>
        <h2 className='text-sm font-light text-primary-color'>{days}</h2>
      </div>
     </div>
    </div>
  )
}

export default TopDestination