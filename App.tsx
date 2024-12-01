import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
//import PizzaTranslator from './src/components/PizzaTranslator';
//import Lista from './src/components/Lista';
//import FlatListBasics from './src/components/FlatListBasics';
//import SectionListBasics from './src/components/SectionListBasics';

import SupplierList from './src/screens/SupplierList';
import RegisterSupplier from './src/screens/RegisterSupplier';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>Meeting app Marvin</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [objs, setObjs] = useState([{
    name: 'Fornecedor 1',
    address: 'São Pedro da Aldeia',
    email: 'marvin@gmail.com',
    phone: '+351 964 488 476',
    products: 'produto 1',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b2/a3/c4/naco-a-muralha.jpg?w=900&h=500&s=1', 
  }]);
  const [modalVisible, setModalVisible] = useState(false);


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleAddSupplier = () => {
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppBar />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <TouchableOpacity style={styles.button} onPress={handleAddSupplier}>
          <Text style={styles.buttonText}>Adicionar Fornecedor</Text>
        </TouchableOpacity>
        <SupplierList objs={objs} />
        <RegisterSupplier 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
          objs={objs}
          setObjs={setObjs} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200EE',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
