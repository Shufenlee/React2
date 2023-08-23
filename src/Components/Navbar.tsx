import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../Store/themeStore";
import { Box} from '../assets/style'

export function Navbar(){
    var {changeTheme, theme} = useThemeStore()
    
    return (
        <>
        {console.log("kkkk")}

        <Box textColor={theme} >
            <Link to={"/"}> Home </Link>
            <h1> text </h1>
        </Box>
        <button onClick={() => {
            theme = (theme === "blue") ? "red" : "blue";
            changeTheme()}}> change </button>

        </>
    )
}


