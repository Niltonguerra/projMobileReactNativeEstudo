// EditAccountScreen.tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import { TextInput,Button  } from 'react-native-paper';

type EditAccountScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'EditAccount'>;
};

const EditAccountScreen: React.FC<EditAccountScreenProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>EditAccount Screen</Text>
            


            <Button 
                
                
                mode="contained" 
                onPress={() => navigation.navigate('DetailAccount')}
            >
            voltar
            </Button>


            <Button 
                
                
                mode="contained" 
                
            >
            Enviar
            </Button>




        </View>
    );
}

export default EditAccountScreen;
