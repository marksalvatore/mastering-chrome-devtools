window.setInterval(createDOMNodes, 1E3)

function createDOMNodes() {
  for (var i = 0; i < 100; i++) {
    var div = document.createElement('div')
    var divContent = document.createTextNode('Hello World')
    div.appendChild(divContent)
    document.body.appendChild(div)
  }
}
