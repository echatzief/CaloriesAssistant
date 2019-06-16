import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import imageSrc from './Images/diet.png'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


class StartingView extends Component{
    static navigationOptions = {
        title: 'StartingView',
    };

    render(){
        const config = {
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80
        };
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Calories Assistant</Text>
                </View>
                <View>
                    <Image resizeMode="contain" source={imageSrc} style={styles.logo}/>
                    <GestureRecognizer
                        onSwipe={(direction, state) =>navigate('BMRForm')}
                        config={config}
                        style={styles.swipe}
                    >
                        <Text style={styles.smallerText} >Swipe To Start</Text>
                    </GestureRecognizer>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#D88A7A',
    },
    logo:{
        marginTop:'12%',
        justifyContent: 'center',
        alignSelf:'center',
        height: '50%',
        width: '50%',
        borderWidth: 1,
        borderRadius: 75
    },
    title:{
        alignSelf: 'center',
        fontSize:35,
        color:'#FFF',
    },
    smallerText:{
        alignSelf: 'center',
        fontSize:20,
        color:'#FFF',
    },
    swipe:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#cc7e6e',
        marginTop:'12%',
        height:'12%',
    }
});

export default StartingView;
