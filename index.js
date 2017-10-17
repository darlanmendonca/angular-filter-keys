angular.module('filter-keys', [])

angular
  .module('filter-keys')
  .filter('by', filterKeys)

module.exports = filterKeys

function filterKeys() {
  const templates = [
    'nenhum',
    '{name}',
    '{name} e {name}',
    '{name}, {name} e {name}',
    '{name}, {name}, {name} e {name}',
    '{name}, {name}, {name} e outros {n}',
  ]

  return filter

  function filter(array, key) {
    if (!array) {
      return ''
    }

    let names = key
      ? array.map(item => item[key])
      : array

    let index = Math.min(names.length, templates.length - 1)
    let template = templates[index].replace(/{name}|{n}/g, getTemplate)
    return template

    function getTemplate(item) {
      return item === '{name}'
        ? names.shift() || '? (nomes não disponíveis para exibição)'
        : names.length
    }
  }
}