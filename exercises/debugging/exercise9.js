// The following code is a simplified (and not so serious) model of how we read
// a software development book. But running this code results in a stack
// overflow. What is wrong?

const totalPages = 364;
let energy = 100;

// function read() {
function read(currentPage) {
  // let currentPage = 1; // This gets redeclared in each call to read

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    // read();
    read(currentPage);
  } else {
    console.log('Done!');
  }
}

// read();
read(1);
