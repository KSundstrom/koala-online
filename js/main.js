/**
 * KoalaOnline
 * Copyright 2016 Kasper Sundström
 */

/**
 * STRICT MODE
 */
'use strict';

/**
 * GLOBAL VARIABLES AND HELPER FUNCTIONS
 */
var urlA = 'data/lsm-a.txt';
var urlB1 = 'data/lsm-b1.txt';
var urlB2 = 'data/lsm-b2.txt';

var songArrayA = [];
var songArrayB1 = [];
var songArrayB2 = [];

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
  var d = new Date();
  var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  var timeString = d.toLocaleTimeString( 'sv-FI', options );
  return timeString;
}

/**
 * INITIALIZE UI
 */
function initializeUI() {

  var musicIcon = '<span class="glyphicon glyphicon-music" aria-hidden="true"></span> ';
  var timeIcon = '<span class="glyphicon glyphicon-time" aria-hidden="true"></span> ';

  $( '#songButtonA' ).click(function() {
    var song = songArrayA[ getRandomIndex( songArrayA ) ];
    var time = getLocalTime();
    // console.log( time + ' A ' + song );
    $( '<div class="panel panel-success songResult">' +
          '<div class="panel-heading">' +
            '<h3 class="panel-title clearfix">' +
              musicIcon + 'A-sång' + '<span class="pull-right">' + timeIcon + time + '</span>' +
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
              musicIcon + 'Lättare B-sång' + '<span class="pull-right">' + timeIcon + time + '</span>' +
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
              musicIcon + 'Svårare B-sång' + '<span class="pull-right">' + timeIcon + time + '</span>' +
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
    var songsA = [];
    var songsB = [];
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
    }
  })

  $( '#resetButton' ).click( function() {
    // var time = getLocalTime();
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
 * RETRIEVE DATA AND POPULATE ARRAYS
 */
function runAJAX() {

  var jqxhrA = $.get( urlA, $.noop, 'text' );
  var jqxhrB1 = $.get( urlB1, $.noop, 'text' );
  var jqxhrB2 = $.get( urlB2, $.noop, 'text' );

  jqxhrA.done( function( data ) {
    songArrayA = cleanUpArray( textToArray( data ));
    $( '#songButtonA' ).removeClass( 'disabled' );
    // console.log( getLocalTime() + ' Läste in A' );
  })
  .fail( function() {
    // console.log( getLocalTime() + ' Kunde inte läsa in A' );
    alert( 'Fel: inläsning av A-sångerna misslyckades!' );
  });

  jqxhrB1.done( function( data ) {
    songArrayB1 = cleanUpArray( textToArray( data ));
    $( '#songButtonB1' ).removeClass( 'disabled' );
    // console.log( getLocalTime() + ' Läste in B1' );
  })
  .fail( function() {
    // console.log( getLocalTime() + ' Kunde inte läsa in B1' );
    alert( 'Fel: inläsning av lättare B-sångerna misslyckades!' );
  });

  jqxhrB2.done( function( data ) {
    songArrayB2 = cleanUpArray( textToArray( data ));
    $( '#songButtonB2' ).removeClass( 'disabled' );
    // console.log( getLocalTime() + ' Läste in B2' );
  })
  .fail( function() {
    // console.log( getLocalTime() + ' Kunde inte läsa in B2' );
    alert( 'Fel: inläsning av svårare B-sångerna misslyckades!' );
  });
}

/**
 * INITIALIZE ON DOCUMENT READY
 */
$( function() {
  initializeUI();
  runAJAX();
  /* Turn off animations on XS devices */
  if ( window.matchMedia( '(max-width: 767px)' ).matches ) $.fx.off = true;
});
