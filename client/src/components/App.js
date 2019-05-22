import React, { useState, useEffect } from 'react';
import "./App.css"
import SearchBar from './SearchBar';
import Api from '../apis/Api'
import Loader from './Loader';
import Product from './Product'

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  

  const handleSearch = async term => {
    setIsLoading (true);

    try {
        const response = await Api.get('/api/products', {
          params: {
              title: term
          }
        });
        setData(response.data);
        setIsLoading(false);
    } catch (error) {
      setError('We are sorry! Something went wrong!');
			setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch()
  },[]);


  const renderImage = () => {
    if (isLoading) return <Loader />;
    if (error) return <div className='error'>{error}</div>;

    return (
      <div className="parentBlock">
        {data.map(product => (
          <Product key={product._id} product={product} />    
        ))}   
      </div>
    );
  };

  

  return(
    <div>
      <SearchBar handleSearch = {handleSearch} />
      <div className='App'>{renderImage()}</div>;
   </div>
  )
}