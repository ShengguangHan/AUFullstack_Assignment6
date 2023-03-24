function isNumber(element){
  return +element === element
}

function mySort(list){
  const flatList = list.flat(Infinity)
  const filterList = flatList.filter(element2 => isNumber(element2))
  const setList = [...new Set(filterList)]
  const sortList = setList.sort((a,b) => a - b)
  return sortList
}

export {isNumber, mySort}