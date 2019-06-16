import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {Radio,WhiteSpace,Button} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
const RadioItem = Radio.RadioItem;
import {store} from './App';

class Mode extends Component{
    constructor(props){
        super(props);
        this.adjust = this.adjust.bind(this);
        this.skip = this.skip.bind(this);
    }

    adjust(){
        /* Calculate the calories for gain or lose weights */
        let diff = (7500 * parseFloat(this.props.weightChoose).toFixed(2))/30;

        /* Upgrade the new calories and change it */
        if(this.props.modeChoose ==="Gain Weight"){
            let newCals = parseFloat(this.props.calories) + diff;
            this.props.changeCalories(newCals.toString())
        }
        else{
            let newCals = parseFloat(this.props.calories) - diff;
            this.props.changeCalories(newCals.toString())
        }
        console.log(store.getState())
        this.props.navigation.navigate("AfterMode");
    }
    skip(){
        this.props.navigation.navigate("AfterMode");
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.pickModeTitle}>Pick the Mode:</Text>
                <RadioItem
                    checked={this.props.modeChoose === "Gain Weight"}
                    onChange={event => {
                        if (event.target.checked) {
                            this.props.changeMode("Gain Weight");
                        }
                    }}
                    style={styles.item}
                 >
                    <Text style={styles.textItem}>Gain Weight</Text>
                </RadioItem>
                <WhiteSpace/>
                <RadioItem
                    checked={this.props.modeChoose === "Lose Weight"}
                    onChange={event => {
                        if (event.target.checked) {
                            this.props.changeMode('Lose Weight');
                        }
                    }}
                    style={styles.item}
                >
                    <Text style={styles.textItem}>Lose Weight</Text>
                </RadioItem>
                <WhiteSpace/>
                <Text style={styles.pickModeTitle}>Weights: {this.props.weightChoose}</Text>
                <Slider
                    style={{width:'80%',marginBottom:20,alignSelf:'center'}}
                    minimumValue={0}
                    step={1}
                    maximumValue={4}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(val)=>this.props.changeWeightMode(val.toString())}
                />
                <View style={styles.butCont}>
                    <Button style={styles.butFirst} onPress={this.adjust}><Text style={{color:'#fff'}}>Adjust</Text></Button>
                    <Button style={styles.butSec} onPress={this.skip}><Text style={{color:'#fff'}}>Skip</Text></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D88A7A',
        marginTop:20,
        justifyContent: 'center',
    },
    pickModeTitle:{
        color:'#fff',
        fontSize:18,
        alignSelf:'center',
        margin:'5%',
    },
    butCont:{
        alignSelf:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
    },
    butFirst:{
        backgroundColor:'#cc7e6e',
        borderColor:'#cc7e6e',
        margin:10,
        alignSelf:'center',
    },
    butSec:{
        backgroundColor:'#DC0E08',
        borderColor:'#cc7e6e',
        margin:10,
        alignSelf:'center',
    },
    item:{
        backgroundColor:'#cc7e6e',
    },
    textItem:{
        alignSelf:'center',
        fontSize:20,
        color:'#fff',
    },
});

/* Set the props for the mode choice*/
Mode.propTypes={
    modeChoose:PropTypes.string.isRequired,
    weightChoose:PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
    changeMode:PropTypes.func.isRequired,
    changeWeightMode:PropTypes.func.isRequired,
    changeCalories:PropTypes.func.isRequired,
}
export default Mode;
