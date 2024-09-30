getTasks((project) => {
 project.forEach((project) => {
    addItemToDOM(project);
    console.log(project.name);
  });
});

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('pname').value;
  if (value) {
    addItem(value);
  }
});

document.getElementById('pname').addEventListener('keydown', function (e) {
  var value = this.value;
  if (e.code === 'Enter' && value) {
    addItem(value);
  }
});

function addItem (value) {
  document.getElementById('pname').value = '';

  sendTaskToAPI(value, (pname) => {
    addItemToDOM(item);
  });
}

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var taskId = parseInt(item.getAttribute('id'));

  var req = new XMLHttpRequest();
  req.open('POST', '/project/' + taskId + '/remove');
  req.setRequestHeader('Content-Type', 'application/json');
  req.send();

  req.addEventListener('load', () => {
    var results = JSON.parse(req.responseText);
    if (results.error) return console.log(results.error);

    parent.removeChild(item);
  });

  req.addEventListener('error', (e) => {
    console.log('Shit, something bad happened.');
    console.log(e);
  });
}


//Add item

function addItemToDOM(task) {
  var list = document.getElementById('proj_created');

  var item = document.createElement('li');
  item.innerText = task.name;
  item.setAttribute('data-id', task._id);

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = "X";

  // Add click event for removing the item
  remove.addEventListener('click', removeItem);

 


  buttons.appendChild(remove);
  item.appendChild(buttons);

  list.insertBefore(item,list.childNodes[0]);
}

/**
 * Method for sending to-do item to API
 */
function sendTaskToAPI(pnmae, callback) {
  var req = new XMLHttpRequest();
  req.open('POST', '/project/add');
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({ pname: pname }));

  req.addEventListener('load', () => {
    var results = JSON.parse(req.responseText);
    if (results.error) return console.log(results.error);

    if (callback) callback(results);
  });

  req.addEventListener('error', (e) => {
    console.log('Shit, something bad happened.');
    console.log(e);
  });
}


/**
 * Will fetch all tasks from API.
 */
function getTasks(callback) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://localhost/project',true);
  req.send();

  console.log("getTask Loaded");
  req.addEventListener('load', () => {
    var results = JSON.parse(req.response);
    if (results.error) return console.log(results.error+"::result error");
    //console.log(results.name);
    if (callback) callback(results);
  });
/*
  req.addEventListener('error', (e) => {
    console.log('Shit, something bad happened.');
    console.log(e);
  });*/
}
