const questions = [
    {
        "num": 1,
        "question_en": "What is the full form of 'C' in C language?",
        "question_hi": "C लैंग्वेज में 'C' का फुल फॉर्म क्या है?",
        "options_en": ["Common", "Computer", "Combined", "No full form"],
        "options_hi": ["कॉमन", "कंप्यूटर", "कंबाइंड", "कोई फुल फॉर्म नहीं"],
        "answer_en": "No full form",
        "answer_hi": "कोई फुल फॉर्म नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "C language was developed for which operating system?",
        "question_hi": "C लैंग्वेज किस ऑपरेटिंग सिस्टम के लिए डेवलप की गई थी?",
        "options_en": ["Windows", "Linux", "UNIX", "DOS"],
        "options_hi": ["विंडोज", "लिनक्स", "यूनिक्स", "डॉस"],
        "answer_en": "UNIX",
        "answer_hi": "यूनिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which book is known as the 'C bible'?",
        "question_hi": "किस बुक को 'C बाइबल' कहा जाता है?",
        "options_en": ["C Programming by Balaguruswamy", "The C Programming Language", "Let Us C", "C in Depth"],
        "options_hi": ["C प्रोग्रामिंग बाई बालागुरुस्वामी", "द सी प्रोग्रामिंग लैंग्वेज", "लेट अस सी", "सी इन डेप्थ"],
        "answer_en": "The C Programming Language",
        "answer_hi": "द सी प्रोग्रामिंग लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Who co-authored 'The C Programming Language' book?",
        "question_hi": "'द सी प्रोग्रामिंग लैंग्वेज' बुक के सह-लेखक कौन हैं?",
        "options_en": ["Dennis Ritchie & Ken Thompson", "Dennis Ritchie & Bjarne Stroustrup", "Ken Thompson & Brian Kernighan", "Dennis Ritchie & Brian Kernighan"],
        "options_hi": ["डेनिस रिची और केन थॉम्पसन", "डेनिस रिची और ब्जार्ने स्ट्रॉव्स्ट्रुप", "केन थॉम्पसन और ब्रायन कर्निघन", "डेनिस रिची और ब्रायन कर्निघन"],
        "answer_en": "Dennis Ritchie & Brian Kernighan",
        "answer_hi": "डेनिस रिची और ब्रायन कर्निघन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the smallest individual unit in a C program?",
        "question_hi": "C प्रोग्राम में सबसे छोटी इकाई क्या है?",
        "options_en": ["Token", "Character", "Word", "Line"],
        "options_hi": ["टोकन", "कैरेक्टर", "वर्ड", "लाइन"],
        "answer_en": "Token",
        "answer_hi": "टोकन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of these is NOT a valid C token?",
        "question_hi": "इनमें से कौन सा वैलिड C टोकन नहीं है?",
        "options_en": ["Keyword", "Identifier", "String", "Comment"],
        "options_hi": ["कीवर्ड", "आइडेंटिफायर", "स्ट्रिंग", "कमेंट"],
        "answer_en": "Comment",
        "answer_hi": "कमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Total number of keywords in standard C (C89)?",
        "question_hi": "स्टैण्डर्ड C (C89) में कितने कीवर्ड होते हैं?",
        "options_en": ["32", "48", "64", "16"],
        "options_hi": ["32", "48", "64", "16"],
        "answer_en": "32",
        "answer_hi": "32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which keyword is used to define constants in C?",
        "question_hi": "C में कॉन्स्टेंट्स डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["constant", "define", "const", "final"],
        "options_hi": ["constant", "define", "const", "final"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the range of 'char' data type?",
        "question_hi": "'char' डेटा टाइप की रेंज क्या है?",
        "options_en": ["-128 to 127", "0 to 255", "Both depending on signed/unsigned", "-32768 to 32767"],
        "options_hi": ["-128 से 127", "0 से 255", "दोनों साइन्ड/अनसाइन्ड पर निर्भर", "-32768 से 32767"],
        "answer_en": "Both depending on signed/unsigned",
        "answer_hi": "दोनों साइन्ड/अनसाइन्ड पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which data type has the largest size?",
        "question_hi": "किस डेटा टाइप का साइज सबसे बड़ा होता है?",
        "options_en": ["int", "float", "double", "long double"],
        "options_hi": ["int", "float", "double", "long double"],
        "answer_en": "long double",
        "answer_hi": "long double",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the size of 'float' data type?",
        "question_hi": "'float' डेटा टाइप का साइज क्या है?",
        "options_en": ["4 bytes", "8 bytes", "2 bytes", "Compiler dependent"],
        "options_hi": ["4 बाइट्स", "8 बाइट्स", "2 बाइट्स", "कंपाइलर पर निर्भर"],
        "answer_en": "4 bytes",
        "answer_hi": "4 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which is a derived data type?",
        "question_hi": "कौन सा डिराइव्ड डेटा टाइप है?",
        "options_en": ["int", "float", "array", "char"],
        "options_hi": ["int", "float", "array", "char"],
        "answer_en": "array",
        "answer_hi": "array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What will be the output: printf('%d', sizeof(3.14));",
        "question_hi": "आउटपुट क्या होगा: printf('%d', sizeof(3.14));",
        "options_en": ["4", "8", "16", "Compiler error"],
        "options_hi": ["4", "8", "16", "कंपाइलर एरर"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which is not a valid integer constant?",
        "question_hi": "कौन सा वैलिड इंटीजर कॉन्स्टेंट नहीं है?",
        "options_en": ["123", "0123", "0x123", "123.0"],
        "options_hi": ["123", "0123", "0x123", "123.0"],
        "answer_en": "123.0",
        "answer_hi": "123.0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What does '0xFF' represent?",
        "question_hi": "'0xFF' क्या रिप्रेजेंट करता है?",
        "options_en": ["Decimal 255", "Octal 255", "Hexadecimal 255", "Binary 255"],
        "options_hi": ["डेसीमल 255", "ऑक्टल 255", "हेक्साडेसिमल 255", "बाइनरी 255"],
        "answer_en": "Hexadecimal 255",
        "answer_hi": "हेक्साडेसिमल 255",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which is a valid floating point constant?",
        "question_hi": "कौन सा वैलिड फ्लोटिंग पॉइंट कॉन्स्टेंट है?",
        "options_en": ["1.2e3", "1.2.3", "e3", "1,234.5"],
        "options_hi": ["1.2e3", "1.2.3", "e3", "1,234.5"],
        "answer_en": "1.2e3",
        "answer_hi": "1.2e3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the default sign of 'char' data type?",
        "question_hi": "'char' डेटा टाइप का डिफॉल्ट साइन क्या है?",
        "options_en": ["signed", "unsigned", "platform dependent", "compiler dependent"],
        "options_hi": ["साइन्ड", "अनसाइन्ड", "प्लेटफॉर्म पर निर्भर", "कंपाइलर पर निर्भर"],
        "answer_en": "compiler dependent",
        "answer_hi": "कंपाइलर पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which operator has the highest precedence?",
        "question_hi": "किस ऑपरेटर की प्रिसीडेंस सबसे ज्यादा होती है?",
        "options_en": ["+", "*", "()", "="],
        "options_hi": ["+", "*", "()", "="],
        "answer_en": "()",
        "answer_hi": "()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the associativity of '=' operator?",
        "question_hi": "'=' ऑपरेटर की असोसिएटिविटी क्या है?",
        "options_en": ["Left to Right", "Right to Left", "No associativity", "Both directions"],
        "options_hi": ["लेफ्ट टू राइट", "राइट टू लेफ्ट", "कोई असोसिएटिविटी नहीं", "दोनों दिशाएँ"],
        "answer_en": "Right to Left",
        "answer_hi": "राइट टू लेफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which is a unary operator?",
        "question_hi": "कौन सा यूनरी ऑपरेटर है?",
        "options_en": ["+", "-", "++", "All of these"],
        "options_hi": ["+", "-", "++", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does 'sizeof' operator return?",
        "question_hi": "'sizeof' ऑपरेटर क्या रिटर्न करता है?",
        "options_en": ["Size in bits", "Size in bytes", "Size in words", "Memory address"],
        "options_hi": ["बिट्स में साइज", "बाइट्स में साइज", "वर्ड्स में साइज", "मेमोरी एड्रेस"],
        "answer_en": "Size in bytes",
        "answer_hi": "बाइट्स में साइज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the output: int a = 5, b = 2; float c = a / b; printf('%f', c);",
        "question_hi": "आउटपुट क्या है: int a = 5, b = 2; float c = a / b; printf('%f', c);",
        "options_en": ["2.5", "2.0", "2", "2.000000"],
        "options_hi": ["2.5", "2.0", "2", "2.000000"],
        "answer_en": "2.000000",
        "answer_hi": "2.000000",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which is the modulus operator?",
        "question_hi": "मॉड्यूलस ऑपरेटर कौन सा है?",
        "options_en": ["%", "/", "//", "mod"],
        "options_hi": ["%", "/", "//", "mod"],
        "answer_en": "%",
        "answer_hi": "%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is 'short' data type?",
        "question_hi": "'short' डेटा टाइप क्या है?",
        "options_en": ["Small integer", "Small float", "Short string", "Short pointer"],
        "options_hi": ["छोटा इंटीजर", "छोटा फ्लोट", "शॉर्ट स्ट्रिंग", "शॉर्ट पॉइंटर"],
        "answer_en": "Small integer",
        "answer_hi": "छोटा इंटीजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does 'unsigned' modifier do?",
        "question_hi": "'unsigned' मॉडिफायर क्या करता है?",
        "options_en": ["Removes sign bit", "Adds sign bit", "Makes variable constant", "Doubles range"],
        "options_hi": ["साइन बिट हटाता है", "साइन बिट जोड़ता है", "वेरिएबल को कॉन्स्टेंट बनाता है", "रेंज डबल करता है"],
        "answer_en": "Removes sign bit",
        "answer_hi": "साइन बिट हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is 'long' data type?",
        "question_hi": "'long' डेटा टाइप क्या है?",
        "options_en": ["Extended integer", "Extended float", "Long string", "Long array"],
        "options_hi": ["एक्सटेंडेड इंटीजर", "एक्सटेंडेड फ्लोट", "लॉन्ग स्ट्रिंग", "लॉन्ग एरे"],
        "answer_en": "Extended integer",
        "answer_hi": "एक्सटेंडेड इंटीजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the range of 'unsigned int'?",
        "question_hi": "'unsigned int' की रेंज क्या है?",
        "options_en": ["0 to 65535", "-32768 to 32767", "0 to 4294967295", "Depends on system"],
        "options_hi": ["0 से 65535", "-32768 से 32767", "0 से 4294967295", "सिस्टम पर निर्भर"],
        "answer_en": "Depends on system",
        "answer_hi": "सिस्टम पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is a 'literal' in C?",
        "question_hi": "C में 'लिटरल' क्या है?",
        "options_en": ["Constant value", "Variable name", "Function name", "Data type"],
        "options_hi": ["कॉन्स्टेंट वैल्यू", "वेरिएबल नाम", "फंक्शन नाम", "डेटा टाइप"],
        "answer_en": "Constant value",
        "answer_hi": "कॉन्स्टेंट वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is 'implicit type conversion'?",
        "question_hi": "'इम्प्लिसिट टाइप कन्वर्जन' क्या है?",
        "options_en": ["Automatic conversion", "Manual conversion", "No conversion", "Error in conversion"],
        "options_hi": ["ऑटोमेटिक कन्वर्जन", "मैनुअल कन्वर्जन", "कोई कन्वर्जन नहीं", "कन्वर्जन में एरर"],
        "answer_en": "Automatic conversion",
        "answer_hi": "ऑटोमेटिक कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is 'explicit type conversion'?",
        "question_hi": "'एक्सप्लिसिट टाइप कन्वर्जन' क्या है?",
        "options_en": ["Type casting", "Automatic conversion", "Compiler conversion", "Runtime conversion"],
        "options_hi": ["टाइप कास्टिंग", "ऑटोमेटिक कन्वर्जन", "कंपाइलर कन्वर्जन", "रनटाइम कन्वर्जन"],
        "answer_en": "Type casting",
        "answer_hi": "टाइप कास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which operator is used for type casting?",
        "question_hi": "टाइप कास्टिंग के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["()", "[]", "{}", "<>"],
        "options_hi": ["()", "[]", "{}", "<>"],
        "answer_en": "()",
        "answer_hi": "()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the output: int x = 300; char c = x; printf('%d', c);",
        "question_hi": "आउटपुट क्या है: int x = 300; char c = x; printf('%d', c);",
        "options_en": ["300", "44", "Error", "Garbage value"],
        "options_hi": ["300", "44", "एरर", "गार्बेज वैल्यू"],
        "answer_en": "44",
        "answer_hi": "44",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which is a valid variable declaration?",
        "question_hi": "कौन सा वैलिड वेरिएबल डिक्लेरेशन है?",
        "options_en": ["int 2var;", "int var-name;", "int var name;", "int _var;"],
        "options_hi": ["int 2var;", "int var-name;", "int var name;", "int _var;"],
        "answer_en": "int _var;",
        "answer_hi": "int _var;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is a 'constant variable'?",
        "question_hi": "'कॉन्स्टेंट वेरिएबल' क्या है?",
        "options_en": ["Variable that cannot change", "Variable that changes", "Static variable", "Global variable"],
        "options_hi": ["वेरिएबल जो चेंज नहीं हो सकता", "वेरिएबल जो चेंज होता है", "स्टेटिक वेरिएबल", "ग्लोबल वेरिएबल"],
        "answer_en": "Variable that cannot change",
        "answer_hi": "वेरिएबल जो चेंज नहीं हो सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does 'volatile' keyword indicate?",
        "question_hi": "'volatile' कीवर्ड क्या इंडिकेट करता है?",
        "options_en": ["Value may change unexpectedly", "Value is constant", "Value is important", "Value is temporary"],
        "options_hi": ["वैल्यू अनएक्सपेक्टेडली चेंज हो सकती है", "वैल्यू कॉन्स्टेंट है", "वैल्यू इम्पोर्टेन्ट है", "वैल्यू टेंपरेरी है"],
        "answer_en": "Value may change unexpectedly",
        "answer_hi": "वैल्यू अनएक्सपेक्टेडली चेंज हो सकती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is 'scope' of a variable?",
        "question_hi": "वेरिएबल का 'स्कोप' क्या है?",
        "options_en": ["Where it can be accessed", "Its size", "Its type", "Its value"],
        "options_hi": ["इसे कहाँ एक्सेस किया जा सकता है", "इसका साइज", "इसका टाइप", "इसकी वैल्यू"],
        "answer_en": "Where it can be accessed",
        "answer_hi": "इसे कहाँ एक्सेस किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'lifetime' of a variable?",
        "question_hi": "वेरिएबल की 'लाइफटाइम' क्या है?",
        "options_en": ["Duration it exists", "Its size", "Its scope", "Its value"],
        "options_hi": ["कितनी देर तक एक्सिस्ट करता है", "इसका साइज", "इसका स्कोप", "इसकी वैल्यू"],
        "answer_en": "Duration it exists",
        "answer_hi": "कितनी देर तक एक्सिस्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is an 'automatic variable'?",
        "question_hi": "'ऑटोमेटिक वेरिएबल' क्या है?",
        "options_en": ["Local variable", "Global variable", "Static variable", "Register variable"],
        "options_hi": ["लोकल वेरिएबल", "ग्लोबल वेरिएबल", "स्टेटिक वेरिएबल", "रजिस्टर वेरिएबल"],
        "answer_en": "Local variable",
        "answer_hi": "लोकल वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What does 'extern' keyword do?",
        "question_hi": "'extern' कीवर्ड क्या करता है?",
        "options_en": ["Declares external variable", "Makes variable internal", "Hides variable", "Deletes variable"],
        "options_hi": ["एक्सटर्नल वेरिएबल डिक्लेयर करता है", "वेरिएबल को इंटरनल बनाता है", "वेरिएबल को हाइड करता है", "वेरिएबल डिलीट करता है"],
        "answer_en": "Declares external variable",
        "answer_hi": "एक्सटर्नल वेरिएबल डिक्लेयर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is a 'register variable'?",
        "question_hi": "'रजिस्टर वेरिएबल' क्या है?",
        "options_en": ["Stored in CPU register", "Stored in RAM", "Stored in cache", "Stored in disk"],
        "options_hi": ["CPU रजिस्टर में स्टोर", "RAM में स्टोर", "कैश में स्टोर", "डिस्क में स्टोर"],
        "answer_en": "Stored in CPU register",
        "answer_hi": "CPU रजिस्टर में स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is 'trigraph' in C?",
        "question_hi": "C में 'ट्राइग्राफ' क्या है?",
        "options_en": ["Three-character sequence", "Three operators", "Three variables", "Three functions"],
        "options_hi": ["थ्री-कैरेक्टर सीक्वेंस", "थ्री ऑपरेटर्स", "थ्री वेरिएबल्स", "थ्री फंक्शन्स"],
        "answer_en": "Three-character sequence",
        "answer_hi": "थ्री-कैरेक्टर सीक्वेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does '??=' represent?",
        "question_hi": "'??=' क्या रिप्रेजेंट करता है?",
        "options_en": ["#", "[", "]", "{"],
        "options_hi": ["#", "[", "]", "{"],
        "answer_en": "#",
        "answer_hi": "#",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is 'digraph' in C?",
        "question_hi": "C में 'डाइग्राफ' क्या है?",
        "options_en": ["Two-character sequence", "Two operators", "Two variables", "Two functions"],
        "options_hi": ["टू-कैरेक्टर सीक्वेंस", "टू ऑपरेटर्स", "टू वेरिएबल्स", "टू फंक्शन्स"],
        "answer_en": "Two-character sequence",
        "answer_hi": "टू-कैरेक्टर सीक्वेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of 'break' in switch?",
        "question_hi": "switch में 'break' का उद्देश्य क्या है?",
        "options_en": ["Exit switch", "Continue to next case", "Stop program", "Loop control"],
        "options_hi": ["switch से बाहर निकलना", "अगले case पर जाना", "प्रोग्राम रोकना", "लूप कंट्रोल"],
        "answer_en": "Exit switch",
        "answer_hi": "switch से बाहर निकलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What happens if 'break' is omitted in switch?",
        "question_hi": "switch में 'break' ओमिट करने पर क्या होता है?",
        "options_en": ["Fall through to next case", "Error", "Stop execution", "Repeat case"],
        "options_hi": ["अगले case में फॉल थ्रू", "एरर", "एक्जीक्यूशन रुकता है", "case रिपीट होता है"],
        "answer_en": "Fall through to next case",
        "answer_hi": "अगले case में फॉल थ्रू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is 'default' in switch?",
        "question_hi": "switch में 'default' क्या है?",
        "options_en": ["Executes when no case matches", "First case", "Last case", "Error handler"],
        "options_hi": ["जब कोई case मैच नहीं करता तो एक्जीक्यूट होता है", "पहला case", "आखिरी case", "एरर हैंडलर"],
        "answer_en": "Executes when no case matches",
        "answer_hi": "जब कोई case मैच नहीं करता तो एक्जीक्यूट होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Can switch work with float values?",
        "question_hi": "क्या switch फ्लोट वैल्यूज के साथ काम कर सकता है?",
        "options_en": ["No", "Yes", "Only positive floats", "Only negative floats"],
        "options_hi": ["नहीं", "हाँ", "सिर्फ पॉजिटिव फ्लोट्स", "सिर्फ नेगेटिव फ्लोट्स"],
        "answer_en": "No",
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is an 'infinite loop'?",
        "question_hi": "'इनफिनिट लूप' क्या है?",
        "options_en": ["Loop that never ends", "Very long loop", "Short loop", "Broken loop"],
        "options_hi": ["लूप जो कभी खत्म नहीं होता", "बहुत लंबा लूप", "छोटा लूप", "ब्रोकन लूप"],
        "answer_en": "Loop that never ends",
        "answer_hi": "लूप जो कभी खत्म नहीं होता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How to create infinite loop with for?",
        "question_hi": "for के साथ इनफिनिट लूप कैसे बनाएं?",
        "options_en": ["for(;;)", "for(1)", "for(true)", "for(always)"],
        "options_hi": ["for(;;)", "for(1)", "for(true)", "for(always)"],
        "answer_en": "for(;;)",
        "answer_hi": "for(;;)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does 'continue' do in loop?",
        "question_hi": "लूप में 'continue' क्या करता है?",
        "options_en": ["Skips to next iteration", "Exits loop", "Restarts loop", "Stops program"],
        "options_hi": ["अगले इटरेशन पर स्किप करता है", "लूप से बाहर निकलता है", "लूप रीस्टार्ट करता है", "प्रोग्राम रोकता है"],
        "answer_en": "Skips to next iteration",
        "answer_hi": "अगले इटरेशन पर स्किप करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is 'nested loop'?",
        "question_hi": "'नेस्टेड लूप' क्या है?",
        "options_en": ["Loop inside loop", "Broken loop", "Parallel loop", "Multiple loops"],
        "options_hi": ["लूप के अंदर लूप", "ब्रोकन लूप", "पैरेलल लूप", "मल्टीपल लूप्स"],
        "answer_en": "Loop inside loop",
        "answer_hi": "लूप के अंदर लूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is 'labeled statement'?",
        "question_hi": "'लेबल्ड स्टेटमेंट' क्या है?",
        "options_en": ["Statement with label", "Important statement", "First statement", "Last statement"],
        "options_hi": ["लेबल वाला स्टेटमेंट", "इम्पोर्टेन्ट स्टेटमेंट", "पहला स्टेटमेंट", "आखिरी स्टेटमेंट"],
        "answer_en": "Statement with label",
        "answer_hi": "लेबल वाला स्टेटमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is 'compound statement'?",
        "question_hi": "'कम्पाउंड स्टेटमेंट' क्या है?",
        "options_en": ["Block of statements", "Single statement", "Complex statement", "Simple statement"],
        "options_hi": ["स्टेटमेंट्स का ब्लॉक", "सिंगल स्टेटमेंट", "कॉम्प्लेक्स स्टेटमेंट", "सिंपल स्टेटमेंट"],
        "answer_en": "Block of statements",
        "answer_hi": "स्टेटमेंट्स का ब्लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is 'null statement'?",
        "question_hi": "'नल स्टेटमेंट' क्या है?",
        "options_en": ["Empty statement", "Zero statement", "False statement", "Invalid statement"],
        "options_hi": ["खाली स्टेटमेंट", "जीरो स्टेटमेंट", "फॉल्स स्टेटमेंट", "इनवैलिड स्टेटमेंट"],
        "answer_en": "Empty statement",
        "answer_hi": "खाली स्टेटमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the syntax of null statement?",
        "question_hi": "नल स्टेटमेंट का सिंटैक्स क्या है?",
        "options_en": [";", "null;", "empty;", "void;"],
        "options_hi": [";", "null;", "empty;", "void;"],
        "answer_en": ";",
        "answer_hi": ";",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is 'expression statement'?",
        "question_hi": "'एक्सप्रेशन स्टेटमेंट' क्या है?",
        "options_en": ["Expression followed by ;", "Statement with =", "Complex expression", "Simple expression"],
        "options_hi": ["एक्सप्रेशन के बाद ;", "= वाला स्टेटमेंट", "कॉम्प्लेक्स एक्सप्रेशन", "सिंपल एक्सप्रेशन"],
        "answer_en": "Expression followed by ;",
        "answer_hi": "एक्सप्रेशन के बाद ;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is 'selection statement'?",
        "question_hi": "'सिलेक्शन स्टेटमेंट' क्या है?",
        "options_en": ["if, switch", "for, while", "break, continue", "goto, return"],
        "options_hi": ["if, switch", "for, while", "break, continue", "goto, return"],
        "answer_en": "if, switch",
        "answer_hi": "if, switch",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is 'iteration statement'?",
        "question_hi": "'इटरेशन स्टेटमेंट' क्या है?",
        "options_en": ["for, while, do-while", "if, switch", "break, continue", "goto, return"],
        "options_hi": ["for, while, do-while", "if, switch", "break, continue", "goto, return"],
        "answer_en": "for, while, do-while",
        "answer_hi": "for, while, do-while",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is 'jump statement'?",
        "question_hi": "'जम्प स्टेटमेंट' क्या है?",
        "options_en": ["goto, break, continue, return", "if, switch", "for, while", "printf, scanf"],
        "options_hi": ["goto, break, continue, return", "if, switch", "for, while", "printf, scanf"],
        "answer_en": "goto, break, continue, return",
        "answer_hi": "goto, break, continue, return",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is 'conditional operator'?",
        "question_hi": "'कंडीशनल ऑपरेटर' क्या है?",
        "options_en": ["? :", "if else", "switch case", "ternary"],
        "options_hi": ["? :", "if else", "switch case", "टर्नरी"],
        "answer_en": "? :",
        "answer_hi": "? :",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the other name for conditional operator?",
        "question_hi": "कंडीशनल ऑपरेटर का दूसरा नाम क्या है?",
        "options_en": ["Ternary operator", "Binary operator", "Unary operator", "Logical operator"],
        "options_hi": ["टर्नरी ऑपरेटर", "बाइनरी ऑपरेटर", "यूनरी ऑपरेटर", "लॉजिकल ऑपरेटर"],
        "answer_en": "Ternary operator",
        "answer_hi": "टर्नरी ऑपरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 'comma operator'?",
        "question_hi": "'कॉमा ऑपरेटर' क्या है?",
        "options_en": ["Evaluates multiple expressions", "Separates arguments", "Ends statement", "Starts statement"],
        "options_hi": ["मल्टीपल एक्सप्रेशन्स इवैल्यूएट करता है", "आर्गुमेंट्स सेपरेट करता है", "स्टेटमेंट खत्म करता है", "स्टेटमेंट शुरू करता है"],
        "answer_en": "Evaluates multiple expressions",
        "answer_hi": "मल्टीपल एक्सप्रेशन्स इवैल्यूएट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is 'sizeof' operator?",
        "question_hi": "'sizeof' ऑपरेटर क्या है?",
        "options_en": ["Compile-time operator", "Runtime operator", "Logical operator", "Arithmetic operator"],
        "options_hi": ["कंपाइल-टाइम ऑपरेटर", "रनटाइम ऑपरेटर", "लॉजिकल ऑपरेटर", "अरिथमेटिक ऑपरेटर"],
        "answer_en": "Compile-time operator",
        "answer_hi": "कंपाइल-टाइम ऑपरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'address of' operator?",
        "question_hi": "'एड्रेस ऑफ' ऑपरेटर क्या है?",
        "options_en": ["&", "*", "->", "."],
        "options_hi": ["&", "*", "->", "."],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is 'dereference' operator?",
        "question_hi": "'डीरिफरेंस' ऑपरेटर क्या है?",
        "options_en": ["*", "&", "->", "."],
        "options_hi": ["*", "&", "->", "."],
        "answer_en": "*",
        "answer_hi": "*",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'structure member' operator?",
        "question_hi": "'स्ट्रक्चर मेंबर' ऑपरेटर क्या है?",
        "options_en": [".", "->", "*", "&"],
        "options_hi": [".", "->", "*", "&"],
        "answer_en": ".",
        "answer_hi": ".",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is 'arrow' operator?",
        "question_hi": "'एरो' ऑपरेटर क्या है?",
        "options_en": ["->", ".", "*", "&"],
        "options_hi": ["->", ".", "*", "&"],
        "answer_en": "->",
        "answer_hi": "->",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'bitwise' operator?",
        "question_hi": "'बिटवाइज' ऑपरेटर क्या है?",
        "options_en": ["&, |, ^, ~, <<, >>", "&&, ||, !", "+, -, *, /", "=, +=, -="],
        "options_hi": ["&, |, ^, ~, <<, >>", "&&, ||, !", "+, -, *, /", "=, +=, -="],
        "answer_en": "&, |, ^, ~, <<, >>",
        "answer_hi": "&, |, ^, ~, <<, >>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is 'logical' operator?",
        "question_hi": "'लॉजिकल' ऑपरेटर क्या है?",
        "options_en": ["&&, ||, !", "&, |, ^", "==, !=, >, <", "=, +=, -="],
        "options_hi": ["&&, ||, !", "&, |, ^", "==, !=, >, <", "=, +=, -="],
        "answer_en": "&&, ||, !",
        "answer_hi": "&&, ||, !",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'relational' operator?",
        "question_hi": "'रिलेशनल' ऑपरेटर क्या है?",
        "options_en": ["==, !=, >, <, >=, <=", "&&, ||, !", "&, |, ^", "+, -, *, /"],
        "options_hi": ["==, !=, >, <, >=, <=", "&&, ||, !", "&, |, ^", "+, -, *, /"],
        "answer_en": "==, !=, >, <, >=, <=",
        "answer_hi": "==, !=, >, <, >=, <=",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is 'arithmetic' operator?",
        "question_hi": "'अरिथमेटिक' ऑपरेटर क्या है?",
        "options_en": ["+, -, *, /, %", "&, |, ^", "&&, ||, !", "==, !=, >, <"],
        "options_hi": ["+, -, *, /, %", "&, |, ^", "&&, ||, !", "==, !=, >, <"],
        "answer_en": "+, -, *, /, %",
        "answer_hi": "+, -, *, /, %",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'assignment' operator?",
        "question_hi": "'असाइनमेंट' ऑपरेटर क्या है?",
        "options_en": ["=, +=, -=, *=, /=", "==, !=", "&, |", "&&, ||"],
        "options_hi": ["=, +=, -=, *=, /=", "==, !=", "&, |", "&&, ||"],
        "answer_en": "=, +=, -=, *=, /=",
        "answer_hi": "=, +=, -=, *=, /=",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is 'increment' operator?",
        "question_hi": "'इंक्रीमेंट' ऑपरेटर क्या है?",
        "options_en": ["++", "--", "+=", "-="],
        "options_hi": ["++", "--", "+=", "-="],
        "answer_en": "++",
        "answer_hi": "++",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'decrement' operator?",
        "question_hi": "'डिक्रीमेंट' ऑपरेटर क्या है?",
        "options_en": ["--", "++", "-=", "+="],
        "options_hi": ["--", "++", "-=", "+="],
        "answer_en": "--",
        "answer_hi": "--",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is 'pre-increment'?",
        "question_hi": "'प्री-इंक्रीमेंट' क्या है?",
        "options_en": ["++x", "x++", "x+=1", "x=x+1"],
        "options_hi": ["++x", "x++", "x+=1", "x=x+1"],
        "answer_en": "++x",
        "answer_hi": "++x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'post-increment'?",
        "question_hi": "'पोस्ट-इंक्रीमेंट' क्या है?",
        "options_en": ["x++", "++x", "x+=1", "x=x+1"],
        "options_hi": ["x++", "++x", "x+=1", "x=x+1"],
        "answer_en": "x++",
        "answer_hi": "x++",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the difference between ++x and x++?",
        "question_hi": "++x और x++ में क्या अंतर है?",
        "options_en": ["When value is incremented", "Amount of increment", "Speed", "Memory usage"],
        "options_hi": ["वैल्यू कब इंक्रीमेंट होती है", "इंक्रीमेंट की मात्रा", "स्पीड", "मेमोरी यूसेज"],
        "answer_en": "When value is incremented",
        "answer_hi": "वैल्यू कब इंक्रीमेंट होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'compound assignment'?",
        "question_hi": "'कम्पाउंड असाइनमेंट' क्या है?",
        "options_en": ["+=, -=, *=, /=", "= only", "==, !=", "&, |"],
        "options_hi": ["+=, -=, *=, /=", "सिर्फ =", "==, !=", "&, |"],
        "answer_en": "+=, -=, *=, /=",
        "answer_hi": "+=, -=, *=, /=",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What does 'x += 5' mean?",
        "question_hi": "'x += 5' का क्या मतलब है?",
        "options_en": ["x = x + 5", "x = 5", "x == 5", "x + 5 = x"],
        "options_hi": ["x = x + 5", "x = 5", "x == 5", "x + 5 = x"],
        "answer_en": "x = x + 5",
        "answer_hi": "x = x + 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 'operator precedence'?",
        "question_hi": "'ऑपरेटर प्रिसीडेंस' क्या है?",
        "options_en": ["Order of evaluation", "Speed of operation", "Memory usage", "Type of operator"],
        "options_hi": ["इवैल्यूएशन का ऑर्डर", "ऑपरेशन की स्पीड", "मेमोरी यूसेज", "ऑपरेटर का टाइप"],
        "answer_en": "Order of evaluation",
        "answer_hi": "इवैल्यूएशन का ऑर्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is 'operator associativity'?",
        "question_hi": "'ऑपरेटर असोसिएटिविटी' क्या है?",
        "options_en": ["Direction of evaluation", "Speed of operation", "Grouping of operators", "Type of operators"],
        "options_hi": ["इवैल्यूएशन की दिशा", "ऑपरेशन की स्पीड", "ऑपरेटर्स का ग्रुपिंग", "ऑपरेटर्स का टाइप"],
        "answer_en": "Direction of evaluation",
        "answer_hi": "इवैल्यूएशन की दिशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is 'side effect' in expression?",
        "question_hi": "एक्सप्रेशन में 'साइड इफेक्ट' क्या है?",
        "options_en": ["Change in variable value", "Error in expression", "Slow evaluation", "Memory leak"],
        "options_hi": ["वेरिएबल वैल्यू में चेंज", "एक्सप्रेशन में एरर", "स्लो इवैल्यूएशन", "मेमोरी लीक"],
        "answer_en": "Change in variable value",
        "answer_hi": "वेरिएबल वैल्यू में चेंज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is 'sequence point'?",
        "question_hi": "'सीक्वेंस पॉइंट' क्या है?",
        "options_en": ["Point where all side effects complete", "Start of program", "End of program", "Middle of program"],
        "options_hi": ["पॉइंट जहाँ सभी साइड इफेक्ट्स कंप्लीट होते हैं", "प्रोग्राम की शुरुआत", "प्रोग्राम का अंत", "प्रोग्राम का मध्य"],
        "answer_en": "Point where all side effects complete",
        "answer_hi": "पॉइंट जहाँ सभी साइड इफेक्ट्स कंप्लीट होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 'undefined behavior'?",
        "question_hi": "'अनडिफाइंड बिहेवियर' क्या है?",
        "options_en": ["Result not defined by standard", "Error message", "Warning", "Compile error"],
        "options_hi": ["रिजल्ट स्टैण्डर्ड द्वारा डिफाइन नहीं", "एरर मैसेज", "वार्निंग", "कंपाइल एरर"],
        "answer_en": "Result not defined by standard",
        "answer_hi": "रिजल्ट स्टैण्डर्ड द्वारा डिफाइन नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Example of undefined behavior?",
        "question_hi": "अनडिफाइंड बिहेवियर का उदाहरण?",
        "options_en": ["i = i++ + ++i;", "x = 5 + 3;", "y = x * 2;", "z = a / b;"],
        "options_hi": ["i = i++ + ++i;", "x = 5 + 3;", "y = x * 2;", "z = a / b;"],
        "answer_en": "i = i++ + ++i;",
        "answer_hi": "i = i++ + ++i;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'implementation-defined behavior'?",
        "question_hi": "'इम्प्लीमेंटेशन-डिफाइंड बिहेवियर' क्या है?",
        "options_en": ["Defined by compiler", "Defined by standard", "Error", "Warning"],
        "options_hi": ["कंपाइलर द्वारा डिफाइन", "स्टैण्डर्ड द्वारा डिफाइन", "एरर", "वार्निंग"],
        "answer_en": "Defined by compiler",
        "answer_hi": "कंपाइलर द्वारा डिफाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Example of implementation-defined behavior?",
        "question_hi": "इम्प्लीमेंटेशन-डिफाइंड बिहेवियर का उदाहरण?",
        "options_en": ["Size of int", "Value of 5+3", "Result of printf", "Output of hello world"],
        "options_hi": ["int का साइज", "5+3 की वैल्यू", "printf का रिजल्ट", "hello world का आउटपुट"],
        "answer_en": "Size of int",
        "answer_hi": "int का साइज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is 'locale-specific behavior'?",
        "question_hi": "'लोकेल-स्पेसिफिक बिहेवियर' क्या है?",
        "options_en": ["Depends on locale", "Depends on compiler", "Depends on OS", "Depends on hardware"],
        "options_hi": ["लोकेल पर निर्भर", "कंपाइलर पर निर्भर", "OS पर निर्भर", "हार्डवेयर पर निर्भर"],
        "answer_en": "Depends on locale",
        "answer_hi": "लोकेल पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is 'standard library'?",
        "question_hi": "'स्टैण्डर्ड लाइब्रेरी' क्या है?",
        "options_en": ["Collection of built-in functions", "User-defined functions", "OS functions", "Hardware functions"],
        "options_hi": ["बिल्ट-इन फंक्शन्स का कलेक्शन", "यूजर-डिफाइंड फंक्शन्स", "OS फंक्शन्स", "हार्डवेयर फंक्शन्स"],
        "answer_en": "Collection of built-in functions",
        "answer_hi": "बिल्ट-इन फंक्शन्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What header for math functions?",
        "question_hi": "मैथ फंक्शन्स के लिए कौन सी हेडर?",
        "options_en": ["math.h", "stdio.h", "stdlib.h", "conio.h"],
        "options_hi": ["math.h", "stdio.h", "stdlib.h", "conio.h"],
        "answer_en": "math.h",
        "answer_hi": "math.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What header for string functions?",
        "question_hi": "स्ट्रिंग फंक्शन्स के लिए कौन सी हेडर?",
        "options_en": ["string.h", "stdio.h", "stdlib.h", "strings.h"],
        "options_hi": ["string.h", "stdio.h", "stdlib.h", "strings.h"],
        "answer_en": "string.h",
        "answer_hi": "string.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What header for memory allocation?",
        "question_hi": "मेमोरी अलॉकेशन के लिए कौन सी हेडर?",
        "options_en": ["stdlib.h", "stdio.h", "malloc.h", "memory.h"],
        "options_hi": ["stdlib.h", "stdio.h", "malloc.h", "memory.h"],
        "answer_en": "stdlib.h",
        "answer_hi": "stdlib.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What header for character testing?",
        "question_hi": "कैरेक्टर टेस्टिंग के लिए कौन सी हेडर?",
        "options_en": ["ctype.h", "stdio.h", "stdlib.h", "char.h"],
        "options_hi": ["ctype.h", "stdio.h", "stdlib.h", "char.h"],
        "answer_en": "ctype.h",
        "answer_hi": "ctype.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What header for time functions?",
        "question_hi": "टाइम फंक्शन्स के लिए कौन सी हेडर?",
        "options_en": ["time.h", "stdio.h", "stdlib.h", "date.h"],
        "options_hi": ["time.h", "stdio.h", "stdlib.h", "date.h"],
        "answer_en": "time.h",
        "answer_hi": "time.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is 'ANSI C'?",
        "question_hi": "'ANSI C' क्या है?",
        "options_en": ["Standardized version of C", "New language", "C++ version", "Java version"],
        "options_hi": ["C का स्टैण्डर्डाइज्ड वर्जन", "नई लैंग्वेज", "C++ वर्जन", "Java वर्जन"],
        "answer_en": "Standardized version of C",
        "answer_hi": "C का स्टैण्डर्डाइज्ड वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "When was ANSI C standardized?",
        "question_hi": "ANSI C कब स्टैण्डर्डाइज हुई?",
        "options_en": ["1989", "1972", "1999", "2011"],
        "options_hi": ["1989", "1972", "1999", "2011"],
        "answer_en": "1989",
        "answer_hi": "1989",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is 'C99'?",
        "question_hi": "'C99' क्या है?",
        "options_en": ["1999 C standard", "99th version", "C++99", "Java 99"],
        "options_hi": ["1999 C स्टैण्डर्ड", "99वाँ वर्जन", "C++99", "Java 99"],
        "answer_en": "1999 C standard",
        "answer_hi": "1999 C स्टैण्डर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'C11'?",
        "question_hi": "'C11' क्या है?",
        "options_en": ["2011 C standard", "11th version", "C++11", "Java 11"],
        "options_hi": ["2011 C स्टैण्डर्ड", "11वाँ वर्जन", "C++11", "Java 11"],
        "answer_en": "2011 C standard",
        "answer_hi": "2011 C स्टैण्डर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is 'K&R C'?",
        "question_hi": "'K&R C' क्या है?",
        "options_en": ["Original C described in book", "New C", "C++", "Java"],
        "options_hi": ["बुक में डिस्क्राइब्ड ओरिजिनल C", "नई C", "C++", "Java"],
        "answer_en": "Original C described in book",
        "answer_hi": "बुक में डिस्क्राइब्ड ओरिजिनल C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does 'K&R' stand for?",
        "question_hi": "'K&R' का फुल फॉर्म क्या है?",
        "options_en": ["Kernighan and Ritchie", "Kernel and Runtime", "Key and Reference", "Knowledge and Research"],
        "options_hi": ["कर्निघन और रिची", "कर्नल और रनटाइम", "की और रिफरेंस", "नॉलेज और रिसर्च"],
        "answer_en": "Kernighan and Ritchie",
        "answer_hi": "कर्निघन और रिची",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
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