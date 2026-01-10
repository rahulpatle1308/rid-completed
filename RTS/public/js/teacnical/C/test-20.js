const questions=[
  {
    "num": 1,
    "question_en": "What is the purpose of bitwise operators in C?",
    "question_hi": "C में बिटवाइज ऑपरेटर्स का उद्देश्य क्या है?",
    "options_en": ["To manipulate individual bits", "For arithmetic operations", "For string operations", "For file operations"],
    "options_hi": ["व्यक्तिगत बिट्स में हेरफेर करने के लिए", "अंकगणितीय संचालन के लिए", "स्ट्रिंग ऑपरेशन के लिए", "फ़ाइल ऑपरेशन के लिए"],
    "answer_en": "To manipulate individual bits",
    "answer_hi": "व्यक्तिगत बिट्स में हेरफेर करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the result of ~0 in 8-bit system?",
    "question_hi": "8-बिट सिस्टम में ~0 का परिणाम क्या है?",
    "options_en": ["255 (all bits 1)", "0", "1", "-1"],
    "options_hi": ["255 (सभी बिट 1)", "0", "1", "-1"],
    "answer_en": "255 (all bits 1)",
    "answer_hi": "255 (सभी बिट 1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is arithmetic vs logical right shift?",
    "question_hi": "अंकगणित बनाम लॉजिकल राइट शिफ्ट क्या है?",
    "options_en": ["Arithmetic preserves sign bit, logical fills with 0", "Both same", "Logical preserves sign", "Arithmetic fills with 1"],
    "options_hi": ["अंकगणित साइन बिट संरक्षित करता है, लॉजिकल 0 से भरता है", "दोनों समान", "लॉजिकल साइन संरक्षित करता है", "अंकगणित 1 से भरता है"],
    "answer_en": "Arithmetic preserves sign bit, logical fills with 0",
    "answer_hi": "अंकगणित साइन बिट संरक्षित करता है, लॉजिकल 0 से भरता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What will be output: int x = -8; printf(\"%d\", x >> 1);",
    "question_hi": "आउटपुट क्या होगा: int x = -8; printf(\"%d\", x >> 1);",
    "options_en": ["-4", "4", "-16", "Implementation defined"],
    "options_hi": ["-4", "4", "-16", "कार्यान्वयन परिभाषित"],
    "answer_en": "-4",
    "answer_hi": "-4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "How to check if a number is even using bitwise operator?",
    "question_hi": "बिटवाइज ऑपरेटर का उपयोग करके कैसे जांचें कि संख्या सम है?",
    "options_en": ["if (num & 1 == 0)", "if (num | 1 == 0)", "if (num ^ 1 == 0)", "if (~num == 0)"],
    "options_hi": ["if (num & 1 == 0)", "if (num | 1 == 0)", "if (num ^ 1 == 0)", "if (~num == 0)"],
    "answer_en": "if (num & 1 == 0)",
    "answer_hi": "if (num & 1 == 0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How to set nth bit of a number?",
    "question_hi": "संख्या का nवां बिट कैसे सेट करें?",
    "options_en": ["num = num | (1 << n)", "num = num & (1 << n)", "num = num ^ (1 << n)", "num = num << n"],
    "options_hi": ["num = num | (1 << n)", "num = num & (1 << n)", "num = num ^ (1 << n)", "num = num << n"],
    "answer_en": "num = num | (1 << n)",
    "answer_hi": "num = num | (1 << n)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "How to clear nth bit of a number?",
    "question_hi": "संख्या का nवां बिट कैसे क्लियर करें?",
    "options_en": ["num = num & ~(1 << n)", "num = num | ~(1 << n)", "num = num ^ (1 << n)", "num = num >> n"],
    "options_hi": ["num = num & ~(1 << n)", "num = num | ~(1 << n)", "num = num ^ (1 << n)", "num = num >> n"],
    "answer_en": "num = num & ~(1 << n)",
    "answer_hi": "num = num & ~(1 << n)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "How to toggle nth bit of a number?",
    "question_hi": "संख्या का nवां बिट कैसे टॉगल करें?",
    "options_en": ["num = num ^ (1 << n)", "num = num | (1 << n)", "num = num & ~(1 << n)", "num = ~num"],
    "options_hi": ["num = num ^ (1 << n)", "num = num | (1 << n)", "num = num & ~(1 << n)", "num = ~num"],
    "answer_en": "num = num ^ (1 << n)",
    "answer_hi": "num = num ^ (1 << n)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "How to check if nth bit is set?",
    "question_hi": "कैसे जांचें कि nवां बिट सेट है?",
    "options_en": ["if (num & (1 << n))", "if (num | (1 << n))", "if (num ^ (1 << n))", "if (~num & (1 << n))"],
    "options_hi": ["if (num & (1 << n))", "if (num | (1 << n))", "if (num ^ (1 << n))", "if (~num & (1 << n))"],
    "answer_en": "if (num & (1 << n))",
    "answer_hi": "if (num & (1 << n))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of bitwise XOR in swapping?",
    "question_hi": "स्वैपिंग में बिटवाइज XOR का उद्देश्य क्या है?",
    "options_en": ["Swap without temporary variable", "Swap faster", "Swap with temp", "No purpose"],
    "options_hi": ["अस्थायी चर के बिना स्वैप करें", "तेजी से स्वैप करें", "टेम्प के साथ स्वैप करें", "कोई उद्देश्य नहीं"],
    "answer_en": "Swap without temporary variable",
    "answer_hi": "अस्थायी चर के बिना स्वैप करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "How to swap two numbers using XOR?",
    "question_hi": "XOR का उपयोग करके दो संख्याओं को कैसे स्वैप करें?",
    "options_en": ["a ^= b; b ^= a; a ^= b;", "a = b; b = a;", "temp = a; a = b; b = temp;", "a += b; b = a - b; a -= b;"],
    "options_hi": ["a ^= b; b ^= a; a ^= b;", "a = b; b = a;", "temp = a; a = b; b = temp;", "a += b; b = a - b; a -= b;"],
    "answer_en": "a ^= b; b ^= a; a ^= b;",
    "answer_hi": "a ^= b; b ^= a; a ^= b;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the parity of a number?",
    "question_hi": "संख्या की पैरिटी क्या है?",
    "options_en": ["Even or odd number of set bits", "Even or odd number", "Prime or not", "Positive or negative"],
    "options_hi": ["सेट बिट्स की सम या विषम संख्या", "सम या विषम संख्या", "अभाज्य या नहीं", "सकारात्मक या नकारात्मक"],
    "answer_en": "Even or odd number of set bits",
    "answer_hi": "सेट बिट्स की सम या विषम संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "How to count set bits in a number?",
    "question_hi": "संख्या में सेट बिट्स की गिनती कैसे करें?",
    "options_en": ["Brian Kernighan's algorithm", "Simple loop", "Using sizeof", "Using strlen"],
    "options_hi": ["ब्रायन कर्निघन का एल्गोरिदम", "सरल लूप", "sizeof का उपयोग करके", "strlen का उपयोग करके"],
    "answer_en": "Brian Kernighan's algorithm",
    "answer_hi": "ब्रायन कर्निघन का एल्गोरिदम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is Brian Kernighan's algorithm?",
    "question_hi": "ब्रायन कर्निघन का एल्गोरिदम क्या है?",
    "options_en": ["n & (n-1) clears rightmost set bit", "n | (n+1) sets bit", "n ^ (n-1) toggles", "No such algorithm"],
    "options_hi": ["n & (n-1) दायाँ सेट बिट साफ़ करता है", "n | (n+1) बिट सेट करता है", "n ^ (n-1) टॉगल करता है", "ऐसा कोई एल्गोरिदम नहीं"],
    "answer_en": "n & (n-1) clears rightmost set bit",
    "answer_hi": "n & (n-1) दायाँ सेट बिट साफ़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "How to isolate rightmost set bit?",
    "question_hi": "दायाँ सेट बिट को कैसे अलग करें?",
    "options_en": ["n & -n", "n | -n", "n ^ -n", "~n"],
    "options_hi": ["n & -n", "n | -n", "n ^ -n", "~n"],
    "answer_en": "n & -n",
    "answer_hi": "n & -n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "How to isolate rightmost 0 bit?",
    "question_hi": "दायाँ 0 बिट को कैसे अलग करें?",
    "options_en": ["~n & (n+1)", "n & (n+1)", "n | (n+1)", "~n | (n+1)"],
    "options_hi": ["~n & (n+1)", "n & (n+1)", "n | (n+1)", "~n | (n+1)"],
    "answer_en": "~n & (n+1)",
    "answer_hi": "~n & (n+1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is two's complement?",
    "question_hi": "टू'स कॉम्प्लीमेंट क्या है?",
    "options_en": ["Method to represent negative numbers", "Positive numbers only", "Floating point", "Character encoding"],
    "options_hi": ["ऋणात्मक संख्याओं को दर्शाने की विधि", "केवल धनात्मक संख्याएँ", "फ्लोटिंग पॉइंट", "वर्ण एन्कोडिंग"],
    "answer_en": "Method to represent negative numbers",
    "answer_hi": "ऋणात्मक संख्याओं को दर्शाने की विधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "How to get two's complement of a number?",
    "question_hi": "संख्या का टू'स कॉम्प्लीमेंट कैसे प्राप्त करें?",
    "options_en": ["Invert bits and add 1", "Invert bits only", "Add 1 only", "Subtract 1"],
    "options_hi": ["बिट्स उलटें और 1 जोड़ें", "केवल बिट्स उलटें", "केवल 1 जोड़ें", "1 घटाएं"],
    "answer_en": "Invert bits and add 1",
    "answer_hi": "बिट्स उलटें और 1 जोड़ें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the range of signed char?",
    "question_hi": "साइन्ड चार की सीमा क्या है?",
    "options_en": ["-128 to 127", "0 to 255", "-127 to 127", "-255 to 255"],
    "options_hi": ["-128 से 127", "0 से 255", "-127 से 127", "-255 से 255"],
    "answer_en": "-128 to 127",
    "answer_hi": "-128 से 127",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the range of unsigned char?",
    "question_hi": "अनसाइन्ड चार की सीमा क्या है?",
    "options_en": ["0 to 255", "-128 to 127", "0 to 127", "0 to 256"],
    "options_hi": ["0 से 255", "-128 से 127", "0 से 127", "0 से 256"],
    "answer_en": "0 to 255",
    "answer_hi": "0 से 255",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is integer overflow?",
    "question_hi": "इंटीजर ओवरफ्लो क्या है?",
    "options_en": ["Value exceeds type's maximum", "Value under minimum", "Divide by zero", "Buffer overflow"],
    "options_hi": ["मान प्रकार की अधिकतम सीमा से अधिक है", "न्यूनतम से कम मान", "शून्य से भाग", "बफ़र ओवरफ्लो"],
    "answer_en": "Value exceeds type's maximum",
    "answer_hi": "मान प्रकार की अधिकतम सीमा से अधिक है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is integer underflow?",
    "question_hi": "इंटीजर अंडरफ्लो क्या है?",
    "options_en": ["Value goes below type's minimum", "Exceeds maximum", "Zero value", "Negative overflow"],
    "options_hi": ["मान प्रकार की न्यूनतम सीमा से नीचे चला जाता है", "अधिकतम से अधिक", "शून्य मान", "नकारात्मक ओवरफ्लो"],
    "answer_en": "Value goes below type's minimum",
    "answer_hi": "मान प्रकार की न्यूनतम सीमा से नीचे चला जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is wrap-around behavior?",
    "question_hi": "रैप-अराउंड व्यवहार क्या है?",
    "options_en": ["Value wraps to opposite end", "Stops at limit", "Generates error", "Returns zero"],
    "options_hi": ["मान विपरीत छोर पर लपेटता है", "सीमा पर रुक जाता है", "त्रुटि उत्पन्न करता है", "शून्य लौटाता है"],
    "answer_en": "Value wraps to opposite end",
    "answer_hi": "मान विपरीत छोर पर लपेटता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is undefined behavior with signed overflow?",
    "question_hi": "साइन्ड ओवरफ्लो के साथ अपरिभाषित व्यवहार क्या है?",
    "options_en": ["Compiler may do anything", "Well-defined wrap", "Always zero", "Always maximum"],
    "options_hi": ["कंपाइलर कुछ भी कर सकता है", "सुपरिभाषित रैप", "हमेशा शून्य", "हमेशा अधिकतम"],
    "answer_en": "Compiler may do anything",
    "answer_hi": "कंपाइलर कुछ भी कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is well-defined for unsigned overflow?",
    "question_hi": "अनसाइन्ड ओवरफ्लो के लिए सुपरिभाषित क्या है?",
    "options_en": ["Wrap-around modulo 2^n", "Undefined", "Zero", "Maximum"],
    "options_hi": ["2^n मॉड्यूलो रैप-अराउंड", "अपरिभाषित", "शून्य", "अधिकतम"],
    "answer_en": "Wrap-around modulo 2^n",
    "answer_hi": "2^n मॉड्यूलो रैप-अराउंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is endianness?",
    "question_hi": "एंडियननेस क्या है?",
    "options_en": ["Byte order in memory", "Bit order", "File order", "Network order"],
    "options_hi": ["मेमोरी में बाइट क्रम", "बिट क्रम", "फ़ाइल क्रम", "नेटवर्क क्रम"],
    "answer_en": "Byte order in memory",
    "answer_hi": "मेमोरी में बाइट क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "How to detect endianness in C?",
    "question_hi": "C में एंडियननेस का पता कैसे लगाएं?",
    "options_en": ["Check first byte of integer", "Check sizeof", "Check pointer", "Cannot detect"],
    "options_hi": ["पूर्णांक का पहला बाइट जांचें", "sizeof जांचें", "पॉइंटर जांचें", "पता नहीं लगा सकते"],
    "answer_en": "Check first byte of integer",
    "answer_hi": "पूर्णांक का पहला बाइट जांचें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is network byte order?",
    "question_hi": "नेटवर्क बाइट ऑर्डर क्या है?",
    "options_en": ["Big endian", "Little endian", "Mixed endian", "No standard"],
    "options_hi": ["बिग एंडियन", "लिटिल एंडियन", "मिश्रित एंडियन", "कोई मानक नहीं"],
    "answer_en": "Big endian",
    "answer_hi": "बिग एंडियन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What are htonl() and ntohl() functions?",
    "question_hi": "htonl() और ntohl() फ़ंक्शंस क्या हैं?",
    "options_en": ["Host to network and network to host byte order", "Host to local", "Network to system", "No such functions"],
    "options_hi": ["होस्ट से नेटवर्क और नेटवर्क से होस्ट बाइट ऑर्डर", "होस्ट से स्थानीय", "नेटवर्क से सिस्टम", "ऐसे कोई फ़ंक्शन नहीं"],
    "answer_en": "Host to network and network to host byte order",
    "answer_hi": "होस्ट से नेटवर्क और नेटवर्क से होस्ट बाइट ऑर्डर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is memory alignment?",
    "question_hi": "मेमोरी अलाइनमेंट क्या है?",
    "options_en": ["Data stored at addresses divisible by size", "Random addresses", "Any address", "Only even addresses"],
    "options_hi": ["आकार से विभाज्य पतों पर संग्रहीत डेटा", "यादृच्छिक पते", "कोई भी पता", "केवल सम पते"],
    "answer_en": "Data stored at addresses divisible by size",
    "answer_hi": "आकार से विभाज्य पतों पर संग्रहीत डेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Why is alignment important?",
    "question_hi": "अलाइनमेंट क्यों महत्वपूर्ण है?",
    "options_en": ["Performance and hardware requirements", "No importance", "Only for looks", "Only for arrays"],
    "options_hi": ["प्रदर्शन और हार्डवेयर आवश्यकताएँ", "कोई महत्व नहीं", "केवल दिखावे के लिए", "केवल सरणियों के लिए"],
    "answer_en": "Performance and hardware requirements",
    "answer_hi": "प्रदर्शन और हार्डवेयर आवश्यकताएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is packed structure?",
    "question_hi": "पैक्ड स्ट्रक्चर क्या है?",
    "options_en": ["Structure without padding", "With padding", "Compressed", "Encrypted"],
    "options_hi": ["पैडिंग के बिना संरचना", "पैडिंग के साथ", "संपीड़ित", "एन्क्रिप्टेड"],
    "answer_en": "Structure without padding",
    "answer_hi": "पैडिंग के बिना संरचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the trade-off with packed structures?",
    "question_hi": "पैक्ड स्ट्रक्चर्स के साथ ट्रेड-ऑफ क्या है?",
    "options_en": ["Space saved but slower access", "Faster access", "More secure", "Easier to debug"],
    "options_hi": ["स्पेस बचता है लेकिन धीमी एक्सेस", "तेजी से पहुंच", "अधिक सुरक्षित", "डीबग करना आसान"],
    "answer_en": "Space saved but slower access",
    "answer_hi": "स्पेस बचता है लेकिन धीमी एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is bit field alignment?",
    "question_hi": "बिट फील्ड अलाइनमेंट क्या है?",
    "options_en": ["Compiler dependent", "Always aligned", "Never aligned", "Same as integers"],
    "options_hi": ["कंपाइलर निर्भर", "हमेशा संरेखित", "कभी संरेखित नहीं", "पूर्णांकों के समान"],
    "answer_en": "Compiler dependent",
    "answer_hi": "कंपाइलर निर्भर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is strict aliasing rule?",
    "question_hi": "स्ट्रिक्ट एलियासिंग नियम क्या है?",
    "options_en": ["Cannot access object through incompatible pointer", "Can always access", "Only for arrays", "Only for functions"],
    "options_hi": ["असंगत पॉइंटर के माध्यम से वस्तु तक नहीं पहुंच सकते", "हमेशा एक्सेस कर सकते हैं", "केवल सरणियों के लिए", "केवल कार्यों के लिए"],
    "answer_en": "Cannot access object through incompatible pointer",
    "answer_hi": "असंगत पॉइंटर के माध्यम से वस्तु तक नहीं पहुंच सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What violates strict aliasing?",
    "question_hi": "स्ट्रिक्ट एलियासिंग का उल्लंघन क्या है?",
    "options_en": ["int* p = (int*)&float_var;", "int* p = &int_var;", "char* p = (char*)&int_var;", "void* p = &any_var;"],
    "options_hi": ["int* p = (int*)&float_var;", "int* p = &int_var;", "char* p = (char*)&int_var;", "void* p = &any_var;"],
    "answer_en": "int* p = (int*)&float_var;",
    "answer_hi": "int* p = (int*)&float_var;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is type punning?",
    "question_hi": "टाइप पनिंग क्या है?",
    "options_en": ["Reinterpreting object as different type", "Changing type", "Type casting", "Type checking"],
    "options_hi": ["वस्तु को अलग प्रकार के रूप में पुनर्व्याख्या करना", "प्रकार बदलना", "टाइप कास्टिंग", "टाइप चेकिंग"],
    "answer_en": "Reinterpreting object as different type",
    "answer_hi": "वस्तु को अलग प्रकार के रूप में पुनर्व्याख्या करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is safe way for type punning?",
    "question_hi": "टाइप पनिंग का सुरक्षित तरीका क्या है?",
    "options_en": ["Using union", "Using pointer cast", "Using memcpy", "Both union and memcpy"],
    "options_hi": ["यूनियन का उपयोग करना", "पॉइंटर कास्ट का उपयोग करना", "memcpy का उपयोग करना", "यूनियन और memcpy दोनों"],
    "answer_en": "Both union and memcpy",
    "answer_hi": "यूनियन और memcpy दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is pointer aliasing?",
    "question_hi": "पॉइंटर एलियासिंग क्या है?",
    "options_en": ["Two pointers pointing to same memory", "Different memory", "NULL pointers", "Function pointers"],
    "options_hi": ["एक ही मेमोरी की ओर इशारा करने वाले दो पॉइंटर", "अलग मेमोरी", "NULL पॉइंटर्स", "फ़ंक्शन पॉइंटर्स"],
    "answer_en": "Two pointers pointing to same memory",
    "answer_hi": "एक ही मेमोरी की ओर इशारा करने वाले दो पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is restrict keyword purpose?",
    "question_hi": "restrict कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["No pointer aliasing guarantee", "Restrict access", "Make read-only", "Increase speed"],
    "options_hi": ["कोई पॉइंटर एलियासिंग गारंटी नहीं", "पहुंच प्रतिबंधित करें", "केवल पढ़ने के लिए बनाएं", "गति बढ़ाएँ"],
    "answer_en": "No pointer aliasing guarantee",
    "answer_hi": "कोई पॉइंटर एलियासिंग गारंटी नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is memory model in C?",
    "question_hi": "C में मेमोरी मॉडल क्या है?",
    "options_en": ["Abstract machine memory behavior", "Physical memory", "RAM size", "Cache memory"],
    "options_hi": ["अमूर्त मशीन मेमोरी व्यवहार", "भौतिक स्मृति", "RAM आकार", "कैश मेमोरी"],
    "answer_en": "Abstract machine memory behavior",
    "answer_hi": "अमूर्त मशीन मेमोरी व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is sequence point?",
    "question_hi": "सीक्वेंस पॉइंट क्या है?",
    "options_en": ["Point where all side effects complete", "Start of program", "End of function", "Middle of loop"],
    "options_hi": ["बिंदु जहां सभी साइड इफेक्ट पूरे होते हैं", "प्रोग्राम की शुरुआत", "फ़ंक्शन का अंत", "लूप का मध्य"],
    "answer_en": "Point where all side effects complete",
    "answer_hi": "बिंदु जहां सभी साइड इफेक्ट पूरे होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is side effect?",
    "question_hi": "साइड इफेक्ट क्या है?",
    "options_en": ["Modification of object or file", "Calculation only", "No effect", "Printing output"],
    "options_hi": ["वस्तु या फ़ाइल का संशोधन", "केवल गणना", "कोई प्रभाव नहीं", "आउटपुट प्रिंट करना"],
    "answer_en": "Modification of object or file",
    "answer_hi": "वस्तु या फ़ाइल का संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is unspecified behavior?",
    "question_hi": "अनिर्दिष्ट व्यवहार क्या है?",
    "options_en": ["Multiple valid implementations", "Undefined", "Implementation-defined", "Always same"],
    "options_hi": ["एकाधिक वैध कार्यान्वयन", "अपरिभाषित", "कार्यान्वयन-परिभाषित", "हमेशा समान"],
    "answer_en": "Multiple valid implementations",
    "answer_hi": "एकाधिक वैध कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is implementation-defined behavior?",
    "question_hi": "कार्यान्वयन-परिभाषित व्यवहार क्या है?",
    "options_en": ["Documented by implementation", "Undocumented", "Always same", "Random"],
    "options_hi": ["कार्यान्वयन द्वारा दस्तावेजीकृत", "अदस्तावेजी", "हमेशा समान", "यादृच्छिक"],
    "answer_en": "Documented by implementation",
    "answer_hi": "कार्यान्वयन द्वारा दस्तावेजीकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is locale in C?",
    "question_hi": "C में लोकेल क्या है?",
    "options_en": ["Cultural and language settings", "Memory location", "File location", "Function location"],
    "options_hi": ["सांस्कृतिक और भाषा सेटिंग्स", "मेमोरी लोकेशन", "फ़ाइल लोकेशन", "फ़ंक्शन लोकेशन"],
    "answer_en": "Cultural and language settings",
    "answer_hi": "सांस्कृतिक और भाषा सेटिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is setlocale() function?",
    "question_hi": "setlocale() फ़ंक्शन क्या है?",
    "options_en": ["Sets program's locale", "Sets memory", "Sets file", "Sets variable"],
    "options_hi": ["प्रोग्राम का लोकेल सेट करता है", "मेमोरी सेट करता है", "फ़ाइल सेट करता है", "चर सेट करता है"],
    "answer_en": "Sets program's locale",
    "answer_hi": "प्रोग्राम का लोकेल सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is multibyte character?",
    "question_hi": "मल्टीबाइट कैरेक्टर क्या है?",
    "options_en": ["Character requiring multiple bytes", "Single byte", "ASCII only", "Unicode only"],
    "options_hi": ["एकाधिक बाइट्स की आवश्यकता वाला वर्ण", "एकल बाइट", "केवल ASCII", "केवल यूनिकोड"],
    "answer_en": "Character requiring multiple bytes",
    "answer_hi": "एकाधिक बाइट्स की आवश्यकता वाला वर्ण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is wide character?",
    "question_hi": "वाइड कैरेक्टर क्या है?",
    "options_en": ["wchar_t type for international characters", "char type", "int type", "long type"],
    "options_hi": ["अंतर्राष्ट्रीय वर्णों के लिए wchar_t प्रकार", "चार प्रकार", "इंट प्रकार", "लॉन्ग प्रकार"],
    "answer_en": "wchar_t type for international characters",
    "answer_hi": "अंतर्राष्ट्रीय वर्णों के लिए wchar_t प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is wchar_t size?",
    "question_hi": "wchar_t का आकार क्या है?",
    "options_en": ["Implementation defined", "Always 2 bytes", "Always 4 bytes", "Same as char"],
    "options_hi": ["कार्यान्वयन परिभाषित", "हमेशा 2 बाइट", "हमेशा 4 बाइट", "चार के समान"],
    "answer_en": "Implementation defined",
    "answer_hi": "कार्यान्वयन परिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is UTF-8 encoding?",
    "question_hi": "UTF-8 एन्कोडिंग क्या है?",
    "options_en": ["Variable width Unicode encoding", "Fixed width", "ASCII only", "Binary encoding"],
    "options_hi": ["वेरिएबल विड्थ यूनिकोड एन्कोडिंग", "फिक्स्ड विड्थ", "केवल ASCII", "बाइनरी एन्कोडिंग"],
    "answer_en": "Variable width Unicode encoding",
    "answer_hi": "वेरिएबल विड्थ यूनिकोड एन्कोडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the difference between UTF-8 and UTF-16?",
    "question_hi": "UTF-8 और UTF-16 में क्या अंतर है?",
    "options_en": [
      "UTF-8 variable 1-4 bytes, UTF-16 fixed 2/4 bytes",
      "Both same",
      "UTF-8 fixed, UTF-16 variable",
      "UTF-8 for ASCII only"
    ],
    "options_hi": [
      "UTF-8 वेरिएबल 1-4 बाइट्स, UTF-16 फिक्स्ड 2/4 बाइट्स",
      "दोनों समान",
      "UTF-8 फिक्स्ड, UTF-16 वेरिएबल",
      "UTF-8 केवल ASCII के लिए"
    ],
    "answer_en": "UTF-8 variable 1-4 bytes, UTF-16 fixed 2/4 bytes",
    "answer_hi": "UTF-8 वेरिएबल 1-4 बाइट्स, UTF-16 फिक्स्ड 2/4 बाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is BOM (Byte Order Mark)?",
    "question_hi": "BOM (बाइट ऑर्डर मार्क) क्या है?",
    "options_en": [
      "Special marker at file start for encoding",
      "End of file marker",
      "Middle marker",
      "No such marker"
    ],
    "options_hi": [
      "एन्कोडिंग के लिए फ़ाइल की शुरुआत में विशेष मार्कर",
      "फ़ाइल का अंत मार्कर",
      "मध्य मार्कर",
      "ऐसा कोई मार्कर नहीं"
    ],
    "answer_en": "Special marker at file start for encoding",
    "answer_hi": "एन्कोडिंग के लिए फ़ाइल की शुरुआत में विशेष मार्कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is signal-safe function?",
    "question_hi": "सिग्नल-सेफ फ़ंक्शन क्या है?",
    "options_en": [
      "Function that can be called from signal handler",
      "Any function",
      "Only main()",
      "No such concept"
    ],
    "options_hi": [
      "फ़ंक्शन जिसे सिग्नल हैंडलर से कॉल किया जा सकता है",
      "कोई भी फ़ंक्शन",
      "केवल main()",
      "ऐसी कोई अवधारणा नहीं"
    ],
    "answer_en": "Function that can be called from signal handler",
    "answer_hi": "फ़ंक्शन जिसे सिग्नल हैंडलर से कॉल किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which functions are signal-safe?",
    "question_hi": "कौन से फ़ंक्शन सिग्नल-सेफ हैं?",
    "options_en": [
      "Only async-signal-safe functions",
      "All functions",
      "Only printf()",
      "Only malloc()"
    ],
    "options_hi": [
      "केवल एसिंक-सिग्नल-सेफ फ़ंक्शन",
      "सभी फ़ंक्शन",
      "केवल printf()",
      "केवल malloc()"
    ],
    "answer_en": "Only async-signal-safe functions",
    "answer_hi": "केवल एसिंक-सिग्नल-सेफ फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is reentrant function?",
    "question_hi": "रीएंट्रेंट फ़ंक्शन क्या है?",
    "options_en": [
      "Can be interrupted and called again safely",
      "Cannot be interrupted",
      "Only called once",
      "Recursive function"
    ],
    "options_hi": [
      "बीच में रोका जा सकता है और फिर से सुरक्षित रूप से कॉल किया जा सकता है",
      "बीच में नहीं रोका जा सकता",
      "केवल एक बार कॉल किया जाता है",
      "पुनरावर्ती फ़ंक्शन"
    ],
    "answer_en": "Can be interrupted and called again safely",
    "answer_hi": "बीच में रोका जा सकता है और फिर से सुरक्षित रूप से कॉल किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is thread-safe function?",
    "question_hi": "थ्रेड-सेफ फ़ंक्शन क्या है?",
    "options_en": [
      "Safe to call from multiple threads",
      "Only single thread",
      "Main thread only",
      "No threads"
    ],
    "options_hi": [
      "एकाधिक थ्रेड्स से कॉल करने के लिए सुरक्षित",
      "केवल सिंगल थ्रेड",
      "केवल मुख्य थ्रेड",
      "कोई थ्रेड नहीं"
    ],
    "answer_en": "Safe to call from multiple threads",
    "answer_hi": "एकाधिक थ्रेड्स से कॉल करने के लिए सुरक्षित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is deadlock?",
    "question_hi": "डेडलॉक क्या है?",
    "options_en": [
      "Two or more threads waiting for each other",
      "Single thread waiting",
      "No waiting",
      "Fast execution"
    ],
    "options_hi": [
      "दो या अधिक थ्रेड्स एक-दूसरे की प्रतीक्षा कर रहे हैं",
      "सिंगल थ्रेड प्रतीक्षा",
      "कोई प्रतीक्षा नहीं",
      "तेज निष्पादन"
    ],
    "answer_en": "Two or more threads waiting for each other",
    "answer_hi": "दो या अधिक थ्रेड्स एक-दूसरे की प्रतीक्षा कर रहे हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is race condition?",
    "question_hi": "रेस कंडीशन क्या है?",
    "options_en": [
      "Outcome depends on thread scheduling",
      "Fixed outcome",
      "No threads",
      "Single thread issue"
    ],
    "options_hi": [
      "परिणाम थ्रेड शेड्यूलिंग पर निर्भर करता है",
      "निश्चित परिणाम",
      "कोई थ्रेड नहीं",
      "सिंगल थ्रेड समस्या"
    ],
    "answer_en": "Outcome depends on thread scheduling",
    "answer_hi": "परिणाम थ्रेड शेड्यूलिंग पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is mutex?",
    "question_hi": "म्यूटेक्स क्या है?",
    "options_en": [
      "Mutual exclusion lock",
      "Shared lock",
      "No lock",
      "File lock"
    ],
    "options_hi": [
      "परस्पर अनन्य लॉक",
      "साझा लॉक",
      "कोई लॉक नहीं",
      "फ़ाइल लॉक"
    ],
    "answer_en": "Mutual exclusion lock",
    "answer_hi": "परस्पर अनन्य लॉक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is semaphore?",
    "question_hi": "सेमाफोर क्या है?",
    "options_en": [
      "Counter for resource access",
      "Binary lock only",
      "Same as mutex",
      "No such thing"
    ],
    "options_hi": [
      "संसाधन पहुंच के लिए काउंटर",
      "केवल बाइनरी लॉक",
      "म्यूटेक्स के समान",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Counter for resource access",
    "answer_hi": "संसाधन पहुंच के लिए काउंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is condition variable?",
    "question_hi": "कंडीशन वेरिएबल क्या है?",
    "options_en": [
      "Synchronization primitive for waiting",
      "Regular variable",
      "Constant",
      "Function"
    ],
    "options_hi": [
      "प्रतीक्षा के लिए सिंक्रोनाइज़ेशन प्रिमिटिव",
      "नियमित चर",
      "स्थिर",
      "फ़ंक्शन"
    ],
    "answer_en": "Synchronization primitive for waiting",
    "answer_hi": "प्रतीक्षा के लिए सिंक्रोनाइज़ेशन प्रिमिटिव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is atomic operation?",
    "question_hi": "एटॉमिक ऑपरेशन क्या है?",
    "options_en": [
      "Indivisible operation",
      "Divisible",
      "Slow operation",
      "Floating point"
    ],
    "options_hi": [
      "अविभाज्य संचालन",
      "विभाज्य",
      "धीमा संचालन",
      "फ्लोटिंग पॉइंट"
    ],
    "answer_en": "Indivisible operation",
    "answer_hi": "अविभाज्य संचालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is memory barrier?",
    "question_hi": "मेमोरी बैरियर क्या है?",
    "options_en": [
      "Prevents reordering of memory operations",
      "Physical barrier",
      "Memory wall",
      "No such thing"
    ],
    "options_hi": [
      "मेमोरी ऑपरेशन के पुन: क्रमबद्ध होने को रोकता है",
      "भौतिक बाधा",
      "मेमोरी दीवार",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Prevents reordering of memory operations",
    "answer_hi": "मेमोरी ऑपरेशन के पुन: क्रमबद्ध होने को रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is volatile with multithreading?",
    "question_hi": "मल्टीथ्रेडिंग के साथ volatile क्या है?",
    "options_en": [
      "Insufficient for thread safety",
      "Sufficient for thread safety",
      "Makes atomic",
      "No effect"
    ],
    "options_hi": [
      "थ्रेड सुरक्षा के लिए अपर्याप्त",
      "थ्रेड सुरक्षा के लिए पर्याप्त",
      "एटॉमिक बनाता है",
      "कोई प्रभाव नहीं"
    ],
    "answer_en": "Insufficient for thread safety",
    "answer_hi": "थ्रेड सुरक्षा के लिए अपर्याप्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is thread-local storage?",
    "question_hi": "थ्रेड-लोकल स्टोरेज क्या है?",
    "options_en": [
      "Variable unique to each thread",
      "Shared variable",
      "Global variable",
      "Static variable"
    ],
    "options_hi": [
      "प्रत्येक थ्रेड के लिए अद्वितीय चर",
      "साझा चर",
      "वैश्विक चर",
      "स्थिर चर"
    ],
    "answer_en": "Variable unique to each thread",
    "answer_hi": "प्रत्येक थ्रेड के लिए अद्वितीय चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is _Thread_local keyword?",
    "question_hi": "_Thread_local कीवर्ड क्या है?",
    "options_en": [
      "C11 keyword for thread-local",
      "Not in C",
      "Only C++",
      "Obsolete"
    ],
    "options_hi": [
      "थ्रेड-लोकल के लिए C11 कीवर्ड",
      "C में नहीं",
      "केवल C++",
      "अप्रचलित"
    ],
    "answer_en": "C11 keyword for thread-local",
    "answer_hi": "थ्रेड-लोकल के लिए C11 कीवर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is inline specifier in C99?",
    "question_hi": "C99 में इनलाइन स्पेसिफायर क्या है?",
    "options_en": [
      "Hint to inline function",
      "Force inline",
      "Same as macro",
      "Not in C99"
    ],
    "options_hi": [
      "इनलाइन फ़ंक्शन के लिए संकेत",
      "फोर्स इनलाइन",
      "मैक्रो के समान",
      "C99 में नहीं"
    ],
    "answer_en": "Hint to inline function",
    "answer_hi": "इनलाइन फ़ंक्शन के लिए संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is _Noreturn specifier?",
    "question_hi": "_Noreturn स्पेसिफायर क्या है?",
    "options_en": [
      "Function never returns",
      "Always returns",
      "Returns void",
      "Not in C"
    ],
    "options_hi": [
      "फ़ंक्शन कभी वापस नहीं आता",
      "हमेशा लौटता है",
      "वॉइड लौटाता है",
      "C में नहीं"
    ],
    "answer_en": "Function never returns",
    "answer_hi": "फ़ंक्शन कभी वापस नहीं आता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is static_assert in C11?",
    "question_hi": "C11 में static_assert क्या है?",
    "options_en": [
      "Compile-time assertion",
      "Runtime assertion",
      "Debug assertion",
      "Not in C11"
    ],
    "options_hi": [
      "संकलन-समय दावा",
      "रनटाइम दावा",
      "डिबग दावा",
      "C11 में नहीं"
    ],
    "answer_en": "Compile-time assertion",
    "answer_hi": "संकलन-समय दावा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is alignas specifier?",
    "question_hi": "alignas स्पेसिफायर क्या है?",
    "options_en": [
      "Specifies alignment requirement",
      "Specifies size",
      "Specifies type",
      "Not in C"
    ],
    "options_hi": [
      "संरेखण आवश्यकता निर्दिष्ट करता है",
      "आकार निर्दिष्ट करता है",
      "प्रकार निर्दिष्ट करता है",
      "C में नहीं"
    ],
    "answer_en": "Specifies alignment requirement",
    "answer_hi": "संरेखण आवश्यकता निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is alignof operator?",
    "question_hi": "alignof ऑपरेटर क्या है?",
    "options_en": [
      "Returns alignment requirement",
      "Returns size",
      "Returns address",
      "Not in C"
    ],
    "options_hi": [
      "संरेखण आवश्यकता लौटाता है",
      "आकार लौटाता है",
      "पता लौटाता है",
      "C में नहीं"
    ],
    "answer_en": "Returns alignment requirement",
    "answer_hi": "संरेखण आवश्यकता लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is generic selection?",
    "question_hi": "जेनेरिक सिलेक्शन क्या है?",
    "options_en": [
      "_Generic for type-based dispatch",
      "template in C",
      "Only in C++",
      "Not in C"
    ],
    "options_hi": [
      "टाइप-आधारित डिस्पैच के लिए _Generic",
      "C में टेम्पलेट",
      "केवल C++ में",
      "C में नहीं"
    ],
    "answer_en": "_Generic for type-based dispatch",
    "answer_hi": "टाइप-आधारित डिस्पैच के लिए _Generic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is anonymous union?",
    "question_hi": "अनाम यूनियन क्या है?",
    "options_en": [
      "Union without tag name",
      "Union with name",
      "No such thing",
      "Only in C++"
    ],
    "options_hi": [
      "टैग नाम के बिना यूनियन",
      "नाम के साथ यूनियन",
      "ऐसी कोई चीज़ नहीं",
      "केवल C++ में"
    ],
    "answer_en": "Union without tag name",
    "answer_hi": "टैग नाम के बिना यूनियन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is designated initializers for arrays?",
    "question_hi": "ऐरे के लिए डिज़ाइनेटेड इनिशियलाइज़र्स क्या हैं?",
    "options_en": [
      "[index] = value syntax",
      "Only sequential",
      "No such thing",
      "Only for structures"
    ],
    "options_hi": [
      "[index] = value सिंटैक्स",
      "केवल अनुक्रमिक",
      "ऐसी कोई चीज़ नहीं",
      "केवल संरचनाओं के लिए"
    ],
    "answer_en": "[index] = value syntax",
    "answer_hi": "[index] = value सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is compound literals for arrays?",
    "question_hi": "ऐरे के लिए कम्पाउंड लिटरल्स क्या हैं?",
    "options_en": [
      "(int[]){1,2,3} syntax",
      "No such thing",
      "Only for pointers",
      "Only in C++"
    ],
    "options_hi": [
      "(int[]){1,2,3} सिंटैक्स",
      "ऐसी कोई चीज़ नहीं",
      "केवल पॉइंटर्स के लिए",
      "केवल C++ में"
    ],
    "answer_en": "(int[]){1,2,3} syntax",
    "answer_hi": "(int[]){1,2,3} सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is variable length arrays in C99?",
    "question_hi": "C99 में वेरिएबल लेंथ ऐरे क्या हैं?",
    "options_en": [
      "Array size determined at runtime",
      "Fixed size",
      "Dynamic array",
      "Not in C99"
    ],
    "options_hi": [
      "ऐरे का आकार रनटाइम पर निर्धारित होता है",
      "निश्चित आकार",
      "गतिशील सरणी",
      "C99 में नहीं"
    ],
    "answer_en": "Array size determined at runtime",
    "answer_hi": "ऐरे का आकार रनटाइम पर निर्धारित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is restrict with arrays?",
    "question_hi": "ऐरे के साथ restrict क्या है?",
    "options_en": [
      "No overlapping arrays",
      "Overlapping allowed",
      "Same as const",
      "No effect"
    ],
    "options_hi": [
      "कोई ओवरलैपिंग ऐरे नहीं",
      "ओवरलैपिंग की अनुमति है",
      "const के समान",
      "कोई प्रभाव नहीं"
    ],
    "answer_en": "No overlapping arrays",
    "answer_hi": "कोई ओवरलैपिंग ऐरे नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is fenv.h header?",
    "question_hi": "fenv.h हेडर क्या है?",
    "options_en": [
      "Floating-point environment",
      "File environment",
      "Function environment",
      "Not standard"
    ],
    "options_hi": [
      "फ्लोटिंग-पॉइंट वातावरण",
      "फ़ाइल वातावरण",
      "फ़ंक्शन वातावरण",
      "मानक नहीं"
    ],
    "answer_en": "Floating-point environment",
    "answer_hi": "फ्लोटिंग-पॉइंट वातावरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is floating-point exception?",
    "question_hi": "फ्लोटिंग-पॉइंट एक्सेप्शन क्या है?",
    "options_en": [
      "FE_DIVBYZERO, FE_OVERFLOW etc.",
      "No exceptions",
      "Only integer exceptions",
      "Not in C"
    ],
    "options_hi": [
      "FE_DIVBYZERO, FE_OVERFLOW आदि।",
      "कोई अपवाद नहीं",
      "केवल पूर्णांक अपवाद",
      "C में नहीं"
    ],
    "answer_en": "FE_DIVBYZERO, FE_OVERFLOW etc.",
    "answer_hi": "FE_DIVBYZERO, FE_OVERFLOW आदि।",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is fesetround() function?",
    "question_hi": "fesetround() फ़ंक्शन क्या है?",
    "options_en": [
      "Sets floating-point rounding mode",
      "Sets exception mode",
      "Sets precision",
      "Not a function"
    ],
    "options_hi": [
      "फ्लोटिंग-पॉइंट राउंडिंग मोड सेट करता है",
      "एक्सेप्शन मोड सेट करता है",
      "सटीकता सेट करता है",
      "कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Sets floating-point rounding mode",
    "answer_hi": "फ्लोटिंग-पॉइंट राउंडिंग मोड सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is tgmath.h header?",
    "question_hi": "tgmath.h हेडर क्या है?",
    "options_en": [
      "Type-generic math macros",
      "Template math",
      "Only C++",
      "Not standard"
    ],
    "options_hi": [
      "टाइप-जेनेरिक मैथ मैक्रो",
      "टेम्पलेट मैथ",
      "केवल C++",
      "मानक नहीं"
    ],
    "answer_en": "Type-generic math macros",
    "answer_hi": "टाइप-जेनेरिक मैथ मैक्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is complex.h header?",
    "question_hi": "complex.h हेडर क्या है?",
    "options_en": [
      "Complex number support",
      "Only real numbers",
      "Not in C99",
      "Only C++"
    ],
    "options_hi": [
      "जटिल संख्या समर्थन",
      "केवल वास्तविक संख्याएँ",
      "C99 में नहीं",
      "केवल C++"
    ],
    "answer_en": "Complex number support",
    "answer_hi": "जटिल संख्या समर्थन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is _Imaginary type?",
    "question_hi": "_Imaginary टाइप क्या है?",
    "options_en": [
      "Optional imaginary type",
      "Always available",
      "Same as complex",
      "Not in C"
    ],
    "options_hi": [
      "वैकल्पिक काल्पनिक प्रकार",
      "हमेशा उपलब्ध",
      "कॉम्प्लेक्स के समान",
      "C में नहीं"
    ],
    "answer_en": "Optional imaginary type",
    "answer_hi": "वैकल्पिक काल्पनिक प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is #pragma STDC pragma?",
    "question_hi": "#pragma STDC प्राग्मा क्या है?",
    "options_en": [
      "Standard pragma for FP control",
      "Compiler specific",
      "Not standard",
      "Only for C++"
    ],
    "options_hi": [
      "FP नियंत्रण के लिए मानक प्राग्मा",
      "कंपाइलर विशिष्ट",
      "मानक नहीं",
      "केवल C++ के लिए"
    ],
    "answer_en": "Standard pragma for FP control",
    "answer_hi": "FP नियंत्रण के लिए मानक प्राग्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is #pragma pack?",
    "question_hi": "#pragma pack क्या है?",
    "options_en": [
      "Structure packing directive",
      "File packing",
      "Memory packing",
      "Not standard"
    ],
    "options_hi": [
      "संरचना पैकिंग निर्देश",
      "फ़ाइल पैकिंग",
      "मेमोरी पैकिंग",
      "मानक नहीं"
    ],
    "answer_en": "Structure packing directive",
    "answer_hi": "संरचना पैकिंग निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is attribute((constructor))?",
    "question_hi": "attribute((constructor)) क्या है?",
    "options_en": [
      "Function runs before main()",
      "After main()",
      "During compilation",
      "Not in C"
    ],
    "options_hi": [
      "फ़ंक्शन main() से पहले चलता है",
      "main() के बाद",
      "संकलन के दौरान",
      "C में नहीं"
    ],
    "answer_en": "Function runs before main()",
    "answer_hi": "फ़ंक्शन main() से पहले चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is attribute((destructor))?",
    "question_hi": "attribute((destructor)) क्या है?",
    "options_en": [
      "Function runs after main()",
      "Before main()",
      "During exit",
      "Not in C"
    ],
    "options_hi": [
      "फ़ंक्शन main() के बाद चलता है",
      "main() से पहले",
      "एग्ज़िट के दौरान",
      "C में नहीं"
    ],
    "answer_en": "Function runs after main()",
    "answer_hi": "फ़ंक्शन main() के बाद चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is attribute((weak))?",
    "question_hi": "attribute((weak)) क्या है?",
    "options_en": [
      "Weak symbol for linking",
      "Strong symbol",
      "No linking",
      "Not in C"
    ],
    "options_hi": [
      "लिंकिंग के लिए कमजोर प्रतीक",
      "मजबूत प्रतीक",
      "कोई लिंकिंग नहीं",
      "C में नहीं"
    ],
    "answer_en": "Weak symbol for linking",
    "answer_hi": "लिंकिंग के लिए कमजोर प्रतीक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is attribute((aligned))?",
    "question_hi": "attribute((aligned)) क्या है?",
    "options_en": [
      "Specifies alignment",
      "Specifies size",
      "Specifies packing",
      "Not in C"
    ],
    "options_hi": [
      "संरेखण निर्दिष्ट करता है",
      "आकार निर्दिष्ट करता है",
      "पैकिंग निर्दिष्ट करता है",
      "C में नहीं"
    ],
    "answer_en": "Specifies alignment",
    "answer_hi": "संरेखण निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is attribute((packed))?",
    "question_hi": "attribute((packed)) क्या है?",
    "options_en": [
      "Minimizes padding",
      "Adds padding",
      "Aligns structure",
      "Not in C"
    ],
    "options_hi": [
      "पैडिंग को कम करता है",
      "पैडिंग जोड़ता है",
      "संरचना को संरेखित करता है",
      "C में नहीं"
    ],
    "answer_en": "Minimizes padding",
    "answer_hi": "पैडिंग को कम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is __builtin_expect?",
    "question_hi": "__builtin_expect क्या है?",
    "options_en": [
      "Branch prediction hint",
      "Exception handling",
      "Memory allocation",
      "Not in C"
    ],
    "options_hi": [
      "ब्रांच प्रेडिक्शन संकेत",
      "एक्सेप्शन हैंडलिंग",
      "मेमोरी अलोकेशन",
      "C में नहीं"
    ],
    "answer_en": "Branch prediction hint",
    "answer_hi": "ब्रांच प्रेडिक्शन संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is __builtin_popcount?",
    "question_hi": "__builtin_popcount क्या है?",
    "options_en": [
      "Counts set bits",
      "Counts characters",
      "Population count",
      "Not standard"
    ],
    "options_hi": [
      "सेट बिट्स की गिनती करता है",
      "वर्णों की गिनती करता है",
      "जनसंख्या गणना",
      "मानक नहीं"
    ],
    "answer_en": "Counts set bits",
    "answer_hi": "सेट बिट्स की गिनती करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is __builtin_clz?",
    "question_hi": "__builtin_clz क्या है?",
    "options_en": [
      "Count leading zeros",
      "Count trailing zeros",
      "Count ones",
      "Not standard"
    ],
    "options_hi": [
      "अग्रणी शून्य की गिनती करें",
      "ट्रेलिंग शून्य की गिनती करें",
      "एक की गिनती करें",
      "मानक नहीं"
    ],
    "answer_en": "Count leading zeros",
    "answer_hi": "अग्रणी शून्य की गिनती करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is __builtin_ctz?",
    "question_hi": "__builtin_ctz क्या है?",
    "options_en": [
      "Count trailing zeros",
      "Count leading zeros",
      "Count ones",
      "Not standard"
    ],
    "options_hi": [
      "ट्रेलिंग शून्य की गिनती करें",
      "अग्रणी शून्य की गिनती करें",
      "एक की गिनती करें",
      "मानक नहीं"
    ],
    "answer_en": "Count trailing zeros",
    "answer_hi": "ट्रेलिंग शून्य की गिनती करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is __builtin_ffs?",
    "question_hi": "__builtin_ffs क्या है?",
    "options_en": [
      "Find first set bit",
      "Find last set bit",
      "Find file system",
      "Not standard"
    ],
    "options_hi": [
      "पहला सेट बिट ढूंढें",
      "अंतिम सेट बिट ढूंढें",
      "फ़ाइल सिस्टम ढूंढें",
      "मानक नहीं"
    ],
    "answer_en": "Find first set bit",
    "answer_hi": "पहला सेट बिट ढूंढें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is __builtin_prefetch?",
    "question_hi": "__builtin_prefetch क्या है?",
    "options_en": [
      "Prefetch data to cache",
      "Free cache",
      "Clear cache",
      "Not standard"
    ],
    "options_hi": [
      "डेटा को कैश में प्रीफ़ेच करें",
      "कैश मुक्त करें",
      "कैश साफ़ करें",
      "मानक नहीं"
    ],
    "answer_en": "Prefetch data to cache",
    "answer_hi": "डेटा को कैश में प्रीफ़ेच करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is __builtin_unreachable?",
    "question_hi": "__builtin_unreachable क्या है?",
    "options_en": [
      "Marks code as unreachable",
      "Marks reachable",
      "Error if reached",
      "Not standard"
    ],
    "options_hi": [
      "कोड को अनपहुंचनीय के रूप में चिह्नित करता है",
      "पहुंच योग्य चिह्नित करता है",
      "पहुंचने पर त्रुटि",
      "मानक नहीं"
    ],
    "answer_en": "Marks code as unreachable",
    "answer_hi": "कोड को अनपहुंचनीय के रूप में चिह्नित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is __builtin_trap?",
    "question_hi": "__builtin_trap क्या है?",
    "options_en": [
      "Generates trap instruction",
      "Prints error",
      "Continues execution",
      "Not standard"
    ],
    "options_hi": [
      "ट्रैप निर्देश उत्पन्न करता है",
      "त्रुटि प्रिंट करता है",
      "निष्पादन जारी रखता है",
      "मानक नहीं"
    ],
    "answer_en": "Generates trap instruction",
    "answer_hi": "ट्रैप निर्देश उत्पन्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is __builtin_constant_p?",
    "question_hi": "__builtin_constant_p क्या है?",
    "options_en": [
      "Checks if value is compile-time constant",
      "Checks runtime",
      "Makes constant",
      "Not standard"
    ],
    "options_hi": [
      "जांचता है कि मान संकलन-समय स्थिर है या नहीं",
      "रनटाइम जांचता है",
      "स्थिर बनाता है",
      "मानक नहीं"
    ],
    "answer_en": "Checks if value is compile-time constant",
    "answer_hi": "जांचता है कि मान संकलन-समय स्थिर है या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the most important skill for C programmer?",
    "question_hi": "C प्रोग्रामर के लिए सबसे महत्वपूर्ण कौशल क्या है?",
    "options_en": [
      "Understanding memory management",
      "Knowing all syntax",
      "Writing complex code",
      "Using latest features"
    ],
    "options_hi": [
      "मेमोरी प्रबंधन की समझ",
      "सभी सिंटैक्स जानना",
      "जटिल कोड लिखना",
      "नवीनतम सुविधाओं का उपयोग"
    ],
    "answer_en": "Understanding memory management",
    "answer_hi": "मेमोरी प्रबंधन की समझ",
    "attempted": false,
    "selected": ""
  }
];
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