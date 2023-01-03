import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body { 
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #181818;
    background-image: 
     url("https://images.pexels.com/photos/3879060/pexels-photo-3879060.jpeg?auto=compress&cs=tinysrgb&w=1600");
    margin: 0;
    ${
      '' /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; */
    }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   	 font-family: 'Yeon Sung', regular;
  
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul {list-style:none}
`;
