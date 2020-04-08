(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.util.LayoutApplication": {
        "require": true
      },
      "qx.ui.container.Scroll": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.layout.Dock": {},
      "qx.ui.core.Widget": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.layout.Dock", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.Dock.prototype.main.base.call(this);
        var scroll = new qx.ui.container.Scroll();
        this.getRoot().add(scroll, {
          edge: 0
        });
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(20)).set({
          padding: 20
        });
        scroll.add(container); // default layout, auto-sized

        var widget = new qx.ui.container.Composite(new qx.ui.layout.Dock()).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowX: false
        });
        var w1 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "red"
        });
        var w2 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "blue"
        });
        var w3 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "orange"
        });
        var w4 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        });
        var w5 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "fuchsia"
        });
        widget.add(w1, {
          edge: "north"
        });
        widget.add(w2, {
          edge: "west"
        });
        widget.add(w3, {
          edge: "south"
        });
        widget.add(w4, {
          edge: "east"
        });
        widget.add(w5, {
          edge: "center"
        });
        container.add(widget); // y-axis first, auto-sized

        var dock = new qx.ui.layout.Dock();
        dock.setSort("y");
        var widget = new qx.ui.container.Composite(dock).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowX: false
        });
        var w1 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "red"
        });
        var w2 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "blue"
        });
        var w3 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "orange"
        });
        var w4 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        });
        var w5 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "fuchsia"
        });
        widget.add(w1, {
          edge: "north"
        });
        widget.add(w2, {
          edge: "west"
        });
        widget.add(w3, {
          edge: "south"
        });
        widget.add(w4, {
          edge: "east"
        });
        widget.add(w5, {
          edge: "center"
        });
        container.add(widget); // x-axis first, auto-sized

        var dock = new qx.ui.layout.Dock();
        dock.setSort("x");
        var widget = new qx.ui.container.Composite(dock).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowX: false
        });
        var w1 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "red"
        });
        var w2 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "blue"
        });
        var w3 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "orange"
        });
        var w4 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        });
        var w5 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "fuchsia"
        });
        widget.add(w1, {
          edge: "north"
        });
        widget.add(w2, {
          edge: "west"
        });
        widget.add(w3, {
          edge: "south"
        });
        widget.add(w4, {
          edge: "east"
        });
        widget.add(w5, {
          edge: "center"
        });
        container.add(widget);
      }
    }
  });
  qxl.demobrowser.demo.layout.Dock.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Dock.js.map?dt=1586350625290