import {View, Text, Animated} from 'react-native';
import React, {FC} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {styles} from './styles';
import {colors} from '../../constants/colors';

interface MyProps {
  text: string;
  isChecked: boolean;
  changeHandler: () => void;
  deleteHandler: () => void;
}

const LeftSwipe = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });
  return (
    <View style={styles.deleteBox}>
      <Animated.Text style={{transform: [{scale: scale}], color: '#fff'}}>
        Delete
      </Animated.Text>
    </View>
  );
};

const ToDoElement: FC<MyProps> = ({
  text,
  isChecked,
  changeHandler,
  deleteHandler,
}) => {
  return (
    <Swipeable renderLeftActions={LeftSwipe} onSwipeableOpen={deleteHandler}>
      <View style={styles.root}>
        <CheckBox
          value={isChecked}
          onValueChange={changeHandler}
          boxType="square"
          style={styles.checkbox}
          tintColor={colors.Checkbox_Color}
          onFillColor={colors.Checkbox_Color}
          onTintColor={colors.Checkbox_Color}
          animationDuration={0}
          onCheckColor="#fff"
        />
        <Text style={[styles.text, isChecked ? styles.checked : {}]}>
          {text}
        </Text>
      </View>
    </Swipeable>
  );
};

export default ToDoElement;
