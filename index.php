<?php
  $haystack = isset( $_SERVER['HTTP_ACCEPT'] ) ? strtolower( $_SERVER['HTTP_ACCEPT'] ) : null;
  $needle = 'application/xhtml+xml';
  $position = strpos( $haystack, $needle );
  if( $position !== false ) {
    header( 'Content-Type: application/xhtml+xml; charset=utf-8' );
    echo '<?xml version="1.0" encoding="utf-8"?>' . chr( 0x0a );
  } else {
    header( 'Content-Type: text/html; charset=utf-8' );
  }
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="sv-FI" xml:lang="sv-FI" dir="ltr">
  <head prefix="og: http://ogp.me/ns#">
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>

    <!--
      KoalaOnline
      Copyright 2016–2021 Kasper Sundström.
      All rights reserved.
      Alla rättigheter förbehållna.
    -->

    <title>KoalaOnline</title>

    <meta name="robots" content="index, follow"/>
    <meta name="description" content="Ett verktyg för Akademens tentamina för Lilla sångarmärket. It’s kind of a lottery!"/>
    <meta name="keywords" content="Koala, KoalaOnline, KoalaX, Kind-of-a-Lottery App, Akademen, Akademiska Sångföreningen, LSM, Lilla sångarmärket, tentamen"/>
    <meta name="creator" content="Kasper Sundström"/>
    <meta name="publisher" content="Kasper Sundström"/>
    <meta name="application-name" content="KoalaOnline"/>
    <meta name="apple-mobile-web-app-title" content="KoalaOnline"/>
    <meta name="theme-color" content="#00aeed"/>

    <link rel="author" type="text/plain" hreflang="en-GB" href="humans.txt"/>
    <link rel="license" type="text/plain" hreflang="en-GB" href="COPYRIGHT.txt"/>
    <link rel="help" type="text/markdown" hreflang="sv-FI" href="README.md"/>
    <link rel="manifest" type="application/manifest+json" href="manifest.webmanifest"/>
    <link rel="canonical" href="https://koala.ksundstrom.fi/"/>

    <!-- Icons -->
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="icon/apple-touch-icon.png"/>
    <link rel="mask-icon" type="image/svg+xml" href="icon/safari-pinned-tab.svg" color="#00aeed"/>
    <link rel="icon" type="image/png" href="icon/favicon-32x32.png" sizes="32x32"/>
    <link rel="icon" type="image/png" href="icon/favicon-16x16.png" sizes="16x16"/>

    <!-- Open Graph -->
    <meta property="og:title" content="KoalaOnline"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="https://koala.ksundstrom.fi/img/logo-300-cyan.png"/>
    <meta property="og:image:type" content="image/png"/>
    <meta property="og:image:width" content="300"/>
    <meta property="og:image:height" content="300"/>
    <meta property="og:url" content="https://koala.ksundstrom.fi/"/>
    <meta property="og:description" content="Ett verktyg för Akademens tentamina för Lilla sångarmärket. It’s kind of a lottery!"/>

    <!-- Bootstrap 3.4.1 CSS -->
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"/>

    <!-- Bootstrap 3.4.1 Theme CSS -->
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous"/>

    <!-- Custom CSS and font imports -->
    <link rel="stylesheet" type="text/css" href="css/main.css"/>

    <!-- jQuery Core 3.6.0 -->
    <script defer="defer" type="application/javascript" charset="utf-8" src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <!-- Bootstrap 3.4.1 JavaScript -->
    <script defer="defer" type="application/javascript" charset="utf-8" src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>

    <!-- Custom AJAX and UI JavaScript -->
    <script defer="defer" type="application/javascript" charset="utf-8" src="js/main.js"></script>

    <!-- Google Analytics -->
    <script type="application/javascript">
      //<![CDATA[
        window.ga = window.ga || function(){ ( ga.q = ga.q || [] ).push( arguments ) };
        ga.l =+ new Date;
        ga( 'create', 'UA-48814688-2', 'auto' );
        ga( 'send', 'pageview' );
      //]]>
    </script>
    <script async="async" type="application/javascript" charset="utf-8" src="https://www.google-analytics.com/analytics.js"></script>
  </head>

  <body vocab="https://schema.org" typeof="WebApplication">

    <!-- OBSOLETE BROWSER WARNING -->
    <!--[if lt IE 10]>
      <div class="alert alert-danger text-center" role="alert">
        <p>
          <span class="glyphicon glyphicon-alert" aria-hidden="true"></span>
          Du använder en föråldrad webbläsare som inte stöds (Internet Explorer 9 eller äldre). Vänligen <a href="https://browsehappy.com/" class="alert-link">ladda ner en modern webbläsare</a>.
        </p>
      </div>
    <![endif]-->

    <!-- HEADER -->
    <header class="jumbotron">
      <div class="container">
        <div id="logowrapper" class="pull-left">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384 384">
            <title>Logo</title>
            <g id="cards">
              <path id="bottomcard" d="M124.4 346c-5.3.6-11-5.2-11.6-11.8l-23.4-269-82.6 30c-5 2-8.3 8-6 14l96 265.8c2.2 6.3 9.2 10.4 14.2 8.5L241 336l-116.6 10z"/>
              <path id="midcard" d="M143.8 306.7c-5.3-1-9.3-8-8.2-14.6l46.2-263.5-79 7c-5.2.5-10 5.4-9.4 12L118 329c.5 6.5 6.2 12.3 11.5 11.8l138-12-123.7-22z"/>
              <path id="topcard" d="M377 31L203.2 0C198-.7 192 3 191 9.4l-49 278.4c-1 6.6 3 13.6 8.3 14.6L324 333c5.4 1 10-4.5 11-11l48.7-278.5C385 37 382.2 32 377 31zm-58 164.4c-3.6 16.3-12.3 31-21.5 44.8l-.7-.7C323 196.5 320 151 280.3 118L260 233.5c-4.4 25.7-55 38.4-64 9.6-9.4-30 46-46.5 61.6-23L285 63.6l1.8.4 1.2.3v.2c0 46 42 83.5 31 131-1.6 7.3 1.8-7.3 0 0z"/>
            </g>
          </svg>
        </div>
        <h1>
          <span id="brandwrapper" title="Kind-of-a-Lottery App" lang="en-GB" xml:lang="en-GB">
             <span property="name">KoalaOnline</span>
             <meta property="alternateName" content="Kind-of-a-Lottery App"/>
          </span>
          <sub class="small">
            <span property="softwareVersion">LSM2015</span>
          </sub>
        </h1>
      </div>
    </header>

    <!-- MAIN -->
    <main class="mainandfooter">
      <div class="container">

        <!-- UTILITY BUTTONS -->
        <section class="hidden-print">
          <h2 class="sr-only">
            Hjälpknappar
          </h2>
          <div class="row">

            <!-- Info popover and song modals button -->
            <div class="col-xs-6 text-left">
              <div class="btn-group">
                <a role="button" tabindex="0" class="btn btn-info btn-lg" id="helpButton" title="It’s kind of a lottery!" data-toggle="popover" data-trigger="focus" data-container="body" data-placement="auto" data-content="Använd knapparna nedan för att lotta fram sånger ur de olika kategorierna. Den senast framlottade sången dyker upp högst upp. Uppe till höger framgår när respektive sång lottades fram. Resultaten finns kvar på skärmen tills du klickar på Töm. Allt skrivs även ut i webbläsarens konsol.">
                  <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                  Info
                </a>
                <a role="button" class="btn btn-info btn-lg dropdown-toggle" title="Visa sånger" data-toggle="dropdown" data-container="body" aria-haspopup="true" aria-expanded="false">
                  <span class="caret"></span>
                  <span class="sr-only">Visa meny</span>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#songModal" data-target="#songModal" data-toggle="modal" data-category="A">Visa alla A-sånger</a></li>
                  <li><a href="#songModal" data-target="#songModal" data-toggle="modal" data-category="B">Visa alla B-sånger</a></li>
                </ul>
              </div>
            </div>

            <!-- The modal -->
            <div role="dialog" tabindex="-1" class="modal fade" id="songModal" aria-labelledby="songModalLabel">
              <div role="document" class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Stäng">
                      <span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
                    </button>
                    <h3 class="modal-title" id="songModalLabel">Alla sånger</h3>
                  </div>
                  <div class="modal-body">
                    <ol id="modalList"></ol>
                  </div>
                </div>
              </div>
            </div>

            <!-- Reset button -->
            <div class="col-xs-6 text-right">
              <div class="btn-group">
                <a role="button" class="btn btn-danger btn-lg" id="resetButton" title="Radera resultaten">
                  <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  Töm
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- RAFFLE BUTTONS -->
        <section class="hidden-print">
          <h2 class="sr-only">
            Lottoknappar
          </h2>
          <div class="row">

            <!-- Category A -->
            <div class="col-sm-4">
              <div class="btn-group btn-group-justified" role="group" aria-label="Avdelning A">
                <a role="button" class="btn btn-primary btn-lg disabled" id="songButtonA" title="Lotta sång ur avdelning A">
                  <span class="glyphicon glyphicon-music" aria-hidden="true"></span>
                  <span class="hidden-xs">Lotta A-sång</span>
                  <span class="visible-xs-inline" aria-hidden="true">A-sång</span>
                </a>
              </div>
            </div>

            <!-- Category B -->
            <div class="col-sm-8">
              <div class="btn-group btn-group-justified" role="group" aria-label="Avdelning B">
                <a role="button" class="btn btn-primary btn-lg disabled" id="songButtonB1" title="Lotta lättare sång ur avdelning B">
                  <span class="glyphicon glyphicon-music" aria-hidden="true"></span>
                  <span class="hidden-xs">Lotta lättare B-sång</span>
                  <span class="visible-xs-inline" aria-hidden="true">Lätt B-sång</span>
                </a>
                <a role="button" class="btn btn-primary btn-lg disabled" id="songButtonB2" title="Lotta svårare sång ur avdelning B">
                  <span class="glyphicon glyphicon-music" aria-hidden="true"></span>
                  <span class="hidden-xs">Lotta svårare B-sång</span>
                  <span class="visible-xs-inline" aria-hidden="true">Svår B-sång</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- RAFFLE RESULTS -->
        <section>
          <div class="row">
            <div class="col-lg-12">
              <h2 class="visible-print-block clearfix">
                Lottade sånger
                <span class="pull-right">
                  <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                  <?php echo date('j.n.Y'); ?>
                </span>
              </h2>
              <div id="songResults" role="group" aria-label="Lottade sånger"></div>
            </div>
          </div>
        </section>

      </div>
    </main>

    <!-- FOOTER -->
    <footer class="mainandfooter">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p class="small text-muted">

              <!-- Copyright -->
              © <span property="copyrightYear">2016–<?php echo date('Y', getlastmod()); ?></span>
              <a hreflang="sv-FI" href="https://ksundstrom.fi/" property="copyrightHolder creator" typeof="Person">
                <span property="name">Kasper Sundström</span>.
                <meta property="nationality" content="FI"/>
              </a>

              <!-- Dates -->
              Publicerad
              <span property="datePublished">2016-07-13</span>.
              Uppdaterad
              <span property="dateModified"><?php echo date('Y-m-d', getlastmod()); ?></span>.

              <!-- Organization -->
              Byggd för
              <a hreflang="sv-FI" href="https://www.akademen.com/" property="sourceOrganization" typeof="MusicGroup">
                <span property="name">Akademen</span>.
                <meta property="legalName" content="Akademiska Sångföreningen rf"/>
                <meta property="sameAs" content="https://www.wikidata.org/wiki/Q4411935"/>
              </a>

              <!-- Framework -->
              <span lang="en-GB" xml:lang="en-GB">
                Framework by <a hreflang="en-US" href="https://getbootstrap.com/">Bootstrap</a>.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Other RDFa data -->
    <div hidden="hidden">
      <meta property="description" content="Webbverktyg för Akademens LSM-tentamina"/>
      <meta property="image" content="https://koala.ksundstrom.fi/img/logo-300-cyan.png"/>
      <meta property="url" content="https://koala.ksundstrom.fi/"/>
      <meta property="inLanguage" content="sv-FI"/>
      <meta property="applicationCategory" content="tool"/>
      <meta property="browserRequirements" content="modern browser (IE10+)"/>
      <meta property="operatingSystem" content="any"/>
      <div property="audience" typeof="Audience">
        <meta property="name" content="Akademiska Sångföreningen"/>
        <meta property="sameAs" content="https://www.wikidata.org/wiki/Q4411935"/>
      </div>
    </div>
  </body>
</html>
