'use strict';

var LanguageManager = brackets.getModule('language/LanguageManager');

LanguageManager.defineLanguage('pascal', {
  name: 'Pascal',
  mode: 'pascal',
  fileExtensions: ['pas'],
  blockComment: ['(*', '*)'],
  lineComment: ['//']
});

console.log('Pascal syntax highlighting loaded.');
