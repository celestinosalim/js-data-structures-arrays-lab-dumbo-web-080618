const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const newDrivers = drivers.slice();
  newDrivers.push(name)
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = drivers.slice();
  newDrivers.unshift(name)
  return newDrivers;
}

function removeLastDriver() {
  const newDrivers = drivers.slice();
  newDrivers.pop()
  return newDrivers;
}

function removeFirstDriver() {
  const newDrivers = drivers.slice();
  newDrivers.shift()
  return newDrivers;
}
