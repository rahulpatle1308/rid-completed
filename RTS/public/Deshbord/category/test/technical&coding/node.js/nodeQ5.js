const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js मुख्य रूप से किसके लिए उपयोग किया जाता है?",
    "options_en": ["Frontend development", "Backend development", "Mobile app development", "Game development"],
    "options_hi": ["फ्रंटएंड विकास", "बैकेंड विकास", "मोबाइल ऐप विकास", "गेम विकास"],
    "answer_en": "Backend development",
    "answer_hi": "बैकेंड विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which module is used to handle file operations in Node.js?",
    "question_hi": "Node.js में फ़ाइल संचालन के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["http", "fs", "path", "os"],
    "options_hi": ["http", "fs", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'require()' function do in Node.js?",
    "question_hi": "Node.js में 'require()' फ़ंक्शन क्या करता है?",
    "options_en": ["Imports modules", "Exports modules", "Runs a script", "Handles HTTP requests"],
    "options_hi": ["मॉड्यूल आयात करता है", "मॉड्यूल निर्यात करता है", "स्क्रिप्ट चलाता है", "HTTP अनुरोध संभालता है"],
    "answer_en": "Imports modules",
    "answer_hi": "मॉड्यूल आयात करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is NOT a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["http", "fs", "express", "path"],
    "options_hi": ["http", "fs", "express", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the default port for a Node.js HTTP server?",
    "question_hi": "Node.js HTTP सर्वर के लिए डिफ़ॉल्ट पोर्ट क्या है?",
    "options_en": ["3000", "80", "8080", "5000"],
    "options_hi": ["3000", "80", "8080", "5000"],
    "answer_en": "3000",
    "answer_hi": "3000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which command is used to initialize a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट को इनिशियलाइज़ करने के लिए कौन-सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm init", "node init", "npm start", "node create"],
    "options_hi": ["npm init", "node init", "npm start", "node create"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the purpose of 'package.json' in Node.js?",
    "question_hi": "Node.js में 'package.json' का उद्देश्य क्या है?",
    "options_en": ["Stores source code", "Manages dependencies", "Runs the application", "Configures the server"],
    "options_hi": ["सोर्स कोड स्टोर करता है", "डिपेंडेंसी प्रबंधित करता है", "एप्लिकेशन चलाता है", "सर्वर कॉन्फ़िगर करता है"],
    "answer_en": "Manages dependencies",
    "answer_hi": "डिपेंडेंसी प्रबंधित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of the following is a Node.js framework?",
    "question_hi": "निम्नलिखित में से कौन एक Node.js फ्रेमवर्क है?",
    "options_en": ["Django", "Flask", "Express", "Laravel"],
    "options_hi": ["Django", "Flask", "Express", "Laravel"],
    "answer_en": "Express",
    "answer_hi": "Express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the event-driven architecture in Node.js?",
    "question_hi": "Node.js में इवेंट-ड्रिवेन आर्किटेक्चर क्या है?",
    "options_en": ["Synchronous execution", "Asynchronous execution", "Linear execution", "Parallel execution"],
    "options_hi": ["सिंक्रोनस एक्जीक्यूशन", "असिंक्रोनस एक्जीक्यूशन", "लीनियर एक्जीक्यूशन", "पैरेलल एक्जीक्यूशन"],
    "answer_en": "Asynchronous execution",
    "answer_hi": "असिंक्रोनस एक्जीक्यूशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function is used to include external modules in Node.js?",
    "question_hi": "Node.js में बाहरी मॉड्यूल शामिल करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["import()", "require()", "include()", "use()"],
    "options_hi": ["import()", "require()", "include()", "use()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the purpose of the 'exports' object in Node.js?",
    "question_hi": "Node.js में 'exports' ऑब्जेक्ट का उद्देश्य क्या है?",
    "options_en": ["To import modules", "To export modules", "To handle HTTP requests", "To manage file operations"],
    "options_hi": ["मॉड्यूल आयात करने के लिए", "मॉड्यूल निर्यात करने के लिए", "HTTP अनुरोध संभालने के लिए", "फ़ाइल संचालन प्रबंधित करने के लिए"],
    "answer_en": "To export modules",
    "answer_hi": "मॉड्यूल निर्यात करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which of the following is a valid way to create a simple HTTP server in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक सरल HTTP सर्वर बनाने का वैध तरीका है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.startServer()", "http.initServer()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.startServer()", "http.initServer()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of the 'process' object in Node.js?",
    "question_hi": "Node.js में 'process' ऑब्जेक्ट का उद्देश्य क्या है?",
    "options_en": ["To handle file operations", "To manage child processes", "To interact with the current process", "To create HTTP servers"],
    "options_hi": ["फ़ाइल संचालन संभालने के लिए", "चाइल्ड प्रोसेस प्रबंधित करने के लिए", "वर्तमान प्रक्रिया के साथ इंटरैक्ट करने के लिए", "HTTP सर्वर बनाने के लिए"],
    "answer_en": "To interact with the current process",
    "answer_hi": "वर्तमान प्रक्रिया के साथ इंटरैक्ट करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method is used to read environment variables in Node.js?",
    "question_hi": "Node.js में पर्यावरण चर पढ़ने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["process.getEnv()", "process.env", "env.get()", "process.readEnv()"],
    "options_hi": ["process.getEnv()", "process.env", "env.get()", "process.readEnv()"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the purpose of the '__dirname' variable in Node.js?",
    "question_hi": "Node.js में '__dirname' वेरिएबल का उद्देश्य क्या है?",
    "options_en": ["To get the current filename", "To get the current directory name", "To get the current working directory", "To get the current module name"],
    "options_hi": ["वर्तमान फ़ाइलनाम प्राप्त करने के लिए", "वर्तमान डायरेक्टरी नाम प्राप्त करने के लिए", "वर्तमान कार्यशील डायरेक्टरी प्राप्त करने के लिए", "वर्तमान मॉड्यूल नाम प्राप्त करने के लिए"],
    "answer_en": "To get the current directory name",
    "answer_hi": "वर्तमान डायरेक्टरी नाम प्राप्त करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of the following is true about Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js के बारे में सत्य है?",
    "options_en": ["It is single-threaded", "It is multi-threaded", "It uses PHP syntax", "It is synchronous by default"],
    "options_hi": ["यह सिंगल-थ्रेडेड है", "यह मल्टी-थ्रेडेड है", "यह PHP सिंटैक्स का उपयोग करता है", "यह डिफ़ॉल्ट रूप से सिंक्रोनस है"],
    "answer_en": "It is single-threaded",
    "answer_hi": "यह सिंगल-थ्रेडेड है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the purpose of the 'Buffer' class in Node.js?",
    "question_hi": "Node.js में 'Buffer' क्लास का उद्देश्य क्या है?",
    "options_en": ["To handle binary data", "To handle JSON data", "To handle text data", "To handle HTTP requests"],
    "options_hi": ["बाइनरी डेटा संभालने के लिए", "JSON डेटा संभालने के लिए", "टेक्स्ट डेटा संभालने के लिए", "HTTP अनुरोध संभालने के लिए"],
    "answer_en": "To handle binary data",
    "answer_hi": "बाइनरी डेटा संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of the following is a core module in Node.js for handling operating system-related operations?",
    "question_hi": "निम्नलिखित में से कौन Node.js में ऑपरेटिंग सिस्टम-संबंधित संचालन संभालने के लिए एक कोर मॉड्यूल है?",
    "options_en": ["fs", "http", "os", "path"],
    "options_hi": ["fs", "http", "os", "path"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the purpose of the 'path' module in Node.js?",
    "question_hi": "Node.js में 'path' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle file paths", "To handle HTTP paths", "To handle database paths", "To handle URL paths"],
    "options_hi": ["फ़ाइल पथ संभालने के लिए", "HTTP पथ संभालने के लिए", "डेटाबेस पथ संभालने के लिए", "URL पथ संभालने के लिए"],
    "answer_en": "To handle file paths",
    "answer_hi": "फ़ाइल पथ संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is a valid way to export a function in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक फ़ंक्शन निर्यात करने का वैध तरीका है?",
    "options_en": ["module.exports = myFunction;", "exports = myFunction;", "export myFunction;", "module.export(myFunction);"],
    "options_hi": ["module.exports = myFunction;", "exports = myFunction;", "export myFunction;", "module.export(myFunction);"],
    "answer_en": "module.exports = myFunction;",
    "answer_hi": "module.exports = myFunction;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of the 'events' module in Node.js?",
    "question_hi": "Node.js में 'events' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP events", "To handle file events", "To handle custom events", "To handle database events"],
    "options_hi": ["HTTP इवेंट्स संभालने के लिए", "फ़ाइल इवेंट्स संभालने के लिए", "कस्टम इवेंट्स संभालने के लिए", "डेटाबेस इवेंट्स संभालने के लिए"],
    "answer_en": "To handle custom events",
    "answer_hi": "कस्टम इवेंट्स संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of the following is a valid way to handle asynchronous operations in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में अतुल्यकालिक संचालन संभालने का वैध तरीका है?",
    "options_en": ["Callbacks", "Loops", "Conditionals", "Synchronous functions"],
    "options_hi": ["कॉलबैक्स", "लूप्स", "कंडीशनल्स", "सिंक्रोनस फ़ंक्शन्स"],
    "answer_en": "Callbacks",
    "answer_hi": "कॉलबैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the purpose of the 'util' module in Node.js?",
    "question_hi": "Node.js में 'util' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To provide utility functions", "To handle HTTP utilities", "To manage file utilities", "To handle database utilities"],
    "options_hi": ["यूटिलिटी फ़ंक्शन्स प्रदान करने के लिए", "HTTP यूटिलिटीज़ संभालने के लिए", "फ़ाइल यूटिलिटीज़ प्रबंधित करने के लिए", "डेटाबेस यूटिलिटीज़ संभालने के लिए"],
    "answer_en": "To provide utility functions",
    "answer_hi": "यूटिलिटी फ़ंक्शन्स प्रदान करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of the following is a valid way to read a file asynchronously in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में अतुल्यकालिक रूप से एक फ़ाइल पढ़ने का वैध तरीका है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.readAsync()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.readAsync()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of the 'stream' module in Node.js?",
    "question_hi": "Node.js में 'stream' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle data streams", "To handle HTTP streams", "To handle file streams", "To handle database streams"],
    "options_hi": ["डेटा स्ट्रीम्स संभालने के लिए", "HTTP स्ट्रीम्स संभालने के लिए", "फ़ाइल स्ट्रीम्स संभालने के लिए", "डेटाबेस स्ट्रीम्स संभालने के लिए"],
    "answer_en": "To handle data streams",
    "answer_hi": "डेटा स्ट्रीम्स संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of the following is a valid way to create a readable stream in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक पठनीय स्ट्रीम बनाने का वैध तरीका है?",
    "options_en": ["fs.createReadStream()", "fs.createStream()", "fs.readStream()", "fs.newReadStream()"],
    "options_hi": ["fs.createReadStream()", "fs.createStream()", "fs.readStream()", "fs.newReadStream()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the purpose of the 'crypto' module in Node.js?",
    "question_hi": "Node.js में 'crypto' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle cryptographic operations", "To handle HTTP encryption", "To handle file encryption", "To handle database encryption"],
    "options_hi": ["क्रिप्टोग्राफ़िक संचालन संभालने के लिए", "HTTP एन्क्रिप्शन संभालने के लिए", "फ़ाइल एन्क्रिप्शन संभालने के लिए", "डेटाबेस एन्क्रिप्शन संभालने के लिए"],
    "answer_en": "To handle cryptographic operations",
    "answer_hi": "क्रिप्टोग्राफ़िक संचालन संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of the following is a valid way to create a writable stream in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक लिखने योग्य स्ट्रीम बनाने का वैध तरीका है?",
    "options_en": ["fs.createWriteStream()", "fs.createStream()", "fs.writeStream()", "fs.newWriteStream()"],
    "options_hi": ["fs.createWriteStream()", "fs.createStream()", "fs.writeStream()", "fs.newWriteStream()"],
    "answer_en": "fs.createWriteStream()",
    "answer_hi": "fs.createWriteStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of the 'child_process' module in Node.js?",
    "question_hi": "Node.js में 'child_process' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle child processes", "To handle HTTP processes", "To handle file processes", "To handle database processes"],
    "options_hi": ["चाइल्ड प्रोसेसेस संभालने के लिए", "HTTP प्रोसेसेस संभालने के लिए", "फ़ाइल प्रोसेसेस संभालने के लिए", "डेटाबेस प्रोसेसेस संभालने के लिए"],
    "answer_en": "To handle child processes",
    "answer_hi": "चाइल्ड प्रोसेसेस संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which of the following is a valid way to spawn a child process in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक चाइल्ड प्रोसेस स्पॉन करने का वैध तरीका है?",
    "options_en": ["child_process.spawn()", "child_process.new()", "child_process.start()", "child_process.run()"],
    "options_hi": ["child_process.spawn()", "child_process.new()", "child_process.start()", "child_process.run()"],
    "answer_en": "child_process.spawn()",
    "answer_hi": "child_process.spawn()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the purpose of the 'cluster' module in Node.js?",
    "question_hi": "Node.js में 'cluster' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle multi-threading", "To handle HTTP clustering", "To handle file clustering", "To handle database clustering"],
    "options_hi": ["मल्टी-थ्रेडिंग संभालने के लिए", "HTTP क्लस्टरिंग संभालने के लिए", "फ़ाइल क्लस्टरिंग संभालने के लिए", "डेटाबेस क्लस्टरिंग संभालने के लिए"],
    "answer_en": "To handle multi-threading",
    "answer_hi": "मल्टी-थ्रेडिंग संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which of the following is a valid way to create a cluster in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक क्लस्टर बनाने का वैध तरीका है?",
    "options_en": ["cluster.fork()", "cluster.new()", "cluster.start()", "cluster.create()"],
    "options_hi": ["cluster.fork()", "cluster.new()", "cluster.start()", "cluster.create()"],
    "answer_en": "cluster.fork()",
    "answer_hi": "cluster.fork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of the 'dns' module in Node.js?",
    "question_hi": "Node.js में 'dns' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle DNS operations", "To handle HTTP DNS", "To handle file DNS", "To handle database DNS"],
    "options_hi": ["DNS संचालन संभालने के लिए", "HTTP DNS संभालने के लिए", "फ़ाइल DNS संभालने के लिए", "डेटाबेस DNS संभालने के लिए"],
    "answer_en": "To handle DNS operations",
    "answer_hi": "DNS संचालन संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which of the following is a valid way to resolve a hostname in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक होस्टनाम रिज़ॉल्व करने का वैध तरीका है?",
    "options_en": ["dns.resolve()", "dns.lookup()", "dns.find()", "dns.get()"],
    "options_hi": ["dns.resolve()", "dns.lookup()", "dns.find()", "dns.get()"],
    "answer_en": "dns.lookup()",
    "answer_hi": "dns.lookup()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the purpose of the 'net' module in Node.js?",
    "question_hi": "Node.js में 'net' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle network operations", "To handle HTTP networking", "To handle file networking", "To handle database networking"],
    "options_hi": ["नेटवर्क संचालन संभालने के लिए", "HTTP नेटवर्किंग संभालने के लिए", "फ़ाइल नेटवर्किंग संभालने के लिए", "डेटाबेस नेटवर्किंग संभालने के लिए"],
    "answer_en": "To handle network operations",
    "answer_hi": "नेटवर्क संचालन संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which of the following is a valid way to create a TCP server in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक TCP सर्वर बनाने का वैध तरीका है?",
    "options_en": ["net.createServer()", "net.newServer()", "net.startServer()", "net.initServer()"],
    "options_hi": ["net.createServer()", "net.newServer()", "net.startServer()", "net.initServer()"],
    "answer_en": "net.createServer()",
    "answer_hi": "net.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the purpose of the 'tls' module in Node.js?",
    "question_hi": "Node.js में 'tls' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle TLS/SSL operations", "To handle HTTP TLS", "To handle file TLS", "To handle database TLS"],
    "options_hi": ["TLS/SSL संचालन संभालने के लिए", "HTTP TLS संभालने के लिए", "फ़ाइल TLS संभालने के लिए", "डेटाबेस TLS संभालने के लिए"],
    "answer_en": "To handle TLS/SSL operations",
    "answer_hi": "TLS/SSL संचालन संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which of the following is a valid way to create a TLS server in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक TLS सर्वर बनाने का वैध तरीका है?",
    "options_en": ["tls.createServer()", "tls.newServer()", "tls.startServer()", "tls.initServer()"],
    "options_hi": ["tls.createServer()", "tls.newServer()", "tls.startServer()", "tls.initServer()"],
    "answer_en": "tls.createServer()",
    "answer_hi": "tls.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the purpose of the 'zlib' module in Node.js?",
    "question_hi": "Node.js में 'zlib' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle compression operations", "To handle HTTP compression", "To handle file compression", "To handle database compression"],
    "options_hi": ["कंप्रेशन संचालन संभालने के लिए", "HTTP कंप्रेशन संभालने के लिए", "फ़ाइल कंप्रेशन संभालने के लिए", "डेटाबेस कंप्रेशन संभालने के लिए"],
    "answer_en": "To handle compression operations",
    "answer_hi": "कंप्रेशन संचालन संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which of the following is a valid way to compress a file in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक फ़ाइल को कंप्रेस करने का वैध तरीका है?",
    "options_en": ["zlib.createGzip()", "zlib.compress()", "zlib.zip()", "zlib.pack()"],
    "options_hi": ["zlib.createGzip()", "zlib.compress()", "zlib.zip()", "zlib.pack()"],
    "answer_en": "zlib.createGzip()",
    "answer_hi": "zlib.createGzip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the purpose of the 'readline' module in Node.js?",
    "question_hi": "Node.js में 'readline' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle line-by-line input", "To handle HTTP input", "To handle file input", "To handle database input"],
    "options_hi": ["लाइन-बाय-लाइन इनपुट संभालने के लिए", "HTTP इनपुट संभालने के लिए", "फ़ाइल इनपुट संभालने के लिए", "डेटाबेस इनपुट संभालने के लिए"],
    "answer_en": "To handle line-by-line input",
    "answer_hi": "लाइन-बाय-लाइन इनपुट संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which of the following is a valid way to create a readline interface in Node.js?",
    "question_hi": "निम्नलिखित में से कौन Node.js में एक रीडलाइन इंटरफ़ेस बनाने का वैध तरीका है?",
    "options_en": ["readline.createInterface()", "readline.newInterface()", "readline.startInterface()", "readline.initInterface()"],
    "options_hi": ["readline.createInterface()", "readline.newInterface()", "readline.startInterface()", "readline.initInterface()"],
    "answer_en": "readline.createInterface()",
    "answer_hi": "readline.createInterface()",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 43,
    "question_en": "What is the default port for a Node.js HTTP server?",
    "question_hi": "Node.js HTTP सर्वर के लिए डिफ़ॉल्ट पोर्ट क्या है?",
    "options_en": ["3000", "80", "8080", "5000"],
    "options_hi": ["3000", "80", "8080", "5000"],
    "answer_en": "3000",
    "answer_hi": "3000",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 44,
    "question_en": "Which method is used to compile and run code in a sandbox using the 'vm' module?",
    "question_hi": "'vm' मॉड्यूल का उपयोग करके सैंडबॉक्स में कोड को कंपाइल और रन करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["vm.runInContext()", "vm.execute()", "vm.compile()", "vm.sandbox()"],
    "options_hi": ["vm.runInContext()", "vm.execute()", "vm.compile()", "vm.sandbox()"],
    "answer_en": "vm.runInContext()",
    "answer_hi": "vm.runInContext()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the purpose of the 'querystring' module in Node.js?",
    "question_hi": "Node.js में 'querystring' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To parse URL query strings", "To handle HTTP queries", "To manage database queries", "To format JSON strings"],
    "options_hi": ["URL क्वेरी स्ट्रिंग्स को पार्स करने के लिए", "HTTP क्वेरीज़ को संभालने के लिए", "डेटाबेस क्वेरीज़ को प्रबंधित करने के लिए", "JSON स्ट्रिंग्स को फ़ॉर्मेट करने के लिए"],
    "answer_en": "To parse URL query strings",
    "answer_hi": "URL क्वेरी स्ट्रिंग्स को पार्स करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to parse a query string in Node.js?",
    "question_hi": "Node.js में क्वेरी स्ट्रिंग को पार्स करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["querystring.parse()", "querystring.decode()", "querystring.read()", "querystring.extract()"],
    "options_hi": ["querystring.parse()", "querystring.decode()", "querystring.read()", "querystring.extract()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the purpose of the 'url' module in Node.js?",
    "question_hi": "Node.js में 'url' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To parse and format URLs", "To handle HTTP URLs", "To manage file URLs", "To validate database URLs"],
    "options_hi": ["URLs को पार्स और फ़ॉर्मेट करने के लिए", "HTTP URLs को संभालने के लिए", "फ़ाइल URLs को प्रबंधित करने के लिए", "डेटाबेस URLs को वैलिडेट करने के लिए"],
    "answer_en": "To parse and format URLs",
    "answer_hi": "URLs को पार्स और फ़ॉर्मेट करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to parse a URL string in Node.js?",
    "question_hi": "Node.js में URL स्ट्रिंग को पार्स करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["url.parse()", "url.decode()", "url.read()", "url.extract()"],
    "options_hi": ["url.parse()", "url.decode()", "url.read()", "url.extract()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the purpose of the 'assert' module in Node.js?",
    "question_hi": "Node.js में 'assert' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To write unit tests", "To handle HTTP assertions", "To validate file operations", "To debug database queries"],
    "options_hi": ["यूनिट टेस्ट लिखने के लिए", "HTTP असेर्शन्स को संभालने के लिए", "फ़ाइल संचालन को वैलिडेट करने के लिए", "डेटाबेस क्वेरीज़ को डीबग करने के लिए"],
    "answer_en": "To write unit tests",
    "answer_hi": "यूनिट टेस्ट लिखने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to test equality in the 'assert' module?",
    "question_hi": "'assert' मॉड्यूल में समानता का परीक्षण करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["assert.equal()", "assert.test()", "assert.check()", "assert.match()"],
    "options_hi": ["assert.equal()", "assert.test()", "assert.check()", "assert.match()"],
    "answer_en": "assert.equal()",
    "answer_hi": "assert.equal()",
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