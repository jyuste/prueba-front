import React, { useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import ResultTable from './components/ResultTable';
import Loader from './components/Loader'

import './App.sass';

function App() {

  const [apiData, setApiData] = useState([]);
  const [loader, setLoader] = useState(false)

  const API = 'https://api.github.com/search/repositories?q='

  const handleSubmit = (event) => {
    //when call the function set de state to empty
    setApiData([])
    //prevent the refresh when submit a form
    event.preventDefault();
    let str = event.nativeEvent.target[0].value;
    let queryString = str;

    //TODO filters
    let page = '&page=1'
    let perPage = '&per_page=10'
    let sort = '&sort=stars'
    let order = '&order=desc'

    if (str) {
      //turn on the loader
      setLoader(true)
      //make the call to API
      axios.get(API + queryString + page + perPage + sort + order)
        .then(res => {
          const data = res.data.items;
          //lets make a more manageable array to work with.
          const dataBasic = data.map(result => (
            {
              name: result.name,
              url: result.html_url
            }
          ))
          //reset input value
          event.nativeEvent.target[0].value = '';
          //turn off the loader
          setLoader(false);
          //set API data to state
          setApiData(dataBasic)
        })
    }
  }

  return (
    <div className="App">
      <Header handler={handleSubmit} />
      {loader ? <Loader /> : <ResultTable apiData={apiData} />}
    </div>
  );
}

export default App;
