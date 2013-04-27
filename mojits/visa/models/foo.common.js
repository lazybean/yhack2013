/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('visaModelFoo', function(Y, NAME) {

  /**
  * The visaModelFoo module.
  *
  * @module visa
  */

  var YQL_FMT = Y.yootravel.yql.fmt;
  /**
  * Constructor for the visaModelFoo class.
  *
  * @class visaModelFoo
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
    getVisaData: function(query, callback) {
      var country = query.trim().replace(' ','_'), 
      sql = Y.Lang.sub(YQL_FMT.getVisa, {country: country});
      Y.log('getVisaData yql query: ' +sql, 'WARN', NAME);
      Y.YQL(sql, function(response) {
        Y.log('getVisaData yql response: ' + response);
        callback(null, response.results.join('')); 
      }, {'format': 'JSON-P-X'});
    }

  };

}, '0.0.1', {requires: ['yql', 'yootravel-yql-fmt']});
