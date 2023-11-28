import Background from '../Background'
import { StyleSheet, View, Image, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../../core/theme'
import Header from '../Header'
import TextInput from '../TextInput'
import { useState } from 'react'

const ListProfile = () => {
    const [recherche, setrecherche] = useState()

    const data =[{
        name: "nnnnnn",
        surname: "surname.value",
        telephone: "tel.value"
    },
    {
        name: "22222",
        surname: "222222",
        telephone: "2222222"
    },
]
  return (
    <Background>
    <Header>ListProfile</Header>

    <TextInput
        label="Rechercher"
        returnKeyType="done"
        onChangeText={(text) => setrecherche({ value: text, error: '' })}
        secureTextEntry
      />
      <FlatList style={styles.flat} data={data} renderItem={({item})=>{ return <Text>{item.name}</Text>}}></FlatList>

    
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
        // backgroundColor:theme.colors.secondary

    }
})
