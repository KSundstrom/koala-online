/**
 * KoalaOnline
 * Copyright 2016 Kasper Sundström
 */

/**
 * ENABLE STRICT MODE
 */
'use strict';

/**
 * RUN FUNCTIONS ON DOCUMENT READY
 */
$( function() {
  initUI();
  loadXML();
  /* Turn off animations on XS devices */
  if( window.matchMedia( '(max-width: 767px)' ).matches ) $.fx.off = true;
});

/**
 * GLOBAL VARIABLES AND HELPER FUNCTIONS
 */
var dataurl = 'xml/lsm.xml';

var songArrayA = [];
var songArrayB1 = [];
var songArrayB2 = [];

function getRandomIndex( aArray ) {
  return Math.floor( Math.random() * aArray.length );
}

function getLocalTime() {
  var d = new Date();
  var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  var timeString = d.toLocaleTimeString( 'sv-FI', options );
  return timeString;
}

function cleanUpArray( aArray ) {
  var anyString = /.+/;
  var cleanArray = $.grep( aArray, function( n ) {
    return anyString.test( n );
  });
  cleanArray.sort();
  return cleanArray;
}

/**
 * AJAX DATA LOADING AND ARRAY POPULATION
 */
function loadXML() {

  var jqxhr = $.get( dataurl, null, null, 'xml' );

  jqxhr.done( function( data ) {
    var $xml = $( data );

    $xml.find( 'song' ).prependTo( '#songResults' );

    $( '#songButtonA' ).removeClass( 'disabled' );
    $( '#songButtonB1' ).removeClass( 'disabled' );
    $( '#songButtonB2' ).removeClass( 'disabled' );

    console.log( getLocalTime() + ' Läste in XML-data' );
  });

  jqxhr.fail( function() {
    console.log( getLocalTime() + ' Kunde inte läsa in XML-data' );
    alert( 'Fel: inläsning av sångerna misslyckades!' );
  });
}

/**
 * UI INITIALIZATION
 */
function initUI() {

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
