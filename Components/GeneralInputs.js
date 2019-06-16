import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button,WhiteSpace} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';

class GeneralInputs extends Component{
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    /* Calculate BMR after checking the values */
    submitForm(){


        /* Get all the values from the allBMR */
        var allBMR = this.props.allBMR;
        var weight = allBMR.weight;
        var height = allBMR.height;
        var age = allBMR.age;
        var pal = allBMR.pal;


        /* Get the float values */
        weight = parseFloat(allBMR.weight);
        height = parseFloat(allBMR.height);
        age = parseFloat(allBMR.age);
        pal = parseFloat(allBMR.pal);

        /* Change the values at the store */
        if(this.props.allBMR.sex === "Male"){
            let bmr = (9.99 * weight) + (6.25 * height*100) - (4.92 * age) + 5;
            this.props.changeBMR(bmr);
            this.props.changeCaloriesAct((parseFloat(bmr*pal).toFixed(2)).toString());
            console.log("Calories: "+bmr*pal);
        }
        else{
            let bmr = (9.99 * weight) + (6.25 * height*100) - (4.92 * age) - 161;
            this.props.changeBMR(bmr);
            this.props.changeCaloriesAct((parseFloat(bmr*pal).toFixed(2)).toString());
            console.log("Calories: "+bmr*pal);
        }

        /* Navigate to other screen */
        const {navigate} = this.props.navigation;
        navigate('AdjustCalories');
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.barStyleText}>Height : {parseFloat(this.props.heightChoose).toFixed(2)}</Text>
                <Slider
                    style={{width:'80%',marginBottom:20,marginTop:20,alignSelf:'center'}}
                    minimumValue={0}
                    step={0.01}
                    maximumValue={2.5}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(val)=>this.props.changeHeight(val.toString())}
                />
                <Text style={styles.barStyleText}>Weight : {this.props.weightChoose}</Text>
                <Slider
                    style={{width:'80%',marginBottom:20,marginTop:20,alignSelf:'center'}}
                    minimumValue={0}
                    step={1}
                    maximumValue={250}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(val)=>this.props.changeWeight(val.toString())}
                />
                <Text style={styles.barStyleText}>Age : {this.props.ageChoose}</Text>
                <Slider
                    style={{width:'80%',marginBottom:20,marginTop:20,alignSelf:'center'}}
                    minimumValue={1}
                    step={1}
                    maximumValue={110}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(val)=>this.props.changeAge(val.toString())}
                />
                <Text style={styles.barStyleText}>PAL:{parseFloat(this.props.PALChoose).toFixed(2)}</Text>
                <Slider
                    style={{width:'80%',marginBottom:20,marginTop:20,alignSelf:'center'}}
                    minimumValue={1.4}
                    step={0.01}
                    maximumValue={2.4}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(val)=>this.props.changePAL(val.toString())}
                />
                <Button style={styles.but} onPress={this.submitForm}><Text style={{color:'#fff'}}>Submit</Text></Button>
                <WhiteSpace/>
            </View>
        );
    }
}

/* Set the style to the Component */
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#D88A7A',
    },
    barStyleText:{
        marginTop:12,
        color:'#fff',
        alignSelf:'center',
        fontSize:18,
        marginBottom:12,
    },
    item:{
        flex:1,
    },
    but:{
        backgroundColor:'#cc7e6e',
        borderColor:'#cc7e6e',
        marginBottom:20,
    },
    list:{
        marginTop:'12%',
        marginBottom:'12%',
        backgroundColor:'#cc7e6e',
    },
    listItem:{
        backgroundColor:'#cc7e6e',
        padding:10,
    }
});

/* Set the props for the general inputs*/
GeneralInputs.propTypes={
    PALChoose:PropTypes.string.isRequired,
    weightChoose:PropTypes.string.isRequired,
    heightChoose:PropTypes.string.isRequired,
    ageChoose:PropTypes.string.isRequired,
    changeWeight:PropTypes.func.isRequired,
    changeHeight:PropTypes.func.isRequired,
    changeAge:PropTypes.func.isRequired,
    changeBMR:PropTypes.func.isRequired,
    changePAL:PropTypes.func.isRequired,
    changeCaloriesAct:PropTypes.func.isRequired,
}

export default GeneralInputs;
