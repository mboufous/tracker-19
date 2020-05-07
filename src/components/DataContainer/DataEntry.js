import React, { useEffect, useState } from 'react';
import { Statistic } from 'antd';
import { useTransition, animated } from 'react-spring';

const DataEntry = (props) => {
	const transitions = useTransition(props, (props) => props.value, {
		from: { opacity: 0, transform: 'translateX(0px)' },
		enter: { opacity: 1 },
		leave: { position: 'absolute', opacity: 0, transform: 'translateX(-50px)' }
	});

	return transitions.map(({ item, props, key }) => (
		<animated.div key={key} style={props}>
			<Statistic valueStyle={{ fontWeight: 500 }} title={item.name} value={item.value} />
		</animated.div>
	));

	// return (
	// 	<animated.div style={transitions}>
	// 		<Statistic valueStyle={{ fontWeight: 500 }} title={props.name} value={props.value} />
	// 	</animated.div>
	// );
};

export default DataEntry;
