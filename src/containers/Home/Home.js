import React, {Component} from 'react';
import {Text, View, ImageBackground, Dimensions, Image} from 'react-native';
import HomeNav from '../../components/navBar/HomeNav.js';
import {Button, SocialIcon} from 'react-native-elements';


export default class Home extends Component {



    render() {
        const {width, height} = Dimensions.get('window');
        const {navigate} = this.props.navigation;
        return (




                <ImageBackground source={{uri: 'https://questooquello.it/img/immaginine.png'}} style={{width, height}}>
                    <View style={{flex: 1}}>
                        <HomeNav OnPress={() => navigate('Question')}/>
                        <View
                            style={{flex: 1, marginTop: Dimensions.get('window').height * 0.15, alignItems: 'center'}}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                                textShadowColor: 'white',
                                textShadowOffset: {width: -1, height: -1}
                            }}>Preferiresti</Text>
                            <View style={{
                                backgroundColor: '#e16d53',
                                justifyContent: 'center',
                                flex: 0.5,
                                borderWidth: 5,
                                borderColor: '#515151',
                                width: Dimensions.get('window').width * 0.8,
                                marginTop: Dimensions.get('window').height * 0.05,
                                alignItems: 'center'
                            }}>
                                <Image source={{uri: 'https://questooquello.it/img/immaginine.png'}} style={{height:200, width:200}}/>

                                <Text>ciaoS</Text>
                            </View>
                            <View style={{
                                backgroundColor: '#4678a4',
                                justifyContent: 'center',
                                flex: 0.5,
                                borderWidth: 5,
                                borderColor: '#515151',
                                width: Dimensions.get('window').width * 0.8,
                                marginBottom: Dimensions.get('window').height * 0.1,
                                alignItems: 'center',
                                marginTop: 10
                            }}>
                                <Text>ciaoS</Text>
                            </View>
                            <Button
                                backgroundColor='white'
                                color='black'
                                fontWeight='bold'
                                title='Prossima'
                                raised={true}
                                borderRadius={5}
                                iconRight={{name: 'arrow-right', type: 'entypo', color: 'black'}}
                                onPress={() => navigate('Question')}
                            />
                            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                                <SocialIcon
                                    type='facebook'
                                />
                                <SocialIcon
                                    type='tumblr'
                                    back
                                />
                                <SocialIcon
                                    type='twitter'
                                />
                                <SocialIcon
                                    type='instagram'
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>




        );
    }


}


