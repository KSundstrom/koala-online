# [KoalaOnline](https://koala.ksundstrom.fi/)

> It’s kind of a lottery!

Koala *(Kind-of-a-Lottery App)* är ett verktyg för Akademens tentamina för Lilla sångarmärket. Den nuvarande webbapplikationen är en XML-baserad version av en tidigare TXT-baserad version, vilken i sin tur inspirerades av ett tidigare Java-program, alla skrivna av Kasper Sundström.


## Uppdatering av sångerna

* Sångerna läses in från XML-filen `lsm.xml` i mappen `xml`.
* Filens struktur definieras av schemafilen `lsm.xsd` i samma mapp. *Ändra inte i denna fil om du inte vet vad du gör (kräver ändringar i andra filer).*
* Ta backup på `lsm.xml` före uppdatering av den.
* Smärre korrigeringar av informationen kan göras direkt i filen.
* Större ändringar görs lämpligen med ett program som kan hantera XML i tabellform (exempelvis Excel).
* Spara filen *utan att ändra filnamn och ändelse*.
* Sträva efter att använda riktiga typografiska citationstecken, apostrofer, ellipser och andra specialtecken.


## Upphovsman

**[Kasper Sundström](https://twitter.com/ksundstrom)**


## Tack

* Tack till **André Brunnsberg**, för hjälp med det första utkastet till JavaScript/jQuery.
* Tack till **[Akademiska Sångföreningen](https://twitter.com/akademen)**, som inspirerat designen och är den tänkta användaren.


## Standarder och komponenter

KoalaOnline är skrivet i polyglott XHTML5 + SVG + RDFa + ARIA, XML + XSD, CSS3, JavaScript och PHP. KoalaOnline använder **[Bootstrap](https://getbootstrap.com/)** och **[jQuery Core](https://jquery.com/)**. En del av strukturen kommer från **[HTML5 Boilerplate](https://html5boilerplate.com/)**.


## Krav

KoalaOnline avser inte stöda annat än moderna webbläsare (Internet Explorer 10 och senare).


## Copyright

© 2016–2021 Kasper Sundström.

Alla rättigheter förbehållna. All rights reserved.
