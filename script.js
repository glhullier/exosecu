document.addEventListener("DOMContentLoaded", function () {
  fetch("server.php?action=read")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("content").innerText = data.message;
    });

  document
    .getElementById("dataForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const inputData = document.getElementById("inputData").value;

      fetch("server.php?action=write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputData }),
      })
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("content").innerText = data.message;
        });
    });
});
