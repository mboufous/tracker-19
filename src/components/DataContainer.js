import React from 'react';
import { Card, Row, Col } from 'antd';

function DataContainer() {
	return (
		<Row>
			<Col md={{ span: 12, offset: 6 }} sm={{ span: 24, offset: 0 }}>
				<Card title="Card title" bordered={false}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Col>
		</Row>
	);
}

export default DataContainer;
