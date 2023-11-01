let table;
let nameInput, emailInput;
let saveButton;

function setup() {
  createCanvas(400, 400);
  
  // Create a new table
  table = new p5.Table();
  table.addColumn('Name');
  table.addColumn('Email');

  // Input fields
  nameInput = select('#name');
  emailInput = select('#email');

  // Save button
  saveButton = select('#saveButton');
  saveButton.mousePressed(saveToCSV);
}

function draw() {
  background(220);
  // Display the table if you like
}

function saveToCSV() {
  // Get the user inputs
  let name = nameInput.value();
  let email = emailInput.value();
  
  // Add the data to the table
  let newRow = table.addRow();
  newRow.setString('Name', name);
  newRow.setString('Email', email);
  
  // Save the table as a CSV file
  saveTable(table, 'data.csv');
}
