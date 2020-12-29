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
    .checkbox-open {
  font-family: 'ProtoGroteskBold';
  z-index:1000000000000;
  font-size: 1rem;
  position: absolute;
    bottom: 1.25rem;
    right: 6rem;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #fff;
    padding: 0.625rem;
    transition-duration: 600ms;
}
.checkbox-closed {
  transition-duration: 500ms;
  bottom: -4rem;
  padding: 0.625rem 1.25rem;
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