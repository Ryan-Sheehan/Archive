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
  .list {
    display: grid;
    margin: 0;
    padding: 0;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));
  }

  .list > li {
    display: block;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
    border-left: 0;
    transition-duration: 500ms;
    word-wrap: break-word;

  }
  .list > li:hover {
     border-left: 0px solid black;
    
  }

  .list a {
    text-decoration: none;
    display: block;
    flex-grow: 1;
    color: #333;
  }

  .list h3 {
    margin: 0;
    padding: 0;
    line-height: 1em;
  }

  .list img {
    display: block;
    height: auto;
    width: 100%;
    margin-right: 0.5rem;
    border-radius: 2px;
  }

  .list .noImage {
    border: 1px solid red;
  }

  .link {
    cursor: pointer;
  }
`;
