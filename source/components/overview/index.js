import { connect } from 'react-redux';

class Main extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
yo!
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        stats: ""
    }
}
export default connect(mapStateToProps)(Main);