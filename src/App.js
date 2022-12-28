import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inputs from './components/panels/Inputs';
import IconsPanel from "./components/panels/IconsPanel";
import SelectionControl from "./components/panels/SelectionControl";
import Buttons from "./components/panels/Buttons";
import AllItems from './components/panels/AllItems';
import Notifications from "./components/panels/Notifications";
import Tabs from "./components/panels/Tabs";
import CoinIconsList from './components/panels/CoinIconsList';
import Cards from "./components/panels/Cards";
import SelectPanel from "./components/panels/SelectPanel";
import InfoCards from "./components/panels/InfoCards";
import TransactionCards from "./components/panels/TransactionCards";
import SplashScreen from "./components/panels/SplashScreen";
import Governance from './components/panels/Governance';
import TablePanel from "./components/panels/TablePanel";
import TooltipPanel from "./components/panels/TooltipPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AllItems />} />
          <Route path="/input" element={<Inputs />} />
          <Route path="/icons" element={<IconsPanel />} />
          <Route path="/selectionControl" element={<SelectionControl />}/>
          <Route path="/buttons" element={<Buttons />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/tabs" element={<Tabs />}/>
          <Route path="/coins" element={<CoinIconsList />}/>
          <Route path="/cards" element={<Cards />}/>
          <Route path="/select" element={<SelectPanel />} />
          <Route path="/infocards" element={<InfoCards />} />
          <Route path="/table" element={<TablePanel />} />
          <Route path="/transactions" element={<TransactionCards />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/tooltip" element={<TooltipPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;