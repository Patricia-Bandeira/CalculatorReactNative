import Constants from 'expo-constants';
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import Display from './componentes/display';
import Btn from './componentes/botao';

let estados={
    valorTela:'',
    resultado:0,
    operado: false,
    ponto: false
}

export default function App(){
    const [vtela, setVtela]=useState(estados.valorTela);
    const [vres, setVres]=useState(estados.resultado);
    
    const addDigito=(d)=>{
        if (d=='+'|| d=='-'||d=='/'||d=='*'){
            estados.ponto= false;
        }
        if (d=='.' && !estados.ponto){
            estados.ponto=true;
            estados.operado=false;
        } else if (d=='.' && estados.ponto){
            return
        }
        if ((d=='+'|| d=='-'||d=='/'||d=='*') && estados.operado){
              estados.valorTela=estados.resultado;
            estados.resultado=0;
        }
        estados.valorTela=estados.valorTela+d;
        setVtela(estados.valorTela);
        setVres(estados.resultado);
        estados.operado=false;
    }
    
    const limparTela=()=>{
        estados={
            valorTela:'',
            resultado:0,
            operado: false,
            ponto: false
        }
        setVtela(estados.valorTela)
        setVres(estados.resultado)
    }
    
    const opera=(d)=>{
        if(d=='AC'){
            limparTela();
            return;
        }
        if(d=='BS'){
            estados.valorTela=vtela.substring(0,(vtela.length-1));
            setVtela(estados.valorTela);
            return;
        }
        try{
            estados.resultado=eval(estados.valorTela);
            estados.operado=true;
            setVres(estados.resultado);
        } catch {
            estados.resultado='Erro';
            estados.operado=true;
            setVres(estados.resultado)
        }
    }
    
    return(
        <View style={estilos.conteiner}>
            <Display valor={vtela} res={vres}/>
            <View style={estilos.botoes}>
            <Btn label='AC' ac aoClicar={()=>{opera('AC')}}/>
              <Btn label="(" nd aoClicar={()=>{addDigito('(')}}/>
              <Btn label=")" nd aoClicar={()=>{addDigito(')')}}/>
              <Btn label='/' operacao aoClicar={()=>{addDigito('/')}}/>
              <Btn label='7' nd aoClicar={()=>{addDigito('7')}}/>
              <Btn label='8' nd aoClicar={()=>{addDigito('8')}}/>
              <Btn label='9' nd aoClicar={()=>{addDigito('9')}}/>
              <Btn label='*' operacao aoClicar={()=>{addDigito('*')}}/>
              <Btn label='4' nd aoClicar={()=>{addDigito('4')}}/>
              <Btn label='5' nd aoClicar={()=>{addDigito('5')}}/>
              <Btn label='6' nd aoClicar={()=>{addDigito('6')}}/>
              <Btn label='-' operacao aoClicar={()=>{addDigito('-')}}/>
              <Btn label='1' nd aoClicar={()=>{addDigito('1')}}/>
              <Btn label='2' nd aoClicar={()=>{addDigito('2')}}/>
              <Btn label='3' nd aoClicar={()=>{addDigito('3')}}/>
              <Btn label='+' operacao aoClicar={()=>{addDigito('+')}}/>
              <Btn label='0' nd aoClicar={()=>{addDigito('0')}}/>
              <Btn label='.' nd aoClicar={()=>{addDigito('.')}}/>
              <Btn label='<-' bs aoClicar={()=>{opera('BS')}}/>
              <Btn label='=' igual aoClicar={()=>{opera('=')}}/>

              

            </View>        
        </View>      
    );
}

const estilos = StyleSheet.create({
  conteiner:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  botoes:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
