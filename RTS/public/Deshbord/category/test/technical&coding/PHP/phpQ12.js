const questions = [
  {
    "num": 1,
    "question_en": "Which function is used to get the natural logarithm?",
    "question_hi": "नेचुरल लॉगरिदम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["log()", "ln()", "natural_log()", "get_log()"],
    "options_hi": ["log()", "ln()", "natural_log()", "get_log()"],
    "answer_en": "log()",
    "answer_hi": "log()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'log1p()' function do?",
    "question_hi": "'log1p()' फंक्शन क्या करता है?",
    "options_en": ["Returns log(1 + number)", "Natural log of 1 plus number", "Both A and B", "Log1p calculation"],
    "options_hi": ["log(1 + number) रिटर्न करता है", "1 प्लस नंबर का नेचुरल लॉग", "A और B दोनों", "Log1p कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to get the maximum value?",
    "question_hi": "मैक्सिमम वैल्यू प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["max()", "maximum()", "get_max()", "greatest()"],
    "options_hi": ["max()", "maximum()", "get_max()", "greatest()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'octdec()' function?",
    "question_hi": "'octdec()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts octal to decimal", "Octal to decimal conversion", "Both A and B", "Octal conversion"],
    "options_hi": ["ऑक्टल को डेसीमल में कन्वर्ट करता है", "ऑक्टल से डेसीमल कन्वर्शन", "A और B दोनों", "ऑक्टल कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to get the minimum value?",
    "question_hi": "मिनिमम वैल्यू प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["min()", "minimum()", "get_min()", "least()"],
    "options_hi": ["min()", "minimum()", "get_min()", "least()"],
    "answer_en": "min()",
    "answer_hi": "min()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'pi()' function return?",
    "question_hi": "'pi()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Value of π", "Pi constant", "Both A and B", "Pi value"],
    "options_hi": ["π का मान", "Pi कॉन्स्टेंट", "A और B दोनों", "Pi वैल्यू"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to raise a number to a power?",
    "question_hi": "नंबर को पावर तक बढ़ाने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["pow()", "power()", "exponent()", "get_power()"],
    "options_hi": ["pow()", "power()", "exponent()", "get_power()"],
    "answer_en": "pow()",
    "answer_hi": "pow()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'rad2deg()' function?",
    "question_hi": "'rad2deg()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts radians to degrees", "Radians to degrees conversion", "Both A and B", "Radians conversion"],
    "options_hi": ["रेडियन को डिग्री में कन्वर्ट करता है", "रेडियन से डिग्री कन्वर्शन", "A और B दोनों", "रेडियन कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to generate a random integer?",
    "question_hi": "रैंडम इंटीजर जनरेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["rand()", "mt_rand()", "random_int()", "All of the above"],
    "options_hi": ["rand()", "mt_rand()", "random_int()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'round()' function's third parameter do?",
    "question_hi": "'round()' फंक्शन का तीसरा पैरामीटर क्या करता है?",
    "options_en": ["Rounding mode", "Mode constant", "Both A and B", "Round mode"],
    "options_hi": ["राउंडिंग मोड", "मोड कॉन्स्टेंट", "A और B दोनों", "राउंड मोड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to generate a random float?",
    "question_hi": "रैंडम फ्लोट जनरेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["lcg_value()", "mt_rand() / mt_getrandmax()", "random_int(0, PHP_INT_MAX) / PHP_INT_MAX", "All of the above"],
    "options_hi": ["lcg_value()", "mt_rand() / mt_getrandmax()", "random_int(0, PHP_INT_MAX) / PHP_INT_MAX", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'sin()' function?",
    "question_hi": "'sin()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns sine of number", "Sine function", "Both A and B", "Sine calculation"],
    "options_hi": ["नंबर का साइन रिटर्न करता है", "साइन फंक्शन", "A और B दोनों", "साइन कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to seed the random number generator?",
    "question_hi": "रैंडम नंबर जनरेटर को seed करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["srand()", "mt_srand()", "Both srand() and mt_srand()", "random_seed()"],
    "options_hi": ["srand()", "mt_srand()", "srand() और mt_srand() दोनों", "random_seed()"],
    "answer_en": "Both srand() and mt_srand()",
    "answer_hi": "srand() और mt_srand() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'sinh()' function do?",
    "question_hi": "'sinh()' फंक्शन क्या करता है?",
    "options_en": ["Returns hyperbolic sine", "Hyperbolic sine function", "Both A and B", "Sinh calculation"],
    "options_hi": ["हाइपरबोलिक साइन रिटर्न करता है", "हाइपरबोलिक साइन फंक्शन", "A और B दोनों", "Sinh कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to get the square root?",
    "question_hi": "स्क्वायर रूट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["sqrt()", "square_root()", "root()", "get_sqrt()"],
    "options_hi": ["sqrt()", "square_root()", "root()", "get_sqrt()"],
    "answer_en": "sqrt()",
    "answer_hi": "sqrt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'tan()' function?",
    "question_hi": "'tan()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns tangent of number", "Tangent function", "Both A and B", "Tangent calculation"],
    "options_hi": ["नंबर का टेंजेंट रिटर्न करता है", "टेंजेंट फंक्शन", "A और B दोनों", "टेंजेंट कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to seed the Mersenne Twister random generator?",
    "question_hi": "मर्सेन ट्विस्टर रैंडम जनरेटर को seed करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mt_srand()", "srand() for MT", "Both A and B", "mt_seed()"],
    "options_hi": ["mt_srand()", "MT के लिए srand()", "A और B दोनों", "mt_seed()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'tanh()' function do?",
    "question_hi": "'tanh()' फंक्शन क्या करता है?",
    "options_en": ["Returns hyperbolic tangent", "Hyperbolic tangent function", "Both A and B", "Tanh calculation"],
    "options_hi": ["हाइपरबोलिक टेंजेंट रिटर्न करता है", "हाइपरबोलिक टेंजेंट फंक्शन", "A और B दोनों", "Tanh कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to convert a string to base64?",
    "question_hi": "स्ट्रिंग को base64 में कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["base64_encode()", "encode_base64()", "to_base64()", "str_to_base64()"],
    "options_hi": ["base64_encode()", "encode_base64()", "to_base64()", "str_to_base64()"],
    "answer_en": "base64_encode()",
    "answer_hi": "base64_encode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'bindec()' function?",
    "question_hi": "'bindec()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts binary to decimal", "Binary to decimal conversion", "Both A and B", "Binary conversion"],
    "options_hi": ["बाइनरी को डेसीमल में कन्वर्ट करता है", "बाइनरी से डेसीमल कन्वर्शन", "A और B दोनों", "बाइनरी कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to decode base64 string?",
    "question_hi": "base64 स्ट्रिंग डिकोड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["base64_decode()", "decode_base64()", "from_base64()", "str_from_base64()"],
    "options_hi": ["base64_decode()", "decode_base64()", "from_base64()", "str_from_base64()"],
    "answer_en": "base64_decode()",
    "answer_hi": "base64_decode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'decbin()' function do?",
    "question_hi": "'decbin()' फंक्शन क्या करता है?",
    "options_en": ["Converts decimal to binary", "Decimal to binary conversion", "Both A and B", "Decimal to binary"],
    "options_hi": ["डेसीमल को बाइनरी में कन्वर्ट करता है", "डेसीमल से बाइनरी कन्वर्शन", "A और B दोनों", "डेसीमल से बाइनरी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to convert string to hex?",
    "question_hi": "स्ट्रिंग को hex में कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["bin2hex()", "str_to_hex()", "encode_hex()", "hex_encode()"],
    "options_hi": ["bin2hex()", "str_to_hex()", "encode_hex()", "hex_encode()"],
    "answer_en": "bin2hex()",
    "answer_hi": "bin2hex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'dechex()' function?",
    "question_hi": "'dechex()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts decimal to hexadecimal", "Decimal to hex conversion", "Both A and B", "Decimal to hex"],
    "options_hi": ["डेसीमल को हेक्साडेसिमल में कन्वर्ट करता है", "डेसीमल से हेक्स कन्वर्शन", "A और B दोनों", "डेसीमल से हेक्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to decode hex string?",
    "question_hi": "hex स्ट्रिंग डिकोड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["hex2bin()", "hex_decode()", "from_hex()", "str_from_hex()"],
    "options_hi": ["hex2bin()", "hex_decode()", "from_hex()", "str_from_hex()"],
    "answer_en": "hex2bin()",
    "answer_hi": "hex2bin()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'decoct()' function do?",
    "question_hi": "'decoct()' फंक्शन क्या करता है?",
    "options_en": ["Converts decimal to octal", "Decimal to octal conversion", "Both A and B", "Decimal to octal"],
    "options_hi": ["डेसीमल को ऑक्टल में कन्वर्ट करता है", "डेसीमल से ऑक्टल कन्वर्शन", "A और B दोनों", "डेसीमल से ऑक्टल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to encode URL string?",
    "question_hi": "URL स्ट्रिंग एन्कोड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["urlencode()", "encode_url()", "url_encode()", "encodeuri()"],
    "options_hi": ["urlencode()", "encode_url()", "url_encode()", "encodeuri()"],
    "answer_en": "urlencode()",
    "answer_hi": "urlencode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'hexdec()' function?",
    "question_hi": "'hexdec()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts hexadecimal to decimal", "Hex to decimal conversion", "Both A and B", "Hex to decimal"],
    "options_hi": ["हेक्साडेसिमल को डेसीमल में कन्वर्ट करता है", "हेक्स से डेसीमल कन्वर्शन", "A और B दोनों", "हेक्स से डेसीमल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to decode URL string?",
    "question_hi": "URL स्ट्रिंग डिकोड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["urldecode()", "decode_url()", "url_decode()", "decodeuri()"],
    "options_hi": ["urldecode()", "decode_url()", "url_decode()", "decodeuri()"],
    "answer_en": "urldecode()",
    "answer_hi": "urldecode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'octdec()' function do?",
    "question_hi": "'octdec()' फंक्शन क्या करता है?",
    "options_en": ["Converts octal to decimal", "Octal to decimal conversion", "Both A and B", "Octal to decimal"],
    "options_hi": ["ऑक्टल को डेसीमल में कन्वर्ट करता है", "ऑक्टल से डेसीमल कन्वर्शन", "A और B दोनों", "ऑक्टल से डेसीमल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used for raw URL encoding?",
    "question_hi": "raw URL एन्कोडिंग के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["rawurlencode()", "raw_encode_url()", "url_raw_encode()", "encode_raw_url()"],
    "options_hi": ["rawurlencode()", "raw_encode_url()", "url_raw_encode()", "encode_raw_url()"],
    "answer_en": "rawurlencode()",
    "answer_hi": "rawurlencode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'bindec()' function?",
    "question_hi": "'bindec()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts binary string to decimal", "Binary to decimal", "Both A and B", "Binary string conversion"],
    "options_hi": ["बाइनरी स्ट्रिंग को डेसीमल में कन्वर्ट करता है", "बाइनरी से डेसीमल", "A और B दोनों", "बाइनरी स्ट्रिंग कन्वर्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used for raw URL decoding?",
    "question_hi": "raw URL डिकोडिंग के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["rawurldecode()", "raw_decode_url()", "url_raw_decode()", "decode_raw_url()"],
    "options_hi": ["rawurldecode()", "raw_decode_url()", "url_raw_decode()", "decode_raw_url()"],
    "answer_en": "rawurldecode()",
    "answer_hi": "rawurldecode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'decbin()' function do?",
    "question_hi": "'decbin()' फंक्शन क्या करता है?",
    "options_en": ["Converts decimal number to binary string", "Decimal to binary", "Both A and B", "Decimal to binary string"],
    "options_hi": ["डेसीमल नंबर को बाइनरी स्ट्रिंग में कन्वर्ट करता है", "डेसीमल से बाइनरी", "A और B दोनों", "डेसीमल से बाइनरी स्ट्रिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to get Mersenne Twister random max?",
    "question_hi": "मर्सेन ट्विस्टर रैंडम मैक्स प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mt_getrandmax()", "mt_max()", "get_mt_max()", "mt_random_max()"],
    "options_hi": ["mt_getrandmax()", "mt_max()", "get_mt_max()", "mt_random_max()"],
    "answer_en": "mt_getrandmax()",
    "answer_hi": "mt_getrandmax()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'dechex()' function?",
    "question_hi": "'dechex()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts decimal number to hexadecimal string", "Decimal to hex", "Both A and B", "Decimal to hex string"],
    "options_hi": ["डेसीमल नंबर को हेक्साडेसिमल स्ट्रिंग में कन्वर्ट करता है", "डेसीमल से हेक्स", "A और B दोनों", "डेसीमल से हेक्स स्ट्रिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to get random number generator max?",
    "question_hi": "रैंडम नंबर जनरेटर मैक्स प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["getrandmax()", "rand_max()", "random_max()", "get_random_max()"],
    "options_hi": ["getrandmax()", "rand_max()", "random_max()", "get_random_max()"],
    "answer_en": "getrandmax()",
    "answer_hi": "getrandmax()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'decoct()' function do?",
    "question_hi": "'decoct()' फंक्शन क्या करता है?",
    "options_en": ["Converts decimal number to octal string", "Decimal to octal", "Both A and B", "Decimal to octal string"],
    "options_hi": ["डेसीमल नंबर को ऑक्टल स्ट्रिंग में कन्वर्ट करता है", "डेसीमल से ऑक्टल", "A और B दोनों", "डेसीमल से ऑक्टल स्ट्रिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to get the value of π?",
    "question_hi": "π का मान प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["pi()", "M_PI constant", "Both pi() and M_PI", "get_pi()"],
    "options_hi": ["pi()", "M_PI कॉन्स्टेंट", "pi() और M_PI दोनों", "get_pi()"],
    "answer_en": "Both pi() and M_PI",
    "answer_hi": "pi() और M_PI दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'hexdec()' function?",
    "question_hi": "'hexdec()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Converts hexadecimal string to decimal number", "Hex to decimal", "Both A and B", "Hex string to decimal"],
    "options_hi": ["हेक्साडेसिमल स्ट्रिंग को डेसीमल नंबर में कन्वर्ट करता है", "हेक्स से डेसीमल", "A और B दोनों", "हेक्स स्ट्रिंग से डेसीमल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to get the value of e?",
    "question_hi": "e का मान प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["exp(1)", "M_E constant", "Both exp(1) and M_E", "get_e()"],
    "options_hi": ["exp(1)", "M_E कॉन्स्टेंट", "exp(1) और M_E दोनों", "get_e()"],
    "answer_en": "Both exp(1) and M_E",
    "answer_hi": "exp(1) और M_E दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'octdec()' function do?",
    "question_hi": "'octdec()' फंक्शन क्या करता है?",
    "options_en": ["Converts octal string to decimal number", "Octal to decimal", "Both A and B", "Octal string to decimal"],
    "options_hi": ["ऑक्टल स्ट्रिंग को डेसीमल नंबर में कन्वर्ट करता है", "ऑक्टल से डेसीमल", "A और B दोनों", "ऑक्टल स्ट्रिंग से डेसीमल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to get the logarithm base 10?",
    "question_hi": "लॉगरिदम बेस 10 प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["log10()", "log() with base 10", "Both A and B", "get_log10()"],
    "options_hi": ["log10()", "बेस 10 के साथ log()", "A और B दोनों", "get_log10()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'pow()' function?",
    "question_hi": "'pow()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Exponential expression", "Number to power", "Both A and B", "Power calculation"],
    "options_hi": ["एक्सपोनेंशियल एक्सप्रेशन", "नंबर टू पावर", "A और B दोनों", "पावर कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to get the square root of sum of squares?",
    "question_hi": "स्क्वायर्स के योग का स्क्वायर रूट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["hypot()", "sqrt(pow(x, 2) + pow(y, 2))", "Both A and B", "get_hypotenuse()"],
    "options_hi": ["hypot()", "sqrt(pow(x, 2) + pow(y, 2))", "A और B दोनों", "get_hypotenuse()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'sqrt()' function do?",
    "question_hi": "'sqrt()' फंक्शन क्या करता है?",
    "options_en": ["Square root calculation", "Returns square root", "Both A and B", "Root calculation"],
    "options_hi": ["स्क्वायर रूट कैलकुलेशन", "स्क्वायर रूट रिटर्न करता है", "A और B दोनों", "रूट कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used for integer division?",
    "question_hi": "इंटीजर डिवीजन के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["intdiv()", "(int) ($a / $b)", "Both A and B", "integer_divide()"],
    "options_hi": ["intdiv()", "(int) ($a / $b)", "A और B दोनों", "integer_divide()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'fmod()' function?",
    "question_hi": "'fmod()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Floating point remainder", "Modulus for floats", "Both A and B", "Float modulo"],
    "options_hi": ["फ्लोटिंग पॉइंट रिमाइंडर", "फ्लोट्स के लिए मॉड्यूलस", "A और B दोनों", "फ्लोट मॉड्यूलो"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to round to nearest integer?",
    "question_hi": "निकटतम इंटीजर में राउंड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["round()", "intval() with rounding", "Both A and B", "nearest_integer()"],
    "options_hi": ["round()", "राउंडिंग के साथ intval()", "A और B दोनों", "nearest_integer()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'cbrt()' function do?",
    "question_hi": "'cbrt()' फंक्शन क्या करता है?",
    "options_en": ["Cube root calculation", "Returns cube root", "Both A and B", "Cube root"],
    "options_hi": ["क्यूब रूट कैलकुलेशन", "क्यूब रूट रिटर्न करता है", "A और B दोनों", "क्यूब रूट"],
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