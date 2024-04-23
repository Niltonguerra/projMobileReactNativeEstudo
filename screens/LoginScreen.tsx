// LoginScreen.tsx
import * as React from 'react';
import {View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import {style} from "../assets/style/styleLogin"
import { TextInput,Button  } from 'react-native-paper';


type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

    const [text, setText] = React.useState("");



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Login</Text>

    <TextInput
      style={style.input}
      label="Email"
      placeholder="digite seu email aqui"
      value={text}
      onChangeText={text => setText(text)}
    />

    <TextInput
      style={style.input}
      label="password"
      placeholder="digite sua senha ;)"
      right={<TextInput.Affix />}
    />

    <Button 
      style={style.button}
      icon="login" 
      mode="contained" 
      onPress={() => navigation.navigate('Home')}
    >
      entrar
    </Button>
    
    <Button 
      style={style.button}
      icon="login" 
      mode="contained" 
      onPress={() => navigation.navigate('CreateAccount')}
    >
      criar conta
    </Button>
    
    </View>
  );
}

export default LoginScreen;
