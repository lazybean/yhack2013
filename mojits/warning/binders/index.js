/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('warningBinderIndex', function(Y, NAME) {

  /**
  * The warningBinderIndex module.
  *
  * @module warningBinderIndex
  */

  /**
  * Constructor for the warningBinderIndex class.
  *
  * @class warningBinderIndex
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
      var warning = node.one('.warning');
      this.mojitProxy.listen('searchCity:cityChosen', function(evt) {
        me.mojitProxy.invoke('getWarning', {
          'params': { 
            'body' : { 
              'place': evt}
          }
        },
        function (err, resp) {
          warning.set('innerHTML', resp); 
        }
        );            
      });

    }

  };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
