import  {createContext} from 'react'


export const ThemeContext = createContext()
export const theme = {
    font:{
        display: `xants, serif`,
        body:'century-gothic, sans-serif',
    },
    shadow: '2px 2px 4px rgba(0,0,0,.3)',
    color:{
        teal: '#67a58a',
        hover: '#75ac49',
        background: '#f2ffc6',
        white: '#ffffff',
        grayDark: '#707070',
        grayLight: '#ededed'
    },
}





