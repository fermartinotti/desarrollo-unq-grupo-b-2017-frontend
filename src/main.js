"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//import { TRANSLATION_EN } from "./resources/i18n/messages.en";
//import { TRANSLATION_ES } from "./resources/i18n/messages.es";
var app_module_1 = require("./app/app.module");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var TRANSLATION_EN = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n   <body>\n     <trans-unit id=\"ae89a08ab9c77434ca7b8b116498317ecac8f2d9\" datatype=\"html\">\n       <source>WELCOME</source>\n       <target>Welcome message 1!</target>\n     </trans-unit>\n   </body>\n </file>\n</xliff>";
var TRANSLATION_ES = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n <file source-language=\"es\" datatype=\"plaintext\" original=\"ng2.template\">\n   <body>\n     <trans-unit id=\"ae89a08ab9c77434ca7b8b116498317ecac8f2d9\" datatype=\"html\">\n       <source>WELCOME</source>\n       <target>Welcome message 1!</target>\n     </trans-unit>\n   </body>\n </file>\n</xliff>";
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, [{
        provide: core_2.TRANSLATIONS,
        useValue: TRANSLATION_ES
    }, {
        provide: core_3.TRANSLATIONS_FORMAT,
        useValue: "xlf"
    }, {
        provide: core_1.LOCALE_ID,
        useValue: "es"
    }]);
//# sourceMappingURL=main.js.map