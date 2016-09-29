import axios from 'axios';

const API_KEY = 'cf89972a9c24ef9ebb10cefc73821646';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Setting up action creator
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ca`;
	// Ajax request returns a promise
	const request = axois.get(url);

	return {
		type: FETCH_WEATHER,
		// Pass in promise to payload 
		payload: request
	};
}