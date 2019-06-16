import React, {Component} from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import ProgressContainer from '../Containers/ProgressContainer';

class AdjustCalories extends Component{
    static navigationOptions = {
        title: 'AdjustCalories',
    };
    render(){
        return(
            <ScrollView style={styles.container}>
                <ProgressContainer navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D88A7A',
    },
    item:{
        alignSelf:'center',
        borderColor:'#7B7A7B',
        borderRadius:75,
    },
});
export default AdjustCalories;
