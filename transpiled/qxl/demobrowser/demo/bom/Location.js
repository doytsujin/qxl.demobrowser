(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.Gesture": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.event.Registration": {},
      "qx.bom.element.Style": {},
      "qx.bom.element.Location": {},
      "qx.bom.client.Css": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "css.boxmodel": {
          "className": "qx.bom.client.Css"
        }
      }
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
   * @require(qx.event.handler.Gesture)
   */
  qx.Class.define("qxl.demobrowser.demo.bom.Location", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.Location.prototype.main.base.call(this);
        var links = document.getElementById("list").getElementsByTagName("a");

        for (var i = 0, l = links.length; i < l; i++) {
          qx.event.Registration.addListener(links[i], "tap", qxl.demobrowser.demo.bom.Location.jump);
        }
      }
    },
    statics: {
      num: function num(elem, style) {
        return parseInt(qx.bom.element.Style.get(elem, style, qx.bom.element.Style.COMPUTED_MODE, false), 10);
      },
      jump: function jump(event) {
        if (!event) {
          event = window.event;
        }

        event.returnValue = false;

        if (event.preventDefault) {
          event.preventDefault();
        }

        function num(elem, style) {
          return parseInt(qx.bom.element.Style.get(elem, style, qx.bom.element.Style.COMPUTED_MODE, false), 10);
        }

        ;
        var href = this.href;
        var id = href.substr(href.indexOf('#') + 1);
        var elem = document.getElementById(id);
        var location = qx.bom.element.Location.get(elem, document.getElementById("mode").value);
        var moveable = document.getElementById("moveable");
        moveable.style.left = location.left + "px";
        moveable.style.top = location.top + "px";

        if (qx.core.Environment.get("css.boxmodel") == "border") {
          moveable.style.width = location.right - location.left + "px";
          moveable.style.height = location.bottom - location.top + "px";
        } else {
          moveable.style.width = location.right - location.left - num(moveable, "borderLeftWidth") - num(moveable, "borderRightWidth") + "px";
          moveable.style.height = location.bottom - location.top - num(moveable, "borderTopWidth") - num(moveable, "borderBottomWidth") + "px";
        }

        return false;
      },
      randomize: function randomize() {
        var divs = document.body.getElementsByTagName("div");

        for (var i = 0, l = divs.length; i < l; i++) {
          if (divs[i].id && divs[i].id != "moveable") {
            divs[i].style.margin = Math.round(Math.random() * 10) + "px";
            divs[i].style.padding = Math.round(Math.random() * 10) + "px";
            divs[i].style.borderWidth = Math.round(Math.random() * 10) + "px";
          }
        }
      }
    }
  });
  qxl.demobrowser.demo.bom.Location.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Location.js.map?dt=1589490211567