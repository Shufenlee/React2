import { useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form, inputProps, formProps } from './form/form'
import React from 'react'
import { LoadingContext } from './Context/LoadingContext'
import { Box, TEXT } from './assets/style'
import { useThemeStore } from './Store/themeStore'
import { CounterContext } from './Context/counterContext'

const inputsP : inputProps[] = 
    [
      {name: 'name',
       type: 'text',
       label: 'name',
       onChange: () => {console.log("onChange for name");}
      },
     { 
      name: 'password',
      type: 'text',
      label: 'password',
      onChange: ()=>{console.log("onChange for password")}
    }
  ]

  const formP : formProps = {
    submitname: 'submit',
    inputs: inputsP,
    onSubmit: ()=>{console.log("....onsubmit")}
  }

function App() {
  const [count, setCount] = useState(0)
  //const {changeLoading, loading} = useContext(LoadingContext)

  const [textcolor, setTextcolor] = useState<string>('blue')
  const {theme} = useThemeStore()


  return (
    <>
    
    {console.log({formP})}
    <Box textColor={theme}>
        <button onClick={() => setTextcolor('red')}> Change Color </button>
        <Form submitname={formP.submitname} inputs={formP.inputs} onSubmit={formP.onSubmit}></Form>

    </Box>
    </>
  )
}

export default App
