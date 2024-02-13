import React from 'react';
import styles from "./TodoCard.styles"
import { View, Text, TouchableWithoutFeedback } from 'react-native';

const TodoCard = ({todo}) => {
    return(
        <View style={styles.todo_container}>
            <Text>{todo.content}</Text>
        </View>
    );
}

export default TodoCard;