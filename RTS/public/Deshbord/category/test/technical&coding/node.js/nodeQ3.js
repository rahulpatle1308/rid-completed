const questions = [
  {
    "num": 1,
    "question_en": "What does the 'os' module in Node.js provide?",
    "question_hi": "Node.js में 'os' मॉड्यूल क्या प्रदान करता है?",
    "options_en": ["System-related utility methods", "Network tools", "File permissions", "User authentication"],
    "options_hi": ["सिस्टम से संबंधित उपयोगिताएँ", "नेटवर्क टूल्स", "फ़ाइल अनुमति", "यूजर प्रमाणीकरण"],
    "answer_en": "System-related utility methods",
    "answer_hi": "सिस्टम से संबंधित उपयोगिताएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to write to a file asynchronously?",
    "question_hi": "फ़ाइल को असिंक्रोनसली लिखने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.writeFile", "fs.writeFileSync", "fs.save", "fs.append"],
    "options_hi": ["fs.writeFile", "fs.writeFileSync", "fs.save", "fs.append"],
    "answer_en": "fs.writeFile",
    "answer_hi": "fs.writeFile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which method appends data to a file in Node.js?",
    "question_hi": "Node.js में डेटा को फ़ाइल में जोड़ने के लिए कौन सा मेथड है?",
    "options_en": ["fs.appendFile", "fs.writeFile", "fs.concatFile", "fs.addFile"],
    "options_hi": ["fs.appendFile", "fs.writeFile", "fs.concatFile", "fs.addFile"],
    "answer_en": "fs.appendFile",
    "answer_hi": "fs.appendFile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "How do you listen to an event in Node.js?",
    "question_hi": "Node.js में इवेंट को कैसे सुना जाता है?",
    "options_en": ["emitter.on('event', callback)", "event.listen()", "event.subscribe()", "emitter.add()"],
    "options_hi": ["emitter.on('event', callback)", "event.listen()", "event.subscribe()", "emitter.add()"],
    "answer_en": "emitter.on('event', callback)",
    "answer_hi": "emitter.on('event', callback)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the first argument passed to a Node.js callback?",
    "question_hi": "Node.js कॉलबैक में पहला आर्गुमेंट क्या होता है?",
    "options_en": ["Error", "Result", "Boolean", "Object"],
    "options_hi": ["एरर", "रिजल्ट", "बूलियन", "ऑब्जेक्ट"],
    "answer_en": "Error",
    "answer_hi": "एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does 'child_process' module do?",
    "question_hi": "'child_process' मॉड्यूल क्या करता है?",
    "options_en": ["Spawns subprocesses", "Handles sessions", "Manages memory", "Controls users"],
    "options_hi": ["सबप्रोसेस बनाता है", "सेशन्स हैंडल करता है", "मेमोरी प्रबंधित करता है", "यूजर कंट्रोल करता है"],
    "answer_en": "Spawns subprocesses",
    "answer_hi": "सबप्रोसेस बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is a stream in Node.js?",
    "question_hi": "Node.js में स्ट्रीम क्या है?",
    "options_en": ["Data flow abstraction", "Database query", "Routing method", "Thread manager"],
    "options_hi": ["डेटा फ्लो का सार", "डेटाबेस क्वेरी", "रूटिंग मेथड", "थ्रेड मैनेजर"],
    "answer_en": "Data flow abstraction",
    "answer_hi": "डेटा फ्लो का सार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'fs.existsSync(path)' do?",
    "question_hi": "'fs.existsSync(path)' क्या करता है?",
    "options_en": ["Checks if file exists", "Deletes a file", "Creates a file", "Appends a file"],
    "options_hi": ["जांचता है कि फ़ाइल मौजूद है या नहीं", "फ़ाइल हटाता है", "फ़ाइल बनाता है", "फ़ाइल जोड़ता है"],
    "answer_en": "Checks if file exists",
    "answer_hi": "जांचता है कि फ़ाइल मौजूद है या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the purpose of 'util.promisify()'?",
    "question_hi": "'util.promisify()' का उद्देश्य क्या है?",
    "options_en": ["Converts callback to promise", "Logs output", "Parses JSON", "Stops async functions"],
    "options_hi": ["कॉलबैक को प्रॉमिस में बदलना", "आउटपुट लॉग करना", "JSON पार्स करना", "Async फंक्शन रोकना"],
    "answer_en": "Converts callback to promise",
    "answer_hi": "कॉलबैक को प्रॉमिस में बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function executes shell commands?",
    "question_hi": "कौन सा फंक्शन शेल कमांड्स चलाता है?",
    "options_en": ["exec()", "run()", "launch()", "shell()"],
    "options_hi": ["exec()", "run()", "launch()", "shell()"],
    "answer_en": "exec()",
    "answer_hi": "exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does 'process.cwd()' return?",
    "question_hi": "'process.cwd()' क्या रिटर्न करता है?",
    "options_en": ["Current working directory", "Node version", "Process memory usage", "Current username"],
    "options_hi": ["करंट वर्किंग डायरेक्टरी", "Node संस्करण", "प्रोसेस मेमोरी उपयोग", "करंट यूज़रनेम"],
    "answer_en": "Current working directory",
    "answer_hi": "करंट वर्किंग डायरेक्टरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which stream is used for input in Node.js?",
    "question_hi": "Node.js में इनपुट के लिए कौन सी स्ट्रीम उपयोग होती है?",
    "options_en": ["process.stdin", "fs.read", "input.stream", "event.input"],
    "options_hi": ["process.stdin", "fs.read", "input.stream", "event.input"],
    "answer_en": "process.stdin",
    "answer_hi": "process.stdin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the 'readline' module do?",
    "question_hi": "'readline' मॉड्यूल क्या करता है?",
    "options_en": ["Reads input line-by-line", "Reads JSON", "Writes to file", "Creates databases"],
    "options_hi": ["लाइन-बाय-लाइन इनपुट पढ़ता है", "JSON पढ़ता है", "फ़ाइल में लिखता है", "डेटाबेस बनाता है"],
    "answer_en": "Reads input line-by-line",
    "answer_hi": "लाइन-बाय-लाइन इनपुट पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which flag runs a Node.js file with experimental modules?",
    "question_hi": "कौन सा फ्लैग Node.js फाइल को एक्सपेरिमेंटल मॉड्यूल्स के साथ चलाता है?",
    "options_en": ["--experimental-modules", "--modules", "--esm", "--use-esm"],
    "options_hi": ["--experimental-modules", "--modules", "--esm", "--use-esm"],
    "answer_en": "--experimental-modules",
    "answer_hi": "--experimental-modules",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does the 'zlib' module provide?",
    "question_hi": "'zlib' मॉड्यूल क्या प्रदान करता है?",
    "options_en": ["Compression functionality", "Logging features", "Database support", "Caching support"],
    "options_hi": ["कंप्रेशन फ़ंक्शनलिटी", "लॉगिंग फीचर्स", "डेटाबेस सपोर्ट", "कैशिंग सपोर्ट"],
    "answer_en": "Compression functionality",
    "answer_hi": "कंप्रेशन फ़ंक्शनलिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What kind of architecture does Node.js use?",
    "question_hi": "Node.js किस प्रकार की आर्किटेक्चर का उपयोग करता है?",
    "options_en": ["Event-driven, non-blocking I/O", "Multi-threaded", "Blocking I/O", "Client-side scripting"],
    "options_hi": ["इवेंट-ड्रिवन, नॉन-ब्लॉकिंग I/O", "मल्टी-थ्रेडेड", "ब्लॉकिंग I/O", "क्लाइंट-साइड स्क्रिप्टिंग"],
    "answer_en": "Event-driven, non-blocking I/O",
    "answer_hi": "इवेंट-ड्रिवन, नॉन-ब्लॉकिंग I/O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How do you stop a timer created with setInterval?",
    "question_hi": "setInterval से बनाए गए टाइमर को कैसे रोका जाता है?",
    "options_en": ["clearInterval(timerId)", "stopTimer(timerId)", "cancelInterval(timerId)", "timer.stop()"],
    "options_hi": ["clearInterval(timerId)", "stopTimer(timerId)", "cancelInterval(timerId)", "timer.stop()"],
    "answer_en": "clearInterval(timerId)",
    "answer_hi": "clearInterval(timerId)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does 'process.memoryUsage()' return?",
    "question_hi": "'process.memoryUsage()' क्या रिटर्न करता है?",
    "options_en": ["Memory stats", "CPU usage", "RAM speed", "Thread count"],
    "options_hi": ["मेमोरी स्टैट्स", "CPU उपयोग", "RAM स्पीड", "थ्रेड काउंट"],
    "answer_en": "Memory stats",
    "answer_hi": "मेमोरी स्टैट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'global' in Node.js?",
    "question_hi": "Node.js में 'global' क्या है?",
    "options_en": ["Global namespace object", "A Node.js file", "A reserved keyword", "A database"],
    "options_hi": ["ग्लोबल नेमस्पेस ऑब्जेक्ट", "एक Node.js फ़ाइल", "एक रिज़र्व कीवर्ड", "एक डेटाबेस"],
    "answer_en": "Global namespace object",
    "answer_hi": "ग्लोबल नेमस्पेस ऑब्जेक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'Buffer' in Node.js represent?",
    "question_hi": "Node.js में 'Buffer' क्या दर्शाता है?",
    "options_en": ["Raw binary data", "Memory pointer", "Disk storage", "Image format"],
    "options_hi": ["कच्चा बाइनरी डेटा", "मेमोरी पॉइंटर", "डिस्क स्टोरेज", "इमेज फॉर्मेट"],
    "answer_en": "Raw binary data",
    "answer_hi": "कच्चा बाइनरी डेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is an IIFE in JavaScript (used in Node)?",
    "question_hi": "JavaScript में IIFE क्या है (Node में उपयोग किया जाता है)?",
    "options_en": ["Immediately Invoked Function Expression", "Instance Initial Function Expression", "Internal Import Function Expression", "Injected Inline Function Expression"],
    "options_hi": ["तुरंत कॉल किया गया फंक्शन एक्सप्रेशन", "इंस्टेंस इनिशियल फंक्शन एक्सप्रेशन", "इंटर्नल इम्पोर्ट फंक्शन एक्सप्रेशन", "इंजेक्टेड इनलाइन फंक्शन एक्सप्रेशन"],
    "answer_en": "Immediately Invoked Function Expression",
    "answer_hi": "तुरंत कॉल किया गया फंक्शन एक्सप्रेशन",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 22,
    "question_en": "Which method is used to send response in Node.js HTTP server?",
    "question_hi": "Node.js HTTP सर्वर में response भेजने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["response.end()", "response.send()", "response.write()", "response.close()"],
    "options_hi": ["response.end()", "response.send()", "response.write()", "response.close()"],
    "answer_en": "response.end()",
    "answer_hi": "response.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does 'event loop' do in Node.js?",
    "question_hi": "Node.js में 'event loop' क्या करता है?",
    "options_en": ["Handles asynchronous callbacks", "Manages threads", "Runs database queries", "Schedules tasks synchronously"],
    "options_hi": ["असिंक्रोनस कॉलबैक्स को हैंडल करता है", "थ्रेड्स को मैनेज करता है", "डेटाबेस क्वेरी चलाता है", "सिंक्रोनस टास्क शेड्यूल करता है"],
    "answer_en": "Handles asynchronous callbacks",
    "answer_hi": "असिंक्रोनस कॉलबैक्स को हैंडल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which core module in Node.js helps work with file paths?",
    "question_hi": "Node.js का कौन सा core मॉड्यूल फ़ाइल पाथ्स के साथ काम करने में मदद करता है?",
    "options_en": ["path", "fs", "url", "net"],
    "options_hi": ["path", "fs", "url", "net"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of 'process.argv'?",
    "question_hi": "'process.argv' का उद्देश्य क्या है?",
    "options_en": ["Command line arguments", "Environment variables", "Process id", "Memory usage"],
    "options_hi": ["कमांड लाइन आर्गुमेंट्स", "पर्यावरण वेरिएबल्स", "प्रोसेस आईडी", "मेमोरी उपयोग"],
    "answer_en": "Command line arguments",
    "answer_hi": "कमांड लाइन आर्गुमेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which module provides utilities for working with streams?",
    "question_hi": "स्ट्रीम्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["stream", "fs", "net", "events"],
    "options_hi": ["stream", "fs", "net", "events"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "How do you handle multiple asynchronous operations in Node.js?",
    "question_hi": "Node.js में कई असिंक्रोनस ऑपरेशन को कैसे हैंडल करते हैं?",
    "options_en": ["Using callbacks, promises or async/await", "Using loops", "Using threads", "Using timers only"],
    "options_hi": ["Callbacks, promises या async/await का उपयोग करके", "लूप्स का उपयोग करके", "थ्रेड्स का उपयोग करके", "केवल टाइमर का उपयोग करके"],
    "answer_en": "Using callbacks, promises or async/await",
    "answer_hi": "Callbacks, promises या async/await का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'Express.js'?",
    "question_hi": "Express.js क्या है?",
    "options_en": ["Web application framework", "Database", "Code editor", "Package manager"],
    "options_hi": ["वेब एप्लिकेशन फ्रेमवर्क", "डेटाबेस", "कोड एडिटर", "पैकेज मैनेजर"],
    "answer_en": "Web application framework",
    "answer_hi": "वेब एप्लिकेशन फ्रेमवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to create a new Express application?",
    "question_hi": "नया Express एप्लिकेशन बनाने के लिए कौन सा मेथड इस्तेमाल होता है?",
    "options_en": ["express()", "createExpress()", "new Express()", "app()"],
    "options_hi": ["express()", "createExpress()", "new Express()", "app()"],
    "answer_en": "express()",
    "answer_hi": "express()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "How to define routes in Express.js?",
    "question_hi": "Express.js में routes कैसे परिभाषित करते हैं?",
    "options_en": ["Using app.get(), app.post()", "Using express.route()", "Using http.createServer()", "Using route.define()"],
    "options_hi": ["app.get(), app.post() का उपयोग करके", "express.route() का उपयोग करके", "http.createServer() का उपयोग करके", "route.define() का उपयोग करके"],
    "answer_en": "Using app.get(), app.post()",
    "answer_hi": "app.get(), app.post() का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is middleware in Express.js?",
    "question_hi": "Express.js में middleware क्या होता है?",
    "options_en": ["Functions that process requests before routes", "Database connectors", "Error handlers only", "Static file servers"],
    "options_hi": ["ऐसे फ़ंक्शन जो routes से पहले requests को प्रोसेस करते हैं", "डेटाबेस कनेक्टर्स", "सिर्फ error handlers", "स्टैटिक फ़ाइल सर्वर"],
    "answer_en": "Functions that process requests before routes",
    "answer_hi": "ऐसे फ़ंक्शन जो routes से पहले requests को प्रोसेस करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method sends JSON response in Express?",
    "question_hi": "Express में JSON response भेजने के लिए कौन सा मेथड है?",
    "options_en": ["res.json()", "res.sendJson()", "res.send()", "res.responseJson()"],
    "options_hi": ["res.json()", "res.sendJson()", "res.send()", "res.responseJson()"],
    "answer_en": "res.json()",
    "answer_hi": "res.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of 'next()' in Express middleware?",
    "question_hi": "Express middleware में 'next()' का उद्देश्य क्या है?",
    "options_en": ["To pass control to the next middleware", "To end the request", "To send response", "To log errors"],
    "options_hi": ["अगले middleware को नियंत्रण देने के लिए", "request खत्म करने के लिए", "response भेजने के लिए", "errors लॉग करने के लिए"],
    "answer_en": "To pass control to the next middleware",
    "answer_hi": "अगले middleware को नियंत्रण देने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which package is commonly used for parsing request body in Express?",
    "question_hi": "Express में request body पार्स करने के लिए कौन सा पैकेज आमतौर पर इस्तेमाल होता है?",
    "options_en": ["body-parser", "express-parser", "request-parser", "json-parser"],
    "options_hi": ["body-parser", "express-parser", "request-parser", "json-parser"],
    "answer_en": "body-parser",
    "answer_hi": "body-parser",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the default port for HTTP server in Node.js?",
    "question_hi": "Node.js HTTP सर्वर के लिए डिफ़ॉल्ट पोर्ट कौन सा है?",
    "options_en": ["80", "3000", "8080", "443"],
    "options_hi": ["80", "3000", "8080", "443"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which module is used for network operations in Node.js?",
    "question_hi": "Node.js में नेटवर्क ऑपरेशंस के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "dns", "os"],
    "options_hi": ["net", "http", "dns", "os"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method reads a file synchronously in Node.js?",
    "question_hi": "Node.js में फ़ाइल को सिंक्रोनसली पढ़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.readFileSync", "fs.readFile", "fs.readSync", "fs.openSync"],
    "options_hi": ["fs.readFileSync", "fs.readFile", "fs.readSync", "fs.openSync"],
    "answer_en": "fs.readFileSync",
    "answer_hi": "fs.readFileSync",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "How do you debug a Node.js application?",
    "question_hi": "Node.js एप्लिकेशन को कैसे debug करते हैं?",
    "options_en": ["Using --inspect flag and Chrome DevTools", "Using console.log only", "Using npm start", "Using fs module"],
    "options_hi": ["--inspect फ्लैग और Chrome DevTools का उपयोग करके", "सिर्फ console.log का उपयोग करके", "npm start का उपयोग करके", "fs मॉड्यूल का उपयोग करके"],
    "answer_en": "Using --inspect flag and Chrome DevTools",
    "answer_hi": "--inspect फ्लैग और Chrome DevTools का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the role of 'cluster' module?",
    "question_hi": "'cluster' मॉड्यूल का क्या रोल है?",
    "options_en": ["To create child processes for load balancing", "To handle database", "To manage files", "To create HTTP servers"],
    "options_hi": ["लोड बैलेंसिंग के लिए चाइल्ड प्रोसेसेस बनाने के लिए", "डेटाबेस संभालने के लिए", "फ़ाइलों का प्रबंधन करने के लिए", "HTTP सर्वर बनाने के लिए"],
    "answer_en": "To create child processes for load balancing",
    "answer_hi": "लोड बैलेंसिंग के लिए चाइल्ड प्रोसेसेस बनाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which command initializes a new Node.js project?",
    "question_hi": "नया Node.js प्रोजेक्ट शुरू करने के लिए कौन सा कमांड है?",
    "options_en": ["npm init", "npm start", "node init", "npm install"],
    "options_hi": ["npm init", "npm start", "node init", "npm install"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of the following is NOT a Node.js core module?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js core मॉड्यूल नहीं है?",
    "options_en": ["express", "fs", "path", "http"],
    "options_hi": ["express", "fs", "path", "http"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'callback hell'?",
    "question_hi": "'callback hell' क्या है?",
    "options_en": ["Nested callbacks causing hard-to-maintain code", "No callbacks", "Infinite loops", "Synchronous code"],
    "options_hi": ["नेस्टेड कॉलबैक्स जो कोड को मैनेज करना मुश्किल बनाते हैं", "कोई callback नहीं", "अनंत लूप्स", "सिंक कोड"],
    "answer_en": "Nested callbacks causing hard-to-maintain code",
    "answer_hi": "नेस्टेड कॉलबैक्स जो कोड को मैनेज करना मुश्किल बनाते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "How do promises help in Node.js?",
    "question_hi": "Node.js में promises किस प्रकार मदद करते हैं?",
    "options_en": ["Better handling of asynchronous operations", "Synchronous processing", "Error ignoring", "File management"],
    "options_hi": ["असिंक्रोनस ऑपरेशंस को बेहतर तरीके से हैंडल करना", "सिंक प्रोसेसिंग", "त्रुटि अनदेखी", "फ़ाइल प्रबंधन"],
    "answer_en": "Better handling of asynchronous operations",
    "answer_hi": "असिंक्रोनस ऑपरेशंस को बेहतर तरीके से हैंडल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method adds an event listener in Node.js?",
    "question_hi": "Node.js में इवेंट लिसनर जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["on()", "addListener()", "listen()", "attach()"],
    "options_hi": ["on()", "addListener()", "listen()", "attach()"],
    "answer_en": "on()",
    "answer_hi": "on()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the use of 'cluster.fork()'?",
    "question_hi": "'cluster.fork()' का उपयोग क्या है?",
    "options_en": ["To create new worker process", "To stop process", "To restart server", "To read files"],
    "options_hi": ["नया वर्कर प्रोसेस बनाने के लिए", "प्रोसेस रोकने के लिए", "सर्वर रीस्टार्ट करने के लिए", "फ़ाइल पढ़ने के लिए"],
    "answer_en": "To create new worker process",
    "answer_hi": "नया वर्कर प्रोसेस बनाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "How do you import ES6 modules in Node.js?",
    "question_hi": "Node.js में ES6 मॉड्यूल्स को कैसे इम्पोर्ट करते हैं?",
    "options_en": ["Using import statement", "Using require()", "Using include()", "Using export"],
    "options_hi": ["import स्टेटमेंट का उपयोग करके", "require() का उपयोग करके", "include() का उपयोग करके", "export का उपयोग करके"],
    "answer_en": "Using import statement",
    "answer_hi": "import स्टेटमेंट का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What file contains metadata about a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट के बारे में मेटाडेटा किस फ़ाइल में होता है?",
    "options_en": ["package.json", "index.js", "config.js", "app.js"],
    "options_hi": ["package.json", "index.js", "config.js", "app.js"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to add new elements to an array in JavaScript?",
    "question_hi": "JavaScript में array में नए एलिमेंट्स जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["push()", "pop()", "shift()", "unshift()"],
    "options_hi": ["push()", "pop()", "shift()", "unshift()"],
    "answer_en": "push()",
    "answer_hi": "push()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the use of 'process.env'?",
    "question_hi": "'process.env' का उपयोग क्या है?",
    "options_en": ["Access environment variables", "Manage files", "Handle HTTP requests", "Control server"],
    "options_hi": ["पर्यावरण वेरिएबल्स एक्सेस करने के लिए", "फ़ाइलें प्रबंधित करने के लिए", "HTTP रिक्वेस्ट हैंडल करने के लिए", "सर्वर नियंत्रित करने के लिए"],
    "answer_en": "Access environment variables",
    "answer_hi": "पर्यावरण वेरिएबल्स एक्सेस करने के लिए",
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