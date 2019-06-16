import React from 'react';
import {Flex,WingBlank} from '@ant-design/react-native'
import {StyleSheet,View,Text} from 'react-native';

const CardInfo = ({category,gramms}) => {
    return(
        <View style={styles.cardStyle}>
            <Flex justify="center">
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4,justifyContent: 'center'}}>
                    <Text style={styles.textStyle}>{category}</Text>
                </Flex.Item>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 ,justifyContent: 'center'}}>

                </Flex.Item>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 ,justifyContent: 'center'}}>
                    <Text style={styles.textStyle}>{gramms}</Text>
                </Flex.Item>
            </Flex>
        </View>
    );
}
const styles = StyleSheet.create({
    cardStyle:{
        height:100,
        backgroundColor: '#1D1B52',
        alignItems: 'center',
        justifyContent:'center'
    },
    textStyle:{
        color:"#fff",
        backgroundColor:'#1D1B52',
        fontSize:18,
        alignSelf:'center',
        justifyContent:'center'
    }
});
export default CardInfo;
