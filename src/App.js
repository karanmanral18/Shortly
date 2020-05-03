import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import CopyPanel from "../src/components/CopyPanel/CopyPanel";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CopyPanel />
        </Layout>
      </div>
    );
  }
}

export default App;
