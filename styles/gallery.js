/* styles.js */
import css from "styled-jsx/css";

export default css`
.ryan-gallery {
	height: 100%;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start:1;
    overflow-y: auto;

    transition-duration: 500ms;
    overflow-x: hidden;
}
.ryan-gallery::-webkit-scrollbar {
          display: none;
        }
.gallery-item {
	border-radius: 10px;
}
.ryan-gallery-popup {
	position:absolute; 
	background-color:#000; 
	color:#fff;
	
	border-radius: 3px;
	border: 1px solid #fff;
	
	z-index:100000;
	animation: 1s fadeIn linear;
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
@keyframes fadeIn {
        	from {
          		opacity:0;
        	}
        	to {
          		opacity:1;
        	}
      	}
`;