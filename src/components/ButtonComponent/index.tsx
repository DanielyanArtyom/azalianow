import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';

interface MyProps {
  text: string;
  actionHandler: () => void;
  isDisabled?: boolean;
}

const ButtonComponent: FC<MyProps> = ({text, actionHandler, isDisabled}) => (
  <Pressable
    style={[styles.btn, isDisabled ? styles.disabled : {}]}
    onPress={actionHandler}
    disabled={isDisabled}>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

export default ButtonComponent;
