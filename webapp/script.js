document.getElementById("fetchApi").addEventListener("click", () => {
    console.log("Button clicked!");

    fetch("http://localhost:5000/api") // Replace with "http://api-container:5000/api" if using Docker network
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("API data parsed:", data);
            document.getElementById("apiResult").innerText = data.message;
        })
        .catch(error => {
            console.error("Error fetching API:", error);
            document.getElementById("apiResult").innerText = "Failed to fetch API data.";
        });
});
