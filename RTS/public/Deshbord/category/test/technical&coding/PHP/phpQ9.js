const questions = [
  {
    "num": 1,
    "question_en": "Which function is used to format a number as currency?",
    "question_hi": "नंबर को करेंसी के रूप में फॉर्मेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["money_format()", "number_format() with currency symbol", "Both A and B", "currency_format()"],
    "options_hi": ["money_format()", "करेंसी सिंबल के साथ number_format()", "A और B दोनों", "currency_format()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'ltrim()' function do?",
    "question_hi": "'ltrim()' फंक्शन क्या करता है?",
    "options_en": ["Removes whitespace from left side of string", "Trims beginning of string", "Both A and B", "Left trim"],
    "options_hi": ["स्ट्रिंग के बाईं ओर से व्हाइटस्पेस हटाता है", "स्ट्रिंग की शुरुआत ट्रिम करता है", "A और B दोनों", "लेफ्ट ट्रिम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to get the monetary value for locale?",
    "question_hi": "लोकेल के लिए मॉनेटरी वैल्यू प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()", "No specific function", "get_locale_currency()", "monetary_info()"],
    "options_hi": ["localeconv()", "कोई विशिष्ट फंक्शन नहीं", "get_locale_currency()", "monetary_info()"],
    "answer_en": "localeconv()",
    "answer_hi": "localeconv()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'md5_file()' function?",
    "question_hi": "'md5_file()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Calculates MD5 hash of file", "File checksum", "Both A and B", "File MD5"],
    "options_hi": ["फाइल का MD5 हैश कैलकुलेट करता है", "फाइल चेकसम", "A और B दोनों", "फाइल MD5"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to set locale information?",
    "question_hi": "लोकेल जानकारी सेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale()", "locale_set()", "set_locale()", "configure_locale()"],
    "options_hi": ["setlocale()", "locale_set()", "set_locale()", "configure_locale()"],
    "answer_en": "setlocale()",
    "answer_hi": "setlocale()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'metaphone()' function return?",
    "question_hi": "'metaphone()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Metaphone key of string", "Phonetic representation", "Both A and B", "Phonetic key"],
    "options_hi": ["स्ट्रिंग की मेटाफोन की", "फोनेटिक रिप्रेजेंटेशन", "A और B दोनों", "फोनेटिक की"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to get numeric formatting information?",
    "question_hi": "न्यूमेरिक फॉर्मेटिंग जानकारी प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()", "No specific function", "get_numeric_format()", "numeric_info()"],
    "options_hi": ["localeconv()", "कोई विशिष्ट फंक्शन नहीं", "get_numeric_format()", "numeric_info()"],
    "answer_en": "localeconv()",
    "answer_hi": "localeconv()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'nl2br()' function?",
    "question_hi": "'nl2br()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Inserts HTML line breaks before newlines", "Newline to <br>", "Both A and B", "Line break conversion"],
    "options_hi": ["न्यूलाइन से पहले HTML लाइन ब्रेक इन्सर्ट करता है", "न्यूलाइन से <br>", "A और B दोनों", "लाइन ब्रेक कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to format number according to locale?",
    "question_hi": "लोकेल के अनुसार नंबर फॉर्मेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["number_format() with locale", "localeconv() for info then format", "Both A and B", "locale_number_format()"],
    "options_hi": ["लोकेल के साथ number_format()", "जानकारी के लिए localeconv() फिर फॉर्मेट", "A और B दोनों", "locale_number_format()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'number_format()' function's third parameter do?",
    "question_hi": "'number_format()' फंक्शन का तीसरा पैरामीटर क्या करता है?",
    "options_en": ["Decimal point character", "Decimal separator", "Both A and B", "Decimal marker"],
    "options_hi": ["डेसीमल पॉइंट करैक्टर", "डेसीमल सेपरेटर", "A और B दोनों", "डेसीमल मार्कर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to parse currency value?",
    "question_hi": "करेंसी वैल्यू पार्स करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["No built-in function", "Use filter_var() with FILTER_SANITIZE_NUMBER_FLOAT", "Custom parsing needed", "All of the above"],
    "options_hi": ["कोई बिल्ट-इन फंक्शन नहीं", "FILTER_SANITIZE_NUMBER_FLOAT के साथ filter_var() उपयोग करें", "कस्टम पार्सिंग आवश्यक", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'ord()' function?",
    "question_hi": "'ord()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns ASCII value of character", "Character to ASCII", "Both A and B", "ASCII conversion"],
    "options_hi": ["करैक्टर की ASCII वैल्यू रिटर्न करता है", "करैक्टर से ASCII", "A और B दोनों", "ASCII कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to quote string with slashes?",
    "question_hi": "स्लैशेस के साथ स्ट्रिंग को कोट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["addslashes()", "quotemeta()", "Both addslashes() and quotemeta()", "quote_string()"],
    "options_hi": ["addslashes()", "quotemeta()", "addslashes() और quotemeta() दोनों", "quote_string()"],
    "answer_en": "Both addslashes() and quotemeta()",
    "answer_hi": "addslashes() और quotemeta() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'parse_str()' function do?",
    "question_hi": "'parse_str()' फंक्शन क्या करता है?",
    "options_en": ["Parses query string into variables", "String to variables", "Both A and B", "Query parsing"],
    "options_hi": ["क्वेरी स्ट्रिंग को वेरिएबल्स में पार्स करता है", "स्ट्रिंग से वेरिएबल्स", "A और B दोनों", "क्वेरी पार्सिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to remove backslashes?",
    "question_hi": "बैकस्लैशेस रिमूव करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["stripslashes()", "stripcslashes()", "Both stripslashes() and stripcslashes()", "remove_slashes()"],
    "options_hi": ["stripslashes()", "stripcslashes()", "stripslashes() और stripcslashes() दोनों", "remove_slashes()"],
    "answer_en": "Both stripslashes() and stripcslashes()",
    "answer_hi": "stripslashes() और stripcslashes() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'print' language construct?",
    "question_hi": "'print' लैंग्वेज कंस्ट्रक्ट का उद्देश्य क्या है?",
    "options_en": ["Outputs string, returns 1", "Similar to echo but returns value", "Both A and B", "Print output"],
    "options_hi": ["स्ट्रिंग आउटपुट करता है, 1 रिटर्न करता है", "echo के समान लेकिन वैल्यू रिटर्न करता है", "A और B दोनों", "आउटपुट प्रिंट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to quote meta characters?",
    "question_hi": "मेटा करैक्टर्स को कोट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["quotemeta()", "addcslashes()", "Both quotemeta() and addcslashes()", "quote_meta()"],
    "options_hi": ["quotemeta()", "addcslashes()", "quotemeta() और addcslashes() दोनों", "quote_meta()"],
    "answer_en": "quotemeta()",
    "answer_hi": "quotemeta()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'printf()' function do?",
    "question_hi": "'printf()' फंक्शन क्या करता है?",
    "options_en": ["Outputs formatted string", "Formatted printing", "Both A and B", "Format and print"],
    "options_hi": ["फॉर्मेटेड स्ट्रिंग आउटपुट करता है", "फॉर्मेटेड प्रिंटिंग", "A और B दोनों", "फॉर्मेट और प्रिंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to convert Cyrillic characters?",
    "question_hi": "सिरिलिक करैक्टर्स कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["convert_cyr_string()", "iconv()", "Both convert_cyr_string() and iconv()", "cyrillic_convert()"],
    "options_hi": ["convert_cyr_string()", "iconv()", "convert_cyr_string() और iconv() दोनों", "cyrillic_convert()"],
    "answer_en": "Both convert_cyr_string() and iconv()",
    "answer_hi": "convert_cyr_string() और iconv() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'quoted_printable_decode()' function?",
    "question_hi": "'quoted_printable_decode()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Decodes quoted-printable string", "QP decoding", "Both A and B", "Quoted printable"],
    "options_hi": ["quoted-printable स्ट्रिंग डिकोड करता है", "QP डिकोडिंग", "A और B दोनों", "Quoted printable"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used for Hebrew text conversion?",
    "question_hi": "हिब्रू टेक्स्ट कन्वर्शन के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["hebrev()", "hebrevc()", "Both hebrev() and hebrevc()", "hebrew_convert()"],
    "options_hi": ["hebrev()", "hebrevc()", "hebrev() और hebrevc() दोनों", "hebrew_convert()"],
    "answer_en": "Both hebrev() and hebrevc()",
    "answer_hi": "hebrev() और hebrevc() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'quoted_printable_encode()' function do?",
    "question_hi": "'quoted_printable_encode()' फंक्शन क्या करता है?",
    "options_en": ["Converts 8-bit string to quoted-printable", "QP encoding", "Both A and B", "Quoted printable encoding"],
    "options_hi": ["8-bit स्ट्रिंग को quoted-printable में कन्वर्ट करता है", "QP एन्कोडिंग", "A और B दोनों", "Quoted printable एन्कोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used for Hebrew text with line conversion?",
    "question_hi": "लाइन कन्वर्शन के साथ हिब्रू टेक्स्ट के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["hebrevc()", "hebrev() with nl2br()", "Both A and B", "hebrew_line_convert()"],
    "options_hi": ["hebrevc()", "nl2br() के साथ hebrev()", "A और B दोनों", "hebrew_line_convert()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'quotemeta()' function?",
    "question_hi": "'quotemeta()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Quotes meta characters", "Escapes special characters", "Both A and B", "Meta quoting"],
    "options_hi": ["मेटा करैक्टर्स को कोट करता है", "स्पेशल करैक्टर्स एस्केप करता है", "A और B दोनों", "मेटा कोटिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to set rounding mode?",
    "question_hi": "राउंडिंग मोड सेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["No built-in function", "Use round() with PHP_ROUND constants", "ini_set('precision')", "All of the above"],
    "options_hi": ["कोई बिल्ट-इन फंक्शन नहीं", "PHP_ROUND कॉन्स्टेंट्स के साथ round() उपयोग करें", "ini_set('precision')", "उपरोक्त सभी"],
    "answer_en": "No built-in function",
    "answer_hi": "कोई बिल्ट-इन फंक्शन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'rtrim()' function do?",
    "question_hi": "'rtrim()' फंक्शन क्या करता है?",
    "options_en": ["Removes whitespace from right side of string", "Trims end of string", "Both A and B", "Right trim"],
    "options_hi": ["स्ट्रिंग के दाईं ओर से व्हाइटस्पेस हटाता है", "स्ट्रिंग का अंत ट्रिम करता है", "A और B दोनों", "राइट ट्रिम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to set the rounding value?",
    "question_hi": "राउंडिंग वैल्यू सेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["round() with precision parameter", "No specific set function", "set_rounding()", "rounding_set()"],
    "options_hi": ["प्रिसिजन पैरामीटर के साथ round()", "कोई विशिष्ट सेट फंक्शन नहीं", "set_rounding()", "rounding_set()"],
    "answer_en": "round() with precision parameter",
    "answer_hi": "प्रिसिजन पैरामीटर के साथ round()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'setlocale()' function?",
    "question_hi": "'setlocale()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Sets locale information", "Locale configuration", "Both A and B", "Localization setup"],
    "options_hi": ["लोकेल जानकारी सेट करता है", "लोकेल कॉन्फ़िगरेशन", "A और B दोनों", "लोकलाइजेशन सेटअप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to get the rounding mode?",
    "question_hi": "राउंडिंग मोड प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["No built-in function", "Use round() with constants", "get_rounding()", "rounding_get()"],
    "options_hi": ["कोई बिल्ट-इन फंक्शन नहीं", "कॉन्स्टेंट्स के साथ round() उपयोग करें", "get_rounding()", "rounding_get()"],
    "answer_en": "No built-in function",
    "answer_hi": "कोई बिल्ट-इन फंक्शन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'sha1_file()' function do?",
    "question_hi": "'sha1_file()' फंक्शन क्या करता है?",
    "options_en": ["Calculates SHA1 hash of file", "File SHA1 checksum", "Both A and B", "File SHA1"],
    "options_hi": ["फाइल का SHA1 हैश कैलकुलेट करता है", "फाइल SHA1 चेकसम", "A और B दोनों", "फाइल SHA1"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to get supported locales?",
    "question_hi": "सपोर्टेड लोकेल्स प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["No built-in function", "Check system locale -a command", "get_locales()", "locales_list()"],
    "options_hi": ["कोई बिल्ट-इन फंक्शन नहीं", "सिस्टम locale -a कमांड चेक करें", "get_locales()", "locales_list()"],
    "answer_en": "No built-in function",
    "answer_hi": "कोई बिल्ट-इन फंक्शन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'similar_text()' function?",
    "question_hi": "'similar_text()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Calculates similarity between strings", "String similarity percentage", "Both A and B", "Text similarity"],
    "options_hi": ["स्ट्रिंग्स के बीच समानता कैलकुलेट करता है", "स्ट्रिंग समानता प्रतिशत", "A और B दोनों", "टेक्स्ट समानता"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to get current locale?",
    "question_hi": "करंट लोकेल प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale(LC_ALL, 0)", "get_locale()", "current_locale()", "locale_get()"],
    "options_hi": ["setlocale(LC_ALL, 0)", "get_locale()", "current_locale()", "locale_get()"],
    "answer_en": "setlocale(LC_ALL, 0)",
    "answer_hi": "setlocale(LC_ALL, 0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'soundex()' function return?",
    "question_hi": "'soundex()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Soundex key of string", "Phonetic hash", "Both A and B", "Soundex code"],
    "options_hi": ["स्ट्रिंग की साउंडेक्स की", "फोनेटिक हैश", "A और B दोनों", "साउंडेक्स कोड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to format locale-specific number?",
    "question_hi": "लोकेल-स्पेसिफिक नंबर फॉर्मेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["number_format() with localeconv() data", "No built-in function", "locale_number()", "format_locale_number()"],
    "options_hi": ["localeconv() डेटा के साथ number_format()", "कोई बिल्ट-इन फंक्शन नहीं", "locale_number()", "format_locale_number()"],
    "answer_en": "number_format() with localeconv() data",
    "answer_hi": "localeconv() डेटा के साथ number_format()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'sprintf()' function?",
    "question_hi": "'sprintf()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns formatted string", "String formatting", "Both A and B", "Format string"],
    "options_hi": ["फॉर्मेटेड स्ट्रिंग रिटर्न करता है", "स्ट्रिंग फॉर्मेटिंग", "A और B दोनों", "फॉर्मेट स्ट्रिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to parse locale-specific number?",
    "question_hi": "लोकेल-स्पेसिफिक नंबर पार्स करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["No built-in function", "Use filter_var() with custom filtering", "str_replace() locale separators", "All of the above"],
    "options_hi": ["कोई बिल्ट-इन फंक्शन नहीं", "कस्टम फिल्टरिंग के साथ filter_var() उपयोग करें", "str_replace() लोकेल सेपरेटर्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'sscanf()' function do?",
    "question_hi": "'sscanf()' फंक्शन क्या करता है?",
    "options_en": ["Parses input from string according to format", "String scanning", "Both A and B", "Scan string"],
    "options_hi": ["फॉर्मेट के अनुसार स्ट्रिंग से इनपुट पार्स करता है", "स्ट्रिंग स्कैनिंग", "A और B दोनों", "स्ट्रिंग स्कैन करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to get locale currency symbol?",
    "question_hi": "लोकेल करेंसी सिंबल प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['currency_symbol']", "No direct function", "get_currency_symbol()", "currency_symbol()"],
    "options_hi": ["localeconv()['currency_symbol']", "कोई डायरेक्ट फंक्शन नहीं", "get_currency_symbol()", "currency_symbol()"],
    "answer_en": "localeconv()['currency_symbol']",
    "answer_hi": "localeconv()['currency_symbol']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'str_contains()' function?",
    "question_hi": "'str_contains()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Checks if string contains substring", "Substring search", "Both A and B", "Contains check"],
    "options_hi": ["चेक करता है कि स्ट्रिंग में सबस्ट्रिंग है", "सबस्ट्रिंग खोज", "A और B दोनों", "कन्टेन्स चेक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to get locale decimal point?",
    "question_hi": "लोकेल डेसीमल पॉइंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['decimal_point']", "No direct function", "get_decimal_point()", "decimal_point()"],
    "options_hi": ["localeconv()['decimal_point']", "कोई डायरेक्ट फंक्शन नहीं", "get_decimal_point()", "decimal_point()"],
    "answer_en": "localeconv()['decimal_point']",
    "answer_hi": "localeconv()['decimal_point']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'str_ends_with()' function do?",
    "question_hi": "'str_ends_with()' फंक्शन क्या करता है?",
    "options_en": ["Checks if string ends with substring", "Ends with check", "Both A and B", "Ends with"],
    "options_hi": ["चेक करता है कि स्ट्रिंग सबस्ट्रिंग से समाप्त होती है", "एंड्स विद चेक", "A और B दोनों", "एंड्स विद"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to get locale thousands separator?",
    "question_hi": "लोकेल थाउजेंड्स सेपरेटर प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['thousands_sep']", "No direct function", "get_thousands_separator()", "thousands_separator()"],
    "options_hi": ["localeconv()['thousands_sep']", "कोई डायरेक्ट फंक्शन नहीं", "get_thousands_separator()", "thousands_separator()"],
    "answer_en": "localeconv()['thousands_sep']",
    "answer_hi": "localeconv()['thousands_sep']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'str_getcsv()' function?",
    "question_hi": "'str_getcsv()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Parses CSV string into array", "CSV parsing", "Both A and B", "CSV to array"],
    "options_hi": ["CSV स्ट्रिंग को ऐरे में पार्स करता है", "CSV पार्सिंग", "A और B दोनों", "CSV से ऐरे"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to get locale grouping?",
    "question_hi": "लोकेल ग्रुपिंग प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['grouping']", "No direct function", "get_grouping()", "grouping_info()"],
    "options_hi": ["localeconv()['grouping']", "कोई डायरेक्ट फंक्शन नहीं", "get_grouping()", "grouping_info()"],
    "answer_en": "localeconv()['grouping']",
    "answer_hi": "localeconv()['grouping']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'str_ireplace()' function do?",
    "question_hi": "'str_ireplace()' फंक्शन क्या करता है?",
    "options_en": ["Case-insensitive version of str_replace()", "Replace ignoring case", "Both A and B", "Case-insensitive replace"],
    "options_hi": ["str_replace() का केस-इनसेंसिटिव वर्जन", "केस को नजरअंदाज करते हुए रिप्लेस करें", "A और B दोनों", "केस-इनसेंसिटिव रिप्लेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to get locale monetary symbol?",
    "question_hi": "लोकेल मॉनेटरी सिंबल प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_curr_symbol']", "No direct function", "get_monetary_symbol()", "monetary_symbol()"],
    "options_hi": ["localeconv()['int_curr_symbol']", "कोई डायरेक्ट फंक्शन नहीं", "get_monetary_symbol()", "monetary_symbol()"],
    "answer_en": "localeconv()['int_curr_symbol']",
    "answer_hi": "localeconv()['int_curr_symbol']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'str_pad()' function?",
    "question_hi": "'str_pad()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Pads string to specified length", "String padding", "Both A and B", "Pad string"],
    "options_hi": ["स्ट्रिंग को निर्दिष्ट लंबाई तक पैड करता है", "स्ट्रिंग पैडिंग", "A और B दोनों", "स्ट्रिंग पैड करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to get locale positive sign?",
    "question_hi": "लोकेल पॉजिटिव साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['positive_sign']", "No direct function", "get_positive_sign()", "positive_sign()"],
    "options_hi": ["localeconv()['positive_sign']", "कोई डायरेक्ट फंक्शन नहीं", "get_positive_sign()", "positive_sign()"],
    "answer_en": "localeconv()['positive_sign']",
    "answer_hi": "localeconv()['positive_sign']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'str_repeat()' function do?",
    "question_hi": "'str_repeat()' फंक्शन क्या करता है?",
    "options_en": ["Repeats string specified number of times", "String repetition", "Both A and B", "Repeat string"],
    "options_hi": ["स्ट्रिंग को निर्दिष्ट संख्या में दोहराता है", "स्ट्रिंग repetition", "A और B दोनों", "स्ट्रिंग दोहराएं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  }
]


// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};