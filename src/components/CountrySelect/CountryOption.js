import React, { memo } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { GlobalOutlined } from '@ant-design/icons';

const CountryOption = (props) => {
	const nameStyle = { marginLeft: 8 };
	const isCountry = props.code !== undefined;

	return (
		<div>
			{isCountry ? (
				<ReactCountryFlag
					countryCode={props.code}
					style={{
						fontSize: '1.5em',
						marginTop: '-2px'
					}}
					svg
				/>
			) : (
				<GlobalOutlined style={{ color: '#08c' }} />
			)}

			<span style={nameStyle}>{props.value}</span>
		</div>
	);
};

export default memo(CountryOption);
