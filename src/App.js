// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData } from './api';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(( { coords: { latitude , longitude }}) => {
      setCoordinates({ lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {

    getPlacesData(bounds?.sw, bounds?.ne)
      .then((data) => {
        console.log(data);

        setPlaces(data);
      })
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={0} style={{width : '100%'}}>
        <Grid item xs={12} md={5}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={7}>
          <Map
            setCoordinates= {setCoordinates}
            setBounds= {setBounds}
            coordinates= {coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
