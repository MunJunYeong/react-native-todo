import React, {useState} from 'react'
import { theme } from './theme';
import styled, {ThemeProvider} from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';
import Input from './components/Input';
// import {images} from './images';
// import IconButton from './components/IconButton';
import Task from './components/Task';

// SafeAreaView : 아이폰 노치 디자인 고려한 View
const Container = styled.SafeAreaView` 
    flex : 1;
    background-color : ${ ({theme}) => theme.background};
    align-items : center;
    justify-content : flex-start;
`;
const Title = styled.Text`
    font-size : 40px;
    font-weight : 600;
    color : ${ ({theme}) => theme.main};
    align-self : flex-start;
    margin : 0px 20px;
`;
const List = styled.ScrollView`
    flex: 1;
    width : ${({width}) => width -40}px;
`;

export default function App(){
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({
        '1' : {id : '1', text : '전부삭제 기능 추가(184까지함)', completed : false},
        '2' : {id : '2', text : 'React Native', completed : true},
        '3' : {id : '3', text : 'React Native Sample', completed : false},
        '4' : {id : '4', text : 'Edit TODO Item', completed : false},
    })
    const _addTask = ()=> {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID] : {id : ID, text : newTask, completed : false},
        };
        setNewTask('');
        setTasks({...tasks, ...newTaskObject});
    };
    const _deleteTask = id => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
        
    };
    //completed시 edit 사라지게 되는
    const _toggleTask = id=>{
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    };
    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        setTasks(currentTasks);
    }

    const _handleTextChange = text => {
        setNewTask(text);
    };
    
    const width = Dimensions.get('window').width;
    return (
        <ThemeProvider theme={theme} >
            <Container>
                <StatusBar barStyle='light-content' backgroundColor={theme.background} >

                </StatusBar>
                <Title>TODO LIST</Title>
                <Input 
                    placeholder="+ Add a Task"
                    value = {newTask}
                    onChangeText = {_handleTextChange}
                    onSubmitEditing = {_addTask}
                />
                <List  width={width}>
                    {Object.values(tasks)
                        .reverse()
                        .map(item=> (
                            <Task 
                                key={item.id} 
                                item={item} 
                                deleteTask={_deleteTask} 
                                toggleTask={_toggleTask}
                                updateTask={_updateTask}    
                            />
                        ))
                    }
                </List>
            </Container>
        </ThemeProvider>
    )
}