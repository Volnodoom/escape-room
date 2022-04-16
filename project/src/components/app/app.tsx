import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
  BrowserRouter
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app-styled';
import { AppRoutes } from '../../const';
import NotAvailablePage from '../not-available-page/not-available-page';

function App (): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Home />} />
          <Route path={AppRoutes.Quest} element={<DetailedQuest />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />
          <Route path={AppRoutes.NotAvailable} element={<NotAvailablePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
