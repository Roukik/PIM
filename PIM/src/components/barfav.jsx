import React, { useState } from "react";
import "../components/barfav.css";
import Favorie1 from '../assets/favorie1.svg';
import Favorie2 from '../assets/favorie2.svg';
import Favorie3 from '../assets/favorie3.svg';
import Favorie4 from '../assets/favorie4.svg';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Barfav() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Animaux" />
        <Tab label="Refuges" />
      </Tabs>
      {selectedTab === 0 && (
        <div className="favorie12">
          <img src={Favorie1} alt="" className="Favorie1" />
          <img src={Favorie2} alt="" className="Favorie2" />
          <img src={Favorie3} alt="" className="Favorie3" />
          <img src={Favorie4} alt="" className="Favorie4" />
        </div>
      )}
      {selectedTab === 1 && (
        <div className="Refuges">
 
        </div>
      )}
    </div>
  );
}

export default Barfav;
