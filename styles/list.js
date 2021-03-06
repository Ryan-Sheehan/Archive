/* styles.js */
import css from "styled-jsx/css";

export default css`
.contact-email-spinning {
        animation: rotation 2s infinite linear;
      }
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
      .ryan-list {
          padding: 0.625rem;
          ponter-events:auto;
          height: 100%;
          grid-column-start: 2;
          grid-row-start:1;
          overflow-y: auto;
          overflow-x: auto;
          
          scrollbar-width: none;
          transition-duration: 0.6s;
        }
        .ryan-list::-webkit-scrollbar {
          display: none;
        }

  .ryan-list-inner {
    display: grid;
    margin: 0;
    padding: 0;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));
  }

  .ryan-list-inner > li {
    display: block;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
    border-left: 0;
    transition-duration: 500ms;
    word-wrap: break-word;
    cursor: pointer;

  }
  .ryan-list-inner > li:hover {
     border-left: 0px solid black;
    
  }

  .ryan-list-inner a {
    text-decoration: none;
    display: block;
    flex-grow: 1;
    color: #333;
  }

  .ryan-list-inner h3 {
    margin: 0;
    padding: 0;
    line-height: 1em;
  }

  .ryan-list-inner img {
    display: block;
    height: auto;
    width: 100%;
    margin-right: 0.5rem;
    border-radius: 2px;
  }

  .ryan-list-inner .noImage {
    border: 1px solid red;
  }

  .ryan-list-inner {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .ryan-list {
      padding-top:50vh;
      height:50vh;
      grid-column-start: 1;
      grid-column-end: 3;
      
    }
    .ryan-list-inner > li:last-of-type {
      margin-bottom: 60vh;
    }
    
  }
  
`;
