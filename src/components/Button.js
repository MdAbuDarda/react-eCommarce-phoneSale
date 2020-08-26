import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  font-size: 1.4rem;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(prop) =>
    prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(prop) => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.2rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  margin: 0.2rem 0.5rem 0.2rem 0;
  &:hover {
    background: ${(prop) =>
      prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
