import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Button } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>
      <Modal
        animationType="none"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>  
        <View style={styles.container}>
          <Text>This is modal...</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </Modal>
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
  close : {
    marginTop: 40,
    fontSize: 18,
  }
});