import React, { useState, useEffect } from 'react';
import  clients  from '../../clients';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import TopBar from './components/TopBar';
import TxtIn from './components/TxtIn';
import LstBut from './components/LstBut';
export default function AddClient({ navigation, route }) {
  const [newClients, setNewClients] = useState(clients);
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState('');
  const [img, setImg] = useState(null);
  const [city, setSity] = useState(null);
  const [bio, setBio] = useState(null);

const onAddClient = route.params.addClient;

  


  // useEffect(() => {
  //   console.log('BIBA', name)
  // }, [name])
// const searchClients = () => {
//   for (let i = 0; i< clients.length; i++) {
//     console.log('iiiii', clients[i])
//   }
// }
// searchClients()

// console.log('селёдка', clients);


useEffect(()=> {console.log('didmount99999')}, [name, city])



  const addClient = () => {
    const client = {
      id: newClients.length,
      name: name,
      city: city,
      image: img,
      bio: bio,
      phone: phone,
      active: true,
    };
    onAddClient(client);

  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TopBar navigation={navigation} />
        <TxtIn
          value={img}
          onChangeValue={setImg}
          text="Фото"
          phld="Вставьте ссылку на фото"
        />
        <TxtIn
          value={name}
          onChangeValue={setName}
          text="ФИО"
          phld="Введите фамилию и имя"
        />
        <TxtIn
          value={phone}
          onChangeValue={setPhone}
          text="Номер телефона"
          phld="+7 (000) 000 00 00"
        />
        <TxtIn
          value={city}
          onChangeValue={setSity}
          text="Город"
          phld="Выберете город"
        />
        <TxtIn
          value={bio}
          onChangeValue={setBio}
          text="Био"
          phld={'Укажите хобби, интересы, образование и стаж работы'}
          height={3}
        />
        <LstBut onPress={addClient} text="Добавить" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
});

//-------------------acync and AcyncStorage------------------------

  // const saveClients = () => {
  //   const jsonvalue =  JSON.stringify(clients);
  //    AsyncStorage.setItem('clients', jsonvalue)
  // }

  // const getClients = async () => {
  //   const jsonClients = await AsyncStorage.getItem('clients');
  //   const ourClients = jsonClients ? JSON.parse(jsonClients) : clients;
  //   console.log( 'uuuuuuuu', ourClients);
  //   return ourClients;
    
  // }

  // const onload = async()=> {
  //   const clientFromStorage = await getClients();
  //   setNewClients(clientFromStorage)
  // }

  // useEffect(()=> onload(), [])