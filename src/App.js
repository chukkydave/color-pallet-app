import React, { Component } from 'react';
import Palette from './pallete';
import seedColors from './seedColors';

class App extends Component {
	render() {
		return (
			<div>
				<Palette {...seedColors[4]} />
			</div>
		);
	}
}

export default App;
