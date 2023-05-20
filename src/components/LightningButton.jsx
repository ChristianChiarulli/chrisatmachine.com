import { useStore } from "@nanostores/react";
import { connected } from "../store/lightning";
import { useEffect } from "react";

import { BsLightningChargeFill } from "react-icons/bs";

export default function LightningButton() {
  const $connected = useStore(connected);

  const connectHandler = async () => {
    try {
      const enabled = await window.webln.enable();
      if (enabled) {
        connected.set("true");
      }
    } catch (e) {
      console.log("disconnected", e);
      connected.set("false");
    }
  };

  useEffect(() => {
    if ($connected === "true") {
      connectHandler();
    }
  }, []);

  const tipHandler = async () => {
    document.getElementById("myPopup").style.display = "flex";
  };

  return (
    <div>
      <button
        className="connect-button"
        onClick={$connected === "true" ? tipHandler : connectHandler}
      >
        <BsLightningChargeFill
          color={"#111"}
          size="17"
          style={{ marginRight: ".4rem" }}
        />
        Tip
      </button>
    </div>
  );
}
