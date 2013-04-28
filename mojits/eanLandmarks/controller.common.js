/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('eanLandMarks', function(Y, NAME) {

  /**
  * The eanLandMarks module.
  *
  * @module eanLandMarks
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
        ac.done();
    },

    getEanLandmarks: function(ac) {
      Y.log('getEanLandmarks action invokation body ' + Y.JSON.stringify(ac.params.body('place')), 'WARN', NAME);
      var country = ac.params.body('place').data.country.content;
      if (!country) {
        ac.done(Y.JSON.stringify({ error: true}));
      } else {
        ac.models.get('eanLandMarksModelFoo').getEanLandmarksData(country, function(error, response) {
          ac.done(response);
        });
      }
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-params-addon', 'mojito-assets-addon', 'mojito-models-addon', 'eanLandMarksModelFoo']});
