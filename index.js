const choo = require('choo')
const html = require('choo/html')

// initialize choo
const app = choo()

var main = function () {
    return html`<div>Oh hi there</div>`
  }
  // create a route
  app.route('/', main)
// start app
app.mount('div')
