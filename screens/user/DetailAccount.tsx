// DetailAccountScreen.tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import { TextInput,Button  } from 'react-native-paper';

type DetailAccountScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'DetailAccount'>;
};

const DetailAccountScreen: React.FC<DetailAccountScreenProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>DetailAccount Screen</Text>

            <Button 


                mode="contained" 
                onPress={() => navigation.navigate('Home')}
            >
            voltar
            </Button>


            <Button 
                mode="contained" 
                
            >
            excluir conta
            </Button>


            <Button 
                mode="contained" 
                onPress={() => navigation.navigate('EditAccount')}
            >
            Editar dados
            </Button>

        </View>
    );
}

export default DetailAccountScreen;
