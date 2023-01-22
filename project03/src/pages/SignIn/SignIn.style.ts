import COLORS from '@style/colors'
import styled from 'styled-components/macro'
import * as CS from '../commom.style'

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`
export const SubmitButton = styled(CS.InputButton)`
  margin-top: 1rem;
  align-self: flex-end;
`
export const Divider = styled.div`
  position: relative;
  width: 60%;
  margin: 3rem auto;
  text-align: center;
  font-size: 2rem;
  color: ${COLORS.PRIMARY_040};

  &::before {
    content: '';
    width: 43%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${COLORS.PRIMARY_030};
    border-radius: 1rem;
  }
  &::after {
    content: '';
    width: 43%;
    height: 2px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: ${COLORS.PRIMARY_030};
    border-radius: 1rem;
  }
`
export const ButtonWrapper = styled.ul`
  width: 40%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`