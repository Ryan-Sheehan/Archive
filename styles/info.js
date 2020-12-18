/* styles.js */
import css from "styled-jsx/css";

export default css`
.info {
  color: #fff;
  width: 40vw;
  position: absolute;
  height: 100vh;
  right: 0;
  transition-delay: 0s;
  transition-duration: 0s;
  transform: translate(40vw);
  transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
  opacity: 0;
}
.info-open {
  pointer-events:none;
  color: #fff;
  width: 40vw;
  position: absolute;
  height: 100vh;
  right: 0;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
  transform: translate(40vw);
  opacity: 1;
}
.info-inner {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-right: 50%;
}
.info-name {
  font-family: 'Trattatello';
  font-size: 2.2rem;
  

}
.info-desc {
  font-family: 'ObjectSansRegular';
  
  
}
.info-date {
  
  font-family: 'SwearBannerBoldCilati';
  font-family: 'SwearBannerRegular';
  width: 100%;
  text-align:left;
  font-size: 4.2rem;
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
`;
