
import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'yellow',fontSize:'16px'}}>첫 블로그 </h4>
      </div>
      <h4>{post}</h4>

    </div>
  );
}

export default App;