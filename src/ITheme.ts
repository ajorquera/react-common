export default interface ITheme {
  breakpoints: string[]
  fontSizes: number[]
  space: number[]
  colors: {
    primary: string
    secondary: string

    background: string
    surface: string

    error: string
    success: string
    warning: string

    [other: string]: string
  }
}
