import styled from "styled-components";
import power from "../../assets/power.svg";

const Landing = (props) => {
  return (
    <LandingContainer>
      <Title>
        Faster <span>{<br />}</span>Farther <span>{<br />}</span>Free-er
      </Title>
      <Sub>
        {/* <PowerText>
          powered by 5 minute charge
        </PowerText> */}
      </Sub>
    </LandingContainer>
  );
};

const Title = styled.h1`
  font-size: 9vw;
  margin-left: 0.9em;
  flex-basis: 45%;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 22vw;
      text-align: center;
      margin-left: 0;
  }
`;

const Sub = styled.div`

  background-image: url(${power});
  height: 40vw;
  margin: auto;
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  
  text-align:center;
  @media (max-width: 768px) {
    min-width: 300px;
  min-height: 300px;
    /* visibility: hidden; */
  }

`;

const PowerText = styled.h1`
  margin: auto;
  width: 50%;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
`;

const LandingContainer = styled.div`
padding:4em;
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  background:#131415;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center
  }

`;

export default Landing;
