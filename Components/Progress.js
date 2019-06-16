import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import ModeContainer from '../Containers/ModeContainer';
import ProgressCircle from 'react-native-progress-circle';
import PropTypes from 'prop-types';

class Progress extends Component{
    render(){
        return(
            <View style={styles.viewProgress}>
                <View style={styles.innerContainer}>
                    <ProgressCircle
                        percent={60}
                        radius={120}
                        borderWidth={8}
                        color="#EBCE90"
                        shadowColor="#F7A09A"
                        bgColor="#D88A7A"
                        style={styles.progress}
                    >
                        <Text style={{ fontSize: 30}}>{parseFloat(this.props.cal).toFixed(2)}</Text>
                        <Text style={{ fontSize: 30}}>Kcal</Text>
                    </ProgressCircle>
                </View>
                <ModeContainer navigation={this.props.navigation}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewProgress:{
        marginTop:30,
    },
    innerContainer:{
        alignItems:'center',
    },
    progress:{
        alignSelf:'center',
        marginTop:'12%',
    }
});
Progress.propTypes={
    cal:PropTypes.string.isRequired,
}
export default Progress;
