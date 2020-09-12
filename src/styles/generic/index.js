import { createGlobalStyle } from "styled-components"

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	}
  ::selection {
    background-color: var(--color-yellow)!important;
    color: var(--color-gray)!important;
  }
	body {
    font-size: 14px!important;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-purple-white)!important;
	}
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-gray);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-yellow);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-lighter);
  }
  html {
    scroll-behavior: smooth;
  }
`

export default Generic
