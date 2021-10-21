# CalculatorReactNative
 Calculadora feita no Expo online

[Click here](https://snack.expo.dev/@patriciaban/a7b665)
##
![image](https://user-images.githubusercontent.com/92181116/138018479-545ea6ce-cd5d-4470-9ea4-534fc346f672.png)


Cod:

__*Inportando itens necessários*__
```
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Vibration } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
```
#

__*Criando variáveis*__ - Valo1, Valor2 e Resultado
```
const [valor1,setValor1]=useState(0);
const [valor2,setValor2]=useState(0);
const [resultado,setResultado]=useState(0);
``` 
#
__*Adicionando funções*__

1.Soma
```
const soma = ()=>{
  setResultado(parseFloat(valor1)+parseFloat(valor2))
}
```


2.Multiplicação
```
const mult = ()=>{
  setResultado(parseFloat(valor1)*parseFloat(valor2))
}
```

3.Subtraçao
```
const sub = ()=>{
  setResultado(parseFloat(valor1)-parseFloat(valor2))
}
```

4.Divisão
```
const div = ()=>{
  setResultado(parseFloat(valor1)/parseFloat(valor2))
}
```

5.Limpador
```
const limpa = ()=>{
  setValor1(0);
  setValor2(0);
  setResultado(0);
}
```
#

__*Linha branca no início da tela*__
```
  return (
    <View style={estilo.fundo}>
    <Text style={{ color: 'white',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#6495ED'}}>___________________________</Text>
```
![image](https://user-images.githubusercontent.com/92181116/138220138-061a088f-ade5-4bfc-9ab8-7f4e9b1db99d.png)

# 
```

   <View style={{resizeMode:'center',paddingLeft: 40, paddingRight: 40,}}>
     <View style={{height: 70, width: 280, backgroundColor:'#836FFF'}}/>
      </View>

      
      <Text style={estilo.titulo}> CALCULADORA </Text>
      <TextInput
      style={estilo.display}
      keyboardType='numeric'
      value={String(valor1)}
      onChangeText={(texto)=> setValor1(texto)}
    />
     <TextInput
      style={estilo.display}
      keyboardType='numeric'
      value={String(valor2)}
      onChangeText={(texto)=> setValor2(texto)}
      />    
      <TextInput
      style={estilo.display}
      keyboardType='numeric'
      value={String(resultado)}
      onChangeText={(texto)=> setResultado(texto)}
      /> 
{/*SOMA*/}
      <TouchableHighlight 
      style={estilo.soma}
      onPress={()=>soma()}
      >
      <Text style={estilo.letSOMA}> SOMAR </Text>
      </TouchableHighlight>

{/*MULTIPLICAÇÃO*/}
       <TouchableHighlight 
      style={estilo.mult}
      onPress={()=>mult()}
      >
      <Text style={estilo.letMULT}> MULTIPLICAR </Text>
      </TouchableHighlight>

{/*SUBTRAÇÃO*/}
       <TouchableHighlight 
      style={estilo.sub}
      onPress={()=>sub()}
      >
      <Text style={estilo.letSUB}> SUBITRAÇÃO </Text>
      </TouchableHighlight>
{/*DIVISÃO*/}
       <TouchableHighlight 
      style={estilo.div}
      onPress={()=>div()}
      >
      <Text style={estilo.letDIV}> DIVISÃO </Text>
      </TouchableHighlight>

{/* BOTÂO LIMPAR*/}
      <TouchableHighlight 
      style={estilo.limpa}
      onPress={()=>limpa()}
      >
      <Text style={estilo.letSOMA}> LIMPAR </Text>
      </TouchableHighlight>

    </View>
  );
}
const estilo = StyleSheet.create({
  titulo:{
    color:'#00008B',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
   display:{
    borderWidth:1,
    borderRadius:10,
    width:300,
    borderColor: 'white',
     marginTop:6,
    padding:10,
    alignSelf: 'center',
    alignItems:'center'
   },
   soma:{
   backgroundColor: '#3A5FCD',
   width:300,
   height:50,
   borderRadius:5,
   marginTop:20,
   alignSelf: 'center',
   alignItems:'center'
   },
   letSOMA: {
     marginTop:15,
     fontWeight: 'bold',
     color: 'white'
   },
   mult:{
   backgroundColor: '#0000EE',
   width:300,
   height:50,
   marginTop:20,
   borderRadius:5,
   alignSelf: 'center',
   alignItems:'center'
   },
   letMULT: {
     marginTop:15,
     fontWeight: 'bold',
     color: 'white'
    },
   sub:{
   backgroundColor: '#0000CD',
   width:300,
   height:50,
   marginTop:20,
   borderRadius:5,
   alignSelf: 'center',
   alignItems:'center'
   },
   letSUB: {
     marginTop:15,
     fontWeight: 'bold',
     color: 'white'
       },
   div:{
   backgroundColor: '#00008B',
   width:300,
   height:50,
   marginTop:20,
   borderRadius:5,
   alignSelf: 'center',
   alignItems:'center'
   },
   letDIV: {
     marginTop:15,
     fontWeight: 'bold',
     color: 'white'
   },
   fundo:{
     flex:1,
     backgroundColor: '#836FFF'
    },
   limpa:{
   backgroundColor: '#3A5FCD',
   width:200,
   height:50,
   borderRadius:5,
   marginTop:20,
   alignSelf: 'center',
   alignItems:'center'
   }
});
```

