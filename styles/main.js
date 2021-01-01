/* styles.js */
import css from "styled-jsx/css";

export default css`
    .container {
      height: 100vh;
      overflow:visible;
      
      display: grid;
      grid-template-columns: 40vw 60vw;
      ponter-events:none;
      grid-template-rows: 100vh;
      margin: 0rem;
      position: relative;
      padding: 0;
      transition-delay: 0s;
      transition-duration: 0.5s;
      transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
      transform: translateX(0);
      backgroundColor:#fff;
    }

    .container-pushed {
      transition-duration: 0.8s;
      transform: translateX(-40vw);
    }
    ::selection {
      background: #000; 
      color: #fff;
    }
    ::-moz-selection {
      background: #000; 
      color: #fff;
    }
    .mode-menu {
      opacity:1;
      pointer-events:auto;
      position: absolute;
      z-index:1000000000000;
      bottom: 1.25rem;
      right: 1.25rem;
      display:flex;
      flex-direction: column;
      border-radius: 10px;
      border: 1px solid black;
      background-color: #fff;
      overflow:hidden;
    }
    .mode {
      
      font-family: 'SwearDisplayRegular';

      color: #000;
      padding: 0.625rem;
      font-size: 2rem;
      height: 100%;
      border-right: 0;
      height: 100%;
      display: flex;
      justify-content:center;
      align-items: center;
      cursor: pointer;
      transition-duration: 500ms;
    }
    .mode-not-selected:hover {
      background-color: #aaa;
    }
    .mode:active {
      
    }
    .mode-selected {
      color: #fff;
      background-color: #000;
      transition-duration: 500ms;
    }
    .mode:last-of-type {
      border-right: 0;
    }
    

    @media only screen and (max-width: 768px) {
      body {

      }
      .container {

        
        
        
      }

      .mode-menu {
        opacity:0;
        pointer-events:none; 
      }
    }

`;