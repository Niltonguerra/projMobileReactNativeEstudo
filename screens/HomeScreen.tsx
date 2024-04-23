// HomeScreen.tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import { TextInput,Button  } from 'react-native-paper';

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>


            <Button 
                
                
                mode="contained" 
                onPress={() => navigation.navigate('Login')}
            >
            log out
            </Button>



            <Button 
                
                
                mode="contained" 
                onPress={() => navigation.navigate('DetailAccount')}
            >
            meus dados
            </Button>




            <Button 
                
                
                mode="contained" 
                onPress={() => navigation.navigate('Product')}
            >
            produto
            </Button>








        </View>
    );
}

export default HomeScreen;
