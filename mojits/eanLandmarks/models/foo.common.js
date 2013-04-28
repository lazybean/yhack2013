/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('eanLandmarksModelFoo', function(Y, NAME) {

  /**
  * The eanLandmarksModelFoo module.
  *
  * @module eanLandmarks
  */

  var YQL_FMT = Y.yootravel.yql.fmt;
  /* var YQL_FMT = {
    getEanLandmarksUK : "select * from html where url=\"https://www.gov.uk/foreign-travel-advice/{country}\" and xpath='//div[@class=\"inner\"]/p'",
    getEanLandmarksUS : ""
    };
    */
    /**
    * Constructor for the eanLandmarksModelFoo class.
    *
    * @class eanLandmarksModelFoo
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
      getEanLandmarksData: function(query, callback) {
        var country = query.toLowerCase().trim().replace(' ','_'), 
        sql = Y.Lang.sub(YQL_FMT.getEanLandmarks, {country: country});
        Y.log('getEanLandmarksData io query: ' +sql, 'WARN', NAME);
        Y.io(sql, { 
          on: {
            complete:  function(id, response) {
              Y.log('getEanLandmarksData yql response: ' + response.responseText);
              callback(null, response); 
            }
          }
        });
      },

      getVisaData: function (query, callback) {

      }

    };

}, '0.0.1', {requires: ['yql', 'yootravel-yql-fmt']});
