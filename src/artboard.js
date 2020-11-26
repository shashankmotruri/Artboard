
import React from "react";

import "./artboard.css";
import Sidemenu from './components/Sidemenu';
import Timeline from './components/Timeline';
import MainScreen from './components/MainScreen';
import TextEditor from "./components/TextEditor";

class Artboard extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
        <div className="artboard">    

          <Sidemenu />
          <Timeline />
          <MainScreen />
          <TextEditor />    
    
        </div>

    );
  }
}



export default Artboard;
          