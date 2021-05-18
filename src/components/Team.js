import styled from "styled-components";
import Arrow from "../assets/arrow.svg";
import TeamImage from "../assets/team.svg";
const Team = () => {
  return (
    <Page>
      <TextContainer>
        <Text>And we've got the best team to do it.</Text>
        <ArrowContainer>
          <img
            src={Arrow}
            style={{ height: "8vw", width: "8vw", maxWidth: "100px" }}
          />
        </ArrowContainer>
      </TextContainer>
      <ImageContainer>
        <img
          src={TeamImage}
          style={{ height: "50vw", width: "50vw", maxWidth: "500px" }}
        />
      </ImageContainer>
    </Page>
  );
};

const Page = styled.div`
  margin: auto;
  width: 100%;
  height: 150vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: auto;
  @media (max-width: 768px) {
    justify-content: center;
    height: 100vh;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-basis: 40%;
`;

const Text = styled.h2`
  font-size:6em;
  align-self: flex-start;
  flex-basis: 50%;
`;

export default Team;
