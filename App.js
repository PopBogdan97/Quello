import React, {Component} from 'react';
import Home from './src/containers/Home/Home.js';
import SendQuestion from './src/containers/SendQuestion/SendQuestion.js'
import {StackNavigator} from 'react-navigation';

export default class App extends Component {
    render() {
        return (


            <Screen/>

        );
    }
}

const Screen = StackNavigator({
        Home: {screen: Home, navigationOptions: {title: 'Home', header: null}},
        Question: {screen: SendQuestion, navigationOptions: {title: 'SendQuestion', header: null}},
    }
);


