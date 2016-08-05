const Nodest = require("nodest");

// the lone Controller for this app handles
// requests for / using a templated response
class IndexController extends Nodest.Controller {
  index() {
    
    // render returns HTML to the browser
    this.render(

      // load templates and generate it using
      // some page variables
      this.template("layout.html", "index.html")
        .generate({
          title: "Nodest Bootstrap Project",
          header: "Nodest<br> Bootstrap Project",
          body: "Fork it on <a href='https://github.com/davideweaver/nodest-bootstrap'>GitHub</a>"
        })
    );
  }
}

module.exports = IndexController;