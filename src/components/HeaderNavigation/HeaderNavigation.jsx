import React, { useState } from 'react'
import classes from './HeaderNavigation.module.css'
import { Menu, Header} from 'semantic-ui-react'
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const HeaderNavigation = ({navItems}) => {

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
    <Menu borderless={true}  stackable className={` ${classes.Header} ${scrolled ? classes.Scrolled : ''}   fixed`}>
      <Menu.Item>
        <Header className={scrolled ? '' : classes.MenuItemWhite} >Lommejuristen</Header>
      </Menu.Item>
      <Menu.Menu position='right'>
        {navItems.map(item => <Menu.Item className={scrolled ? '' : classes.MenuItemWhite} >{item.name}</Menu.Item>)}
      </Menu.Menu>
    </Menu>
  )
}


export default HeaderNavigation