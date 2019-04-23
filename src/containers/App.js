import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from '../components/SearchField/SearchField'

const apiKey = '581eb4a49e4ae7142198627eae4a64b445a6bd9af7bb96de5a3cf51e2b62d919';
function App() {

  const [searchField, setSearchField] = useState('');
  const [photos, setPhotos] = useState([]);

  // getPhotos = async (photo) => {
  //   let data;
  //   data = await fetch(`https://api.unsplash.com/search/photos?${apiKey}`, {
  //     query: photo,
  //     per_page: 30
  //   });
  //   const items = await data.json();
  //   setPhotos(items);
  // }

  useEffect(async() => {
    let data;
    try {
      data = await fetch(`https://api.unsplash.com/search/photos?${apiKey}`, {
      query: photo,
      per_page: 30
    });
    const items = await data.json();
    } catch (error) {
      console.log(`Error is ${error}`)
    }
    setPhotos(items);
  })
  

  return (
    <div>
      <SearchBar/>
    </div>
  );
}

export default App;
