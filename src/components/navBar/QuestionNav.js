import React, {Component} from 'react';
import {Header, Icon} from 'react-native-elements'
import {Text, View, Dimensions} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";



export default class QuestionNav extends Component {

    render() {


        return (
            <View>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}

                    centerComponent={
                        <View>
                            <Text style={{color: '#777', fontSize: 20, fontWeight: 'bold'}}>Questo o Quello</Text>
                        </View>}

                    leftComponent={<Icon name='md-arrow-round-back' type='ionicon' color='#777' size={30} onPress={this.props.OnPress}/>}

                    backgroundColor={'#ffffffa0'}
                    outerContainerStyles={{marginTop: getStatusBarHeight(), height: 50, padding: 0}}
                    innerContainerStyles={{padding: 10, alignItems: 'flex-end'}}
                />

            </View>


        )
    }
}


