import * as React from 'react';
import {findDOMNode} from 'react-dom';
import {Input} from 'react-toolbox/lib/input'

export interface InputTextProps {
    onChange: (value: string) => void,
    placeholder?: string
}
export interface InputTextState {
    value: string
}

class InputText extends React.Component<InputTextProps, InputTextState>{
    constructor(props){
        super(props);
        this.state ={value:''}
    }

    private handleKeyDown = (e) => {
        if (e.nativeEvent.keyCode == 13 && this.state.value) {
            e.preventDefault();
            const value = this.state.value
            this.setState({value:''},()=>{
                this.props.onChange(value);
            });

        }
    }

    render() {
        return <div>
            <Input  type='text'
                icon='shop'
                value= {this.state.value}
                floating={true}
                label = {(this.props.placeholder || '...enter some text')}
                onKeyPress = {this.handleKeyDown}
                onChange = {(value)=>this.setState ({value:value})}
                />
        </div>
    }
}

export default InputText;
