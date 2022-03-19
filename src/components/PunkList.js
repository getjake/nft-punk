import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.scss";

const PunkList = ({ punkListData, setActivePunk }) => {
  return (
    
    <div className="punkList">
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => {setActivePunk(punk)}}>
          <CollectionCard key={punk.token_id} id={punk.token_id} name={punk.name} traits={punk.traits} image={punk.image_preview_url} />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
