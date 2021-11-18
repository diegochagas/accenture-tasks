import { HashRouter } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <HashRouter history={history}>
      <Routes />

      <GlobalStyle />
    </HashRouter>
  );
}

export default App;
