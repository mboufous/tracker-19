import { WORLD_DATA_API_URL, COUNTRY_DATA_API_URL } from './dataContainer.endpoint';
import Axios from 'axios';

export default (countryCode) =>
	Axios.get(countryCode ? COUNTRY_DATA_API_URL.replace(':countryCode', countryCode) : WORLD_DATA_API_URL)
		.then((res) => res.data)
		.then((data) => ({
			cases: { confirmed: data.confirmed.value, recovered: data.recovered.value, deaths: data.deaths.value },
			lastUpdateDate: data.lastUpdate
		}));
