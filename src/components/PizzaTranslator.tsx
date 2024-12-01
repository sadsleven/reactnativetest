import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

function PizzaTranslator(): React.JSX.Element {
  const [text, setText] = useState('');

  return (
    <View style={{padding: 10}}>
      <Text
        style={{marginBottom: 10, fontSize: 18,}}
      >
        Microatividade 2
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {
          text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')
        }
      </Text>
    </View>
  );
}

export default PizzaTranslator;

