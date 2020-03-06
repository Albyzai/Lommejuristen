import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

// import ChatBubble from '../Chat/ChatBubble/ChatBubble';
import CTAButton from '../../components/CTAButton/CTAButton';

const AbsoluteContent = styled(animated.div)`
  position: absolute;
  left: ${(props) => (props.alignLeft ? '0%' : '50%')};
  width: auto;
  top: 50%;
  height: auto;
  transform: translateY(-50%)
    ${(props) => (props.alignLeft ? '' : 'translateX(-50%)')};
  opacity: ${(props) => props.opacity};
`;

const Column = styled(Grid.Column)`
  height: 550px;

  @media only screen and (max-width: 992px) {
    height: 300px;
  }
`;

const ColumnRight = styled(Column)`
  background-image: linear-gradient(130deg, #0700dd 0%, #00f2ff 89%);
  padding: 0 !important;
`;

const Heading = styled.div`
  font-family: 'Roboto';
  color: #404f54;
  font-weight: 700;
  font-size: 2.5em;
  width: 100%;
  margin-bottom: 40px;
  text-align: left;
  padding-left: 0 !important;
`;
const AnimationHeading = styled.div`
  font-family: 'Roboto';
  color: #404f54;
  font-weight: 700;
  font-size: 1.75em;
  line-height: 1.75em;
  width: 100%;
  margin-bottom: 40px;
  text-align: left;
`;

const AnimationDescription = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1.5em;
  color: #818a8f;
`;

const ChatBubble = styled.div`
  background-color: #fff;
  text-align: left;
  border-radius: 3px;
  padding: 16px 24px;
  box-shadow: 0 1px 28px 0 rgba(90, 60, 122, 0.22);
  width: 250px;
  margin: auto;
`;

const ChatChoicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: auto;
`;

const ChatChoice = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 20px 25px;
  border: 1px solid;
  border-radius: 3px;
  background-color: rgb(99, 140, 201);
  border-color: rgb(49, 90, 151);
  color: #fff !important;
  margin: 5px;
  color: #000;
`;

const PaymentWindow = styled.div`
  background-color: #f5f5f7;
  border: 1px solid #ccc;
  box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.5),
    inset 0 1px 0 0 hsla(0, 0%, 100%, 0.65);
  height: 300px;
  width: 275px;
  margin: auto;
  padding-bottom: 36px;
  border-radius: 6px;
`;

const PaymentWindowHeader = styled.div`
  background-color: #e8e9eb;
  padding: 12px 36px;
  text-align: center;
  overflow: hidden;
`;

const PaymentFormWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px 0 hsla(240, 1%, 49%, 0.3),
    0 1px 0 0 hsla(0, 0%, 100%, 0.7);
`;

const PaymentInput = styled.div`
  display: inline-block;
  height: 37px;
  background: #fff;
  color: #5b5b65;
  width: ${(props) => (props.halfWidth ? '50%' : '100%')};
  border: 1px solid hsla(240, 1%, 49%, 0.25);
  border-top: ${(props) => (props.borderTop ? 'solid' : 'none')}
  border-right: ${(props) => (props.borderRight ? 'solid' : 'none')}
  border-bottom: ${(props) => (props.borderBottom ? 'solid' : 'none')}
  border-left: ${(props) => (props.borderLeft ? 'solid' : 'none')}
  border-top-left-radius: ${(props) =>
    props.topLeftRadius ? props.topLeftRadius : '0px'}
  border-top-right-radius: ${(props) =>
    props.topRightRadius ? props.topRightRadius : '0px'}
  border-bottom-left-radius: ${(props) =>
    props.bottomLeftRadius ? props.bottomleftRadius : '0px'}
  border-bottom-right-radius: ${(props) =>
    props.bottomRightRadius ? props.bottomRightRadius : '0px'}
`;

const PaymentInputTextWrapper = styled.div`
  height: 100%;
  padding: 10px;
`;

const StickyContainer = styled(animated.div)`
  position: sticky;
  top: 50%;
  transform: translateY(calc(-50% + 75px));
  width: 100vw;
  height: 400px;
`;

const ScrollContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 1600px;
`;

const StyledCTAButton = styled(CTAButton)`
  padding: 50px;
`;

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = (o) => `translateY(${o * 0.1}px)`;

const AnimationBackgroundShape = (
  <svg
    id="Lag_1"
    data-name="Lag 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 903.63 747"
    fill="#f5f6f8"
  >
    <path
      d="M183.36,834.5V88.5H1086v746ZM756.08,176.88c-29.63,0-50.5,5.19-50.7,5.24a1315.37,1315.37,0,0,0-177.46,33.63C473.48,230.21,426.74,247.17,389,266.15c-47.22,23.75-80.41,50.77-98.65,80.3-19.39,31.39-22.14,66.1-8.18,103.16.17.75,19.21,81.79,66.85,161.79,44,73.88,122.08,162,244.17,162,1.77,0,3.59,0,5.38-.06q17-.35,33.41-.62c126.79-2.19,226.94-3.92,285.88-66.2,45.34-47.91,64.19-129.6,59.34-257.06C968.2,212.29,834.8,176.88,756.08,176.88Z"
      transform="translate(-182.86 -88)"
    />
    <path
      class="cls-1"
      d="M1085.49,89V834H183.86V89h901.63M705.33,181.62a1318.26,1318.26,0,0,0-177.53,33.65c-54.48,14.47-101.25,31.43-139,50.43-47.3,23.79-80.56,50.87-98.85,80.49-19.46,31.51-22.24,66.34-8.25,103.53.65,2.75,19.83,82.86,66.92,161.93,44.07,74,122.27,162.2,244.6,162.2,1.78,0,3.6,0,5.39-.06,11.34-.23,22.56-.43,33.41-.61,126.91-2.19,227.15-3.92,286.23-66.36,45.43-48,64.33-129.82,59.48-257.42-9-237.54-142.72-273-221.63-273-28.82,0-49.37,4.9-50.75,5.24M1086.49,88H182.86V835h903.63V88ZM593.2,772.85c-235.9,0-310.56-323.42-310.56-323.42C202,235.18,705.5,182.61,705.5,182.61s20.67-5.23,50.58-5.23c75.94,0,211.57,33.67,220.63,272,12.64,332.28-138,318.4-378.14,323.36-1.79,0-3.6.06-5.37.06Z"
      transform="translate(-182.86 -88)"
    />
  </svg>
);

const Comp = () => {
  const ref = useRef();
  const ref1 = useRef();

  //   console.log('ref1', ref1);

  const [{ offset, opacity1, opacity2, opacity3 }, set] = useSpring(() => ({
    offset: 0,
    opacity1: 0,
    opacity2: 0,
    opacity3: 0,
    config: { duration: 500 }
  }));

  const [activeRows, setActiveRows] = useState([false, false, false]);

  const handleScroll = () => {
    const posY = ref1.current.offsetTop;

    let newActiveRows = [...activeRows];
    let opacity1, opacity2, opacity3;
    if (newActiveRows) {
      if (posY < 400 && posY > 200) {
        // newActiveRows = [true, false, false];
        const opacity1 = 1;
        const opacity2 = 0;
        const opacity3 = 0;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY > 400 && posY < 800) {
        // newActiveRows = [false, true, false];
        const opacity1 = 0;
        const opacity2 = 1;
        const opacity3 = 0;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY > 800 && posY < 1200) {
        // newActiveRows = [false, false, true];
        const opacity1 = 0;
        const opacity2 = 0;
        const opacity3 = 1;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY < 0) {
        const opacity1 = 1;
        const opacity2 = 0;
        const opacity3 = 0;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY > 1200) {
        const opacity1 = 0;
        const opacity2 = 0;
        const opacity3 = 1;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else {
        const opacity1 = 0;
        const opacity2 = 0;
        const opacity3 = 0;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      }
    }

    console.log('opacity1', opacity1);
    console.log('opacity2', opacity2);
    console.log('opacity3', opacity3);

    console.log(newActiveRows);
    setActiveRows(newActiveRows);
  };

  const choices = [{ text: 'Under 2 år siden' }, { text: 'Over 2 år siden' }];

  console.log('new opacity:', opacity1.value);
  const row1col1 = (
    <AbsoluteContent alignLeft={true} opacity={opacity1.value}>
      <AnimationHeading>Robotten stiller dig spørgsmål</AnimationHeading>
      <AnimationDescription>
        Robotten vil stille dig spørgsmål til din specifikke situation. Robotten
        benytter dine svar til at afgøre hvad den skal spørge om næste gang. På
        denne måde får robotten indsnævret din problemstilling
      </AnimationDescription>
      <StyledCTAButton buttonText="Tal med robotten" />
    </AbsoluteContent>
  );

  const row2col1 = (
    <AbsoluteContent alignLeft={true} opacity={opacity2.value}>
      <AnimationHeading>Svar på robottens spørgsmål</AnimationHeading>
      <AnimationDescription>
        Når robotten har stillet dig et spørgsmål, får du et antal knapper som
        du kan bruge til at besvare spørgsmålet. Ved at besvare robottens
        spørgsmål kan robotten afgøre hvad den ellers mangler af information. På
        denne måde indsnævrer robotten sig til netop din problemstilling.
      </AnimationDescription>
      <StyledCTAButton buttonText="Tal med robotten" />
    </AbsoluteContent>
  );

  const row3col1 = (
    <AbsoluteContent alignLeft={true} opacity={opacity3.value}>
      <AnimationHeading>Køb en skræddersyet klage</AnimationHeading>
      <AnimationDescription>
        Når robotten har fået alt den information den skal bruge, vil du blive
        tilbudt at købe en skræddersyet klage for 49,- kr. Klagen vil være
        udarbejdet af professionelle jurister, og er fuldstændig tilpasset din
        situation.
      </AnimationDescription>
      <StyledCTAButton buttonText="Tal med robotten" />
    </AbsoluteContent>
  );

  const row1col2 = (
    <AbsoluteContent opacity={opacity1.value}>
      <ChatBubble>
        <p>Hvornår købte du din vare?</p>
      </ChatBubble>
    </AbsoluteContent>
  );

  const row2col2 = (
    <AbsoluteContent opacity={opacity2.value}>
      <ChatChoicesWrapper>
        <ChatChoice>1</ChatChoice>
        <ChatChoice>2</ChatChoice>
      </ChatChoicesWrapper>
    </AbsoluteContent>
  );

  const row3col2 = (
    <AbsoluteContent opacity={opacity3.value}>
      <PaymentWindow>
        <PaymentWindowHeader>
          <h3>www.lommejuristen.dk</h3>
          <span>test@mail.com</span>
        </PaymentWindowHeader>
        <PaymentFormWrapper>
          <PaymentInput
            borderTop={true}
            borderRight={true}
            borderBottom={true}
            borderLeft={true}
            topLeftRadius="4px"
            topRightRadius="4px"
          >
            <PaymentInputTextWrapper>
              <i class="fal fa-credit-card"></i>
              <span>Kortnummer</span>
            </PaymentInputTextWrapper>
          </PaymentInput>
          <PaymentInput
            borderTop={false}
            borderRight={false}
            borderBottom={true}
            borderLeft={true}
            halfWidth={true}
            bottomLeftRadius="4px"
          >
            <PaymentInputTextWrapper>
              <i class="far fa-calendar"></i>
              <span>MM/ÅÅ</span>
            </PaymentInputTextWrapper>
          </PaymentInput>
          <PaymentInput
            borderTop={false}
            borderRight={true}
            borderBottom={true}
            borderLeft={true}
            halfWidth={true}
            bottomRightRadius="4px"
          >
            <PaymentInputTextWrapper>
              <i class="fal fa-lock"></i>
              <span>CVC</span>
            </PaymentInputTextWrapper>
          </PaymentInput>
        </PaymentFormWrapper>
      </PaymentWindow>
    </AbsoluteContent>
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <ScrollContainer ref={ref}>
      <Grid container columns={1} style={{ position: 'sticky', top: '200px' }}>
        <Heading>Sådan virker det</Heading>
      </Grid>
      <StickyContainer ref={ref1}>
        <Grid container centered columns={2}>
          <Column computer={6} mobile={16}>
            {row1col1}
            {row2col1}
            {row3col1}
          </Column>
          <ColumnRight computer={10} mobile={16}>
            {row1col2}
            {row2col2}
            {row3col2}
            {AnimationBackgroundShape}
          </ColumnRight>
        </Grid>
      </StickyContainer>
    </ScrollContainer>
  );
};

export default Comp;
