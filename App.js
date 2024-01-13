import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function App() {
    const [age, onChangeAge] = React.useState(0);
    const [limit, onChangeLimit] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Age:</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.textInput}
                placeholder='Age'
                onChangeText={(text) => onChangeAge(text)}
            />
            <Text style={styles.Text}>Limits:</Text>
            <Text style={styles.Text}>{limit}</Text>
            <Button 
                title="Calculate"
                onPress={() => onChangeLimit(Math.round((220-age) * 0.65) + "-" + Math.round((220-age) * 0.85))}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 100,
    height: 50,
    borderWidth: 2,
  },
  Text: {
    fontSize: 20,
  },
});
