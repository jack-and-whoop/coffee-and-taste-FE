import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from '@emotion/styled';

import Home from './Home';
import MenuListPage from './MenuListPage';
import CategoryContainer from './CategoryContainer';

import logo from './images/logo.png';

const Container = styled.div({
  margin: '0 auto',
  width: '80%',
});

const Header = styled.header({
  top: '0',
  width: '80%',
  height: '100px',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  background: 'beige 100%',
});

const Logo = styled.div({
  marginRight: '10px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: `url(${logo}) center/100% no-repeat`,
  // margin: '50px auto 30px auto',
});

const Title = styled.h1({
  margin: 0,
});

export default function App() {
  return (
    <BrowserRouter basename="/coffee-and-taste">
      <Container>
        <Header>
          <Logo />
          <Title>Coffee-and-Taste</Title>
        </Header>
        <CategoryContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu-groups/:menuGroupId" element={<MenuListPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
