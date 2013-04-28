/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('currencyBinderIndex', function(Y, NAME) {

  /**
  * The currencyBinderIndex module.
  *
  * @module currencyBinderIndex
  */

  /**
  * Constructor for the currencyBinderIndex class.
  *
  * @class currencyBinderIndex
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
      var currency = node.one('.currency');
      this.mojitProxy.listen('searchCity:cityChosen', function(evt) {
        me.mojitProxy.invoke('getCurrency', {
          'params': { 
            'body' : { 
              'place': evt}
          }
        },
        function (err, resp) {
          currency.set('innerHTML', resp); 
        }
        );            
      });

    }

  };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
