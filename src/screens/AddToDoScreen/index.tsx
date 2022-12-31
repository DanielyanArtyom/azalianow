import {View, Text, SafeAreaView, Pressable} from 'react-native';
import React, {useState} from 'react';
import ArrowIcon from '../../assets/BackArrow.svg';
import {styles} from './styles';
import {NConst} from '../../constants/NavConstants';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {useAppDispatch} from '../../redux-store/reduxHooks';
import {addTask} from '../../features/taskReducer';

const AddTodoScreen = ({navigation}) => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useAppDispatch();
  const returnHandler = () => {
    navigation.navigate(NConst.HOME_SCREEN);
  };

  const onChangeHandler = (event: string) => {
    setNewTask(event);
  };

  const submitHandler = () => {
    dispatch(addTask(newTask));
    setNewTask('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Pressable style={styles.header} onPress={returnHandler}>
          <ArrowIcon />
          <Text style={styles.text}>Вернуться назад</Text>
        </Pressable>
        <View style={styles.actions}>
          <InputComponent
            placeholder="Текст новой задачи"
            value={newTask}
            onChangeHandler={onChangeHandler}
            isMultiLine
          />
          <ButtonComponent
            actionHandler={submitHandler}
            text="Добавить"
            isDisabled={!newTask}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTodoScreen;
