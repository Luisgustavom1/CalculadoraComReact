import React, { useState } from 'react'
import './App.css'

export default function App(){
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)
  const [valorTela, setValorTela] = useState('')

  const Tela = (valor, res) => {
    return(
      <div className={'tela'}>
        <span style={cssValor}>{valor}</span>
        <span style={cssResultado}>{res}</span>
      </div>
    )
  }

  const btn = (onClick, label) => {
    return(
      <button onClick={onClick}>{label}</button>
    )
  }

  // Funções
  const addDigitoTela = (d) => {
    if((d=='/' || d=='*' || d=='-'|| d=='+') && operado){
      console.log('*-+/=')
      setOperado(false)
      setValorTela(resultado + d)
      return
    }
    if(operado){
      setOperado(false)
      console.log('digito true only')
      setValorTela(d)
      return
    }
    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
    console.log(valorDigitadoTela[valorDigitadoTela.length-1])

    if(valorDigitadoTela[valorDigitadoTela.length-1] == '/' || valorDigitadoTela[valorDigitadoTela.length-1] == '+'){
      console.log('nos conforme')
    }
  }

  const limparMemoria = () => {
    setOperado(false)
    setResultado(0)
    setAcumulador(0)
    setValorTela('')
    return
  }

  const Operacao = (oper) => {
    if(oper === 'bs'){
      let vtela = valorTela
      vtela = vtela.substring(0, (vtela.length - 1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r = eval(valorTela)
      setResultado(r)
      setOperado(true)
      setAcumulador(r)
    }catch{
      setResultado('ERRO')
    }
  }

  // Funções
  const cssValor = {
    color: '#FBFFFE',
    fontSize: '18px',
  }

  const cssResultado = {
    color: '#FAA916',
    fontSize: '20px',
    fontWeight: '600',
    alignSelf: 'flex-end'
  }

  const container = {
    width:'320px',
    display:'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    alignItems: 'center',
  }
  return(
    <>
        <h2>Calculadora Padrão</h2>
      <div style={container}>
        {Tela(valorTela, resultado)}
        <div className={'botoes'}>
          {btn(limparMemoria, 'AC')}
          {btn(() => addDigitoTela('*'), '*')}
          {btn(() => addDigitoTela('('), '(')}
          {btn(() => addDigitoTela(')'), ')')}
          {btn(() => addDigitoTela('7'), '7')}
          {btn(() => addDigitoTela('8'), '8')}
          {btn(() => addDigitoTela('9'), '9')} 
          {btn(() => addDigitoTela('/'), '/')} 
          {btn(() => addDigitoTela('4'), '4')} 
          {btn(() => addDigitoTela('5'), '5')}
          {btn(() => addDigitoTela('6'), '6')} 
          {btn(() => addDigitoTela('-'), '-')}
          {btn(() => addDigitoTela('1'), '1')}
          {btn(() => addDigitoTela('2'), '2')}
          {btn(() => addDigitoTela('3'), '3')}
          {btn(() => addDigitoTela('+'), '+')}
          {btn(() => addDigitoTela('.'), '.')}
          {btn(() => addDigitoTela('0'), '0')}
          {btn(() => Operacao('bs'), '<-')}
          {btn(() => Operacao('='), '=')}
        </div>
      </div>
    </>
  )
}