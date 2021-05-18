import styled from "styled-components";
import Lottie from 'react-lottie';
import animationData from '../lotties/freedom-grid.json';
const Vision = () => {
    const firstText = "Imagine all the awesomeness of going electric without the shackles of charging."
    const secondText = "Through Exponent Enabled rapid charging tech we want to keep you going Faster. Farther. Free-er"
    return (
        <Page>
            <Text>{firstText}</Text>
            <div>
                <Lottie 
                    options={defaultOptions}
                    height='100%'
                    width='100%'
                />
            </div>
        </Page>
    )
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Page = styled.div`
    width:100%;
    height:100vh;
    text-align: center;
    display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    align-content:center;
    background-color:white;
    color: white;
`;

const Text = styled.h2`
    color:black;
    font-size:2em;
    flex-basis:20%;
`;

const LottieContainer = styled.div`
    width:100%;
    height:100%;
    flex-basis:40%;
`;

export default Vision
