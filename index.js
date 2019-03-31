// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newdrivers = drivers.map(string => string.toLowerCase())
  return newdrivers
}

function nameToAttributes(drivers){
  const driverarray = drivers.map (driver => Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}))
  return driverarray
}

function attributesToPhrase(drivers){
  const driverarray = drivers.map (driver => `${driver.name} is from ${driver.hometown}`)
  return driverarray
}
