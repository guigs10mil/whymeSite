import './App.scss';
import React from "react";
import Header from "./components/header";
import Player from "./components/player";
import SoAlone from "./components/SoAlone"
import ComeHome from "./components/ComeHome"
import ReallyKnow from "./components/ReallyKnow"
import Card from "./components/card"
import Footer from "./components/footer"

class App extends React.Component {
  state = {
    scene: 0
  }

  scenes = ["HOME", "SO ALONE", "WHEN YOU'LL COME HOME", "I DON'T REALLY KNOW"]

  displayScene = (scene) => {
    if (this.state.scene === 0) {
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Card index={0} callback={() => this.setState({ scene: 1 })} />
          <Card callback={() => this.setState({ scene: 2 })} />
          <Card index={2} callback={() => this.setState({ scene: 3 })} />
        </div>
      )
    }
    if (this.state.scene === 1) {
      return <SoAlone />
    }
    if (this.state.scene === 2) {
      return <ComeHome />
    }
    if (this.state.scene === 3) {
      return <ReallyKnow />
    }
  }

  displayFooter = (scene) => {
    switch(scene) {
      case 0:
        return <Footer />

      case 1:
        return <Player url="/soAloneMaster.mp3" />

      case 2:
        return <Player url="/whenUllComeHome2.mp3" />

      case 3:
        return <Player url="/idontreallynoMaster.mp3" />

      default:
        return <Footer />
    }
  }

  render() {
    return (
      <>
        {this.displayScene(this.state.scene)}
        <Header title={this.scenes[this.state.scene]} callback={() => this.setState({ scene: 0 })} />
        {this.displayFooter(this.state.scene)}
      </>
    );
  }
}

export default App;
