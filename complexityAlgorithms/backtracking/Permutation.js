//Dado un arreglo [1,2,3], generar todas las formas posibles de ordenarlo.

function permutaciones(nums) {
  let resultados = [];

  function backtrack(camino, disponibles) {
    if (disponibles.length === 0) {
      resultados.push([...camino]);
      return;
    }

    for (let i = 0; i < disponibles.length; i++) {
      camino.push(disponibles[i]);

      backtrack(
        camino,
        disponibles.filter((_, index) => index !== i)
      );

      camino.pop();
    }
  }

  backtrack([], nums);
  return resultados;
}

console.log(permutaciones([1, 2, 3]));
