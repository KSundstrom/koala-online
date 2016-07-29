/**
*   TURN OFF ANIMATIONS ON XS DEVICES
*/
if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
  $.fx.off = true;
};


/**
*   HELPER FUNCTIONS
*/
var getLocalTime = function() {
  var fullDate = new Date();
  var localTime = fullDate.toLocaleTimeString();
  return localTime;
};

var textToHtmlLines = function( aText ) {
  var newline = /\r\n|\n|\r/gi;
  var htmlLines = aText.replace( newline, '<br/>' );
  return htmlLines;
};

var textToArray = function( aText ) {
  var newline = /\r\n|\n|\r/;
  var dirtyArray = aText.split( newline );
  return dirtyArray;
};

function cleanUpArray( aArray ) {
  var anyString = /.+/;
  var cleanArray = $.grep( aArray, function( n ) {
    return anyString.test( n );
  });
  cleanArray.sort();
  return cleanArray;
};

var getRandomIndex = function( aArray ) {
  return Math.floor( Math.random() * aArray.length );
};


/**
*   RETRIEVE DATA WITH AJAX AND POPULATE ARRAYS
*/
var urlA = 'data/lsm-a.txt';
var urlB1 = 'data/lsm-b1.txt';
var urlB2 = 'data/lsm-b2.txt';

var songArrayA = new Array();
var songArrayB1 = new Array();
var songArrayB2 = new Array();

var jqxhrA = $.get( urlA, $.noop, 'text' )
.done(function( data ) {
  songArrayA = cleanUpArray( textToArray( data ));
  // console.log( getLocalTime() + ': Läste in A' );
})
.fail(function() {
  // console.log( getLocalTime() + ': Kunde inte läsa in A' );
  alert( 'Fel: inläsning av A-sångerna misslyckades!' );
});

var jqxhrB1 = $.get( urlB1, $.noop, 'text' )
.done(function( data ) {
  songArrayB1 = cleanUpArray( textToArray( data ));
  // console.log( getLocalTime() + ': Läste in B1' );
})
.fail(function() {
  // console.log( getLocalTime() + ': Kunde inte läsa in B1' );
  alert( 'Fel: inläsning av lättare B-sångerna misslyckades!' );
});

var jqxhrB2 = $.get( urlB2, $.noop, 'text' )
.done(function( data ) {
  songArrayB2 = cleanUpArray( textToArray( data ));
  // console.log( getLocalTime() + ': Läste in B2' );
})
.fail(function() {
  // console.log( getLocalTime() + ': Kunde inte läsa in B2' );
  alert( 'Fel: inläsning av svårare B-sångerna misslyckades!' );
});


/**
*   INITIALIZE BUTTONS
*/
var buttonFunctions = function() {
  var timeIcon = '<span class="glyphicon glyphicon-time" aria-hidden="true"></span> ';

  $( '#songButtonA' ).click(function() {
    var song = songArrayA[ getRandomIndex( songArrayA ) ];
    var time = getLocalTime();
    // console.log( time + ': A: ' + song );
    $( '<div class="panel panel-success songResult">' +
          '<div class="panel-heading">' +
            '<h3 class="panel-title clearfix">' +
              '<span class="glyphicon glyphicon-music" aria-hidden="true"></span> A-sång' +
              '<span class="pull-right">' + timeIcon + time + '</span>' +
            '</h3>' +
          '</div>' +
          '<div class="panel-body">' +
            song +
          '</div>' +
        '</div>' )
      .hide()
      .prependTo( '#songResults' )
      .slideDown( 200 );
  });

  $( '#songButtonB1' ).click(function() {
    var song = songArrayB1[ getRandomIndex( songArrayB1 ) ];
    var time = getLocalTime();
    // console.log( time + ': B1: ' + song );
    $( '<div class="panel panel-warning songResult">' +
          '<div class="panel-heading">' +
            '<h3 class="panel-title clearfix">' +
              '<span class="glyphicon glyphicon-music" aria-hidden="true"></span> Lättare B-sång' +
              '<span class="pull-right">' + timeIcon + time + '</span>' +
            '</h3>' +
          '</div>' +
          '<div class="panel-body">' +
            song +
          '</div>' +
        '</div>' )
      .hide()
      .prependTo( '#songResults' )
      .slideDown( 200 );
  });

  $( '#songButtonB2' ).click(function() {
    var song = songArrayB2[ getRandomIndex( songArrayB2 ) ];
    var time = getLocalTime();
    // console.log( time + ': B2: ' + song );
    $( '<div class="panel panel-danger songResult">' +
          '<div class="panel-heading">' +
            '<h3 class="panel-title clearfix">' +
              '<span class="glyphicon glyphicon-music" aria-hidden="true"></span> Svårare B-sång' +
              '<span class="pull-right">' + timeIcon + time + '</span>' +
            '</h3>' +
          '</div>' +
          '<div class="panel-body">' +
            song +
          '</div>' +
        '</div>' )
      .hide()
      .prependTo( '#songResults' )
      .slideDown( 200 );
  });

  $( '#helpButton' ).popover( {
    placement: 'auto',
    html: true,
    container: 'body',
    content: '<p>Använd knapparna ovan för att lotta fram sånger ur de olika LSM-kategorierna. Den senast framlottade sången dyker upp högst upp. </p><p>Uppe till höger framgår när respektive sång lottades fram.</p><p>Resultaten finns kvar på skärmen tills du klickar på <i>Töm</i>.' +
      // ' Allt som gjorts under en session skrivs även ut med klockslag i webbläsarens konsol. Informationen finns kvar där tills sidan stängs.</p>' +
      '</p>'
  });
    
  $( '#songModal' ).on( 'show.bs.modal', function( event ) {
    var link = $( event.relatedTarget );
    var cat = link.data( 'category' );
    var songsA = new Array();
    var songsB = new Array();
    $.each( songArrayA, function( index, value ) {
        songsA.push( '<li>' + value + '</li>');
    });
    $.each( songArrayB1, function( index, value ) {
        songsB.push( '<li>' + value + '</li>');
    });
    $.each( songArrayB2, function( index, value ) {
        songsB.push( '<li>' + value + '</li>');
    });
    songsA.sort();
    songsB.sort();
    var modal = $( this );
    modal.find( '.modal-title' ).text( 'Sångerna i kategori ' + cat );
    if ( cat == 'A' ) {
      modal.find( '#modalList' ).html( songsA.join( '' ) );
    } else if ( cat == 'B' ) {
      modal.find( '#modalList' ).html( songsB.join( '' ) );
    };
  })

  $( '#resetButton' ).click( function() {
    var time = getLocalTime();
    // console.log( time + ': Raderade resultaten' );
    $( '#songResults' ).animate( {
      opacity: 'toggle',
      height: 'toggle'
    }, 200, 'swing', function() {
      $( this )
        .empty()
        .show();
    });
  });
};

$( document ).ready( buttonFunctions );
