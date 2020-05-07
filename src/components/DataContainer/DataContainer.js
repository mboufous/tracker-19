import React, { useState, useEffect, useReducer } from 'react';
import { Card, Row, Col, Divider, Spin, message } from 'antd';
import CountrySelect from '../CountrySelect';
import fetchData from './dataContainer.api';
import DataEntry from './DataEntry';
import { LoadingOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import LastUpdateDate from '../LastUpdateDate';

const initialState = { cases: null, loading: true, lastUpdateDate: null };

function reducer(state, action) {
	switch (action.type) {
		case 'FETCHING_DONE':
			return { cases: action.cases, loading: false, lastUpdateDate: action.lastUpdateDate };
		case 'FETCHING_ERROR':
			return { cases: action.cases, loading: false };
		default:
			return state;
	}
}

function DataContainer() {
	const [ countryCode, setcountryCode ] = useState(null);
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	const onCountryChange = (code) => {
		setcountryCode(code);
	};
	useEffect(
		() => {
			fetchData(countryCode)
				.then((data) => {
					message.success('Loading success', 1);
					dispatch({
						type: 'FETCHING_DONE',
						cases: data.cases,
						lastUpdateDate: data.lastUpdateDate
					});
				})
				.catch((err) => {
					console.error(err);
					message.error('Error loading data');
					dispatch({
						type: 'FETCHING_ERROR',
						cases: null
					});
				});
		},
		[ countryCode ]
	);
	const { cases, loading, lastUpdateDate } = state;
	const dataEntries =
		cases &&
		Object.keys(cases).map((key, index) => (
			<Col key={key} span={8}>
				<DataEntry name={key} value={cases[key]} animationDelay={100 * (index * 2 + 1)} />
			</Col>
		));
	return (
		<Card title="Coronavirus (COVID-19)">
			<CountrySelect handleChange={onCountryChange} />
			<Divider />
			{loading ? (
				<Spin indicator={antIcon} />
			) : cases ? (
				<Row>{dataEntries}</Row>
			) : (
				<ExclamationCircleOutlined style={{ color: 'red' }} />
			)}
			<Row style={{ marginTop: 20 }}>{lastUpdateDate && <LastUpdateDate date={lastUpdateDate} />}</Row>
		</Card>
	);
}

export default DataContainer;
