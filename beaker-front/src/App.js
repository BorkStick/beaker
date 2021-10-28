import "./App.css";
import { Container } from "./components/styles/Container.styled";
import TopNav from "./components/TopNav/TopNav";
import Logo from "./components/Logo/Logo"

function App() {
  return (
    <>
      <TopNav />
        <Logo/>
      <Container>
        <span>Test Test 123</span>
  
      </Container>
    </>
  );
}

export default App;
