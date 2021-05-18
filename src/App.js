import Landing from "./components/Landing";
import Vision from "./components/Vision";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import styled from "styled-components";


function App() {
  return (
    <AppContainer>
      <Landing />
      <Vision />
      <Team />
      <ContactUs />
    </AppContainer>
  );
}
const AppContainer = styled.div`
    width:100%;
  
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;




export default App;
