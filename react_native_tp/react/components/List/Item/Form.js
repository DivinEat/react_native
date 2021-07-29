import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

export default function Form({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          name: '',
          date: '',
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
        {/*<DatePicker*/}
        {/*    date={values.data}*/}
        {/*    onDateChange={value =>*/}
        {/*        handleChange({*/}
        {/*            target: {*/}
        {/*                name: 'data',*/}
        {/*                value,*/}
        {/*            },*/}
        {/*        })*/}
        {/*    }*/}
        {/*/>*/}
        <TextInput
            label="Date"
            onChangeText={value =>
                handleChange({
                    target: {
                        name: 'date',
                        value,
                    },
                })
            }
            value={values.date}
        />

      <Button onPress={_onSubmit}>Submit</Button>
    </View>
  );
}
