/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('bossImage', function(Y, NAME) {

  /**
  * The bossImage module.
  *
  * @module bossImage
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

    getBossImage: function(ac) {
      Y.log('getBossImage action invokation body ' + Y.JSON.stringify(ac.params.body('place')), 'WARN', NAME);
      var country = ac.params.body('place').data.country.content,
      city = ac.params.body('place').data.name;
      if (!country) {
        ac.done(Y.JSON.stringify({ error: true}));
      } else {
        ac.models.get('bossImageModelFoo').getBossImageData({'country': country, 'city': city}, function(error, response) {
          ac.done({'images':response}, 'bossImagesList');
        });
      }
    }

  };

}, '0.0.1', {requires: ['mojito', 'mojito-params-addon', 'mojito-assets-addon', 'mojito-models-addon', 'bossImageModelFoo', 'yootravel-yql-fmt']});
