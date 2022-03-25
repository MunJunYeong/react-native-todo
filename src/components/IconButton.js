import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ProtoTypes from 'prop-types';
import {images} from '../images';

const Icon = styled.Image `
    tint-color : ${ ({theme, completed}) => 
        completed ? theme.done : theme.text
    };
    width :30px;
    height :30px;
    margin :10px;
`;

const IconButton = ({type, onPressOut, id}) => {
    const _onPressOut = ()=> {
        onPressOut(id);
    }
    return(
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} />
        </TouchableOpacity>
    )
}

IconButton.defaultProps = {
    onPressOut : ()=> {},
}

IconButton.protoTypes = {
    type : ProtoTypes.oneOf(Object.values(images)).isRequired,
    onPressOut : ProtoTypes.func,
    id : ProtoTypes.string,
    completed : ProtoTypes.bool
};

export default IconButton;