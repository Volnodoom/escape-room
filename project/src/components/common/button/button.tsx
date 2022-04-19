import { ReactNode } from 'react';
import * as S from './button.styled';

type BtnProps = {
  children: ReactNode,
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => void,
  disabled?: boolean | undefined,
}

function Button ({ children, ...props }: BtnProps): JSX.Element {
  return (
    <S.Button {...props}>{children}</S.Button>
  );}

export default Button;
