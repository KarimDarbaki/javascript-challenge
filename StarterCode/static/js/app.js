// from data.js
let tableData = data;
// console.log(tableData);
// YOUR CODE HERE!
function createtable(displaydata) {
    // console.log(displaydata);
    tbody = d3.select("tbody")
    tbody.html("")
    displaydata.forEach((row) => {
        // console.log(row);
        let tablerow = tbody.append("tr");
        Object.values(row).forEach((value)=> {
            // console.log(value)
            let cell = tablerow.append("td");
            cell.text(value);
        })
    });
}
createtable(tableData);


function filterBtn(){
    let inputdate = d3.select("#datetime").property("value")
    console.log(inputdate)
    filterdata = tableData.filter(row=>row.datetime==inputdate)
    console.log(filterdata)
    createtable(filterdata)
}
let button = d3.select("#filter-btn");
button.on("click", filterBtn);


