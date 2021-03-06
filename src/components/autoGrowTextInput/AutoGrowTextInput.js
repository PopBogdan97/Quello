import React from 'react'
import {TextInput, KeyboardAvoidingView} from 'react-native'


export default class AutoGrowTextInput extends React.Component {
    state: any;

    constructor(props) {
        super(props);
        this.state = {text: '', height: 0};
    }
    render() {
        return (

            <TextInput
                {...this.props}
                multiline={true}
                onContentSizeChange={(event) => {
                    this.setState({
                        text: event.nativeEvent.text,
                        height: event.nativeEvent.contentSize.height,
                    });
                }}
                style={{height: Math.max(35, this.state.height), backgroundColor: 'yellow', padding:10, borderBottomWidth: 2, borderColor:'#777', marginLeft:15, marginRight:15}}
                value={this.state.text}
            />
        );
    }
}