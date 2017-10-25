import React, {Component} from 'react';
import {Text, View, ImageBackground, Dimensions, TextInput, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import QuestionNav from '../../components/navBar/QuestionNav.js';
import {Button, SocialIcon, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import AutoGrowTextInput from "../../components/autoGrowTextInput/AutoGrowTextInput";

export default class SendQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            op1Height: 50
        };
    }

    render() {
        const {width, height} = Dimensions.get('window');
        const {navigate} = this.props.navigation;
        return (


            <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'transparent'}}
                                  behavior={"position"}
            >

                <ImageBackground source={{uri: 'https://questooquello.it/img/immaginine.png'}} style={{width, height}}>
                    <View style={{flex: 1}}>
                        <QuestionNav OnPress={() => navigate('Home')}/>
                        <ScrollView
                            behavior={"position"}

                            style={{flex:1, marginTop: Dimensions.get('window').height * 0.15}}
                            contentContainerStyle={{alignItems:'center'}}>



                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                                textShadowColor: 'white',
                                textShadowOffset: {width: -1, height: -1}
                            }}>Invia domanda</Text>

                            <View style={{
                                alignSelf: 'flex-start',
                                marginLeft: 20,
                                width: Dimensions.get('window').width - 40
                            }}>


                                <FormLabel labelStyle={{fontSize: 15, color: 'black'}}>Intro</FormLabel>
                                <AutoGrowTextInput defaultValue={'Preferiresti'} style={{color: 'black', padding: 10}}/>
                                <FormValidationMessage></FormValidationMessage>
                                <FormLabel labelStyle={{fontSize: 15, color: 'black'}} containerStyle={{backgroundColor:'green'}}>Opzione 1</FormLabel>
                                <AutoGrowTextInput
                                            placeholder='Inserisci la prima opzione'
                                            placeholderTextColor='#777777'/>

                                <FormValidationMessage></FormValidationMessage>
                                <FormLabel labelStyle={{fontSize: 15, color: 'black'}} containerStyle={{backgroundColor:'green', marginTop:0}}>Opzione 2</FormLabel>
                                <AutoGrowTextInput style={{color: 'black'}}
                                           placeholder='Inesrisci la seconda opzione' placeholderTextColor='#777777'/>
                                <FormValidationMessage></FormValidationMessage>
                                <FormLabel labelStyle={{fontSize: 15, color: 'black'}}>Dai un titolo alla tua domanda</FormLabel>
                                <AutoGrowTextInput style={{color: 'black'}} placeholder='Inserisci un titolo'
                                           placeholderTextColor='#777777'/>
                                <FormValidationMessage></FormValidationMessage>
                                <FormLabel labelStyle={{fontSize: 15, color: 'black'}}>Lascia il tuo nome</FormLabel>
                                <AutoGrowTextInput style={{color: 'black'}} placeholder='Inserisci il tuo nome'
                                           placeholderTextColor='#777777'/>
                                <FormValidationMessage></FormValidationMessage>

                            </View>

                            <Button
                                backgroundColor='white'
                                color='black'
                                fontWeight='bold'
                                title='Invia'
                                raised={true}
                                borderRadius={5}
                                iconRight={{name: 'arrow-right', type: 'entypo', color: 'black'}}
                                containerViewStyle={{marginBottom:5}}
                            />

                        </ScrollView>
                    </View>
                </ImageBackground>

            </KeyboardAvoidingView>


        );
    }
}





