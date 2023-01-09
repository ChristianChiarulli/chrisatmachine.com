// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const LightningButton = () => {
  const [connected, setConnected] = useState(false);
  const [render, setRender] = useState(false);

  // Will run once everytime a user connects to the dapp
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 70);

    const connected = localStorage.getItem("connected");

    const getConnected = async () => {
      if (connected === "true") {
        const enabled = await window.webln.enable();
        setConnected(true);
      }
    };

    getConnected();

    console.log("connected", connected);
  }, []);

  const connectHandler = async () => {
    if (typeof window.webln !== "undefined") {
      const enabled = await window.webln.enable();

      localStorage.setItem("connected", "true");
    }
    console.log("connected");
    setConnected(true);
  };

  const tipHandler = async () => {
    document.getElementById("myPopup").style.display = "flex";
  };

  return (
    <div>
      {render ? (
        <div>
          {connected ? (
            <button className="connect-button" onClick={tipHandler}>
              <BsLightningChargeFill
                color={"#111"}
                size="17"
                style={{ marginRight: ".4rem" }}
              />
              Tip
            </button>
          ) : (
            <button className="tip-button" onClick={connectHandler}>
              <BsLightningChargeFill
                color={"#111"}
                size="17"
                style={{ marginRight: ".4rem" }}
              />
              Login
            </button>
          )}
        </div>
      ) : (
        <div>
          <button className="connect-button" onClick={tipHandler}>
            <BsLightningChargeFill
              color={"#111"}
              size="17"
              style={{ marginRight: ".4rem" }}
            />
            Tip
          </button>
        </div>
      )}
    </div>
  );
};

export default LightningButton;
