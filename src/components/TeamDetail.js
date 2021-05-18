import styled from "styled-components";

const TeamDetail = props => {
    return (
        <Page>
            <Heading>About The Team</Heading>
            <TeamImage />
            <Description>
                Exponent’s founding team has a combined experience of over 20 years in the Indian Electric Vehicle industry. We are a young and dynamic team, with a healthy mix of intellectual understanding and practical application knowledge. We are united by our vision and committed to realizing it.
            </Description>
            <Description>
                The team at Exponent was involved in the development of the gold standard of electric scooters in India - The Ather 450. With involvement in critical areas such as architecture and layout decisions, establishing product specifications to driving Proof of Concepts through to mass production.
            </Description>
        </Page>
    )
}
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

const Heading = styled.h1`

`;
const Description = styled.h1`

`;

const TeamImage = styled.div`
    width:80%;
    height:20vw;
    border : 2px solid red;
`



export default TeamDetail
