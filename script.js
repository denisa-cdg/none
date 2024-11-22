// Initialize answers object in localStorage if it doesn't exist
if (!localStorage.getItem("answers")) {
    localStorage.setItem("answers", JSON.stringify({}));
}

// Function to save data to localStorage
function saveToLocalStorage(key, value) {
    const answers = JSON.parse(localStorage.getItem("answers"));
    answers[key] = value;
    localStorage.setItem("answers", JSON.stringify(answers));
}

// Save answers from the Snacks form
function saveSnacks() {
    const form = document.forms["snacksForm"];
    saveToLocalStorage("drink", form["drink"].value);
    saveToLocalStorage("doritos", form["doritos"].value);
    saveToLocalStorage("otherSnacks", form["otherSnacks"].value);
    window.location.href = "dinner.html";
}

// Save answers from the Dinner form
function saveDinner() {
    const form = document.forms["dinnerForm"];
    saveToLocalStorage("dinnerPlace", form["dinnerPlace"].value);
    saveToLocalStorage("cuisine", form["cuisine"].value);
    saveToLocalStorage("otherFood", form["otherFood"].value);
    window.location.href = "final.html";
}

// Download answers as a JSON file
function downloadAnswers() {
    const answers = JSON.parse(localStorage.getItem("answers"));

    // Create a JSON string
    const jsonString = JSON.stringify(answers, null, 2);

    // Create a Blob from the JSON string
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a link to download the Blob as a .json file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "send-to-denisa.json";  // Specify the filename for download
    link.click();  // Trigger the download
}
