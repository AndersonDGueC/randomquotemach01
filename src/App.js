import React from 'react';
import ContentText from './components/ContenText'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.css'
function App() {
  return (
    <div className="conteiner-fluid" id="quote-box">
     <div className=" d-flex align-items-center justify-content-center outs">
     <div className="col-xs-6 p-5 rounded box">
     <ContentText/>
     </div>
    </div>
    </div>
  );
}

export default App;
