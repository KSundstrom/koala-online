# [KoalaOnline](https://koala.ksundstrom.fi/)

> It’s kind of a lottery!

Koala (_Kind-of-a-Lottery App_) is a tool for the Academic Male Voice Choir of Helsinki’s LSM (_Lilla Sångarmärket_) exams. _KoalaOnline_, also known as _KoalaX_, is the current web application; it is an XML-based version of an earlier TXT-based version, which was in turn preceded by an earlier local Java application, [_JKoala_](https://github.com/KSundstrom/j-koala), all written by Kasper Sundström.


## Updating the songs

* The songs are read from the XML file `lsm.xml` in the `xml` directory.
* The structure of the XML file is defined by the schema file `lsm.xsd` in the same directory. _Do not make changes in this file unless you know what you are doing! Changing the schema file requires changes in other files!_
* Back up the file `lsm.xml` before updating it.
* Minor corrections of the information can easily be made directly in the raw text.
* Major changes should be done in an application capable of handling XML data in tabular form, such as Microsoft Excel.
* Save the file _without changing file name or extension_.
* Use proper typographic quotations marks (`”`), apostrophes (`’`), ellipses (`…`), and other special characters.


## Author

**[Kasper Sundström](https://twitter.com/ksundstrom)**


## Thanks

* To **André Brunnsberg**, for assistance with the first JavaScript/jQuery draft.
* To the **[Academic Male Voice Choir of Helsinki](https://twitter.com/akademen)**, which has inspired the design and is the intended user.


## Standards and components

KoalaOnline is written in polyglot XHTML5 + SVG + RDFa + ARIA, XML + XSD, CSS3, JavaScript, and PHP. KoalaOnline utilizes **[Bootstrap](https://getbootstrap.com/)** and **[jQuery Core](https://jquery.com/)**. Part of the structure comes from **[HTML5 Boilerplate](https://html5boilerplate.com/)**.


## Requirements

KoalaOnline supports only relatively modern browsers (Internet Explorer 10 and newer).


## Copyright

© 2016–2021 Kasper Sundström.

All rights reserved.
