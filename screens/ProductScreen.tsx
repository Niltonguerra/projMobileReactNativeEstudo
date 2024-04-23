// ProductScreen.tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import { TextInput,Button  } from 'react-native-paper';

type ProductScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Product'>;
};

const ProductScreen: React.FC<ProductScreenProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Product Screen</Text>
            
            <Button 
                
                icon="login" 
                mode="contained" 
                onPress={() => navigation.navigate('Home')}
            >
            voltar
            </Button>
    
        </View>
    );
}

export default ProductScreen;
