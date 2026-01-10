const questions = [
  {
    "num": 1,
    "question_en": "What is the purpose of 'volatile' keyword with hardware registers?",
    "question_hi": "हार्डवेयर रजिस्टर्स के साथ 'volatile' कीवर्ड का उद्देश्य क्या है?",
    "options_en": [
      "Prevents compiler optimization for memory-mapped I/O",
      "Makes access faster",
      "Slows down access",
      "No purpose"
    ],
    "options_hi": [
      "मेमोरी-मैप्ड I/O के लिए कंपाइलर ऑप्टिमाइज़ेशन को रोकता है",
      "एक्सेस तेज करता है",
      "एक्सेस धीमा करता है",
      "कोई उद्देश्य नहीं"
    ],
    "answer_en": "Prevents compiler optimization for memory-mapped I/O",
    "answer_hi": "मेमोरी-मैप्ड I/O के लिए कंपाइलर ऑप्टिमाइज़ेशन को रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is memory-mapped I/O?",
    "question_hi": "मेमोरी-मैप्ड I/O क्या है?",
    "options_en": [
      "Hardware registers mapped to memory addresses",
      "Files mapped to memory",
      "Network mapped to memory",
      "No such concept"
    ],
    "options_hi": [
      "हार्डवेयर रजिस्टर्स मेमोरी एड्रेस में मैप किए गए",
      "फ़ाइलें मेमोरी में मैप की गईं",
      "नेटवर्क मेमोरी में मैप किया गया",
      "ऐसी कोई अवधारणा नहीं"
    ],
    "answer_en": "Hardware registers mapped to memory addresses",
    "answer_hi": "हार्डवेयर रजिस्टर्स मेमोरी एड्रेस में मैप किए गए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the difference between stack and heap allocation speed?",
    "question_hi": "स्टैक और हीप अलोकेशन स्पीड में क्या अंतर है?",
    "options_en": [
      "Stack allocation is faster",
      "Heap allocation is faster",
      "Both same speed",
      "Depends on system"
    ],
    "options_hi": [
      "स्टैक अलोकेशन तेज है",
      "हीप अलोकेशन तेज है",
      "दोनों समान गति",
      "सिस्टम पर निर्भर करता है"
    ],
    "answer_en": "Stack allocation is faster",
    "answer_hi": "स्टैक अलोकेशन तेज है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the maximum stack size in typical systems?",
    "question_hi": "विशिष्ट सिस्टम में अधिकतम स्टैक आकार क्या है?",
    "options_en": [
      "Usually 1-8 MB",
      "Unlimited",
      "Same as heap",
      "Only 64 KB"
    ],
    "options_hi": [
      "आमतौर पर 1-8 MB",
      "असीमित",
      "हीप के समान",
      "केवल 64 KB"
    ],
    "answer_en": "Usually 1-8 MB",
    "answer_hi": "आमतौर पर 1-8 MB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is stack frame?",
    "question_hi": "स्टैक फ्रेम क्या है?",
    "options_en": [
      "Memory area for function call",
      "Frame buffer",
      "Stack picture",
      "No such thing"
    ],
    "options_hi": [
      "फ़ंक्शन कॉल के लिए मेमोरी क्षेत्र",
      "फ्रेम बफर",
      "स्टैक चित्र",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Memory area for function call",
    "answer_hi": "फ़ंक्शन कॉल के लिए मेमोरी क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What information is stored in stack frame?",
    "question_hi": "स्टैक फ्रेम में कौन सी जानकारी संग्रहीत है?",
    "options_en": [
      "Local variables, return address, saved registers",
      "Global variables",
      "Only return address",
      "Only local variables"
    ],
    "options_hi": [
      "स्थानीय चर, वापसी पता, सहेजे गए रजिस्टर",
      "वैश्विक चर",
      "केवल वापसी पता",
      "केवल स्थानीय चर"
    ],
    "answer_en": "Local variables, return address, saved registers",
    "answer_hi": "स्थानीय चर, वापसी पता, सहेजे गए रजिस्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is calling convention?",
    "question_hi": "कॉलिंग कन्वेंशन क्या है?",
    "options_en": [
      "Rules for function calls and returns",
      "Phone calling rules",
      "No rules",
      "Only for main()"
    ],
    "options_hi": [
      "फ़ंक्शन कॉल और रिटर्न के नियम",
      "फोन कॉलिंग नियम",
      "कोई नियम नहीं",
      "केवल main() के लिए"
    ],
    "answer_en": "Rules for function calls and returns",
    "answer_hi": "फ़ंक्शन कॉल और रिटर्न के नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is cdecl calling convention?",
    "question_hi": "cdecl कॉलिंग कन्वेंशन क्या है?",
    "options_en": [
      "C default convention, caller cleans stack",
      "Callee cleans stack",
      "No stack cleaning",
      "Only for Windows"
    ],
    "options_hi": [
      "C डिफ़ॉल्ट कन्वेंशन, कॉलर स्टैक साफ करता है",
      "कॉली स्टैक साफ करता है",
      "कोई स्टैक सफाई नहीं",
      "केवल विंडोज के लिए"
    ],
    "answer_en": "C default convention, caller cleans stack",
    "answer_hi": "C डिफ़ॉल्ट कन्वेंशन, कॉलर स्टैक साफ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is stdcall calling convention?",
    "question_hi": "stdcall कॉलिंग कन्वेंशन क्या है?",
    "options_en": [
      "Callee cleans stack, used in Windows API",
      "Caller cleans stack",
      "No cleaning",
      "Only for Linux"
    ],
    "options_hi": [
      "कॉली स्टैक साफ करता है, Windows API में उपयोग किया जाता है",
      "कॉलर स्टैक साफ करता है",
      "कोई सफाई नहीं",
      "केवल लिनक्स के लिए"
    ],
    "answer_en": "Callee cleans stack, used in Windows API",
    "answer_hi": "कॉली स्टैक साफ करता है, Windows API में उपयोग किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is fastcall convention?",
    "question_hi": "fastcall कन्वेंशन क्या है?",
    "options_en": [
      "Passes arguments in registers",
      "Passes in stack",
      "No arguments",
      "Slow calling"
    ],
    "options_hi": [
      "रजिस्टर्स में तर्क पास करता है",
      "स्टैक में पास करता है",
      "कोई तर्क नहीं",
      "धीमी कॉलिंग"
    ],
    "answer_en": "Passes arguments in registers",
    "answer_hi": "रजिस्टर्स में तर्क पास करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is inline assembly syntax in GCC?",
    "question_hi": "GCC में इनलाइन असेंबली सिंटैक्स क्या है?",
    "options_en": [
      "__asm__(\"instructions\")",
      "asm \"instructions\"",
      "#asm instructions",
      "No inline assembly"
    ],
    "options_hi": [
      "__asm__(\"निर्देश\")",
      "asm \"निर्देश\"",
      "#asm निर्देश",
      "कोई इनलाइन असेंबली नहीं"
    ],
    "answer_en": "__asm__(\"instructions\")",
    "answer_hi": "__asm__(\"निर्देश\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of 'naked' function attribute?",
    "question_hi": "'naked' फ़ंक्शन एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": [
      "No prologue/epilogue generated",
      "Function without clothes",
      "Fast function",
      "No such attribute"
    ],
    "options_hi": [
      "कोई प्रोलॉग/एपिलॉग उत्पन्न नहीं होता",
      "बिना कपड़ों के फ़ंक्शन",
      "तेज फ़ंक्शन",
      "ऐसा कोई विशेषता नहीं"
    ],
    "answer_en": "No prologue/epilogue generated",
    "answer_hi": "कोई प्रोलॉग/एपिलॉग उत्पन्न नहीं होता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is interrupt handler function attribute?",
    "question_hi": "इंटरप्ट हैंडलर फ़ंक्शन एट्रिब्यूट क्या है?",
    "options_en": [
      "Saves/restores all registers",
      "No register save",
      "Fast interrupt",
      "No such attribute"
    ],
    "options_hi": [
      "सभी रजिस्टर्स सहेजता/पुनर्स्थापित करता है",
      "कोई रजिस्टर सेव नहीं",
      "तेज इंटरप्ट",
      "ऐसा कोई विशेषता नहीं"
    ],
    "answer_en": "Saves/restores all registers",
    "answer_hi": "सभी रजिस्टर्स सहेजता/पुनर्स्थापित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'section' attribute?",
    "question_hi": "'section' एट्रिब्यूट क्या है?",
    "options_en": [
      "Places code/data in specific section",
      "Divides section",
      "No section",
      "Only for data"
    ],
    "options_hi": [
      "कोड/डेटा को विशिष्ट सेक्शन में रखता है",
      "सेक्शन को विभाजित करता है",
      "कोई सेक्शन नहीं",
      "केवल डेटा के लिए"
    ],
    "answer_en": "Places code/data in specific section",
    "answer_hi": "कोड/डेटा को विशिष्ट सेक्शन में रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is '.text' section?",
    "question_hi": "'.text' सेक्शन क्या है?",
    "options_en": [
      "Contains executable code",
      "Contains data",
      "Contains strings",
      "Empty section"
    ],
    "options_hi": [
      "निष्पादन योग्य कोड होता है",
      "डेटा होता है",
      "स्ट्रिंग्स होती हैं",
      "खाली सेक्शन"
    ],
    "answer_en": "Contains executable code",
    "answer_hi": "निष्पादन योग्य कोड होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is '.data' section?",
    "question_hi": "'.data' सेक्शन क्या है?",
    "options_en": [
      "Contains initialized global/static variables",
      "Contains code",
      "Contains uninitialized data",
      "Empty section"
    ],
    "options_hi": [
      "आरंभिक वैश्विक/स्थिर चर होते हैं",
      "कोड होता है",
      "अनआरंभिक डेटा होता है",
      "खाली सेक्शन"
    ],
    "answer_en": "Contains initialized global/static variables",
    "answer_hi": "आरंभिक वैश्विक/स्थिर चर होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is '.bss' section?",
    "question_hi": "'.bss' सेक्शन क्या है?",
    "options_en": [
      "Contains uninitialized global/static variables",
      "Contains initialized data",
      "Contains code",
      "Empty section"
    ],
    "options_hi": [
      "अनआरंभिक वैश्विक/स्थिर चर होते हैं",
      "आरंभिक डेटा होता है",
      "कोड होता है",
      "खाली सेक्शन"
    ],
    "answer_en": "Contains uninitialized global/static variables",
    "answer_hi": "अनआरंभिक वैश्विक/स्थिर चर होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is '.rodata' section?",
    "question_hi": "'.rodata' सेक्शन क्या है?",
    "options_en": [
      "Contains read-only data",
      "Contains read-write data",
      "Contains code",
      "Empty section"
    ],
    "options_hi": [
      "केवल-पढ़ने के लिए डेटा होता है",
      "पढ़ने-लिखने के लिए डेटा होता है",
      "कोड होता है",
      "खाली सेक्शन"
    ],
    "answer_en": "Contains read-only data",
    "answer_hi": "केवल-पढ़ने के लिए डेटा होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is position-independent code (PIC)?",
    "question_hi": "पोजीशन-इंडिपेंडेंट कोड (PIC) क्या है?",
    "options_en": [
      "Code that can execute at any address",
      "Fixed address code",
      "Position dependent",
      "No such concept"
    ],
    "options_hi": [
      "कोड जो किसी भी पते पर निष्पादित हो सकता है",
      "निश्चित पता कोड",
      "पोजीशन डिपेंडेंट",
      "ऐसी कोई अवधारणा नहीं"
    ],
    "answer_en": "Code that can execute at any address",
    "answer_hi": "कोड जो किसी भी पते पर निष्पादित हो सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is -fPIC flag in GCC?",
    "question_hi": "GCC में -fPIC फ्लैग क्या है?",
    "options_en": [
      "Generate position-independent code",
      "Generate position-dependent code",
      "Optimize for speed",
      "Optimize for size"
    ],
    "options_hi": [
      "पोजीशन-इंडिपेंडेंट कोड जनरेट करें",
      "पोजीशन-डिपेंडेंट कोड जनरेट करें",
      "गति के लिए अनुकूलित करें",
      "आकार के लिए अनुकूलित करें"
    ],
    "answer_en": "Generate position-independent code",
    "answer_hi": "पोजीशन-इंडिपेंडेंट कोड जनरेट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is shared library?",
    "question_hi": "शेयर्ड लाइब्रेरी क्या है?",
    "options_en": [
      ".so file loaded at runtime",
      ".a static library",
      "Source code library",
      "No such library"
    ],
    "options_hi": [
      ".so फ़ाइल रनटाइम पर लोड होती है",
      ".a स्टैटिक लाइब्रेरी",
      "सोर्स कोड लाइब्रेरी",
      "ऐसी कोई लाइब्रेरी नहीं"
    ],
    "answer_en": ".so file loaded at runtime",
    "answer_hi": ".so फ़ाइल रनटाइम पर लोड होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is static library?",
    "question_hi": "स्टैटिक लाइब्रेरी क्या है?",
    "options_en": [
      ".a archive linked at compile time",
      ".so file",
      "Source code",
      "No such library"
    ],
    "options_hi": [
      ".a आर्काइव कम्पाइल टाइम पर लिंक किया गया",
      ".so फ़ाइल",
      "सोर्स कोड",
      "ऐसी कोई लाइब्रेरी नहीं"
    ],
    "answer_en": ".a archive linked at compile time",
    "answer_hi": ".a आर्काइव कम्पाइल टाइम पर लिंक किया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is dlopen() function?",
    "question_hi": "dlopen() फ़ंक्शन क्या है?",
    "options_en": [
      "Dynamically loads shared library",
      "Opens file",
      "Loads static library",
      "Closes library"
    ],
    "options_hi": [
      "डायनामिकली शेयर्ड लाइब्रेरी लोड करता है",
      "फ़ाइल खोलता है",
      "स्टैटिक लाइब्रेरी लोड करता है",
      "लाइब्रेरी बंद करता है"
    ],
    "answer_en": "Dynamically loads shared library",
    "answer_hi": "डायनामिकली शेयर्ड लाइब्रेरी लोड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is dlsym() function?",
    "question_hi": "dlsym() फ़ंक्शन क्या है?",
    "options_en": [
      "Gets address of symbol from shared library",
      "Gets symbol name",
      "Gets library name",
      "No such function"
    ],
    "options_hi": [
      "शेयर्ड लाइब्रेरी से प्रतीक का पता प्राप्त करता है",
      "प्रतीक नाम प्राप्त करता है",
      "लाइब्रेरी नाम प्राप्त करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Gets address of symbol from shared library",
    "answer_hi": "शेयर्ड लाइब्रेरी से प्रतीक का पता प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is dlclose() function?",
    "question_hi": "dlclose() फ़ंक्शन क्या है?",
    "options_en": [
      "Closes shared library",
      "Opens library",
      "Deletes library",
      "No such function"
    ],
    "options_hi": [
      "शेयर्ड लाइब्रेरी बंद करता है",
      "लाइब्रेरी खोलता है",
      "लाइब्रेरी हटाता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Closes shared library",
    "answer_hi": "शेयर्ड लाइब्रेरी बंद करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is dlerror() function?",
    "question_hi": "dlerror() फ़ंक्शन क्या है?",
    "options_en": [
      "Gets error message for dl functions",
      "Sets error",
      "Clears error",
      "No such function"
    ],
    "options_hi": [
      "dl फ़ंक्शंस के लिए त्रुटि संदेश प्राप्त करता है",
      "त्रुटि सेट करता है",
      "त्रुटि साफ़ करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Gets error message for dl functions",
    "answer_hi": "dl फ़ंक्शंस के लिए त्रुटि संदेश प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the advantage of shared libraries?",
    "question_hi": "शेयर्ड लाइब्रेरी का क्या लाभ है?",
    "options_en": [
      "Memory sharing between processes",
      "Faster loading",
      "Smaller executables",
      "All of above"
    ],
    "options_hi": [
      "प्रक्रियाओं के बीच मेमोरी साझाकरण",
      "तेज लोडिंग",
      "छोटे निष्पादन योग्य",
      "उपरोक्त सभी"
    ],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the disadvantage of shared libraries?",
    "question_hi": "शेयर्ड लाइब्रेरी का क्या नुकसान है?",
    "options_en": [
      "Dependency management",
      "Larger executables",
      "Slower execution",
      "No disadvantages"
    ],
    "options_hi": [
      "निर्भरता प्रबंधन",
      "बड़े निष्पादन योग्य",
      "धीमा निष्पादन",
      "कोई नुकसान नहीं"
    ],
    "answer_en": "Dependency management",
    "answer_hi": "निर्भरता प्रबंधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is LD_LIBRARY_PATH environment variable?",
    "question_hi": "LD_LIBRARY_PATH एनवायरनमेंट वेरिएबल क्या है?",
    "options_en": [
      "Search path for shared libraries",
      "Path for executables",
      "Path for headers",
      "No such variable"
    ],
    "options_hi": [
      "शेयर्ड लाइब्रेरी के लिए खोज पथ",
      "निष्पादन योग्य के लिए पथ",
      "हेडर के लिए पथ",
      "ऐसा कोई चर नहीं"
    ],
    "answer_en": "Search path for shared libraries",
    "answer_hi": "शेयर्ड लाइब्रेरी के लिए खोज पथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is LD_PRELOAD environment variable?",
    "question_hi": "LD_PRELOAD एनवायरनमेंट वेरिएबल क्या है?",
    "options_en": [
      "Preload specified libraries before others",
      "Load after others",
      "Don't load",
      "No such variable"
    ],
    "options_hi": [
      "दूसरों से पहले निर्दिष्ट लाइब्रेरी प्रीलोड करें",
      "दूसरों के बाद लोड करें",
      "लोड न करें",
      "ऐसा कोई चर नहीं"
    ],
    "answer_en": "Preload specified libraries before others",
    "answer_hi": "दूसरों से पहले निर्दिष्ट लाइब्रेरी प्रीलोड करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is function interposition?",
    "question_hi": "फ़ंक्शन इंटरपोजिशन क्या है?",
    "options_en": [
      "Replacing library function with custom one",
      "Calling function",
      "Removing function",
      "No such concept"
    ],
    "options_hi": [
      "लाइब्रेरी फ़ंक्शन को कस्टम से बदलना",
      "फ़ंक्शन कॉलिंग",
      "फ़ंक्शन हटाना",
      "ऐसी कोई अवधारणा नहीं"
    ],
    "answer_en": "Replacing library function with custom one",
    "answer_hi": "लाइब्रेरी फ़ंक्शन को कस्टम से बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is weak symbol?",
    "question_hi": "वीक सिंबल क्या है?",
    "options_en": [
      "Symbol that can be overridden",
      "Strong symbol",
      "No symbol",
      "Only for variables"
    ],
    "options_hi": [
      "प्रतीक जिसे ओवरराइड किया जा सकता है",
      "मजबूत प्रतीक",
      "कोई प्रतीक नहीं",
      "केवल चर के लिए"
    ],
    "answer_en": "Symbol that can be overridden",
    "answer_hi": "प्रतीक जिसे ओवरराइड किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is strong symbol?",
    "question_hi": "स्ट्रॉन्ग सिंबल क्या है?",
    "options_en": [
      "Symbol that cannot be overridden",
      "Weak symbol",
      "No symbol",
      "Only for functions"
    ],
    "options_hi": [
      "प्रतीक जिसे ओवरराइड नहीं किया जा सकता",
      "कमजोर प्रतीक",
      "कोई प्रतीक नहीं",
      "केवल कार्यों के लिए"
    ],
    "answer_en": "Symbol that cannot be overridden",
    "answer_hi": "प्रतीक जिसे ओवरराइड नहीं किया जा सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is version script for shared libraries?",
    "question_hi": "शेयर्ड लाइब्रेरी के लिए वर्जन स्क्रिप्ट क्या है?",
    "options_en": [
      "Controls symbol visibility and versioning",
      "Script version",
      "Library version",
      "No such script"
    ],
    "options_hi": [
      "प्रतीक दृश्यता और संस्करण नियंत्रित करता है",
      "स्क्रिप्ट संस्करण",
      "लाइब्रेरी संस्करण",
      "ऐसी कोई स्क्रिप्ट नहीं"
    ],
    "answer_en": "Controls symbol visibility and versioning",
    "answer_hi": "प्रतीक दृश्यता और संस्करण नियंत्रित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is symbol visibility?",
    "question_hi": "सिंबल विजिबिलिटी क्या है?",
    "options_en": [
      "Which symbols are exported from library",
      "Symbol brightness",
      "Symbol size",
      "No such concept"
    ],
    "options_hi": [
      "कौन से प्रतीक लाइब्रेरी से निर्यात किए जाते हैं",
      "प्रतीक चमक",
      "प्रतीक आकार",
      "ऐसी कोई अवधारणा नहीं"
    ],
    "answer_en": "Which symbols are exported from library",
    "answer_hi": "कौन से प्रतीक लाइब्रेरी से निर्यात किए जाते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is default symbol visibility?",
    "question_hi": "डिफ़ॉल्ट सिंबल विजिबिलिटी क्या है?",
    "options_en": [
      "Global (exported)",
      "Hidden (not exported)",
      "Protected",
      "Internal"
    ],
    "options_hi": [
      "ग्लोबल (निर्यात)",
      "हिडन (नॉट एक्सपोर्टेड)",
      "प्रोटेक्टेड",
      "इंटरनल"
    ],
    "answer_en": "Global (exported)",
    "answer_hi": "ग्लोबल (निर्यात)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is __attribute__((visibility(\"hidden\")))?",
    "question_hi": "__attribute__((visibility(\"hidden\"))) क्या है?",
    "options_en": [
      "Makes symbol not exported",
      "Makes exported",
      "No effect",
      "Only for variables"
    ],
    "options_hi": [
      "प्रतीक को निर्यात नहीं करता",
      "निर्यात करता है",
      "कोई प्रभाव नहीं",
      "केवल चर के लिए"
    ],
    "answer_en": "Makes symbol not exported",
    "answer_hi": "प्रतीक को निर्यात नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is -fvisibility flag in GCC?",
    "question_hi": "GCC में -fvisibility फ्लैग क्या है?",
    "options_en": [
      "Sets default symbol visibility",
      "Sets optimization",
      "Sets debugging",
      "No such flag"
    ],
    "options_hi": [
      "डिफ़ॉल्ट प्रतीक दृश्यता सेट करता है",
      "ऑप्टिमाइज़ेशन सेट करता है",
      "डिबगिंग सेट करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Sets default symbol visibility",
    "answer_hi": "डिफ़ॉल्ट प्रतीक दृश्यता सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is soname of shared library?",
    "question_hi": "शेयर्ड लाइब्रेरी का सोनाम क्या है?",
    "options_en": [
      "Shared object name for versioning",
      "File name",
      "Path name",
      "No such name"
    ],
    "options_hi": [
      "संस्करण के लिए शेयर्ड ऑब्जेक्ट नाम",
      "फ़ाइल नाम",
      "पथ नाम",
      "ऐसा कोई नाम नहीं"
    ],
    "answer_en": "Shared object name for versioning",
    "answer_hi": "संस्करण के लिए शेयर्ड ऑब्जेक्ट नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is -soname flag in linker?",
    "question_hi": "लिंकर में -soname फ्लैग क्या है?",
    "options_en": [
      "Sets shared library soname",
      "Sets file name",
      "Sets path",
      "No such flag"
    ],
    "options_hi": [
      "शेयर्ड लाइब्रेरी सोनाम सेट करता है",
      "फ़ाइल नाम सेट करता है",
      "पथ सेट करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Sets shared library soname",
    "answer_hi": "शेयर्ड लाइब्रेरी सोनाम सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is readelf utility?",
    "question_hi": "readelf यूटिलिटी क्या है?",
    "options_en": [
      "Displays ELF file information",
      "Reads text file",
      "Reads binary",
      "No such utility"
    ],
    "options_hi": [
      "ELF फ़ाइल जानकारी प्रदर्शित करता है",
      "टेक्स्ट फ़ाइल पढ़ता है",
      "बाइनरी पढ़ता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Displays ELF file information",
    "answer_hi": "ELF फ़ाइल जानकारी प्रदर्शित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is objdump utility?",
    "question_hi": "objdump यूटिलिटी क्या है?",
    "options_en": [
      "Displays object file information",
      "Dumps objects",
      "Creates objects",
      "No such utility"
    ],
    "options_hi": [
      "ऑब्जेक्ट फ़ाइल जानकारी प्रदर्शित करता है",
      "ऑब्जेक्ट्स डंप करता है",
      "ऑब्जेक्ट्स बनाता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Displays object file information",
    "answer_hi": "ऑब्जेक्ट फ़ाइल जानकारी प्रदर्शित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is nm utility?",
    "question_hi": "nm यूटिलिटी क्या है?",
    "options_en": [
      "Lists symbols from object files",
      "Measures nanometers",
      "Creates names",
      "No such utility"
    ],
    "options_hi": [
      "ऑब्जेक्ट फ़ाइलों से प्रतीक सूचीबद्ध करता है",
      "नैनोमीटर मापता है",
      "नाम बनाता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Lists symbols from object files",
    "answer_hi": "ऑब्जेक्ट फ़ाइलों से प्रतीक सूचीबद्ध करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is strip utility?",
    "question_hi": "strip यूटिलिटी क्या है?",
    "options_en": [
      "Removes symbols from object file",
      "Adds symbols",
      "Lists symbols",
      "No such utility"
    ],
    "options_hi": [
      "ऑब्जेक्ट फ़ाइल से प्रतीक हटाता है",
      "प्रतीक जोड़ता है",
      "प्रतीक सूचीबद्ध करता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Removes symbols from object file",
    "answer_hi": "ऑब्जेक्ट फ़ाइल से प्रतीक हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is ldd utility?",
    "question_hi": "ldd यूटिलिटी क्या है?",
    "options_en": [
      "Lists shared library dependencies",
      "Loads libraries",
      "Links libraries",
      "No such utility"
    ],
    "options_hi": [
      "शेयर्ड लाइब्रेरी निर्भरताओं को सूचीबद्ध करता है",
      "लाइब्रेरी लोड करता है",
      "लाइब्रेरी लिंक करता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Lists shared library dependencies",
    "answer_hi": "शेयर्ड लाइब्रेरी निर्भरताओं को सूचीबद्ध करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is size utility?",
    "question_hi": "size यूटिलिटी क्या है?",
    "options_en": [
      "Shows section sizes of object file",
      "Shows file size",
      "Shows memory size",
      "No such utility"
    ],
    "options_hi": [
      "ऑब्जेक्ट फ़ाइल के सेक्शन आकार दिखाता है",
      "फ़ाइल आकार दिखाता है",
      "मेमोरी आकार दिखाता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Shows section sizes of object file",
    "answer_hi": "ऑब्जेक्ट फ़ाइल के सेक्शन आकार दिखाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is strings utility?",
    "question_hi": "strings यूटिलिटी क्या है?",
    "options_en": [
      "Finds printable strings in binary",
      "Creates strings",
      "Compares strings",
      "No such utility"
    ],
    "options_hi": [
      "बाइनरी में प्रिंट करने योग्य स्ट्रिंग्स ढूंढता है",
      "स्ट्रिंग्स बनाता है",
      "स्ट्रिंग्स की तुलना करता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Finds printable strings in binary",
    "answer_hi": "बाइनरी में प्रिंट करने योग्य स्ट्रिंग्स ढूंढता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is file utility?",
    "question_hi": "file यूटिलिटी क्या है?",
    "options_en": [
      "Determines file type",
      "Opens file",
      "Creates file",
      "No such utility"
    ],
    "options_hi": [
      "फ़ाइल प्रकार निर्धारित करता है",
      "फ़ाइल खोलता है",
      "फ़ाइल बनाता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Determines file type",
    "answer_hi": "फ़ाइल प्रकार निर्धारित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is hexdump utility?",
    "question_hi": "hexdump यूटिलिटी क्या है?",
    "options_en": [
      "Displays file in hexadecimal",
      "Dumps hex",
      "Creates hex",
      "No such utility"
    ],
    "options_hi": [
      "हेक्साडेसिमल में फ़ाइल प्रदर्शित करता है",
      "हेक्स डंप करता है",
      "हेक्स बनाता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Displays file in hexadecimal",
    "answer_hi": "हेक्साडेसिमल में फ़ाइल प्रदर्शित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is xxd utility?",
    "question_hi": "xxd यूटिलिटी क्या है?",
    "options_en": [
      "Creates hex dump or does reverse",
      "Only dumps",
      "Only reverses",
      "No such utility"
    ],
    "options_hi": [
      "हेक्स डंप बनाता है या उल्टा करता है",
      "केवल डंप करता है",
      "केवल उल्टा करता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Creates hex dump or does reverse",
    "answer_hi": "हेक्स डंप बनाता है या उल्टा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is perf utility?",
    "question_hi": "perf यूटिलिटी क्या है?",
    "options_en": [
      "Performance analysis tool",
      "Perfect tool",
      "Permission tool",
      "No such utility"
    ],
    "options_hi": [
      "प्रदर्शन विश्लेषण उपकरण",
      "परफेक्ट टूल",
      "परमिशन टूल",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Performance analysis tool",
    "answer_hi": "प्रदर्शन विश्लेषण उपकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is strace utility?",
    "question_hi": "strace यूटिलिटी क्या है?",
    "options_en": [
      "Traces system calls and signals",
      "Traces function calls",
      "Traces memory",
      "No such utility"
    ],
    "options_hi": [
      "सिस्टम कॉल और सिग्नल का पता लगाता है",
      "फ़ंक्शन कॉल का पता लगाता है",
      "मेमोरी का पता लगाता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Traces system calls and signals",
    "answer_hi": "सिस्टम कॉल और सिग्नल का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is ltrace utility?",
    "question_hi": "ltrace यूटिलिटी क्या है?",
    "options_en": [
      "Traces library calls",
      "Traces system calls",
      "Traces both",
      "No such utility"
    ],
    "options_hi": [
      "लाइब्रेरी कॉल का पता लगाता है",
      "सिस्टम कॉल का पता लगाता है",
      "दोनों का पता लगाता है",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Traces library calls",
    "answer_hi": "लाइब्रेरी कॉल का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is gprof utility?",
    "question_hi": "gprof यूटिलिटी क्या है?",
    "options_en": [
      "Call graph execution profiler",
      "Memory profiler",
      "CPU profiler",
      "No such utility"
    ],
    "options_hi": [
      "कॉल ग्राफ निष्पादन प्रोफाइलर",
      "मेमोरी प्रोफाइलर",
      "CPU प्रोफाइलर",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Call graph execution profiler",
    "answer_hi": "कॉल ग्राफ निष्पादन प्रोफाइलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is valgrind utility?",
    "question_hi": "valgrind यूटिलिटी क्या है?",
    "options_en": [
      "Memory debugging and profiling",
      "Code optimization",
      "Code compilation",
      "No such utility"
    ],
    "options_hi": [
      "मेमोरी डीबगिंग और प्रोफाइलिंग",
      "कोड ऑप्टिमाइज़ेशन",
      "कोड संकलन",
      "ऐसी कोई उपयोगिता नहीं"
    ],
    "answer_en": "Memory debugging and profiling",
    "answer_hi": "मेमोरी डीबगिंग और प्रोफाइलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is memory debugging with valgrind?",
    "question_hi": "valgrind के साथ मेमोरी डीबगिंग क्या है?",
    "options_en": [
      "Detects memory leaks, invalid accesses",
      "Only leaks",
      "Only accesses",
      "No debugging"
    ],
    "options_hi": [
      "मेमोरी लीक, अमान्य पहुंच का पता लगाता है",
      "केवल लीक",
      "केवल पहुंच",
      "कोई डीबगिंग नहीं"
    ],
    "answer_en": "Detects memory leaks, invalid accesses",
    "answer_hi": "मेमोरी लीक, अमान्य पहुंच का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is massif tool in valgrind?",
    "question_hi": "valgrind में massif टूल क्या है?",
    "options_en": [
      "Heap profiler",
      "Stack profiler",
      "CPU profiler",
      "No such tool"
    ],
    "options_hi": [
      "हीप प्रोफाइलर",
      "स्टैक प्रोफाइलर",
      "CPU प्रोफाइलर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Heap profiler",
    "answer_hi": "हीप प्रोफाइलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is cachegrind tool in valgrind?",
    "question_hi": "valgrind में cachegrind टूल क्या है?",
    "options_en": [
      "Cache profiler",
      "Memory profiler",
      "CPU profiler",
      "No such tool"
    ],
    "options_hi": [
      "कैश प्रोफाइलर",
      "मेमोरी प्रोफाइलर",
      "CPU प्रोफाइलर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Cache profiler",
    "answer_hi": "कैश प्रोफाइलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is callgrind tool in valgrind?",
    "question_hi": "valgrind में callgrind टूल क्या है?",
    "options_en": [
      "Call graph profiler",
      "Cache profiler",
      "Memory profiler",
      "No such tool"
    ],
    "options_hi": [
      "कॉल ग्राफ प्रोफाइलर",
      "कैश प्रोफाइलर",
      "मेमोरी प्रोफाइलर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Call graph profiler",
    "answer_hi": "कॉल ग्राफ प्रोफाइलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is helgrind tool in valgrind?",
    "question_hi": "valgrind में helgrind टूल क्या है?",
    "options_en": [
      "Thread error detector",
      "Memory detector",
      "Cache detector",
      "No such tool"
    ],
    "options_hi": [
      "थ्रेड त्रुटि डिटेक्टर",
      "मेमोरी डिटेक्टर",
      "कैश डिटेक्टर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Thread error detector",
    "answer_hi": "थ्रेड त्रुटि डिटेक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is drd tool in valgrind?",
    "question_hi": "valgrind में drd टूल क्या है?",
    "options_en": [
      "Thread error detector",
      "Memory detector",
      "Cache detector",
      "No such tool"
    ],
    "options_hi": [
      "थ्रेड त्रुटि डिटेक्टर",
      "मेमोरी डिटेक्टर",
      "कैश डिटेक्टर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Thread error detector",
    "answer_hi": "थ्रेड त्रुटि डिटेक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is address sanitizer (ASAN)?",
    "question_hi": "एड्रेस सैनिटाइज़र (ASAN) क्या है?",
    "options_en": [
      "Fast memory error detector",
      "Slow detector",
      "Compiler",
      "No such thing"
    ],
    "options_hi": [
      "तेज मेमोरी त्रुटि डिटेक्टर",
      "धीमा डिटेक्टर",
      "कंपाइलर",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Fast memory error detector",
    "answer_hi": "तेज मेमोरी त्रुटि डिटेक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is undefined behavior sanitizer (UBSAN)?",
    "question_hi": "अनडिफाइंड बिहेवियर सैनिटाइज़र (UBSAN) क्या है?",
    "options_en": [
      "Detects undefined behavior",
      "Detects memory errors",
      "Detects thread errors",
      "No such thing"
    ],
    "options_hi": [
      "अपरिभाषित व्यवहार का पता लगाता है",
      "मेमोरी त्रुटियों का पता लगाता है",
      "थ्रेड त्रुटियों का पता लगाता है",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Detects undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is thread sanitizer (TSAN)?",
    "question_hi": "थ्रेड सैनिटाइज़र (TSAN) क्या है?",
    "options_en": [
      "Detects data races",
      "Detects memory leaks",
      "Detects cache issues",
      "No such thing"
    ],
    "options_hi": [
      "डेटा रेस का पता लगाता है",
      "मेमोरी लीक का पता लगाता है",
      "कैश समस्याओं का पता लगाता है",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Detects data races",
    "answer_hi": "डेटा रेस का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is memory sanitizer (MSAN)?",
    "question_hi": "मेमोरी सैनिटाइज़र (MSAN) क्या है?",
    "options_en": [
      "Detects uninitialized memory reads",
      "Detects memory leaks",
      "Detects buffer overflows",
      "No such thing"
    ],
    "options_hi": [
      "अनइनिशियलाइज्ड मेमोरी रीड का पता लगाता है",
      "मेमोरी लीक का पता लगाता है",
      "बफ़र ओवरफ्लो का पता लगाता है",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Detects uninitialized memory reads",
    "answer_hi": "अनइनिशियलाइज्ड मेमोरी रीड का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is leak sanitizer (LSAN)?",
    "question_hi": "लीक सैनिटाइज़र (LSAN) क्या है?",
    "options_en": [
      "Detects memory leaks",
      "Detects data races",
      "Detects uninitialized reads",
      "No such thing"
    ],
    "options_hi": [
      "मेमोरी लीक का पता लगाता है",
      "डेटा रेस का पता लगाता है",
      "अनइनिशियलाइज्ड रीड का पता लगाता है",
      "ऐसी कोई चीज़ नहीं"
    ],
    "answer_en": "Detects memory leaks",
    "answer_hi": "मेमोरी लीक का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is -fsanitize=address flag?",
    "question_hi": "-fsanitize=address फ्लैग क्या है?",
    "options_en": [
      "Enables address sanitizer",
      "Enables thread sanitizer",
      "Enables undefined sanitizer",
      "No such flag"
    ],
    "options_hi": [
      "एड्रेस सैनिटाइज़र सक्षम करता है",
      "थ्रेड सैनिटाइज़र सक्षम करता है",
      "अनडिफाइंड सैनिटाइज़र सक्षम करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Enables address sanitizer",
    "answer_hi": "एड्रेस सैनिटाइज़र सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is -fsanitize=thread flag?",
    "question_hi": "-fsanitize=thread फ्लैग क्या है?",
    "options_en": [
      "Enables thread sanitizer",
      "Enables address sanitizer",
      "Enables memory sanitizer",
      "No such flag"
    ],
    "options_hi": [
      "थ्रेड सैनिटाइज़र सक्षम करता है",
      "एड्रेस सैनिटाइज़र सक्षम करता है",
      "मेमोरी सैनिटाइज़र सक्षम करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Enables thread sanitizer",
    "answer_hi": "थ्रेड सैनिटाइज़र सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is -fsanitize=undefined flag?",
    "question_hi": "-fsanitize=undefined फ्लैग क्या है?",
    "options_en": [
      "Enables undefined behavior sanitizer",
      "Enables address sanitizer",
      "Enables thread sanitizer",
      "No such flag"
    ],
    "options_hi": [
      "अनडिफाइंड बिहेवियर सैनिटाइज़र सक्षम करता है",
      "एड्रेस सैनिटाइज़र सक्षम करता है",
      "थ्रेड सैनिटाइज़र सक्षम करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Enables undefined behavior sanitizer",
    "answer_hi": "अनडिफाइंड बिहेवियर सैनिटाइज़र सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is -fsanitize=memory flag?",
    "question_hi": "-fsanitize=memory फ्लैग क्या है?",
    "options_en": [
      "Enables memory sanitizer",
      "Enables address sanitizer",
      "Enables thread sanitizer",
      "No such flag"
    ],
    "options_hi": [
      "मेमोरी सैनिटाइज़र सक्षम करता है",
      "एड्रेस सैनिटाइज़र सक्षम करता है",
      "थ्रेड सैनिटाइज़र सक्षम करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Enables memory sanitizer",
    "answer_hi": "मेमोरी सैनिटाइज़र सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is -fsanitize=leak flag?",
    "question_hi": "-fsanitize=leak फ्लैग क्या है?",
    "options_en": [
      "Enables leak sanitizer",
      "Enables address sanitizer",
      "Enables thread sanitizer",
      "No such flag"
    ],
    "options_hi": [
      "लीक सैनिटाइज़र सक्षम करता है",
      "एड्रेस सैनिटाइज़र सक्षम करता है",
      "थ्रेड सैनिटाइज़र सक्षम करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Enables leak sanitizer",
    "answer_hi": "लीक सैनिटाइज़र सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is static analysis?",
    "question_hi": "स्टैटिक एनालिसिस क्या है?",
    "options_en": [
      "Analyzing code without executing",
      "Analyzing while running",
      "Analyzing after crash",
      "No analysis"
    ],
    "options_hi": [
      "निष्पादन के बिना कोड का विश्लेषण",
      "चलते समय विश्लेषण",
      "क्रैश के बाद विश्लेषण",
      "कोई विश्लेषण नहीं"
    ],
    "answer_en": "Analyzing code without executing",
    "answer_hi": "निष्पादन के बिना कोड का विश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is dynamic analysis?",
    "question_hi": "डायनामिक एनालिसिस क्या है?",
    "options_en": [
      "Analyzing code while executing",
      "Analyzing without executing",
      "Analyzing source only",
      "No analysis"
    ],
    "options_hi": [
      "निष्पादन के दौरान कोड का विश्लेषण",
      "निष्पादन के बिना विश्लेषण",
      "केवल स्रोत का विश्लेषण",
      "कोई विश्लेषण नहीं"
    ],
    "answer_en": "Analyzing code while executing",
    "answer_hi": "निष्पादन के दौरान कोड का विश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is splint static analyzer?",
    "question_hi": "splint स्टैटिक एनालाइज़र क्या है?",
    "options_en": [
      "C program checker",
      "C++ checker",
      "Java checker",
      "No such tool"
    ],
    "options_hi": [
      "C प्रोग्राम चेकर",
      "C++ चेकर",
      "Java चेकर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "C program checker",
    "answer_hi": "C प्रोग्राम चेकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is cppcheck static analyzer?",
    "question_hi": "cppcheck स्टैटिक एनालाइज़र क्या है?",
    "options_en": [
      "C/C++ code checker",
      "Only C checker",
      "Only C++ checker",
      "No such tool"
    ],
    "options_hi": [
      "C/C++ कोड चेकर",
      "केवल C चेकर",
      "केवल C++ चेकर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "C/C++ code checker",
    "answer_hi": "C/C++ कोड चेकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is flawfinder static analyzer?",
    "question_hi": "flawfinder स्टैटिक एनालाइज़र क्या है?",
    "options_en": [
      "Security flaw scanner",
      "Performance scanner",
      "Memory scanner",
      "No such tool"
    ],
    "options_hi": [
      "सुरक्षा दोष स्कैनर",
      "प्रदर्शन स्कैनर",
      "मेमोरी स्कैनर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Security flaw scanner",
    "answer_hi": "सुरक्षा दोष स्कैनर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is Coverity static analyzer?",
    "question_hi": "Coverity स्टैटिक एनालाइज़र क्या है?",
    "options_en": [
      "Commercial static analysis tool",
      "Free tool",
      "Dynamic tool",
      "No such tool"
    ],
    "options_hi": [
      "वाणिज्यिक स्थैतिक विश्लेषण उपकरण",
      "मुफ्त उपकरण",
      "गतिशील उपकरण",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Commercial static analysis tool",
    "answer_hi": "वाणिज्यिक स्थैतिक विश्लेषण उपकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is Clang Static Analyzer?",
    "question_hi": "Clang Static Analyzer क्या है?",
    "options_en": [
      "LLVM-based static analyzer",
      "GCC-based analyzer",
      "Java analyzer",
      "No such tool"
    ],
    "options_hi": [
      "LLVM-आधारित स्थैतिक विश्लेषक",
      "GCC-आधारित विश्लेषक",
      "Java विश्लेषक",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "LLVM-based static analyzer",
    "answer_hi": "LLVM-आधारित स्थैतिक विश्लेषक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is fuzzing?",
    "question_hi": "फज़िंग क्या है?",
    "options_en": [
      "Automated testing with random inputs",
      "Manual testing",
      "Unit testing",
      "No testing"
    ],
    "options_hi": [
      "यादृच्छिक इनपुट के साथ स्वचालित परीक्षण",
      "मैनुअल परीक्षण",
      "यूनिट परीक्षण",
      "कोई परीक्षण नहीं"
    ],
    "answer_en": "Automated testing with random inputs",
    "answer_hi": "यादृच्छिक इनपुट के साथ स्वचालित परीक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is AFL fuzzer?",
    "question_hi": "AFL फज़र क्या है?",
    "options_en": [
      "American Fuzzy Lop fuzzer",
      "Asian Fuzzy Lop",
      "African Fuzzy Lop",
      "No such fuzzer"
    ],
    "options_hi": [
      "अमेरिकन फज़ी लोप फज़र",
      "एशियन फज़ी लोप",
      "अफ्रीकन फज़ी लोप",
      "ऐसा कोई फज़र नहीं"
    ],
    "answer_en": "American Fuzzy Lop fuzzer",
    "answer_hi": "अमेरिकन फज़ी लोप फज़र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is libFuzzer?",
    "question_hi": "libFuzzer क्या है?",
    "options_en": [
      "In-process fuzzing library",
      "Out-of-process fuzzer",
      "Network fuzzer",
      "No such library"
    ],
    "options_hi": [
      "इन-प्रोसेस फज़िंग लाइब्रेरी",
      "आउट-ऑफ-प्रोसेस फज़र",
      "नेटवर्क फज़र",
      "ऐसी कोई लाइब्रेरी नहीं"
    ],
    "answer_en": "In-process fuzzing library",
    "answer_hi": "इन-प्रोसेस फज़िंग लाइब्रेरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is code coverage?",
    "question_hi": "कोड कवरेज क्या है?",
    "options_en": [
      "Measure of code exercised by tests",
      "Code size",
      "Code quality",
      "No measure"
    ],
    "options_hi": [
      "परीक्षणों द्वारा निष्पादित कोड का माप",
      "कोड आकार",
      "कोड गुणवत्ता",
      "कोई माप नहीं"
    ],
    "answer_en": "Measure of code exercised by tests",
    "answer_hi": "परीक्षणों द्वारा निष्पादित कोड का माप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is gcov tool?",
    "question_hi": "gcov टूल क्या है?",
    "options_en": [
      "Code coverage analysis tool",
      "Code compiler",
      "Code debugger",
      "No such tool"
    ],
    "options_hi": [
      "कोड कवरेज विश्लेषण उपकरण",
      "कोड कंपाइलर",
      "कोड डीबगर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Code coverage analysis tool",
    "answer_hi": "कोड कवरेज विश्लेषण उपकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is lcov tool?",
    "question_hi": "lcov टूल क्या है?",
    "options_en": [
      "Graphical front-end for gcov",
      "Line coverage tool",
      "Link coverage",
      "No such tool"
    ],
    "options_hi": [
      "gcov के लिए ग्राफिकल फ्रंट-एंड",
      "लाइन कवरेज टूल",
      "लिंक कवरेज",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Graphical front-end for gcov",
    "answer_hi": "gcov के लिए ग्राफिकल फ्रंट-एंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is line coverage?",
    "question_hi": "लाइन कवरेज क्या है?",
    "options_en": [
      "Which source lines were executed",
      "Which functions",
      "Which branches",
      "No coverage"
    ],
    "options_hi": [
      "कौन सी स्रोत पंक्तियाँ निष्पादित की गईं",
      "कौन से कार्य",
      "कौन सी शाखाएँ",
      "कोई कवरेज नहीं"
    ],
    "answer_en": "Which source lines were executed",
    "answer_hi": "कौन सी स्रोत पंक्तियाँ निष्पादित की गईं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is branch coverage?",
    "question_hi": "ब्रांच कवरेज क्या है?",
    "options_en": [
      "Which control branches were taken",
      "Which lines",
      "Which functions",
      "No coverage"
    ],
    "options_hi": [
      "कौन सी नियंत्रण शाखाएँ ली गईं",
      "कौन सी पंक्तियाँ",
      "कौन से कार्य",
      "कोई कवरेज नहीं"
    ],
    "answer_en": "Which control branches were taken",
    "answer_hi": "कौन सी नियंत्रण शाखाएँ ली गईं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is function coverage?",
    "question_hi": "फ़ंक्शन कवरेज क्या है?",
    "options_en": [
      "Which functions were called",
      "Which lines",
      "Which branches",
      "No coverage"
    ],
    "options_hi": [
      "कौन से कार्य बुलाए गए",
      "कौन सी पंक्तियाँ",
      "कौन सी शाखाएँ",
      "कोई कवरेज नहीं"
    ],
    "answer_en": "Which functions were called",
    "answer_hi": "कौन से कार्य बुलाए गए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is statement coverage?",
    "question_hi": "स्टेटमेंट कवरेज क्या है?",
    "options_en": [
      "Which statements were executed",
      "Which lines",
      "Which functions",
      "No coverage"
    ],
    "options_hi": [
      "कौन से स्टेटमेंट निष्पादित किए गए",
      "कौन सी पंक्तियाँ",
      "कौन से कार्य",
      "कोई कवरेज नहीं"
    ],
    "answer_en": "Which statements were executed",
    "answer_hi": "कौन से स्टेटमेंट निष्पादित किए गए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is -fprofile-arcs flag?",
    "question_hi": "-fprofile-arcs फ्लैग क्या है?",
    "options_en": [
      "Generates arc profiling information",
      "Generates line info",
      "Generates branch info",
      "No such flag"
    ],
    "options_hi": [
      "आर्क प्रोफाइलिंग जानकारी उत्पन्न करता है",
      "लाइन जानकारी उत्पन्न करता है",
      "ब्रांच जानकारी उत्पन्न करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Generates arc profiling information",
    "answer_hi": "आर्क प्रोफाइलिंग जानकारी उत्पन्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is -ftest-coverage flag?",
    "question_hi": "-ftest-coverage फ्लैग क्या है?",
    "options_en": [
      "Generates coverage info for gcov",
      "Generates test info",
      "Generates debug info",
      "No such flag"
    ],
    "options_hi": [
      "gcov के लिए कवरेज जानकारी उत्पन्न करता है",
      "टेस्ट जानकारी उत्पन्न करता है",
      "डिबग जानकारी उत्पन्न करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Generates coverage info for gcov",
    "answer_hi": "gcov के लिए कवरेज जानकारी उत्पन्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is -fprofile-generate flag?",
    "question_hi": "-fprofile-generate फ्लैग क्या है?",
    "options_en": [
      "Generates profiling information",
      "Generates coverage",
      "Generates debug",
      "No such flag"
    ],
    "options_hi": [
      "प्रोफाइलिंग जानकारी उत्पन्न करता है",
      "कवरेज उत्पन्न करता है",
      "डिबग उत्पन्न करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Generates profiling information",
    "answer_hi": "प्रोफाइलिंग जानकारी उत्पन्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is -fprofile-use flag?",
    "question_hi": "-fprofile-use फ्लैग क्या है?",
    "options_en": [
      "Uses profiling info for optimization",
      "Uses coverage",
      "Uses debug",
      "No such flag"
    ],
    "options_hi": [
      "ऑप्टिमाइज़ेशन के लिए प्रोफाइलिंग जानकारी का उपयोग करता है",
      "कवरेज का उपयोग करता है",
      "डिबग का उपयोग करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Uses profiling info for optimization",
    "answer_hi": "ऑप्टिमाइज़ेशन के लिए प्रोफाइलिंग जानकारी का उपयोग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is PGO (Profile Guided Optimization)?",
    "question_hi": "PGO (प्रोफाइल गाइडेड ऑप्टिमाइज़ेशन) क्या है?",
    "options_en": [
      "Optimization based on runtime profiling",
      "Static optimization",
      "Manual optimization",
      "No optimization"
    ],
    "options_hi": [
      "रनटाइम प्रोफाइलिंग पर आधारित अनुकूलन",
      "स्थैतिक अनुकूलन",
      "मैनुअल अनुकूलन",
      "कोई अनुकूलन नहीं"
    ],
    "answer_en": "Optimization based on runtime profiling",
    "answer_hi": "रनटाइम प्रोफाइलिंग पर आधारित अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is LTO (Link Time Optimization)?",
    "question_hi": "LTO (लिंक टाइम ऑप्टिमाइज़ेशन) क्या है?",
    "options_en": [
      "Optimization during linking",
      "Optimization during compilation",
      "Optimization during execution",
      "No optimization"
    ],
    "options_hi": [
      "लिंकिंग के दौरान अनुकूलन",
      "संकलन के दौरान अनुकूलन",
      "निष्पादन के दौरान अनुकूलन",
      "कोई अनुकूलन नहीं"
    ],
    "answer_en": "Optimization during linking",
    "answer_hi": "लिंकिंग के दौरान अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is -flto flag?",
    "question_hi": "-flto फ्लैग क्या है?",
    "options_en": [
      "Enables link time optimization",
      "Enables profile optimization",
      "Enables debug",
      "No such flag"
    ],
    "options_hi": [
      "लिंक टाइम ऑप्टिमाइज़ेशन सक्षम करता है",
      "प्रोफाइल ऑप्टिमाइज़ेशन सक्षम करता है",
      "डिबग सक्षम करता है",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Enables link time optimization",
    "answer_hi": "लिंक टाइम ऑप्टिमाइज़ेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is -fwhole-program flag?",
    "question_hi": "-fwhole-program फ्लैग क्या है?",
    "options_en": [
      "Assumes whole program visibility for LTO",
      "Assumes partial program",
      "No assumption",
      "No such flag"
    ],
    "options_hi": [
      "LTO के लिए संपूर्ण कार्यक्रम दृश्यता मानता है",
      "आंशिक कार्यक्रम मानता है",
      "कोई धारणा नहीं",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Assumes whole program visibility for LTO",
    "answer_hi": "LTO के लिए संपूर्ण कार्यक्रम दृश्यता मानता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is -fomit-frame-pointer flag?",
    "question_hi": "-fomit-frame-pointer फ्लैग क्या है?",
    "options_en": [
      "Omits frame pointer for faster calls",
      "Includes frame pointer",
      "No effect",
      "No such flag"
    ],
    "options_hi": [
      "तेज कॉल के लिए फ्रेम पॉइंटर छोड़ता है",
      "फ्रेम पॉइंटर शामिल करता है",
      "कोई प्रभाव नहीं",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Omits frame pointer for faster calls",
    "answer_hi": "तेज कॉल के लिए फ्रेम पॉइंटर छोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is -fno-omit-frame-pointer flag?",
    "question_hi": "-fno-omit-frame-pointer फ्लैग क्या है?",
    "options_en": [
      "Keeps frame pointer for debugging",
      "Omits frame pointer",
      "No effect",
      "No such flag"
    ],
    "options_hi": [
      "डीबगिंग के लिए फ्रेम पॉइंटर रखता है",
      "फ्रेम पॉइंटर छोड़ता है",
      "कोई प्रभाव नहीं",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Keeps frame pointer for debugging",
    "answer_hi": "डीबगिंग के लिए फ्रेम पॉइंटर रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is -funroll-loops flag?",
    "question_hi": "-funroll-loops फ्लैग क्या है?",
    "options_en": [
      "Unrolls loops for performance",
      "Rolls loops",
      "No loop optimization",
      "No such flag"
    ],
    "options_hi": [
      "प्रदर्शन के लिए लूप अनरोल करता है",
      "लूप रोल करता है",
      "कोई लूप ऑप्टिमाइज़ेशन नहीं",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Unrolls loops for performance",
    "answer_hi": "प्रदर्शन के लिए लूप अनरोल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is -fstrict-aliasing flag?",
    "question_hi": "-fstrict-aliasing फ्लैग क्या है?",
    "options_en": [
      "Enables strict aliasing rules",
      "Disables strict aliasing",
      "No effect",
      "No such flag"
    ],
    "options_hi": [
      "सख्त एलियासिंग नियम सक्षम करता है",
      "सख्त एलियासिंग अक्षम करता है",
      "कोई प्रभाव नहीं",
      "ऐसा कोई झंडा नहीं"
    ],
    "answer_en": "Enables strict aliasing rules",
    "answer_hi": "सख्त एलियासिंग नियम सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the most important quality of a C programmer?",
    "question_hi": "C प्रोग्रामर का सबसे महत्वपूर्ण गुण क्या है?",
    "options_en": [
      "Attention to detail and memory awareness",
      "Knowing all libraries",
      "Writing fastest code",
      "Using latest features"
    ],
    "options_hi": [
      "विवरण पर ध्यान और मेमोरी जागरूकता",
      "सभी लाइब्रेरी जानना",
      "सबसे तेज़ कोड लिखना",
      "नवीनतम सुविधाओं का उपयोग"
    ],
    "answer_en": "Attention to detail and memory awareness",
    "answer_hi": "विवरण पर ध्यान और मेमोरी जागरूकता",
    "attempted": false,
    "selected": ""
  }
];

// All the JavaScript functions remain exactly the same as previous
// Just replace the questions array with this new one
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