import React, {Component} from 'react';
import {StyleSheet,ScrollView,View,Text} from 'react-native';
import ProgressWithoutContainer from '../Containers/ProgressWithoutContainer'
import CardInfo from './CardInfo';
import {WhiteSpace} from '@ant-design/react-native'
import PropTypes from 'prop-types';

class GrammsDisplay extends Component{
    render(){
        return(
            <ScrollView style={styles.scrollStyle}>
                <WhiteSpace size="xl"/>
                <ProgressWithoutContainer/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <CardInfo category={"Carbon: "} gramms={this.props.carbonGram+"gr"}/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <CardInfo category={"Fat: "} gramms={this.props.fatGram+"gr"}/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <CardInfo category={"Protein: "} gramms={this.props.proteinGram+"gr"}/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
            </ScrollView>
        );
    }
}
//<CardInfo category={"Fat: "} gramms={this.props.fatGram+"gr"}/>
//<CardInfo category={"Protein: "} gramms={this.props.proteinGram+"gr"}/>
const styles = StyleSheet.create({
    scrollStyle:{
        backgroundColor: '#D88A7A',
    },
});

GrammsDisplay.propTypes={
    carbonGram:PropTypes.string.isRequired,
    fatGram:PropTypes.string.isRequired,
    proteinGram:PropTypes.string.isRequired,
}
export default GrammsDisplay;
