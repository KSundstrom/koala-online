# [KoalaOnline](http://koala.ksundstrom.fi/)

> It’s kind of a lottery!

Koala *(Kind-of-a-Lottery App)* är ett verktyg för Akademens tentamina för Lilla sångarmärket. KoalaOnline inspirerades av det tidigare (lokala) Java-verktyget Koala, också kodat av Kasper Sundström.


## Uppdatering av sångerna

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
* Tack till **[Akademen](https://twitter.com/akademen)**, som inspirerat designen och är den tänkta användaren.


## Standarder och komponenter

KoalaOnline är skrivet i polyglott XHTML5 + SVG + RDFa + ARIA, CSS3, JavaScript och PHP och använder **[Bootstrap](https://getbootstrap.com/)** och **[jQuery](https://jquery.com/)**. Viss hjälp kommer också från **[HTML5 Boilerplate](https://html5boilerplate.com/)**.


## Krav

KoalaOnline försöker inte aktivt stöda annat än moderna webbläsare (Internet Explorer 10 och senare).


## Copyright

© 2016 Kasper Sundström

Alla rättigheter förbehållna.
