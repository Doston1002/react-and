import 'antd/dist/antd.min.css';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import AppHeader from './components/common/header';

import AppHome from './pages/home';


import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            <Route path='/demo/react/antdesign/grocery/' element={<AppHome />} />
            
          </Routes>
        </Content>
      </Router>
      <Footer>
      </Footer>
    </Layout>
  );
}

export default App;