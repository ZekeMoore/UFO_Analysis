// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function for dynamic table
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");
    // Loop through each object in data & append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

// Create function for filtering
function handleClick() {
    // Grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if date was entered, and filter using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table using filtered data
    buildTable(filteredData);
};

// Attach an event to listen for the button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when page loads
buildTable(tableData);