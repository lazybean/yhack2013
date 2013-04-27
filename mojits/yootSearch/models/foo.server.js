/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('yootSearchModelFoo', function(Y, NAME) {

  var YQL_FMT = {
    getCity: 'select name, woeid,admin3,admin2,admin1,country FROM geo.places WHERE text="{query}"'
  };

  /**
  * The yootSearchModelFoo module.
  *
  * @module yootSearch
  */

  /**
  * Constructor for the yootSearchModelFoo class.
  *
  * @class yootSearchModelFoo
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
    getData: function(callback) {
      callback(null, { some: 'data' });
    },

    getCity: function(query, callback) {
      var sql = Y.Lang.sub(YQL_FMT.getCity, { query: query });
      Y.log('getCity yql query: ' + sql, 'WARN', NAME);
      Y.YQL(sql, function(response) {
        if (response.query.count <= 0) { 
          callback("No Result");
        } else {
          Y.log('foo.server.js: getCity : ' + Y.JSON.stringify(response), 'WARN', NAME);
          callback(null, response.query.results.place);
        }
      });
    }

  };

}, '0.0.1', {requires: ['yql']});
