const questions=  [
  {
    "num": 1,
    "question_en": "What is the purpose of 'std::vector' in C++?",
    "question_hi": "C++ में 'std::vector' का उद्देश्य क्या है?",
    "options_en": ["Dynamic array", "Linked list", "Fixed array", "Stack"],
    "options_hi": ["डायनामिक ऐरे", "लिंक्ड लिस्ट", "फिक्स्ड ऐरे", "स्टैक"],
    "answer_en": "Dynamic array",
    "answer_hi": "डायनामिक ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'const' correctness in C++?",
    "question_hi": "C++ में 'const' करेक्टनेस क्या है?",
    "options_en": ["Using const to prevent modifications", "Constant values", "Read-only variables", "All of these"],
    "options_hi": ["मॉडिफिकेशन रोकने के लिए const का उपयोग", "कॉन्स्टेंट वैल्यूज", "रीड-ओनली वेरिएबल्स", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the difference between '++i' and 'i++'?",
    "question_hi": "'++i' और 'i++' में क्या अंतर है?",
    "options_en": ["Pre-increment vs Post-increment", "No difference", "Speed difference", "Memory difference"],
    "options_hi": ["प्री-इंक्रीमेंट vs पोस्ट-इंक्रीमेंट", "कोई अंतर नहीं", "स्पीड अंतर", "मेमोरी अंतर"],
    "answer_en": "Pre-increment vs Post-increment",
    "answer_hi": "प्री-इंक्रीमेंट vs पोस्ट-इंक्रीमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'std::pair' used for?",
    "question_hi": "'std::pair' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Store two values together", "Key-value pair", "Both A and B", "None of these"],
    "options_hi": ["दो वैल्यूज एक साथ स्टोर करना", "की-वैल्यू पेयर", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Store two values together",
    "answer_hi": "दो वैल्यूज एक साथ स्टोर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'std::tuple' in C++?",
    "question_hi": "C++ में 'std::tuple' क्या है?",
    "options_en": ["Store multiple values", "Fixed size collection", "Both A and B", "Dynamic collection"],
    "options_hi": ["मल्टीपल वैल्यूज स्टोर करना", "फिक्स्ड साइज कलेक्शन", "A और B दोनों", "डायनामिक कलेक्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the purpose of 'std::optional'?",
    "question_hi": "'std::optional' का उद्देश्य क्या है?",
    "options_en": ["Represent optional values", "Handle null values", "Both A and B", "Required values"],
    "options_hi": ["ऑप्शनल वैल्यूज रिप्रेजेंट करना", "नल वैल्यूज हैंडल करना", "A और B दोनों", "रिक्वायर्ड वैल्यूज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'std::variant' used for?",
    "question_hi": "'std::variant' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Type-safe union", "Multiple types", "Both A and B", "Single type"],
    "options_hi": ["टाइप-सेफ यूनियन", "मल्टीपल टाइप्स", "A और B दोनों", "सिंगल टाइप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'std::any' in C++?",
    "question_hi": "C++ में 'std::any' क्या है?",
    "options_en": ["Store any type", "Type erasure", "Both A and B", "Fixed type"],
    "options_hi": ["किसी भी टाइप को स्टोर करना", "टाइप इरेज़र", "A और B दोनों", "फिक्स्ड टाइप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'std::string_view'?",
    "question_hi": "'std::string_view' क्या है?",
    "options_en": ["Non-owning string reference", "String copy", "Mutable string", "All of these"],
    "options_hi": ["नॉन-ओनिंग स्ट्रिंग रेफरेंस", "स्ट्रिंग कॉपी", "म्यूटेबल स्ट्रिंग", "ये सभी"],
    "answer_en": "Non-owning string reference",
    "answer_hi": "नॉन-ओनिंग स्ट्रिंग रेफरेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of 'std::filesystem'?",
    "question_hi": "'std::filesystem' का उद्देश्य क्या है?",
    "options_en": ["File system operations", "File I/O", "Both A and B", "Network operations"],
    "options_hi": ["फाइल सिस्टम ऑपरेशन्स", "फाइल I/O", "A और B दोनों", "नेटवर्क ऑपरेशन्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'std::span' used for?",
    "question_hi": "'std::span' का उपयोग किस लिए किया जाता है?",
    "options_en": ["View contiguous sequence", "Array view", "Both A and B", "Linked list view"],
    "options_hi": ["कॉन्टीग्यूअस सीक्वेंस व्यू", "ऐरे व्यू", "A और B दोनों", "लिंक्ड लिस्ट व्यू"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'std::format' in C++20?",
    "question_hi": "C++20 में 'std::format' क्या है?",
    "options_en": ["Type-safe formatting", "String formatting", "Both A and B", "Console output"],
    "options_hi": ["टाइप-सेफ फॉर्मेटिंग", "स्ट्रिंग फॉर्मेटिंग", "A और B दोनों", "कंसोल आउटपुट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'consteval' in C++20?",
    "question_hi": "C++20 में 'consteval' क्या है?",
    "options_en": ["Immediate function", "Compile-time function", "Both A and B", "Runtime function"],
    "options_hi": ["इमीडिएट फंक्शन", "कंपाइल-टाइम फंक्शन", "A और B दोनों", "रनटाइम फंक्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'std::jthread' in C++20?",
    "question_hi": "C++20 में 'std::jthread' क्या है?",
    "options_en": ["Joining thread", "Automatic join", "Both A and B", "Detached thread"],
    "options_hi": ["जॉइनिंग थ्रेड", "ऑटोमैटिक जॉइन", "A और B दोनों", "डिटैच्ड थ्रेड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'std::atomic_ref' in C++20?",
    "question_hi": "C++20 में 'std::atomic_ref' क्या है?",
    "options_en": ["Atomic reference", "Thread-safe reference", "Both A and B", "Regular reference"],
    "options_hi": ["एटॉमिक रेफरेंस", "थ्रेड-सेफ रेफरेंस", "A और B दोनों", "रेगुलर रेफरेंस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'std::source_location' in C++20?",
    "question_hi": "C++20 में 'std::source_location' क्या है?",
    "options_en": ["Source code location", "Debug information", "Both A and B", "Execution trace"],
    "options_hi": ["सोर्स कोड लोकेशन", "डीबग इंफॉर्मेशन", "A और B दोनों", "एक्जिक्यूशन ट्रेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'std::bit_cast' in C++20?",
    "question_hi": "C++20 में 'std::bit_cast' क्या है?",
    "options_en": ["Type punning", "Reinterpret bits", "Both A and B", "Value copy"],
    "options_hi": ["टाइप पनिंग", "बिट्स रीइंटरप्रेट", "A और B दोनों", "वैल्यू कॉपी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'std::is_constant_evaluated' in C++20?",
    "question_hi": "C++20 में 'std::is_constant_evaluated' क्या है?",
    "options_en": ["Check compile-time context", "Runtime check", "Both A and B", "Performance check"],
    "options_hi": ["कंपाइल-टाइम कॉन्टेक्स्ट चेक", "रनटाइम चेक", "A और B दोनों", "परफॉर्मेंस चेक"],
    "answer_en": "Check compile-time context",
    "answer_hi": "कंपाइल-टाइम कॉन्टेक्स्ट चेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'std::midpoint' in C++20?",
    "question_hi": "C++20 में 'std::midpoint' क्या है?",
    "options_en": ["Calculate midpoint", "Avoid overflow", "Both A and B", "Average calculation"],
    "options_hi": ["मिडपॉइंट कैलकुलेट", "ओवरफ्लो से बचना", "A और B दोनों", "औसत कैलकुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'std::lerp' in C++20?",
    "question_hi": "C++20 में 'std::lerp' क्या है?",
    "options_en": ["Linear interpolation", "Float interpolation", "Both A and B", "Curve fitting"],
    "options_hi": ["लीनियर इंटरपोलेशन", "फ्लोट इंटरपोलेशन", "A और B दोनों", "कर्व फिटिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'concepts' in C++20?",
    "question_hi": "C++20 में 'concepts' क्या है?",
    "options_en": ["Template constraints", "Type requirements", "Both A and B", "Function constraints"],
    "options_hi": ["टेम्पलेट कंस्ट्रेंट्स", "टाइप रिक्वायरमेंट्स", "A और B दोनों", "फंक्शन कंस्ट्रेंट्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'ranges' in C++20?",
    "question_hi": "C++20 में 'ranges' क्या है?",
    "options_en": ["Range-based algorithms", "View adaptors", "Both A and B", "Container operations"],
    "options_hi": ["रेंज-बेस्ड एल्गोरिदम", "व्यू एडाप्टर्स", "A और B दोनों", "कंटेनर ऑपरेशन्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'coroutines' in C++20?",
    "question_hi": "C++20 में 'coroutines' क्या है?",
    "options_en": ["Cooperative multitasking", "Suspend/resume functions", "Both A and B", "Threads"],
    "options_hi": ["कोऑपरेटिव मल्टीटास्किंग", "सस्पेंड/रिज्यूम फंक्शन", "A और B दोनों", "थ्रेड्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'modules' in C++20?",
    "question_hi": "C++20 में 'modules' क्या है?",
    "options_en": ["Compilation units", "Replace headers", "Both A and B", "Libraries"],
    "options_hi": ["कंपाइलेशन यूनिट्स", "हेडर्स रिप्लेस", "A और B दोनों", "लाइब्रेरीज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'three-way comparison' in C++20?",
    "question_hi": "C++20 में 'three-way comparison' क्या है?",
    "options_en": ["Spaceship operator", "<=> operator", "Both A and B", "Comparison function"],
    "options_hi": ["स्पेसशिप ऑपरेटर", "<=> ऑपरेटर", "A और B दोनों", "कम्पेरिजन फंक्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'std::expected' in C++23?",
    "question_hi": "C++23 में 'std::expected' क्या है?",
    "options_en": ["Error handling", "Value or error", "Both A and B", "Optional value"],
    "options_hi": ["एरर हैंडलिंग", "वैल्यू या एरर", "A और B दोनों", "ऑप्शनल वैल्यू"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'std::mdspan' in C++23?",
    "question_hi": "C++23 में 'std::mdspan' क्या है?",
    "options_en": ["Multi-dimensional span", "Array view", "Both A and B", "Matrix view"],
    "options_hi": ["मल्टी-डायमेंशनल स्पैन", "ऐरे व्यू", "A और B दोनों", "मैट्रिक्स व्यू"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'std::flat_map' in C++23?",
    "question_hi": "C++23 में 'std::flat_map' क्या है?",
    "options_en": ["Contiguous storage map", "Sorted vector", "Both A and B", "Hash map"],
    "options_hi": ["कॉन्टीग्यूअस स्टोरेज मैप", "सॉर्टेड वेक्टर", "A और B दोनों", "हैश मैप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'std::generator' in C++23?",
    "question_hi": "C++23 में 'std::generator' क्या है?",
    "options_en": ["Coroutine-based generator", "Lazy sequences", "Both A and B", "Eager sequences"],
    "options_hi": ["कोरोटीन-बेस्ड जेनरेटर", "लेजी सीक्वेंस", "A और B दोनों", "ईगर सीक्वेंस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'std::print' in C++23?",
    "question_hi": "C++23 में 'std::print' क्या है?",
    "options_en": ["Formatted output", "Type-safe printing", "Both A and B", "Console output"],
    "options_hi": ["फॉर्मेटेड आउटपुट", "टाइप-सेफ प्रिंटिंग", "A और B दोनों", "कंसोल आउटपुट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'std::stacktrace' in C++23?",
    "question_hi": "C++23 में 'std::stacktrace' क्या है?",
    "options_en": ["Call stack trace", "Debug information", "Both A and B", "Error trace"],
    "options_hi": ["कॉल स्टैक ट्रेस", "डीबग इंफॉर्मेशन", "A और B दोनों", "एरर ट्रेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'std::byteswap' in C++23?",
    "question_hi": "C++23 में 'std::byteswap' क्या है?",
    "options_en": ["Byte order swap", "Endian conversion", "Both A and B", "Bit manipulation"],
    "options_hi": ["बाइट ऑर्डर स्वैप", "एंडियन कन्वर्जन", "A और B दोनों", "बिट मैनिपुलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'std::is_scoped_enum' in C++23?",
    "question_hi": "C++23 में 'std::is_scoped_enum' क्या है?",
    "options_en": ["Check scoped enum", "Enum type trait", "Both A and B", "Enum value"],
    "options_hi": ["स्कोप्ड एनम चेक", "एनम टाइप ट्रेट", "A और B दोनों", "एनम वैल्यू"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'std::to_underlying' in C++23?",
    "question_hi": "C++23 में 'std::to_underlying' क्या है?",
    "options_en": ["Convert enum to underlying", "Get enum value", "Both A and B", "Enum to string"],
    "options_hi": ["एनम को अंडरलाइंग में कन्वर्ट", "एनम वैल्यू प्राप्त", "A और B दोनों", "एनम टू स्ट्रिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'std::out_ptr' in C++23?",
    "question_hi": "C++23 में 'std::out_ptr' क्या है?",
    "options_en": ["Output pointer adapter", "C interface compatibility", "Both A and B", "Pointer wrapper"],
    "options_hi": ["आउटपुट पॉइंटर एडाप्टर", "C इंटरफेस कंपैटिबिलिटी", "A और B दोनों", "पॉइंटर रैपर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'std::inout_ptr' in C++23?",
    "question_hi": "C++23 में 'std::inout_ptr' क्या है?",
    "options_en": ["Input/output pointer adapter", "C interface compatibility", "Both A and B", "Pointer wrapper"],
    "options_hi": ["इनपुट/आउटपुट पॉइंटर एडाप्टर", "C इंटरफेस कंपैटिबिलिटी", "A और B दोनों", "पॉइंटर रैपर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'constinit' in C++20?",
    "question_hi": "C++20 में 'constinit' क्या है?",
    "options_en": ["Static initialization", "Compile-time init", "Both A and B", "Runtime init"],
    "options_hi": ["स्टैटिक इनिशियलाइज़ेशन", "कंपाइल-टाइम इनिट", "A और B दोनों", "रनटाइम इनिट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'std::counting_semaphore' in C++20?",
    "question_hi": "C++20 में 'std::counting_semaphore' क्या है?",
    "options_en": ["Thread synchronization", "Resource counting", "Both A and B", "Mutex replacement"],
    "options_hi": ["थ्रेड सिंक्रोनाइज़ेशन", "रिसोर्स काउंटिंग", "A और B दोनों", "म्यूटेक्स रिप्लेसमेंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'std::latch' in C++20?",
    "question_hi": "C++20 में 'std::latch' क्या है?",
    "options_en": ["Thread barrier", "Wait for count", "Both A and B", "Thread counter"],
    "options_hi": ["थ्रेड बैरियर", "काउंट के लिए वेट", "A और B दोनों", "थ्रेड काउंटर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'std::barrier' in C++20?",
    "question_hi": "C++20 में 'std::barrier' क्या है?",
    "options_en": ["Thread synchronization", "Reusable barrier", "Both A and B", "One-time barrier"],
    "options_hi": ["थ्रेड सिंक्रोनाइज़ेशन", "रियूजेबल बैरियर", "A और B दोनों", "वन-टाइम बैरियर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'std::stop_token' in C++20?",
    "question_hi": "C++20 में 'std::stop_token' क्या है?",
    "options_en": ["Thread cancellation", "Stop request", "Both A and B", "Thread pause"],
    "options_hi": ["थ्रेड कैंसलेशन", "स्टॉप रिक्वेस्ट", "A और B दोनों", "थ्रेड पॉज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'std::stop_source' in C++20?",
    "question_hi": "C++20 में 'std::stop_source' क्या है?",
    "options_en": ["Issue stop requests", "Thread control", "Both A and B", "Thread creation"],
    "options_hi": ["स्टॉप रिक्वेस्ट इश्यू", "थ्रेड कंट्रोल", "A और B दोनों", "थ्रेड क्रिएशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'std::stop_callback' in C++20?",
    "question_hi": "C++20 में 'std::stop_callback' क्या है?",
    "options_en": ["Register callbacks", "Stop notification", "Both A and B", "Thread callback"],
    "options_hi": ["कॉलबैक्स रजिस्टर", "स्टॉप नोटिफिकेशन", "A और B दोनों", "थ्रेड कॉलबैक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'std::osyncstream' in C++20?",
    "question_hi": "C++20 में 'std::osyncstream' क्या है?",
    "options_en": ["Synchronized output", "Thread-safe stream", "Both A and B", "Async stream"],
    "options_hi": ["सिंक्रोनाइज्ड आउटपुट", "थ्रेड-सेफ स्ट्रीम", "A और B दोनों", "एसिंक स्ट्रीम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'std::chrono::utc_clock' in C++20?",
    "question_hi": "C++20 में 'std::chrono::utc_clock' क्या है?",
    "options_en": ["UTC time", "Coordinated time", "Both A and B", "Local time"],
    "options_hi": ["UTC टाइम", "कोऑर्डिनेटेड टाइम", "A और B दोनों", "लोकल टाइम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'std::chrono::tai_clock' in C++20?",
    "question_hi": "C++20 में 'std::chrono::tai_clock' क्या है?",
    "options_en": ["International Atomic Time", "Atomic clock", "Both A and B", "Solar time"],
    "options_hi": ["इंटरनेशनल एटॉमिक टाइम", "एटॉमिक क्लॉक", "A और B दोनों", "सोलर टाइम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'std::chrono::gps_clock' in C++20?",
    "question_hi": "C++20 में 'std::chrono::gps_clock' क्या है?",
    "options_en": ["GPS time", "Satellite time", "Both A and B", "Network time"],
    "options_hi": ["GPS टाइम", "सैटेलाइट टाइम", "A और B दोनों", "नेटवर्क टाइम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'std::chrono::file_clock' in C++20?",
    "question_hi": "C++20 में 'std::chrono::file_clock' क्या है?",
    "options_en": ["File system time", "File timestamp", "Both A and B", "System time"],
    "options_hi": ["फाइल सिस्टम टाइम", "फाइल टाइमस्टैम्प", "A और B दोनों", "सिस्टम टाइम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'std::chrono::local_t' in C++20?",
    "question_hi": "C++20 में 'std::chrono::local_t' क्या है?",
    "options_en": ["Local time", "Wall clock time", "Both A and B", "UTC time"],
    "options_hi": ["लोकल टाइम", "वॉल क्लॉक टाइम", "A और B दोनों", "UTC टाइम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'std::chrono::zoned_time' in C++20?",
    "question_hi": "C++20 में 'std::chrono::zoned_time' क्या है?",
    "options_en": ["Time zone aware time", "Local time with zone", "Both A and B", "UTC time"],
    "options_hi": ["टाइम ज़ोन अवेयर टाइम", "ज़ोन के साथ लोकल टाइम", "A और B दोनों", "UTC टाइम"],
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