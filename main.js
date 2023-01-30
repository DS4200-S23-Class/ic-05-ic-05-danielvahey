

let num_clicks = 0;
console.log(num_clicks)

function buttonClicked(num_clicks) {
    ++num_clicks;
    let newText = `Number of clicks: ${num_clicks}`;
    // Select an element in the DOM by id
    let buttonDiv = document.getElementById("button-div");

    // Update the HTML code inside of an element
    buttonDiv.innerHTML = newText;
    return num_clicks;
    console.log(num_clicks)
}





























