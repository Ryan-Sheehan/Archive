/* styles.js */
import css from "styled-jsx/css";

export default css`
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
      opacity:0.4;
      transform: scale(0.8);

    }
    .mode-not-selected:active {
      transform: scale(0.7);

      
    }
    .mode-selected {
      color: #fff;
      background-color: #000;
      transform: scale(1);
      animation: scaleUp 800ms;
    }


    .mode:last-of-type {
      border-right: 0;
    }
    .checkbox-open {
      font-family: 'ObjectSansRegular';
      z-index:1000000000000;
      font-size: 1rem;
      opacity: 1;
      position: absolute;
      bottom: 1.25rem;

      right: 6rem;
      border-radius: 10px;
      border: 1px solid rgba(237,255,0,1);
      background-color: rgba(237,255,0,1);
      padding: 0.625rem;
      transition-duration: 600ms;
      display:flex;
      justify-content: flex-start;
    }
    .checkbox-closed {
      background-color: rgba(237,255,0,1);
      opacity: 0;
      transition-duration: 500ms;
      bottom: -4rem;
      padding: 0.625rem 1.25rem;
    }
    .checkbox-actual {
      display:none;
    }
    .checkbox-toggle {
      border: 1px solid black;
      border-radius: 10px;
      width: 132px;
      height: 98px;
    }
    .checkbox-toggle-on {

    }
    .checkbox-text {
      
      width: 200px;
      padding: 0 0.625rem;
      font-size: 0.85rem;

    }
    .checkbox-toggle::selection {
      background: transparent !important;
    }
    .checkbox-toggle::-moz-selection {
      background: transparent !important;
    }
    .checkbox-text::selection {
      background: #fff !important;
    }
    .checkbox-text::-moz-selection {
      background: #fff !important;
    }

    @keyframes scaleUp {
          0% {
              transform: scale(0.7);
              background-color: #fff;
          }
          70% {
              background-color: #fff;
              transform: scale(1);
          }
          100% {
              
              background-color: #000;
          }
        }
    

    @media only screen and (max-width: 768px) {
      .container {

        
        
        
      }

      .mode-menu {
        opacity:0;
        pointer-events:none; 
      }
    }

`;