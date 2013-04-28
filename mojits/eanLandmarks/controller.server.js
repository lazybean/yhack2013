/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('eanLandmarks', function(Y, NAME) {

  /**
  * The eanLandmarks module.
  *
  * @module eanLandmarks
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
      var city = ac.params.body('place').data.name,
      countryCode = ac.params.body('place').data.country.code;
      if (!countryCode || !city) {
        ac.done(Y.JSON.stringify({ error: true}));
      } else {
        ac.models.get('eanLandmarksModelFoo').getEanLandmarksData({'city': city, 'countryCode': countryCode}, function(error, response) {
         ac.done({'locs': response}, 'landmarks');
      //ac.done(Y.JSON.stringify(response));
        });
      }
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-params-addon', 'mojito-assets-addon', 'mojito-models-addon', 'eanLandmarksModelFoo']});
