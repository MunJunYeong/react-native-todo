import React from 'react'
import styled, {ThemeProvider} from 'styled-components';
import { useWindowDimensions, Dimensions } from 'react-native';
import ProtoTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs( ({theme}) => ({
    placeholderTextColor : theme.main,
}))`
    width : ${ ({width}) => width-40}px;
    height : 60px;
    margin : 3px 0;
    padding : 15px 20px;
    background-color : ${ ({theme}) => theme.itemBackground };
    font-size : 25px;
    color : ${ ({theme}) => theme.text };
    
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing, onBlur})=>{
    const width = Dimensions.get('window').width;
    return <StyledInput width={width} placeholder={placeholder} maxLength={50}
        autoCapitalize="none" //자동 대문자 비활성화
        autoCorrect={false} // 자동수정기능 비활성화
        returnKeyType="done"
        keyboardAppearance="dark"
        value = {value}
        onChangeText = {onChangeText}
        onSubmitEditing = {onSubmitEditing}
        onBlur  = {onBlur}
    />
}

Input.protoTypes = {
    placeholder : ProtoTypes.string,
    value : ProtoTypes.string.isRequired,
    onChangeText : ProtoTypes.func.isRequired,
    onSubmitEditing : ProtoTypes.func.isRequired,
    onBlur : ProtoTypes.func.isRequired,
}

export default Input;