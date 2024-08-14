document.getElementById("copyButton").addEventListener("click", function () {
  const textToCopy = document.getElementById("textToCopy").value;

  navigator.clipboard.writeText(textToCopy).then(
    function () {
      const copyIcon = document.getElementById("copyIcon");
      const checkIcon = document.getElementById("checkIcon");

      // Swap the icons
      copyIcon.classList.add("hidden");
      checkIcon.classList.remove("hidden");

      // Revert back to the copy icon after 2 seconds
      setTimeout(() => {
        copyIcon.classList.remove("hidden");
        checkIcon.classList.add("hidden");
      }, 500);
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
});
