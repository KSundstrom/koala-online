# [KoalaOnline](http://koala.ksundstrom.fi/)


> It’s kind of a lottery!


KoalaOnline är ett webbverktyg för Akademens LSM-tentamina, inspirerat av det tidigare Javaverktyget Koala _(Kind-of-a-Lottery App)_, också kodat av Kasper Sundström.


## Uppdatering av sångerna

* Sångerna läses in från de tre textfilerna i mappen `/data/`.
* I filerna måste varje sång med all tillhörande info finnas på en egen rad.
* Filerna måste vara ren text (TXT) och i UTF-8.
* Ta backup på filerna före uppdatering av dem.
* Öppna filen/filerna i `/data/` i en dedikerad texteditor, exempelvis Notepad++. Om du i Windows öppnar i vanliga Anteckningar kan det hända att radbytena inte syns.
* Uppdatera vad som måste uppdateras. Använd vid behov hjälpfilen `kodgenerator-lsm-2015.xlsx` för att enkelt ta fram helt nya kodlistor. Kopiera kodlistorna från Excel (en kategori åt gången) och ersätt innehållet i respektive textfil.
* Kontrollera att varje sång finns med och finns på egen rad.
* Spara filen/filerna *utan att ändra filnamn och ändelser*.
* Inläsningen klarar av att rensa bort tomma rader, men undvik att lämna sådana.
* Inläsningen klarar av vilket slag av radbyten som helst, men sträva till att använda `LF`.
* Sträva till att använda typografiska citationstecken, apostrofer, ellipser och andra specialtecken.


## Upphovsman

**[Kasper Sundström](https://twitter.com/ksundstrom/)**


## Tack

* Tack till **André Brunnsberg**, för hjälp med det första utkastet till HTML/JavaScript/jQuery.
* Tack till **[Akademen](https://twitter.com/akademen/)**, som är den tänkta användaren och som inspirerat designen.


## Standarder och komponenter

<<<<<<< HEAD
KoalaOnline är skrivet i polyglott XHTML5, CSS3 och JavaScript och använder **[Bootstrap 3.3.7](http://getbootstrap.com/)** och **[jQuery 3.1.0](http://jquery.com/)**.
=======
KoalaOnline är skrivet i polyglott (X)HTML5, CSS3 och JavaScript och använder **[Bootstrap 3.3.7](http://getbootstrap.com/)** och **[jQuery 3.1.0](http://jquery.com/)**.
>>>>>>> origin/master


## Copyright

Copyright © 2016 Kasper Sundström

All rights retained. You may not without permission reproduce, distribute, or create derivative works from this work.
