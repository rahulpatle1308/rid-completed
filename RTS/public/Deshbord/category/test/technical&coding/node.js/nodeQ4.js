const questions =[ 
  {
    "num": 1,
    "question_en": "What is Node.js?",
    "question_hi": "Node.js क्या है?",
    "options_en": ["JavaScript runtime", "Programming language", "Database", "Web server"],
    "options_hi": ["JavaScript रनटाइम", "प्रोग्रामिंग भाषा", "डेटाबेस", "वेब सर्वर"],
    "answer_en": "JavaScript runtime",
    "answer_hi": "JavaScript रनटाइम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which module is used to work with file system in Node.js?",
    "question_hi": "Node.js में फाइल सिस्टम के साथ काम करने के लिए कौन सा मॉड्यूल है?",
    "options_en": ["fs", "http", "net", "path"],
    "options_hi": ["fs", "http", "net", "path"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "How do you create a server in Node.js?",
    "question_hi": "Node.js में सर्वर कैसे बनाते हैं?",
    "options_en": ["http.createServer()", "fs.createServer()", "net.createServer()", "server.create()"],
    "options_hi": ["http.createServer()", "fs.createServer()", "net.createServer()", "server.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 4,
    "question_en": "What is 'npm' in Node.js?",
    "question_hi": "Node.js में 'npm' क्या है?",
    "options_en": ["Node package manager", "Node process manager", "Network protocol", "New programming method"],
    "options_hi": ["Node पैकेज मैनेजर", "Node प्रोसेस मैनेजर", "नेटवर्क प्रोटोकॉल", "नई प्रोग्रामिंग विधि"],
    "answer_en": "Node package manager",
    "answer_hi": "Node पैकेज मैनेजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which command installs packages listed in package.json?",
    "question_hi": "कौन सा कमांड package.json में listed पैकेज इंस्टॉल करता है?",
    "options_en": ["npm install", "npm start", "npm update", "npm init"],
    "options_hi": ["npm install", "npm start", "npm update", "npm init"],
    "answer_en": "npm install",
    "answer_hi": "npm install",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which module handles HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP रिक्वेस्ट किस मॉड्यूल से हैंडल होती है?",
    "options_en": ["http", "fs", "path", "os"],
    "options_hi": ["http", "fs", "path", "os"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "How to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में फ़ाइल को असिंक्रोनसली कैसे पढ़ते हैं?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'require' do in Node.js?",
    "question_hi": "Node.js में 'require' क्या करता है?",
    "options_en": ["Imports modules", "Exports modules", "Starts server", "Creates files"],
    "options_hi": ["मॉड्यूल इम्पोर्ट करता है", "मॉड्यूल एक्सपोर्ट करता है", "सर्वर शुरू करता है", "फ़ाइल बनाता है"],
    "answer_en": "Imports modules",
    "answer_hi": "मॉड्यूल इम्पोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which event indicates a readable stream has no more data?",
    "question_hi": "कौन सा इवेंट बताता है कि रीडेबल स्ट्रीम में और डेटा नहीं है?",
    "options_en": ["'end'", "'close'", "'finish'", "'error'"],
    "options_hi": ["'end'", "'close'", "'finish'", "'error'"],
    "answer_en": "'end'",
    "answer_hi": "'end'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "How do you stop a Node.js server gracefully?",
    "question_hi": "Node.js सर्वर को graceful तरीके से कैसे बंद करते हैं?",
    "options_en": ["server.close()", "process.exit()", "server.stop()", "app.shutdown()"],
    "options_hi": ["server.close()", "process.exit()", "server.stop()", "app.shutdown()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the default port for HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर के लिए डिफॉल्ट पोर्ट क्या है?",
    "options_en": ["80", "3000", "8080", "443"],
    "options_hi": ["80", "3000", "8080", "443"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to parse JSON request bodies in Express?",
    "question_hi": "Express में JSON रिक्वेस्ट बॉडी पार्स करने के लिए कौन सा मेथड है?",
    "options_en": ["express.json()", "express.parse()", "bodyParser.json()", "express.body()"],
    "options_hi": ["express.json()", "express.parse()", "bodyParser.json()", "express.body()"],
    "answer_en": "express.json()",
    "answer_hi": "express.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the 'cors' package do?",
    "question_hi": "'cors' पैकेज क्या करता है?",
    "options_en": ["Enables Cross-Origin Resource Sharing", "Compresses data", "Manages sessions", "Encrypts tokens"],
    "options_hi": ["Cross-Origin Resource Sharing सक्षम करता है", "डेटा कॉम्प्रेस करता है", "सेशंस मैनेज करता है", "टोकन एनक्रिप्ट करता है"],
    "answer_en": "Enables Cross-Origin Resource Sharing",
    "answer_hi": "Cross-Origin Resource Sharing सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "How do you schedule recurring jobs in Node.js?",
    "question_hi": "Node.js में recurring jobs कैसे शेड्यूल करते हैं?",
    "options_en": ["Using node-cron", "setInterval", "setTimeout", "express.scheduler()"],
    "options_hi": ["node-cron का उपयोग करके", "setInterval", "setTimeout", "express.scheduler()"],
    "answer_en": "Using node-cron",
    "answer_hi": "node-cron का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is a callback function?",
    "question_hi": "Callback function क्या है?",
    "options_en": ["Function passed as argument", "Function that returns value", "Function to start server", "Function to log errors"],
    "options_hi": ["आर्गुमेंट के रूप में पास किया गया फंक्शन", "वैल्यू रिटर्न करने वाला फंक्शन", "सर्वर शुरू करने वाला फंक्शन", "एरर लॉग करने वाला फंक्शन"],
    "answer_en": "Function passed as argument",
    "answer_hi": "आर्गुमेंट के रूप में पास किया गया फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does 'npm start' command do?",
    "question_hi": "'npm start' कमांड क्या करता है?",
    "options_en": ["Runs start script from package.json", "Installs packages", "Updates npm", "Runs tests"],
    "options_hi": ["package.json का start स्क्रिप्ट चलाता है", "पैकेज इंस्टॉल करता है", "npm अपडेट करता है", "टेस्ट चलाता है"],
    "answer_en": "Runs start script from package.json",
    "answer_hi": "package.json का start स्क्रिप्ट चलाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How to handle errors in async functions in Express?",
    "question_hi": "Express में async फंक्शन्स में एरर कैसे हैंडल करें?",
    "options_en": ["Wrap in try/catch and call next(err)", "Ignore errors", "Use callback only", "Throw without catch"],
    "options_hi": ["try/catch में लपेटें और next(err) कॉल करें", "एरर्स को इग्नोर करें", "सिर्फ callback उपयोग करें", "बिना catch के throw करें"],
    "answer_en": "Wrap in try/catch and call next(err)",
    "answer_hi": "try/catch में लपेटें और next(err) कॉल करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'dotenv' used for in Node.js?",
    "question_hi": "Node.js में 'dotenv' किस लिए उपयोग होता है?",
    "options_en": ["Manage environment variables", "Log errors", "Encrypt data", "Start server"],
    "options_hi": ["एनवायरनमेंट वेरिएबल्स मैनेज करना", "एरर लॉग करना", "डेटा एनक्रिप्ट करना", "सर्वर शुरू करना"],
    "answer_en": "Manage environment variables",
    "answer_hi": "एनवायरनमेंट वेरिएबल्स मैनेज करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which package helps with password hashing in Node.js?",
    "question_hi": "Node.js में पासवर्ड हैशिंग के लिए कौन सा पैकेज उपयोगी है?",
    "options_en": ["bcrypt", "jsonwebtoken", "cors", "dotenv"],
    "options_hi": ["bcrypt", "jsonwebtoken", "cors", "dotenv"],
    "answer_en": "bcrypt",
    "answer_hi": "bcrypt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'cluster' module?",
    "question_hi": "'cluster' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To create child processes to use multiple CPU cores", "To create network connections", "To manage files", "To encrypt data"],
    "options_hi": ["मल्टीपल CPU कोर उपयोग करने के लिए चाइल्ड प्रोसेसेस बनाना", "नेटवर्क कनेक्शन बनाना", "फाइल मैनेज करना", "डेटा एनक्रिप्ट करना"],
    "answer_en": "To create child processes to use multiple CPU cores",
    "answer_hi": "मल्टीपल CPU कोर उपयोग करने के लिए चाइल्ड प्रोसेसेस बनाना",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 21,
    "question_en": "What is the purpose of the 'crypto' module in Node.js?",
    "question_hi": "Node.js में 'crypto' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Data encryption and decryption", "File system operations", "Network requests", "Database management"],
    "options_hi": ["डेटा एन्क्रिप्शन और डिक्रिप्शन", "फाइल सिस्टम ऑपरेशन्स", "नेटवर्क रिक्वेस्ट", "डेटाबेस प्रबंधन"],
    "answer_en": "Data encryption and decryption",
    "answer_hi": "डेटा एन्क्रिप्शन और डिक्रिप्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the purpose of the 'express.static' middleware?",
    "question_hi": "'express.static' मिडलवेयर का उद्देश्य क्या है?",
    "options_en": ["Serve static files", "Handle HTTP requests", "Manage sessions", "Parse request bodies"],
    "options_hi": ["स्टैटिक फाइलें सर्व करना", "HTTP रिक्वेस्ट हैंडल करना", "सेशन प्रबंधित करना", "रिक्वेस्ट बॉडी पार्स करना"],
    "answer_en": "Serve static files",
    "answer_hi": "स्टैटिक फाइलें सर्व करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "How do you handle errors in asynchronous code in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस कोड में एरर कैसे हैंडल करते हैं?",
    "options_en": ["Using try/catch blocks", "Using callback functions", "Using promises with .catch()", "All of the above"],
    "options_hi": ["try/catch ब्लॉक्स का उपयोग करके", "callback फंक्शन्स का उपयोग करके", "promises के साथ .catch() का उपयोग करके", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'process' object in Node.js?",
    "question_hi": "Node.js में 'process' ऑब्जेक्ट का उद्देश्य क्या है?",
    "options_en": ["Provides information about the current process", "Handles HTTP requests", "Manages file system operations", "Handles events"],
    "options_hi": ["वर्तमान प्रोसेस के बारे में जानकारी प्रदान करता है", "HTTP रिक्वेस्ट हैंडल करता है", "फाइल सिस्टम ऑपरेशन्स प्रबंधित करता है", "इवेंट्स हैंडल करता है"],
    "answer_en": "Provides information about the current process",
    "answer_hi": "वर्तमान प्रोसेस के बारे में जानकारी प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of the 'url' module in Node.js?",
    "question_hi": "Node.js में 'url' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Parse and resolve URL strings", "Handle HTTP requests", "Manage file system operations", "Encrypt data"],
    "options_hi": ["URL स्ट्रिंग्स को पार्स और रेज़ॉल्व करना", "HTTP रिक्वेस्ट हैंडल करना", "फाइल सिस्टम ऑपरेशन्स प्रबंधित करना", "डेटा एन्क्रिप्ट करना"],
    "answer_en": "Parse and resolve URL strings",
    "answer_hi": "URL स्ट्रिंग्स को पार्स और रेज़ॉल्व करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the purpose of the 'querystring' module in Node.js?",
    "question_hi": "Node.js में 'querystring' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Parse and format URL query strings", "Handle HTTP requests", "Manage file system operations", "Encrypt data"],
    "options_hi": ["URL क्वेरी स्ट्रिंग्स को पार्स और फॉर्मेट करना", "HTTP रिक्वेस्ट हैंडल करना", "फाइल सिस्टम ऑपरेशन्स प्रबंधित करना", "डेटा एन्क्रिप्ट करना"],
    "answer_en": "Parse and format URL query strings",
    "answer_hi": "URL क्वेरी स्ट्रिंग्स को पार्स और फॉर्मेट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the purpose of the 'path' module in Node.js?",
    "question_hi": "Node.js में 'path' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Handle and transform file paths", "Handle HTTP requests", "Manage file system operations", "Encrypt data"],
    "options_hi": ["फाइल पाथ्स को हैंडल और ट्रांसफॉर्म करना", "HTTP रिक्वेस्ट हैंडल करना", "फाइल सिस्टम ऑपरेशन्स प्रबंधित करना", "डेटा एन्क्रिप्ट करना"],
    "answer_en": "Handle and transform file paths",
    "answer_hi": "फाइल पाथ्स को हैंडल और ट्रांसफॉर्म करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'os' module in Node.js?",
    "question_hi": "Node.js में 'os' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Provides operating system-related utility methods", "Handle HTTP requests", "Manage file system operations", "Encrypt data"],
    "options_hi": ["ऑपरेटिंग सिस्टम-संबंधित यूटिलिटी मेथड्स प्रदान करता है", "HTTP रिक्वेस्ट हैंडल करना", "फाइल सिस्टम ऑपरेशन्स प्रबंधित करना", "डेटा एन्क्रिप्ट करना"],
    "answer_en": "Provides operating system-related utility methods",
    "answer_hi": "ऑपरेटिंग सिस्टम-संबंधित यूटिलिटी मेथड्स प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 29,
    "question_en": "What is the purpose of the 'events' module in Node.js?",
    "question_hi": "Node.js में 'events' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Provides the EventEmitter class for handling events", "Handle HTTP requests", "Manage file system operations", "Encrypt data"],
    "options_hi": ["इवेंट्स को हैंडल करने के लिए EventEmitter क्लास प्रदान करता है", "HTTP रिक्वेस्ट हैंडल करना", "फाइल सिस्टम ऑपरेशन्स प्रबंधित करना", "डेटा एन्क्रिप्ट करना"],
    "answer_en": "Provides the EventEmitter class for handling events",
    "answer_hi": "इवेंट्स को हैंडल करने के लिए EventEmitter क्लास प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the purpose of the 'fs.promises' API in Node.js?",
    "question_hi": "Node.js में 'fs.promises' API का उद्देश्य क्या है?",
    "options_en": ["Provides promise-based versions of fs methods", "Provides synchronous versions of fs methods", "Provides callback-based versions of fs methods", "Provides event-driven versions of fs methods"],
    "options_hi": ["fs मेथड्स के लिए प्रॉमिस-बेस्ड वर्शन प्रदान करता है", "fs मेथड्स के लिए सिंक्रोनस वर्शन प्रदान करता है", "fs मेथड्स के लिए कॉलबैक-बेस्ड वर्शन प्रदान करता है", "fs मेथड्स के लिए इवेंट-ड्रिवन वर्शन प्रदान करता है"],
    "answer_en": "Provides promise-based versions of fs methods",
    "answer_hi": "fs मेथड्स के लिए प्रॉमिस-बेस्ड वर्शन प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the purpose of the 'util' module in Node.js?",
    "question_hi": "Node.js में 'util' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Provides utility functions for developers", "Provides file system operations", "Provides HTTP request handling", "Provides event handling"],
    "options_hi": ["डेवलपर्स के लिए यूटिलिटी फंक्शन्स प्रदान करता है", "फाइल सिस्टम ऑपरेशन्स प्रदान करता है", "HTTP रिक्वेस्ट हैंडलिंग प्रदान करता है", "इवेंट हैंडलिंग प्रदान करता है"],
    "answer_en": "Provides utility functions for developers",
    "answer_hi": "डेवलपर्स के लिए यूटिलिटी फंक्शन्स प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'assert' module in Node.js?",
    "question_hi": "Node.js में 'assert' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["Provides assertion functions for testing", "Provides file system operations", "Provides HTTP request handling", "Provides event handling"],
    "options_hi": ["टेस्टिंग के लिए assertion फंक्शन्स प्रदान करता है", "फाइल सिस्टम ऑपरेशन्स प्रदान करता है", "HTTP रिक्वेस्ट हैंडलिंग प्रदान करता है", "इवेंट हैंडलिंग प्रदान करता है"],
    "answer_en": "Provides assertion functions for testing",
    "answer_hi": "टेस्टिंग के लिए assertion फंक्शन्स प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to create a new directory in Node.js?",
    "question_hi": "Node.js में नया डायरेक्टरी बनाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.createDirectory()"],
    "options_hi": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.createDirectory()"],
    "answer_en": "fs.mkdir()",
    "answer_hi": "fs.mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to read the contents of a directory in Node.js?",
    "question_hi": "Node.js में डायरेक्टरी की सामग्री पढ़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.readdir()", "fs.readDir()", "fs.listDir()", "fs.getDir()"],
    "options_hi": ["fs.readdir()", "fs.readDir()", "fs.listDir()", "fs.getDir()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to rename a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल का नाम बदलने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.rename()", "fs.changeName()", "fs.renameFile()", "fs.fileName()"],
    "options_hi": ["fs.rename()", "fs.changeName()", "fs.renameFile()", "fs.fileName()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method is used to get file statistics in Node.js?",
    "question_hi": "Node.js में फ़ाइल सांख्यिकी प्राप्त करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.stat()", "fs.fileStats()", "fs.getStats()", "fs.fileInfo()"],
    "options_hi": ["fs.stat()", "fs.fileStats()", "fs.getStats()", "fs.fileInfo()"],
    "answer_en": "fs.stat()",
    "answer_hi": "fs.stat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which module is used to compress files in Node.js?",
    "question_hi": "Node.js में फ़ाइलों को कंप्रेस करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["zlib", "crypto", "fs", "stream"],
    "options_hi": ["zlib", "crypto", "fs", "stream"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to remove a directory in Node.js?",
    "question_hi": "Node.js में डायरेक्टरी हटाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.rmdir()", "fs.removeDir()", "fs.deleteDir()", "fs.removeDirectory()"],
    "options_hi": ["fs.rmdir()", "fs.removeDir()", "fs.deleteDir()", "fs.removeDirectory()"],
    "answer_en": "fs.rmdir()",
    "answer_hi": "fs.rmdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method is used to check if a file exists in Node.js?",
    "question_hi": "Node.js में फ़ाइल के अस्तित्व की जांच करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.existsSync()", "fs.exists()", "fs.checkFile()", "fs.fileExists()"],
    "options_hi": ["fs.existsSync()", "fs.exists()", "fs.checkFile()", "fs.fileExists()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method is used to change the timestamp of a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल के टाइमस्टैम्प को बदलने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.utimes()", "fs.changeTimestamp()", "fs.setTime()", "fs.updateTime()"],
    "options_hi": ["fs.utimes()", "fs.changeTimestamp()", "fs.setTime()", "fs.updateTime()"],
    "answer_en": "fs.utimes()",
    "answer_hi": "fs.utimes()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to watch for changes on a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल में परिवर्तनों के लिए निगरानी रखने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.watch()", "fs.monitor()", "fs.observe()", "fs.watchFile()"],
    "options_hi": ["fs.watch()", "fs.monitor()", "fs.observe()", "fs.watchFile()"],
    "answer_en": "fs.watch()",
    "answer_hi": "fs.watch()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a symbolic link in Node.js?",
    "question_hi": "Node.js में प्रतीकात्मक लिंक बनाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.symlink()", "fs.createLink()", "fs.linkFile()", "fs.createSymlink()"],
    "options_hi": ["fs.symlink()", "fs.createLink()", "fs.linkFile()", "fs.createSymlink()"],
    "answer_en": "fs.symlink()",
    "answer_hi": "fs.symlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method is used to retrieve information about a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल के बारे में जानकारी प्राप्त करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.stat()", "fs.fileInfo()", "fs.getFileStats()", "fs.fileDetails()"],
    "options_hi": ["fs.stat()", "fs.fileInfo()", "fs.getFileStats()", "fs.fileDetails()"],
    "answer_en": "fs.stat()",
    "answer_hi": "fs.stat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method is used to open a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल खोलने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.open()", "fs.createFile()", "fs.openFile()", "fs.fileOpen()"],
    "options_hi": ["fs.open()", "fs.createFile()", "fs.openFile()", "fs.fileOpen()"],
    "answer_en": "fs.open()",
    "answer_hi": "fs.open()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to write data to a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल में डेटा लिखने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.writeFile()", "fs.appendFile()", "fs.createFile()", "fs.writeData()"],
    "options_hi": ["fs.writeFile()", "fs.appendFile()", "fs.createFile()", "fs.writeData()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to append data to a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल में डेटा जोड़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.appendFile()", "fs.writeFile()", "fs.createFile()", "fs.addData()"],
    "options_hi": ["fs.appendFile()", "fs.writeFile()", "fs.createFile()", "fs.addData()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल हटाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.unlink()", "fs.removeFile()", "fs.delete()", "fs.remove()"],
    "options_hi": ["fs.unlink()", "fs.removeFile()", "fs.delete()", "fs.remove()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to read the contents of a directory in Node.js?",
    "question_hi": "Node.js में किसी डायरेक्टरी की सामग्री पढ़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.readdir()", "fs.readFile()", "fs.readDirSync()", "fs.scanDir()"],
    "options_hi": ["fs.readdir()", "fs.readFile()", "fs.readDirSync()", "fs.scanDir()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method is used to truncate a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल को ट्रंकेट (छोटा) करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.truncate()", "fs.cutFile()", "fs.trim()", "fs.shortenFile()"],
    "options_hi": ["fs.truncate()", "fs.cutFile()", "fs.trim()", "fs.shortenFile()"],
    "answer_en": "fs.truncate()",
    "answer_hi": "fs.truncate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method in 'fs' module is used to delete a file?",
    "question_hi": "'fs' मॉड्यूल में फ़ाइल हटाने के लिए कौन सा मेथड है?",
    "options_en": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.erase()"],
    "options_hi": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.erase()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
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