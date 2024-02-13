/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TodoCard from './components/TodoCard';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [todos, setTodos] = React.useState([]);
  const [currentTodo, setCurrentTodo] = React.useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onSubmit = () => {
    //console.log(currentTodo);
    if(currentTodo.length > 0)
    {
      todos.push({
        id: Math.floor(Math.random() * 10000000),
        content: currentTodo,
        isActive: true
      });
      setCurrentTodo('');
      Keyboard.dismiss();
    }
    else{
      Alert.alert('Empty Entry', 'Empty entry is not allowed.');
      Keyboard.dismiss();
    }

    //console.log(todos);
  };

  const fun = () => {
    console.log("Merhaba");
  }
  const renderItemF = ({item}) => {
    return (   
      <TouchableWithoutFeedback key={item.id} onLongPress={() => {

        /*
        ALERT STARTS
        */ 
        Alert.alert('WARNING', 'Are you sure to delete this todo item?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', 
            onPress: () => {
              setTodos((todos) => {
                console.log(item.id, "->", item.content);
                let index = todos.indexOf(item);
                todos.splice(index, 1);
                console.log(todos);
                return [...todos];
              });
            }},
        
        ]);
        /*
        ALERT STOPS
        */




        }}>
        <View>
      <TodoCard todo={item}/>
      </View>
      </TouchableWithoutFeedback>
      )
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.captionFrame}>
        <View>
          <Text style={styles.mainCaption}>TODO LIST</Text>
        </View>
        <View>
          <Text style={styles.numberOfTodos}>{todos.length}</Text>
        </View>
      </View>
      <View style={styles.todoFr}>
      <FlatList 
      inverted
      data={todos}
      renderItem={renderItemF}
      extraData={todos}
      />
      </View>
      <View style={styles.dataAcquisitionFrame}>
        <TextInput placeholder='To be done...'
        onChangeText={(item) => setCurrentTodo(item)}
        style={styles.textInput}
        value={currentTodo}
        />
      <TouchableHighlight onPress={onSubmit}>
      <View style={styles.button}>
          <Text>PRESS TO ADD</Text>
        </View>
      </TouchableHighlight>
      </View>      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#346eeb',
    overflow: 'scroll'
  },
  todoFr: {
    flex: 1
  },
  captionFrame: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: '10%',
    padding: 5,
    margin: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    margin: 5,
    borderWidth: 2
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 15,
    margin: 5
  },
  dataAcquisitionFrame: {
    display: 'flex',
    margin: 5,
    padding: 2,
    borderBottomColor: 'yellow',
    borderBottomWidth: 9,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopColor: 'yellow',
    borderTopWidth: 9,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderTopEndRadius: 5,
    borderRightColor: 'yellow',
    borderRightWidth: 9,
    borderLeftColor: 'yellow',
    borderLeftWidth: 9,
  
  
  },
  mainCaption: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 20
  },
  numberOfTodos: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange'
  }
});

export default App;
