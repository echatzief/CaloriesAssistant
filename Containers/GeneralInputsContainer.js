import React, {Component} from 'react';
import GeneralInputs from '../Components/GeneralInputs';
import {changeWeightAct} from '../Actions/index';
import {changeHeightAct} from '../Actions/index';
import {changeAgeAct} from '../Actions/index';
import {changeBMRAct} from '../Actions/index';
import {changePALAct} from '../Actions/index';
import {changeCaloriesAct} from '../Actions/index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    weightChoose:state.bmrReducer.weight,
    heightChoose:state.bmrReducer.height,
    ageChoose:state.bmrReducer.age,
    PALChoose:state.bmrReducer.pal,
    allBMR:state.bmrReducer,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeWeight:(weight) => dispatch(changeWeightAct(weight)),
    changeHeight:(height) => dispatch(changeHeightAct(height)),
    changeAge:(age) => dispatch(changeAgeAct(age)),
    changeBMR:(bmr) => dispatch(changeBMRAct(bmr)),
    changePAL:(pal) => dispatch(changePALAct(pal)),
    changeCaloriesAct: (calories) => dispatch(changeCaloriesAct(calories)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInputs)
