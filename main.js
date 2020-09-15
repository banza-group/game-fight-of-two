//Hero = 1
//villian = 2


// Cada passo que o hero der o villian da um passo em direção ao hero.
let initialMapGame = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

function generateInitialPositions(initialMapGame, actualPosition) {
  initialMapGame[0][0] = 2;
  initialMapGame[5][5] = 2;
  return initialMapGame;
}

const initialMapGameInitialPositions = generateInitialPositions(initialMapGame);

console.log(walk("left", initialMapGameInitialPositions, getActualPosition(initialMapGameInitialPositions)))

function walk(direction, mapGame, actualPosition) {
  if(direction === "left") {
    if (mapGame[actualPosition.hero.indexLine][actualPosition.hero.position - 1] != null) {
      mapGame = mapGame[actualPosition.hero.indexLine][actualPosition.hero.position] = 0;
      mapGame = mapGame[actualPosition.hero.indexLine][actualPosition.hero.position] - 1;
      return mapGame;
    } else {
      console.info("Não é possível andar nessa direção")
    }
  }
}

function verifyPermitedPosition() {}

function getActualPosition(mapGame) {
  let heroPosition = null;
  let villianPosition = null;
  
  mapGame.forEach((line, indexLine) => {
    line.forEach((position, indexPosition) => {
      if(position === 1)
        heroPosition = {indexLine, indexPosition}
      if(position === 2)
        villianPosition = {indexLine, indexPosition}
    })
  });

  return {hero: heroPosition, villian: villianPosition}
}