import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Card = ({ name, address, email, phone, products, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>Nome: {name}</Text>
        <Text style={styles.address}>Endereço: {address}</Text>
        <Text style={styles.contactText}>Contato</Text>
        <Text style={styles.contact}>E-mail: {email}</Text>
        <Text style={styles.contact}>Telefone: {phone}</Text>
        <Text style={styles.productsTitle}>Produto selecionado:</Text>
        <Text style={styles.product}>
          - {products}
        </Text>
      </View>
    </View>
  );
};

const SupplierList = ({ objs }) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          objs.map((data, index) => (
            <Card key={index} {...data} />
          ))
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  contactText: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  contact: {
    fontSize: 14,
    marginBottom: 5,
  },
  productsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  product: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default SupplierList;