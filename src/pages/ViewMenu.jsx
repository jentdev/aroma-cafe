import React from "react";
import { useParams } from "react-router";

import { espresso, coldBrew, signature, teas, pastries } from "../assets/menu";
import DisplayMenu from "../components/DisplayMenu";
import { div } from "framer-motion/client";

const ViewMenu = () => {
  const { category } = useParams();

  return (
    <div className="category-menu-container">
    <div className="category-menu">
      {category === "coffee" && <div>
        <DisplayMenu subcat='espresso' items={espresso} />
      </div>}

      {category === "coffee" && <div>
        <DisplayMenu subcat='signature' items={signature} />
      </div>}

      {category === "coffee" && <div>
        <DisplayMenu subcat='cold brew' items={coldBrew} />
      </div>}

      {category === "teas" && <div>
        <DisplayMenu subcat='teas' items={teas} />
      </div>}

      {category === "pastries" && <div>
        <DisplayMenu subcat='pastries' items={pastries} />
      </div>}

    </div>
    </div>
  );
};

export default ViewMenu;
