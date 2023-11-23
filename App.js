import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>TASKS TO DO</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write tasks here'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },

  taskwrapper:{
     paddingTop:80,
     paddingHorizontal:20,
  },

  sectionTitle:{
    top:80,
    fontSize:42,
    fontWeight:'bold',
    color:'white',
    left:2,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },

 items:{
    marginTop:100,
  },

  writeTasksWrapper:{
    top: 20,
    marginLeft:120,
    width:'100%',
    flexDirection: 'row',
  },

  input: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'skyblue',
    borderRadius: 60,
    width: 250,
    left: 22,
    top:26,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'skyblue',
    borderRadius: 60,
    left: 340,
    bottom:32,
  },

  addText: {},
});