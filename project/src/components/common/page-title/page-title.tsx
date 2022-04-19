import { ReactNode } from 'react';
import * as S from './page-title.styled';

type PageTitleProps = {
  children: ReactNode,
}

function PageTitle({ children, ...props }: PageTitleProps): JSX.Element {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
}

export default PageTitle;
