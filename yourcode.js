function newEl(tag){return document.createElement(tag)}
function byId(id){return document.getElementById(id)}
function qsa(sel,par=document){return par.querySelectorAll(sel)}

//window.addEventListener('load', onLoaded, false);

function onLoaded2(evt)
{
    let potentialTargets = qsa('.column');
    let tgt1 = potentialTargets[0];
    let tgt2 = potentialTargets[(potentialTargets.length-1)/2];
    let tgt3 = potentialTargets[potentialTargets.length-1];

    let targets = [tgt1, tgt2, tgt3];

    // create and initialize an array holding each item's visible state
    // this will be used to compare the current state of visibility with the state
    // last time it was inspected. If they're the same, nothing's happened.
    // If the last state and current state are different, you know which element just
    // entered or exited the viewport.
    let visibleStates = [];
    targets.forEach( function(tgt, idx, arr){ visibleStates[idx] = isScrolledIntoView(tgt); } );

    console.log(visibleStates);

    window.addEventListener('scroll', onScroll, false);

    function onScroll(evt)
    {
        targets.forEach( 
            function(tgt,idx)
            {
                let isVisible = isScrolledIntoView(tgt);
                if (visibleStates[idx] != isVisible)
                    console.log(`element index ${idx} is now ${isVisible ? 'visible' : 'hidden'}`);
                visibleStates[idx] = isVisible;
            }
        );
    }
}


function isScrolledIntoView(elem)
{
    var docViewTop = window.scrollY;
    var docViewBottom = docViewTop + window.innerHeight;

    var elemTop = elem.offsetTop;
    var elemBottom = elemTop + elem.offsetHeight;

    

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}




//-------Second Solution I was working-----//
/*
var columns = document.getElementsByClassName('column');
  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];
    if (!column.id) {
      column.id = 'id-' + i;
    }
}
window.addEventListener('scroll', function() {
    //set variables to take the column class from html file.
    var element = document.querySelector('.coloumn')
    var position = element.getBoundingClientRect();

    //check whether the column is visible, 50% visible and compelety visible.
    if(position.top < window.innerHeight && position.bottom >= 0) {
        console.log("Column with " + column + "started to become visible on the page" )
    }

    if(position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log("Column with " + column + "is now fully visible" )
    }


});
*/