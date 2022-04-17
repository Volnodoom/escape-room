import { HeaderTab } from 'src/const';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

type HeaderProps = {
  isEmpty?: boolean,
}

function Header (props: HeaderProps): JSX.Element {
  const {isEmpty} = props;
  const headerTabs = Object.values(HeaderTab);
  const InitialHeaderTab = {headerTabValue: HeaderTab.Quest.linkName};

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        {
          !isEmpty &&
          <S.Navigation>
            <S.Links>
              {
                headerTabs.map((line) => (
                  <S.LinkItem data-linkname={line.linkName} key={line.title}>
                    <S.Link
                      to={line.link}
                      $isActiveLink={line.linkName === InitialHeaderTab.headerTabValue}
                      key={line.title}
                    >{line.title}
                    </S.Link>
                  </S.LinkItem>
                ))
              }
            </S.Links>
          </S.Navigation>
        }

        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );}

export default Header;
