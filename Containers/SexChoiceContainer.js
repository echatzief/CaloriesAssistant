import SexChoice from '../Components/SexChoice';
import {changeSexAct} from '../Actions/index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    sexChoose:state.bmrReducer.sex,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeSex: (sex) => dispatch(changeSexAct(sex))
})

export default connect(mapStateToProps, mapDispatchToProps)(SexChoice)
