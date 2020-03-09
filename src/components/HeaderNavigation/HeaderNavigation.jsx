import React, { useState } from 'react';
import { Menu, Header, Container } from 'semantic-ui-react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const FixedNavigation = styled.div`
  position: fixed;
  min-height: 75px;
  width: 100%;
  // top: 0;
  // padding: 10px 0;
  background: ${(props) => (props.scrolled ? '#fff' : 'none')};
  color: ${(props) => (props.scrolled ? '#000' : '#fff')};
  box-shadow: ${(props) =>
    props.scrolled ? '0 1px 2px 0 rgba(34, 36, 38, .15)' : 'none'};
  z-index: 100;
  transition: 0.3s ease-in-out;
`;

const LogoWrapper = styled.div`
  display: inline-block;
  float: left;
`;

const NavWrapper = styled.nav`
  display: inline-block;
  float: right;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 0 20px;
`;

const StyledLogo = styled.img`
  height: 50px;
`;

const StyledContainer = styled(Container)``;

const HeaderNavigation = ({ navItems }) => {
  const [scrolled, setScrolled] = useState(false);
  const changePosition = 100;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !scrolled) {
    setScrolled(true);
  }

  if (position.y <= changePosition && scrolled) {
    setScrolled(false);
  }

  return (
    <FixedNavigation scrolled={scrolled}>
      <StyledContainer>
        <LogoWrapper>
          <Link to="/">
            <StyledLogo src={Logo} />
          </Link>
        </LogoWrapper>
        <NavWrapper>
          <NavList>
            {navItems.map((item) => (
              <Link to={item.url}>
                <NavItem>{item.name}</NavItem>
              </Link>
            ))}
          </NavList>
        </NavWrapper>
      </StyledContainer>
    </FixedNavigation>
  );
};

export default HeaderNavigation;
