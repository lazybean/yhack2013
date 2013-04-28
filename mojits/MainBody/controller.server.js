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
                ac.assets.addCss('./css/index.css');
                ac.assets.addCss('./css/bootstrap.css');
                ac.assets.addCss('./css/todo.css');
                ac.assets.addCss('http://fonts.googleapis.com/css?family=Arvo:700');
                ac.assets.addCss('http://fonts.googleapis.com/css?family=Babel');
                ac.assets.addJs('./js/listReorder.js', 'bottom');
                ac.assets.addJs('./js/todoList.js', 'bottom');

                ac.composite.done();
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-composite-addon', 'mojito-assets-addon', 'mojito-models-addon', 'MainBodyModelFoo']});
