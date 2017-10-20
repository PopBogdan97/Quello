import React, {Component} from 'react';
import {Header, Icon} from 'react-native-elements'
import {Text, View, Dimensions} from "react-native";
import {Constants} from "expo";



export default class HomeNav extends Component {

    render() {


        return (
            <View>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}

                    centerComponent={
                        <View style={{width: Dimensions.get('window').width * 0.85}}>
                            <Text style={{color: '#777', fontSize: 20, fontWeight: 'bold'}}>Questo o Quello</Text>
                        </View>}

                    leftComponent={<Icon name='new-message' type='entypo' color='#777' size={30} onPress={this.props.OnPress}/>}

                    backgroundColor={'#ffffffa0'}
                    outerContainerStyles={{marginTop: Constants.statusBarHeight, height: 50, padding: 0}}
                    innerContainerStyles={{padding: 10, alignItems: 'flex-end', flexDirection: 'row-reverse'}}
                />

            </View>


        )
    }
}
