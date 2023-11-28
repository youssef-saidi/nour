import Background from '../Background'
import { StyleSheet, View, Image, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../../core/theme'
import Header from '../Header'
import TextInput from '../TextInput'
import { useEffect, useState } from 'react'
import firebase from '../../../config'
import CardComponent from './CardComponent'

const database = firebase.database()

const ListProfile = () => {
    const [recherche, setrecherche] = useState()
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const snapshot = await database.ref('profils').once('value');
            const data = snapshot.val();
    
            if (data) {
              const profilesArray = Object.entries(data).map(([key, profile]) => ({
                id: key,
                ...profile,
              }));
              setProfiles(profilesArray);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    


  return (
    <Background>
    <Header>ListProfile</Header>

    <TextInput
        label="Rechercher"
        returnKeyType="done"
        onChangeText={(text) => setrecherche({ value: text, error: '' })}
        secureTextEntry
      />
      <FlatList style={styles.flat} data={profiles} 
      renderItem={({item})=>{ 
        return    <CardComponent
        name={item.name}
        surname={item.surname}
        telephone={item.telephone}
        imageSource={require('../../assets/user.png')}
      />
        }}>
    </FlatList>

    
</Background>
  )
}

export default ListProfile

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        marginTop: 15,
    },
    item: {
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
    flat: {
        width: "100%",
        marginBottom: 8,
    }
})
