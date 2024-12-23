import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Contact = styled.section`
  position: relative;
`
const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 16px;

  textarea {
    resize: none;
    height: 155px;

  }
`
const Field = styled.input`
  font-family: Poppins, sans-serif;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-align: left;
  color: ${theme.colors.font};

  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`

export const S = {
  Contact,
  Form,
  Field
}