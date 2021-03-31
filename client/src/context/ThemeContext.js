import React, {createContext, useState} from 'react'
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext()
export const theme = {
    font:{
        display: `xants, serif`,
        body:'century-gothic, sans-serif',
    },
    color:{
        teal: '#8ec8af',
        hover: '#75ac49',
        background: '#f2ffc6',
        white: '#ffffff',
        grayDark: '#707070',
        grayLight: '#ededed'
    },
}





