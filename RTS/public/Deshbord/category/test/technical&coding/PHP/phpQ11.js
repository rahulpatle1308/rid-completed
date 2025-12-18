const questions = [
  {
    "num": 1,
    "question_en": "Which function is used to restore default locale?",
    "question_hi": "डिफॉल्ट लोकेल restore करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["setlocale(LC_ALL, \"C\")", "restore_locale_default()", "locale_restore_default()", "default_locale_restore()"],
    "options_hi": ["setlocale(LC_ALL, \"C\")", "restore_locale_default()", "locale_restore_default()", "default_locale_restore()"],
    "answer_en": "setlocale(LC_ALL, \"C\")",
    "answer_hi": "setlocale(LC_ALL, \"C\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'strrpos()' function do?",
    "question_hi": "'strrpos()' फंक्शन क्या करता है?",
    "options_en": ["Finds position of last occurrence of substring", "Last substring position", "Both A and B", "Reverse position search"],
    "options_hi": ["सबस्ट्रिंग की आखिरी occurrence की position ढूंढता है", "आखिरी सबस्ट्रिंग position", "A और B दोनों", "रिवर्स position खोज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to check if a value is infinite?",
    "question_hi": "चेक करने के लिए कि वैल्यू इनफिनिट है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_infinite()", "infinite()", "is_inf()", "check_infinite()"],
    "options_hi": ["is_infinite()", "infinite()", "is_inf()", "check_infinite()"],
    "answer_en": "is_infinite()",
    "answer_hi": "is_infinite()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'strspn()' function?",
    "question_hi": "'strspn()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Finds length of initial segment matching mask", "Matching segment length", "Both A and B", "Initial match length"],
    "options_hi": ["मास्क से मेल खाने वाले इनिशियल सेगमेंट की लंबाई ढूंढता है", "मैचिंग सेगमेंट लंबाई", "A और B दोनों", "इनिशियल मैच लंबाई"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to check if a value is finite?",
    "question_hi": "चेक करने के लिए कि वैल्यू फाइनाइट है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_finite()", "finite()", "is_fin()", "check_finite()"],
    "options_hi": ["is_finite()", "finite()", "is_fin()", "check_finite()"],
    "answer_en": "is_finite()",
    "answer_hi": "is_finite()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'strstr()' function do?",
    "question_hi": "'strstr()' फंक्शन क्या करता है?",
    "options_en": ["Finds first occurrence of substring", "Substring search", "Both A and B", "Find substring"],
    "options_hi": ["सबस्ट्रिंग की पहली occurrence ढूंढता है", "सबस्ट्रिंग खोज", "A और B दोनों", "सबस्ट्रिंग ढूंढें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to check if a value is NaN?",
    "question_hi": "चेक करने के लिए कि वैल्यू NaN है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_nan()", "nan()", "is_not_a_number()", "check_nan()"],
    "options_hi": ["is_nan()", "nan()", "is_not_a_number()", "check_nan()"],
    "answer_en": "is_nan()",
    "answer_hi": "is_nan()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'strtok()' function?",
    "question_hi": "'strtok()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Tokenizes string", "String tokenization", "Both A and B", "Token string"],
    "options_hi": ["स्ट्रिंग को टोकनाइज करता है", "स्ट्रिंग टोकनाइजेशन", "A और B दोनों", "टोकन स्ट्रिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to get the absolute value?",
    "question_hi": "एब्सोल्यूट वैल्यू प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["abs()", "absolute()", "abs_val()", "get_absolute()"],
    "options_hi": ["abs()", "absolute()", "abs_val()", "get_absolute()"],
    "answer_en": "abs()",
    "answer_hi": "abs()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'strtolower()' function do?",
    "question_hi": "'strtolower()' फंक्शन क्या करता है?",
    "options_en": ["Converts string to lowercase", "Lowercase conversion", "Both A and B", "Make lowercase"],
    "options_hi": ["स्ट्रिंग को लोअरकेस में कन्वर्ट करता है", "लोअरकेस कन्वर्शन", "A और B दोनों", "लोअरकेस बनाएं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to get the arc cosine?",
    "question_hi": "आर्क कोसाइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["acos()", "arccos()", "arc_cosine()", "get_acos()"],
    "options_hi": ["acos()", "arccos()", "arc_cosine()", "get_acos()"],
    "answer_en": "acos()",
    "answer_hi": "acos()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'strtoupper()' function?",
    "question_hi": "'strtoupper()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts string to uppercase", "Uppercase conversion", "Both A and B", "Make uppercase"],
    "options_hi": ["स्ट्रिंग को अपरकेस में कन्वर्ट करता है", "अपरकेस कन्वर्शन", "A और B दोनों", "अपरकेस बनाएं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to get the inverse hyperbolic cosine?",
    "question_hi": "इनवर्स हाइपरबोलिक कोसाइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["acosh()", "arcosh()", "inverse_hyperbolic_cosine()", "get_acosh()"],
    "options_hi": ["acosh()", "arcosh()", "inverse_hyperbolic_cosine()", "get_acosh()"],
    "answer_en": "acosh()",
    "answer_hi": "acosh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'strtr()' function do?",
    "question_hi": "'strtr()' फंक्शन क्या करता है?",
    "options_en": ["Translates characters or replaces substrings", "Character translation", "Both A and B", "Translate string"],
    "options_hi": ["करैक्टर्स ट्रांसलेट करता है या सबस्ट्रिंग्स रिप्लेस करता है", "करैक्टर ट्रांसलेशन", "A और B दोनों", "स्ट्रिंग ट्रांसलेट करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to get the arc sine?",
    "question_hi": "आर्क साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["asin()", "arcsin()", "arc_sine()", "get_asin()"],
    "options_hi": ["asin()", "arcsin()", "arc_sine()", "get_asin()"],
    "answer_en": "asin()",
    "answer_hi": "asin()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'substr()' function?",
    "question_hi": "'substr()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns part of string", "String substring", "Both A and B", "Extract substring"],
    "options_hi": ["स्ट्रिंग का हिस्सा रिटर्न करता है", "स्ट्रिंग सबस्ट्रिंग", "A और B दोनों", "सबस्ट्रिंग extract करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to get the inverse hyperbolic sine?",
    "question_hi": "इनवर्स हाइपरबोलिक साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["asinh()", "arsinh()", "inverse_hyperbolic_sine()", "get_asinh()"],
    "options_hi": ["asinh()", "arsinh()", "inverse_hyperbolic_sine()", "get_asinh()"],
    "answer_en": "asinh()",
    "answer_hi": "asinh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'substr_compare()' function do?",
    "question_hi": "'substr_compare()' फंक्शन क्या करता है?",
    "options_en": ["Binary safe comparison of two strings from offset", "Compare substrings", "Both A and B", "Substring comparison"],
    "options_hi": ["ऑफसेट से दो स्ट्रिंग्स की बाइनरी सेफ तुलना", "सबस्ट्रिंग्स compare करें", "A और B दोनों", "सबस्ट्रिंग तुलना"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to get the arc tangent?",
    "question_hi": "आर्क टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["atan()", "arctan()", "arc_tangent()", "get_atan()"],
    "options_hi": ["atan()", "arctan()", "arc_tangent()", "get_atan()"],
    "answer_en": "atan()",
    "answer_hi": "atan()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'substr_count()' function?",
    "question_hi": "'substr_count()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Counts number of substring occurrences", "Occurrence counting", "Both A and B", "Count occurrences"],
    "options_hi": ["सबस्ट्रिंग occurrences की संख्या गिनता है", "ऑकरेंस काउंटिंग", "A और B दोनों", "ऑकरेंसेज गिनें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to get the arc tangent of two variables?",
    "question_hi": "दो वेरिएबल्स का आर्क टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["atan2()", "arctan2()", "arc_tangent2()", "get_atan2()"],
    "options_hi": ["atan2()", "arctan2()", "arc_tangent2()", "get_atan2()"],
    "answer_en": "atan2()",
    "answer_hi": "atan2()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'substr_replace()' function do?",
    "question_hi": "'substr_replace()' फंक्शन क्या करता है?",
    "options_en": ["Replaces text within portion of string", "Substring replacement", "Both A and B", "Replace substring"],
    "options_hi": ["स्ट्रिंग के हिस्से के अंदर टेक्स्ट रिप्लेस करता है", "सबस्ट्रिंग रिप्लेसमेंट", "A और B दोनों", "सबस्ट्रिंग रिप्लेस करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to get the inverse hyperbolic tangent?",
    "question_hi": "इनवर्स हाइपरबोलिक टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["atanh()", "artanh()", "inverse_hyperbolic_tangent()", "get_atanh()"],
    "options_hi": ["atanh()", "artanh()", "inverse_hyperbolic_tangent()", "get_atanh()"],
    "answer_en": "atanh()",
    "answer_hi": "atanh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'trim()' function?",
    "question_hi": "'trim()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Strips whitespace from beginning and end of string", "Trim string", "Both A and B", "Remove whitespace"],
    "options_hi": ["स्ट्रिंग की शुरुआत और अंत से व्हाइटस्पेस स्ट्रिप करता है", "स्ट्रिंग ट्रिम करें", "A और B दोनों", "व्हाइटस्पेस रिमूव करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to get the cube root?",
    "question_hi": "क्यूब रूट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["cbrt()", "cube_root()", "root3()", "get_cbrt()"],
    "options_hi": ["cbrt()", "cube_root()", "root3()", "get_cbrt()"],
    "answer_en": "cbrt()",
    "answer_hi": "cbrt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'ucfirst()' function do?",
    "question_hi": "'ucfirst()' फंक्शन क्या करता है?",
    "options_en": ["Makes first character uppercase", "Capitalize first letter", "Both A and B", "First char upper"],
    "options_hi": ["पहला करैक्टर अपरकेस बनाता है", "पहला लेटर कैपिटलाइज करता है", "A और B दोनों", "पहला char अपर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to round fractions up?",
    "question_hi": "फ्रैक्शन्स को अप की ओर राउंड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["ceil()", "ceiling()", "round_up()", "get_ceil()"],
    "options_hi": ["ceil()", "ceiling()", "round_up()", "get_ceil()"],
    "answer_en": "ceil()",
    "answer_hi": "ceil()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'ucwords()' function?",
    "question_hi": "'ucwords()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Uppercases first character of each word", "Title case", "Both A and B", "Capitalize words"],
    "options_hi": ["प्रत्येक शब्द का पहला करैक्टर अपरकेस करता है", "टाइटल केस", "A और B दोनों", "शब्द कैपिटलाइज करें"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to get the cosine?",
    "question_hi": "कोसाइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["cos()", "cosine()", "get_cos()", "cos_func()"],
    "options_hi": ["cos()", "cosine()", "get_cos()", "cos_func()"],
    "answer_en": "cos()",
    "answer_hi": "cos()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'utf8_decode()' function do?",
    "question_hi": "'utf8_decode()' फंक्शन क्या करता है?",
    "options_en": ["Converts UTF-8 string to ISO-8859-1", "UTF-8 decoding", "Both A and B", "UTF-8 to ISO"],
    "options_hi": ["UTF-8 स्ट्रिंग को ISO-8859-1 में कन्वर्ट करता है", "UTF-8 डिकोडिंग", "A और B दोनों", "UTF-8 से ISO"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to get the hyperbolic cosine?",
    "question_hi": "हाइपरबोलिक कोसाइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["cosh()", "hyperbolic_cosine()", "get_cosh()", "cosh_func()"],
    "options_hi": ["cosh()", "hyperbolic_cosine()", "get_cosh()", "cosh_func()"],
    "answer_en": "cosh()",
    "answer_hi": "cosh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'utf8_encode()' function?",
    "question_hi": "'utf8_encode()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts ISO-8859-1 string to UTF-8", "UTF-8 encoding", "Both A and B", "ISO to UTF-8"],
    "options_hi": ["ISO-8859-1 स्ट्रिंग को UTF-8 में कन्वर्ट करता है", "UTF-8 एन्कोडिंग", "A और B दोनों", "ISO से UTF-8"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to convert from degrees to radians?",
    "question_hi": "डिग्री से रेडियन में कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["deg2rad()", "degrees_to_radians()", "deg_to_rad()", "get_radians()"],
    "options_hi": ["deg2rad()", "degrees_to_radians()", "deg_to_rad()", "get_radians()"],
    "answer_en": "deg2rad()",
    "answer_hi": "deg2rad()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'vfprintf()' function do?",
    "question_hi": "'vfprintf()' फंक्शन क्या करता है?",
    "options_en": ["Writes formatted string to stream", "Formatted output to stream", "Both A and B", "Stream formatted print"],
    "options_hi": ["फॉर्मेटेड स्ट्रिंग को स्ट्रीम में लिखता है", "स्ट्रीम में फॉर्मेटेड आउटपुट", "A और B दोनों", "स्ट्रीम फॉर्मेटेड प्रिंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to calculate e raised to a power?",
    "question_hi": "e को पावर तक बढ़ाने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["exp()", "exponential()", "e_power()", "get_exp()"],
    "options_hi": ["exp()", "exponential()", "e_power()", "get_exp()"],
    "answer_en": "exp()",
    "answer_hi": "exp()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'vprintf()' function?",
    "question_hi": "'vprintf()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Outputs formatted string", "Formatted output", "Both A and B", "Print formatted"],
    "options_hi": ["फॉर्मेटेड स्ट्रिंग आउटपुट करता है", "फॉर्मेटेड आउटपुट", "A और B दोनों", "फॉर्मेटेड प्रिंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to calculate e raised to a power minus 1?",
    "question_hi": "e को पावर तक बढ़ाने के लिए माइनस 1 की गणना करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["expm1()", "exp_minus_one()", "e_power_minus1()", "get_expm1()"],
    "options_hi": ["expm1()", "exp_minus_one()", "e_power_minus1()", "get_expm1()"],
    "answer_en": "expm1()",
    "answer_hi": "expm1()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'vsprintf()' function do?",
    "question_hi": "'vsprintf()' फंक्शन क्या करता है?",
    "options_en": ["Returns formatted string", "Formatted string return", "Both A and B", "Return formatted"],
    "options_hi": ["फॉर्मेटेड स्ट्रिंग रिटर्न करता है", "फॉर्मेटेड स्ट्रिंग रिटर्न", "A और B दोनों", "फॉर्मेटेड रिटर्न"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to round fractions down?",
    "question_hi": "फ्रैक्शन्स को डाउन की ओर राउंड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["floor()", "floor_func()", "round_down()", "get_floor()"],
    "options_hi": ["floor()", "floor_func()", "round_down()", "get_floor()"],
    "answer_en": "floor()",
    "answer_hi": "floor()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'wordwrap()' function's fourth parameter?",
    "question_hi": "'wordwrap()' फंक्शन के चौथे पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Cut long words", "Break words", "Both A and B", "Word breaking"],
    "options_hi": ["लॉन्ग वर्ड्स कट करता है", "वर्ड्स ब्रेक करता है", "A और B दोनों", "वर्ड ब्रेकिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to get the remainder of division?",
    "question_hi": "डिवीजन का रिमाइंडर प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["fmod()", "mod()", "remainder()", "get_remainder()"],
    "options_hi": ["fmod()", "mod()", "remainder()", "get_remainder()"],
    "answer_en": "fmod()",
    "answer_hi": "fmod()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'hexdec()' function do?",
    "question_hi": "'hexdec()' फंक्शन क्या करता है?",
    "options_en": ["Converts hexadecimal to decimal", "Hex to decimal", "Both A and B", "Hex conversion"],
    "options_hi": ["हेक्साडेसिमल को डेसीमल में कन्वर्ट करता है", "हेक्स से डेसीमल", "A और B दोनों", "हेक्स कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to get the hypotenuse?",
    "question_hi": "हाइपोटेन्यूस प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["hypot()", "hypotenuse()", "get_hypot()", "calc_hypotenuse()"],
    "options_hi": ["hypot()", "hypotenuse()", "get_hypot()", "calc_hypotenuse()"],
    "answer_en": "hypot()",
    "answer_hi": "hypot()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'html_entity_decode()' function's third parameter?",
    "question_hi": "'html_entity_decode()' फंक्शन के तीसरे पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Character encoding", "Encoding type", "Both A and B", "Charset"],
    "options_hi": ["करैक्टर एन्कोडिंग", "एन्कोडिंग टाइप", "A और B दोनों", "चारसेट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to check if a value is infinite?",
    "question_hi": "चेक करने के लिए कि वैल्यू इनफिनिट है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_infinite()", "infinite_check()", "check_infinite()", "is_inf()"],
    "options_hi": ["is_infinite()", "infinite_check()", "check_infinite()", "is_inf()"],
    "answer_en": "is_infinite()",
    "answer_hi": "is_infinite()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'intdiv()' function do?",
    "question_hi": "'intdiv()' फंक्शन क्या करता है?",
    "options_en": ["Integer division", "Division returning integer", "Both A and B", "Integer quotient"],
    "options_hi": ["इंटीजर डिवीजन", "इंटीजर रिटर्न करते हुए डिवीजन", "A और B दोनों", "इंटीजर quotient"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to check if a value is finite?",
    "question_hi": "चेक करने के लिए कि वैल्यू फाइनाइट है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_finite()", "finite_check()", "check_finite()", "is_fin()"],
    "options_hi": ["is_finite()", "finite_check()", "check_finite()", "is_fin()"],
    "answer_en": "is_finite()",
    "answer_hi": "is_finite()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'lcfirst()' function?",
    "question_hi": "'lcfirst()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Makes first character lowercase", "Lowercase first letter", "Both A and B", "First char lower"],
    "options_hi": ["पहला करैक्टर लोअरकेस बनाता है", "पहला लेटर लोअरकेस", "A और B दोनों", "पहला char लोअर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to check if a value is NaN?",
    "question_hi": "चेक करने के लिए कि वैल्यू NaN है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_nan()", "nan_check()", "check_nan()", "is_not_a_number()"],
    "options_hi": ["is_nan()", "nan_check()", "check_nan()", "is_not_a_number()"],
    "answer_en": "is_nan()",
    "answer_hi": "is_nan()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'log10()' function do?",
    "question_hi": "'log10()' फंक्शन क्या करता है?",
    "options_en": ["Base-10 logarithm", "Logarithm base 10", "Both A and B", "Log10"],
    "options_hi": ["बेस-10 लॉगरिदम", "लॉगरिदम बेस 10", "A और B दोनों", "Log10"],
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