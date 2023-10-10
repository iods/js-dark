import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Data from './data/data.json';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div>
        {Data.map((item) => (
          <Card title={item.title} description={item.description} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App;
