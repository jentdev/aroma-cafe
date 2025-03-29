import React from "react";
import { espresso, coldBrew, latte, teas, pastries } from "../assets/menu";
import { useParams } from "react-router";

const ViewMenu = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <div>
      {category === "coffee" && <div>display espresso</div>}

      {category === "coffee" && <div>display cold brew</div>}

      {category === "coffee" && <div>display latte</div>}

      {category === "teas" && <div>display teas</div>}

      {category === "pastries" && <div>display pastries</div>}
    </div>
  );
};

export default ViewMenu;
