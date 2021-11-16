// Queue CLASS
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.elements = {};
  }

  // METHODS
  // Insert element
  enqueue(element) {
    this.elements[this.count] = element;
    this.count++;
  }

  // Removes an element
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.elements[this.lowestCount];
    delete this.elements[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // Convert the queue to string
  toString() {
    let arr = [];

    for (let i = this.lowestCount; i < this.count; i++) {
      arr.push(this.elements[i]);
    }
    return arr.toString();
  }

  // Return if the queue it's empty
  isEmpty() {
    return this.size() === 0;
  }

  // Return the size of the queue
  size() {
    return this.count - this.lowestCount;
  }
}

// FUNCTIONS
// Remove from queue, according to call rule
function remove() {
  if (priorityCount < 2 && !priorityQueue.isEmpty()) {
    priorityQueue.dequeue();
    priorityCount += 1;
  } else if (commonQueue.isEmpty() && !priorityQueue.isEmpty()) {
    priorityQueue.dequeue();
    priorityCount += 1;
  } else if (!commonQueue.isEmpty()) {
    commonQueue.dequeue();
    priorityCount = 0;
  }
  updateDisplay();
}

// Insert element on the Common Queue
function insertCommom() {
  if (commonQueue.isEmpty()) commonElement = 1;
  commonQueue.enqueue(commonElement);
  commonElement++;
  updateDisplay();
}

// Insert element on the Priority Queue
function insertPriority() {
  if (priorityQueue.isEmpty()) priorityElement = 1;
  priorityQueue.enqueue(priorityElement);
  priorityElement++;
  updateDisplay();
}

// Update the values shown of the Queues
function updateDisplay() {
  let priority = document.getElementById("PriorityQueueID");
  let common = document.getElementById("CommonQueueID");
  priority.innerHTML = `FILA PRIORITÁRIA: [${priorityQueue.toString()}]`;
  common.innerHTML = `FILA COMUM: [${commonQueue.toString()}]`;
}

// MAIN
// Creating the queues
var commonQueue = new Queue();
var priorityQueue = new Queue();

// Control variables
var priorityCount = 0;
var commonElement = 1;
var priorityElement = 1;
