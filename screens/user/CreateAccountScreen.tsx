// CreateAccountScreen.tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import { TextInput,Button  } from 'react-native-paper';

type CreateAccountScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'CreateAccount'>;
};

const CreateAccountScreen: React.FC<CreateAccountScreenProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CreateAccount Screen</Text>
            
            <Button 
                
                
                mode="contained" 
                onPress={() => navigation.navigate('Login')}
            >
            voltar
            </Button>



            <Button 
                
                
                mode="contained" 
                
            >
            enviar
            </Button>
        </View>
    );
}

export default CreateAccountScreen;
