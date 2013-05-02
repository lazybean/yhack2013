/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('yootSearch', function(Y, NAME) {

  /**
  * The yootSearch module.
  *
  * @module yootSearch
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
      ac.models.get('yootSearchModelFoo').getData(function(err, data) {
        if (err) {
          ac.error(err);
          return;
        }
        ac.assets.addCss('./index.css');
        ac.done({
          status: 'Mojito is working.',
          data: data
        });
      });
    },

    searchCity: function(ac) {
      Y.log('searchCity: ' + ac.params.body('cityQuery'), 'WARN', NAME);
      var cityQuery = ac.params.body('cityQuery');
      if (!cityQuery) {
        ac.done(Y.JSON.stringify({ error: true}));
      } else {
        ac.models.get('yootSearchModelFoo').getCity(cityQuery, function(error, response) {
          ac.done(response, 'json');//Y.JSON.stringify(response));
        });
      }
    }

  };

}, '0.0.1', {requires: ['mojito', 'json', 'mojito-assets-addon', 'mojito-params-addon', 'mojito-models-addon', 'yootSearchModelFoo']});
