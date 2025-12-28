const questions = [
    {
        "num": 1,
        "question_en": "What is Node.js primarily used for?",
        "question_hi": "Node.js मुख्य रूप से किसके लिए उपयोग किया जाता है?",
        "options_en": ["Server-side scripting", "Database management", "UI design", "Operating systems"],
        "options_hi": ["सर्वर-साइड स्क्रिप्टिंग", "डेटाबेस प्रबंधन", "UI डिजाइन", "ऑपरेटिंग सिस्टम"],
        "answer_en": "Server-side scripting",
        "answer_hi": "सर्वर-साइड स्क्रिप्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which module is used to create a server in Node.js?",
        "question_hi": "Node.js में सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
        "options_en": ["http", "url", "fs", "querystring"],
        "options_hi": ["http", "url", "fs", "querystring"],
        "answer_en": "http",
        "answer_hi": "http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does 'require' do in Node.js?",
        "question_hi": "Node.js में 'require' क्या करता है?",
        "options_en": ["Imports modules", "Defines a variable", "Starts the server", "Compiles code"],
        "options_hi": ["मॉड्यूल आयात करता है", "एक वेरिएबल डिफाइन करता है", "सर्वर शुरू करता है", "कोड कंपाइल करता है"],
        "answer_en": "Imports modules",
        "answer_hi": "मॉड्यूल आयात करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the default file extension for Node.js modules?",
        "question_hi": "Node.js मॉड्यूल के लिए डिफॉल्ट फाइल एक्सटेंशन क्या है?",
        "options_en": [".js", ".json", ".node", ".mod"],
        "options_hi": [".js", ".json", ".node", ".mod"],
        "answer_en": ".js",
        "answer_hi": ".js",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which method is used to read a file asynchronously in Node.js?",
        "question_hi": "Node.js में फाइल को एसिंक्रोनस तरीके से पढ़ने के लिए कौन सी मेथड उपयोग की जाती है?",
        "options_en": ["fs.readFile", "fs.readFileSync", "fs.openSync", "fs.writeFile"],
        "options_hi": ["fs.readFile", "fs.readFileSync", "fs.openSync", "fs.writeFile"],
        "answer_en": "fs.readFile",
        "answer_hi": "fs.readFile",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of the 'exports' object in Node.js?",
        "question_hi": "Node.js में 'exports' ऑब्जेक्ट का उद्देश्य क्या है?",
        "options_en": ["To expose functions from a module", "To execute SQL queries", "To manage routes", "To define global variables"],
        "options_hi": ["मॉड्यूल से फंक्शन्स को एक्सपोज़ करना", "SQL क्वेरीज़ एक्सीक्यूट करना", "रूट्स मैनेज करना", "ग्लोबल वेरिएबल्स डिफाइन करना"],
        "answer_en": "To expose functions from a module",
        "answer_hi": "मॉड्यूल से फंक्शन्स को एक्सपोज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which core module is used for working with file paths?",
        "question_hi": "फाइल पाथ के साथ काम करने के लिए कौन सा कोर मॉड्यूल उपयोग किया जाता है?",
        "options_en": ["path", "url", "fs", "os"],
        "options_hi": ["path", "url", "fs", "os"],
        "answer_en": "path",
        "answer_hi": "path",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which object represents the current module in Node.js?",
        "question_hi": "कौन सा ऑब्जेक्ट Node.js में करंट मॉड्यूल को रिप्रेजेंट करता है?",
        "options_en": ["module", "exports", "require", "__filename"],
        "options_hi": ["module", "exports", "require", "__filename"],
        "answer_en": "module",
        "answer_hi": "module",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which method ends the response in an HTTP server?",
        "question_hi": "HTTP सर्वर में रिस्पॉन्स को कौन सी मेथड समाप्त करती है?",
        "options_en": ["res.end()", "res.send()", "res.close()", "res.terminate()"],
        "options_hi": ["res.end()", "res.send()", "res.close()", "res.terminate()"],
        "answer_en": "res.end()",
        "answer_hi": "res.end()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the global object for accessing command-line arguments?",
        "question_hi": "कमांड-लाइन आर्गुमेंट्स एक्सेस करने के लिए ग्लोबल ऑब्जेक्ट क्या है?",
        "options_en": ["process.argv", "console.args", "args.input", "cli.args"],
        "options_hi": ["process.argv", "console.args", "args.input", "cli.args"],
        "answer_en": "process.argv",
        "answer_hi": "process.argv",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you install a package using npm?",
        "question_hi": "npm का उपयोग करके पैकेज कैसे इंस्टॉल करते हैं?",
        "options_en": ["npm install package-name", "node install package-name", "install package-name", "npm get package-name"],
        "options_hi": ["npm install package-name", "node install package-name", "install package-name", "npm get package-name"],
        "answer_en": "npm install package-name",
        "answer_hi": "npm install package-name",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following is true about Node.js?",
        "question_hi": "Node.js के बारे में निम्नलिखित में से कौन सा सही है?",
        "options_en": ["Single-threaded", "Compiled", "Multi-threaded", "Blocking"],
        "options_hi": ["सिंगल-थ्रेडेड", "कंपाइल्ड", "मल्टी-थ्रेडेड", "ब्लॉकिंग"],
        "answer_en": "Single-threaded",
        "answer_hi": "सिंगल-थ्रेडेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does 'process' represent in Node.js?",
        "question_hi": "Node.js में 'process' क्या रिप्रेजेंट करता है?",
        "options_en": ["Current Node.js process", "HTTP response", "A module path", "A file stream"],
        "options_hi": ["करंट Node.js प्रोसेस", "HTTP रिस्पॉन्स", "एक मॉड्यूल पाथ", "एक फाइल स्ट्रीम"],
        "answer_en": "Current Node.js process",
        "answer_hi": "करंट Node.js प्रोसेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which method is used to schedule a function to run after a delay?",
        "question_hi": "डिले के बाद फंक्शन को रन करने के लिए कौन सी मेथड उपयोग की जाती है?",
        "options_en": ["setTimeout", "setInterval", "delay", "schedule"],
        "options_hi": ["setTimeout", "setInterval", "delay", "schedule"],
        "answer_en": "setTimeout",
        "answer_hi": "setTimeout",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'npm init'?",
        "question_hi": "'npm init' का उद्देश्य क्या है?",
        "options_en": ["To create a package.json file", "To start the Node server", "To install a module", "To clean the project"],
        "options_hi": ["package.json फाइल बनाने के लिए", "Node सर्वर स्टार्ट करने के लिए", "मॉड्यूल इंस्टॉल करने के लिए", "प्रोजेक्ट को क्लीन करने के लिए"],
        "answer_en": "To create a package.json file",
        "answer_hi": "package.json फाइल बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which module is used to handle events in Node.js?",
        "question_hi": "Node.js में इवेंट्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
        "options_en": ["events", "stream", "fs", "os"],
        "options_hi": ["events", "stream", "fs", "os"],
        "answer_en": "events",
        "answer_hi": "events",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is a callback function in Node.js?",
        "question_hi": "Node.js में कॉलबैक फंक्शन क्या होता है?",
        "options_en": ["Function executed after another finishes", "A server response", "A type of event", "An error handler"],
        "options_hi": ["एक फंक्शन जो दूसरे के खत्म होने पर एक्सीक्यूट होता है", "एक सर्वर रिस्पॉन्स", "एक प्रकार का इवेंट", "एक एरर हैंडलर"],
        "answer_en": "Function executed after another finishes",
        "answer_hi": "एक फंक्शन जो दूसरे के खत्म होने पर एक्सीक्यूट होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which method reads a stream in chunks?",
        "question_hi": "कौन सी मेथड स्ट्रीम को चंक्स में पढ़ती है?",
        "options_en": ["stream.on('data')", "stream.read()", "stream.pipe()", "stream.write()"],
        "options_hi": ["stream.on('data')", "stream.read()", "stream.pipe()", "stream.write()"],
        "answer_en": "stream.on('data')",
        "answer_hi": "stream.on('data')",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is a middleware in Express.js?",
        "question_hi": "Express.js में मिडलवेयर क्या होता है?",
        "options_en": ["A function that handles requests", "A template engine", "A configuration file", "A static file"],
        "options_hi": ["एक फंक्शन जो रिक्वेस्ट्स को हैंडल करता है", "एक टेम्प्लेट इंजन", "एक कॉन्फिगरेशन फाइल", "एक स्टैटिक फाइल"],
        "answer_en": "A function that handles requests",
        "answer_hi": "एक फंक्शन जो रिक्वेस्ट्स को हैंडल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which database is commonly used with Node.js?",
        "question_hi": "Node.js के साथ आमतौर पर कौन सा डेटाबेस उपयोग किया जाता है?",
        "options_en": ["MongoDB", "Oracle", "MySQL", "Firebase"],
        "options_hi": ["MongoDB", "Oracle", "MySQL", "Firebase"],
        "answer_en": "MongoDB",
        "answer_hi": "MongoDB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you create a server using the http module?",
        "question_hi": "http मॉड्यूल का उपयोग करके सर्वर कैसे बनाते हैं?",
        "options_en": ["http.createServer()", "http.startServer()", "http.makeServer()", "http.buildServer()"],
        "options_hi": ["http.createServer()", "http.startServer()", "http.makeServer()", "http.buildServer()"],
        "answer_en": "http.createServer()",
        "answer_hi": "http.createServer()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the use of __dirname in Node.js?",
        "question_hi": "Node.js में __dirname का उपयोग क्या है?",
        "options_en": ["Gives directory name of current module", "Returns user directory", "Creates new directory", "Returns current URL"],
        "options_hi": ["करंट मॉड्यूल का डायरेक्टरी नेम देता है", "यूजर डायरेक्टरी रिटर्न करता है", "नई डायरेक्टरी बनाता है", "करंट URL रिटर्न करता है"],
        "answer_en": "Gives directory name of current module",
        "answer_hi": "करंट मॉड्यूल का डायरेक्टरी नेम देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which command updates all npm packages?",
        "question_hi": "कौन सा कमांड सभी npm पैकेज्स को अपडेट करता है?",
        "options_en": ["npm update", "npm upgrade", "npm refresh", "npm install --latest"],
        "options_hi": ["npm update", "npm upgrade", "npm refresh", "npm install --latest"],
        "answer_en": "npm update",
        "answer_hi": "npm update",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How is a promise resolved?",
        "question_hi": "प्रॉमिस को कैसे रिजॉल्व किया जाता है?",
        "options_en": ["resolve()", "then()", "await()", "try()"],
        "options_hi": ["resolve()", "then()", "await()", "try()"],
        "answer_en": "resolve()",
        "answer_hi": "resolve()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does the 'fs' module do?",
        "question_hi": "'fs' मॉड्यूल क्या करता है?",
        "options_en": ["Handles file system operations", "Creates servers", "Runs SQL", "Manages routes"],
        "options_hi": ["फाइल सिस्टम ऑपरेशन्स हैंडल करता है", "सर्वर बनाता है", "SQL चलाता है", "रूट्स मैनेज करता है"],
        "answer_en": "Handles file system operations",
        "answer_hi": "फाइल सिस्टम ऑपरेशन्स हैंडल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which command initializes a Node.js project?",
        "question_hi": "कौन सा कमांड Node.js प्रोजेक्ट को इनिशियलाइज़ करता है?",
        "options_en": ["npm init", "node start", "npm begin", "init node"],
        "options_hi": ["npm init", "node start", "npm begin", "init node"],
        "answer_en": "npm init",
        "answer_hi": "npm init",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which keyword is used to handle asynchronous code in Node.js?",
        "question_hi": "Node.js में एसिंक्रोनस कोड को हैंडल करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["async", "wait", "callback", "thread"],
        "options_hi": ["async", "wait", "callback", "thread"],
        "answer_en": "async",
        "answer_hi": "async",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does 'npm' stand for?",
        "question_hi": "'npm' का फुल फॉर्म क्या है?",
        "options_en": ["Node Package Manager", "Node Project Manager", "New Package Maker", "Node Public Module"],
        "options_hi": ["Node Package Manager", "Node Project Manager", "New Package Maker", "Node Public Module"],
        "answer_en": "Node Package Manager",
        "answer_hi": "Node Package Manager",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of package-lock.json?",
        "question_hi": "package-lock.json का उद्देश्य क्या है?",
        "options_en": ["Locks versions of installed packages", "Blocks unwanted packages", "Contains project settings", "Manages user sessions"],
        "options_hi": ["इंस्टॉल्ड पैकेजेस के वर्जन को लॉक करता है", "अनवांटेड पैकेजेस को ब्लॉक करता है", "प्रोजेक्ट सेटिंग्स रखता है", "यूजर सेशन्स मैनेज करता है"],
        "answer_en": "Locks versions of installed packages",
        "answer_hi": "इंस्टॉल्ड पैकेजेस के वर्जन को लॉक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'require.cache' do?",
        "question_hi": "'require.cache' क्या करता है?",
        "options_en": ["Stores loaded modules", "Lists available packages", "Caches HTTP responses", "Clears cookies"],
        "options_hi": ["लोडेड मॉड्यूल्स को स्टोर करता है", "उपलब्ध पैकेजेस को लिस्ट करता है", "HTTP रिस्पॉन्सेस को कैश करता है", "कुकीज़ को क्लियर करता है"],
        "answer_en": "Stores loaded modules",
        "answer_hi": "लोडेड मॉड्यूल्स को स्टोर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is Express.js?",
        "question_hi": "Express.js क्या है?",
        "options_en": ["Web framework for Node.js", "Database library", "Testing library", "CLI tool"],
        "options_hi": ["Node.js के लिए वेब फ्रेमवर्क", "डेटाबेस लाइब्रेरी", "टेस्टिंग लाइब्रेरी", "CLI टूल"],
        "answer_en": "Web framework for Node.js",
        "answer_hi": "Node.js के लिए वेब फ्रेमवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which method parses incoming request bodies in Express?",
        "question_hi": "Express में इनकमिंग रिक्वेस्ट बॉडी को कौन सी मेथड पार्स करती है?",
        "options_en": ["express.json()", "express.parse()", "express.decode()", "express.body()"],
        "options_hi": ["express.json()", "express.parse()", "express.decode()", "express.body()"],
        "answer_en": "express.json()",
        "answer_hi": "express.json()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How to export a function from a module?",
        "question_hi": "मॉड्यूल से फंक्शन को कैसे एक्सपोर्ट करते हैं?",
        "options_en": ["module.exports = myFunction", "export myFunction", "module.myFunction", "require('myFunction')"],
        "options_hi": ["module.exports = myFunction", "export myFunction", "module.myFunction", "require('myFunction')"],
        "answer_en": "module.exports = myFunction",
        "answer_hi": "module.exports = myFunction",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which environment variable sets the environment type?",
        "question_hi": "कौन सा एनवायरनमेंट वेरिएबल एनवायरनमेंट टाइप सेट करता है?",
        "options_en": ["NODE_ENV", "ENV_NODE", "NODE_TYPE", "NODE_MODE"],
        "options_hi": ["NODE_ENV", "ENV_NODE", "NODE_TYPE", "NODE_MODE"],
        "answer_en": "NODE_ENV",
        "answer_hi": "NODE_ENV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does 'next()' do in Express middleware?",
        "question_hi": "Express मिडलवेयर में 'next()' क्या करता है?",
        "options_en": ["Passes control to the next middleware", "Stops server", "Returns a response", "Clears the request"],
        "options_hi": ["अगले मिडलवेयर को कंट्रोल पास करता है", "सर्वर को रोकता है", "रिस्पॉन्स रिटर्न करता है", "रिक्वेस्ट को क्लियर करता है"],
        "answer_en": "Passes control to the next middleware",
        "answer_hi": "अगले मिडलवेयर को कंट्रोल पास करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'res.send()' do in Express?",
        "question_hi": "Express में 'res.send()' क्या करता है?",
        "options_en": ["Sends response to client", "Renders a page", "Stops server", "Logs an error"],
        "options_hi": ["क्लाइंट को रिस्पॉन्स भेजता है", "एक पेज रेंडर करता है", "सर्वर को रोकता है", "एरर लॉग करता है"],
        "answer_en": "Sends response to client",
        "answer_hi": "क्लाइंट को रिस्पॉन्स भेजता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you handle errors in async/await?",
        "question_hi": "async/await में एरर्स को कैसे हैंडल करते हैं?",
        "options_en": ["try...catch", "await.catch", "resolve...reject", "promise.fail"],
        "options_hi": ["try...catch", "await.catch", "resolve...reject", "promise.fail"],
        "answer_en": "try...catch",
        "answer_hi": "try...catch",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of these is a core Node.js module?",
        "question_hi": "इनमें से कौन सा कोर Node.js मॉड्यूल है?",
        "options_en": ["http", "express", "mongoose", "axios"],
        "options_hi": ["http", "express", "mongoose", "axios"],
        "answer_en": "http",
        "answer_hi": "http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How to import ES6 modules in Node.js?",
        "question_hi": "Node.js में ES6 मॉड्यूल कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import x from 'module'", "require('module')", "include module", "load module"],
        "options_hi": ["import x from 'module'", "require('module')", "include module", "load module"],
        "answer_en": "import x from 'module'",
        "answer_hi": "import x from 'module'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is 'cluster' module used for?",
        "question_hi": "'cluster' मॉड्यूल किसके लिए उपयोग किया जाता है?",
        "options_en": ["Creating child processes", "Handling streams", "Managing routes", "Working with events"],
        "options_hi": ["चाइल्ड प्रोसेसेस बनाने के लिए", "स्ट्रीम्स हैंडल करने के लिए", "रूट्स मैनेज करने के लिए", "इवेंट्स के साथ काम करने के लिए"],
        "answer_en": "Creating child processes",
        "answer_hi": "चाइल्ड प्रोसेसेस बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which method pipes readable stream to writable?",
        "question_hi": "कौन सी मेथड रीडेबल स्ट्रीम को राइटेबल में पाइप करती है?",
        "options_en": ["readable.pipe(writable)", "stream.link()", "stream.connect()", "fs.transfer()"],
        "options_hi": ["readable.pipe(writable)", "stream.link()", "stream.connect()", "fs.transfer()"],
        "answer_en": "readable.pipe(writable)",
        "answer_hi": "readable.pipe(writable)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which tool restarts Node.js server on file changes?",
        "question_hi": "कौन सा टूल फाइल चेंजेस पर Node.js सर्वर को रीस्टार्ट करता है?",
        "options_en": ["nodemon", "npm-watch", "forever", "restart-cli"],
        "options_hi": ["nodemon", "npm-watch", "forever", "restart-cli"],
        "answer_en": "nodemon",
        "answer_hi": "nodemon",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of .env file?",
        "question_hi": ".env फाइल का उद्देश्य क्या है?",
        "options_en": ["Store environment variables", "Hold logs", "Keep database files", "Cache data"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स स्टोर करना", "लॉग्स रखना", "डेटाबेस फाइल्स रखना", "डेटा कैश करना"],
        "answer_en": "Store environment variables",
        "answer_hi": "एनवायरनमेंट वेरिएबल्स स्टोर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How to load .env variables?",
        "question_hi": ".env वेरिएबल्स को कैसे लोड करते हैं?",
        "options_en": ["require('dotenv').config()", "load.env()", "init.env()", "config.env()"],
        "options_hi": ["require('dotenv').config()", "load.env()", "init.env()", "config.env()"],
        "answer_en": "require('dotenv').config()",
        "answer_hi": "require('dotenv').config()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which method is used to handle POST data in Express?",
        "question_hi": "Express में POST डेटा को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
        "options_en": ["req.body", "req.data", "req.post", "req.payload"],
        "options_hi": ["req.body", "req.data", "req.post", "req.payload"],
        "answer_en": "req.body",
        "answer_hi": "req.body",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does 'process.exit()' do?",
        "question_hi": "'process.exit()' क्या करता है?",
        "options_en": ["Terminates the Node.js process", "Restarts the server", "Closes all modules", "Clears memory"],
        "options_hi": ["Node.js प्रोसेस को समाप्त करता है", "सर्वर को रीस्टार्ट करता है", "सभी मॉड्यूल्स को बंद करता है", "मेमोरी को क्लियर करता है"],
        "answer_en": "Terminates the Node.js process",
        "answer_hi": "Node.js प्रोसेस को समाप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is 'CORS' used for in Node.js apps?",
        "question_hi": "Node.js ऐप्स में 'CORS' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Handle cross-origin requests", "Encrypt files", "Run cron jobs", "Optimize memory"],
        "options_hi": ["क्रॉस-ओरिजिन रिक्वेस्ट्स को हैंडल करना", "फाइल्स को एन्क्रिप्ट करना", "क्रॉन जॉब्स रन करना", "मेमोरी को ऑप्टिमाइज़ करना"],
        "answer_en": "Handle cross-origin requests",
        "answer_hi": "क्रॉस-ओरिजिन रिक्वेस्ट्स को हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'body-parser' in Express?",
        "question_hi": "Express में 'body-parser' क्या होता है?",
        "options_en": ["Middleware to parse request body", "Router", "Database handler", "Error handler"],
        "options_hi": ["रिक्वेस्ट बॉडी को पार्स करने वाला मिडलवेयर", "राउटर", "डेटाबेस हैंडलर", "एरर हैंडलर"],
        "answer_en": "Middleware to parse request body",
        "answer_hi": "रिक्वेस्ट बॉडी को पार्स करने वाला मिडलवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you create a server using the http module?",
        "question_hi": "http मॉड्यूल का उपयोग करके सर्वर कैसे बनाते हैं?",
        "options_en": ["http.createServer()", "http.startServer()", "http.makeServer()", "http.buildServer()"],
        "options_hi": ["http.createServer()", "http.startServer()", "http.makeServer()", "http.buildServer()"],
        "answer_en": "http.createServer()",
        "answer_hi": "http.createServer()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the use of __dirname in Node.js?",
        "question_hi": "Node.js में __dirname का उपयोग क्या है?",
        "options_en": ["Gives directory name of current module", "Returns user directory", "Creates new directory", "Returns current URL"],
        "options_hi": ["करंट मॉड्यूल का डायरेक्टरी नेम देता है", "यूजर डायरेक्टरी रिटर्न करता है", "नई डायरेक्टरी बनाता है", "करंट URL रिटर्न करता है"],
        "answer_en": "Gives directory name of current module",
        "answer_hi": "करंट मॉड्यूल का डायरेक्टरी नेम देता है",
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