import React, { useState } from 'react'
import Background from '../Background'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../../core/theme'
import Header from '../Header'
import Button from '../Button'

import firebase from '../../../config'
import TextInput from '../TextInput'
const database = firebase.database()

const MyAccount = ({navigation}) => {

    const [name, setName] = useState({ value: '', error: '' })
    const [surname, setSurname] = useState({ value: '', error: '' })
    const [tel, setTel] = useState({ value: '', error: '' })

    const handleSave = () => {
        const ref = database.ref("profils")
        const key = ref.push().key
        const ref_profil = ref.child("profil" + key)
        ref_profil.set({
            name: name.value,
            surname: surname.value,
            telephone: tel.value

        })
        navigation.reset({
            index: 0,
            routes: [{ name: 'ListProfile' }],
          })

    }
    return (
        <Background>
            <Header>My Account</Header>

            <TextInput
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}

            />
            <TextInput
                label="Surname"
                returnKeyType="next"
                value={surname.value}
                onChangeText={(text) => setSurname({ value: text, error: '' })}
                error={!!surname.error}
                errorText={surname.error}

            />
            <TextInput
                label="Telphone"
                returnKeyType="next"
                value={tel.value}
                onChangeText={(text) => setTel({ value: text, error: '' })}
                error={!!tel.error}
                errorText={tel.error}

            />

            <Button mode="contained" onPress={handleSave}>
                Save
            </Button>

        </Background>
    )
}

export default MyAccount

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        marginTop: 15,
    },
    item: {
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
    image: {
        width: 110,
        height: 110,
        marginBottom: 8,

    }
})
