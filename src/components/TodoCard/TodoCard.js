import React from 'react';
import styles from "./TodoCard.styles"
import { View, Text, TouchableWithoutFeedback } from 'react-native';

const TodoCard = ({todo}) => {
    return(
        <View style={todo.isActive ? styles.todo_container_active : styles.todo_container_passive}>
            <Text>{todo.content}</Text>
        </View>
    );
}

export default TodoCard;