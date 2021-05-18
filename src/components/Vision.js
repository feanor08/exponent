import styled from "styled-components";
import Lottie from 'react-lottie';
import animationData from '../lotties/freedom-grid.json';
const Vision = () => {
    const firstText = "Imagine all the awesomeness of going electric without the shackles of charging."
    const secondText = "Through Exponent Enabled rapid charging tech we want to keep you going Faster. Farther. Free-er"
    return (
        <Page>
            <Text>{firstText}</Text>
            <div style={{width:"100%"}}>
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
    padding:1em;
    width:100%;
    height:130vh;
    text-align: center;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-content:center;
    background-color:white;
    color: #131415;
    @media (max-width: 768px) {
        height:100vh;
    }
`;

const Text = styled.h2`
    padding:2em;
    font-size:4em;
    @media (max-width: 768px) {
    padding:0.5em;
    font-size: 12vw;
    margin-bottom:100px;
  }
`;


export default Vision
