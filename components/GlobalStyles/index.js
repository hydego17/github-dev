import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body {
          transition: background 0.3s ease;
          color: #000000;
          background: #ffffff;
          min-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "roboto", Helvetica,
            sans-serif;
          line-height: 20px;

          &::-webkit-scrollbar {
            height: 13px;
            width: 13px;
            border-radius: 20px;
          }

          &::-webkit-scrollbar-track {
            border-radius: 20px;
            background: padding-box rgb(204, 204, 204);
            border-width: 2px;
            border-style: solid;
            border-color: rgb(239, 241, 244);
            border-image: initial;
          }

          &::-webkit-scrollbar-thumb {
            background: rgb(239, 241, 244);
          }
        }

        a {
          color: inherit;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        ul {
          list-style: none;
        }

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        nav {
          background-color: rgba(255, 255, 255, 0.8);
        }

        nav a,
        .links a {
          &:hover {
            color: #507496;
          }
        }

        button:hover {
          color: black;
        }

        .container {
          padding: 0 2rem;
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
        }
        .user-card {
          background: #edf2f7;
        }
      `}
    />
  );
};

export default GlobalStyles;
