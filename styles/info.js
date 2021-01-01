/* styles.js */
import css from "styled-jsx/css";

export default css`
.gallery-info {
  display:flex;

}
.gallery-info-text {
  max-width: 400px;
  padding: 0 0.625rem;
}
.gallery-info-image {

}
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
  color: #C0C0C0;
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
.info-link {
  opacity:1;
  font-family: 'SwearVar';
  text-decoration:none;
  color: #fff;
  font-size: 1rem;

  
  display: flex;
    flex-flow: row nowrap;

    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 0 5px;
    font-variation-settings: 'wght' 100;
    transition: all 0.1s ease-in-out;
}
.info-link:hover {
  color: #fff;
  
  opacity:1;
  font-variation-settings: 'wght' 100;
   margin: 0 0 5px;

 
}

  
  .info-link-hover {
 padding; 1.25rem 0.625rem;
  text-align: center;
  margin: 0;
  padding: 0;
  transition: all 0.1s ease-in-out;

  position: relative;
        
}
.info-link-hover:before,.info-link-hover:after {
 content: "";
  position: absolute;
  bottom: -3px;
  width: 0px;
  height: 1px;
  margin: 5x 0 0;
  transition: all 0.1s ease-in-out;
  transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
  transition-duration: 0.5s;
  opacity: 0;
  background-color: rgba(237,255,0,1);

}
.info-link-hover:before {
  left:0px;
}
.info-link:hover .info-link-hover:before {
  width: 100%;
  opacity: 1;
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
  padding-right: 20%;
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
  padding: 1.25rem 0;

  
  
}
.info-date::selection {
  background: yellow !important;
}
.info-date::-moz-selection {
  background: yellow !important;
}

.info-name::selection {
  background: #EDFF00 !important;
}
.info-name::-moz-selection {
  background: #EDFF00 !important;
}
.info-desc::selection {
  background: #EDFF00 !important;
}
.info-desc::-moz-selection {
  background: #EDFF00 !important;
}
.info-link-hover::selection {
  background: #EDFF00 !important;
}
.info-link-hover::-moz-selection {
  background: #EDFF00 !important;
}
.info-date {
  

  font-family: 'SwearBannerRegular';
  width: 100%;
  text-align:left;
  font-size: 5rem;
  line-height: 4.6rem;
  margin-bottom:0.625rem;
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

@keyframes linkFadeIn {
         0% {

           opacity:0;

         }
         100% {
           
            opacity: 0.5;
         }
       }

  
  @media only screen and (max-width : 768px) {    
    .info-inner {

      padding-right: 20%;
    }

  }
`;
