import React, { useContext } from 'react'
import { LoadingContext } from '../Context/LoadingContext'

export interface inputProps {
    name: string,
    label: string,
    value?: string,
    type: string,
    onChange :  () => {}
}

export interface formProps {
    submitname: string,
    inputs: inputProps[],
    onSubmit : () => {}
}

export function Form({submitname, inputs, onSubmit} : formProps){
   // const {changeLoading, loading} = useContext(LoadingContext)

    return (
        <>
        <form onSubmit = {onSubmit}>
        {
            inputs.map((input2, index) => {
                return(
                    <div key={index}>
                    <h1>{index}</h1>
                    <label htmlFor={input2.name}> {input2.label}</label>
                    <input name={input2.name} type={input2.type} onChange={input2.onChange}/> 
                    </div>
                )
            })
            
        }
        <button type='submit'>Send</button>
        </form>


        </>
    )
}