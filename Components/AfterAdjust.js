import React, {Component} from 'react';
import {StyleSheet,ScrollView,View,Text} from 'react-native';
import ProgressWithoutContainer from '../Containers/ProgressWithoutContainer';
import Slider from '@react-native-community/slider';
import { Button} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import {store} from './App';

class AfterAdjust extends Component{
    constructor(props){
        super(props);
        this.state={
            carbonPercent:'50',
            fatPercent:'30',
            proteinPercent:'18',
            value:0,
        }
    }
    changeCarbon = (val)=>{
        this.setState({
            carbonPercent:val.toString(),
        })
    }
    changeFat = (val) =>{
        this.setState({
            fatPercent:val.toString(),
        })
    }
    changeProtein = (val) =>{
        this.setState({
            proteinPercent:val.toString(),
        })
    }
    adjust = () =>{

        // Calculate the gr from each catergory
        let carbonGram = ((parseInt(this.state.carbonPercent)/100)/4)*this.props.caloriesChoose;
        this.props.carbonChange(carbonGram.toString());

        let fatGram = ((parseInt(this.state.fatPercent)/100)/4)*this.props.caloriesChoose;
        this.props.fatChange(fatGram.toString());

        let proteinGram = ((parseInt(this.state.proteinPercent)/100)/9)*this.props.caloriesChoose;
        this.props.proteinChange(proteinGram.toString());

        console.log(store.getState())

        const {navigate} = this.props.navigation;
        navigate('GrammsDisplayScreen');
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <ProgressWithoutContainer/>
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyle}>Carbon : {this.state.carbonPercent} %</Text>
                    <Slider
                        style={{width:'80%',marginBottom:20,marginTop:20,alignSelf:'center',height:50}}
                        minimumValue={50}
                        step={1}
                        maximumValue={65}
                        minimumTrAfterAdjustContainerackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={(val)=> this.changeCarbon(val)}
                    />
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyle}>Fat : {this.state.fatPercent} %</Text>
                    <Slider
                        style={{width:'80%',marginBottom:20,marginTop:20,alignSelf:'center'}}
                        minimumValue={20}
                        step={1}
                        maximumValue={35}
                        minimumTrAfterAdjustContainerackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={(val)=> this.changeFat(val)}
                    />
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyle}>Protein : {this.state.proteinPercent} %</Text>
                    <Slider
                        style={{width:'80%',marginBottom:20,marginTop:20,alignSelf:'center'}}
                        minimumValue={15}
                        step={1}
                        maximumValue={25}
                        minimumTrAfterAdjustContainerackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={(val)=> this.changeProtein(val)}
                    />
                </View>
                <View style={styles.butCont}>
                    <Button style={styles.but} onPress={this.adjust}><Text style={{color:'#fff'}}>Calculate</Text></Button>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D88A7A',
        flex:1,
    },
    innerContainer:{
        marginTop:'10%',
    },
    textStyle:{
        color:'#fff',
        fontSize:18,
        alignSelf:'center'
    },
    item:{
        alignSelf:'center',
        borderColor:'#7B7A7B',
        borderRadius:75,
    },
    but:{
        backgroundColor:'#cc7e6e',
        borderColor:'#cc7e6e',
        alignSelf:'center',
        justifyContent: 'center',
        marginBottom:30,
    },
    butCont:{
        marginTop:10,
    }
});

/* Set the props for the AfterAdjust */
AfterAdjust.propTypes ={
    caloriesChoose:PropTypes.string.isRequired,
    carbonChange:PropTypes.func.isRequired,
    proteinChange:PropTypes.func.isRequired,
    fatChange:PropTypes.func.isRequired,
}
export default AfterAdjust;
