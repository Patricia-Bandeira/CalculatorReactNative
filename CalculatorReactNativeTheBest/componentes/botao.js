import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TextInput, Dimensions, View} from 'react-native';

export default props =>{
  const estilosBotoes=[estilos.btn];

  if(props.duplo){
    estilosBotoes.push(estilos.btnDuplo);
  }
  if(props.igual){
    estilosBotoes.push(estilos.btnIgual);
  }
  if(props.operacao){
    estilosBotoes.push(estilos.btnOper);
  }
  if(props.ac){
    estilosBotoes.push(estilos.btnAC);
  }
  if(props.bs){
    estilosBotoes.push(estilos.btnBS);
  }
  if(props.nd){
    estilosBotoes.push(estilos.btnnd);
  }

  return(
    <View style={estilos.fundo}>
    <TouchableHighlight
      onPress={props.aoClicar}
    >
      <Text style={estilosBotoes}>{props.label}</Text>
    </TouchableHighlight>
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo:{
   backgroundColor: '#589632'
  },
  btn:{
    fontSize:30,
    height:Dimensions.get('window').width/4,
    width:Dimensions.get('window').width/4,
    padding:20,
    backgroundColor:'#344c25',
    color:'#fff',
    borderWidth:0.1,
    borderColor:'white',
    textAlign:'center'
  },
  btnOper:{
    color:'#0f0',
    borderRadius:180,
  },
  btnIgual:{
    color:'#f00',
    borderRadius:180
  },
  btnAC:{
    color:'#ff0',
    borderRadius:180
    
    },
  btnnd:{
    color:'#9dda77',
    borderRadius:180
  },
  btnBS:{
    color:'#0ff',
    borderRadius:180
  },
  btnDuplo:{
    width:(Dimensions.get('window').width/4)*2,
  },
})