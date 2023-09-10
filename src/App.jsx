import Userinput from "./components/Userinput";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  return (
    <>
      <button className="menubtn">
        <RxHamburgerMenu></RxHamburgerMenu>
      </button>
      <Userinput></Userinput>
    </>
  );
}

export default App;
