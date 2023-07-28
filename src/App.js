import logo from './logo.svg';
import './App.css';
import { Header } from "./Components/Header";
import { TweetForm } from "./Components/TweetForm";
import { SidePanel } from "./Components/SidePanel";
function App() {
  return (
    <div className="flex">
      <SidePanel />
      <div className="w-3/4 p-4">
        <Header />
        <TweetForm />
      </div>
    </div>
  );
}

export default App;