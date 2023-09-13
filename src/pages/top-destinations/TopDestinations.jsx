import {TopDestination} from '../../components'
import dest1  from '../../assets/dest-1.png'
import dest2 from '../../assets/dest-2.jpeg'
import dest3 from '../../assets/dest-3.png'

const TopDestinations = () => {
  return (
    <div className="mt-20 container mx-auto p-8">
      <div>
        <p className="text-center text-primary-color text-sm">Top Selling</p>
        <h2 className="text-center font-semibold text-primary-color text-2xl md:text-3xl mt-1">
        Top Destinations
        
        </h2>
      </div>

      <div className='grid gap-[140px] md:grid-cols-2 md:gap-y-[150px] lg:grid-cols-3 md:gap-10 mt-10'>
        <TopDestination image={dest1} destination='Rome Italy' price='$5,42k' days='10 Days Trip'/>
        <TopDestination image={dest2} destination='London' price='$52k' days='17 Days Trip'/>
        <TopDestination  image={dest3} destination='Full Europe' price='$42k' days='14 Days Trip'/>
      </div>
    </div>
  );
};

export default TopDestinations;
