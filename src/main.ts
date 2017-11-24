import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { TRANSLATION_EN } from "./resources/i18n/messages.en";
//import { TRANSLATION_ES } from "./resources/i18n/messages.es";
import { AppModule } from './app/app.module';

import { LOCALE_ID } from '@angular/core';
import { TRANSLATIONS } from '@angular/core';
import { TRANSLATIONS_FORMAT } from '@angular/core';

const TRANSLATION_EN =
`<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
 <file source-language="en" datatype="plaintext" original="ng2.template">
   <body>
     <trans-unit id="ae89a08ab9c77434ca7b8b116498317ecac8f2d9" datatype="html">
       <source>WELCOME</source>
       <target>Welcome message 1!</target>
     </trans-unit>
   </body>
 </file>
</xliff>`;

const TRANSLATION_ES =
`<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
 <file source-language="es" datatype="plaintext" original="ng2.template">
   <body>
     <trans-unit id="ae89a08ab9c77434ca7b8b116498317ecac8f2d9" datatype="html">
       <source>WELCOME</source>
       <target>Welcome message 1!</target>
     </trans-unit>
   </body>
 </file>
</xliff>`;

platformBrowserDynamic().bootstrapModule(AppModule, [{
    provide: TRANSLATIONS,
    useValue: TRANSLATION_ES
  },{
    provide: TRANSLATIONS_FORMAT,
    useValue: "xlf"
  },{
    provide: LOCALE_ID,
    useValue: "es"
  }]
);
