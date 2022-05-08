import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async( sw , ne) => {
    try{
        const {data:{ data }} = await axios.get(URL, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                  // 'X-RapidAPI-Key': '39ca657f86msh7af758b71a114e9p1961c7jsne6e295d7da2b'
                  'X-RapidAPI-Key': '6a501d0b9fmsh2cf2584c7188d1ep1a7ff2jsn356e3fa3ab90'
                },
        });

        return data;
    } catch(error){
        console.log(error);
    }
};