/**
*   STRICT MODE
*/
'use strict';

/**
*   INITIALIZE ON DOCUMENT READY
*/
$( function() {
  initializeUI(); /* Is below */
  runAJAX(); /* Is below */
  /* Turn off animations on XS devices */
  if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
    $.fx.off = true;
  };
});

/**
*   GLOBAL VARIABLES AND HELPER FUNCTIONS
*/
var urlA = '/data/lsm-a.txt',
    urlB1 = '/data/lsm-b1.txt',
    urlB2 = '/data/lsm-b2.txt';
var songArrayA = [],
    songArrayB1 = [],
    songArrayB2 = [];
var timeIcon = '<span class="glyphicon glyphicon-time" aria-hidden="true"></span> ';

function textToArray( aText ) {
  var anyNewline = /\r\n|\n|\r/;
  var dirtyArray = aText.split( anyNewline );
  return dirtyArray;
}

function cleanUpArray( aArray ) {
  var anyString = /.+/;
  var cleanArray = $.grep( aArray, function( n ) {
    return anyString.test( n );
  });
  cleanArray.sort();
  return cleanArray;
}

function getRandomIndex( aArray ) {
  return Math.floor( Math.random() * aArray.length );
}

function getLocalTime() {
  var fullDate = new Date();
  var localTime = fullDate.toLocaleTimeString();
  return localTime;
}

/**
*   INITIALIZE UI
*/
function initializeUI() {

  $( '#songButtonA' ).click(function() {
    var song = songArrayA[ getRandomIndex( songArrayA ) ];
    var time = getLocalTime();
    // console.log( time + ' A ' + song );
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
    // console.log( time + ' B1 ' + song );
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
    // console.log( time + ' B2 ' + song );
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

  $( '#helpButton' ).popover();

  $( '#songModal' ).on( 'show.bs.modal', function( event ) {
    var link = $( event.relatedTarget );
    var cat = link.data( 'category' );
    var songsA = [],
        songsB = [];
    var modal = $( this );
    $.each( songArrayA, function( index, value ) {
      songsA.push( '<li>' + value + '</li>' );
    });
    $.each( songArrayB1, function( index, value ) {
      songsB.push( '<li>' + value + '</li>' );
    });
    $.each( songArrayB2, function( index, value ) {
      songsB.push( '<li>' + value + '</li>' );
    });
    songsA.sort();
    songsB.sort();
    modal.find( '.modal-title' ).text( 'Alla sånger i avdelning ' + cat );
    if ( cat === 'A' ) {
      modal.find( '#modalList' ).html( songsA.join( '' ) );
    } else if ( cat === 'B' ) {
      modal.find( '#modalList' ).html( songsB.join( '' ) );
    };
  })

  $( '#resetButton' ).click( function() {
    var time = getLocalTime();
    // console.log( time + ' Raderade resultaten' );
    $( '#songResults' ).animate( {
      opacity: 'toggle',
      height: 'toggle'
    }, 200, 'swing', function() {
      $( this )
        .empty()
        .show();
    });
  });
}

/**
*   RETRIEVE DATA AND POPULATE ARRAYS
*/
function runAJAX() {

  var jqxhrA = $.get( urlA, $.noop, 'text' )
    .done( function( data ) {
      songArrayA = cleanUpArray( textToArray( data ));
      $( '#songButtonA' ).removeClass( 'disabled' );
      // console.log( getLocalTime() + ' Läste in A' );
    })
    .fail( function() {
      // console.log( getLocalTime() + ' Kunde inte läsa in A' );
      alert( 'Fel: inläsning av A-sångerna misslyckades!' );
    });

  var jqxhrB1 = $.get( urlB1, $.noop, 'text' )
    .done( function( data ) {
      songArrayB1 = cleanUpArray( textToArray( data ));
      $( '#songButtonB1' ).removeClass( 'disabled' );
      // console.log( getLocalTime() + ' Läste in B1' );
    })
    .fail( function() {
      // console.log( getLocalTime() + ' Kunde inte läsa in B1' );
      alert( 'Fel: inläsning av lättare B-sångerna misslyckades!' );
    });

  var jqxhrB2 = $.get( urlB2, $.noop, 'text' )
    .done( function( data ) {
      songArrayB2 = cleanUpArray( textToArray( data ));
      $( '#songButtonB2' ).removeClass( 'disabled' );
      // console.log( getLocalTime() + ' Läste in B2' );
    })
    .fail( function() {
      // console.log( getLocalTime() + ' Kunde inte läsa in B2' );
      alert( 'Fel: inläsning av svårare B-sångerna misslyckades!' );
    });
}
