import styled from "styled-components";
import power from "../assets/power.svg";
const Landing = props => {
    return (
        <Page>
            <Title>Faster <span>{<br/>}</span>Farther <span>{<br/>}</span>Free-er</Title>
            <Sub>
                <PowerText>powered by <span>{<br/>}5 minute charge</span></PowerText>
            </Sub>
        </Page>
    )
}

const Title = styled.h1`
    font-size: 12vw;
    flex-basis:45%;

`;

const Sub = styled.h1`
    font-size: 1.5vw;
    flex-basis:45%;
    align-self:flex-end;
    background-image:url(${power});
    width: auto;
    height:40vw;
    width:40vw;

    background-position: center;
    background-repeat: no-repeat; 
    background-color:red;
    min-width : 400px;
    min-height:400px;
`;



const PowerText = styled.h1`
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%, 50%);
`;

const Page = styled.div`
    width:100%;
    height:100vh;
    text-align: center;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-content:center;
    background-color:black;
    color: white;

`;


export default Landing
