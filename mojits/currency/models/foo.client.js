/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('currencyModelFoo', function(Y, NAME) {

  /**
  * The currencyModelFoo module.
  *
  * @module currency
  */

  var YQL_FMT = Y.yootravel.yql.fmt;
  /**
  * Constructor for the currencyModelFoo class.
  *
  * @class currencyModelFoo
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
    getCurrencyData: function(query, callback) {
      var country = query.country.trim().toLowerCase(), 
      sql = Y.Lang.sub(YQL_FMT.getCurrency, {'to': country, 'from': 'United Kingdom'});
      Y.log('getCurrencyData yql query: ' +sql, 'WARN', NAME);
      Y.YQL(sql, function(response) {
        Y.log('getCurrencyData yql response: ' + Y.JSON.stringify( response));
        if (response.query.results) {
          callback(null, response.query.results.rate); 
        } else {
          callback("No images");
        }
      });
    }

  };

}, '0.0.1', {requires: ['yql', 'yootravel-yql-fmt']});
