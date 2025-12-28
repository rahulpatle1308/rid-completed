const questions = [
  {
    "num": 1,
    "question_en": "Which function is used to get the hyperbolic cosine?",
    "question_hi": "हाइपरबोलिक कोसाइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["cosh()", "hyperbolic_cos()", "hcos()", "get_cosh()"],
    "options_hi": ["cosh()", "hyperbolic_cos()", "hcos()", "get_cosh()"],
    "answer_en": "cosh()",
    "answer_hi": "cosh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'is_finite()' function return for INF?",
    "question_hi": "INF के लिए 'is_finite()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["false", "true", "null", "0"],
    "options_hi": ["false", "true", "null", "0"],
    "answer_en": "false",
    "answer_hi": "false",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to get the hyperbolic sine?",
    "question_hi": "हाइपरबोलिक साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["sinh()", "hyperbolic_sin()", "hsin()", "get_sinh()"],
    "options_hi": ["sinh()", "hyperbolic_sin()", "hsin()", "get_sinh()"],
    "answer_en": "sinh()",
    "answer_hi": "sinh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'is_infinite()' function?",
    "question_hi": "'is_infinite()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Checks if value is infinite", "INF check", "Both A and B", "Infinite check"],
    "options_hi": ["चेक करता है कि वैल्यू इनफिनिट है", "INF चेक", "A और B दोनों", "इनफिनिट चेक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to get the hyperbolic tangent?",
    "question_hi": "हाइपरबोलिक टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["tanh()", "hyperbolic_tan()", "htan()", "get_tanh()"],
    "options_hi": ["tanh()", "hyperbolic_tan()", "htan()", "get_tanh()"],
    "answer_en": "tanh()",
    "answer_hi": "tanh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'is_nan()' function return for sqrt(-1)?",
    "question_hi": "sqrt(-1) के लिए 'is_nan()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["true", "false", "null", "0"],
    "options_hi": ["true", "false", "null", "0"],
    "answer_en": "true",
    "answer_hi": "true",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to get the inverse hyperbolic cosine?",
    "question_hi": "इनवर्स हाइपरबोलिक कोसाइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["acosh()", "inverse_hyperbolic_cos()", "arcosh()", "get_acosh()"],
    "options_hi": ["acosh()", "inverse_hyperbolic_cos()", "arcosh()", "get_acosh()"],
    "answer_en": "acosh()",
    "answer_hi": "acosh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'lcg_value()' function?",
    "question_hi": "'lcg_value()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Generates pseudo-random float", "Linear congruential generator", "Both A and B", "Random float"],
    "options_hi": ["स्यूडो-रैंडम फ्लोट जनरेट करता है", "लीनियर कॉन्ग्रुएंशियल जनरेटर", "A और B दोनों", "रैंडम फ्लोट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to get the inverse hyperbolic sine?",
    "question_hi": "इनवर्स हाइपरबोलिक साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["asinh()", "inverse_hyperbolic_sin()", "arsinh()", "get_asinh()"],
    "options_hi": ["asinh()", "inverse_hyperbolic_sin()", "arsinh()", "get_asinh()"],
    "answer_en": "asinh()",
    "answer_hi": "asinh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'log1p()' function calculate?",
    "question_hi": "'log1p()' फंक्शन क्या कैलकुलेट करता है?",
    "options_en": ["log(1 + number)", "Natural log of 1 plus number", "Both A and B", "Log plus one"],
    "options_hi": ["log(1 + number)", "1 प्लस नंबर का नेचुरल लॉग", "A और B दोनों", "लॉग प्लस वन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to get the inverse hyperbolic tangent?",
    "question_hi": "इनवर्स हाइपरबोलिक टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["atanh()", "inverse_hyperbolic_tan()", "artanh()", "get_atanh()"],
    "options_hi": ["atanh()", "inverse_hyperbolic_tan()", "artanh()", "get_atanh()"],
    "answer_en": "atanh()",
    "answer_hi": "atanh()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'max()' function with arrays?",
    "question_hi": "ऐरे के साथ 'max()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns highest value in array", "Array maximum", "Both A and B", "Array max"],
    "options_hi": ["ऐरे में सबसे ऊंची वैल्यू रिटर्न करता है", "ऐरे मैक्सिमम", "A और B दोनों", "ऐरे मैक्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to get the arc cosine?",
    "question_hi": "आर्क कोसाइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["acos()", "arc_cos()", "inverse_cosine()", "get_acos()"],
    "options_hi": ["acos()", "arc_cos()", "inverse_cosine()", "get_acos()"],
    "answer_en": "acos()",
    "answer_hi": "acos()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'min()' function return for empty array?",
    "question_hi": "खाली ऐरे के लिए 'min()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["false", "null", "0", "empty array"],
    "options_hi": ["false", "null", "0", "खाली ऐरे"],
    "answer_en": "false",
    "answer_hi": "false",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to get the arc sine?",
    "question_hi": "आर्क साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["asin()", "arc_sin()", "inverse_sine()", "get_asin()"],
    "options_hi": ["asin()", "arc_sin()", "inverse_sine()", "get_asin()"],
    "answer_en": "asin()",
    "answer_hi": "asin()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'mt_getrandmax()' function?",
    "question_hi": "'mt_getrandmax()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns maximum value from mt_rand()", "MT random max", "Both A and B", "Mersenne Twister max"],
    "options_hi": ["mt_rand() से मैक्सिमम वैल्यू रिटर्न करता है", "MT रैंडम मैक्स", "A और B दोनों", "मर्सेन ट्विस्टर मैक्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to get the arc tangent?",
    "question_hi": "आर्क टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["atan()", "arc_tan()", "inverse_tangent()", "get_atan()"],
    "options_hi": ["atan()", "arc_tan()", "inverse_tangent()", "get_atan()"],
    "answer_en": "atan()",
    "answer_hi": "atan()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'mt_rand()' function's parameters represent?",
    "question_hi": "'mt_rand()' फंक्शन के पैरामीटर्स क्या प्रतिनिधित्व करते हैं?",
    "options_en": ["Minimum and maximum range", "Range for random number", "Both A and B", "Random range"],
    "options_hi": ["मिनिमम और मैक्सिमम रेंज", "रैंडम नंबर के लिए रेंज", "A और B दोनों", "रैंडम रेंज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to get the arc tangent of two variables?",
    "question_hi": "दो वेरिएबल्स का आर्क टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["atan2()", "arc_tan2()", "inverse_tangent2()", "get_atan2()"],
    "options_hi": ["atan2()", "arc_tan2()", "inverse_tangent2()", "get_atan2()"],
    "answer_en": "atan2()",
    "answer_hi": "atan2()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'mt_srand()' function?",
    "question_hi": "'mt_srand()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Seeds Mersenne Twister random generator", "MT seed", "Both A and B", "Mersenne Twister seed"],
    "options_hi": ["मर्सेन ट्विस्टर रैंडम जनरेटर को सीड करता है", "MT सीड", "A और B दोनों", "मर्सेन ट्विस्टर सीड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
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
    "num": 22,
    "question_en": "What does the 'pi()' function return?",
    "question_hi": "'pi()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Value of π", "3.1415926535898", "Both A and B", "Pi constant"],
    "options_hi": ["π का मान", "3.1415926535898", "A और B दोनों", "Pi कॉन्स्टेंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
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
    "num": 24,
    "question_en": "What is the purpose of the 'pow()' function's parameters?",
    "question_hi": "'pow()' फंक्शन के पैरामीटर्स का उद्देश्य क्या है?",
    "options_en": ["Base and exponent", "Number and power", "Both A and B", "Power calculation"],
    "options_hi": ["बेस और एक्सपोनेंट", "नंबर और पावर", "A और B दोनों", "पावर कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to get the exponential function?",
    "question_hi": "एक्सपोनेंशियल फंक्शन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["exp()", "exponential()", "e_power()", "get_exp()"],
    "options_hi": ["exp()", "exponential()", "e_power()", "get_exp()"],
    "answer_en": "exp()",
    "answer_hi": "exp()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'rad2deg()' function convert?",
    "question_hi": "'rad2deg()' फंक्शन क्या कन्वर्ट करता है?",
    "options_en": ["Radians to degrees", "Angle conversion", "Both A and B", "Radians conversion"],
    "options_hi": ["रेडियन को डिग्री में", "एंगल कन्वर्शन", "A और B दोनों", "रेडियन कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to get exp(number) - 1?",
    "question_hi": "exp(number) - 1 प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["expm1()", "exp_minus_one()", "e_power_minus1()", "get_expm1()"],
    "options_hi": ["expm1()", "exp_minus_one()", "e_power_minus1()", "get_expm1()"],
    "answer_en": "expm1()",
    "answer_hi": "expm1()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'rand()' function without parameters?",
    "question_hi": "बिना पैरामीटर्स के 'rand()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns random integer", "Random number between 0 and getrandmax()", "Both A and B", "Random integer"],
    "options_hi": ["रैंडम इंटीजर रिटर्न करता है", "0 और getrandmax() के बीच रैंडम नंबर", "A और B दोनों", "रैंडम इंटीजर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to round fractions down?",
    "question_hi": "फ्रैक्शन्स को डाउन की ओर राउंड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["floor()", "round_down()", "intval() with floor", "get_floor()"],
    "options_hi": ["floor()", "round_down()", "फ्लोर के साथ intval()", "get_floor()"],
    "answer_en": "floor()",
    "answer_hi": "floor()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'round()' function's mode parameter do?",
    "question_hi": "'round()' फंक्शन का मोड पैरामीटर क्या करता है?",
    "options_en": ["Specifies rounding mode", "PHP_ROUND constants", "Both A and B", "Rounding behavior"],
    "options_hi": ["राउंडिंग मोड स्पेसिफाई करता है", "PHP_ROUND कॉन्स्टेंट्स", "A और B दोनों", "राउंडिंग बिहेवियर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to get floating point remainder?",
    "question_hi": "फ्लोटिंग पॉइंट रिमाइंडर प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["fmod()", "float_mod()", "remainder_float()", "get_fmod()"],
    "options_hi": ["fmod()", "float_mod()", "remainder_float()", "get_fmod()"],
    "answer_en": "fmod()",
    "answer_hi": "fmod()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'srand()' function?",
    "question_hi": "'srand()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Seeds random number generator", "Random seed", "Both A and B", "Seed random"],
    "options_hi": ["रैंडम नंबर जनरेटर को सीड करता है", "रैंडम सीड", "A और B दोनों", "रैंडम सीड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to get the hypotenuse?",
    "question_hi": "हाइपोटेन्यूस प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["hypot()", "hypotenuse()", "sqrt(x*x + y*y)", "All of the above"],
    "options_hi": ["hypot()", "hypotenuse()", "sqrt(x*x + y*y)", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'sqrt()' function return for negative numbers?",
    "question_hi": "नेगेटिव नंबर्स के लिए 'sqrt()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["NAN", "false", "0", "Exception"],
    "options_hi": ["NAN", "false", "0", "एक्सेप्शन"],
    "answer_en": "NAN",
    "answer_hi": "NAN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used for integer division?",
    "question_hi": "इंटीजर डिवीजन के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["intdiv()", "floor division with (int)", "Both A and B", "integer_division()"],
    "options_hi": ["intdiv()", "(int) के साथ फ्लोर डिवीजन", "A और B दोनों", "integer_division()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'getrandmax()' function?",
    "question_hi": "'getrandmax()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns maximum random value", "Random max value", "Both A and B", "Max random"],
    "options_hi": ["मैक्सिमम रैंडम वैल्यू रिटर्न करता है", "रैंडम मैक्स वैल्यू", "A और B दोनों", "मैक्स रैंडम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to get the natural logarithm?",
    "question_hi": "नेचुरल लॉगरिदम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["log()", "ln()", "Both A and B", "natural_log()"],
    "options_hi": ["log()", "ln()", "A और B दोनों", "natural_log()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'abs()' function return for negative numbers?",
    "question_hi": "नेगेटिव नंबर्स के लिए 'abs()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Positive value", "Absolute value", "Both A and B", "Magnitude"],
    "options_hi": ["पॉजिटिव वैल्यू", "एब्सोल्यूट वैल्यू", "A और B दोनों", "मैग्नीट्यूड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to get base-10 logarithm?",
    "question_hi": "बेस-10 लॉगरिदम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["log10()", "log() with base 10 calculation", "Both A and B", "base10_log()"],
    "options_hi": ["log10()", "बेस 10 कैलकुलेशन के साथ log()", "A और B दोनों", "base10_log()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'ceil()' function?",
    "question_hi": "'ceil()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Rounds fractions up", "Ceiling value", "Both A and B", "Round up"],
    "options_hi": ["फ्रैक्शन्स को अप की ओर राउंड करता है", "सीलिंग वैल्यू", "A और B दोनों", "अप राउंड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to get the sine?",
    "question_hi": "साइन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["sin()", "sine()", "get_sin()", "sin_func()"],
    "options_hi": ["sin()", "sine()", "get_sin()", "sin_func()"],
    "answer_en": "sin()",
    "answer_hi": "sin()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'deg2rad()' function convert?",
    "question_hi": "'deg2rad()' फंक्शन क्या कन्वर्ट करता है?",
    "options_en": ["Degrees to radians", "Angle to radians", "Both A and B", "Degree conversion"],
    "options_hi": ["डिग्री को रेडियन में", "एंगल को रेडियन में", "A और B दोनों", "डिग्री कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to get the tangent?",
    "question_hi": "टेंजेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["tan()", "tangent()", "get_tan()", "tan_func()"],
    "options_hi": ["tan()", "tangent()", "get_tan()", "tan_func()"],
    "answer_en": "tan()",
    "answer_hi": "tan()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'floor()' function?",
    "question_hi": "'floor()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Rounds fractions down", "Floor value", "Both A and B", "Round down"],
    "options_hi": ["फ्रैक्शन्स को डाउन की ओर राउंड करता है", "फ्लोर वैल्यू", "A और B दोनों", "डाउन राउंड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to get the value of π?",
    "question_hi": "π का मान प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["pi()", "M_PI constant", "3.1415926535898", "All of the above"],
    "options_hi": ["pi()", "M_PI कॉन्स्टेंट", "3.1415926535898", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'random_int()' function require?",
    "question_hi": "'random_int()' फंक्शन को क्या आवश्यकता है?",
    "options_en": ["Cryptographically secure random source", "PHP 7.0+", "Both A and B", "Secure random"],
    "options_hi": ["क्रिप्टोग्राफिकली सिक्योर रैंडम सोर्स", "PHP 7.0+", "A और B दोनों", "सिक्योर रैंडम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to get the value of e?",
    "question_hi": "e का मान प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["exp(1)", "M_E constant", "2.718281828459", "All of the above"],
    "options_hi": ["exp(1)", "M_E कॉन्स्टेंट", "2.718281828459", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'round()' function's precision parameter?",
    "question_hi": "'round()' फंक्शन के प्रिसिजन पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Number of decimal places", "Precision digits", "Both A and B", "Decimal precision"],
    "options_hi": ["डेसीमल प्लेसेस की संख्या", "प्रिसिजन डिजिट्स", "A और B दोनों", "डेसीमल प्रिसिजन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used for secure random integers?",
    "question_hi": "सिक्योर रैंडम इंटीजर्स के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["random_int()", "openssl_random_pseudo_bytes()", "Both A and B", "secure_rand()"],
    "options_hi": ["random_int()", "openssl_random_pseudo_bytes()", "A और B दोनों", "secure_rand()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'fmod()' function return for fmod(5.7, 1.3)?",
    "question_hi": "fmod(5.7, 1.3) के लिए 'fmod()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["0.5", "1.3", "0.0", "0.8"],
    "options_hi": ["0.5", "1.3", "0.0", "0.8"],
    "answer_en": "0.5",
    "answer_hi": "0.5",
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