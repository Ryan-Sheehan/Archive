/* styles.js */
import css from "styled-jsx/css";

export default css`

.info {
  pointer-events:none;
  color: #fff;
  width: 40vw;
  position: absolute;
  height: 100vh;
  right: 0;
  transition-delay: 0s;
  transition-duration: 500s;
  transform: translate(40vw);
  transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
  opacity: 0;
}
.info-open {
  pointer-events:auto;
  color: #fff;
  width: 40vw;
  position: absolute;
  height: 100vh;
  right: 0;
  transition-delay: 0s;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
  transform: translate(40vw);
  opacity: 1;
}
.info-x {
  font-family: 'SwearVar';

  font-variation-settings: 'wght' 50;
  pointer-events: auto;
  cursor:pointer;
  color: #333132;
  font-size: 3rem;
  top: 0.625rem;
  right: 1.25rem;
  padding: 0 0.3125rem;
  padding-top: 0.3125rem;

  height: 2.5rem;
  display: flex;
  align-items:center;
  justify-content:center;
  width: 2.5rem;
  position: absolute;
  z-index:10000;
  
  border-radius: 10px;
  overflow: visible;
  transition-duration: 200ms;
  transition-timing-function:linear;
  transform: scale(1);
  opacity: 1;
  
}
.info-x-hover {
  font-variation-settings: 'wght' 200;
  pointer-events: auto;
  color: #000;
  background-color: #fff;
  
  transform: scale(1);
  opacity: 1;
  animation: 1000ms linear pulse alternate infinite;
  
}
.info-x:active {
  transform: scale(0.8);
}
@keyframes pulse {
         0% {
           font-variation-settings: 'wght' 200;

         }
         100% {
           font-variation-settings: 'wght' 400;
         }
       }
.info-inner {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-right: 50%;
  transition-duration: 1500ms;
}
.info-name {
  font-family: 'Trattatello';
  font-size: 3rem;
  line-height: 4.5rem;
  margin-top:0.5rem;
  

}
.info-desc {
  font-family: 'ObjectSansRegular';
  
  
}
.info-date {
  
  font-family: 'SwearBannerBoldCilati';
  font-family: 'SwearBannerRegular';
  width: 100%;
  text-align:left;
  font-size: 4rem;
  line-height: 4.6rem;
  margin-bottom:1.25rem;
  animation: slideInFromLeft 0.5s cubic-bezier(0.12, 0, 0.39, 0);
  animation-delay: 0s;

  
}
@keyframes slideInFromLeft {
         0% {
           transform: translateX(10px);
           opacity:0;

         }
         100% {
           transform: translateX(0);
            opacity: 1;
         }
       }

  
  @media only screen and (max-width : 1024px) {    
    .info-inner {

      padding-right: 20%;
    }

  }
`;
