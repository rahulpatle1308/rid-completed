const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a constant in Swift?",
    "question_hi": "Swift में किस कीवर्ड का उपयोग कॉन्स्टेंट डिक्लेयर करने के लिए किया जाता है?",
    "options_en": ["var", "let", "const", "static"],
    "options_hi": ["var", "let", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the default access level in Swift?",
    "question_hi": "Swift में डिफ़ॉल्ट एक्सेस लेवल क्या है?",
    "options_en": ["private", "public", "internal", "open"],
    "options_hi": ["private", "public", "internal", "open"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does 'nil' represent in Swift?",
    "question_hi": "Swift में 'nil' क्या दर्शाता है?",
    "options_en": ["Zero value", "Empty string", "Absence of a value", "Default value"],
    "options_hi": ["शून्य मान", "खाली स्ट्रिंग", "मान की अनुपस्थिति", "डिफ़ॉल्ट मान"],
    "answer_en": "Absence of a value",
    "answer_hi": "मान की अनुपस्थिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which operator is used for optional unwrapping in Swift?",
    "question_hi": "Swift में ऑप्शनल अनरैपिंग के लिए किस ऑपरेटर का उपयोग किया जाता है?",
    "options_en": ["??", "!", "?", "&"],
    "options_hi": ["??", "!", "?", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of 'guard' statement in Swift?",
    "question_hi": "Swift में 'guard' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Loop control", "Early exit from scope", "Error throwing", "Function declaration"],
    "options_hi": ["लूप कंट्रोल", "स्कोप से जल्दी बाहर निकलना", "एरर थ्रो करना", "फंक्शन डिक्लेरेशन"],
    "answer_en": "Early exit from scope",
    "answer_hi": "स्कोप से जल्दी बाहर निकलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which collection type in Swift guarantees unique elements?",
    "question_hi": "Swift में कौन सा कलेक्शन टाइप यूनिक एलिमेंट्स की गारंटी देता है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["ऐरे", "सेट", "डिक्शनरी", "ट्यूपल"],
    "answer_en": "Set",
    "answer_hi": "सेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of: print(type(of: 3.14))",
    "question_hi": "आउटपुट क्या है: print(type(of: 3.14))",
    "options_en": ["Int", "Float", "Double", "Decimal"],
    "options_hi": ["Int", "Float", "Double", "Decimal"],
    "answer_en": "Double",
    "answer_hi": "Double",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which protocol is used for error handling in Swift?",
    "question_hi": "Swift में एरर हैंडलिंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["ErrorProtocol", "Error", "Throwable", "Catchable"],
    "options_hi": ["ErrorProtocol", "Error", "Throwable", "Catchable"],
    "answer_en": "Error",
    "answer_hi": "Error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does 'defer' keyword do in Swift?",
    "question_hi": "Swift में 'defer' कीवर्ड क्या करता है?",
    "options_en": ["Delays execution", "Defers function call", "Executes code before returning", "Postpones variable initialization"],
    "options_hi": ["एक्जिक्यूशन देरी करता है", "फंक्शन कॉल को टालता है", "रिटर्न करने से पहले कोड एक्जिक्यूट करता है", "वेरिएबल इनिशियलाइजेशन को टालता है"],
    "answer_en": "Executes code before returning",
    "answer_hi": "रिटर्न करने से पहले कोड एक्जिक्यूट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method is called when an instance is being deallocated?",
    "question_hi": "कौन सी मेथड कॉल होती है जब एक इंस्टेंस डीलोकेट किया जा रहा होता है?",
    "options_en": ["deinit()", "willDealloc()", "remove()", "cleanup()"],
    "options_hi": ["deinit()", "willDealloc()", "remove()", "cleanup()"],
    "answer_en": "deinit()",
    "answer_hi": "deinit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the result of: [1, 2, 3].map { $0 * 2 }",
    "question_hi": "परिणाम क्या है: [1, 2, 3].map { $0 * 2 }",
    "options_en": ["[2, 4, 6]", "[1, 2, 3]", "[2]", "Error"],
    "options_hi": ["[2, 4, 6]", "[1, 2, 3]", "[2]", "Error"],
    "answer_en": "[2, 4, 6]",
    "answer_hi": "[2, 4, 6]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which property wrapper is used for user defaults in SwiftUI?",
    "question_hi": "SwiftUI में यूज़र डिफ़ॉल्ट्स के लिए किस प्रॉपर्टी रैपर का उपयोग किया जाता है?",
    "options_en": ["@State", "@Published", "@AppStorage", "@Environment"],
    "options_hi": ["@State", "@Published", "@AppStorage", "@Environment"],
    "answer_en": "@AppStorage",
    "answer_hi": "@AppStorage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is type inference in Swift?",
    "question_hi": "Swift में टाइप इनफेरेंस क्या है?",
    "options_en": ["Explicit type declaration", "Compiler deduces type automatically", "Type checking at runtime", "Dynamic typing"],
    "options_hi": ["एक्सप्लिसिट टाइप डिक्लेरेशन", "कंपाइलर स्वचालित रूप से टाइप निकालता है", "रनटाइम पर टाइप चेकिंग", "डायनामिक टाइपिंग"],
    "answer_en": "Compiler deduces type automatically",
    "answer_hi": "कंपाइलर स्वचालित रूप से टाइप निकालता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does 'Codable' protocol combine?",
    "question_hi": "'Codable' प्रोटोकॉल क्या कॉम्बाइन करता है?",
    "options_en": ["Encodable & Decodable", "Copyable & Pastable", "Comparable & Equatable", "Hashable & Identifiable"],
    "options_hi": ["Encodable & Decodable", "Copyable & Pastable", "Comparable & Equatable", "Hashable & Identifiable"],
    "answer_en": "Encodable & Decodable",
    "answer_hi": "Encodable & Decodable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which loop guarantees at least one execution in Swift?",
    "question_hi": "Swift में कौन सा लूप कम से कम एक बार एक्जिक्यूशन की गारंटी देता है?",
    "options_en": ["for-in", "while", "repeat-while", "forEach"],
    "options_hi": ["for-in", "while", "repeat-while", "forEach"],
    "answer_en": "repeat-while",
    "answer_hi": "repeat-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of 'lazy' keyword in Swift?",
    "question_hi": "Swift में 'lazy' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Speeds up execution", "Delays initialization until first use", "Reduces memory usage", "Prevents computation"],
    "options_hi": ["एक्जिक्यूशन की गति बढ़ाता है", "पहले उपयोग तक इनिशियलाइजेशन को टालता है", "मेमोरी यूज कम करता है", "कंप्यूटेशन रोकता है"],
    "answer_en": "Delays initialization until first use",
    "answer_hi": "पहले उपयोग तक इनिशियलाइजेशन को टालता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of: let range = 1...5; print(range.contains(3))",
    "question_hi": "आउटपुट क्या है: let range = 1...5; print(range.contains(3))",
    "options_en": ["true", "false", "3", "Error"],
    "options_hi": ["true", "false", "3", "Error"],
    "answer_en": "true",
    "answer_hi": "true",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which operator checks for identity equality?",
    "question_hi": "कौन सा ऑपरेटर आइडेंटिटी इक्वलिटी चेक करता है?",
    "options_en": ["==", "===", "=", "!=="],
    "options_hi": ["==", "===", "=", "!=="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is a closure in Swift?",
    "question_hi": "Swift में क्लोजर क्या है?",
    "options_en": ["Function without name", "Block of code that can be passed around", "Type alias", "Memory management tool"],
    "options_hi": ["बिना नाम का फंक्शन", "कोड का ब्लॉक जिसे आसपास पास किया जा सकता है", "टाइप एलियास", "मेमोरी मैनेजमेंट टूल"],
    "answer_en": "Block of code that can be passed around",
    "answer_hi": "कोड का ब्लॉक जिसे आसपास पास किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of 'willSet' and 'didSet' in Swift?",
    "question_hi": "Swift में 'willSet' और 'didSet' का उद्देश्य क्या है?",
    "options_en": ["Memory management", "Property observers", "Error handling", "Type casting"],
    "options_hi": ["मेमोरी मैनेजमेंट", "प्रॉपर्टी ऑब्जर्वर्स", "एरर हैंडलिंग", "टाइप कास्टिंग"],
    "answer_en": "Property observers",
    "answer_hi": "प्रॉपर्टी ऑब्जर्वर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which keyword makes a class non-inheritable in Swift?",
    "question_hi": "कौन सा कीवर्ड Swift में क्लास को नॉन-इनहेरिटेबल बनाता है?",
    "options_en": ["private", "final", "sealed", "closed"],
    "options_hi": ["private", "final", "sealed", "closed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does 'weak' reference prevent?",
    "question_hi": "'weak' रेफरेंस क्या रोकता है?",
    "options_en": ["Memory leaks", "Retain cycles", "Early deallocation", "Null references"],
    "options_hi": ["मेमोरी लीक्स", "रिटेन साइकल्स", "जल्दी डीलोकेशन", "नल रेफरेंसेस"],
    "answer_en": "Retain cycles",
    "answer_hi": "रिटेन साइकल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of: let x = 10; let y = x == 10 ? 'Yes' : 'No'; print(y)",
    "question_hi": "आउटपुट क्या है: let x = 10; let y = x == 10 ? 'Yes' : 'No'; print(y)",
    "options_en": ["Yes", "No", "10", "Error"],
    "options_hi": ["Yes", "No", "10", "Error"],
    "answer_en": "Yes",
    "answer_hi": "Yes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which protocol must be adopted for SwiftUI views?",
    "question_hi": "SwiftUI व्यूज़ के लिए किस प्रोटोकॉल को अपनाना चाहिए?",
    "options_en": ["UIView", "View", "SwiftUIView", "Display"],
    "options_hi": ["UIView", "View", "SwiftUIView", "Display"],
    "answer_en": "View",
    "answer_hi": "View",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is an 'escaping' closure?",
    "question_hi": "'escaping' क्लोजर क्या है?",
    "options_en": ["Closure that runs immediately", "Closure that outlives function scope", "Closure that returns value", "Closure with parameters"],
    "options_hi": ["तुरंत चलने वाला क्लोजर", "फंक्शन स्कोप से बाहर रहने वाला क्लोजर", "वैल्यू रिटर्न करने वाला क्लोजर", "पैरामीटर्स वाला क्लोजर"],
    "answer_en": "Closure that outlives function scope",
    "answer_hi": "फंक्शन स्कोप से बाहर रहने वाला क्लोजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to decode JSON in Swift?",
    "question_hi": "Swift में JSON डीकोड करने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["JSONDecoder.decode()", "JSON.parse()", "Decoder.decode()", "JSONSerialization.jsonObject()"],
    "options_hi": ["JSONDecoder.decode()", "JSON.parse()", "Decoder.decode()", "JSONSerialization.jsonObject()"],
    "answer_en": "JSONDecoder.decode()",
    "answer_hi": "JSONDecoder.decode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the purpose of 'Any' type in Swift?",
    "question_hi": "Swift में 'Any' टाइप का उद्देश्य क्या है?",
    "options_en": ["Represents any class type", "Represents any value type", "Represents any type", "Represents optional type"],
    "options_hi": ["किसी भी क्लास टाइप को रिप्रेजेंट करता है", "किसी भी वैल्यू टाइप को रिप्रेजेंट करता है", "किसी भी टाइप को रिप्रेजेंट करता है", "ऑप्शनल टाइप को रिप्रेजेंट करता है"],
    "answer_en": "Represents any type",
    "answer_hi": "किसी भी टाइप को रिप्रेजेंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does 'mutating' keyword indicate?",
    "question_hi": "'mutating' कीवर्ड क्या इंडिकेट करता है?",
    "options_en": ["Function modifies struct/enum", "Variable can change", "Async function", "Throwing function"],
    "options_hi": ["फंक्शन struct/enum को मॉडिफाई करता है", "वेरिएबल बदल सकता है", "एसिंक फंक्शन", "थ्रोइंग फंक्शन"],
    "answer_en": "Function modifies struct/enum",
    "answer_hi": "फंक्शन struct/enum को मॉडिफाई करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is protocol extension used for?",
    "question_hi": "प्रोटोकॉल एक्सटेंशन का उपयोग किस लिए किया जाता है?",
    "options_en": ["Inheritance", "Default implementations", "Type erasure", "Memory management"],
    "options_hi": ["इनहेरिटेंस", "डिफ़ॉल्ट इम्प्लीमेंटेशंस", "टाइप इरेज़र", "मेमोरी मैनेजमेंट"],
    "answer_en": "Default implementations",
    "answer_hi": "डिफ़ॉल्ट इम्प्लीमेंटेशंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which collection type maintains insertion order?",
    "question_hi": "कौन सा कलेक्शन टाइप इन्सर्शन ऑर्डर मेंटेन करता है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["ऐरे", "सेट", "डिक्शनरी", "ट्यूपल"],
    "answer_en": "Array",
    "answer_hi": "ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'String interpolation' in Swift?",
    "question_hi": "Swift में 'String interpolation' क्या है?",
    "options_en": ["Joining strings", "Embedding values in strings", "Splitting strings", "Comparing strings"],
    "options_hi": ["स्ट्रिंग्स जोड़ना", "स्ट्रिंग्स में वैल्यूज एम्बेड करना", "स्ट्रिंग्स स्प्लिट करना", "स्ट्रिंग्स कम्पेयर करना"],
    "answer_en": "Embedding values in strings",
    "answer_hi": "स्ट्रिंग्स में वैल्यूज एम्बेड करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does 'inout' parameter do?",
    "question_hi": "'inout' पैरामीटर क्या करता है?",
    "options_en": ["Input only parameter", "Output only parameter", "Modifiable parameter", "Constant parameter"],
    "options_hi": ["इनपुट ओनली पैरामीटर", "आउटपुट ओनली पैरामीटर", "मॉडिफाइएबल पैरामीटर", "कॉन्स्टेंट पैरामीटर"],
    "answer_en": "Modifiable parameter",
    "answer_hi": "मॉडिफाइएबल पैरामीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of 'associatedtype' in protocols?",
    "question_hi": "प्रोटोकॉल्स में 'associatedtype' का उद्देश्य क्या है?",
    "options_en": ["Type alias", "Generic placeholder", "Type constraint", "Protocol inheritance"],
    "options_hi": ["टाइप एलियास", "जेनेरिक प्लेसहोल्डर", "टाइप कंस्ट्रेंट", "प्रोटोकॉल इनहेरिटेंस"],
    "answer_en": "Generic placeholder",
    "answer_hi": "जेनेरिक प्लेसहोल्डर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does 'some' keyword indicate in Swift?",
    "question_hi": "Swift में 'some' कीवर्ड क्या इंडिकेट करता है?",
    "options_en": ["Optional type", "Opaque type", "Generic type", "Any type"],
    "options_hi": ["ऑप्शनल टाइप", "ओपेक टाइप", "जेनेरिक टाइप", "Any टाइप"],
    "answer_en": "Opaque type",
    "answer_hi": "ओपेक टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method creates a task for async code?",
    "question_hi": "एसिंक कोड के लिए टास्क कौन सी मेथड क्रिएट करती है?",
    "options_en": ["Task.run()", "Task.init()", "Task.create()", "Task()"],
    "options_hi": ["Task.run()", "Task.init()", "Task.create()", "Task()"],
    "answer_en": "Task()",
    "answer_hi": "Task()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'Result' type used for?",
    "question_hi": "'Result' टाइप का उपयोग किस लिए किया जाता है?",
    "options_en": ["Error handling", "Success/Failure outcomes", "Optional values", "Type casting"],
    "options_hi": ["एरर हैंडलिंग", "सक्सेस/फेलियर आउटकम्स", "ऑप्शनल वैल्यूज", "टाइप कास्टिंग"],
    "answer_en": "Success/Failure outcomes",
    "answer_hi": "सक्सेस/फेलियर आउटकम्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does '@State' property wrapper do?",
    "question_hi": "'@State' प्रॉपर्टी रैपर क्या करता है?",
    "options_en": ["Manages view state", "Manages app state", "Observes changes", "Persists data"],
    "options_hi": ["व्यू स्टेट मैनेज करता है", "ऐप स्टेट मैनेज करता है", "चेंजेस ऑब्ज़र्व करता है", "डेटा पर्सिस्ट करता है"],
    "answer_en": "Manages view state",
    "answer_hi": "व्यू स्टेट मैनेज करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'actor' in Swift?",
    "question_hi": "Swift में 'actor' क्या है?",
    "options_en": ["Concurrency primitive", "Type of class", "Async function", "Thread manager"],
    "options_hi": ["कनकरेंसी प्रिमिटिव", "क्लास का प्रकार", "एसिंक फंक्शन", "थ्रेड मैनेजर"],
    "answer_en": "Concurrency primitive",
    "answer_hi": "कनकरेंसी प्रिमिटिव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'unowned' reference?",
    "question_hi": "'unowned' रेफरेंस क्या है?",
    "options_en": ["Weak reference", "Strong reference", "Non-optional reference", "Safe reference"],
    "options_hi": ["वीक रेफरेंस", "स्ट्रॉन्ग रेफरेंस", "नॉन-ऑप्शनल रेफरेंस", "सेफ रेफरेंस"],
    "answer_en": "Non-optional reference",
    "answer_hi": "नॉन-ऑप्शनल रेफरेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does 'compactMap' do?",
    "question_hi": "'compactMap' क्या करता है?",
    "options_en": ["Maps and filters nil", "Maps only", "Filters only", "Sorts array"],
    "options_hi": ["मैप करता है और nil फ़िल्टर करता है", "सिर्फ मैप करता है", "सिर्फ फ़िल्टर करता है", "ऐरे सॉर्ट करता है"],
    "answer_en": "Maps and filters nil",
    "answer_hi": "मैप करता है और nil फ़िल्टर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'String' vs 'Substring'?",
    "question_hi": "'String' vs 'Substring' क्या है?",
    "options_en": ["Substring is independent", "Substring references original", "Same type", "Different encoding"],
    "options_hi": ["Substring इंडिपेंडेंट है", "Substring ओरिजिनल को रेफर करता है", "समान प्रकार", "अलग एन्कोडिंग"],
    "answer_en": "Substring references original",
    "answer_hi": "Substring ओरिजिनल को रेफर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does 'CaseIterable' protocol provide?",
    "question_hi": "'CaseIterable' प्रोटोकॉल क्या प्रोवाइड करता है?",
    "options_en": ["All cases array", "Case comparison", "Raw values", "Associated values"],
    "options_hi": ["सभी केसेस की ऐरे", "केस कम्पेरिजन", "रॉ वैल्यूज", "असोसिएटेड वैल्यूज"],
    "answer_en": "All cases array",
    "answer_hi": "सभी केसेस की ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'never' return type?",
    "question_hi": "'never' रिटर्न टाइप क्या है?",
    "options_en": ["Function never returns", "Returns nil", "Async function", "Throwing function"],
    "options_hi": ["फंक्शन कभी रिटर्न नहीं करता", "nil रिटर्न करता है", "एसिंक फंक्शन", "थ्रोइंग फंक्शन"],
    "answer_en": "Function never returns",
    "answer_hi": "फंक्शन कभी रिटर्न नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does 'async let' do?",
    "question_hi": "'async let' क्या करता है?",
    "options_en": ["Declares async variable", "Runs async task", "Awaits value", "Creates task group"],
    "options_hi": ["एसिंक वेरिएबल डिक्लेयर करता है", "एसिंक टास्क रन करता है", "वैल्यू का इंतजार करता है", "टास्क ग्रुप क्रिएट करता है"],
    "answer_en": "Declares async variable",
    "answer_hi": "एसिंक वेरिएबल डिक्लेयर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'property wrapper'?",
    "question_hi": "'property wrapper' क्या है?",
    "options_en": ["Custom property behavior", "Wrapper class", "View modifier", "Type alias"],
    "options_hi": ["कस्टम प्रॉपर्टी बिहेवियर", "रैपर क्लास", "व्यू मॉडिफायर", "टाइप एलियास"],
    "answer_en": "Custom property behavior",
    "answer_hi": "कस्टम प्रॉपर्टी बिहेवियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does '@Published' wrapper do?",
    "question_hi": "'@Published' रैपर क्या करता है?",
    "options_en": ["Publishes value changes", "Observes changes", "Persists data", "Manages state"],
    "options_hi": ["वैल्यू चेंजेस पब्लिश करता है", "चेंजेस ऑब्ज़र्व करता है", "डेटा पर्सिस्ट करता है", "स्टेट मैनेज करता है"],
    "answer_en": "Publishes value changes",
    "answer_hi": "वैल्यू चेंजेस पब्लिश करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'opaque return type'?",
    "question_hi": "'opaque return type' क्या है?",
    "options_en": ["Specific type hidden", "Generic type", "Any type", "Protocol type"],
    "options_hi": ["स्पेसिफिक टाइप हिडन", "जेनेरिक टाइप", "Any टाइप", "प्रोटोकॉल टाइप"],
    "answer_en": "Specific type hidden",
    "answer_hi": "स्पेसिफिक टाइप हिडन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does 'Task.detached' create?",
    "question_hi": "'Task.detached' क्या क्रिएट करता है?",
    "options_en": ["Unstructured task", "Child task", "Async task", "Background task"],
    "options_hi": ["अनस्ट्रक्चर्ड टास्क", "चाइल्ड टास्क", "एसिंक टास्क", "बैकग्राउंड टास्क"],
    "answer_en": "Unstructured task",
    "answer_hi": "अनस्ट्रक्चर्ड टास्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'Hashable' protocol for?",
    "question_hi": "'Hashable' प्रोटोकॉल किस लिए है?",
    "options_en": ["Hashing values", "Comparing values", "Encoding values", "Decoding values"],
    "options_hi": ["वैल्यूज को हैश करना", "वैल्यूज कम्पेयर करना", "वैल्यूज एनकोड करना", "वैल्यूज डिकोड करना"],
    "answer_en": "Hashing values",
    "answer_hi": "वैल्यूज को हैश करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does '@Environment' wrapper do?",
    "question_hi": "'@Environment' रैपर क्या करता है?",
    "options_en": ["Accesses environment values", "Sets environment", "Manages state", "Observes changes"],
    "options_hi": ["एनवायरनमेंट वैल्यूज एक्सेस करता है", "एनवायरनमेंट सेट करता है", "स्टेट मैनेज करता है", "चेंजेस ऑब्ज़र्व करता है"],
    "answer_en": "Accesses environment values",
    "answer_hi": "एनवायरनमेंट वैल्यूज एक्सेस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'typealias' used for?",
    "question_hi": "'typealias' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Type renaming", "Type creation", "Type erasure", "Type checking"],
    "options_hi": ["टाइप रिनेमिंग", "टाइप क्रिएशन", "टाइप इरेज़र", "टाइप चेकिंग"],
    "answer_en": "Type renaming",
    "answer_hi": "टाइप रिनेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does '@Binding' wrapper do?",
    "question_hi": "'@Binding' रैपर क्या करता है?",
    "options_en": ["Two-way binding", "One-way binding", "Value observing", "State management"],
    "options_hi": ["टू-वे बाइंडिंग", "वन-वे बाइंडिंग", "वैल्यू ऑब्ज़र्विंग", "स्टेट मैनेजमेंट"],
    "answer_en": "Two-way binding",
    "answer_hi": "टू-वे बाइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'ExpressibleByStringLiteral'?",
    "question_hi": "'ExpressibleByStringLiteral' क्या है?",
    "options_en": ["Protocol for string creation", "String extension", "String method", "String property"],
    "options_hi": ["स्ट्रिंग क्रिएशन के लिए प्रोटोकॉल", "स्ट्रिंग एक्सटेंशन", "स्ट्रिंग मेथड", "स्ट्रिंग प्रॉपर्टी"],
    "answer_en": "Protocol for string creation",
    "answer_hi": "स्ट्रिंग क्रिएशन के लिए प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'MainActor'?",
    "question_hi": "'MainActor' क्या है?",
    "options_en": ["Main thread actor", "Primary actor", "Async actor", "Global actor"],
    "options_hi": ["मेन थ्रेड एक्टर", "प्राइमरी एक्टर", "एसिंक एक्टर", "ग्लोबल एक्टर"],
    "answer_en": "Main thread actor",
    "answer_hi": "मेन थ्रेड एक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does 'reduce' method do?",
    "question_hi": "'reduce' मेथड क्या करता है?",
    "options_en": ["Combines elements", "Filters elements", "Maps elements", "Sorts elements"],
    "options_hi": ["एलिमेंट्स को कॉम्बाइन करता है", "एलिमेंट्स फ़िल्टर करता है", "एलिमेंट्स मैप करता है", "एलिमेंट्स सॉर्ट करता है"],
    "answer_en": "Combines elements",
    "answer_hi": "एलिमेंट्स को कॉम्बाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is '@FocusState' wrapper for?",
    "question_hi": "'@FocusState' रैपर किस लिए है?",
    "options_en": ["Managing focus", "Managing state", "Observing changes", "Binding values"],
    "options_hi": ["फोकस मैनेज करना", "स्टेट मैनेज करना", "चेंजेस ऑब्ज़र्व करना", "वैल्यूज बाइंड करना"],
    "answer_en": "Managing focus",
    "answer_hi": "फोकस मैनेज करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'autoclosure'?",
    "question_hi": "'autoclosure' क्या है?",
    "options_en": ["Auto-closing brace", "Automatic closure creation", "Lazy evaluation", "Async closure"],
    "options_hi": ["ऑटो-क्लोज़िंग ब्रेस", "ऑटोमेटिक क्लोजर क्रिएशन", "लेज़ी एवेलुएशन", "एसिंक क्लोजर"],
    "answer_en": "Automatic closure creation",
    "answer_hi": "ऑटोमेटिक क्लोजर क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does 'zip' function do?",
    "question_hi": "'zip' फंक्शन क्या करता है?",
    "options_en": ["Combines sequences", "Compresses data", "Zips files", "Sorts sequences"],
    "options_hi": ["सीक्वेंस कॉम्बाइन करता है", "डेटा कम्प्रेस करता है", "फाइल्स जिप करता है", "सीक्वेंस सॉर्ट करता है"],
    "answer_en": "Combines sequences",
    "answer_hi": "सीक्वेंस कॉम्बाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'dynamicMemberLookup'?",
    "question_hi": "'dynamicMemberLookup' क्या है?",
    "options_en": ["Dynamic member access", "Member lookup", "Property access", "Method lookup"],
    "options_hi": ["डायनामिक मेंबर एक्सेस", "मेंबर लुकअप", "प्रॉपर्टी एक्सेस", "मेथड लुकअप"],
    "answer_en": "Dynamic member access",
    "answer_hi": "डायनामिक मेंबर एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does '@SceneStorage' wrapper do?",
    "question_hi": "'@SceneStorage' रैपर क्या करता है?",
    "options_en": ["Scene-specific storage", "App storage", "User defaults", "File storage"],
    "options_hi": ["सीन-स्पेसिफिक स्टोरेज", "ऐप स्टोरेज", "यूज़र डिफ़ॉल्ट्स", "फाइल स्टोरेज"],
    "answer_en": "Scene-specific storage",
    "answer_hi": "सीन-स्पेसिफिक स्टोरेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'rethrows' keyword?",
    "question_hi": "'rethrows' कीवर्ड क्या है?",
    "options_en": ["Re-throws errors", "Throws always", "Never throws", "Async throws"],
    "options_hi": ["एरर्स को दोबारा थ्रो करता है", "हमेशा थ्रो करता है", "कभी नहीं थ्रो करता", "एसिंक थ्रो करता है"],
    "answer_en": "Re-throws errors",
    "answer_hi": "एरर्स को दोबारा थ्रो करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does '@GestureState' wrapper do?",
    "question_hi": "'@GestureState' रैपर क्या करता है?",
    "options_en": ["Gesture state management", "View state", "App state", "User state"],
    "options_hi": ["जेस्चर स्टेट मैनेजमेंट", "व्यू स्टेट", "ऐप स्टेट", "यूज़र स्टेट"],
    "answer_en": "Gesture state management",
    "answer_hi": "जेस्चर स्टेट मैनेजमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'RawRepresentable' protocol?",
    "question_hi": "'RawRepresentable' प्रोटोकॉल क्या है?",
    "options_en": ["Raw value conversion", "Value representation", "Type conversion", "Encoding protocol"],
    "options_hi": ["रॉ वैल्यू कन्वर्जन", "वैल्यू रिप्रेजेंटेशन", "टाइप कन्वर्जन", "एनकोडिंग प्रोटोकॉल"],
    "answer_en": "Raw value conversion",
    "answer_hi": "रॉ वैल्यू कन्वर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does 'first(where:)' method do?",
    "question_hi": "'first(where:)' मेथड क्या करता है?",
    "options_en": ["Finds first matching element", "Finds all elements", "Filters elements", "Sorts elements"],
    "options_hi": ["पहला मिलने वाला एलिमेंट ढूंढता है", "सभी एलिमेंट्स ढूंढता है", "एलिमेंट्स फ़िल्टर करता है", "एलिमेंट्स सॉर्ट करता है"],
    "answer_en": "Finds first matching element",
    "answer_hi": "पहला मिलने वाला एलिमेंट ढूंढता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is '@ObservedObject' wrapper for?",
    "question_hi": "'@ObservedObject' रैपर किस लिए है?",
    "options_en": ["External observable object", "Local state", "Environment object", "Scene storage"],
    "options_hi": ["एक्सटर्नल ऑब्ज़र्वेबल ऑब्जेक्ट", "लोकल स्टेट", "एनवायरनमेंट ऑब्जेक्ट", "सीन स्टोरेज"],
    "answer_en": "External observable object",
    "answer_hi": "एक्सटर्नल ऑब्ज़र्वेबल ऑब्जेक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'precondition' function?",
    "question_hi": "'precondition' फंक्शन क्या है?",
    "options_en": ["Runtime check", "Compile-time check", "Debug check", "Performance check"],
    "options_hi": ["रनटाइम चेक", "कंपाइल-टाइम चेक", "डीबग चेक", "परफॉर्मेंस चेक"],
    "answer_en": "Runtime check",
    "answer_hi": "रनटाइम चेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does 'TaskGroup' provide?",
    "question_hi": "'TaskGroup' क्या प्रोवाइड करता है?",
    "options_en": ["Structured concurrency", "Unstructured tasks", "Async operations", "Background tasks"],
    "options_hi": ["स्ट्रक्चर्ड कनकरेंसी", "अनस्ट्रक्चर्ड टास्क्स", "एसिंक ऑपरेशंस", "बैकग्राउंड टास्क्स"],
    "answer_en": "Structured concurrency",
    "answer_hi": "स्ट्रक्चर्ड कनकरेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is '@EnvironmentObject' wrapper for?",
    "question_hi": "'@EnvironmentObject' रैपर किस लिए है?",
    "options_en": ["Shared observable object", "Local state", "Scene storage", "User defaults"],
    "options_hi": ["शेयर्ड ऑब्ज़र्वेबल ऑब्जेक्ट", "लोकल स्टेट", "सीन स्टोरेज", "यूज़र डिफ़ॉल्ट्स"],
    "answer_en": "Shared observable object",
    "answer_hi": "शेयर्ड ऑब्ज़र्वेबल ऑब्जेक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does 'flatten' do?",
    "question_hi": "'flatten' क्या करता है?",
    "options_en": ["Flattens nested collections", "Maps collections", "Filters collections", "Sorts collections"],
    "options_hi": ["नेस्टेड कलेक्शन्स फ्लैटन करता है", "कलेक्शन्स मैप करता है", "कलेक्शन्स फ़िल्टर करता है", "कलेक्शन्स सॉर्ट करता है"],
    "answer_en": "Flattens nested collections",
    "answer_hi": "नेस्टेड कलेक्शन्स फ्लैटन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'Sendable' protocol?",
    "question_hi": "'Sendable' प्रोटोकॉल क्या है?",
    "options_en": ["Safe concurrency", "Data sending", "Network protocol", "Encoding protocol"],
    "options_hi": ["सेफ कनकरेंसी", "डेटा सेंडिंग", "नेटवर्क प्रोटोकॉल", "एनकोडिंग प्रोटोकॉल"],
    "answer_en": "Safe concurrency",
    "answer_hi": "सेफ कनकरेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does '@StateObject' wrapper do?",
    "question_hi": "'@StateObject' रैपर क्या करता है?",
    "options_en": ["Owns observable object", "Observes object", "Binds object", "Stores object"],
    "options_hi": ["ऑब्ज़र्वेबल ऑब्जेक्ट का मालिक है", "ऑब्जेक्ट ऑब्ज़र्व करता है", "ऑब्जेक्ट बाइंड करता है", "ऑब्जेक्ट स्टोर करता है"],
    "answer_en": "Owns observable object",
    "answer_hi": "ऑब्ज़र्वेबल ऑब्जेक्ट का मालिक है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'where' clause used for?",
    "question_hi": "'where' क्लॉज का उपयोग किस लिए किया जाता है?",
    "options_en": ["Type constraints", "Conditional statements", "Loop conditions", "Error handling"],
    "options_hi": ["टाइप कंस्ट्रेंट्स", "कंडीशनल स्टेटमेंट्स", "लूप कंडीशंस", "एरर हैंडलिंग"],
    "answer_en": "Type constraints",
    "answer_hi": "टाइप कंस्ट्रेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What does 'forEach' method do?",
    "question_hi": "'forEach' मेथड क्या करता है?",
    "options_en": ["Iterates elements", "Filters elements", "Maps elements", "Reduces elements"],
    "options_hi": ["एलिमेंट्स पर इटरेट करता है", "एलिमेंट्स फ़िल्टर करता है", "एलिमेंट्स मैप करता है", "एलिमेंट्स रिड्यूस करता है"],
    "answer_en": "Iterates elements",
    "answer_hi": "एलिमेंट्स पर इटरेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'dynamicCallable'?",
    "question_hi": "'dynamicCallable' क्या है?",
    "options_en": ["Dynamic method calls", "Method declaration", "Function calls", "Closure calls"],
    "options_hi": ["डायनामिक मेथड कॉल्स", "मेथड डिक्लेरेशन", "फंक्शन कॉल्स", "क्लोजर कॉल्स"],
    "answer_en": "Dynamic method calls",
    "answer_hi": "डायनामिक मेथड कॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does 'Task.sleep' do?",
    "question_hi": "'Task.sleep' क्या करता है?",
    "options_en": ["Suspends task", "Cancels task", "Resumes task", "Creates task"],
    "options_hi": ["टास्क सस्पेंड करता है", "टास्क कैंसल करता है", "टास्क रिज्यूम करता है", "टास्क क्रिएट करता है"],
    "answer_en": "Suspends task",
    "answer_hi": "टास्क सस्पेंड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is '@Namespace' wrapper for?",
    "question_hi": "'@Namespace' रैपर किस लिए है?",
    "options_en": ["Animation namespace", "View namespace", "State namespace", "Data namespace"],
    "options_hi": ["एनिमेशन नेमस्पेस", "व्यू नेमस्पेस", "स्टेट नेमस्पेस", "डेटा नेमस्पेस"],
    "answer_en": "Animation namespace",
    "answer_hi": "एनिमेशन नेमस्पेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'CustomStringConvertible'?",
    "question_hi": "'CustomStringConvertible' क्या है?",
    "options_en": ["Custom string representation", "String conversion", "Text display", "Label creation"],
    "options_hi": ["कस्टम स्ट्रिंग रिप्रेजेंटेशन", "स्ट्रिंग कन्वर्जन", "टेक्स्ट डिस्प्ले", "लेबल क्रिएशन"],
    "answer_en": "Custom string representation",
    "answer_hi": "कस्टम स्ट्रिंग रिप्रेजेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does 'dropFirst' method do?",
    "question_hi": "'dropFirst' मेथड क्या करता है?",
    "options_en": ["Removes first elements", "Adds first elements", "Filters elements", "Sorts elements"],
    "options_hi": ["पहले एलिमेंट्स रिमूव करता है", "पहले एलिमेंट्स ऐड करता है", "एलिमेंट्स फ़िल्टर करता है", "एलिमेंट्स सॉर्ट करता है"],
    "answer_en": "Removes first elements",
    "answer_hi": "पहले एलिमेंट्स रिमूव करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'nonisolated' keyword?",
    "question_hi": "'nonisolated' कीवर्ड क्या है?",
    "options_en": ["Non-isolated context", "Isolated context", "Async context", "Main context"],
    "options_hi": ["नॉन-आइसोलेटेड कॉन्टेक्स्ट", "आइसोलेटेड कॉन्टेक्स्ट", "एसिंक कॉन्टेक्स्ट", "मेन कॉन्टेक्स्ट"],
    "answer_en": "Non-isolated context",
    "answer_hi": "नॉन-आइसोलेटेड कॉन्टेक्स्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does '@FetchRequest' wrapper do?",
    "question_hi": "'@FetchRequest' रैपर क्या करता है?",
    "options_en": ["Core Data fetching", "Network request", "File fetching", "Database query"],
    "options_hi": ["कोर डेटा फ़ेचिंग", "नेटवर्क रिक्वेस्ट", "फाइल फ़ेचिंग", "डेटाबेस क्वेरी"],
    "answer_en": "Core Data fetching",
    "answer_hi": "कोर डेटा फ़ेचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'Literal' protocols?",
    "question_hi": "'Literal' प्रोटोकॉल्स क्या हैं?",
    "options_en": ["Literal value creation", "String protocols", "Number protocols", "Array protocols"],
    "options_hi": ["लिटरल वैल्यू क्रिएशन", "स्ट्रिंग प्रोटोकॉल्स", "नंबर प्रोटोकॉल्स", "ऐरे प्रोटोकॉल्स"],
    "answer_en": "Literal value creation",
    "answer_hi": "लिटरल वैल्यू क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does 'prefix' method do?",
    "question_hi": "'prefix' मेथड क्या करता है?",
    "options_en": ["Returns first elements", "Returns last elements", "Filters elements", "Maps elements"],
    "options_hi": ["पहले एलिमेंट्स रिटर्न करता है", "आखिरी एलिमेंट्स रिटर्न करता है", "एलिमेंट्स फ़िल्टर करता है", "एलिमेंट्स मैप करता है"],
    "answer_en": "Returns first elements",
    "answer_hi": "पहले एलिमेंट्स रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'isolated' parameter?",
    "question_hi": "'isolated' पैरामीटर क्या है?",
    "options_en": ["Actor isolation", "Function isolation", "Thread isolation", "Task isolation"],
    "options_hi": ["एक्टर आइसोलेशन", "फंक्शन आइसोलेशन", "थ्रेड आइसोलेशन", "टास्क आइसोलेशन"],
    "answer_en": "Actor isolation",
    "answer_hi": "एक्टर आइसोलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does '@ScaledMetric' wrapper do?",
    "question_hi": "'@ScaledMetric' रैपर क्या करता है?",
    "options_en": ["Dynamic type scaling", "View scaling", "Image scaling", "Text scaling"],
    "options_hi": ["डायनामिक टाइप स्केलिंग", "व्यू स्केलिंग", "इमेज स्केलिंग", "टेक्स्ट स्केलिंग"],
    "answer_en": "Dynamic type scaling",
    "answer_hi": "डायनामिक टाइप स्केलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'Unsafe' pointers?",
    "question_hi": "'Unsafe' पॉइंटर्स क्या हैं?",
    "options_en": ["Unsafe memory access", "Safe memory access", "Managed memory", "Automatic memory"],
    "options_hi": ["अनसेफ मेमोरी एक्सेस", "सेफ मेमोरी एक्सेस", "मैनेज्ड मेमोरी", "ऑटोमेटिक मेमोरी"],
    "answer_en": "Unsafe memory access",
    "answer_hi": "अनसेफ मेमोरी एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does 'partition' method do?",
    "question_hi": "'partition' मेथड क्या करता है?",
    "options_en": ["Partitions based on condition", "Splits evenly", "Divides arrays", "Merges arrays"],
    "options_hi": ["कंडीशन के आधार पर पार्टिशन करता है", "बराबर स्प्लिट करता है", "ऐरे डिवाइड करता है", "ऐरे मर्ज करता है"],
    "answer_en": "Partitions based on condition",
    "answer_hi": "कंडीशन के आधार पर पार्टिशन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is '@ViewBuilder'?",
    "question_hi": "'@ViewBuilder' क्या है?",
    "options_en": ["View composition", "View creation", "View modifier", "View container"],
    "options_hi": ["व्यू कंपोजिशन", "व्यू क्रिएशन", "व्यू मॉडिफायर", "व्यू कंटेनर"],
    "answer_en": "View composition",
    "answer_hi": "व्यू कंपोजिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does 'enumerated' method do?",
    "question_hi": "'enumerated' मेथड क्या करता है?",
    "options_en": ["Adds indices to sequence", "Counts elements", "Sorts elements", "Filters elements"],
    "options_hi": ["सीक्वेंस में इंडिक्स ऐड करता है", "एलिमेंट्स काउंट करता है", "एलिमेंट्स सॉर्ट करता है", "एलिमेंट्स फ़िल्टर करता है"],
    "answer_en": "Adds indices to sequence",
    "answer_hi": "सीक्वेंस में इंडिक्स ऐड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'PropertyList' encoding?",
    "question_hi": "'PropertyList' एनकोडिंग क्या है?",
    "options_en": ["Property list format", "JSON format", "XML format", "Binary format"],
    "options_hi": ["प्रॉपर्टी लिस्ट फॉर्मेट", "JSON फॉर्मेट", "XML फॉर्मेट", "बाइनरी फॉर्मेट"],
    "answer_en": "Property list format",
    "answer_hi": "प्रॉपर्टी लिस्ट फॉर्मेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does 'Task.cancel' do?",
    "question_hi": "'Task.cancel' क्या करता है?",
    "options_en": ["Cancels task", "Suspends task", "Resumes task", "Creates task"],
    "options_hi": ["टास्क कैंसल करता है", "टास्क सस्पेंड करता है", "टास्क रिज्यूम करता है", "टास्क क्रिएट करता है"],
    "answer_en": "Cancels task",
    "answer_hi": "टास्क कैंसल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is '@FocusedValue' wrapper?",
    "question_hi": "'@FocusedValue' रैपर क्या है?",
    "options_en": ["Focus-based value", "State value", "Binding value", "Environment value"],
    "options_hi": ["फोकस-बेस्ड वैल्यू", "स्टेट वैल्यू", "बाइंडिंग वैल्यू", "एनवायरनमेंट वैल्यू"],
    "answer_en": "Focus-based value",
    "answer_hi": "फोकस-बेस्ड वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does 'randomElement' method do?",
    "question_hi": "'randomElement' मेथड क्या करता है?",
    "options_en": ["Returns random element", "Shuffles elements", "Sorts randomly", "Filters randomly"],
    "options_hi": ["रैंडम एलिमेंट रिटर्न करता है", "एलिमेंट्स शफल करता है", "रैंडमली सॉर्ट करता है", "रैंडमली फ़िल्टर करता है"],
    "answer_en": "Returns random element",
    "answer_hi": "रैंडम एलिमेंट रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'Conditional conformance'?",
    "question_hi": "'Conditional conformance' क्या है?",
    "options_en": ["Protocol conformance with conditions", "Unconditional conformance", "Partial conformance", "Full conformance"],
    "options_hi": ["कंडीशंस के साथ प्रोटोकॉल कन्फॉर्मेंस", "अनकंडीशनल कन्फॉर्मेंस", "पार्शियल कन्फॉर्मेंस", "फुल कन्फॉर्मेंस"],
    "answer_en": "Protocol conformance with conditions",
    "answer_hi": "कंडीशंस के साथ प्रोटोकॉल कन्फॉर्मेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does '@UIApplicationDelegateAdaptor' do?",
    "question_hi": "'@UIApplicationDelegateAdaptor' क्या करता है?",
    "options_en": ["Adapts AppDelegate", "Adapts SceneDelegate", "Adapts ViewController", "Adapts SwiftUI"],
    "options_hi": ["AppDelegate एडाप्ट करता है", "SceneDelegate एडाप्ट करता है", "ViewController एडाप्ट करता है", "SwiftUI एडाप्ट करता है"],
    "answer_en": "Adapts AppDelegate",
    "answer_hi": "AppDelegate एडाप्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'Numeric' protocol?",
    "question_hi": "'Numeric' प्रोटोकॉल क्या है?",
    "options_en": ["Numeric operations", "Number storage", "Math functions", "Calculation protocol"],
    "options_hi": ["न्यूमेरिक ऑपरेशंस", "नंबर स्टोरेज", "मैथ फंक्शंस", "कैलकुलेशन प्रोटोकॉल"],
    "answer_en": "Numeric operations",
    "answer_hi": "न्यूमेरिक ऑपरेशंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does 'assert' function do?",
    "question_hi": "'assert' फंक्शन क्या करता है?",
    "options_en": ["Debug-time check", "Runtime check", "Compile-time check", "Always checks"],
    "options_hi": ["डीबग-टाइम चेक", "रनटाइम चेक", "कंपाइल-टाइम चेक", "हमेशा चेक करता है"],
    "answer_en": "Debug-time check",
    "answer_hi": "डीबग-टाइम चेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is '@Gesture' wrapper?",
    "question_hi": "'@Gesture' रैपर क्या है?",
    "options_en": ["Gesture recognition", "Touch handling", "Tap detection", "Swipe detection"],
    "options_hi": ["जेस्चर रिकग्निशन", "टच हैंडलिंग", "टैप डिटेक्शन", "स्वाइप डिटेक्शन"],
    "answer_en": "Gesture recognition",
    "answer_hi": "जेस्चर रिकग्निशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does 'shuffled' method do?",
    "question_hi": "'shuffled' मेथड क्या करता है?",
    "options_en": ["Returns shuffled array", "Sorts array", "Filters array", "Maps array"],
    "options_hi": ["शफल की गई ऐरे रिटर्न करता है", "ऐरे सॉर्ट करता है", "ऐरे फ़िल्टर करता है", "ऐरे मैप करता है"],
    "answer_en": "Returns shuffled array",
    "answer_hi": "शफल की गई ऐरे रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'KeyPath'?",
    "question_hi": "'KeyPath' क्या है?",
    "options_en": ["Type-safe property reference", "String key", "Dictionary key", "Array index"],
    "options_hi": ["टाइप-सेफ प्रॉपर्टी रेफरेंस", "स्ट्रिंग की", "डिक्शनरी की", "ऐरे इंडेक्स"],
    "answer_en": "Type-safe property reference",
    "answer_hi": "टाइप-सेफ प्रॉपर्टी रेफरेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What does 'Task.priority' set?",
    "question_hi": "'Task.priority' क्या सेट करता है?",
    "options_en": ["Task priority", "Task order", "Task delay", "Task cancellation"],
    "options_hi": ["टास्क प्रायोरिटी", "टास्क ऑर्डर", "टास्क डिले", "टास्क कैंसलेशन"],
    "answer_en": "Task priority",
    "answer_hi": "टास्क प्रायोरिटी",
    "attempted": false,
    "selected": ""
  }
]
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