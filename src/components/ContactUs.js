import styled from 'styled-components';
const ContactUs = () => {
    return (
        <Page>
            <CuriousText>Interested in our tech? or just curious?</CuriousText>
            <HitUsText>HIT US UP</HitUsText>
            <LinksText>
                <a href="">LinkedIn</a>
                <a href="">Email</a>
            </LinksText>
        </Page>
    )
}

const Page = styled.div`
    width:100%;
    height:100vh;
    flex-wrap: wrap;
    flex-direction: column;
    background-color:white;
    justify-content: center;
    color: black;
    gap: 0px 0%;
`;

const CuriousText = styled.p`
    font-size:3vw;
    border:2px red solid;
`;
const HitUsText = styled.p`
    border:2px red solid;
    font-size:12vw;
`;
const LinksText = styled.h2`
    border:2px red solid;
    display:flex;
    flex-direction: column;
`;
const EmptySpace = styled.div`
    flex-basis:10%;
`

export default ContactUs
