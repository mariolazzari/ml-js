// observations
const outputs = [];
const predictionPoint = 300;
const k = 3;

// Ran every time a balls drops into a bucket
function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
  //console.log(outputs);
}

function distance(point) {
  return Math.abs(point - predictionPoint);
}

// Write code here to analyze stuff
function runAnalysis() {
  const bucket = _.chain(outputs)
    .map((row) => [distance(row[0]), row[3]])
    .sortBy((row) => row[0])
    .slice(0, k)
    .countBy((row) => row[1])
    .toPairs()
    .sortBy((row) => row[1])
    .last()
    .first()
    .parseInt()
    .value();

  console.log("Bucket:", bucket);
}
