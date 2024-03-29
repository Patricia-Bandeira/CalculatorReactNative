# Calculator React Native
 *Calculadora feita no Expo online*
 
 Atulalizando minha calculadora pois aprendi novos comandos, caso queira acessar a versão anterior da calculadora veja o arquivo __*"MyCalculator.js"*__
 #
 [Click here](https://snack.expo.dev/@patriciaban/7d0bef) to open "CalculatorReactNativeTheBest"
 > ![image](https://user-images.githubusercontent.com/92181116/138989652-4e2e1a3f-b6d2-402d-953d-67dc088b67f2.png)

#
[Click here](https://snack.expo.dev/@patriciaban/a7b665) to open "MyCalculator.js"
> ![image](https://user-images.githubusercontent.com/92181116/138356880-c4165274-5abc-45b0-aba4-487319a73b45.png)


>>>>>>>>>>Código:

__*Importando itens necessários*__
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
      <Text style={estilo.letSUB}> SUBTRAÇÃO </Text>
      </TouchableHighlight>       
  ``` 
 ![image](https://user-images.githubusercontent.com/92181116/138353486-4dcd8895-2934-4ea9-bea7-7d59931fa163.png)
   
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
![image](https://user-images.githubusercontent.com/92181116/138353598-c2c7d816-148d-4eea-b1b5-0b0c1bfb096e.png)

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
![image](https://user-images.githubusercontent.com/92181116/138353677-3af88e85-6108-4fe3-a3a9-6aab1f3e666a.png)

__*Finalização*__
```
    </View>
  );
}
```
__*Aplicando o estilo*__
```
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
#
<a href="https://github.com/Patricia-Bandeira" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 
<a href = "mailto:patriciabandeira.2611@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>


