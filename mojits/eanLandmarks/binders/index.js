/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('eanLandmarksBinderIndex', function(Y, NAME) {

  /**
  * The eanLandmarksBinderIndex module.
  *
  * @module eanLandmarksBinderIndex
  */

  /**
  * Constructor for the eanLandmarksBinderIndex class.
  *
  * @class eanLandmarksBinderIndex
  * @constructor
  */
  Y.namespace('mojito.binders')[NAME] = {

    /**
    * Binder initialization method, invoked after all binders on the page
    * have been constructed.
    */
    init: function(mojitProxy) {
      this.mojitProxy = mojitProxy;
    },

    /**
    * The binder method, invoked to allow the mojit to attach DOM event
    * handlers.
    *
    * @param node {Node} The DOM node to which this mojit is attached.
    */
    bind: function(node) {
      var me = this;
      this.node = node;
      var eanLandmarks = node.one('.eanLandmarks');
      this.mojitProxy.listen('searchCity:cityChosen', function(evt) {
        me.mojitProxy.invoke('getEanLandmarks', {
          'params': { 
            'body' : { 
              'place': evt}
          }
        },
        function (err, resp) {
          eanLandmarks.set('innerHTML', resp); 
        }
        );            
      });

    }

  };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
