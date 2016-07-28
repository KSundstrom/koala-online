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
    return fullDate.toLocaleTimeString();
};

var textToArr = function( aText ) {
    var dirtyArr = new Array();
    var anyNewline = new RegExp( '\r\n|\n|\r' );
    dirtyArr = aText.split( anyNewline );
    return dirtyArr;
};

function cleanupArr( dirtyArr ) {
    var cleanArr = new Array();
    var anyStr = new RegExp( '.+' );
    cleanArr = $.grep( dirtyArr, function( n ) {
        return anyStr.test( n );
    });
    return cleanArr;
};

var getRandomIndex = function( aArr ) {
    return Math.floor( Math.random() * aArr.length );
};

/**
*   RETRIEVE DATA WITH AJAX AND POPULATE ARRAYS
*/
var urlA = 'data/lsm-a.txt';
var urlB1 = 'data/lsm-b1.txt';
var urlB2 = 'data/lsm-b2.txt';

var songArrA = new Array();
var songArrB1 = new Array();
var songArrB2 = new Array();

var jqxhrA = $.get( urlA, $.noop, 'text' )
.done(function( data ) {
    songArrA = cleanupArr( textToArr( data ));
    // console.log( getLocalTime() + ': Läste in A' );
})
.fail(function() {
    // console.log( getLocalTime() + ': Kunde inte läsa in A' );
    alert( 'Fel: inläsning av A-sångerna misslyckades!' );
});

var jqxhrB1 = $.get( urlB1, $.noop, 'text' )
.done(function( data ) {
    songArrB1 = cleanupArr( textToArr( data ));
    // console.log( getLocalTime() + ': Läste in B1' );
})
.fail(function() {
    // console.log( getLocalTime() + ': Kunde inte läsa in B1' );
    alert( 'Fel: inläsning av lättare B-sångerna misslyckades!' );
});

var jqxhrB2 = $.get( urlB2, $.noop, 'text' )
.done(function( data ) {
    songArrB2 = cleanupArr( textToArr( data ));
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
        var song = songArrA[ getRandomIndex( songArrA ) ];
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
        var song = songArrB1[ getRandomIndex( songArrB1 ) ];
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
        var song = songArrB2[ getRandomIndex( songArrB2 ) ];
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
        content: '<p>Använd knapparna ovan för att lotta fram sånger ur de olika LSM-kategorierna. Den senast framlottade sången dyker upp högst upp. </p><p>Uppe till höger framgår när respektive sång lottades fram.</p><p>Resultaten finns kvar på skärmen tills du klickar på <i>Töm</i>.' +
            // ' Allt som gjorts under en session skrivs även ut med klockslag i webbläsarens konsol. Informationen finns kvar där tills sidan stängs.</p>' +
            '</p>'
    });

    $( '#resetButton' ).click(function() {
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
