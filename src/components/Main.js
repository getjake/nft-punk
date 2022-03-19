import React from "react";
import "./Main.scss";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const myProfileImg = "https://lh3.googleusercontent.com/cyeJzEqvNgghP4fK5O3GVinkL88_XMIJDFO2I967_8k8KDV37smArtWryQ2Z1NNvazbGhARZZOkSgav4izmfrm8qcvvvWsBxoXQolEc=w600";
const Main = ({ activePunk, punkListData }) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkContainer">
          <img src={activePunk.image_url} alt="active-punk" className="selectedPunk" />
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={myProfileImg} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>0x745E69b2D8B18be987237f3C9411961530854075</div>
                <div className="ownerHandle">@jakez</div>
              </div>
            </div>
            <div className="socialLinks">
              <div className="socialLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="socialLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="socialLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
