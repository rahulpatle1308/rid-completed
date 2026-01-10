 const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js का मुख्य उपयोग किसके लिए किया जाता है?",
    "options_en": ["Client-side scripting", "Server-side scripting", "Database management", "Game development"],
    "options_hi": ["क्लाइंट-साइड स्क्रिप्टिंग", "सर्वर-साइड स्क्रिप्टिंग", "डेटाबेस प्रबंधन", "गेम विकास"],
    "answer_en": "Server-side scripting",
    "answer_hi": "सर्वर-साइड स्क्रिप्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which engine powers Node.js?",
    "question_hi": "Node.js को कौन सा इंजन संचालित करता है?",
    "options_en": ["V8", "SpiderMonkey", "JavaScriptCore", "Chakra"],
    "options_hi": ["V8", "SpiderMonkey", "JavaScriptCore", "Chakra"],
    "answer_en": "V8",
    "answer_hi": "V8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Node.js is designed to handle which type of operations efficiently?",
    "question_hi": "Node.js को किस प्रकार के संचालन को कुशलतापूर्वक संभालने के लिए डिज़ाइन किया गया है?",
    "options_en": ["Synchronous", "Asynchronous", "Parallel", "Serial"],
    "options_hi": ["सिंक्रोनस", "असिंक्रोनस", "पैरेलल", "सीरियल"],
    "answer_en": "Asynchronous",
    "answer_hi": "असिंक्रोनस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which programming language is Node.js based on?",
    "question_hi": "Node.js किस प्रोग्रामिंग भाषा पर आधारित है?",
    "options_en": ["Python", "Java", "JavaScript", "Ruby"],
    "options_hi": ["पाइथन", "जावा", "जावास्क्रिप्ट", "रूबी"],
    "answer_en": "JavaScript",
    "answer_hi": "जावास्क्रिप्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What type of architecture does Node.js follow?",
    "question_hi": "Node.js किस प्रकार की वास्तुकला का पालन करता है?",
    "options_en": ["Blocking I/O", "Non-blocking I/O", "Procedural", "Functional"],
    "options_hi": ["ब्लॉकिंग I/O", "नॉन-ब्लॉकिंग I/O", "प्रोसीजरल", "फंक्शनल"],
    "answer_en": "Non-blocking I/O",
    "answer_hi": "नॉन-ब्लॉकिंग I/O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is a key feature of Node.js?",
    "question_hi": "Node.js की कौन सी विशेषता प्रमुख है?",
    "options_en": ["Synchronous execution", "Single-threaded", "Multi-threaded", "Distributed"],
    "options_hi": ["सिंक्रोनस निष्पादन", "सिंगल-थ्रेडेड", "मल्टी-थ्रेडेड", "वितरित"],
    "answer_en": "Single-threaded",
    "answer_hi": "सिंगल-थ्रेडेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which protocol is primarily used in Node.js for communication?",
    "question_hi": "संचार के लिए Node.js में मुख्य रूप से कौन सा प्रोटोकॉल उपयोग किया जाता है?",
    "options_en": ["FTP", "HTTP", "SMTP", "SNMP"],
    "options_hi": ["FTP", "HTTP", "SMTP", "SNMP"],
    "answer_en": "HTTP",
    "answer_hi": "HTTP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the main advantage of using Node.js for web applications?",
    "question_hi": "वेब अनुप्रयोगों के लिए Node.js का उपयोग करने का मुख्य लाभ क्या है?",
    "options_en": ["High CPU usage", "Low memory usage", "Non-blocking I/O", "Static typing"],
    "options_hi": ["उच्च CPU उपयोग", "कम मेमोरी उपयोग", "नॉन-ब्लॉकिंग I/O", "स्थैतिक प्रकार"],
    "answer_en": "Non-blocking I/O",
    "answer_hi": "नॉन-ब्लॉकिंग I/O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to import modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल आयात करने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["require()", "import()", "include()", "module()"],
    "options_hi": ["require()", "import()", "include()", "module()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is a core module in Node.js?",
    "question_hi": "Node.js में कोर मॉड्यूल क्या है?",
    "options_en": ["fs", "http", "url", "All of the above"],
    "options_hi": ["fs", "http", "url", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method writes data to a file in Node.js?",
    "question_hi": "Node.js में फ़ाइल में डेटा लिखने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["fs.readFile", "fs.writeFile", "fs.open", "fs.appendFile"],
    "options_hi": ["fs.readFile", "fs.writeFile", "fs.open", "fs.appendFile"],
    "answer_en": "fs.writeFile",
    "answer_hi": "fs.writeFile",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 12,
    "question_en": "Which Node.js module is used to create a server?",
    "question_hi": "Node.js में सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["http", "url", "path", "querystring"],
    "options_hi": ["http", "url", "path", "querystring"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does 'npm' stand for?",
    "question_hi": "'npm' का क्या मतलब है?",
    "options_en": ["Node Programming Manager", "Node Package Manager", "New Package Manager", "Network Protocol Manager"],
    "options_hi": ["Node प्रोग्रामिंग मैनेजर", "Node पैकेज मैनेजर", "नया पैकेज मैनेजर", "नेटवर्क प्रोटोकॉल मैनेजर"],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node पैकेज मैनेजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of these is NOT a core module in Node.js?",
    "question_hi": "इनमें से कौन सा Node.js में कोर मॉड्यूल नहीं है?",
    "options_en": ["fs", "http", "crypto", "express"],
    "options_hi": ["fs", "http", "crypto", "express"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method reads the contents of a directory?",
    "question_hi": "डायरेक्टरी की सामग्री पढ़ने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["fs.readFile()", "fs.readdir()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readdir()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which statement is true about Event Loop in Node.js?",
    "question_hi": "Node.js में इवेंट लूप के बारे में कौन सा कथन सत्य है?",
    "options_en": [
      "Blocks the main thread",
      "Runs on multiple threads",
      "Handles asynchronous callbacks",
      "Used for synchronous execution"
    ],
    "options_hi": [
      "मुख्य थ्रेड को ब्लॉक करता है",
      "मल्टीपल थ्रेड पर चलता है",
      "असिंक्रोनस कॉलबैक को संभालता है",
      "सिंक्रोनस निष्पादन के लिए उपयोग होता है"
    ],
    "answer_en": "Handles asynchronous callbacks",
    "answer_hi": "असिंक्रोनस कॉलबैक को संभालता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which command initializes a new Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट शुरू करने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["node init", "npm start", "npm init", "node start"],
    "options_hi": ["node init", "npm start", "npm init", "node start"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the default file extension for Node.js modules?",
    "question_hi": "Node.js मॉड्यूल के लिए डिफ़ॉल्ट फाइल एक्सटेंशन क्या है?",
    "options_en": [".js", ".json", ".ts", ".node"],
    "options_hi": [".js", ".json", ".ts", ".node"],
    "answer_en": ".js",
    "answer_hi": ".js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is used to handle exceptions in Node.js?",
    "question_hi": "Node.js में अपवादों को संभालने के लिए इनमें से क्या उपयोग किया जाता है?",
    "options_en": ["try-catch", "throw", "process.on('uncaughtException')", "All of the above"],
    "options_hi": ["try-catch", "throw", "process.on('uncaughtException')", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following middleware is commonly used in Express.js?",
    "question_hi": "Express.js में आमतौर पर कौन सा मिडलवेयर उपयोग किया जाता है?",
    "options_en": ["body-parser", "http-parser", "url-loader", "web-middleware"],
    "options_hi": ["body-parser", "http-parser", "url-loader", "web-middleware"],
    "answer_en": "body-parser",
    "answer_hi": "body-parser",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does the 'fs' module stand for in Node.js?",
    "question_hi": "Node.js में 'fs' मॉड्यूल का क्या अर्थ है?",
    "options_en": ["File System", "File Service", "Fetch Stream", "Fast Storage"],
    "options_hi": ["फाइल सिस्टम", "फाइल सेवा", "फेच स्ट्रीम", "फास्ट स्टोरेज"],
    "answer_en": "File System",
    "answer_hi": "फाइल सिस्टम",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 22,
    "question_en": "Which object is used to manage the current Node.js process?",
    "question_hi": "Node.js प्रक्रिया को प्रबंधित करने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["process", "global", "buffer", "console"],
    "options_hi": ["process", "global", "buffer", "console"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "How do you create a basic HTTP server in Node.js?",
    "question_hi": "Node.js में एक बुनियादी HTTP सर्वर कैसे बनाया जाता है?",
    "options_en": ["http.createServer()", "http.makeServer()", "net.createServer()", "server.http()"],
    "options_hi": ["http.createServer()", "http.makeServer()", "net.createServer()", "server.http()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module is used to handle file paths in Node.js?",
    "question_hi": "Node.js में फाइल पाथ को संभालने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["path", "fs", "url", "http"],
    "options_hi": ["path", "fs", "url", "http"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which global object provides information about the directory of the current module?",
    "question_hi": "वर्तमान मॉड्यूल की डायरेक्टरी के बारे में जानकारी देने वाला ग्लोबल ऑब्जेक्ट कौन सा है?",
    "options_en": ["__dirname", "__filename", "global", "module"],
    "options_hi": ["__dirname", "__filename", "global", "module"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the file extension of compiled native Node.js addons?",
    "question_hi": "कम्पाइल किए गए नेटिव Node.js ऐडऑन की फाइल एक्सटेंशन क्या है?",
    "options_en": [".node", ".js", ".cpp", ".addon"],
    "options_hi": [".node", ".js", ".cpp", ".addon"],
    "answer_en": ".node",
    "answer_hi": ".node",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does 'require.resolve()' do?",
    "question_hi": "'require.resolve()' क्या करता है?",
    "options_en": ["Resolves a path to a module", "Installs a module", "Executes a module", "Removes a module"],
    "options_hi": ["मॉड्यूल के पथ को हल करता है", "मॉड्यूल को इंस्टॉल करता है", "मॉड्यूल को निष्पादित करता है", "मॉड्यूल को हटाता है"],
    "answer_en": "Resolves a path to a module",
    "answer_hi": "मॉड्यूल के पथ को हल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of these is true about streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स के बारे में इनमें से क्या सही है?",
    "options_en": ["They are buffers", "They improve performance for large data", "They store entire data", "They are used for static files only"],
    "options_hi": ["वे बफ़र्स होते हैं", "वे बड़े डेटा के लिए प्रदर्शन सुधारते हैं", "वे संपूर्ण डेटा संग्रहीत करते हैं", "वे केवल स्थिर फाइलों के लिए उपयोग किए जाते हैं"],
    "answer_en": "They improve performance for large data",
    "answer_hi": "वे बड़े डेटा के लिए प्रदर्शन सुधारते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which event is fired when a Node.js process exits?",
    "question_hi": "जब Node.js प्रक्रिया समाप्त होती है तो कौन सी इवेंट फायर होती है?",
    "options_en": ["exit", "end", "close", "finish"],
    "options_hi": ["exit", "end", "close", "finish"],
    "answer_en": "exit",
    "answer_hi": "exit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the use of 'util' module in Node.js?",
    "question_hi": "Node.js में 'util' मॉड्यूल का उपयोग क्या है?",
    "options_en": ["Debugging", "Utility functions", "Event handling", "Path resolving"],
    "options_hi": ["डिबगिंग", "यूटिलिटी फ़ंक्शन", "इवेंट हैंडलिंग", "पाथ रेज़ॉल्विंग"],
    "answer_en": "Utility functions",
    "answer_hi": "यूटिलिटी फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which Express method is used to define a GET route?",
    "question_hi": "GET रूट को परिभाषित करने के लिए Express में कौन सी विधि उपयोग होती है?",
    "options_en": ["app.get()", "app.post()", "app.route()", "app.use()"],
    "options_hi": ["app.get()", "app.post()", "app.route()", "app.use()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "How can you export a function from a Node.js module?",
    "question_hi": "Node.js मॉड्यूल से फ़ंक्शन को कैसे एक्सपोर्ट किया जा सकता है?",
    "options_en": ["exports.func = myFunc", "export function myFunc", "module.exports = myFunc", "Both A and C"],
    "options_hi": ["exports.func = myFunc", "export function myFunc", "module.exports = myFunc", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to parse JSON in Node.js?",
    "question_hi": "Node.js में JSON पार्स करने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["JSON.parse()", "json.parse()", "fs.parse()", "util.parseJSON()"],
    "options_hi": ["JSON.parse()", "json.parse()", "fs.parse()", "util.parseJSON()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword is used for asynchronous function in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस फंक्शन के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["async", "await", "then", "callback"],
    "options_hi": ["async", "await", "then", "callback"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "How do you handle promise rejections in Node.js?",
    "question_hi": "Node.js में प्रॉमिस रिजेक्शन को कैसे संभाला जाता है?",
    "options_en": [".then()", ".resolve()", ".catch()", "await"],
    "options_hi": [".then()", ".resolve()", ".catch()", "await"],
    "answer_en": ".catch()",
    "answer_hi": ".catch()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which command uninstalls a package using npm?",
    "question_hi": "npm का उपयोग करके पैकेज को अनइंस्टॉल करने का कमांड क्या है?",
    "options_en": ["npm remove <pkg>", "npm delete <pkg>", "npm uninstall <pkg>", "Both A and C"],
    "options_hi": ["npm remove <pkg>", "npm delete <pkg>", "npm uninstall <pkg>", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 37,
    "question_en": "Which Node.js object is used to handle binary data?",
    "question_hi": "Node.js में बाइनरी डेटा को संभालने के लिए कौन सा ऑब्जेक्ट उपयोग किया जाता है?",
    "options_en": ["Buffer", "Binary", "ArrayBuffer", "Uint8Array"],
    "options_hi": ["Buffer", "Binary", "ArrayBuffer", "Uint8Array"],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "How do you install a Node.js package globally?",
    "question_hi": "Node.js पैकेज को ग्लोबली कैसे इंस्टॉल करते हैं?",
    "options_en": ["npm install -g package_name", "npm install package_name", "npm add package_name", "npm global install package_name"],
    "options_hi": ["npm install -g package_name", "npm install package_name", "npm add package_name", "npm global install package_name"],
    "answer_en": "npm install -g package_name",
    "answer_hi": "npm install -g package_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does the 'events' module provide?",
    "question_hi": "'events' मॉड्यूल क्या प्रदान करता है?",
    "options_en": ["File system access", "Custom event handling", "Network communication", "Database management"],
    "options_hi": ["फाइल सिस्टम एक्सेस", "कस्टम इवेंट हैंडलिंग", "नेटवर्क कम्युनिकेशन", "डेटाबेस प्रबंधन"],
    "answer_en": "Custom event handling",
    "answer_hi": "कस्टम इवेंट हैंडलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'package.json' used for?",
    "question_hi": "'package.json' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Configuration of Node.js server", "Listing project dependencies", "Compiling Node.js code", "Managing ports"],
    "options_hi": ["Node.js सर्वर की कॉन्फ़िगरेशन", "प्रोजेक्ट डिपेंडेंसीज़ की सूची", "Node.js कोड को संकलित करना", "पोर्ट प्रबंधन"],
    "answer_en": "Listing project dependencies",
    "answer_hi": "प्रोजेक्ट डिपेंडेंसीज़ की सूची",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which module is used for encryption in Node.js?",
    "question_hi": "Node.js में एन्क्रिप्शन के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["crypto", "fs", "path", "util"],
    "options_hi": ["crypto", "fs", "path", "util"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does 'res.send()' do in Express.js?",
    "question_hi": "Express.js में 'res.send()' क्या करता है?",
    "options_en": ["Sends a response", "Redirects to another URL", "Sends headers only", "Ends server"],
    "options_hi": ["एक प्रतिक्रिया भेजता है", "दूसरे URL पर रीडायरेक्ट करता है", "केवल हेडर भेजता है", "सर्वर को समाप्त करता है"],
    "answer_en": "Sends a response",
    "answer_hi": "एक प्रतिक्रिया भेजता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of the following methods is used to create a readable stream?",
    "question_hi": "इनमें से कौन सी विधि रीडेबल स्ट्रीम बनाने के लिए उपयोग की जाती है?",
    "options_en": ["fs.createReadStream()", "stream.read()", "fs.readFile()", "stream.create()"],
    "options_hi": ["fs.createReadStream()", "stream.read()", "fs.readFile()", "stream.create()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "How can you serve static files using Express?",
    "question_hi": "Express का उपयोग करके स्थैतिक फाइलें कैसे सर्व की जाती हैं?",
    "options_en": ["express.static()", "app.static()", "serve.static()", "http.static()"],
    "options_hi": ["express.static()", "app.static()", "serve.static()", "http.static()"],
    "answer_en": "express.static()",
    "answer_hi": "express.static()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is middleware in Express.js?",
    "question_hi": "Express.js में मिडलवेयर क्या है?",
    "options_en": ["Function that handles requests", "Routing library", "Database interface", "Template engine"],
    "options_hi": ["रिक्वेस्ट को संभालने वाला फ़ंक्शन", "राउटिंग लाइब्रेरी", "डेटाबेस इंटरफ़ेस", "टेम्पलेट इंजन"],
    "answer_en": "Function that handles requests",
    "answer_hi": "रिक्वेस्ट को संभालने वाला फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of these is not a valid HTTP method in Express?",
    "question_hi": "Express में इनमें से कौन सा वैध HTTP मेथड नहीं है?",
    "options_en": ["get", "post", "send", "put"],
    "options_hi": ["get", "post", "send", "put"],
    "answer_en": "send",
    "answer_hi": "send",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the use of 'next()' function in middleware?",
    "question_hi": "मिडलवेयर में 'next()' फ़ंक्शन का क्या उपयोग है?",
    "options_en": ["Stops request", "Skips to next route", "Passes control to next middleware", "Closes server"],
    "options_hi": ["रिक्वेस्ट को रोकता है", "अगले रूट पर जाता है", "अगले मिडलवेयर को नियंत्रण देता है", "सर्वर को बंद करता है"],
    "answer_en": "Passes control to next middleware",
    "answer_hi": "अगले मिडलवेयर को नियंत्रण देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to end a response in Node.js?",
    "question_hi": "Node.js में प्रतिक्रिया समाप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["res.end()", "res.close()", "res.exit()", "res.complete()"],
    "options_hi": ["res.end()", "res.close()", "res.exit()", "res.complete()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which module helps to compress response data in Express?",
    "question_hi": "Express में प्रतिक्रिया डेटा को संपीड़ित करने के लिए कौन सा मॉड्यूल उपयोगी है?",
    "options_en": ["compression", "zlib", "buffer", "gzip"],
    "options_hi": ["compression", "zlib", "buffer", "gzip"],
    "answer_en": "compression",
    "answer_hi": "compression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to create a connection pool in Mongoose?",
    "question_hi": "Mongoose में कनेक्शन पूल बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["mongoose.createConnection()", "mongoose.connect()", "mongoose.pool()", "mongoose.createPool()"],
    "options_hi": ["mongoose.createConnection()", "mongoose.connect()", "mongoose.pool()", "mongoose.createPool()"],
    "answer_en": "mongoose.createConnection()",
    "answer_hi": "mongoose.createConnection()",
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