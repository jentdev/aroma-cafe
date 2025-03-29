import React from "react";
import { useParams } from "react-router";

import { espresso, coldBrew, latte, teas, pastries } from "../assets/menu";
import DisplayMenu from "../components/DisplayMenu";

const ViewMenu = () => {
  const { category } = useParams();

  return (
    <div>
      {category === "coffee" && <div>
        <DisplayMenu subcat='espresso' items={espresso} />
      </div>}

      {category === "coffee" && <div>
        <DisplayMenu subcat='cold brew' items={coldBrew} />
      </div>}

      {category === "coffee" && <div>
        <DisplayMenu subcat='latte' items={latte} />
      </div>}

      {category === "teas" && <div>
        <DisplayMenu subcat='teas' items={teas} />
      </div>}

      {category === "pastries" && <div>
        <DisplayMenu subcat='pastries' items={pastries} />
      </div>}
    </div>
  );
};

export default ViewMenu;
