import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderStyled>
      <header className="container">
        <ul className="nav-header">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <p> Umma Ahimsha</p>
      </header>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.nav`
  position: sticky;
  z-index: 2;
  top: 0;
  padding: 2rem 0;
  margin-bottom: 3rem;

  backdrop-filter: saturate(180%) blur(30px);

  @media screen and (min-width: 30em) {
    margin-top: 2rem;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul.nav-header {
      display: flex;

      li {
        padding-right: 1rem;
      }
    }
  }

  .react-toggle-track-check {
    height: 16px;
    left: 5px;
    svg {
      padding: 1px;
      color: #ffdf75;
    }
  }
  .react-toggle-track-x {
    height: 16px;
    svg {
      padding: 1.5px;
      color: #ffdf75;
    }
  }
`;
