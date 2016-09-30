import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	// Mapping over array, the arg for every call is an object that contains a particular city's data
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return (
			// Unique key is added to the topmost element
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="blue" units="°C"/></td>
				<td><Chart data={pressure} color="purple" units="hPa"/></td>
				<td><Chart data={humidity} color="green" units="%"/></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				{/* Map new array of objects, and call renderWeather function */}
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// Pull one property "weather" off of state
function mapStateToProps({ weather }) {
	// return key weather with a value weather, ES6 Syntax { weather }
	return { weather };
}

export default connect (mapStateToProps)(WeatherList);