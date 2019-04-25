import React, {useState, useEffect} from 'react';
import './App.css';
import Header from '../components/Header/Header.js';
import SearchBar from '../components/SearchField/SearchField';
import ImageCardList from '../components/ImageCardList/ImageCardList';

const apiKey = '581eb4a49e4ae7142198627eae4a64b445a6bd9af7bb96de5a3cf51e2b62d919';
function App() {

  const [photos, setPhotos] = useState([]);
  const [term, setTerm] = useState('');
  
  // Function to setTerm when user inputs
	let onInput = (e) => {
		setTerm(e.target.value)
	}

	let onButtonSubmit = () => {
    fetchData(term);
	}
  
  useEffect(() => {
    fetchData(term);
  }, [term]);
  

  async function fetchData(term){
    try {
    let data = await fetch(`https://api.unsplash.com/search/photos?client_id=${apiKey}&per_page=2&query=${term}`);
    const items = await data.json();
    setPhotos(items.results);
    } catch (error) {
      console.log(`Error is ${error}`)
    }
  }


  return (
    <div>
      <Header/>
      <SearchBar   
        onInput={onInput} 
        onButtonSubmit={onButtonSubmit}
      />
      <ImageCardList 
        response={photos} 
      />
    </div>
  );
}

export default App;
