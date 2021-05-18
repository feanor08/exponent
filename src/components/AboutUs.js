import styled from "styled-components";

const AboutUs = () => {
    return (
        <Page>
            <h2>OUR VISION</h2>
            <p>    
                From time immemorial, human beings have wanted the freedom to go anywhere, at record speed and do it in by spending as little as possible.  
            </p>
            <h2>Faster, farther, free-er. </h2>
            <p>
                This innate human need is beautiful and it drives us. From the time we as a race invented the wheel to pushing the limits to set record speeds, humans have craved speed and flexibility from the beginning of time.
                Billions of dollars and countless  engineering hours have been spent to give us that same power,
                precision and efficiency in everyday life on the road, just to satiate that craving for greater
                freedom.
                And yet, it is never enough. We want to go faster, farther and be free-er.
                    
                At Exponent, we fuel this desire. 
            </p>
            <h2>We fuel freedom.</h2>

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

export default AboutUs
