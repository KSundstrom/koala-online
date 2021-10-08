# [KoalaOnline](http://koala.ksundstrom.fi/)

> It’s kind of a lottery!

Koala *(Kind-of-a-Lottery App)* är ett verktyg för Akademens tentamina för Lilla sångarmärket. Den nuvarande versionen är en XML-baserad version av den tidigare TXT-baserade versionen, vilken i sin tur inspirerades av ett tidigare Java-program, alla skrivna av Kasper Sundström.


## Uppdatering av sångerna i den nuvarande XML-baserade versionen

* Sångerna läses in från XML-filen `lsm.xml` i mappen `xml`.
* Filens struktur definieras av schemafilen `lsm.xsd` i samma mapp. *Ändra inte i denna fil om du inte vet vad du gör (kräver ändringar i andra filer).*
* Ta backup på `lsm.xml` före uppdatering av den.
* Smärre korrigeringar av informationen kan göras direkt i filen.
* Större ändringar görs lämpligen med ett program som kan hantera XML i tabellform, exempelvis Excel.
* Spara filen *utan att ändra filnamn och ändelse*.
* Sträva efter att använda riktiga typografiska citationstecken, apostrofer, ellipser och andra specialtecken.


## Uppdatering av sångerna i den tidigare TXT-baserade versionen

* Sångerna läses in från de tre textfilerna i mappen `txt`.
* I filerna måste varje sång med all tillhörande info finnas på en egen rad.
* Filerna måste vara ren text (TXT) och i UTF-8.
* Ta backup på filerna före uppdatering av dem.
* Öppna filen/filerna i `txt` i en dedikerad texteditor, exempelvis Notepad++. Om du i Windows öppnar i vanliga Anteckningar kan det hända att radbytena inte syns.
* Uppdatera vad som måste uppdateras. Använd vid behov Excel-hjälpfilen för att enkelt ta fram helt nya kodlistor. Kopiera kodlistorna från Excel (en kategori åt gången) och ersätt innehållet i respektive textfil.
* Kontrollera att varje sång finns med och finns på egen rad.
* Spara filen/filerna *utan att ändra filnamn och ändelser*.
* Inläsningen klarar av att rensa bort tomma rader, men undvik att lämna sådana.
* Inläsningen klarar av alla de vanliga typerna av radbyten, men sträva efter att använda `LF`.
* Sträva efter att använda riktiga typografiska citationstecken, apostrofer, ellipser och andra specialtecken.


## Upphovsman

**[Kasper Sundström](https://twitter.com/ksundstrom)**


## Tack

* Tack till **André Brunnsberg**, för hjälp med det första utkastet till JavaScript/jQuery.
* Tack till **[Akademiska Sångföreningen](https://twitter.com/akademen)**, som inspirerat designen och är den tänkta användaren.


## Standarder och komponenter

KoalaOnline är skrivet i polyglott XHTML5 + SVG + RDFa + ARIA, XML + XSD, CSS3, JavaScript och PHP. KoalaOnline använder **[Bootstrap](https://getbootstrap.com)** och **[jQuery Core](https://code.jquery.com/jquery)**. En del av strukturen kommer från **[HTML5 Boilerplate](https://html5boilerplate.com)**.


## Krav

KoalaOnline avser inte stöda annat än moderna webbläsare (Internet Explorer 10 och senare).


## Copyright

© 2016–2021 Kasper Sundström.

Alla rättigheter förbehållna. All rights reserved.
