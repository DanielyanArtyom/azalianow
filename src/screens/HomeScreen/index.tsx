import {FlatList, Pressable, SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AzaliaLogo from '../../assets/Azalia.svg';
import ToDoElement from '../../components/ToDoElement';
import AddNewTask from '../../assets/AddNewTask.svg';
import {NConst} from '../../constants/NavConstants';
import {useAppDispatch, useAppSelector} from '../../redux-store/reduxHooks';
import {editTask, removeTask, selectTasklist} from '../../features/taskReducer';
import EmptyList from '../../components/EmptyList';

const HomeScreen = ({navigation}) => {
  const taskList = useAppSelector(selectTasklist);
  const dispatch = useAppDispatch();

  const updateTask = (id: string) => {
    const _updatedArray = taskList.map(item =>
      item.id === id ? {...item, isComplete: !item.isComplete} : item,
    );
    dispatch(editTask(_updatedArray));
  };

  const deleteTaskHandler = (id: string) => {
    const _filterdArray = taskList.filter(item => item.id !== id);
    dispatch(removeTask(_filterdArray));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <AzaliaLogo />
        <View style={{marginTop: 15}}>
          <FlatList
            data={taskList}
            renderItem={({item}) => (
              <ToDoElement
                text={item.title}
                isChecked={item.isComplete}
                changeHandler={() => updateTask(item.id)}
                deleteHandler={() => deleteTaskHandler(item.id)}
              />
            )}
            keyExtractor={item => item.id}
            ListEmptyComponent={EmptyList}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
          />
        </View>
      </View>
      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate(NConst.ADD_TODO_SCRENN)}>
        <AddNewTask />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
