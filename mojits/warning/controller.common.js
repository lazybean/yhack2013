/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('warning', function(Y, NAME) {

  /**
  * The warning module.
  *
  * @module warning
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

    getWarning: function(ac) {
      Y.log('getWarning action invokation body ' + Y.JSON.stringify(ac.params.body('place')), 'WARN', NAME);
      var country = ac.params.body('place').data.country.content;
      if (!country) {
        ac.done(Y.JSON.stringify({ error: true}));
      } else {
        ac.models.get('warningModelFoo').getWarningData(country, function(error, response) {
          ac.done(response);
        });
      }
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-params-addon', 'mojito-assets-addon', 'mojito-models-addon', 'warningModelFoo']});
