import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const title = "My Website";
  return (
    <div>
      <Header title={title} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
