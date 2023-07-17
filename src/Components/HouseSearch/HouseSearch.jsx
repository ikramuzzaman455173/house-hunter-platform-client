import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HouseSearch = () => {
  const [city, setCity] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [roomSize, setRoomSize] = useState('');
  const [availability, setAvailability] = useState('');
  const [rentPerMonth, setRentPerMonth] = useState('');
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouses(); // Fetch houses on component mount
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await axios.get('/api/houses'); // Replace with your API endpoint
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">House Search</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Room Size"
          value={roomSize}
          onChange={(e) => setRoomSize(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Rent per Month"
          value={rentPerMonth}
          onChange={(e) => setRentPerMonth(e.target.value)}
          className="border p-2 rounded mr-2"
        />
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
  );
};

export default HouseSearch;