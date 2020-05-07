import React from 'react';
import { Typography } from 'antd';
import DayJS from 'react-dayjs';

const { Text } = Typography;

function LastUpdateDate(props) {
	return (
		<Text disabled>
			Last Update: <DayJS asString={true}>{props.date}</DayJS>
		</Text>
	);
}

export default LastUpdateDate;
