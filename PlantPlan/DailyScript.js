
function getData() {
    var dataFromLocalStorage = localStorage.getItem('data');
    // Display the data in the HTML document
    var displayDataElement = document.getElementById('display-data');

    if (data) {
        displayDataElement.textContent = dataFromLocalStorage;
    } else {
        displayDataElement.textContent = 'No data available.';
    }

}