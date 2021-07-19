import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Recipies from "./Recipies";
import Book from "./Book";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/recipies">
                    <Recipies />
                </Route>
                <Route path="/book">
                    <Book />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
