import React, {Component} from 'react';
import {StyleSheet,ScrollView,Image} from 'react-native';
import SexChoiceContainer from '../Containers/SexChoiceContainer';
import GeneralInputsContainer from '../Containers/GeneralInputsContainer';
import imageSrc from './Images/checklist.png'

class BMRForm extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'BMRForm',
    };
    render(){
        return(
            <ScrollView style={styles.container}>
                <Image source={imageSrc} style={styles.logo}/>
                <SexChoiceContainer/>
                <GeneralInputsContainer navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D88A7A',
    },
    title:{
        marginTop:'12%',
        alignSelf: 'center',
        fontSize:30,
        color:'#FFF',
    },
    logo:{
        marginTop:'12%',
        alignSelf:'center',
        height:180,
        width:180,
    },
});
export default BMRForm;
