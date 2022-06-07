import './App.css';
import Flower from './components/Flower';
import Footer from './components/Footer';
import Header from './components/Header';

//import data
import data from './data';

function App() {

  const flowers = data.map((ele, index) => {
    return (
      <Flower
      {...ele}
      key={index}
      />
    )
  }) 

  return (
    <>
    <Header/>
    <div className="flowerTiles">
      {flowers}
    </div>
    <Footer/>
    </>
  );
}

export default App;


