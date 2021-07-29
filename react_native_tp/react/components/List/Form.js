import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function Form({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          nom: '',
          type: 'Achat',
        }
      : selectedValue,
  );

  const _onSubmit = () => {
    if (selectedValue) onSubmit(values);
  };
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <View onSubmit={_onSubmit}>
      <TextInput
        label="Name"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'name',
              value,
            },
          })
        }
        value={values.name}
      />
        <TextInput
            label="type"
            onChangeText={value =>
                handleChange({
                    target: {
                        name: 'type',
                        value,
                    },
                })
            }
            value={values.type} />
      <Button onPress={_onSubmit}>Submit</Button>
    </View>
  );
}
