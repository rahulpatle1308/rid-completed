const questions = [
  {
    "num": 1,
    "question_en": "What is the role of the V8 engine in Node.js?",
    "question_hi": "Node.js में V8 इंजन की भूमिका क्या है?",
    "options_en": ["Executes JavaScript code", "Handles HTTP requests", "Provides async I/O", "Manages OS-level threads"],
    "options_hi": ["JavaScript कोड को निष्पादित करता है", "HTTP अनुरोधों को संभालता है", "असिंक्रोनस I/O प्रदान करता है", "OS-स्तरीय थ्रेड्स को मैनेज करता है"],
    "answer_en": "Executes JavaScript code",
    "answer_hi": "JavaScript कोड को निष्पादित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "How does Node.js handle concurrency despite being single-threaded?",
    "question_hi": "एकल-थ्रेडेड होने के बावजूद Node.js समानांतरता को कैसे संभालता है?",
    "options_en": ["Event loop and asynchronous callbacks", "Using multiple threads", "Blocking I/O model", "Separate interpreter instances"],
    "options_hi": ["इवेंट लूप और असिंक्रोनस कॉलबैक्स", "मल्टीपल थ्रेड्स का उपयोग", "ब्लॉकिंग I/O मॉडल", "अलग-अलग इंटरप्रेटर इंस्टेंस"],
    "answer_en": "Event loop and asynchronous callbacks",
    "answer_hi": "इवेंट लूप और असिंक्रोनस कॉलबैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which module allows you to spawn child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस बनाने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["child_process", "os", "process", "cluster"],
    "options_hi": ["child_process", "os", "process", "cluster"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of 'cluster.fork()'?",
    "question_hi": "'cluster.fork()' का उद्देश्य क्या है?",
    "options_en": ["Create new worker processes", "Fork memory", "Split arrays", "Create multiple modules"],
    "options_hi": ["नए वर्कर प्रोसेस बनाना", "मेमोरी को फोर्क करना", "एरे को विभाजित करना", "मल्टीपल मॉड्यूल बनाना"],
    "answer_en": "Create new worker processes",
    "answer_hi": "नए वर्कर प्रोसेस बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the benefit of using Streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स का उपयोग करने का लाभ क्या है?",
    "options_en": ["Efficient memory usage for large data", "Faster execution of loops", "Reduced module size", "Easier routing"],
    "options_hi": ["बड़े डेटा के लिए कुशल मेमोरी उपयोग", "लूप्स का तेज निष्पादन", "कम मॉड्यूल आकार", "सरल रूटिंग"],
    "answer_en": "Efficient memory usage for large data",
    "answer_hi": "बड़े डेटा के लिए कुशल मेमोरी उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does 'zlib' module provide?",
    "question_hi": "'zlib' मॉड्यूल क्या प्रदान करता है?",
    "options_en": ["Compression and decompression", "Data encryption", "Path utilities", "Unit testing"],
    "options_hi": ["कंप्रेशन और डीकंप्रेशन", "डेटा एन्क्रिप्शन", "पाथ यूटिलिटीज़", "यूनिट टेस्टिंग"],
    "answer_en": "Compression and decompression",
    "answer_hi": "कंप्रेशन और डीकंप्रेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which built-in module handles TLS/SSL protocols in Node.js?",
    "question_hi": "Node.js में TLS/SSL प्रोटोकॉल को कौन सा बिल्ट-इन मॉड्यूल हैंडल करता है?",
    "options_en": ["tls", "https", "crypto", "net"],
    "options_hi": ["tls", "https", "crypto", "net"],
    "answer_en": "tls",
    "answer_hi": "tls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'require.resolve()' return?",
    "question_hi": "'require.resolve()' क्या लौटाता है?",
    "options_en": ["Resolved path of a module", "Exports of a module", "Dependency list", "Global object"],
    "options_hi": ["मॉड्यूल का हल किया गया पथ", "मॉड्यूल का एक्सपोर्ट", "डिपेंडेंसी लिस्ट", "ग्लोबल ऑब्जेक्ट"],
    "answer_en": "Resolved path of a module",
    "answer_hi": "मॉड्यूल का हल किया गया पथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which memory area is primarily managed by V8 in Node.js?",
    "question_hi": "Node.js में V8 मुख्य रूप से कौन से मेमोरी क्षेत्र का प्रबंधन करता है?",
    "options_en": ["Heap", "Stack", "Call queue", "Thread pool"],
    "options_hi": ["हीप", "स्टैक", "कॉल क्यू", "थ्रेड पूल"],
    "answer_en": "Heap",
    "answer_hi": "हीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the significance of the 'libuv' library in Node.js?",
    "question_hi": "Node.js में 'libuv' लाइब्रेरी का क्या महत्व है?",
    "options_en": ["Provides asynchronous I/O", "Executes JavaScript code", "Manages buffers", "Resolves modules"],
    "options_hi": ["असिंक्रोनस I/O प्रदान करता है", "JavaScript कोड निष्पादित करता है", "बफ़र्स को मैनेज करता है", "मॉड्यूल हल करता है"],
    "answer_en": "Provides asynchronous I/O",
    "answer_hi": "असिंक्रोनस I/O प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 11,
    "question_en": "What is a 'tick' in Node.js?",
    "question_hi": "Node.js में 'tick' क्या होता है?",
    "options_en": ["Single iteration of the event loop", "CPU cycle", "Buffer flush", "Module resolution"],
    "options_hi": ["इवेंट लूप का एक एकल चक्र", "CPU चक्र", "बफर फ्लश", "मॉड्यूल रिज़ॉल्यूशन"],
    "answer_en": "Single iteration of the event loop",
    "answer_hi": "इवेंट लूप का एक एकल चक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "How does 'process.nextTick()' differ from 'setImmediate()'?",
    "question_hi": "'process.nextTick()' 'setImmediate()' से कैसे अलग है?",
    "options_en": ["Executes before any I/O events", "Executes after all I/O", "Runs before script ends", "Blocks event loop"],
    "options_hi": ["कोई भी I/O इवेंट से पहले चलता है", "सभी I/O के बाद चलता है", "स्क्रिप्ट खत्म होने से पहले चलता है", "इवेंट लूप को ब्लॉक करता है"],
    "answer_en": "Executes before any I/O events",
    "answer_hi": "कोई भी I/O इवेंट से पहले चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the 'REPL' in Node.js used for?",
    "question_hi": "Node.js में 'REPL' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Testing and debugging code interactively", "Running production servers", "Parsing logs", "Managing routes"],
    "options_hi": ["कोड को इंटरएक्टिवली टेस्ट और डिबग करना", "प्रोडक्शन सर्वर चलाना", "लॉग्स पार्स करना", "रूट्स मैनेज करना"],
    "answer_en": "Testing and debugging code interactively",
    "answer_hi": "कोड को इंटरएक्टिवली टेस्ट और डिबग करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which event is emitted when a stream finishes reading?",
    "question_hi": "स्ट्रीम पढ़ना खत्म होने पर कौन-सा इवेंट इमिट होता है?",
    "options_en": ["'end'", "'finish'", "'close'", "'data'"],
    "options_hi": ["'end'", "'finish'", "'close'", "'data'"],
    "answer_en": "'end'",
    "answer_hi": "'end'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What are Buffers in Node.js used for?",
    "question_hi": "Node.js में Buffers किस लिए उपयोग किए जाते हैं?",
    "options_en": ["Handling binary data", "Managing HTTP routes", "Caching views", "Encrypting passwords"],
    "options_hi": ["बाइनरी डेटा संभालने के लिए", "HTTP रूट्स मैनेज करने के लिए", "व्यूज़ कैश करने के लिए", "पासवर्ड एन्क्रिप्ट करने के लिए"],
    "answer_en": "Handling binary data",
    "answer_hi": "बाइनरी डेटा संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'crypto' module in Node.js?",
    "question_hi": "Node.js में 'crypto' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Provide cryptographic functionalities", "Encrypt the event loop", "Secure session storage", "Authenticate JWTs"],
    "options_hi": ["क्रिप्टोग्राफिक कार्य प्रदान करना", "इवेंट लूप को एन्क्रिप्ट करना", "सुरक्षित सत्र संग्रह", "JWT को प्रमाणित करना"],
    "answer_en": "Provide cryptographic functionalities",
    "answer_hi": "क्रिप्टोग्राफिक कार्य प्रदान करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does the 'domain' module do?",
    "question_hi": "'domain' मॉड्यूल क्या करता है?",
    "options_en": ["Handles multiple I/O error contexts", "Creates multiple VMs", "Secures app sandbox", "Routes domains"],
    "options_hi": ["कई I/O एरर कॉन्टेक्स्ट्स को संभालता है", "कई VMs बनाता है", "ऐप सैंडबॉक्स सुरक्षित करता है", "डोमेन रूट करता है"],
    "answer_en": "Handles multiple I/O error contexts",
    "answer_hi": "कई I/O एरर कॉन्टेक्स्ट्स को संभालता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "How does 'EventEmitter' work in Node.js?",
    "question_hi": "Node.js में 'EventEmitter' कैसे काम करता है?",
    "options_en": ["Allows creation and handling of custom events", "Routes HTTP requests", "Handles promises", "Encrypts user data"],
    "options_hi": ["कस्टम इवेंट्स बनाने और हैंडल करने की अनुमति देता है", "HTTP रिक्वेस्ट रूट करता है", "प्रॉमिसेस को हैंडल करता है", "यूजर डेटा एन्क्रिप्ट करता है"],
    "answer_en": "Allows creation and handling of custom events",
    "answer_hi": "कस्टम इवेंट्स बनाने और हैंडल करने की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Node.js method listens for unhandled promise rejections?",
    "question_hi": "Node.js में अनहैंडल्ड प्रॉमिस रीजेक्शन्स के लिए कौन-सा मेथड सुनता है?",
    "options_en": ["process.on('unhandledRejection')", "promise.catch()", "error.listen()", "process.once('exit')"],
    "options_hi": ["process.on('unhandledRejection')", "promise.catch()", "error.listen()", "process.once('exit')"],
    "answer_en": "process.on('unhandledRejection')",
    "answer_hi": "process.on('unhandledRejection')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'global' represent in Node.js?",
    "question_hi": "Node.js में 'global' क्या दर्शाता है?",
    "options_en": ["The global namespace object", "Top of the call stack", "Reserved memory pool", "Module wrapper function"],
    "options_hi": ["ग्लोबल नेमस्पेस ऑब्जेक्ट", "कॉल स्टैक का शीर्ष", "रिज़र्व्ड मेमोरी पूल", "मॉड्यूल रैपर फ़ंक्शन"],
    "answer_en": "The global namespace object",
    "answer_hi": "ग्लोबल नेमस्पेस ऑब्जेक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'vm' module used for in Node.js?",
    "question_hi": "Node.js में 'vm' मॉड्यूल किस लिए उपयोग किया जाता है?",
    "options_en": ["Run code in a sandboxed context", "Create virtual machines", "Memory optimization", "Process management"],
    "options_hi": ["सैंडबॉक्स्ड कॉन्टेक्स्ट में कोड चलाने के लिए", "वर्चुअल मशीनें बनाने के लिए", "मेमोरी ऑप्टिमाइज़ेशन", "प्रोसेस मैनेजमेंट"],
    "answer_en": "Run code in a sandboxed context",
    "answer_hi": "सैंडबॉक्स्ड कॉन्टेक्स्ट में कोड चलाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the difference between 'spawn' and 'exec' in child_process?",
    "question_hi": "child_process में 'spawn' और 'exec' में क्या अंतर है?",
    "options_en": ["'spawn' streams output, 'exec' buffers it", "'exec' streams output, 'spawn' buffers it", "Both are identical", "Spawn is synchronous"],
    "options_hi": ["'spawn' आउटपुट को स्ट्रीम करता है, 'exec' इसे बफर करता है", "'exec' आउटपुट को स्ट्रीम करता है, 'spawn' इसे बफर करता है", "दोनों समान हैं", "spawn synchronous है"],
    "answer_en": "'spawn' streams output, 'exec' buffers it",
    "answer_hi": "'spawn' आउटपुट को स्ट्रीम करता है, 'exec' इसे बफर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the best way to handle large file uploads in Node.js?",
    "question_hi": "Node.js में बड़े फाइल अपलोड्स को संभालने का सबसे अच्छा तरीका क्या है?",
    "options_en": ["Use streams to avoid memory overflow", "Load file into memory then parse", "Use JSON parsing", "Use setInterval"],
    "options_hi": ["मेमोरी ओवरफ्लो से बचने के लिए स्ट्रीम्स का उपयोग करें", "फाइल को मेमोरी में लोड करके पार्स करें", "JSON पार्सिंग का उपयोग करें", "setInterval का उपयोग करें"],
    "answer_en": "Use streams to avoid memory overflow",
    "answer_hi": "मेमोरी ओवरफ्लो से बचने के लिए स्ट्रीम्स का उपयोग करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does 'process.hrtime()' return?",
    "question_hi": "'process.hrtime()' क्या रिटर्न करता है?",
    "options_en": ["High-resolution real time in [seconds, nanoseconds]", "Epoch timestamp", "Total CPU usage", "Thread count"],
    "options_hi": ["[सेकंड, नैनोसेकंड] में हाई-रेजोल्यूशन रियल टाइम", "एपोक टाइमस्टैम्प", "कुल CPU उपयोग", "थ्रेड काउंट"],
    "answer_en": "High-resolution real time in [seconds, nanoseconds]",
    "answer_hi": "[सेकंड, नैनोसेकंड] में हाई-रेजोल्यूशन रियल टाइम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What are WeakRefs used for in Node.js?",
    "question_hi": "Node.js में WeakRefs किस लिए उपयोग होते हैं?",
    "options_en": ["Manage weak references to objects", "Free memory immediately", "Track object equality", "Create circular references"],
    "options_hi": ["ऑब्जेक्ट्स के कमजोर रेफरेंस मैनेज करने के लिए", "तुरंत मेमोरी फ्री करने के लिए", "ऑब्जेक्ट समानता ट्रैक करने के लिए", "सर्कुलर रेफरेंस बनाने के लिए"],
    "answer_en": "Manage weak references to objects",
    "answer_hi": "ऑब्जेक्ट्स के कमजोर रेफरेंस मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does 'NODE_OPTIONS' environment variable allow?",
    "question_hi": "'NODE_OPTIONS' एनवायरनमेंट वेरिएबल क्या अनुमति देता है?",
    "options_en": ["Pass V8 options to Node.js", "Select npm registry", "Toggle debugging", "Enable CORS"],
    "options_hi": ["V8 विकल्प Node.js को पास करना", "npm रजिस्ट्री चुनना", "डिबगिंग चालू/बंद करना", "CORS सक्षम करना"],
    "answer_en": "Pass V8 options to Node.js",
    "answer_hi": "V8 विकल्प Node.js को पास करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of Buffer.from('abc')?",
    "question_hi": "Buffer.from('abc') का आउटपुट क्या है?",
    "options_en": ["<Buffer 61 62 63>", "abc", "[97, 98, 99]", "buffer:abc"],
    "options_hi": ["<Buffer 61 62 63>", "abc", "[97, 98, 99]", "buffer:abc"],
    "answer_en": "<Buffer 61 62 63>",
    "answer_hi": "<Buffer 61 62 63>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of 'util.promisify()'?",
    "question_hi": "'util.promisify()' का उद्देश्य क्या है?",
    "options_en": ["Convert callback-based functions to promises", "Make async code blocking", "Create event listeners", "Write file buffers"],
    "options_hi": ["कॉलबैक-आधारित फ़ंक्शंस को प्रॉमिस में कनवर्ट करना", "असिंक कोड को ब्लॉकिंग बनाना", "इवेंट लिसनर्स बनाना", "फाइल बफर लिखना"],
    "answer_en": "Convert callback-based functions to promises",
    "answer_hi": "कॉलबैक-आधारित फ़ंक्शंस को प्रॉमिस में कनवर्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the default behavior of uncaught exceptions in Node.js?",
    "question_hi": "Node.js में अनकॉट एक्सेप्शंस का डिफ़ॉल्ट व्यवहार क्या है?",
    "options_en": ["Terminates the process", "Ignores the error", "Logs and continues", "Retries automatically"],
    "options_hi": ["प्रोसेस को समाप्त कर देता है", "एरर को नजरअंदाज करता है", "लॉग करता है और जारी रखता है", "स्वतः पुनः प्रयास करता है"],
    "answer_en": "Terminates the process",
    "answer_hi": "प्रोसेस को समाप्त कर देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "How do you monitor memory usage in Node.js?",
    "question_hi": "Node.js में मेमोरी उपयोग कैसे मॉनिटर करते हैं?",
    "options_en": ["process.memoryUsage()", "global.gc()", "vm.usage()", "heap.track()"],
    "options_hi": ["process.memoryUsage()", "global.gc()", "vm.usage()", "heap.track()"],
    "answer_en": "process.memoryUsage()",
    "answer_hi": "process.memoryUsage()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the main benefit of using 'async_hooks' module?",
    "question_hi": "'async_hooks' मॉड्यूल का मुख्य लाभ क्या है?",
    "options_en": ["Track async resources lifecycle", "Debug global variables", "Encrypt requests", "Measure HTTP latency"],
    "options_hi": ["असिंक रिसोर्सेस के लाइफसायकल को ट्रैक करना", "ग्लोबल वेरिएबल्स डिबग करना", "रिक्वेस्ट एन्क्रिप्ट करना", "HTTP लेटेंसी मापना"],
    "answer_en": "Track async resources lifecycle",
    "answer_hi": "असिंक रिसोर्सेस के लाइफसायकल को ट्रैक करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does the 'http2' module support?",
    "question_hi": "'http2' मॉड्यूल क्या सपोर्ट करता है?",
    "options_en": ["HTTP/2 protocol features", "WebSockets", "JWT signing", "GraphQL parsing"],
    "options_hi": ["HTTP/2 प्रोटोकॉल फीचर्स", "WebSockets", "JWT साइनिंग", "GraphQL पार्सिंग"],
    "answer_en": "HTTP/2 protocol features",
    "answer_hi": "HTTP/2 प्रोटोकॉल फीचर्स",
    "attempted": false,
    "selected": ""
  },
 {
  "num": 33,
  "question_en": "How do you prevent blocking the event loop in Node.js?",
  "question_hi": "Node.js में इवेंट लूप को ब्लॉक होने से कैसे बचाते हैं?",
  "options_en": [
    "Use asynchronous, non-blocking code",
    "Run code in the main thread",
    "Use synchronous file I/O",
    "Increase CPU power"
  ],
  "options_hi": [
    "एसिंक्रोनस, नॉन-ब्लॉकिंग कोड का उपयोग करें",
    "मुख्य थ्रेड में कोड चलाएं",
    "सिंक्रोनस फाइल I/O का उपयोग करें",
    "CPU पावर बढ़ाएं"
  ],
  "answer_en": "Use asynchronous, non-blocking code",
  "answer_hi": "एसिंक्रोनस, नॉन-ब्लॉकिंग कोड का उपयोग करें",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Which tool is used for CPU profiling in Node.js?",
  "question_hi": "Node.js में CPU प्रोफाइलिंग के लिए कौन सा टूल उपयोग होता है?",
  "options_en": ["clinic.js", "npm audit", "express-trace", "crypto.perf"],
  "options_hi": ["clinic.js", "npm audit", "express-trace", "crypto.perf"],
  "answer_en": "clinic.js",
  "answer_hi": "clinic.js",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "What does the 'assert' module provide?",
  "question_hi": "'assert' मॉड्यूल क्या प्रदान करता है?",
  "options_en": ["Test invariants in code", "Handle permissions", "Encrypt headers", "Sign cookies"],
  "options_hi": ["कोड में इनवेरिएंट्स का परीक्षण", "अनुमतियों को संभालना", "हेडर एन्क्रिप्ट करना", "कुकीज़ साइन करना"],
  "answer_en": "Test invariants in code",
  "answer_hi": "कोड में इनवेरिएंट्स का परीक्षण",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "Which tool bundles Node.js applications for production?",
  "question_hi": "Node.js एप्लिकेशन को प्रोडक्शन के लिए बंडल करने वाला टूल कौन सा है?",
  "options_en": ["webpack", "nodemon", "jshint", "nvm"],
  "options_hi": ["webpack", "nodemon", "jshint", "nvm"],
  "answer_en": "webpack",
  "answer_hi": "webpack",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "What is the primary goal of sandboxing in Node.js?",
  "question_hi": "Node.js में sandboxing का मुख्य उद्देश्य क्या है?",
  "options_en": ["Securely execute untrusted code", "Optimize loop performance", "Minimize module size", "Buffer logs"],
  "options_hi": ["अविश्वसनीय कोड को सुरक्षित रूप से निष्पादित करना", "लूप प्रदर्शन अनुकूलित करना", "मॉड्यूल साइज कम करना", "लॉग्स को बफर करना"],
  "answer_en": "Securely execute untrusted code",
  "answer_hi": "अविश्वसनीय कोड को सुरक्षित रूप से निष्पादित करना",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "Which Node.js core module supports DNS resolution?",
  "question_hi": "DNS रिज़ॉल्यूशन के लिए कौन सा Node.js कोर मॉड्यूल है?",
  "options_en": ["dns", "net", "http", "tls"],
  "options_hi": ["dns", "net", "http", "tls"],
  "answer_en": "dns",
  "answer_hi": "dns",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "What does 'require.main === module' check?",
  "question_hi": "'require.main === module' क्या जांचता है?",
  "options_en": ["If file is run directly", "Module path validity", "Dependency status", "Cluster master node"],
  "options_hi": ["क्या फ़ाइल सीधे चलाई गई है", "मॉड्यूल पाथ वैधता", "डिपेंडेंसी स्थिति", "क्लस्टर मास्टर नोड"],
  "answer_en": "If file is run directly",
  "answer_hi": "क्या फ़ाइल सीधे चलाई गई है",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "What does 'global.gc()' do?",
  "question_hi": "'global.gc()' क्या करता है?",
  "options_en": ["Triggers garbage collection (with --expose-gc)", "Clears global cache", "Executes callbacks", "Emits close event"],
  "options_hi": ["गार्बेज कलेक्शन ट्रिगर करता है (--expose-gc के साथ)", "ग्लोबल कैश साफ़ करता है", "कॉलबैक चलाता है", "क्लोज़ इवेंट जारी करता है"],
  "answer_en": "Triggers garbage collection (with --expose-gc)",
  "answer_hi": "गार्बेज कलेक्शन ट्रिगर करता है (--expose-gc के साथ)",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "What is the use of 'trace_events' in Node.js?",
  "question_hi": "Node.js में 'trace_events' का उपयोग क्या है?",
  "options_en": ["Performance tracing diagnostics", "Set breakpoints", "Enable stream logging", "Debug middleware"],
  "options_hi": ["परफॉर्मेंस ट्रेसिंग डायग्नोस्टिक्स", "ब्रेकपॉइंट सेट करना", "स्ट्रीम लॉगिंग सक्षम करना", "मिडलवेयर डिबग करना"],
  "answer_en": "Performance tracing diagnostics",
  "answer_hi": "परफॉर्मेंस ट्रेसिंग डायग्नोस्टिक्स",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "Which flag enables ES Modules in Node.js?",
  "question_hi": "Node.js में ES मॉड्यूल्स को सक्षम करने वाला फ्लैग कौन सा है?",
  "options_en": ["--experimental-modules", "--esm", "--use-es", "--import-module"],
  "options_hi": ["--experimental-modules", "--esm", "--use-es", "--import-module"],
  "answer_en": "--experimental-modules",
  "answer_hi": "--experimental-modules",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "What is the role of the 'timers' module?",
  "question_hi": "'timers' मॉड्यूल का क्या कार्य है?",
  "options_en": ["Schedule execution using setTimeout, setInterval", "Manage timestamps", "Control HTTP timeout", "Handle event duration"],
  "options_hi": ["setTimeout, setInterval से निष्पादन शेड्यूल करना", "टाइमस्टैम्प प्रबंधित करना", "HTTP टाइमआउट नियंत्रित करना", "इवेंट अवधि संभालना"],
  "answer_en": "Schedule execution using setTimeout, setInterval",
  "answer_hi": "setTimeout, setInterval से निष्पादन शेड्यूल करना",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "What is 'heapdump' used for?",
  "question_hi": "'heapdump' का उपयोग किस लिए किया जाता है?",
  "options_en": ["Generate snapshots of memory heap", "Dump logs to disk", "Clear stack trace", "Reallocate buffer memory"],
  "options_hi": ["मेमोरी हीप के स्नैपशॉट बनाना", "लॉग्स को डिस्क पर डंप करना", "स्टैक ट्रेस साफ़ करना", "बफर मेमोरी पुनः आवंटित करना"],
  "answer_en": "Generate snapshots of memory heap",
  "answer_hi": "मेमोरी हीप के स्नैपशॉट बनाना",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Which API provides performance metrics in Node.js?",
  "question_hi": "Node.js में प्रदर्शन मीट्रिक्स प्रदान करने वाला API कौन सा है?",
  "options_en": ["perf_hooks", "metrics", "analyzer", "os.diagnostics"],
  "options_hi": ["perf_hooks", "metrics", "analyzer", "os.diagnostics"],
  "answer_en": "perf_hooks",
  "answer_hi": "perf_hooks",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "What is the purpose of using 'http.Agent'?",
  "question_hi": "'http.Agent' का उपयोग किस लिए किया जाता है?",
  "options_en": ["Manage connection persistence and reuse", "Route requests", "Track headers", "Optimize sockets"],
  "options_hi": ["कनेक्शन की स्थिरता और पुन: उपयोग प्रबंधित करना", "रिक्वेस्ट रूट करना", "हेडर ट्रैक करना", "सॉकेट्स का अनुकूलन करना"],
  "answer_en": "Manage connection persistence and reuse",
  "answer_hi": "कनेक्शन की स्थिरता और पुन: उपयोग प्रबंधित करना",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "What does 'process.abort()' do?",
  "question_hi": "'process.abort()' क्या करता है?",
  "options_en": ["Forcefully crashes the process and core dumps", "Soft exit", "Logs debug info", "Flushes stdout"],
  "options_hi": ["प्रक्रिया को ज़बरदस्ती क्रैश करता है और कोर डंप करता है", "सॉफ्ट एग्ज़िट", "डिबग जानकारी लॉग करता है", "stdout फ्लश करता है"],
  "answer_en": "Forcefully crashes the process and core dumps",
  "answer_hi": "प्रक्रिया को ज़बरदस्ती क्रैश करता है और कोर डंप करता है",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "How do you manage unhandled exceptions securely?",
  "question_hi": "अनहैंडल्ड एक्सेप्शंस को सुरक्षित रूप से कैसे प्रबंधित करते हैं?",
  "options_en": ["Use a centralized error handler and process manager", "Suppress logs", "Restart within same thread", "Use setTimeout"],
  "options_hi": ["सेंट्रलाइज़्ड एरर हैंडलर और प्रोसेस मैनेजर का उपयोग करें", "लॉग दबाएं", "एक ही थ्रेड में पुनः आरंभ करें", "setTimeout का उपयोग करें"],
  "answer_en": "Use a centralized error handler and process manager",
  "answer_hi": "सेंट्रलाइज़्ड एरर हैंडलर और प्रोसेस मैनेजर का उपयोग करें",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "What does 'worker_threads' module enable?",
  "question_hi": "'worker_threads' मॉड्यूल क्या सक्षम करता है?",
  "options_en": ["Multi-threading within Node.js", "Child processes with IPC", "TLS-based routing", "Memory cache encryption"],
  "options_hi": ["Node.js में मल्टी-थ्रेडिंग", "IPC के साथ चाइल्ड प्रोसेस", "TLS आधारित रूटिंग", "मेमोरी कैश एन्क्रिप्शन"],
  "answer_en": "Multi-threading within Node.js",
  "answer_hi": "Node.js में मल्टी-थ्रेडिंग",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_en": "Which flag allows debugging Node.js using Chrome DevTools?",
  "question_hi": "कौन सा फ्लैग Node.js को Chrome DevTools के साथ डिबग करने की अनुमति देता है?",
  "options_en": ["--inspect", "--debug", "--trace", "--analyze"],
  "options_hi": ["--inspect", "--debug", "--trace", "--analyze"],
  "answer_en": "--inspect",
  "answer_hi": "--inspect",
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