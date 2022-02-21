import "./App.css";
import { Router } from "@reach/router";
import Main from "./Views/Main";
import ProductDetail from "./components/ProductDetail";
import EditGame from "./components/EditGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/home" default />
        <ProductDetail path="/product/:id" />
        <EditGame path="product/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
