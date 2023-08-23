import { createContext, useContext } from "react";
import {create} from "zustand";
import React from 'react'

export interface ThemeStore{
    theme: string;
    changeTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) =>(
{
    theme: "red",
    changeTheme: () => 
    {
        set((state) => ({
            theme: state.theme === "red" ? "blue" : "red" 
        }))
    }
} ))

