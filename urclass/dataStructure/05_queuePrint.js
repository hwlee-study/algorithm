//https://urclass.codestates.com/codeproblem/f55d16b8-5f90-416a-a66b-008932f1acab
function queuePrint(bufferSize, capacities, documents) {
  let queue = new Array(bufferSize).fill(0),
    count = 0,
    currentSize = 0;
  let currentDocument = documents.shift();
  queue.unshift(currentDocument);
  queue.pop();
  count++;
  currentSize = currentDocument;

  while (currentSize) {
    currentSize = currentSize - queue.pop();
    currentDocument = documents.shift();

    if (currentDocument + currentSize <= capacities) {
      queue.unshift(currentDocument);
      currentSize += currentDocument;
    } else {
      documents.unshift(currentDocument);
      queue.unshift(0);
    }
    count++;
  }
}

let bufferSize = 2,
  capacities = 10,
  documents = [7, 4, 5, 6];

let output = queuePrint(bufferSize, capacities, documents);
console.log(output);
