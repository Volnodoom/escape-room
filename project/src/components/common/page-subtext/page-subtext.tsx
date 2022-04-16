import { ReactNode } from 'react';
import * as S from './page-subtext.styled';

type PageSubtextProps = {
  children: ReactNode,
}

function PageSubtext ({ children, ...props }: PageSubtextProps): JSX.Element {
  return (
    <S.PageSubtext {...props}>{children}</S.PageSubtext>
  );}

export default PageSubtext;
