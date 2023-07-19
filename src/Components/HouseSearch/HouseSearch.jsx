import React, { useState, useEffect } from 'react';
import Container from '../SharedComponents/Container';
import Heading from '../SharedComponents/Heading';
import House from '../Houses/House';
import moment from 'moment';
import Pagination from '../SharedComponents/Pagination';

const HouseSearch = () => {
  const [city, setCity] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [roomSize, setRoomSize] = useState();
  const [availability, setAvailability] = useState();
  const [rentPerMonth, setRentPerMonth] = useState();
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalItems, setTotalItems] = useState(0)

  const bangladeshiCities = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi'];
  const priceRanges = ['0-500', '500-1000', '1000-1500'];

  useEffect(() => {
    fetch('http://localhost:5000/allHouses?limit=${limit}&page=${page}')
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => console.log(`404 page not found ${error}`));
  }, []);

  useEffect(() => {
    updateFilteredHouses();
  }, [city, bedrooms, bathrooms, roomSize, availability, rentPerMonth, houses]);

  const updateFilteredHouses = () => {
    let filteredHouses = houses;
    console.log({ filteredHouses });

    if (city) {
      filteredHouses = filteredHouses.filter((house) => house.city === city);
      console.log({ filteredHouses });

    }
    if (bedrooms) {
      filteredHouses = filteredHouses.filter((house) => house.bedrooms === parseInt(bedrooms));
      console.log({ filteredHouses });

    }
    if (bathrooms) {
      filteredHouses = filteredHouses.filter((house) => house.bathrooms === parseInt(bathrooms));
      console.log({ filteredHouses });

    }
    if (roomSize) {
      filteredHouses = filteredHouses.filter((house) => house.roomSize === parseInt(roomSize));
      console.log({ filteredHouses });

    }
    if (availability) {
      filteredHouses = filteredHouses.filter((house) => house.availabilityDate === availability);
      console.log({ filteredHouses });

    }
    if (rentPerMonth) {
      const [minPrice, maxPrice] = rentPerMonth.split('-');
      filteredHouses = filteredHouses.filter((house) => {
        const rent = house.rentPerMonth;
        return rent >= parseInt(minPrice) && (rent <= parseInt(maxPrice) || maxPrice === undefined);
      });
    }
    console.log({ filteredHouses });
    setFilteredHouses(filteredHouses);
  };

  return (
    <>
      <Container>
        <div className="mx-auto p-4 lg:mb-0 relative md:top-10 -top-[75px]">
          <h2 className="text-2xl mb-4">House Search</h2>
          <form className="mb-4">
            <div className='flex md:flex-row flex-col flex-wrap gap-2 justify-between'>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border p-2 rounded mr-2"
              >
                <option value="">Select Your City</option>
                {bangladeshiCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="border p-2 rounded mr-2"
              >
                <option value="">Select Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <select
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className="border p-2 rounded mr-2"
              >
                <option value="">Select Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <select
                value={roomSize}
                onChange={(e) => setRoomSize(e.target.value)}
                className="border p-2 rounded mr-2"
              >
                <option value="">Select Room Size</option>
                <option value="550">550</option>
                <option value="600">600</option>
                <option value="950">950</option>
                <option value="1000">1000</option>
              </select>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="border p-2 rounded mr-2"
              >
                <option value="">Select Availability Date</option>
                <option value="2023-08-10">{moment('2023-08-10').format('MMM Do YY')}</option>
                <option value="2023-08-11">{moment('2023-08-11').format('MMM Do YY')}</option>
                <option value="2023-08-12">{moment('2023-08-12').format('MMM Do YY')}</option>
                <option value="2023-08-13">{moment('2023-08-13').format('MMM Do YY')}</option>
                <option value="2023-08-14">{moment('2023-08-14').format('MMM Do YY')}</option>
                <option value="2023-08-15">{moment('2023-08-15').format('MMM Do YY')}</option>
                {/* <option value="2023-08-16">{moment('2023-08-16').format('MMM Do YY')}</option>
                <option value="2023-08-17">{moment('2023-08-17').format('MMM Do YY')}</option>
                <option value="2023-08-18">{moment('2023-08-18').format('MMM Do YY')}</option>
                <option value="2023-08-19">{moment('2023-08-19').format('MMM Do YY')}</option>
                <option value="2023-08-20">{moment('2023-08-20').format('MMM Do YY')}</option> */}
              </select>
              <select
                value={rentPerMonth}
                onChange={(e) => setRentPerMonth(e.target.value)}
                className="border p-2 rounded mr-2"
              >
                <option value="">Select Rent per Month</option>
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <div>
            <h3 className="text-2xl mb-2">Search Results: {filteredHouses.length}</h3>

            {filteredHouses.length > 0 ? (
              <div className='pt-12 grid grid-cols-1 sm:gird-cols-2 md:gird-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
                {filteredHouses.map((item, i) => (
                  <House key={i} item={item} />
                ))}
              </div>
            ) : (
              <div className='pt-12'>
                <Heading
                  title={'No House Available In This Search Required!'}
                  subtitle={'Please Select Other Categories!'}
                  center={true}
                />
              </div>
            )}
          </div>
        </div>
        <Pagination setPage={setPage} page={page} limit={limit} setLimit={setLimit} totalItems={totalItems} />
      </Container>
    </>
  );
};

export default HouseSearch;
