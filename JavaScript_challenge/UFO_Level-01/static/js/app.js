// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
function tableBuilder(tableReport) {
    tbody.html("");

    tableReport.forEach(function(tableInfo) {
        var row = tbody.append("tr");
    
        Object.values(tableInfo).forEach(function(value) {
            var cell = row.append("td").text(value);
        });
    });


};

tableBuilder(tableData);

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", filterData);


function filterData() {

    

    var inputElement = d3.select("#datetime");
    

    var inputValue = inputElement.property("value");
    


    var filterData = tableData.filter(data => data.datetime === inputValue);
    
    console.log(filterData);
    
    tbody.html("");

    tableBuilder(filterData);
};


