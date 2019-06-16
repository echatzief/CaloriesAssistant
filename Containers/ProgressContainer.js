import Progress from '../Components/Progress';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    cal:state.bmrReducer.calories,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Progress)