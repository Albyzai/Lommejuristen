import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const StyledAccordion2 = styled.div`
    width: 100%,
    max-width: 470px
    
`;

const StyledPanel = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  color: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05), 0 1px 12px rgba(0, 0, 0, 0.1);

  &[aria-expanded='true'] .content {
    opacity: 1;
  }

  &[aria-expanded='true'] .label {
    color: #000;

    &:before {
      transform: rotate(0deg);
    }
  }

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

const StyledLabel = styled.button`
  position: relative;
  display: block;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 25px 60px 25px 25px;
  font-weight: 500;
  font-size: 17px;
  font-family: inherit;
  transition: color 0.2s linear;
  cursor: pointer;
  color: #818a8f;

  &:focus {
    outline: none;
  }

  &:after, &:before {
      content: '';
      position: absolute;
      right: 25px;
      top: 50%;
      width: 22px;
      height: 2px;
      background-color #000;

  }
  
  &:before {
      transform: rotate(-90deg);
      transition: transform .35s cubic-bezier(.65, .05, .36, 1);
  }
`;

const StyledInnerPanel = styled.div`
  overflow: hidden;
  will-change: height;
  transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const StyledPanelContent = styled.p`
  margin: 5px 25px 25px;
  font-size: 14px;
  color: #818a8f;
  opacity: 0;
  padding-bottom: 25px;
  -webkit-transition: opacity 0.3s linear 0.18s;
  transition: opacity 0.3s linear 0.18s;
`;

const panels = [
  {
    label: "Seriously, Don't Use Icon Fonts",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.'
  },
  {
    label: 'Screen Readers Actually Read That Stuff',
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.'
  },
  {
    label: 'They Fail Poorly and Often',
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.'
  },
  {
    label: "They're a Nightmare if You're Dyslexic",
    content:
      "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience."
  },
  {
    label: "There's Already a Better Way",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing."
  }
];

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector('.panel__inner').scrollHeight;
      this.setState({
        height
      });
    }, 333);
  }

  render() {
    const { label, content, activeTab, index, activateTab } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`
    };

    return (
      <StyledPanel className="panel" role="tabpanel" aria-expanded={isActive}>
        <StyledLabel className="label" role="tab" onClick={activateTab}>
          {label}
        </StyledLabel>
        <StyledInnerPanel
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <StyledPanelContent className="content">{content}</StyledPanelContent>
        </StyledInnerPanel>
      </StyledPanel>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index
    }));
  }

  render() {
    const { panels } = this.props;
    const { activeTab } = this.state;
    return (
      <StyledAccordion2 className="accordion" role="tablist">
        {panels.map((panel, index) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        ))}
      </StyledAccordion2>
    );
  }
}

Accordion.defaultProps = {
  panels: panels
};

export default Accordion;
