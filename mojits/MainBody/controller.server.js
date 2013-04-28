/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MainBody', function(Y, NAME) {

  /**
  * The MainBody module.
  *
  * @module MainBody
  */

  /**
  * Constructor for the Controller class.
  *
  * @class Controller
  * @constructor
  */
  Y.namespace('mojito.controllers')[NAME] = {

    /**
    * Method corresponding to the 'index' action.
    *
    * @param ac {Object} The ActionContext that provides access
    *        to the Mojito API.
    */
    index: function(ac) {
          if(ac.context.device === "iphone") {
            Y.log('index for iphone, adding specific code', 'WARN', NAME);


            ac.assets.addBlob('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable = no">', 'top');
            ac.assets.addBlob('<meta name="apple-mobile-web-app-capable" content="yes">', 'top');
            ac.assets.addBlob('<meta name="apple-mobile-web-app-status-bar-style" content="black">', 'top');
            ac.assets.addBlob('<meta name="format-detection" content="telephone=no">', 'top');
            ac.assets.addJs('./js/bottlify.js', 'bottom'); 
          } else {

            ac.assets.addCss('./css/index.css');
            ac.assets.addCss('./css/bootstrap.css');
            ac.assets.addCss('./css/todo.css');
            ac.assets.addCss('http://fonts.googleapis.com/css?family=Arvo:700');
              // ac.assets.addCss('http://fonts.googleapis.com/css?family=Babel');
                ac.assets.addJs('./js/listReorder.js', 'bottom');
                ac.assets.addJs('./js/todoList.js', 'bottom');
          }
          ac.composite.done();
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-composite-addon', 'mojito-assets-addon', 'mojito-models-addon', 'MainBodyModelFoo']});
