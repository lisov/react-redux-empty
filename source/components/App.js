import { connect } from 'react-redux';         

class App extends React.Component {

	render() {
		return (
		   	<div>
		      
		      {this.props.children}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
    	stats: state.app.stats
	}
}

export default connect(mapStateToProps)(App);
