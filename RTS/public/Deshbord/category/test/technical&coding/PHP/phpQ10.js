const questions = [
  
  {
    "num": 1,
    "question_en": "Which function is used to get locale negative sign?",
    "question_hi": "लोकेल नेगेटिव साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['negative_sign']", "No direct function", "get_negative_sign()", "negative_sign()"],
    "options_hi": ["localeconv()['negative_sign']", "कोई डायरेक्ट फंक्शन नहीं", "get_negative_sign()", "negative_sign()"],
    "answer_en": "localeconv()['negative_sign']",
    "answer_hi": "localeconv()['negative_sign']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'str_replace()' function's array parameters do?",
    "question_hi": "'str_replace()' फंक्शन के ऐरे पैरामीटर्स क्या करते हैं?",
    "options_en": ["Multiple search/replace operations", "Batch replacement", "Both A and B", "Array replacement"],
    "options_hi": ["मल्टीपल सर्च/रिप्लेस ऑपरेशन", "बैच रिप्लेसमेंट", "A और B दोनों", "ऐरे रिप्लेसमेंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to get locale frac digits?",
    "question_hi": "लोकेल frac digits प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['frac_digits']", "No direct function", "get_frac_digits()", "frac_digits()"],
    "options_hi": ["localeconv()['frac_digits']", "कोई डायरेक्ट फंक्शन नहीं", "get_frac_digits()", "frac_digits()"],
    "answer_en": "localeconv()['frac_digits']",
    "answer_hi": "localeconv()['frac_digits']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'str_rot13()' function?",
    "question_hi": "'str_rot13()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Performs ROT13 encoding", "Simple letter substitution cipher", "Both A and B", "ROT13 transformation"],
    "options_hi": ["ROT13 एन्कोडिंग करता है", "सिंपल लेटर सब्स्टीट्यूशन cipher", "A और B दोनों", "ROT13 transformation"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to get locale p cs precedes?",
    "question_hi": "लोकेल p_cs_precedes प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['p_cs_precedes']", "No direct function", "get_p_cs_precedes()", "p_cs_precedes()"],
    "options_hi": ["localeconv()['p_cs_precedes']", "कोई डायरेक्ट फंक्शन नहीं", "get_p_cs_precedes()", "p_cs_precedes()"],
    "answer_en": "localeconv()['p_cs_precedes']",
    "answer_hi": "localeconv()['p_cs_precedes']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'str_shuffle()' function do?",
    "question_hi": "'str_shuffle()' फंक्शन क्या करता है?",
    "options_en": ["Randomly shuffles characters in string", "String randomization", "Both A and B", "Shuffle string"],
    "options_hi": ["स्ट्रिंग में करैक्टर्स को रैंडमली शफल करता है", "स्ट्रिंग रैंडमाइजेशन", "A और B दोनों", "स्ट्रिंग शफल करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to get locale p sep by space?",
    "question_hi": "लोकेल p_sep_by_space प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['p_sep_by_space']", "No direct function", "get_p_sep_by_space()", "p_sep_by_space()"],
    "options_hi": ["localeconv()['p_sep_by_space']", "कोई डायरेक्ट फंक्शन नहीं", "get_p_sep_by_space()", "p_sep_by_space()"],
    "answer_en": "localeconv()['p_sep_by_space']",
    "answer_hi": "localeconv()['p_sep_by_space']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'str_split()' function?",
    "question_hi": "'str_split()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts string to array", "Splits string into array", "Both A and B", "String to array"],
    "options_hi": ["स्ट्रिंग को ऐरे में कन्वर्ट करता है", "स्ट्रिंग को ऐरे में स्प्लिट करता है", "A और B दोनों", "स्ट्रिंग से ऐरे"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to get locale n cs precedes?",
    "question_hi": "लोकेल n_cs_precedes प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['n_cs_precedes']", "No direct function", "get_n_cs_precedes()", "n_cs_precedes()"],
    "options_hi": ["localeconv()['n_cs_precedes']", "कोई डायरेक्ट फंक्शन नहीं", "get_n_cs_precedes()", "n_cs_precedes()"],
    "answer_en": "localeconv()['n_cs_precedes']",
    "answer_hi": "localeconv()['n_cs_precedes']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'str_word_count()' function's second parameter do?",
    "question_hi": "'str_word_count()' फंक्शन का दूसरा पैरामीटर क्या करता है?",
    "options_en": ["Format of return value", "Return format type", "Both A and B", "Output format"],
    "options_hi": ["रिटर्न वैल्यू का फॉर्मेट", "रिटर्न फॉर्मेट टाइप", "A और B दोनों", "आउटपुट फॉर्मेट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to get locale n sep by space?",
    "question_hi": "लोकेल n_sep_by_space प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['n_sep_by_space']", "No direct function", "get_n_sep_by_space()", "n_sep_by_space()"],
    "options_hi": ["localeconv()['n_sep_by_space']", "कोई डायरेक्ट फंक्शन नहीं", "get_n_sep_by_space()", "n_sep_by_space()"],
    "answer_en": "localeconv()['n_sep_by_space']",
    "answer_hi": "localeconv()['n_sep_by_space']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'strcasecmp()' function?",
    "question_hi": "'strcasecmp()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Binary safe case-insensitive string comparison", "Case-insensitive compare", "Both A and B", "Case-insensitive strcmp"],
    "options_hi": ["बाइनरी सेफ केस-इनसेंसिटिव स्ट्रिंग तुलना", "केस-इनसेंसिटिव compare", "A और B दोनों", "केस-इनसेंसिटिव strcmp"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to get locale p sign posn?",
    "question_hi": "लोकेल p_sign_posn प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['p_sign_posn']", "No direct function", "get_p_sign_posn()", "p_sign_posn()"],
    "options_hi": ["localeconv()['p_sign_posn']", "कोई डायरेक्ट फंक्शन नहीं", "get_p_sign_posn()", "p_sign_posn()"],
    "answer_en": "localeconv()['p_sign_posn']",
    "answer_hi": "localeconv()['p_sign_posn']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'strchr()' function do?",
    "question_hi": "'strchr()' फंक्शन क्या करता है?",
    "options_en": ["Alias of strstr()", "Finds first occurrence of character", "Both A and B", "Character search"],
    "options_hi": ["strstr() का अलियास", "करैक्टर की पहली occurrence ढूंढता है", "A और B दोनों", "करैक्टर खोज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to get locale n sign posn?",
    "question_hi": "लोकेल n_sign_posn प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['n_sign_posn']", "No direct function", "get_n_sign_posn()", "n_sign_posn()"],
    "options_hi": ["localeconv()['n_sign_posn']", "कोई डायरेक्ट फंक्शन नहीं", "get_n_sign_posn()", "n_sign_posn()"],
    "answer_en": "localeconv()['n_sign_posn']",
    "answer_hi": "localeconv()['n_sign_posn']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'strcmp()' function?",
    "question_hi": "'strcmp()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Binary safe string comparison", "String comparison", "Both A and B", "Compare strings"],
    "options_hi": ["बाइनरी सेफ स्ट्रिंग तुलना", "स्ट्रिंग तुलना", "A और B दोनों", "स्ट्रिंग्स compare करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to get locale int frac digits?",
    "question_hi": "लोकेल int_frac_digits प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_frac_digits']", "No direct function", "get_int_frac_digits()", "int_frac_digits()"],
    "options_hi": ["localeconv()['int_frac_digits']", "कोई डायरेक्ट फंक्शन नहीं", "get_int_frac_digits()", "int_frac_digits()"],
    "answer_en": "localeconv()['int_frac_digits']",
    "answer_hi": "localeconv()['int_frac_digits']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'strcoll()' function do?",
    "question_hi": "'strcoll()' फंक्शन क्या करता है?",
    "options_en": ["Locale based string comparison", "Collation compare", "Both A and B", "Locale compare"],
    "options_hi": ["लोकेल आधारित स्ट्रिंग तुलना", "कॉलेशन compare", "A और B दोनों", "लोकेल compare"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to get locale int p cs precedes?",
    "question_hi": "लोकेल int_p_cs_precedes प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_p_cs_precedes']", "No direct function", "get_int_p_cs_precedes()", "int_p_cs_precedes()"],
    "options_hi": ["localeconv()['int_p_cs_precedes']", "कोई डायरेक्ट फंक्शन नहीं", "get_int_p_cs_precedes()", "int_p_cs_precedes()"],
    "answer_en": "localeconv()['int_p_cs_precedes']",
    "answer_hi": "localeconv()['int_p_cs_precedes']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'strcspn()' function?",
    "question_hi": "'strcspn()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Finds length of initial segment not matching mask", "Complement of strspn()", "Both A and B", "Non-matching length"],
    "options_hi": ["मास्क से न मेल खाने वाले इनिशियल सेगमेंट की लंबाई ढूंढता है", "strspn() का complement", "A और B दोनों", "नॉन-मैचिंग लंबाई"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to get locale int p sep by space?",
    "question_hi": "लोकेल int_p_sep_by_space प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_p_sep_by_space']", "No direct function", "get_int_p_sep_by_space()", "int_p_sep_by_space()"],
    "options_hi": ["localeconv()['int_p_sep_by_space']", "कोई डायरेक्ट फंक्शन नहीं", "get_int_p_sep_by_space()", "int_p_sep_by_space()"],
    "answer_en": "localeconv()['int_p_sep_by_space']",
    "answer_hi": "localeconv()['int_p_sep_by_space']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'strip_tags()' function do?",
    "question_hi": "'strip_tags()' फंक्शन क्या करता है?",
    "options_en": ["Strips HTML and PHP tags from string", "Removes tags", "Both A and B", "Tag stripping"],
    "options_hi": ["स्ट्रिंग से HTML और PHP टैग्स स्ट्रिप करता है", "टैग्स रिमूव करता है", "A और B दोनों", "टैग स्ट्रिपिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to get locale int n cs precedes?",
    "question_hi": "लोकेल int_n_cs_precedes प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_n_cs_precedes']", "No direct function", "get_int_n_cs_precedes()", "int_n_cs_precedes()"],
    "options_hi": ["localeconv()['int_n_cs_precedes']", "कोई डायरेक्ट फंक्शन नहीं", "get_int_n_cs_precedes()", "int_n_cs_precedes()"],
    "answer_en": "localeconv()['int_n_cs_precedes']",
    "answer_hi": "localeconv()['int_n_cs_precedes']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'stripcslashes()' function?",
    "question_hi": "'stripcslashes()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Un-quotes string quoted with addcslashes()", "Removes C-style slashes", "Both A and B", "C-style unescape"],
    "options_hi": ["addcslashes() से कोट की गई स्ट्रिंग को अन-कोट करता है", "C-स्टाइल स्लैशेस रिमूव करता है", "A और B दोनों", "C-स्टाइल unescape"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to get locale int n sep by space?",
    "question_hi": "लोकेल int_n_sep_by_space प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_n_sep_by_space']", "No direct function", "get_int_n_sep_by_space()", "int_n_sep_by_space()"],
    "options_hi": ["localeconv()['int_n_sep_by_space']", "कोई डायरेक्ट फंक्शन नहीं", "get_int_n_sep_by_space()", "int_n_sep_by_space()"],
    "answer_en": "localeconv()['int_n_sep_by_space']",
    "answer_hi": "localeconv()['int_n_sep_by_space']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'stripos()' function do?",
    "question_hi": "'stripos()' फंक्शन क्या करता है?",
    "options_en": ["Case-insensitive strpos()", "Finds position ignoring case", "Both A and B", "Case-insensitive position"],
    "options_hi": ["केस-इनसेंसिटिव strpos()", "केस को नजरअंदाज करते हुए position ढूंढता है", "A और B दोनों", "केस-इनसेंसिटिव position"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to get locale int p sign posn?",
    "question_hi": "लोकेल int_p_sign_posn प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_p_sign_posn']", "No direct function", "get_int_p_sign_posn()", "int_p_sign_posn()"],
    "options_hi": ["localeconv()['int_p_sign_posn']", "कोई डायरेक्ट फंक्शन नहीं", "get_int_p_sign_posn()", "int_p_sign_posn()"],
    "answer_en": "localeconv()['int_p_sign_posn']",
    "answer_hi": "localeconv()['int_p_sign_posn']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'stripslashes()' function?",
    "question_hi": "'stripslashes()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Un-quotes quoted string", "Removes backslashes", "Both A and B", "Unescape string"],
    "options_hi": ["कोट की गई स्ट्रिंग को अन-कोट करता है", "बैकस्लैशेस रिमूव करता है", "A और B दोनों", "स्ट्रिंग unescape करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to get locale int n sign posn?",
    "question_hi": "लोकेल int_n_sign_posn प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()['int_n_sign_posn']", "No direct function", "get_int_n_sign_posn()", "int_n_sign_posn()"],
    "options_hi": ["localeconv()['int_n_sign_posn']", "कोई डायरेक्ट फंक्शन नहीं", "get_int_n_sign_posn()", "int_n_sign_posn()"],
    "answer_en": "localeconv()['int_n_sign_posn']",
    "answer_hi": "localeconv()['int_n_sign_posn']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'stristr()' function do?",
    "question_hi": "'stristr()' फंक्शन क्या करता है?",
    "options_en": ["Case-insensitive strstr()", "Finds substring ignoring case", "Both A and B", "Case-insensitive strstr"],
    "options_hi": ["केस-इनसेंसिटिव strstr()", "केस को नजरअंदाज करते हुए सबस्ट्रिंग ढूंढता है", "A और B दोनों", "केस-इनसेंसिटिव strstr"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to get all locale information?",
    "question_hi": "सभी लोकेल जानकारी प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["localeconv()", "setlocale() with LC_ALL", "Both A and B", "get_locale_info()"],
    "options_hi": ["localeconv()", "LC_ALL के साथ setlocale()", "A और B दोनों", "get_locale_info()"],
    "answer_en": "localeconv()",
    "answer_hi": "localeconv()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'strlen()' function?",
    "question_hi": "'strlen()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns string length", "String length in bytes", "Both A and B", "Length of string"],
    "options_hi": ["स्ट्रिंग लंबाई रिटर्न करता है", "बाइट्स में स्ट्रिंग लंबाई", "A और B दोनों", "स्ट्रिंग की लंबाई"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to set locale category?",
    "question_hi": "लोकेल कैटेगरी सेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale() with category parameter", "locale_set_category()", "set_locale_category()", "category_locale()"],
    "options_hi": ["कैटेगरी पैरामीटर के साथ setlocale()", "locale_set_category()", "set_locale_category()", "category_locale()"],
    "answer_en": "setlocale() with category parameter",
    "answer_hi": "कैटेगरी पैरामीटर के साथ setlocale()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'strnatcasecmp()' function do?",
    "question_hi": "'strnatcasecmp()' फंक्शन क्या करता है?",
    "options_en": ["Case-insensitive natural order comparison", "Natural compare ignoring case", "Both A and B", "Case-insensitive natural"],
    "options_hi": ["केस-इनसेंसिटिव नेचुरल ऑर्डर तुलना", "केस को नजरअंदाज करते हुए नेचुरल compare", "A और B दोनों", "केस-इनसेंसिटिव नेचुरल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to get current locale category?",
    "question_hi": "करंट लोकेल कैटेगरी प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale(category, null)", "get_locale_category()", "current_locale_category()", "locale_get_category()"],
    "options_hi": ["setlocale(category, null)", "get_locale_category()", "current_locale_category()", "locale_get_category()"],
    "answer_en": "setlocale(category, null)",
    "answer_hi": "setlocale(category, null)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'strnatcmp()' function?",
    "question_hi": "'strnatcmp()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Natural order string comparison", "Human sorting compare", "Both A and B", "Natural compare"],
    "options_hi": ["नेचुरल ऑर्डर स्ट्रिंग तुलना", "ह्यूमन सॉर्टिंग compare", "A और B दोनों", "नेचुरल compare"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to check if locale is available?",
    "question_hi": "चेक करने के लिए कि लोकेल उपलब्ध है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale() returns false if not available", "No direct function", "locale_available()", "check_locale()"],
    "options_hi": ["setlocale() false रिटर्न करता है अगर उपलब्ध नहीं है", "कोई डायरेक्ट फंक्शन नहीं", "locale_available()", "check_locale()"],
    "answer_en": "setlocale() returns false if not available",
    "answer_hi": "setlocale() false रिटर्न करता है अगर उपलब्ध नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'strncasecmp()' function do?",
    "question_hi": "'strncasecmp()' फंक्शन क्या करता है?",
    "options_en": ["Case-insensitive comparison of first n characters", "Compare first n chars ignoring case", "Both A and B", "Case-insensitive n compare"],
    "options_hi": ["पहले n करैक्टर्स की केस-इनसेंसिटिव तुलना", "केस को नजरअंदाज करते हुए पहले n chars compare करें", "A और B दोनों", "केस-इनसेंसिटिव n compare"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to restore original locale?",
    "question_hi": "ओरिजिनल लोकेल restore करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale() with saved value", "No direct function", "restore_locale()", "locale_restore()"],
    "options_hi": ["सेव्ड वैल्यू के साथ setlocale()", "कोई डायरेक्ट फंक्शन नहीं", "restore_locale()", "locale_restore()"],
    "answer_en": "setlocale() with saved value",
    "answer_hi": "सेव्ड वैल्यू के साथ setlocale()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'strncmp()' function?",
    "question_hi": "'strncmp()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Binary safe comparison of first n characters", "Compare first n chars", "Both A and B", "First n comparison"],
    "options_hi": ["पहले n करैक्टर्स की बाइनरी सेफ तुलना", "पहले n chars compare करें", "A और B दोनों", "पहले n तुलना"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used for locale-aware string comparison?",
    "question_hi": "लोकेल-अवेयर स्ट्रिंग तुलना के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["strcoll()", "setlocale() then strcmp()", "Both A and B", "locale_strcmp()"],
    "options_hi": ["strcoll()", "setlocale() फिर strcmp()", "A और B दोनों", "locale_strcmp()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'strpbrk()' function do?",
    "question_hi": "'strpbrk()' फंक्शन क्या करता है?",
    "options_en": ["Searches string for any of set of characters", "Find any character from set", "Both A and B", "Character set search"],
    "options_hi": ["करैक्टर्स के सेट में से किसी के लिए स्ट्रिंग खोजता है", "सेट से कोई भी करैक्टर ढूंढें", "A और B दोनों", "करैक्टर सेट खोज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used for locale-aware sorting?",
    "question_hi": "लोकेल-अवेयर सॉर्टिंग के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale() then sort() with SORT_LOCALE_STRING", "No direct function", "locale_sort()", "sort_locale()"],
    "options_hi": ["setlocale() फिर SORT_LOCALE_STRING के साथ sort()", "कोई डायरेक्ट फंक्शन नहीं", "locale_sort()", "sort_locale()"],
    "answer_en": "setlocale() then sort() with SORT_LOCALE_STRING",
    "answer_hi": "setlocale() फिर SORT_LOCALE_STRING के साथ sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'strpos()' function?",
    "question_hi": "'strpos()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Finds position of first occurrence of substring", "Substring position", "Both A and B", "Find position"],
    "options_hi": ["सबस्ट्रिंग की पहली occurrence की position ढूंढता है", "सबस्ट्रिंग position", "A और B दोनों", "position ढूंढें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used for locale-aware case conversion?",
    "question_hi": "लोकेल-अवेयर केस कन्वर्शन के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mb_strtolower() with locale", "setlocale() then strtolower()", "Both A and B", "locale_case()"],
    "options_hi": ["लोकेल के साथ mb_strtolower()", "setlocale() फिर strtolower()", "A और B दोनों", "locale_case()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'strrchr()' function do?",
    "question_hi": "'strrchr()' फंक्शन क्या करता है?",
    "options_en": ["Finds last occurrence of character", "Last character occurrence", "Both A and B", "Reverse character search"],
    "options_hi": ["करैक्टर की आखिरी occurrence ढूंढता है", "आखिरी करैक्टर occurrence", "A और B दोनों", "रिवर्स करैक्टर खोज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to get default locale?",
    "question_hi": "डिफॉल्ट लोकेल प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale(LC_ALL, \"\")", "No direct function", "get_default_locale()", "default_locale()"],
    "options_hi": ["setlocale(LC_ALL, \"\")", "कोई डायरेक्ट फंक्शन नहीं", "get_default_locale()", "default_locale()"],
    "answer_en": "setlocale(LC_ALL, \"\")",
    "answer_hi": "setlocale(LC_ALL, \"\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'strrev()' function?",
    "question_hi": "'strrev()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Reverses string", "String reversal", "Both A and B", "Reverse string"],
    "options_hi": ["स्ट्रिंग को उलट देता है", "स्ट्रिंग reversal", "A और B दोनों", "स्ट्रिंग उलटें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to get system locale?",
    "question_hi": "सिस्टम लोकेल प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale(LC_ALL, null)", "No direct function", "get_system_locale()", "system_locale()"],
    "options_hi": ["setlocale(LC_ALL, null)", "कोई डायरेक्ट फंक्शन नहीं", "get_system_locale()", "system_locale()"],
    "answer_en": "setlocale(LC_ALL, null)",
    "answer_hi": "setlocale(LC_ALL, null)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'strripos()' function do?",
    "question_hi": "'strripos()' फंक्शन क्या करता है?",
    "options_en": ["Case-insensitive strrpos()", "Finds last position ignoring case", "Both A and B", "Case-insensitive last position"],
    "options_hi": ["केस-इनसेंसिटिव strrpos()", "केस को नजरअंदाज करते हुए आखिरी position ढूंढता है", "A और B दोनों", "केस-इनसेंसिटिव आखिरी position"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  }
]

// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};