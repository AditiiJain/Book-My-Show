//HOC
import DefaultHOC from "./HOC/Default.HOC"

//Pages
import HomePage from "./pages/Home.pages";



function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
}

export default App;
