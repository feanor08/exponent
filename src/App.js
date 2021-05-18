import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Vision from "./components/Vision";
import Team from "./components/Team";
import TeamDetail from "./components/TeamDetail";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import styled from "styled-components";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <AppContainer>
            <Landing />
            <Vision />
            <Team />
            <ContactUs />
          </AppContainer>
        </Route>
        <Route path="/team-detail">
          <TeamDetail />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
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
