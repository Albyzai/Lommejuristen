import React, { useState, useRef } from 'react';
import { Sidebar, Ref } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import CTAButton from '../CTAButton/CTAButton';

const StyledSidebar = styled(Sidebar)`
  display: none;
  position: relative;
  background: #fff;
  flex-direction: column;
  text-align: center;
  padding: 50px 10px;
  align-items: center;

  &.ui.sidebar {
    overflow-y: visible !important;
  }

  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

const SidebarToggler = styled.div`
  display: none;
  position: fixed;
  bottom: 1em;
  left: 1em;
  color: #fff;
  font-size: 2em;
  padding: 15px;
  z-index: 10000;
  visibility: ${(props) => (props.visibility ? 'hidden' : 'visible')};
  border-radius: 50%;
  background: #046cec;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05), 0 1px 12px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  i {
    margin-top: 5px;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 50px 0;
  list-style: none;
  width: 100%;
`;

const NavItem = styled.li`
  height: 4em;
  line-height: 4em;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  transition: 0.5s ease-in-out;

  &:last-child {
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  }

  &:hover {
    background: #046cec;
    color: #fff;
  }
`;

const StyledLogo = styled.img`
  display: block;
  width: 100%;
`;

const StyledCTAButton = styled(CTAButton)`
  margin-top: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Pushable = styled(Sidebar.Pushable)`
  z-index: 1000;
  position: ${(props) => (props.visible ? 'relative' : 'static')};
`;

const DrawerNavigation = ({ navItems, visible, children }) => {
  const contentRef = useRef();
  const [visibility, setVisibility] = useState(false);

  const visibilityHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <Pushable visible={visibility} style={{ overflowX: 'visible' }}>
        <StyledSidebar
          animation="overlay"
          direction="left"
          visible={visibility}
          target={contentRef}
          onHide={() => setVisibility(false)}
          vertical
        >
          <StickyWrapper>
            <Link to="/">
              <StyledLogo src={Logo} />
            </Link>
            <NavList>
              {navItems.map((item) => (
                <NavItem>
                  <Link to={item.url}>{item.name}</Link>
                </NavItem>
              ))}
            </NavList>
            <Link to="/app">
              <StyledCTAButton>Start robotten</StyledCTAButton>
            </Link>
          </StickyWrapper>
        </StyledSidebar>

        <Ref innerRef={contentRef}>
          <StyledSidebar.Pusher dimmed={visibility}>
            {children}
          </StyledSidebar.Pusher>
        </Ref>
        {/* <Ref innerRef={contentRef}>{children}</Ref> */}
      </Pushable>
      <SidebarToggler visibility={visibility} onClick={visibilityHandler}>
        <i class="fal fa-bars"></i>
      </SidebarToggler>
    </>
  );
};

DrawerNavigation.defaultProps = {
  visible: true
};

export default DrawerNavigation;
