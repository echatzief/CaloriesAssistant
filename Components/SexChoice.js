import React, {Component} from 'react';
import {Text, View,StyleSheet,ScrollView} from 'react-native';
import {Radio,WhiteSpace} from '@ant-design/react-native';
import PropTypes from 'prop-types'

const RadioItem = Radio.RadioItem;

class SexChoice extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.pickSexTitle}>Pick the sex:</Text>
                <RadioItem
                    checked={this.props.sexChoose === 'Male'}
                    onChange={event => {
                        if (event.target.checked) {
                            this.props.changeSex('Male');
                        }
                    }}
                    style={styles.item}
                 >
                    <Text style={styles.textItem}>Male</Text>
                 </RadioItem>
                 <WhiteSpace/>
                 <RadioItem
                    checked={this.props.sexChoose === 'Female'}
                    onChange={event => {
                        if (event.target.checked) {
                            this.props.changeSex('Female');
                        }
                    }}
                    style={styles.item}
                 >
                     <Text style={styles.textItem}>Female</Text>
                </RadioItem>
            </View>
        );
    }
}

/* Set the style to the Component */
const styles = StyleSheet.create({
    container:{
        marginTop:12,
        backgroundColor: '#D88A7A',
        marginBottom:20,
    },
    item:{
        backgroundColor:'#cc7e6e',
    },
    textItem:{
        alignSelf:'center',
        fontSize:20,
        color:'#fff',
    },
    pickSexTitle:{
        color:'#fff',
        fontSize:18,
        alignSelf:'center',
        margin:'5%',
    },
});

/* Set the props for the sex choice*/
SexChoice.propTypes={
    sexChoose:PropTypes.string.isRequired,
    changeSex:PropTypes.func.isRequired,
}

export default SexChoice;
