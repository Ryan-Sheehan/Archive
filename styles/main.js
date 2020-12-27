/* styles.js */
import css from "styled-jsx/css";

export default css`
.container {

          height: 100vh;
          overflow:visible;
          display: grid;
          grid-template-columns: 40vw 60vw;
          
          grid-template-rows: 100vh;
          margin: 0rem;
          position: relative;
          padding: 0;
          transition-delay: 0s;
          transition-duration: 0.5s;
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
          margin-right: translateX(0);
          backgroundColor:#fff;
        }

        .container-pushed {

          height: 100vh;
          
          display: grid;
          grid-template-columns: 40vw 60vw;

          grid-template-rows: 100vh;
          margin: 0rem;
          position: relative;
          padding: 0;
          transition-delay: 0s;
          transition-duration: 0.8s;
          transform: translateX(-40vw);
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
          backgroundColor:#000;
          
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
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  display:flex;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #fff;
}
.mode {
  
  font-family: 'SwearDisplayRegular';
  color: #000;
  padding: 0 0.625rem;
  font-size: 2rem;
  height: 100%;
  border-right: 1px solid black;
  
  cursor: pointer;
}
.mode:last-of-type {
  
  border-right: 0;
  
}
`;