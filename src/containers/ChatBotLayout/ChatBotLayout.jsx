import React, { useEffect } from 'react';
import styled from 'styled-components';

const LandbotContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: green;
`;

class ChatBotLayout extends React.Component {
  componentDidMount() {
    this.landbot = new window.LandbotFrameWidget({
      index: 'https://landbot.io/u/H-374065-QJHP1BOMSNEIFD0D/index.html',
      container: '.landbot'
    });
  }

  componentWillUnmount() {
    this.landbot.destroy();
  }
  render() {
    return <LandbotContainer className="landbot" />;
  }
}

export default ChatBotLayout;
