document.getElementById("close-popup").addEventListener("click", async () => {
  document.getElementById("myPopup").style.display = "none";
});

document.querySelector(".send-button").addEventListener("click", async () => {
  const value = document.getElementById("tip-input").value;

  console.log("VALUE:", value);

  const result = await webln.keysend({
    destination:
      "030a58b8653d32b99200a2334cfe913e51dc7d155aa0116c176657a4f1722677a3",
    amount: value,
    customRecords: {
      696969: "z6jZV4xv9PuJoMGQvs2m",
    },
  });

  document.getElementById("myPopup").style.display = "none";

  console.log("Payment result:", result);
});
