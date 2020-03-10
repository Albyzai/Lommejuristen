import React, { useState } from 'react';
import { Menu, Header, Container } from 'semantic-ui-react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const FixedNavigation = styled.div`
  position: fixed;
  width: 100%;
  height: 85px;
  top: 0;
  padding: 15px 0;
  background: ${(props) => (props.scrolled ? '#fff' : 'none')};
  color: ${(props) => (props.scrolled ? '#000' : '#fff')};
  box-shadow: ${(props) =>
    props.scrolled ? '0 1px 2px 0 rgba(34, 36, 38, .15)' : 'none'};
  z-index: 100;
  transition: 0.3s ease-in-out;

  a {
    color: ${(props) => (props.scrolled ? '#000' : '#fff')};
  }
`;

const NavigationContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const LogoWrapper = styled.div`
  display: inline-block;
`;

const NavWrapper = styled.nav`
  display: inline-block;
`;

const NavList = styled.ul`
  position: relative;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const NavItem = styled.li`
  font-family: 'Roboto';
  display: inline-block;
  padding: 0 20px;
  height: 100%;
  line-height: 55px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:last-child {
    padding-right: 0;
  }
`;

const NavLink = styled(Link)`
  position: relative;

  &:after {
    transition: all 0.5s;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: ${(props) => (props.scrolled ? '#046cec' : '#fff')};
    height: 2px;
  }

  &:hover:after {
    width: 100%;
  }
`;

const NavItemDesktop = styled(NavItem)`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const StyledLogo = styled.img`
  display: block;
  height: 100%;
  filter: ${(props) => (props.scrolled ? 'none' : 'brightness(0) invert(1)')};
`;

const StyledContainer = styled(Container)`
  height: 100%;
`;

const ChatButton = styled.div`
  font-family: 'Roboto';
  text-align: center;
  padding: 0 20px;
  border-radius: 6px;
  background: ${(props) => (props.scrolled ? '#046cec' : '#fff')};
  color: ${(props) => (props.scrolled ? '#fff' : '#000')};
  font-weight: 700;
`;

const HeaderNavigation = ({ navItems }) => {
  const [scrolled, setScrolled] = useState(false);
  const changePosition = 1;

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
        <NavigationContentWrapper>
          <LogoWrapper>
            <Link to="/">
              <StyledLogo scrolled={scrolled} src={Logo} />
            </Link>
          </LogoWrapper>
          <NavWrapper>
            <NavList>
              {navItems.map((item) => (
                <NavItemDesktop>
                  <NavLink scrolled={scrolled} to={item.url}>
                    {item.name}
                  </NavLink>
                </NavItemDesktop>
              ))}
              <NavItem>
                <Link to="/app">
                  <ChatButton scrolled={scrolled}>Start Robot</ChatButton>
                </Link>
              </NavItem>
            </NavList>
          </NavWrapper>
        </NavigationContentWrapper>
      </StyledContainer>
    </FixedNavigation>
  );
};

export default HeaderNavigation;
