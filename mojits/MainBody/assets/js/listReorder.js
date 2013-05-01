/*
we load the yui seed file.
then we configure yui to get modules from the gallery and select what we need
*/

YUI().use('dd-constrain', 'dd-proxy', 'dd-drop', function(Y) {
  //Listen for all drop:over events
  Y.DD.DDM.on('drop:over', function(e) {
    //Get a reference to our drag and drop nodes
    var drag = e.drag.get('node'),
    drop = e.drop.get('node');

    //Are we dropping on a li node?
    if (drop.get('tagName').toLowerCase() === 'li') {
      //Are we not going up?
      if (!goingUp) {
        drop = drop.get('nextSibling');
      }
      //Add the node to this list
      e.drop.get('node').get('parentNode').insertBefore(drag, drop);
      //Resize this nodes shim, so we can drop on it later.
      e.drop.sizeShim();
    }
  });
  //Listen for all drag:drag events
  Y.DD.DDM.on('drag:drag', function(e) {
    //Get the last y point
    var y = e.target.lastXY[1];
    //is it greater than the lastY var?
    if (y < lastY) {
      //We are going up
      goingUp = true;
    } else {
      //We are going down.
      goingUp = false;
    }
    //Cache for next check
    lastY = y;
  });
  //Listen for all drag:start events
  Y.DD.DDM.on('drag:start', function(e) {
    //Get our drag object
    var drag = e.target;
    //Set some styles here
    drag.get('node').setStyle('opacity', '.25');
    drag.get('dragNode').set('innerHTML', drag.get('node').one('.mojitTitle').get('outerHTML')).setStyle('height', 'auto');
    drag.get('dragNode').setStyles({
      opacity: '.5',
      borderColor: drag.get('node').getStyle('borderColor'),
      backgroundColor: drag.get('node').getStyle('backgroundColor')
    });
    drag.get('node').one('.content').addClass('hidden');
  });
  //Listen for a drag:end events
  Y.DD.DDM.on('drag:end', function(e) {
    var drag = e.target;
    //Put our styles back
    drag.get('node').setStyles({
      visibility: '',
      opacity: '1'
    });
    drag.get('node').one('.content').removeClass('hidden');
  });
  //Listen for all drag:drophit events
  Y.DD.DDM.on('drag:drophit', function(e) {
    var drop = e.drop.get('node'),
    drag = e.drag.get('node');

    //if we are not on an li, we must have been dropped on a ul
    if (drop.get('tagName').toLowerCase() !== 'li') {
      if (!drop.contains(drag)) {
        drop.appendChild(drag);
      }
    }
  });

  //Static Vars
  var goingUp = false, lastY = 0;

  //Get the list of li's in the lists and make them draggable
  var lis = Y.Node.all('#play ul li');
  lis.each(function(v, k) {
    var dd = new Y.DD.Drag({
      node: v,
      target: {
        padding: '0 0 0 20'
      }
    }).plug(Y.Plugin.DDProxy, {
      moveOnEnd: false
    }).plug(Y.Plugin.DDConstrained, {
      constrain2node: '#play'
    });
  });

  //Create simple targets for the 2 lists.
  var uls = Y.Node.all('#play ul');
  uls.each(function(v, k) {
    var tar = new Y.DD.Drop({
      node: v
    });
  });

});


