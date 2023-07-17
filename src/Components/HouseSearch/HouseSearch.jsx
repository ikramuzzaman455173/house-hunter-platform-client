import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../SharedComponents/Container';

const HouseSearch = () => {
  const [city, setCity] = useState('Dhaka');
  const [bedrooms, setBedrooms] = useState('2');
  const [bathrooms, setBathrooms] = useState('2');
  const [roomSize, setRoomSize] = useState('Medium');
  const [availability, setAvailability] = useState('Available');
  const [rentPerMonth, setRentPerMonth] = useState('');
  const [houses, setHouses] = useState([]);

  // list of some bangladesh cityes
  const bangladeshiCities = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna'];

  // list of price ranges for rent per month
  const priceRanges = ['0-500', '500-1000', '1000-1500', '1500-2000', '2000+'];

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await axios.get('/api/houses');
      setHouses(response.data);
    } catch (error) {
      console.log('Error fetching houses:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/houses', {
        params: {
          city,
          bedrooms,
          bathrooms,
          roomSize,
          availability,
          rentPerMonth,
        },
      });
      setHouses(response.data);
    } catch (error) {
      console.log('Error searching houses:', error);
    }
  };

  return (
    <>
      <Container>
        <div className="mx-auto p-4">
          <h2 className="text-2xl mb-4">House Search</h2>
          <form onSubmit={handleSearch} className="mb-4">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border p-2 rounded mr-2"
            >
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
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border p-2 rounded mr-2"
            >
              <option value="">Select Availability</option>
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-5"
            >
              Search
            </button>
          </form>
          <div>
            <h3 className="text-xl mb-2">Search Results:</h3>
            {houses.map((house) => (
              <div key={house.id} className="border p-4 mb-4">
                <h4 className="text-lg mb-2">{house.title}</h4>
                <p>City: {house.city}</p>
                <p>Bedrooms: {house.bedrooms}</p>
                <p>Bathrooms: {house.bathrooms}</p>
                <p>Room Size: {house.roomSize}</p>
                <p>Availability: {house.availability}</p>
                <p>Rent per Month: {house.rentPerMonth}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HouseSearch;
