/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('bossImageModelFoo', function(Y, NAME) {

  /**
  * The bossImageModelFoo module.
  *
  * @module bossImage
  */

  var YQL_FMT = Y.yootravel.yql.fmt;
  /**
  * Constructor for the bossImageModelFoo class.
  *
  * @class bossImageModelFoo
  * @constructor
  */
  Y.namespace('mojito.models')[NAME] = {

    init: function(config) {
      this.config = config;
    },

    /**
    * Method that will be invoked by the mojit controller to obtain data.
    *
    * @param callback {function(err,data)} The callback function to call when the
    *        data has been retrieved.
    */
    getBossImageData: function(query, callback) {
      var country = query.country.trim().toLowerCase(), 
      city = query.city.trim().toLowerCase(),
      sql = Y.Lang.sub(YQL_FMT.getBossImage, {'country': country, 'city': city});
      Y.log('getBossImageData yql query: ' +sql, 'WARN', NAME);
      Y.YQL(sql, function(response) {
        Y.log('getBossImageData yql response: ' + response);
        if (response.query.results.bossresponse.images.count > 0) {
          callback(null, response.query.results.bossresponse.images.results.result); 
        } else {
          callback("No images");
        }
      });
    }

  };

}, '0.0.1', {requires: ['yql', 'yootravel-yql-fmt']});
