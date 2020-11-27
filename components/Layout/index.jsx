import styled from "@emotion/styled";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <LayoutStyled>{children}</LayoutStyled>
    </>
  );
}

const LayoutStyled = styled.main`
  padding: 0 2rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;
