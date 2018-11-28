document.addEventListener('DOMContentLoaded', function () {
  //variables
  const board = document.getElementById('board');
  const col = document.getElementById('col');
  let clicked = false;

  //Creates the grid 
  for (i = 0; i < 3; i++) {
    var add = document.createElement('div');
    add.id = 'row'
    document.getElementById('board').appendChild(add);

    for (j = 0; j < 3; j++) {
      var add = document.createElement('div');
      add.id = 'col'
      document.getElementById('board').appendChild(add);
    }
  }
  //this stuff does not work
  const clickCheck = () => {
    if (clicked === false) {
      col.style.background = "red"
      clicked = true;
    } else {
      col.style.background = "white";
      clicked = false;
    }
  };

  col.addEventListener("click", () => {
    clickCheck();
  });










});
