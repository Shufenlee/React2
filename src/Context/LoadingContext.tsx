import { ReactNode, createContext, useCallback, useMemo, useState } from "react";
import { Loading } from "../Loading/Loading";
import React from "react";

export interface LoadingContextProps{
    loading: boolean;
}

export const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export interface LoadingProviderProps{
    defaultLoading?: boolean;
    children: ReactNode;
} 

export function LoadingProvider({defaultLoading = false, children} : LoadingProviderProps)
{
    const [loading, setLoading] = useState<boolean>(defaultLoading);

    const changeLoading = useCallback(() => {
        setLoading(!loading);
      }, []);

      const loadingContextData: LoadingContextProps = useMemo(() => {
        return {
            changeLoading,
            loading,
        };
      }, [changeLoading, loading]);
    
    return (
        <LoadingContext.Provider value={loadingContextData}>
            {loading ? <Loading /> : children}
        </LoadingContext.Provider>
        
    )
    
}

