/* styles.js */
import css from "styled-jsx/css";

export default css`
.sidebar {
  display: block;
  height: 100%;
  grid-column-start: 1;
  grid-row-start:1;
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  padding: 0 0.625rem;
  transition-duration: 0.6s;
}
.sidebar-name {
  font-size: 3.6rem;
  line-height: 4rem;
  margin-bottom: 0.625rem;
  cursor:pointer;
}
.sidebar-inner {
  font-family: 'SwearBannerBoldCilati';
  padding: 0 0.625rem;
  grid-column-start: 1;
  grid-column-end: 2;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.sidebar-bio {
  font-family: 'SwearTextRegular';
  font-size: 1.3rem;
  line-height: 1.8rem;
}
.sidebar-description {
  font-family: 'SwearTextRegular';
  font-size: 0.8rem;
  grid-column-start: 3;
  grid-row-start:1;
  grid-row-end: 1;
  height: calc(100%-1.25rem);
  width: 100%;
  overflow: hidden;
  padding: 0 0.625rem;
}
.sidebar-socials {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start:1;
  align-items: center;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  width: 20vw;
  bottom: 1.25rem;
  padding-bottom: 1.25rem;
}
.sidebar-socials-buttons {
  margin-top: 1.25rem;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
}
.sidebar-social {
  height: 3rem;
  margin-right: 0.625rem;
  margin-top: 0.625rem;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .sidebar {
    grid-column-start: 1;
    grid-column-end: 3;
    
    
    display:block;
    
    
  }
  .contact {
    position: absolute;
    height: 50px;
    width: 50px;
    
  }
}
`;