import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';
import ColumnBG from '../../assets/images/columnbg.svg';

const WrapperGrid = styled(Grid)`
  padding-bottom: 150px;
`;
const Row = styled(Grid.Row)`
  padding: 50px 0 !important;
`;
const Column = styled(Grid.Column)``;

const BackgroundColumn = styled(Column)`
  // background-image: linear-gradient(130deg, #0700dd 0%, #00f2ff 89%);
  // background: url(${ColumnBG}) no-repeat;
  // background-size: contain;
  // background-position: right;
  // padding: 0 !important;
  // transform: ${(props) => (props.inverted ? ' scaleX(-1)' : 'none')};
  height: 550px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: url(${ColumnBG}) no-repeat;
    background-size: contain;
    background-position: right;
    transform: ${(props) => (props.inverted ? ' scaleX(-1)' : 'none')};
    width: 100%;
    height: 100%;
  }
`;

const AnimationHeading = styled.div`
  font-family: 'Roboto';
  color: #404f54;
  font-weight: 700;
  font-size: 1.75em;
  line-height: 1.75em;
  width: 100%;
  margin-bottom: 40px;
  text-align: ${(props) => props.alignment};
`;

const AnimationDescription = styled.div`
  text-align: ${(props) => props.alignment};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1.5em;
  color: #818a8f;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
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

const BackgroundShape = (
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

const NewBackgroundShape = (
  <svg
    id="Lag_1"
    data-name="Lag 1"
    fill="#f5f6f8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 903.63 747"
  >
    <path
      d="M183.36,834.5V88.5H820.88c-20.32,1.83-33.35,5.53-33.52,5.58-.8.09-89.14,10.82-188.25,40.14-91.53,27.08-211.23,76-261.72,155.35-26.82,42.15-32,89.21-15.24,139.86.19,1,21.13,102.6,73.5,202.93,45.68,87.52,124.78,190.91,246.48,202.13Z"
      transform="translate(-182.86 -88)"
    />
    <path
      class="cls-1"
      d="M811.67,89a184.64,184.64,0,0,0-24.37,4.58c-3.1.38-90.47,11.21-188.34,40.17-91.61,27.1-211.42,76.1-262,155.56-26.9,42.27-32,89.45-15.31,140.23.29,1.4,5.54,26.66,16.9,63.43,10.73,34.74,29.28,87.17,56.66,139.63C439.82,718.07,516.27,818.67,633.14,834H183.86V89H811.67m31.42-1H182.86V835H664c-259.3,0-341.42-405.72-341.42-405.72C233.93,160.51,787.49,94.56,787.49,94.56S810.2,88,843.09,88Z"
      transform="translate(-182.86 -88)"
    />
    <path
      d="M714.69,834.5c130.61-2.6,233.86-6,298.14-73.74,44.45-46.87,68.25-123.63,73.15-238.16V834.5ZM1086,425.08c-4.9-129-36.41-222.83-93.7-278.93C951.12,105.84,903.42,92,865.09,88.5H1086Z"
      transform="translate(-182.86 -88)"
    />
    <path
      class="cls-1"
      d="M1085.49,89V404.88C1078.18,286.11,1047,199,992.64,145.79c-38.11-37.32-81.8-52-118.52-56.79h211.37m0,452.47V834H757.88c110.37-3.18,198.16-12.63,255.32-72.9,42.05-44.34,65.66-115.32,72.29-219.63m1-453.47H843.09c83.49,0,232.59,42.26,242.55,341.28,13.89,416.85-151.75,399.43-415.7,405.65q-3,.07-5.9.07h422.45V88Z"
      transform="translate(-182.86 -88)"
    />
  </svg>
);

const ChatGuide = () => {
  return (
    <Grid padded="vertically">
      <Row>
        <Column computer={8} mobile={16}>
          <ContentWrapper>
            <AnimationHeading alignment="left">
              Robotten stiller dig spørgsmål
            </AnimationHeading>
            <AnimationDescription alignment="left">
              Robotten vil stille dig spørgsmål til din specifikke situation.
              Robotten benytter dine svar til at afgøre hvad den skal spørge om
              næste gang. På denne måde får robotten indsnævret din
              problemstilling
            </AnimationDescription>
          </ContentWrapper>
        </Column>
        <BackgroundColumn computer={8} mobile={16}>
          <ContentWrapper>
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <ChatBubble>
                <p>Hvornår købte du din vare?</p>
              </ChatBubble>
            </ScrollAnimation>
          </ContentWrapper>
        </BackgroundColumn>
      </Row>

      <Row>
        <BackgroundColumn inverted={true} computer={8} mobile={16}>
          <ContentWrapper>
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <ChatChoicesWrapper>
                <ChatChoice>Under 2 år siden</ChatChoice>
                <ChatChoice>Over 2 år siden</ChatChoice>
              </ChatChoicesWrapper>
            </ScrollAnimation>
          </ContentWrapper>
        </BackgroundColumn>
        <Column computer={8} mobile={16}>
          <ContentWrapper>
            <AnimationHeading alignment="left">
              Svar på robottens spørgsmål
            </AnimationHeading>
            <AnimationDescription alignment="left">
              Når robotten har stillet dig et spørgsmål, får du et antal knapper
              som du kan bruge til at besvare spørgsmålet. Ved at besvare
              robottens spørgsmål kan robotten afgøre hvad den ellers mangler af
              information. På denne måde indsnævrer robotten sig til netop din
              problemstilling.
            </AnimationDescription>
          </ContentWrapper>
        </Column>
      </Row>

      <Row>
        <Column computer={8} mobile={16}>
          <ContentWrapper>
            <AnimationHeading alignment="left">
              Køb en skræddersyet klage
            </AnimationHeading>
            <AnimationDescription alignment="left">
              Når robotten har fået alt den information den skal bruge, vil du
              blive tilbudt at købe en skræddersyet klage for 49,- kr. Klagen
              vil være udarbejdet af professionelle jurister, og er fuldstændig
              tilpasset din situation.
            </AnimationDescription>
          </ContentWrapper>
        </Column>
        <BackgroundColumn computer={8} mobile={16}>
          <ContentWrapper>
            <ScrollAnimation animateIn="fadeIn" duration={2}>
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
            </ScrollAnimation>
          </ContentWrapper>
        </BackgroundColumn>
      </Row>
    </Grid>
  );
};

export default ChatGuide;
