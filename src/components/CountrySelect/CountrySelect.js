import React, { useState, useEffect, memo } from 'react';

import { Select } from 'antd';
import Axios from 'axios';
import CountryOption from './CountryOption';

const CountrySelect = (props) => {
	const [ countries, setCountries ] = useState([]);

	useEffect(() => {
		Axios.get('./countries.json').then((res) => setCountries(res.data));
	}, []);

	const { Option, OptGroup } = Select;

	function onChange(value, option) {
		props.handleChange(option.key);
	}

	// function onBlur() {
	// 	console.log('blur');
	// }

	// function onFocus() {
	// 	console.log('focus');
	// }
	const countriesAsOptions = countries.map(({ name, code }) => (
		<Option key={code} name={name}>
			<CountryOption value={name} code={code} />
		</Option>
	));

	return (
		<Select
			style={{ width: '70%', cursor: 'pointer' }}
			showSearch
			defaultActiveFirstOption={false}
			size="large"
			defaultValue={null}
			onChange={onChange}
			filterOption={(input, option) => option.name && option.name.toLowerCase().indexOf(input.toLowerCase()) >= 0}
		>
			<OptGroup label="World">
				<Option name="World">
					<CountryOption value="World" />
				</Option>
			</OptGroup>
			<OptGroup label="Countries">{countriesAsOptions}</OptGroup>
		</Select>
	);
};

export default memo(CountrySelect);
