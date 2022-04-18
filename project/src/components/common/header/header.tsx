import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppRoutes, HeaderTab } from 'src/const';
import * as selector from 'src/store/data-challenges/challenges-selector';
import { setPageType } from 'src/store/data-challenges/data-challenges';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

type HeaderProps = {
  isEmpty?: boolean,
}

function Header (props: HeaderProps): JSX.Element {
  const {isEmpty} = props;
  const dispatch = useDispatch();
  const headerTabs = Object.values(HeaderTab);
  const pageType = useSelector(selector.getPageType);
  const currentPathName = useLocation();

  const isMainPage =  currentPathName.pathname === AppRoutes.Main;

  const handleTabClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    const nameOfLink = ((evt.target as HTMLAnchorElement).parentElement as HTMLLIElement).dataset.linkname;
    if(nameOfLink === HeaderTab.Quest.linkName || nameOfLink === HeaderTab.Contacts.linkName) {
      dispatch(setPageType(nameOfLink));
    } else {
      evt.preventDefault();
      (evt.target as HTMLAnchorElement).blur();
    }
  };

  const handleLogoClick = (evt: MouseEvent<HTMLImageElement>) => {
    if (isMainPage){
      evt.preventDefault();
    } else {
      dispatch(setPageType(HeaderTab.Quest.linkName));
    }
  };

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        {
          isMainPage
            ? (
              <S.Logo>
                <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" onClick={handleLogoClick} />
              </S.Logo>
            )
            : (
              <S.LogoLink to={AppRoutes.Main}>
                <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" onClick={handleLogoClick} />
              </S.LogoLink>
            )
        }

        {
          !isEmpty &&
          <S.Navigation>
            <S.Links>
              {
                headerTabs.map((line) => (
                  <S.LinkItem data-linkname={line.linkName} key={line.title}>
                    <S.Link
                      to={line.link}
                      onClick={handleTabClick}
                      $isActiveLink={line.linkName === pageType}
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
