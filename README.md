# [KoalaOnline](http://koala.ksundstrom.fi)

KoalaOnline är ett webbverktyg för Akademens LSM-tentamina, inspirerat av det tidigare Javaverktyget Koala _(Kind-of-a-Lottery App)_, även det kodat av Kasper Sundström.


## Uppdatering av sångerna

* Sångerna läses in från de tre textfilerna i mappen `/data/`.
* I filerna måste varje sång med tillhörande info finnas på exakt en egen rad. Det får inte finnas några som helst tomma rader i textfilerna.
* Använd riktiga/typografiska citationstecken, apostrofer, ellipser och andra specialtecken.
* Filerna måste vara ren text (`TXT`).
* Ta backup på filerna först om du ämnar uppdatera dem.
* Öppna filen/filerna i `/data/` i en riktig text/kodeditor, exempelvis Notepad++. Om du i Windows öppnar i vanliga Anteckningar kan det hända att radbrytningarna inte syns.
* Uppdatera vad som måste uppdateras. Använd vid behov hjälpfilen `kodgenerator-lsm-2015.xlsx` (fråga upphovsmannen) för att enkelt ta fram helt nya kodlistor. Kopiera kodlistorna från Excel (en kategori åt gången) och ersätt innehållet i respektive textfil.
* Kontrollera att varje sång finns med och finns på egen rad. _Ta bort eventuella tomma rader i början och slutet!_
* Spara filen/filerna som `TXT`, i `UTF8`, med `LF`- eller `CRLF`-radbrytningar (bägge fungerar). _Ändra inte filnamnen eller ändelserna!_


## Upphovsman

**[Kasper Sundström](https://twitter.com/ksundstrom)**


## Tack

Tack till **André Brunnsberg** för hjälp med det första utkastet till HTML/JavaScript/jQuery samt förstås till **[Akademen](https://twitter.com/akademen)** som är den tänkta användaren och som inspirerat designen.


## Framework

KoalaOnline använder **[Bootstrap](http://getbootstrap.com)**.


## Copyright

Copyright © 2016 Kasper Sundström

All rights retained where applicable. You may not without explicit permission reproduce, distribute, or create derivative works from this work.
