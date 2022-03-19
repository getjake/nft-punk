import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

const nftAssetUrl = "https://testnets-api.opensea.io/api/v1/assets?owner=0x745E69b2D8B18be987237f3C9411961530854075";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [activePunk, setActivePunk] = useState({});

  // const activePunk 
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(nftAssetUrl);
      // console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets);
      setActivePunk(openseaData.data.assets[0])
      console.log(openseaData.data.assets[0])
    };
    return getMyNfts();
  }, []);

  useEffect(() => {
    console.log(activePunk)
  }, [activePunk])
  
  
  return (
    <div className="app">
      <Header />
      <Main activePunk={activePunk} punkListData={punkListData}  />
      <PunkList punkListData={punkListData} setActivePunk={setActivePunk} />
    </div>
  );
}

export default App;
