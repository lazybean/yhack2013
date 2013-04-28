/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('currency', function(Y, NAME) {

  /**
  * The currency module.
  *
  * @module currency
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

    getCurrency: function(ac) {
      Y.log('getCurrency action invokation body ' + Y.JSON.stringify(ac.params.body('place')), 'WARN', NAME);
      var country = ac.params.body('place').data.country.content,
      city = ac.params.body('place').data.name;
      if (!country) {
        ac.done(Y.JSON.stringify({ error: true}));
      } else {
        ac.models.get('currencyModelFoo').getCurrencyData({'country': country, 'city': city}, function(error, response) {
          ac.done(response, 'currency');
        });
      }
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-params-addon', 'mojito-assets-addon', 'mojito-models-addon', 'currencyModelFoo', 'yootravel-yql-fmt']});
