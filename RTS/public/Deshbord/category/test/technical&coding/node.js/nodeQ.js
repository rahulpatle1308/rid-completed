const questions = [
    {
        "num": 1,
        "question_en": "What does Node.js primarily allow JavaScript to do?",
        "question_hi": "Node.js मुख्य रूप से JavaScript को क्या करने की अनुमति देता है?",
        "options_en": ["Run on the server", "Run in browser", "Style webpages", "Access SQL"],
        "options_hi": ["सर्वर पर चलाना", "ब्राउज़र में चलाना", "वेबपेज स्टाइल करना", "SQL एक्सेस करना"],
        "answer_en": "Run on the server",
        "answer_hi": "सर्वर पर चलाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which module is used to create a web server in Node.js?",
        "question_hi": "Node.js में वेब सर्वर बनाने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
        "options_en": ["http", "fs", "url", "net"],
        "options_hi": ["http", "fs", "url", "net"],
        "answer_en": "http",
        "answer_hi": "http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does 'npm' stand for?",
        "question_hi": "'npm' का पूर्ण रूप क्या है?",
        "options_en": ["Node Package Manager", "New Package Module", "Node Processing Machine", "Network Package Manager"],
        "options_hi": ["Node Package Manager", "New Package Module", "Node Processing Machine", "Network Package Manager"],
        "answer_en": "Node Package Manager",
        "answer_hi": "Node Package Manager",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which method is used to read a file asynchronously in Node.js?",
        "question_hi": "Node.js में फाइल को एसिंक्रोनस तरीके से पढ़ने के लिए किस विधि का उपयोग किया जाता है?",
        "options_en": ["fs.readFile", "fs.readFileSync", "fs.open", "fs.loadFile"],
        "options_hi": ["fs.readFile", "fs.readFileSync", "fs.open", "fs.loadFile"],
        "answer_en": "fs.readFile",
        "answer_hi": "fs.readFile",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the file extension for a Node.js module?",
        "question_hi": "Node.js मॉड्यूल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".js", ".node", ".mod", ".json"],
        "options_hi": [".js", ".node", ".mod", ".json"],
        "answer_en": ".js",
        "answer_hi": ".js",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which global object is used to get the current directory?",
        "question_hi": "वर्तमान डायरेक्टरी प्राप्त करने के लिए किस ग्लोबल ऑब्जेक्ट का उपयोग किया जाता है?",
        "options_en": ["__dirname", "__filename", "process.cwd()", "dir"],
        "options_hi": ["__dirname", "__filename", "process.cwd()", "dir"],
        "answer_en": "__dirname",
        "answer_hi": "__dirname",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which command initializes a new Node.js project?",
        "question_hi": "कौन सा कमांड एक नया Node.js प्रोजेक्ट इनिशियलाइज़ करता है?",
        "options_en": ["npm init", "node init", "npm start", "node new"],
        "options_hi": ["npm init", "node init", "npm start", "node new"],
        "answer_en": "npm init",
        "answer_hi": "npm init",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does 'require' do in Node.js?",
        "question_hi": "Node.js में 'require' क्या करता है?",
        "options_en": ["Imports a module", "Exports a function", "Installs a package", "Creates a server"],
        "options_hi": ["मॉड्यूल इम्पोर्ट करता है", "फंक्शन एक्सपोर्ट करता है", "पैकेज इंस्टॉल करता है", "सर्वर बनाता है"],
        "answer_en": "Imports a module",
        "answer_hi": "मॉड्यूल इम्पोर्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which method is used to create a server in the 'http' module?",
        "question_hi": "'http' मॉड्यूल में सर्वर बनाने के लिए किस विधि का उपयोग किया जाता है?",
        "options_en": ["createServer", "initServer", "newServer", "startServer"],
        "options_hi": ["createServer", "initServer", "newServer", "startServer"],
        "answer_en": "createServer",
        "answer_hi": "createServer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is 'event-driven' programming in Node.js?",
        "question_hi": "Node.js में 'इवेंट-ड्रिवेन' प्रोग्रामिंग क्या है?",
        "options_en": ["Reacting to events", "Looping continuously", "Waiting for input", "Blocking the process"],
        "options_hi": ["इवेंट्स पर प्रतिक्रिया", "लगातार लूपिंग", "इनपुट की प्रतीक्षा", "प्रोसेस को ब्लॉक करना"],
        "answer_en": "Reacting to events",
        "answer_hi": "इवेंट्स पर प्रतिक्रिया",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 11,
        "question_en": "What is the default scope of variables in Node.js?",
        "question_hi": "Node.js में वेरिएबल्स का डिफ़ॉल्ट स्कोप क्या है?",
        "options_en": ["Module scope", "Global", "Function", "Block"],
        "options_hi": ["मॉड्यूल स्कोप", "ग्लोबल", "फंक्शन", "ब्लॉक"],
        "answer_en": "Module scope",
        "answer_hi": "मॉड्यूल स्कोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which core module handles file paths?",
        "question_hi": "फाइल पाथ को हैंडल करने वाला कोर मॉड्यूल कौन सा है?",
        "options_en": ["path", "fs", "url", "os"],
        "options_hi": ["path", "fs", "url", "os"],
        "answer_en": "path",
        "answer_hi": "path",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does 'exports' do in a module?",
        "question_hi": "मॉड्यूल में 'exports' क्या करता है?",
        "options_en": ["Makes functions available to other files", "Exports files", "Imports packages", "Saves data"],
        "options_hi": ["फंक्शन को अन्य फाइलों में उपलब्ध कराता है", "फाइलों को एक्सपोर्ट करता है", "पैकेज इम्पोर्ट करता है", "डेटा सेव करता है"],
        "answer_en": "Makes functions available to other files",
        "answer_hi": "फंक्शन को अन्य फाइलों में उपलब्ध कराता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is middleware in Express.js?",
        "question_hi": "Express.js में मिडलवेयर क्या है?",
        "options_en": ["Function that handles request/response", "Module loader", "Database connection", "Route path"],
        "options_hi": ["रिक्वेस्ट/रिस्पॉन्स को हैंडल करने वाला फंक्शन", "मॉड्यूल लोडर", "डेटाबेस कनेक्शन", "रूट पाथ"],
        "answer_en": "Function that handles request/response",
        "answer_hi": "रिक्वेस्ट/रिस्पॉन्स को हैंडल करने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which method sends data in an HTTP response in Express?",
        "question_hi": "Express में HTTP रिस्पॉन्स में डेटा भेजने के लिए कौन सी विधि उपयोग की जाती है?",
        "options_en": ["res.send()", "res.write()", "res.emit()", "res.out()"],
        "options_hi": ["res.send()", "res.write()", "res.emit()", "res.out()"],
        "answer_en": "res.send()",
        "answer_hi": "res.send()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'res.json()' do in Express.js?",
        "question_hi": "Express.js में 'res.json()' क्या करता है?",
        "options_en": ["Sends a JSON response", "Parses JSON", "Reads JSON", "Writes JSON to file"],
        "options_hi": ["JSON रिस्पॉन्स भेजता है", "JSON पार्स करता है", "JSON पढ़ता है", "JSON को फाइल में लिखता है"],
        "answer_en": "Sends a JSON response",
        "answer_hi": "JSON रिस्पॉन्स भेजता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the use of 'process.env'?",
        "question_hi": "'process.env' का उपयोग क्या है?",
        "options_en": ["Access environment variables", "Terminate process", "Start server", "Set encoding"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स एक्सेस करना", "प्रोसेस समाप्त करना", "सर्वर शुरू करना", "एन्कोडिंग सेट करना"],
        "answer_en": "Access environment variables",
        "answer_hi": "एनवायरनमेंट वेरिएबल्स एक्सेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you install a package globally using npm?",
        "question_hi": "npm का उपयोग करके ग्लोबली पैकेज कैसे इंस्टॉल करें?",
        "options_en": ["npm install -g package", "npm -g install package", "node install package", "install -g package"],
        "options_hi": ["npm install -g package", "npm -g install package", "node install package", "install -g package"],
        "answer_en": "npm install -g package",
        "answer_hi": "npm install -g package",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'package.json'?",
        "question_hi": "'package.json' का उद्देश्य क्या है?",
        "options_en": ["Project metadata and dependencies", "HTML template", "Styling config", "Runtime settings"],
        "options_hi": ["प्रोजेक्ट मेटाडेटा और डिपेंडेंसी", "HTML टेम्प्लेट", "स्टाइलिंग कॉन्फ़िग", "रनटाइम सेटिंग्स"],
        "answer_en": "Project metadata and dependencies",
        "answer_hi": "प्रोजेक्ट मेटाडेटा और डिपेंडेंसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which module is used to work with the operating system?",
        "question_hi": "ऑपरेटिंग सिस्टम के साथ काम करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
        "options_en": ["os", "sys", "process", "system"],
        "options_hi": ["os", "sys", "process", "system"],
        "answer_en": "os",
        "answer_hi": "os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does the 'cluster' module allow in Node.js?",
        "question_hi": "Node.js में 'क्लस्टर' मॉड्यूल क्या अनुमति देता है?",
        "options_en": ["Multi-core processing", "Database sync", "Network partition", "Memory increase"],
        "options_hi": ["मल्टी-कोर प्रोसेसिंग", "डेटाबेस सिंक", "नेटवर्क पार्टीशन", "मेमोरी इनक्रीस"],
        "answer_en": "Multi-core processing",
        "answer_hi": "मल्टी-कोर प्रोसेसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does 'next()' do in Express middleware?",
        "question_hi": "Express मिडलवेयर में 'next()' क्या करता है?",
        "options_en": ["Calls the next middleware", "Skips to route", "Exits server", "Ends response"],
        "options_hi": ["अगले मिडलवेयर को कॉल करता है", "रूट पर स्किप करता है", "सर्वर से बाहर निकलता है", "रिस्पॉन्स समाप्त करता है"],
        "answer_en": "Calls the next middleware",
        "answer_hi": "अगले मिडलवेयर को कॉल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the use of the 'Buffer' class in Node.js?",
        "question_hi": "Node.js में 'Buffer' क्लास का उपयोग क्या है?",
        "options_en": ["Handle binary data", "Display logs", "Build responses", "Encrypt data"],
        "options_hi": ["बाइनरी डेटा हैंडल करना", "लॉग्स डिस्प्ले करना", "रिस्पॉन्स बनाना", "डेटा एन्क्रिप्ट करना"],
        "answer_en": "Handle binary data",
        "answer_hi": "बाइनरी डेटा हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of 'body-parser'?",
        "question_hi": "'body-parser' का उद्देश्य क्या है?",
        "options_en": ["Parse incoming request bodies", "Render templates", "Style HTML", "Handle sessions"],
        "options_hi": ["आने वाले रिक्वेस्ट बॉडी को पार्स करना", "टेम्प्लेट रेंडर करना", "HTML स्टाइल करना", "सेशन हैंडल करना"],
        "answer_en": "Parse incoming request bodies",
        "answer_hi": "आने वाले रिक्वेस्ट बॉडी को पार्स करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is an event emitter in Node.js?",
        "question_hi": "Node.js में इवेंट एमिटर क्या है?",
        "options_en": ["Object that emits events", "Async function", "HTTP listener", "Route handler"],
        "options_hi": ["ऑब्जेक्ट जो इवेंट्स एमिट करता है", "एसिंक फंक्शन", "HTTP लिसनर", "रूट हैंडलर"],
        "answer_en": "Object that emits events",
        "answer_hi": "ऑब्जेक्ट जो इवेंट्स एमिट करता है",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 26,
        "question_en": "What is the command to install Express.js?",
        "question_hi": "Express.js इंस्टॉल करने का कमांड क्या है?",
        "options_en": ["npm install express", "node install express", "npm express", "express install"],
        "options_hi": ["npm install express", "node install express", "npm express", "express install"],
        "answer_en": "npm install express",
        "answer_hi": "npm install express",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What port does a Node.js server typically run on?",
        "question_hi": "Node.js सर्वर आमतौर पर किस पोर्ट पर चलता है?",
        "options_en": ["3000", "80", "443", "22"],
        "options_hi": ["3000", "80", "443", "22"],
        "answer_en": "3000",
        "answer_hi": "3000",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which object handles incoming requests in Express?",
        "question_hi": "Express में आने वाले रिक्वेस्ट को कौन सा ऑब्जेक्ट हैंडल करता है?",
        "options_en": ["req", "res", "http", "request"],
        "options_hi": ["req", "res", "http", "request"],
        "answer_en": "req",
        "answer_hi": "req",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you export a function in Node.js?",
        "question_hi": "Node.js में फंक्शन को कैसे एक्सपोर्ट करें?",
        "options_en": ["module.exports = func", "export = func", "return func", "send func"],
        "options_hi": ["module.exports = func", "export = func", "return func", "send func"],
        "answer_en": "module.exports = func",
        "answer_hi": "module.exports = func",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of 'require.cache'?",
        "question_hi": "'require.cache' का उद्देश्य क्या है?",
        "options_en": ["Store loaded modules", "Store environment", "Manage logs", "Secure routes"],
        "options_hi": ["लोड किए गए मॉड्यूल स्टोर करना", "एनवायरनमेंट स्टोर करना", "लॉग मैनेज करना", "रूट्स सुरक्षित करना"],
        "answer_en": "Store loaded modules",
        "answer_hi": "लोड किए गए मॉड्यूल स्टोर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is a route in Express.js?",
        "question_hi": "Express.js में रूट क्या है?",
        "options_en": ["Defines request paths", "Starts server", "Renders HTML", "Parses data"],
        "options_hi": ["रिक्वेस्ट पाथ डिफाइन करता है", "सर्वर शुरू करता है", "HTML रेंडर करता है", "डेटा पार्स करता है"],
        "answer_en": "Defines request paths",
        "answer_hi": "रिक्वेस्ट पाथ डिफाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which object handles HTTP response in Express?",
        "question_hi": "Express में HTTP रिस्पॉन्स को कौन सा ऑब्जेक्ट हैंडल करता है?",
        "options_en": ["res", "req", "http", "response"],
        "options_hi": ["res", "req", "http", "response"],
        "answer_en": "res",
        "answer_hi": "res",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What happens if you don't call 'res.end()'?",
        "question_hi": "अगर आप 'res.end()' को कॉल नहीं करते तो क्या होता है?",
        "options_en": ["Request hangs", "App crashes", "Server restarts", "Response is sent"],
        "options_hi": ["रिक्वेस्ट हैंग हो जाती है", "ऐप क्रैश होता है", "सर्वर रीस्टार्ट होता है", "रिस्पॉन्स भेज दिया जाता है"],
        "answer_en": "Request hangs",
        "answer_hi": "रिक्वेस्ट हैंग हो जाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which module helps work with query strings?",
        "question_hi": "क्वेरी स्ट्रिंग के साथ काम करने में कौन सा मॉड्यूल मदद करता है?",
        "options_en": ["querystring", "url", "string", "qs"],
        "options_hi": ["querystring", "url", "string", "qs"],
        "answer_en": "querystring",
        "answer_hi": "querystring",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the correct way to handle errors in async/await?",
        "question_hi": "async/await में एरर्स को हैंडल करने का सही तरीका क्या है?",
        "options_en": ["try/catch", "then/catch", "on/error", "res.error"],
        "options_hi": ["try/catch", "then/catch", "on/error", "res.error"],
        "answer_en": "try/catch",
        "answer_hi": "try/catch",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which function listens on a specified port in Express?",
        "question_hi": "Express में निर्दिष्ट पोर्ट पर कौन सा फंक्शन लिसन करता है?",
        "options_en": ["app.listen", "http.listen", "server.listen", "express.listen"],
        "options_hi": ["app.listen", "http.listen", "server.listen", "express.listen"],
        "answer_en": "app.listen",
        "answer_hi": "app.listen",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is a callback in Node.js?",
        "question_hi": "Node.js में कॉलबैक क्या है?",
        "options_en": ["Function called after completion", "Main loop", "Variable name", "File loader"],
        "options_hi": ["पूरा होने के बाद कॉल किया जाने वाला फंक्शन", "मेन लूप", "वेरिएबल नाम", "फाइल लोडर"],
        "answer_en": "Function called after completion",
        "answer_hi": "पूरा होने के बाद कॉल किया जाने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the use of 'setTimeout' in Node.js?",
        "question_hi": "Node.js में 'setTimeout' का उपयोग क्या है?",
        "options_en": ["Delay execution", "Start server", "Create threads", "Open sockets"],
        "options_hi": ["एग्जीक्यूशन डिले करना", "सर्वर शुरू करना", "थ्रेड्स बनाना", "सॉकेट्स खोलना"],
        "answer_en": "Delay execution",
        "answer_hi": "एग्जीक्यूशन डिले करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What does 'res.status(404).send()' do?",
        "question_hi": "'res.status(404).send()' क्या करता है?",
        "options_en": ["Send 404 error", "Redirect", "Close server", "Log request"],
        "options_hi": ["404 एरर भेजता है", "रिडायरेक्ट करता है", "सर्वर बंद करता है", "रिक्वेस्ट लॉग करता है"],
        "answer_en": "Send 404 error",
        "answer_hi": "404 एरर भेजता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is a common use of 'crypto' module?",
        "question_hi": "'crypto' मॉड्यूल का सामान्य उपयोग क्या है?",
        "options_en": ["Hashing and encryption", "Database queries", "File transfers", "Routing"],
        "options_hi": ["हैशिंग और एन्क्रिप्शन", "डेटाबेस क्वेरी", "फाइल ट्रांसफर", "रूटिंग"],
        "answer_en": "Hashing and encryption",
        "answer_hi": "हैशिंग और एन्क्रिप्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you create a readable stream in Node.js?",
        "question_hi": "Node.js में रीडेबल स्ट्रीम कैसे बनाएं?",
        "options_en": ["fs.createReadStream()", "fs.readFile()", "stream.read()", "read.open()"],
        "options_hi": ["fs.createReadStream()", "fs.readFile()", "stream.read()", "read.open()"],
        "answer_en": "fs.createReadStream()",
        "answer_hi": "fs.createReadStream()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is used to compress HTTP responses?",
        "question_hi": "HTTP रिस्पॉन्स को कंप्रेस करने के लिए क्या उपयोग किया जाता है?",
        "options_en": ["compression", "zlib", "gzip", "minify"],
        "options_hi": ["compression", "zlib", "gzip", "minify"],
        "answer_en": "compression",
        "answer_hi": "compression",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which method registers middleware in Express?",
        "question_hi": "Express में मिडलवेयर रजिस्टर करने के लिए कौन सी विधि उपयोग की जाती है?",
        "options_en": ["app.use()", "app.route()", "app.add()", "app.listen()"],
        "options_hi": ["app.use()", "app.route()", "app.add()", "app.listen()"],
        "answer_en": "app.use()",
        "answer_hi": "app.use()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the main benefit of using Express?",
        "question_hi": "Express का उपयोग करने का मुख्य लाभ क्या है?",
        "options_en": ["Simplifies server creation", "Adds UI", "Increases CPU", "Creates SQL queries"],
        "options_hi": ["सर्वर निर्माण को सरल बनाता है", "UI जोड़ता है", "CPU बढ़ाता है", "SQL क्वेरी बनाता है"],
        "answer_en": "Simplifies server creation",
        "answer_hi": "सर्वर निर्माण को सरल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you parse URL parameters in Express?",
        "question_hi": "Express में URL पैरामीटर्स को कैसे पार्स करें?",
        "options_en": ["req.params", "req.body", "req.url", "req.query"],
        "options_hi": ["req.params", "req.body", "req.url", "req.query"],
        "answer_en": "req.params",
        "answer_hi": "req.params",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which method is used to write data to a stream?",
        "question_hi": "स्ट्रीम में डेटा लिखने के लिए कौन सी विधि उपयोग की जाती है?",
        "options_en": ["stream.write()", "stream.data()", "stream.input()", "stream.send()"],
        "options_hi": ["stream.write()", "stream.data()", "stream.input()", "stream.send()"],
        "answer_en": "stream.write()",
        "answer_hi": "stream.write()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What does 'res.redirect()' do?",
        "question_hi": "'res.redirect()' क्या करता है?",
        "options_en": ["Redirects client to a URL", "Ends request", "Forwards error", "Reloads server"],
        "options_hi": ["क्लाइंट को URL पर रिडायरेक्ट करता है", "रिक्वेस्ट समाप्त करता है", "एरर फॉरवर्ड करता है", "सर्वर रीलोड करता है"],
        "answer_en": "Redirects client to a URL",
        "answer_hi": "क्लाइंट को URL पर रिडायरेक्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the use of 'dotenv' in Node.js?",
        "question_hi": "Node.js में 'dotenv' का उपयोग क्या है?",
        "options_en": ["Load environment variables", "Install dependencies", "Create routing", "Parse JSON"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स लोड करना", "डिपेंडेंसी इंस्टॉल करना", "रूटिंग बनाना", "JSON पार्स करना"],
        "answer_en": "Load environment variables",
        "answer_hi": "एनवायरनमेंट वेरिएबल्स लोड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which database is commonly used with Node.js?",
        "question_hi": "Node.js के साथ आमतौर पर किस डेटाबेस का उपयोग किया जाता है?",
        "options_en": ["MongoDB", "PostgreSQL", "Oracle", "Firebase"],
        "options_hi": ["MongoDB", "PostgreSQL", "Oracle", "Firebase"],
        "answer_en": "MongoDB",
        "answer_hi": "MongoDB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the main purpose of Node.js?",
        "question_hi": "Node.js का मुख्य उद्देश्य क्या है?",
        "options_en": ["Run JavaScript on server", "Design UI", "Manage styles", "Compile Java"],
        "options_hi": ["सर्वर पर JavaScript चलाना", "UI डिजाइन करना", "स्टाइल मैनेज करना", "Java कंपाइल करना"],
        "answer_en": "Run JavaScript on server",
        "answer_hi": "सर्वर पर JavaScript चलाना",
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