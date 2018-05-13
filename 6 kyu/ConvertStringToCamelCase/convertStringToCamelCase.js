function toCamelCase(input) { 
  return input.replace(/([_|-])([a-zA-z])/g, function (g) { return g[1].toUpperCase(); });
}