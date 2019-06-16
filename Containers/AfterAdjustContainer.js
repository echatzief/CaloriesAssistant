import {changeCarbonAct} from '../Actions/index';
import {changeFatAct} from '../Actions/index';
import {changeProteinAct} from '../Actions/index';
import { connect } from 'react-redux';
import AfterAdjust from '../Components/AfterAdjust';

const mapStateToProps = (state, ownProps) => ({
    caloriesChoose:state.bmrReducer.calories,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    carbonChange:(carbon)=> dispatch(changeCarbonAct(carbon)),
    proteinChange:(protein)=> dispatch(changeProteinAct(protein)),
    fatChange:(fat)=> dispatch(changeFatAct(fat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AfterAdjust);