import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Staking from './App';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="about" element={<About />} />
          <Route path="socials" element={<Socials />} />
          <Route path="staking" element={<Staking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Styles() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<link rel="stylesheet" href="../css/home.css"/>}/>
          <Route path="news" element={<link rel="stylesheet" href="../css/news.css"/>}/>
          <Route path="documentation" element={<link rel="stylesheet" href="../css/documentation.css"/>}/>
          <Route path="about" element={<link rel="stylesheet" href="../css/about.css"/>}/>
          <Route path="socials" element={<link rel="stylesheet" href="../css/socials.css"/>}/>
          <Route path="staking" element={<link rel="stylesheet" href="../css/staking.css"/>}/>
          <Route path="account" element={<link rel="stylesheet" href="../css/account.css"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Styles />, document.getElementById("style-link"));