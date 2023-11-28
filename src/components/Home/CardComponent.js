// CardComponent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../core/theme';

const CardComponent = ({ name, surname, telephone, imageSource }) => {

  const handlePress = () => {
    console.log('Card Pressed');
  };
  const handleCall = () => {
    console.log('Call Pressed');
  };

  const handleEdit = () => {
    console.log('Edit Pressed');
  };

  const handleDelete = () => {
    console.log('Delete Pressed');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Card style={{ elevation: 5, marginVertical: 10 ,backgroundColor:"white"}}>
        <Card.Content style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image
              source={imageSource}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                marginRight: 16,
              }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text>Name: {name}</Text>
            <Text>surname: {surname}</Text>
            <Text>telephone: {telephone}</Text>
          </View>
        </Card.Content>
        <Card.Actions>
      
        <IconButton
            icon="phone-outline"
            onPress={handleCall}
            iconColor={theme.colors.primary} 
            style={{ marginRight: 8 ,backgroundColor:"#f4f4f5",borderColor:"transparent"}}

          />
          <IconButton
            icon="pencil"
            onPress={handleEdit}
            iconColor={theme.colors.primary} 
            style={{ marginRight: 8 ,backgroundColor:"#f4f4f5",borderColor:"transparent"}}
          />
          <IconButton 
          icon="delete" 
          onPress={handleDelete}
          iconColor={theme.colors.primary}
          style={{ marginRight: 8 ,backgroundColor:"#f4f4f5",borderColor:"transparent"}}

          />
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
};

export default CardComponent;
