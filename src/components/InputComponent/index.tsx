import {TextInput} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';

interface MyProps {
  onChangeHandler: (value: string) => void;
  value: string;
  placeholder: string;
  isMultiLine?: boolean;
}

const InputComponent: FC<MyProps> = ({
  onChangeHandler,
  value,
  placeholder,
  isMultiLine,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeHandler}
      value={value}
      placeholder={placeholder}
      multiline={isMultiLine}
    />
  );
};

export default InputComponent;
