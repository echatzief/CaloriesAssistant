import Mode from '../Components/Mode';
import {changeModeAct} from '../Actions/index';
import {changeWeightForMode} from '../Actions/index';
import {changeCaloriesAct} from '../Actions/index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    modeChoose:state.bmrReducer.mode,
    calories:state.bmrReducer.calories,
    weightChoose:state.bmrReducer.weightForMode,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeMode: (mode) => dispatch(changeModeAct(mode)),
    changeWeightMode: (weight) => dispatch(changeWeightForMode(weight)),
    changeCalories: (cal) => dispatch(changeCaloriesAct(cal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Mode)
