import React from "react";
import Card from "./Card";
import "./Overview.css";
import cardBriefcase from "../../../asset/card-briefcase.svg";
import cardDot from "../../../asset/card-dot.svg";
import cardHeart from "../../../asset/card-heart.svg";
import cardTrxn from "../../../asset/card-transaction.svg";

function Overview() {
  return (
    <div className="overview-container">
      <div className="overview-heading">
        <p>Overview</p>
      </div>

      <div className="overview-card-section">
        <Card
          icon={cardBriefcase}
          count={100}
          title={"Total Jobs Applied"}
          subText={"Last applied 2d ago."}
        />

        <Card
          icon={cardTrxn}
          count={100}
          title={"Total Transactions"}
          subText={"Last transaction 1hr ago."}
        />
        <Card
          icon={cardHeart}
          count={100}
          title={"Total Jobs Saved"}
          subText={"Last Saved 1hr ago."}
        />
        <Card
          icon={cardDot}
          count={100}
          title={"Total Pending Jobs"}
          subText={"Last transaction 1hr ago."}
        />
      </div>
    </div>
  );
}

export default Overview;
