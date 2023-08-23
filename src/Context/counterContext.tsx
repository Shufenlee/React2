import { ReactNode, createContext, useCallback, useMemo, useState } from "react";
import React from "react";

export interface CounterContextProps{
    counter: number;
}

export const CounterContext = createContext<CounterContextProps | undefined>(undefined);

export interface CounterProviderProps{
    defaultCounter?: number;
} 

export function CounterProvider({defaultCounter = 0} : CounterProviderProps)
{
    const [counter, setCounter] = useState<number>(defaultCounter);

    const addCounter = useCallback(() => {
        setCounter((prevCount) => prevCount + 1);
      }, []);

      const CounterContextData: CounterContextProps = useMemo(() => {
        return {
            addCounter,
            counter,
        };
      }, [addCounter, counter]);
    
    return (
        <CounterContext.Provider value={CounterContextData}>
         
        </CounterContext.Provider>
        
    )
    
}

