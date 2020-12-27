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
`;