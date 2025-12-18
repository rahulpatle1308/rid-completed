const questions = [
  {
    "num": 1,
    "question_en": "Which function is used to change file permissions?",
    "question_hi": "फाइल परमिशन बदलने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["chmod()", "change_mode()", "file_perms()", "perm_change()"],
    "options_hi": ["chmod()", "change_mode()", "file_perms()", "perm_change()"],
    "answer_en": "chmod()",
    "answer_hi": "chmod()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'uksort()' function do?",
    "question_hi": "'uksort()' फंक्शन क्या करता है?",
    "options_en": ["Sorts array by keys using user function", "User-defined key sort", "Both A and B", "Custom key sorting"],
    "options_hi": ["यूजर फंक्शन का उपयोग करके कीज़ द्वारा ऐरे सॉर्ट करता है", "यूजर-डिफाइंड की सॉर्ट", "A और B दोनों", "कस्टम की सॉर्टिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to clear file status cache?",
    "question_hi": "फाइल स्टेटस कैश क्लियर करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["clearstatcache()", "stat_clear()", "cache_clear()", "clear_cache()"],
    "options_hi": ["clearstatcache()", "stat_clear()", "cache_clear()", "clear_cache()"],
    "answer_en": "clearstatcache()",
    "answer_hi": "clearstatcache()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'usort()' function?",
    "question_hi": "'usort()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Sorts array using user-defined comparison function", "Custom sort function", "Both A and B", "User sort"],
    "options_hi": ["यूजर-डिफाइंड कंपेरिजन फंक्शन का उपयोग करके ऐरे सॉर्ट करता है", "कस्टम सॉर्ट फंक्शन", "A और B दोनों", "यूजर सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to parse a URL into its components?",
    "question_hi": "URL को उसके कंपोनेंट्स में पार्स करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["parse_url()", "url_parse()", "break_url()", "url_components()"],
    "options_hi": ["parse_url()", "url_parse()", "break_url()", "url_components()"],
    "answer_en": "parse_url()",
    "answer_hi": "parse_url()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'wordwrap()' function do?",
    "question_hi": "'wordwrap()' फंक्शन क्या करता है?",
    "options_en": ["Wraps string to given number of characters", "Breaks string into lines", "Both A and B", "Line wrapping"],
    "options_hi": ["स्ट्रिंग को दिए गए करैक्टर्स की संख्या में रैप करता है", "स्ट्रिंग को लाइन्स में ब्रेक करता है", "A और B दोनों", "लाइन रैपिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to build a URL from components?",
    "question_hi": "कंपोनेंट्स से URL बिल्ड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["http_build_url() with PECL", "No built-in function", "url_build()", "build_url()"],
    "options_hi": ["PECL के साथ http_build_url()", "कोई बिल्ट-इन फंक्शन नहीं", "url_build()", "build_url()"],
    "answer_en": "No built-in function",
    "answer_hi": "कोई बिल्ट-इन फंक्शन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'addcslashes()' function?",
    "question_hi": "'addcslashes()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Adds C-style backslash escapes", "Escapes characters with backslash", "Both A and B", "C-style escaping"],
    "options_hi": ["C-स्टाइल बैकस्लैश एस्केप जोड़ता है", "बैकस्लैश के साथ करैक्टर्स एस्केप करता है", "A और B दोनों", "C-स्टाइल एस्केपिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to encode URL components?",
    "question_hi": "URL कंपोनेंट्स एन्कोड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["urlencode()", "rawurlencode()", "Both urlencode() and rawurlencode()", "encode_url()"],
    "options_hi": ["urlencode()", "rawurlencode()", "urlencode() और rawurlencode() दोनों", "encode_url()"],
    "answer_en": "Both urlencode() and rawurlencode()",
    "answer_hi": "urlencode() और rawurlencode() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'addslashes()' function do?",
    "question_hi": "'addslashes()' फंक्शन क्या करता है?",
    "options_en": ["Adds backslashes before predefined characters", "Escapes quotes", "Both A and B", "Basic escaping"],
    "options_hi": ["प्रीडिफाइंड करैक्टर्स से पहले बैकस्लैश जोड़ता है", "कोट्स एस्केप करता है", "A और B दोनों", "बेसिक एस्केपिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to decode URL components?",
    "question_hi": "URL कंपोनेंट्स डिकोड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["urldecode()", "rawurldecode()", "Both urldecode() and rawurldecode()", "decode_url()"],
    "options_hi": ["urldecode()", "rawurldecode()", "urldecode() और rawurldecode() दोनों", "decode_url()"],
    "answer_en": "Both urldecode() and rawurldecode()",
    "answer_hi": "urldecode() और rawurldecode() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'bin2hex()' function?",
    "question_hi": "'bin2hex()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts binary data to hexadecimal", "Binary to hex", "Both A and B", "Hex encoding"],
    "options_hi": ["बाइनरी डेटा को हेक्साडेसिमल में कन्वर्ट करता है", "बाइनरी से हेक्स", "A और B दोनों", "हेक्स एन्कोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to parse query strings?",
    "question_hi": "क्वेरी स्ट्रिंग्स पार्स करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["parse_str()", "parse_query()", "query_parse()", "str_parse()"],
    "options_hi": ["parse_str()", "parse_query()", "query_parse()", "str_parse()"],
    "answer_en": "parse_str()",
    "answer_hi": "parse_str()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'chr()' function return?",
    "question_hi": "'chr()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Character from ASCII value", "Single character string", "Both A and B", "ASCII character"],
    "options_hi": ["ASCII वैल्यू से करैक्टर", "सिंगल करैक्टर स्ट्रिंग", "A और B दोनों", "ASCII करैक्टर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to build query strings?",
    "question_hi": "क्वेरी स्ट्रिंग्स बिल्ड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["http_build_query()", "build_query()", "query_build()", "str_build_query()"],
    "options_hi": ["http_build_query()", "build_query()", "query_build()", "str_build_query()"],
    "answer_en": "http_build_query()",
    "answer_hi": "http_build_query()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'chunk_split()' function?",
    "question_hi": "'chunk_split()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Splits string into smaller chunks", "Breaks string with delimiter", "Both A and B", "Chunk splitting"],
    "options_hi": ["स्ट्रिंग को छोटे चंक्स में स्प्लिट करता है", "डिलीमीटर के साथ स्ट्रिंग ब्रेक करता है", "A और B दोनों", "चंक स्प्लिटिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to convert character encoding?",
    "question_hi": "करैक्टर एन्कोडिंग कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["iconv()", "mb_convert_encoding()", "Both iconv() and mb_convert_encoding()", "convert_encoding()"],
    "options_hi": ["iconv()", "mb_convert_encoding()", "iconv() और mb_convert_encoding() दोनों", "convert_encoding()"],
    "answer_en": "Both iconv() and mb_convert_encoding()",
    "answer_hi": "iconv() और mb_convert_encoding() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'convert_cyr_string()' function do?",
    "question_hi": "'convert_cyr_string()' फंक्शन क्या करता है?",
    "options_en": ["Converts between Cyrillic character sets", "Cyrillic conversion", "Both A and B", "Russian encoding"],
    "options_hi": ["सिरिलिक करैक्टर सेट्स के बीच कन्वर्ट करता है", "सिरिलिक कन्वर्शन", "A और B दोनों", "रशियन एन्कोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to detect character encoding?",
    "question_hi": "करैक्टर एन्कोडिंग डिटेक्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mb_detect_encoding()", "detect_encoding()", "encoding_detect()", "check_encoding()"],
    "options_hi": ["mb_detect_encoding()", "detect_encoding()", "encoding_detect()", "check_encoding()"],
    "answer_en": "mb_detect_encoding()",
    "answer_hi": "mb_detect_encoding()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'convert_uudecode()' function?",
    "question_hi": "'convert_uudecode()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Decodes uuencoded string", "UUdecode conversion", "Both A and B", "UU decoding"],
    "options_hi": ["uuencoded स्ट्रिंग डिकोड करता है", "UUdecode कन्वर्शन", "A और B दोनों", "UU डिकोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to get list of supported encodings?",
    "question_hi": "सपोर्टेड एन्कोडिंग्स की लिस्ट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mb_list_encodings()", "list_encodings()", "encodings_list()", "supported_encodings()"],
    "options_hi": ["mb_list_encodings()", "list_encodings()", "encodings_list()", "supported_encodings()"],
    "answer_en": "mb_list_encodings()",
    "answer_hi": "mb_list_encodings()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'convert_uuencode()' function do?",
    "question_hi": "'convert_uuencode()' फंक्शन क्या करता है?",
    "options_en": ["Uuencodes a string", "UUencode conversion", "Both A and B", "UU encoding"],
    "options_hi": ["स्ट्रिंग को uuencode करता है", "UUencode कन्वर्शन", "A और B दोनों", "UU एन्कोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to count words in a string?",
    "question_hi": "स्ट्रिंग में शब्दों की संख्या गिनने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_word_count()", "word_count()", "count_words()", "words_count()"],
    "options_hi": ["str_word_count()", "word_count()", "count_words()", "words_count()"],
    "answer_en": "str_word_count()",
    "answer_hi": "str_word_count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'count_chars()' function?",
    "question_hi": "'count_chars()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns information about characters used", "Character frequency", "Both A and B", "Character counting"],
    "options_hi": ["उपयोग किए गए करैक्टर्स के बारे में जानकारी रिटर्न करता है", "करैक्टर फ्रीक्वेंसी", "A और B दोनों", "करैक्टर काउंटिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to split string into words?",
    "question_hi": "स्ट्रिंग को शब्दों में विभाजित करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["explode(' ', $string)", "preg_split('/\s+/', $string)", "Both A and B", "split_words()"],
    "options_hi": ["explode(' ', $string)", "preg_split('/\s+/', $string)", "A और B दोनों", "split_words()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'crc32()' function return?",
    "question_hi": "'crc32()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["CRC32 polynomial of string", "Cyclic redundancy checksum", "Both A and B", "CRC32 value"],
    "options_hi": ["स्ट्रिंग का CRC32 पॉलीनोमियल", "साइक्लिक रिडंडेंसी चेकसम", "A और B दोनों", "CRC32 वैल्यू"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to capitalize first letter of each word?",
    "question_hi": "प्रत्येक शब्द का पहला अक्षर कैपिटलाइज करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["ucwords()", "capitalize_words()", "title_case()", "words_capitalize()"],
    "options_hi": ["ucwords()", "capitalize_words()", "title_case()", "words_capitalize()"],
    "answer_en": "ucwords()",
    "answer_hi": "ucwords()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'crypt()' function?",
    "question_hi": "'crypt()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["One-way string hashing", "Password encryption", "Both A and B", "Cryptographic hash"],
    "options_hi": ["वन-वे स्ट्रिंग हैशिंग", "पासवर्ड एन्क्रिप्शन", "A और B दोनों", "क्रिप्टोग्राफिक हैश"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to capitalize first letter of string?",
    "question_hi": "स्ट्रिंग का पहला अक्षर कैपिटलाइज करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["ucfirst()", "capitalize()", "first_capital()", "string_capitalize()"],
    "options_hi": ["ucfirst()", "capitalize()", "first_capital()", "string_capitalize()"],
    "answer_en": "ucfirst()",
    "answer_hi": "ucfirst()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'echo' language construct do?",
    "question_hi": "'echo' लैंग्वेज कंस्ट्रक्ट क्या करता है?",
    "options_en": ["Outputs strings", "Not a function but construct", "Both A and B", "Prints output"],
    "options_hi": ["स्ट्रिंग्स आउटपुट करता है", "फंक्शन नहीं बल्कि कंस्ट्रक्ट है", "A और B दोनों", "आउटपुट प्रिंट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to lowercase first letter of string?",
    "question_hi": "स्ट्रिंग का पहला अक्षर लोअरकेस करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["lcfirst()", "lowercase_first()", "first_lower()", "string_lowerfirst()"],
    "options_hi": ["lcfirst()", "lowercase_first()", "first_lower()", "string_lowerfirst()"],
    "answer_en": "lcfirst()",
    "answer_hi": "lcfirst()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'get_html_translation_table()' function?",
    "question_hi": "'get_html_translation_table()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns translation table used by htmlspecialchars/htmlentities", "HTML entity table", "Both A and B", "Translation table"],
    "options_hi": ["htmlspecialchars/htmlentities द्वारा उपयोग की जाने वाली ट्रांसलेशन टेबल रिटर्न करता है", "HTML एंटिटी टेबल", "A और B दोनों", "ट्रांसलेशन टेबल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to wrap string to specified width?",
    "question_hi": "स्ट्रिंग को निर्दिष्ट चौड़ाई में रैप करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["wordwrap()", "wrap_text()", "text_wrap()", "string_wrap()"],
    "options_hi": ["wordwrap()", "wrap_text()", "text_wrap()", "string_wrap()"],
    "answer_en": "wordwrap()",
    "answer_hi": "wordwrap()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'hebrev()' function do?",
    "question_hi": "'hebrev()' फंक्शन क्या करता है?",
    "options_en": ["Converts logical Hebrew text to visual text", "Hebrew text conversion", "Both A and B", "Hebrew formatting"],
    "options_hi": ["लॉजिकल हिब्रू टेक्स्ट को विजुअल टेक्स्ट में कन्वर्ट करता है", "हिब्रू टेक्स्ट कन्वर्शन", "A और B दोनों", "हिब्रू फॉर्मेटिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to reverse words in string?",
    "question_hi": "स्ट्रिंग में शब्दों को उलटने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["No built-in function", "strrev() with explode/implode", "implode(' ', array_reverse(explode(' ', $str)))", "All of the above"],
    "options_hi": ["कोई बिल्ट-इन फंक्शन नहीं", "explode/implode के साथ strrev()", "implode(' ', array_reverse(explode(' ', $str)))", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'hex2bin()' function?",
    "question_hi": "'hex2bin()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Decodes hexadecimally encoded binary string", "Hex to binary", "Both A and B", "Hex decoding"],
    "options_hi": ["हेक्साडेसिमली एन्कोडेड बाइनरी स्ट्रिंग डिकोड करता है", "हेक्स से बाइनरी", "A और B दोनों", "हेक्स डिकोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to shuffle characters in string?",
    "question_hi": "स्ट्रिंग में करैक्टर्स शफल करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_shuffle()", "shuffle_string()", "string_shuffle()", "randomize_string()"],
    "options_hi": ["str_shuffle()", "shuffle_string()", "string_shuffle()", "randomize_string()"],
    "answer_en": "str_shuffle()",
    "answer_hi": "str_shuffle()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'html_entity_decode()' function do?",
    "question_hi": "'html_entity_decode()' फंक्शन क्या करता है?",
    "options_en": ["Converts HTML entities to characters", "Decodes HTML entities", "Both A and B", "HTML decoding"],
    "options_hi": ["HTML एंटिटीज को करैक्टर्स में कन्वर्ट करता है", "HTML एंटिटीज डिकोड करता है", "A और B दोनों", "HTML डिकोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to repeat string?",
    "question_hi": "स्ट्रिंग दोहराने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_repeat()", "repeat_string()", "string_repeat()", "multiply_string()"],
    "options_hi": ["str_repeat()", "repeat_string()", "string_repeat()", "multiply_string()"],
    "answer_en": "str_repeat()",
    "answer_hi": "str_repeat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'htmlspecialchars_decode()' function?",
    "question_hi": "'htmlspecialchars_decode()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts special HTML entities back to characters", "Decodes htmlspecialchars", "Both A and B", "Special chars decode"],
    "options_hi": ["स्पेशल HTML एंटिटीज को वापस करैक्टर्स में कन्वर्ट करता है", "htmlspecialchars डिकोड करता है", "A और B दोनों", "स्पेशल chars डिकोड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to pad string?",
    "question_hi": "स्ट्रिंग पैड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_pad()", "pad_string()", "string_pad()", "fill_string()"],
    "options_hi": ["str_pad()", "pad_string()", "string_pad()", "fill_string()"],
    "answer_en": "str_pad()",
    "answer_hi": "str_pad()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'implode()' function do?",
    "question_hi": "'implode()' फंक्शन क्या करता है?",
    "options_en": ["Joins array elements with string", "Array to string", "Both A and B", "Concatenates array"],
    "options_hi": ["ऐरे एलिमेंट्स को स्ट्रिंग के साथ जोड़ता है", "ऐरे से स्ट्रिंग", "A और B दोनों", "ऐरे कॉन्केटनेट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to truncate string?",
    "question_hi": "स्ट्रिंग ट्रंकेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["substr()", "mb_strimwidth()", "Both substr() and mb_strimwidth()", "truncate()"],
    "options_hi": ["substr()", "mb_strimwidth()", "substr() और mb_strimwidth() दोनों", "truncate()"],
    "answer_en": "Both substr() and mb_strimwidth()",
    "answer_hi": "substr() और mb_strimwidth() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'join()' function?",
    "question_hi": "'join()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Alias of implode()", "Joins array elements", "Both A and B", "Array joining"],
    "options_hi": ["implode() का अलियास", "ऐरे एलिमेंट्स जोड़ता है", "A और B दोनों", "ऐरे जॉइनिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to compare strings locale-based?",
    "question_hi": "लोकेल-आधारित स्ट्रिंग्स compare करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["strcoll()", "locale_compare()", "compare_locale()", "string_collate()"],
    "options_hi": ["strcoll()", "locale_compare()", "compare_locale()", "string_collate()"],
    "answer_en": "strcoll()",
    "answer_hi": "strcoll()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'lcfirst()' function do?",
    "question_hi": "'lcfirst()' फंक्शन क्या करता है?",
    "options_en": ["Makes first character lowercase", "Lowercases first letter", "Both A and B", "First char lower"],
    "options_hi": ["पहला करैक्टर लोअरकेस बनाता है", "पहला लेटर लोअरकेस करता है", "A और B दोनों", "पहला char लोअर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used for soundex comparison?",
    "question_hi": "साउंडेक्स तुलना के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["soundex()", "metaphone()", "Both soundex() and metaphone()", "phonetic()"],
    "options_hi": ["soundex()", "metaphone()", "soundex() और metaphone() दोनों", "फोनेटिक()"],
    "answer_en": "Both soundex() and metaphone()",
    "answer_hi": "soundex() और metaphone() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'levenshtein()' function?",
    "question_hi": "'levenshtein()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Calculates Levenshtein distance between strings", "String distance", "Both A and B", "Edit distance"],
    "options_hi": ["स्ट्रिंग्स के बीच लेवेनश्टीन दूरी कैलकुलेट करता है", "स्ट्रिंग दूरी", "A और B दोनों", "एडिट दूरी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used for metaphone comparison?",
    "question_hi": "मेटाफोन तुलना के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["metaphone()", "soundex()", "Both metaphone() and soundex()", "phonetic_match()"],
    "options_hi": ["metaphone()", "soundex()", "metaphone() और soundex() दोनों", "phonetic_match()"],
    "answer_en": "metaphone()",
    "answer_hi": "metaphone()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'localeconv()' function return?",
    "question_hi": "'localeconv()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Array of locale numeric and monetary formatting information", "Locale settings", "Both A and B", "Localization info"],
    "options_hi": ["लोकेल न्यूमेरिक और मॉनेटरी फॉर्मेटिंग जानकारी का ऐरे", "लोकेल सेटिंग्स", "A और B दोनों", "लोकलाइजेशन जानकारी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  }

];


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