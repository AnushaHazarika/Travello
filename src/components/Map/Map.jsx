import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery, Paper } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    // const coordinates = {lat:0 , lng:0};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={ {key:'AIzaSyAfb7LTVMRtCmNDR4xit4SArsH0X_ODaGs'} }
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={''}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!isDesktop ? 
                        (<LocationOnOutlinedIcon color='primary' fontSize='large'/>)
                        :
                        (<Paper elevation={3} className={classes.paper}>
                            <Typography variant='subtitle2' className={classes.typography} gutterBottom>
                                {place.name}
                            </Typography>
                            <img
                                className={classes.pointer}
                                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                alt={place.name}
                            />
                            <Rating size='small' value={Number(place.rating)} readOnly />
                        </Paper>)
                    }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;