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
    var d = new Date();
    return d.toLocaleTimeString();
};

var textToArray = function( aText ) {
    return aText.split(  /\r\n|\n/ );
};

var getRandomIndex = function( aArray ) {
    return Math.floor( Math.random() * aArray.length );
};

/**
*   RETRIEVE DATA WITH AJAX AND POPULATE ARRAYS
*/
var urlA = 'data/lsm-a.txt',
    urlB1 = 'data/lsm-b1.txt',
    urlB2 = 'data/lsm-b2.txt';

var songArrayA = [],
    songArrayB1 = [],
    songArrayB2 = [];

var jqxhrA = $.get( urlA, $.noop, 'text' )
.done(function( data ) {
    songArrayA = textToArray( data );
    // console.log( getLocalTime() + ': Läste in A' );
})
.fail(function() {
    // console.log( getLocalTime() + ': Kunde inte läsa in A' );
    alert( 'Fel: inläsning av A-sångerna misslyckades!' );
});

var jqxhrB1 = $.get( urlB1, $.noop, 'text' )
.done(function( data ) {
    songArrayB1 = textToArray( data );
    // console.log( getLocalTime() + ': Läste in B1' );
})
.fail(function() {
    // console.log( getLocalTime() + ': Kunde inte läsa in B1' );
    alert( 'Fel: inläsning av lättare B-sångerna misslyckades!' );
});

var jqxhrB2 = $.get( urlB2, $.noop, 'text' )
.done(function( data ) {
    songArrayB2 = textToArray( data );
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
        content: '<p>Använd knapparna ovan för att lotta fram sånger ur de olika LSM-kategorierna. Den senast framlottade sången dyker upp högst upp. </p><p>Uppe till höger framgår när respektive sång lottades fram.</p><p>Resultaten finns kvar på skärmen tills du klickar på <i>Töm</i>.' +
            // ' Allt som gjorts under en session skrivs även ut med klockslag i webbläsarens konsol. Informationen finns kvar där tills sidan stängs.</p>' +
            '</p>'
    });

    $( '#resetButton' ).click(function() {
        var time = getLocalTime();
        console.log( time + ': Raderade resultaten' );
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
