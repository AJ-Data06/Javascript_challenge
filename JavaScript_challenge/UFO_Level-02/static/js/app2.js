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

var cat_button = d3.select("#catogary-filter-btn");
var cat_form = d3.select("#category-form");

cat_button.on("click", categoryData);
cat_form.on("submit", categoryData);


var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", filterData);
form.on("submit", filterData);

function categoryData() {
    var cat_input = d3.select("#input-category");

    var cat_value = cat_input.property("value");

    var catFilter = tableData.filter(data => data.datetime === cat_value || data.city === cat_value || data.state === cat_value || data.country === cat_value || data.shape === cat_value);

    tbody.html("");

    tableBuilder(catFilter);

};


function filterData() {

    

    var inputElement = d3.select("#datetime");
    var inputElement1 = d3.select("#city");
    var inputElement2 = d3.select("#state");
    var inputElement3 = d3.select("#country");
    var inputElement4 = d3.select("#shape");

    

    var inputValue = inputElement.property("value");
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");

    console.log(inputValue);
    console.log(inputValue1);

    var filterData = tableData.filter(data => (data.datetime === inputValue && data.city === inputValue1));
    var filterState = filterData.filter(data => data.state === inputValue2);
    var filterCountry = filterState.filter(data => data.country === inputValue3);

    console.log(filterData);
    console.log(city);
    console.log(state);

    tbody.html("");

    tableBuilder(filterCountry);
    
};

function performReset() {
    document.getElementById("inputDate").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputState").value = "";
    document.getElementById("inputCountry").value = "";
    document.getElementById("inputShape").value = "";

    filterTable(vent, 0);
  }
  
  function filterTable(event, index) {
    var filter = event.target.value;
    var rows = document.querySelector("#ufo-table tbody").rows;
    for (var i = 0; i < rows.length; i++) {
      var firstCol = rows[i].cells[0].textContent;
      var secondCol = rows[i].cells[1].textContent;
      var thirdCol = rows[i].cells[2].textContent;
      var fourthCol = rows[i].cells[3].textContent;
      var fifthCol = rows[i].cells[4].textContent;


      if ((firstCol.indexOf(filter) > -1 && index == 0) || (secondCol.indexOf(filter) > -1 && index == 1) || (thirdCol.indexOf(filter) > -1 && index == 2) || (fourthCol.indexOf(filter) > -1 && index == 3) ||(fifthCol.indexOf(filter) > -1 && index == 4)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }      
    }
  }
  document.querySelectorAll('input.w3-input').forEach(function(el,idx){
    el.addEventListener('keyup', function(e){
      filterTable(e, idx);
    }, false);
  });