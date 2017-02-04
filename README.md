# [Koala](http://koala.ksundstrom.fi/)

> It’s kind of a lottery!

Koala *(Kind-of-a-Lottery App)* är ett verktyg för Akademens tentamina för Lilla sångarmärket. Den nuvarande versionen (även känd som KoalaX) är en XML-baserad version av den tidigare TXT-baserade versionen (även känd som KoalaOnline), vilken i sin tur inspirerades av det tidigare Java-verktyget Koala (även känt som JKoala), även det skrivet av Kasper Sundström.

## Uppdatering av sångerna i den tidigare TXT-baserade versionen (föråldrad information)

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

## Uppdatering av sångerna i den nuvarande XML-baserade versionen

**TODO**

## Upphovsman

**[Kasper Sundström](https://twitter.com/ksundstrom)**

## Tack

* Tack till **André Brunnsberg**, för hjälp med det första utkastet till JavaScript/jQuery.
* Tack till **[Akademen](https://twitter.com/akademen)**, som inspirerat designen och är den tänkta användaren.

## Standarder och komponenter

Koala är skrivet i polyglott XHTML5 + SVG + RDFa + ARIA, XML + XSD, CSS3, JavaScript och PHP samt använder **[Bootstrap](https://getbootstrap.com/)** och **[jQuery](https://jquery.com/)**. Viss hjälp kommer också från **[HTML5 Boilerplate](https://html5boilerplate.com/)**.

## Krav

Koala avser inte stöda annat än moderna webbläsare (Internet Explorer 10 och senare).

## Copyright

© 2016–2017 Kasper Sundström

Alla rättigheter förbehållna.
