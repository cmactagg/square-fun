console.log("starting");

const sqrArray2 = [
  [1, 1], // - -
  [1, 1, 1], //| | |
  [1, 1] // - -
];

const sqrArray4 = [
  [1, 1], // - -
  [1, 1, 1], //| | |
  [1, 1], // - -
  [1, 1, 1], //| | |
  [1, 1] // - -
];

const sqrArray9 = [
  [1, 1, 1], // - -
  [1, 1, 1, 1], //| | |
  [1, 1, 1], // - -
  [1, 1, 1, 1], //| | |
  [1, 1, 1], // - -
  [1, 1, 1, 1], //| | |
  [1, 1, 1] // - -
];

const sqrArray12 = [
  [1, 1, 1], // - -
  [1, 1, 1, 1], //| | |
  [1, 1, 1], // - -
  [1, 1, 0, 1], //| | |
  [1, 1, 1], // - -
  [1, 1, 1, 1], //| | |
  [1, 1, 1], // - -
  [1, 1, 1, 1], //| | |
  [1, 1, 1] // - -
];

function run(sqrArray) {
  const maxSize = sqrArray[0].length;

  for (var hrIdx = 0; hrIdx < sqrArray.length - 2; hrIdx += 2) {
    for (var colIdx = 0; colIdx < maxSize; colIdx++) {
      console.log("%s %s", hrIdx, colIdx);
      
      for (var sqrSize = 1; sqrSize <= maxSize; sqrSize++) {
        let position = [hrIdx, colIdx];
        var sqrSizeSeek = 1;
        let doSeek = true;
        let direction = "r";
        while(doSeek){
        //console.log("%s %s", position, sqrSize);
          if (position[0] < sqrArray.length &&
              position[1] < sqrArray[position[0]].length && 
              sqrArray[position[0]][position[1]] === 1) {
            if (sqrSize === sqrSizeSeek) {
              sqrSizeSeek = 1;
              switch (direction) {
                case "r":
                  direction = "d";
                  position = [position[0] + 1, position[1] + 1];
                  break;
                case "d":
                  direction = "l";
                  position = [position[0] + 1, position[1] - 1];
                  break;
                case "l":
                  direction = "u";
                  position = [position[0] - 1, position[1]];
                  break;
                case "u":
                  console.log("finished sqr %s ", sqrSize);
                  doSeek = false;
                  break;
              }
            } else {
              switch (direction) {
                case "r":
                  position = [position[0], position[1] + 1];
                  break;
                case "d":
                  position = [position[0] + 2, position[1]];
                  break;
                case "l":
                  position = [position[0], position[1] - 1];
                  break;
                case "u":
                  position = [position[0] - 2, position[1]];
                  break;
              }
              sqrSizeSeek++;
            }
          } else{
            doSeek = false;
          }
          
        }
      }
    }
  }
}

run(sqrArray12);

process.exit();
