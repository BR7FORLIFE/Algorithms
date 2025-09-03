function subconjuntos(nums) {
  let resultados = [];

  function backtrack(indice, camino) {
    
    if (indice === nums.length) {
      resultados.push([...camino]); 
      return;
    }

    camino.push(nums[indice]);
    backtrack(indice + 1, camino);
    camino.pop(); 


    backtrack(indice + 1, camino);
  }

  backtrack(0, []);
  return resultados;
}

console.log(subconjuntos([1, 2, 3]));
