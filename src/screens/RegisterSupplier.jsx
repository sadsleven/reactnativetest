import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const RegisterSupplier = ({ modalVisible, setModalVisible, objs, setObjs }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [image, setImage] = useState('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b2/a3/c4/naco-a-muralha.jpg?w=900&h=500&s=1');

  const productsList = ['Produto 1', 'Produto 2', 'Produto 3', 'Produto A', 'Produto B'];
  const imageList = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b2/a3/c4/naco-a-muralha.jpg?w=900&h=500&s=1', 
    'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=', 
    'https://thumbs.dreamstime.com/b/sample-modern-room-luxury-hotel-161394634.jpg', 
    'https://img.boatmaginternational.com/2019/08/Beneteau_Gran-Turismo-32_1-938x535.jpg',
  ];

  const handleAddSupplier = () => {
    if (
      !name?.length ||
      !address?.length ||
      !email?.length ||
      !phone?.length
    ) {
      return
    }

    Alert.alert("Fornecedor adicionado", `Nome: ${name}\nEndereço: ${address}\nEmail: ${email}\nTelefono: ${phone}\nProduto: ${selectedProduct}`);
    
    setObjs(
      [
        ...objs,
        {
          name: name,
          address: address,
          email: email,
          phone: phone,
          products: selectedProduct,
          image: image, 
        }
      ]
    )
    setModalVisible(false); 
  };

  useEffect(() => {
    setName('')
    setAddress('')
    setEmail('')
    setPhone('')
    setSelectedProduct('Product 1')
    setImage('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b2/a3/c4/naco-a-muralha.jpg?w=900&h=500&s=1')
  }, [modalVisible]); 

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Adicionar Fornecedor</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Text style={styles.selectLabel}>Selecione o produto:</Text>
        <Picker
          selectedValue={selectedProduct}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setSelectedProduct(itemValue);
          }}
          multiple={true}
        >
          {productsList.map((product, index) => (
            <Picker.Item key={index} label={product} value={product} />
          ))}
        </Picker>
        <Text style={styles.selectLabel}>Selecione o imagem:</Text>
        <View style={styles.imageContainer}>
          {imageList.map((imgExample, index) => (
             <TouchableOpacity 
                style={styles.imageTouch} 
                onPress={() => setImage(imgExample)}>
                <Image 
                  key={index} 
                  source={{ uri: imgExample }} 
                  style={
                    image === imgExample ? styles.imageSelected : styles.image
                  } 
                />
             </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleAddSupplier}>
            <Text style={styles.submitButtonText}>Registro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RegisterSupplier;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'left',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  selectLabel: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left'
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginLeft: 15,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  }, 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexWrap: 'wrap'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexWrap: 'wrap'
  },
  imageTouch: {
    width: '48%',
    aspectRatio: 1, 
    marginBottom: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1, 
    borderRadius: 10,
  },
  imageSelected: {
    width: '100%',
    aspectRatio: 1, 
    borderRadius: 10,
    borderWidth: 2, 
    borderColor: '#007AFF', 
  },
});