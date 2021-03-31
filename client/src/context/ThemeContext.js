import  {createContext} from 'react'


export const ThemeContext = createContext()
export const theme = {
    font:{
        display: `xants, serif`,
        body:'century-gothic, sans-serif',
    },
    shadow: '2px 2px 4px #7A7A7A',
    color:{
        teal: '#8ec8af',
        hover: '#75ac49',
        background: '#f2ffc6',
        white: '#ffffff',
        grayDark: '#707070',
        grayLight: '#ededed'
    },
}





