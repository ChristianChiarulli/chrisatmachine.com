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

    // const getConnectedSession = async () => {
    const connected = sessionStorage.getItem("connected");

    // }

    const getConnected = async (connected) => {
      // console.log("CONNECTED:", connected);
      let enabled = false;
      if (connected === "true") {
        enabled = await window.webln.enable();
        setConnected(true);
      }
      return enabled;
    };

    getConnected(connected);

    if (!getConnected) {
      const connected2 = sessionStorage.getItem("connected");

      setTimeout(() => {
        setRender(true);
      }, 300);

      getConnected(connected2);
    }

    console.log("connected", connected);
  }, []);

  function waitForLocalStorage(key, cb, timer) {
    if (!sessionStorage.getItem(key))
      return (timer = setTimeout(waitForLocalStorage.bind(null, key), 100));
    clearTimeout(timer);
    if (typeof cb !== "function") return localStorage.getItem(key);
    return cb(localStorage.getItem(key));
  }

  const connectHandler = async () => {
    if (typeof window.webln !== "undefined") {
      const enabled = await window.webln.enable();

      sessionStorage.setItem("connected", "true");
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
              Tip
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
