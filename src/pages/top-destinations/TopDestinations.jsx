import {TopDestination} from '../../components'

const TopDestinations = () => {
  return (
    <div className="mt-20">
      <div>
        <p className="text-center text-primary-color text-sm">Top Selling</p>
        <h2 className="text-center font-semibold text-primary-color text-2xl md:text-3xl mt-1">
        Top Destinations
        </h2>
      </div>

      <div>
        <TopDestination />
      </div>
    </div>
  );
};

export default TopDestinations;
