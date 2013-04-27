/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('warningModelFoo', function(Y, NAME) {

/**
 * The warningModelFoo module.
 *
 * @module warning
 */

  var YQL_FMT = {
    getWarningUK : "select * from html where url=\"https://www.gov.uk/foreign-travel-advice/{country}\" and xpath='//div[@class=\"inner\"]/p'",
    getWarningUS : ""
  };

    /**
     * Constructor for the warningModelFoo class.
     *
     * @class warningModelFoo
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
        getWarningData: function(query, callback) {
        var country = query.toLowerCase().trim().replace(' ','_'), 
          sql = Y.Lang.sub(YQL_FMT.getWarningUK, {country: country});
          Y.log('getWarningData yql query: ' +sql, 'WARN', NAME);
          Y.YQL(sql, function(response) {
           Y.log('getWarningData yql response: ' + response);
           callback(null, response.results.join('')); 
          }, {'format': 'JSON-P-X'});
        }

    };

}, '0.0.1', {requires: ['yql']});
