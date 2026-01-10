const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to import modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल आयात करने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["require()", "import()", "include()", "load()"],
    "options_hi": ["require()", "import()", "include()", "load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does 'fs' stand for in Node.js?",
    "question_hi": "Node.js में 'fs' का क्या मतलब है?",
    "options_en": ["File Storage", "File System", "Fetch Service", "Fast Storage"],
    "options_hi": ["File Storage", "File System", "Fetch Service", "Fast Storage"],
    "answer_en": "File System",
    "answer_hi": "File System",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js का कोर मॉड्यूल है?",
    "options_en": ["fs", "express", "mongoose", "webpack"],
    "options_hi": ["fs", "express", "mongoose", "webpack"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which function is used to handle exceptions in Node.js?",
    "question_hi": "Node.js में अपवादों को संभालने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["try-catch", "onError()", "errorHandler()", "catch()"],
    "options_hi": ["try-catch", "onError()", "errorHandler()", "catch()"],
    "answer_en": "try-catch",
    "answer_hi": "try-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
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
    "num": 6,
    "question_en": "What does the 'events' module in Node.js help with?",
    "question_hi": "Node.js में 'events' मॉड्यूल किसमें मदद करता है?",
    "options_en": ["Handling events", "Accessing files", "Sending emails", "Connecting databases"],
    "options_hi": ["Handling events", "Accessing files", "Sending emails", "Connecting databases"],
    "answer_en": "Handling events",
    "answer_hi": "Handling events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which module is used to work with file paths in Node.js?",
    "question_hi": "Node.js में फाइल पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["path", "fs", "http", "url"],
    "options_hi": ["path", "fs", "http", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What command is used to initialize a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट को आरंभ करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm init", "npm install", "node start", "npm create"],
    "options_hi": ["npm init", "npm install", "node start", "npm create"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method creates a server in Node.js?",
    "question_hi": "Node.js में सर्वर बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["http.createServer()", "http.newServer()", "net.create()", "server.create()"],
    "options_hi": ["http.createServer()", "http.newServer()", "net.create()", "server.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is a third-party module?",
    "question_hi": "निम्नलिखित में से कौन सा थर्ड-पार्टी मॉड्यूल है?",
    "options_en": ["express", "http", "fs", "path"],
    "options_hi": ["express", "http", "fs", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 11,
    "question_en": "Which method is used to write data to a file in Node.js?",
    "question_hi": "Node.js में फाइल में डेटा लिखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.writeFile()", "fs.save()", "fs.append()", "fs.write()"],
    "options_hi": ["fs.writeFile()", "fs.save()", "fs.append()", "fs.write()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which global object is used to access the filename of the current module?",
    "question_hi": "वर्तमान मॉड्यूल की फाइल का नाम प्राप्त करने के लिए कौन सा ग्लोबल ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["__filename", "__dirname", "module.filename", "file.name"],
    "options_hi": ["__filename", "__dirname", "module.filename", "file.name"],
    "answer_en": "__filename",
    "answer_hi": "__filename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which core module is used for creating HTTPS servers in Node.js?",
    "question_hi": "Node.js में HTTPS सर्वर बनाने के लिए कौन सा कोर मॉड्यूल उपयोग होता है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the purpose of the 'util' module in Node.js?",
    "question_hi": "Node.js में 'util' मॉड्यूल का क्या उद्देश्य है?",
    "options_en": ["Utility functions", "File system", "URL parsing", "Server creation"],
    "options_hi": ["यूटिलिटी फ़ंक्शन्स", "फाइल सिस्टम", "URL पार्सिंग", "सर्वर बनाना"],
    "answer_en": "Utility functions",
    "answer_hi": "यूटिलिटी फ़ंक्शन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to read a file synchronously in Node.js?",
    "question_hi": "Node.js में किसी फाइल को सिंक्रोनस रूप से पढ़ने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["fs.readFileSync()", "fs.read()", "fs.getSync()", "fs.openFile()"],
    "options_hi": ["fs.readFileSync()", "fs.read()", "fs.getSync()", "fs.openFile()"],
    "answer_en": "fs.readFileSync()",
    "answer_hi": "fs.readFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which environment variable is used to set the environment mode in Node.js?",
    "question_hi": "Node.js में पर्यावरण मोड सेट करने के लिए कौन सा एनवायरनमेंट वेरिएबल उपयोग किया जाता है?",
    "options_en": ["NODE_ENV", "ENV_MODE", "NODE_MODE", "ENVIRONMENT"],
    "options_hi": ["NODE_ENV", "ENV_MODE", "NODE_MODE", "ENVIRONMENT"],
    "answer_en": "NODE_ENV",
    "answer_hi": "NODE_ENV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does the 'cluster' module help you do?",
    "question_hi": "'cluster' मॉड्यूल आपको क्या करने में मदद करता है?",
    "options_en": ["Create child processes", "Encrypt data", "Handle routing", "Connect databases"],
    "options_hi": ["चाइल्ड प्रोसेस बनाना", "डेटा को एन्क्रिप्ट करना", "रूटिंग संभालना", "डेटाबेस कनेक्ट करना"],
    "answer_en": "Create child processes",
    "answer_hi": "चाइल्ड प्रोसेस बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of 'npm install'?",
    "question_hi": "'npm install' का उद्देश्य क्या है?",
    "options_en": ["Install dependencies", "Start server", "Update Node.js", "Run application"],
    "options_hi": ["डिपेंडेंसी इंस्टॉल करना", "सर्वर शुरू करना", "Node.js अपडेट करना", "एप्लिकेशन चलाना"],
    "answer_en": "Install dependencies",
    "answer_hi": "डिपेंडेंसी इंस्टॉल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which file stores the metadata for a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट की मेटाडेटा किस फाइल में होती है?",
    "options_en": ["package.json", "node.json", "npm.json", "app.json"],
    "options_hi": ["package.json", "node.json", "npm.json", "app.json"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which core module is used to create TCP servers?",
    "question_hi": "TCP सर्वर बनाने के लिए कौन सा कोर मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["net", "http", "stream", "tls"],
    "options_hi": ["net", "http", "stream", "tls"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 21,
    "question_en": "Which command is used to run a Node.js file?",
    "question_hi": "Node.js फाइल चलाने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["node filename.js", "npm filename.js", "run filename.js", "start filename.js"],
    "options_hi": ["node filename.js", "npm filename.js", "run filename.js", "start filename.js"],
    "answer_en": "node filename.js",
    "answer_hi": "node filename.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which core module in Node.js handles compression?",
    "question_hi": "Node.js में कौन सा कोर मॉड्यूल कंप्रेशन को संभालता है?",
    "options_en": ["zlib", "buffer", "fs", "net"],
    "options_hi": ["zlib", "buffer", "fs", "net"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
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
    "question_en": "What does 'require' return in Node.js?",
    "question_hi": "Node.js में 'require' क्या लौटाता है?",
    "options_en": ["Exported module object", "File content", "Promise", "Event stream"],
    "options_hi": ["Exported module object", "File content", "Promise", "Event stream"],
    "answer_en": "Exported module object",
    "answer_hi": "Exported module object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which statement is used to export a function in Node.js?",
    "question_hi": "Node.js में किसी फंक्शन को एक्सपोर्ट करने के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["module.exports", "export default", "require()", "return function"],
    "options_hi": ["module.exports", "export default", "require()", "return function"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method in 'fs' module reads a file asynchronously?",
    "question_hi": "'fs' मॉड्यूल में कौन सी विधि फाइल को असिंक्रोनसली पढ़ती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.getFile()", "fs.openFile()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.getFile()", "fs.openFile()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method in Express.js is used to define middleware?",
    "question_hi": "Express.js में मिडलवेयर को परिभाषित करने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["app.use()", "app.set()", "app.route()", "app.middleware()"],
    "options_hi": ["app.use()", "app.set()", "app.route()", "app.middleware()"],
    "answer_en": "app.use()",
    "answer_hi": "app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'next()' used for in Express middleware?",
    "question_hi": "Express मिडलवेयर में 'next()' का क्या उपयोग है?",
    "options_en": ["Pass control to next middleware", "End the request", "Restart server", "Redirect user"],
    "options_hi": ["अगले मिडलवेयर को नियंत्रण देना", "रिक्वेस्ट समाप्त करना", "सर्वर पुनः प्रारंभ करना", "यूज़र को रीडायरेक्ट करना"],
    "answer_en": "Pass control to next middleware",
    "answer_hi": "अगले मिडलवेयर को नियंत्रण देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "How can you make an HTTP request in Node.js?",
    "question_hi": "Node.js में HTTP रिक्वेस्ट कैसे की जाती है?",
    "options_en": ["http.request()", "http.getRequest()", "fetch()", "request()"],
    "options_hi": ["http.request()", "http.getRequest()", "fetch()", "request()"],
    "answer_en": "http.request()",
    "answer_hi": "http.request()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which built-in module can be used to parse URLs in Node.js?",
    "question_hi": "Node.js में URL को पार्स करने के लिए कौन सा बिल्ट-इन मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["url", "http", "path", "querystring"],
    "options_hi": ["url", "http", "path", "querystring"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does 'npm start' typically do?",
    "question_hi": "'npm start' आमतौर पर क्या करता है?",
    "options_en": ["Runs the start script", "Installs packages", "Starts Node REPL", "Initializes project"],
    "options_hi": ["स्टार्ट स्क्रिप्ट चलाता है", "पैकेज इंस्टॉल करता है", "Node REPL शुरू करता है", "प्रोजेक्ट इनिशियलाइज़ करता है"],
    "answer_en": "Runs the start script",
    "answer_hi": "स्टार्ट स्क्रिप्ट चलाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Express method is used to define a GET route?",
    "question_hi": "GET रूट को परिभाषित करने के लिए Express में कौन सी विधि उपयोग होती है?",
    "options_en": ["app.get()", "app.route()", "app.fetch()", "app.listen()"],
    "options_hi": ["app.get()", "app.route()", "app.fetch()", "app.listen()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'req.params' used for in Express?",
    "question_hi": "Express में 'req.params' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Access route parameters", "Read cookies", "Send response", "Redirect request"],
    "options_hi": ["रूट पैरामीटर एक्सेस करने के लिए", "कुकीज़ पढ़ने के लिए", "प्रतिक्रिया भेजने के लिए", "रिक्वेस्ट रीडायरेक्ट करने के लिए"],
    "answer_en": "Access route parameters",
    "answer_hi": "रूट पैरामीटर एक्सेस करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method sends a JSON response in Express?",
    "question_hi": "Express में JSON प्रतिक्रिया भेजने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["res.json()", "res.sendJSON()", "res.stringify()", "res.replyJSON()"],
    "options_hi": ["res.json()", "res.sendJSON()", "res.stringify()", "res.replyJSON()"],
    "answer_en": "res.json()",
    "answer_hi": "res.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which command updates all dependencies in package.json?",
    "question_hi": "package.json की सभी डिपेंडेंसी को अपडेट करने के लिए कौन सा कमांड है?",
    "options_en": ["npm update", "npm upgrade", "npm install -u", "npm refresh"],
    "options_hi": ["npm update", "npm upgrade", "npm install -u", "npm refresh"],
    "answer_en": "npm update",
    "answer_hi": "npm update",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 36,
    "question_en": "Which Node.js module helps with creating readable and writable streams?",
    "question_hi": "Node.js में पढ़ने और लिखने योग्य स्ट्रीम बनाने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["stream", "buffer", "fs", "net"],
    "options_hi": ["stream", "buffer", "fs", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What method is used to listen to a port in Node.js HTTP server?",
    "question_hi": "Node.js HTTP सर्वर में पोर्ट सुनने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["server.listen()", "server.start()", "http.listen()", "app.listen()"],
    "options_hi": ["server.listen()", "server.start()", "http.listen()", "app.listen()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which property holds the headers of an incoming HTTP request in Node.js?",
    "question_hi": "Node.js में आने वाले HTTP रिक्वेस्ट के हेडर किस प्रॉपर्टी में होते हैं?",
    "options_en": ["req.headers", "req.params", "req.body", "req.query"],
    "options_hi": ["req.headers", "req.params", "req.body", "req.query"],
    "answer_en": "req.headers",
    "answer_hi": "req.headers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which package manager is used with Node.js?",
    "question_hi": "Node.js के साथ कौन सा पैकेज मैनेजर उपयोग होता है?",
    "options_en": ["npm", "pip", "gem", "composer"],
    "options_hi": ["npm", "pip", "gem", "composer"],
    "answer_en": "npm",
    "answer_hi": "npm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "How can you handle uncaught exceptions in Node.js?",
    "question_hi": "Node.js में अनकॉट एक्सेप्शन्स को कैसे हैंडल किया जाता है?",
    "options_en": ["process.on('uncaughtException')", "try-catch block", "catch event", "errorHandler()"],
    "options_hi": ["process.on('uncaughtException')", "try-catch block", "catch event", "errorHandler()"],
    "answer_en": "process.on('uncaughtException')",
    "answer_hi": "process.on('uncaughtException')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to parse JSON data in Node.js?",
    "question_hi": "Node.js में JSON डेटा पार्स करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.convert()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.convert()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which event is emitted when a new connection is made to a TCP server?",
    "question_hi": "TCP सर्वर में नया कनेक्शन बनने पर कौन सा इवेंट जारी होता है?",
    "options_en": ["connection", "connect", "data", "open"],
    "options_hi": ["connection", "connect", "data", "open"],
    "answer_en": "connection",
    "answer_hi": "connection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Node.js method can be used to stop a timer created by setTimeout()?",
    "question_hi": "setTimeout() द्वारा बनाए गए टाइमर को रोकने के लिए कौन सा Node.js मेथड उपयोग होता है?",
    "options_en": ["clearTimeout()", "clearInterval()", "stopTimeout()", "cancelTimeout()"],
    "options_hi": ["clearTimeout()", "clearInterval()", "stopTimeout()", "cancelTimeout()"],
    "answer_en": "clearTimeout()",
    "answer_hi": "clearTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the default scope of variables declared without var, let or const in Node.js?",
    "question_hi": "Node.js में var, let या const के बिना घोषित वेरिएबल की डिफ़ॉल्ट स्कोप क्या होती है?",
    "options_en": ["Global", "Local", "Block", "Module"],
    "options_hi": ["Global", "Local", "Block", "Module"],
    "answer_en": "Global",
    "answer_hi": "Global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which core module allows working with cryptography in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफी के लिए कौन सा कोर मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "security", "hash", "tls"],
    "options_hi": ["crypto", "security", "hash", "tls"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method in Node.js buffers data streams?",
    "question_hi": "Node.js में डेटा स्ट्रीम्स को बफर करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["Buffer.alloc()", "Buffer.create()", "Buffer.write()", "Buffer.read()"],
    "options_hi": ["Buffer.alloc()", "Buffer.create()", "Buffer.write()", "Buffer.read()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method stops a running interval timer in Node.js?",
    "question_hi": "Node.js में चल रहे इंटरवल टाइमर को रोकने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["clearInterval()", "clearTimeout()", "stopInterval()", "cancelInterval()"],
    "options_hi": ["clearInterval()", "clearTimeout()", "stopInterval()", "cancelInterval()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method returns the total memory used by Node.js process?",
    "question_hi": "Node.js प्रक्रिया द्वारा उपयोग की गई कुल मेमोरी कौन सी विधि लौटाती है?",
    "options_en": ["process.memoryUsage()", "process.getMemory()", "process.memory()", "process.memoryStats()"],
    "options_hi": ["process.memoryUsage()", "process.getMemory()", "process.memory()", "process.memoryStats()"],
    "answer_en": "process.memoryUsage()",
    "answer_hi": "process.memoryUsage()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is a promise-based HTTP client for Node.js?",
    "question_hi": "इनमें से कौन सा Node.js के लिए प्रॉमिस आधारित HTTP क्लाइंट है?",
    "options_en": ["axios", "request", "http", "fetch"],
    "options_hi": ["axios", "request", "http", "fetch"],
    "answer_en": "axios",
    "answer_hi": "axios",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which command installs a package and saves it as a dependency in package.json?",
    "question_hi": "कौन सा कमांड पैकेज इंस्टॉल करता है और इसे package.json में डिपेंडेंसी के रूप में सेव करता है?",
    "options_en": ["npm install package-name --save", "npm add package-name", "npm get package-name", "npm save package-name"],
    "options_hi": ["npm install package-name --save", "npm add package-name", "npm get package-name", "npm save package-name"],
    "answer_en": "npm install package-name --save",
    "answer_hi": "npm install package-name --save",
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