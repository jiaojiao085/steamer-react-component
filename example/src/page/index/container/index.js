import React, { Component } from 'react';
import Spinner from 'index';

import './index.less';

class Main extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		return (
			<Spinner isShow={true}></Spinner>
		);
	}
}

export default Main;