import { ReactNode } from 'react';
import * as S from './page-heading.styled';

type PageHeadingProps = {
  children: ReactNode,
}

function PageHeading ({ children, ...props }: PageHeadingProps): JSX.Element {
  return (
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );}

export default PageHeading;
