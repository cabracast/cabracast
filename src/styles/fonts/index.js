import { createGlobalStyle } from "styled-components"

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Futura-Book';
    src: url('/assets/fonts/Futura-Book.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/Futura-Book.woff') format('woff'),
         url('/assets/fonts/Futura-Book.ttf') format('truetype'),
         url('/assets/fonts/Futura-Book.svg#FuturaBT-Book') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Futura-Bold';
    src: url('/assets/fonts/Futura-Bold.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/Futura-Bold.woff') format('woff'),
         url('/assets/fonts/Futura-Bold.ttf') format('truetype'),
         url('/assets/fonts/Futura-Bold.svg#FuturaBT-Book') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`

export default Fonts
