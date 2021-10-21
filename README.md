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

__*Adicionei um quadrado invisível para que a calculadora fica-se no meio*__
```
   <View style={{resizeMode:'center',paddingLeft: 40, paddingRight: 40,}}>
     <View style={{height: 70, width: 280, backgroundColor:'#836FFF'}}/>
   </View>
```
![image](https://user-images.githubusercontent.com/92181116/138223988-81ff3553-fb15-4be6-a80e-ab4588034603.png)

#
__*Título*__
      `<Text style={estilo.titulo}> CALCULADORA </Text>` 
      
  ![image](https://user-images.githubusercontent.com/92181116/138224022-8565a8f8-a2cb-4e90-8f54-c1d3a0dafeac.png)
    
##      
__*Adicionando TextInput*__

      <TextInput
      style={estilo.display}
      keyboardType='numeric'
      value={String(valor1)}
      onChangeText={(texto)=> setValor1(texto)}/>
    
     <TextInput
      style={estilo.display}
      keyboardType='numeric'
      value={String(valor2)}
      onChangeText={(texto)=> setValor2(texto)}/> 
         
      <TextInput
      style={estilo.display}
      keyboardType='numeric'
      value={String(resultado)}
      onChangeText={(texto)=> setResultado(texto)}/> 
      
      

 ![image](https://user-images.githubusercontent.com/92181116/138224315-c4f9138c-0fbe-4154-844a-b35296cc1737.png)

  #
  __*Adicionando Botões*__  
  1.Soma
  ```
{/*SOMA*/}
      <TouchableHighlight 
      style={estilo.soma}
      onPress={()=>soma()}>
      <Text style={estilo.letSOMA}> SOMAR </Text>
      </TouchableHighlight>
```
![image](https://user-images.githubusercontent.com/92181116/138225080-60fef7f4-2b1f-4412-890d-e2111029ed38.png)

2.Multiplicação
```
{/*MULTIPLICAÇÃO*/}
       <TouchableHighlight 
      style={estilo.mult}
      onPress={()=>mult()}>
      <Text style={estilo.letMULT}> MULTIPLICAR </Text>
      </TouchableHighlight>
```
![image](https://user-images.githubusercontent.com/92181116/138225143-5d6208a3-5756-4083-81ca-b530513cb3e7.png)


3.Subtração
```
{/*SUBTRAÇÃO*/}
       <TouchableHighlight 
      style={estilo.sub}
      onPress={()=>sub()}>
      <Text style={estilo.letSUB}> SUBITRAÇÃO </Text>
      </TouchableHighlight>       
  ```
   
    
    ![image](https://user-images.githubusercontent.com/92181116/138225190-cdd0579e-422f-4924-95e9-837e09020cdf.png) 
    
   4.Divisão
 ```  
{/*DIVISÃO*/}
       <TouchableHighlight 
      style={estilo.div}
      onPress={()=>div()}
      >
      <Text style={estilo.letDIV}> DIVISÃO </Text>
      </TouchableHighlight>
```
5.Limpar
```
{/* BOTÂO LIMPAR*/}
      <TouchableHighlight 
      style={estilo.limpa}
      onPress={()=>limpa()}
      >
      <Text style={estilo.letSOMA}> LIMPAR </Text>
      </TouchableHighlight>
```


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


