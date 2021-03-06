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
        var city = query.city.toLowerCase().trim().replace(' ','_'), 
        countryCode = query.countryCode,
        sql = Y.Lang.sub(YQL_FMT.getEanLandmarks, {'countryCode': countryCode, 'city': city});
        Y.log('getEanLandmarksData io query: ' +sql, 'WARN', NAME);
        Y.io(sql, { 
          on: {
            complete:  function(id, response) {
              Y.log('getEanLandmarksData yql response: ' + response.responseText);
              //callback(null, response.LocationInfoResponse.LocationInfo); 
              var parsedResponse = Y.JSON.parse(response.responseText);
              if (!parsedResponse.LocationInfoResponse.LocationInfos) {
              callback('No answer, trou perdu');
              } else {
              callback(null, parsedResponse.LocationInfoResponse.LocationInfos.LocationInfo.splice(0, 4)); 
              }
            }
          }
        });
      }


    };

}, '0.0.1', {requires: [ 'io-base', 'yootravel-yql-fmt']});
