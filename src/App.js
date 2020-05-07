import React from 'react';
import './App.css';
import DataContainer from './components/DataContainer/DataContainer';
import { Row, Col } from 'antd';

function App() {
	return (
		<div className="App">
			<Row style={{ marginTop: '50px' }}>
				<Col md={{ span: 12, offset: 6 }} sm={{ span: 20, offset: 2 }} xs={{ span: 24, offset: 0 }}>
					<DataContainer />
				</Col>
			</Row>
		</div>
	);
}

export default App;
