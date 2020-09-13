import { createGlobalStyle } from "styled-components"

const Settings = createGlobalStyle`
  :root {
    --color-gray: #2E3648;
    --color-gray-light: #4D5565;
    --color-gray-lighter: #9D9D9D;
    --color-white: #FFF;
    --color-yellow: #F6F06A;

    --size-header: 90px;
    --size-header-small: 75px;
    --size-max-width-huge: 1440px;
    --size-max-width-large: 1170px;
    --size-max-width-medium: 768px;

    --size-s1: 15px;
    --size-s2: 20px;
    --size-s3: 40px;
    --size-s4: 60px;
    --size-s5: 80px;
    --size-s6: 150px;
    --size-s7: 240px;
  }
`

export default Settings
