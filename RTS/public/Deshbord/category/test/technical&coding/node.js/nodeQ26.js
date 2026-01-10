const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js का मुख्य रूप से उपयोग किस लिए किया जाता है?",
    "options_en": ["Server-side programming", "Game design", "Graphic design", "Video editing"],
    "options_hi": ["सर्वर-साइड प्रोग्रामिंग", "गेम डिजाइन", "ग्राफिक डिजाइन", "वीडियो एडिटिंग"],
    "answer_en": "Server-side programming",
    "answer_hi": "सर्वर-साइड प्रोग्रामिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Node.js is based on which programming language?",
    "question_hi": "Node.js किस प्रोग्रामिंग भाषा पर आधारित है?",
    "options_en": ["JavaScript", "Java", "Python", "C++"],
    "options_hi": ["JavaScript", "Java", "Python", "C++"],
    "answer_en": "JavaScript",
    "answer_hi": "JavaScript",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which type of architecture does Node.js follow?",
    "question_hi": "Node.js किस प्रकार की आर्किटेक्चर का पालन करता है?",
    "options_en": ["Event-driven", "Thread-based", "Blocking", "Synchronous"],
    "options_hi": ["इवेंट-ड्रिवन", "थ्रेड-आधारित", "ब्लॉकिंग", "सिंक्रोनस"],
    "answer_en": "Event-driven",
    "answer_hi": "इवेंट-ड्रिवन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Node.js is single-threaded or multi-threaded?",
    "question_hi": "Node.js सिंगल-थ्रेडेड है या मल्टी-थ्रेडेड?",
    "options_en": ["Single-threaded", "Multi-threaded", "Both", "None"],
    "options_hi": ["सिंगल-थ्रेडेड", "मल्टी-थ्रेडेड", "दोनों", "कोई नहीं"],
    "answer_en": "Single-threaded",
    "answer_hi": "सिंगल-थ्रेडेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which loop handles asynchronous operations?",
    "question_hi": "असिंक्रोनस ऑपरेशन्स को कौन सा लूप संभालता है?",
    "options_en": ["Event Loop", "For Loop", "While Loop", "Do-While Loop"],
    "options_hi": ["इवेंट लूप", "फॉर लूप", "व्हाइल लूप", "डू-व्हाइल लूप"],
    "answer_en": "Event Loop",
    "answer_hi": "इवेंट लूप",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to handle errors in Node.js?",
    "question_hi": "Node.js में एरर संभालने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try-catch", "error", "handle", "throwError"],
    "options_hi": ["try-catch", "error", "handle", "throwError"],
    "answer_en": "try-catch",
    "answer_hi": "try-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which object is global in Node.js?",
    "question_hi": "Node.js में कौन सा ऑब्जेक्ट ग्लोबल होता है?",
    "options_en": ["global", "window", "document", "navigator"],
    "options_hi": ["global", "window", "document", "navigator"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method converts object to JSON?",
    "question_hi": "ऑब्जेक्ट को JSON में बदलने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Node.js feature improves performance?",
    "question_hi": "Node.js की कौन सी विशेषता परफॉर्मेंस बढ़ाती है?",
    "options_en": ["Non-blocking I/O", "Blocking I/O", "Heavy threads", "Synchronous code"],
    "options_hi": ["नॉन-ब्लॉकिंग I/O", "ब्लॉकिंग I/O", "हेवी थ्रेड्स", "सिंक्रोनस कोड"],
    "answer_en": "Non-blocking I/O",
    "answer_hi": "नॉन-ब्लॉकिंग I/O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function runs immediately after current operation?",
    "question_hi": "वर्तमान ऑपरेशन के बाद तुरंत कौन सा फ़ंक्शन चलता है?",
    "options_en": ["process.nextTick()", "setTimeout()", "setInterval()", "setImmediate()"],
    "options_hi": ["process.nextTick()", "setTimeout()", "setInterval()", "setImmediate()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Node.js module handles compression?",
    "question_hi": "कंप्रेशन से संबंधित कार्य कौन सा मॉड्यूल करता है?",
    "options_en": ["zlib", "gzip", "compress", "zip"],
    "options_hi": ["zlib", "gzip", "compress", "zip"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which protocol does HTTP module support?",
    "question_hi": "HTTP मॉड्यूल किस प्रोटोकॉल को सपोर्ट करता है?",
    "options_en": ["HTTP", "FTP", "SMTP", "SSH"],
    "options_hi": ["HTTP", "FTP", "SMTP", "SSH"],
    "answer_en": "HTTP",
    "answer_hi": "HTTP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Express method handles GET requests?",
    "question_hi": "GET रिक्वेस्ट को संभालने के लिए Express की कौन सी मेथड उपयोग होती है?",
    "options_en": ["app.get()", "app.post()", "app.put()", "app.delete()"],
    "options_hi": ["app.get()", "app.post()", "app.put()", "app.delete()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Express method handles POST requests?",
    "question_hi": "POST रिक्वेस्ट के लिए Express की कौन सी मेथड होती है?",
    "options_en": ["app.post()", "app.get()", "app.use()", "app.listen()"],
    "options_hi": ["app.post()", "app.get()", "app.use()", "app.listen()"],
    "answer_en": "app.post()",
    "answer_hi": "app.post()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Node.js feature supports scalability?",
    "question_hi": "स्केलेबिलिटी को सपोर्ट करने वाली Node.js की विशेषता कौन सी है?",
    "options_en": ["Asynchronous processing", "Blocking calls", "Heavy memory use", "Synchronous flow"],
    "options_hi": ["असिंक्रोनस प्रोसेसिंग", "ब्लॉकिंग कॉल्स", "अधिक मेमोरी उपयोग", "सिंक्रोनस फ्लो"],
    "answer_en": "Asynchronous processing",
    "answer_hi": "असिंक्रोनस प्रोसेसिंग",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which file is entry point of Node.js app?",
    "question_hi": "Node.js ऐप का एंट्री पॉइंट कौन सी फाइल होती है?",
    "options_en": ["index.js", "start.js", "main.html", "app.json"],
    "options_hi": ["index.js", "start.js", "main.html", "app.json"],
    "answer_en": "index.js",
    "answer_hi": "index.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword exports a single function?",
    "question_hi": "एक ही फ़ंक्शन को एक्सपोर्ट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["module.exports", "export.default", "exports()", "require()"],
    "options_hi": ["module.exports", "export.default", "exports()", "require()"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which module gives system architecture?",
    "question_hi": "सिस्टम आर्किटेक्चर की जानकारी कौन सा मॉड्यूल देता है?",
    "options_en": ["os", "process", "fs", "util"],
    "options_hi": ["os", "process", "fs", "util"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method ends HTTP response?",
    "question_hi": "HTTP रिस्पॉन्स समाप्त करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["res.end()", "res.send()", "res.close()", "res.stop()"],
    "options_hi": ["res.end()", "res.send()", "res.close()", "res.stop()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Node.js module supports promises?",
    "question_hi": "प्रॉमिस सपोर्ट किस Node.js फीचर में होता है?",
    "options_en": ["Promises API", "Callback API", "Sync API", "Thread API"],
    "options_hi": ["Promises API", "Callback API", "Sync API", "Thread API"],
    "answer_en": "Promises API",
    "answer_hi": "Promises API",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which method sets response status code?",
    "question_hi": "रिस्पॉन्स स्टेटस कोड सेट करने के लिए कौन सी मेथड होती है?",
    "options_en": ["res.status()", "res.code()", "res.set()", "res.header()"],
    "options_hi": ["res.status()", "res.code()", "res.set()", "res.header()"],
    "answer_en": "res.status()",
    "answer_hi": "res.status()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Node.js module handles streams of data?",
    "question_hi": "डेटा की स्ट्रीम को संभालने वाला मॉड्यूल कौन सा है?",
    "options_en": ["stream", "buffer", "fs", "net"],
    "options_hi": ["stream", "buffer", "fs", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Express middleware parses JSON?",
    "question_hi": "JSON को पार्स करने वाला Express मिडलवेयर कौन सा है?",
    "options_en": ["express.json()", "bodyParser()", "json.parse()", "req.json()"],
    "options_hi": ["express.json()", "bodyParser()", "json.parse()", "req.json()"],
    "answer_en": "express.json()",
    "answer_hi": "express.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Node.js module handles encryption?",
    "question_hi": "एन्क्रिप्शन से संबंधित कार्य कौन सा मॉड्यूल करता है?",
    "options_en": ["crypto", "secure", "tls", "hash"],
    "options_hi": ["crypto", "secure", "tls", "hash"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method reads environment variables?",
    "question_hi": "एनवायरनमेंट वेरिएबल पढ़ने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    "options_en": ["process.env", "process.var", "process.config", "process.data"],
    "options_hi": ["process.env", "process.var", "process.config", "process.data"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Node.js version manager is popular?",
    "question_hi": "Node.js का लोकप्रिय वर्ज़न मैनेजर कौन सा है?",
    "options_en": ["nvm", "npm", "nodemon", "node-cli"],
    "options_hi": ["nvm", "npm", "nodemon", "node-cli"],
    "answer_en": "nvm",
    "answer_hi": "nvm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which tool restarts server automatically?",
    "question_hi": "कोड बदलने पर सर्वर को अपने आप रीस्टार्ट करने वाला टूल कौन सा है?",
    "options_en": ["nodemon", "npm", "pm2", "node"],
    "options_hi": ["nodemon", "npm", "pm2", "node"],
    "answer_en": "nodemon",
    "answer_hi": "nodemon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method sends file in response?",
    "question_hi": "रिस्पॉन्स में फाइल भेजने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["res.sendFile()", "res.file()", "res.download()", "res.open()"],
    "options_hi": ["res.sendFile()", "res.file()", "res.download()", "res.open()"],
    "answer_en": "res.sendFile()",
    "answer_hi": "res.sendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Node.js module supports URL encoding?",
    "question_hi": "URL एन्कोडिंग के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["querystring", "url", "path", "encode"],
    "options_hi": ["querystring", "url", "path", "encode"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Express method starts the server?",
    "question_hi": "Express सर्वर शुरू करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["app.listen()", "app.start()", "app.run()", "app.open()"],
    "options_hi": ["app.listen()", "app.start()", "app.run()", "app.open()"],
    "answer_en": "app.listen()",
    "answer_hi": "app.listen()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which module provides timers like setTimeout?",
    "question_hi": "setTimeout जैसे टाइमर कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["timers", "time", "clock", "schedule"],
    "options_hi": ["timers", "time", "clock", "schedule"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Node.js module supports DNS lookup?",
    "question_hi": "DNS लुकअप के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["dns", "net", "http", "os"],
    "options_hi": ["dns", "net", "http", "os"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Express object represents response?",
    "question_hi": "Express में रिस्पॉन्स को कौन सा ऑब्जेक्ट दर्शाता है?",
    "options_en": ["res", "req", "app", "next"],
    "options_hi": ["res", "req", "app", "next"],
    "answer_en": "res",
    "answer_hi": "res",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Express object represents request?",
    "question_hi": "Express में रिक्वेस्ट को कौन सा ऑब्जेक्ट दर्शाता है?",
    "options_en": ["req", "res", "app", "router"],
    "options_hi": ["req", "res", "app", "router"],
    "answer_en": "req",
    "answer_hi": "req",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Node.js module supports assertions?",
    "question_hi": "असर्शन सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["assert", "test", "verify", "check"],
    "options_hi": ["assert", "test", "verify", "check"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which method handles all HTTP methods?",
    "question_hi": "सभी HTTP मेथड को संभालने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["app.all()", "app.use()", "app.any()", "app.route()"],
    "options_hi": ["app.all()", "app.use()", "app.any()", "app.route()"],
    "answer_en": "app.all()",
    "answer_hi": "app.all()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which module handles HTTPS encryption?",
    "question_hi": "HTTPS एन्क्रिप्शन को कौन सा मॉड्यूल संभालता है?",
    "options_en": ["tls", "https", "crypto", "secure"],
    "options_hi": ["tls", "https", "crypto", "secure"],
    "answer_en": "tls",
    "answer_hi": "tls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Node.js feature handles concurrency?",
    "question_hi": "कनकरेंसी को संभालने वाली Node.js की विशेषता कौन सी है?",
    "options_en": ["Event Loop", "Threads", "Locks", "Queues"],
    "options_hi": ["इवेंट लूप", "थ्रेड्स", "लॉक्स", "क्यूज़"],
    "answer_en": "Event Loop",
    "answer_hi": "इवेंट लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which module supports file watching?",
    "question_hi": "फाइल में बदलाव देखने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "watcher", "file", "path"],
    "options_hi": ["fs", "watcher", "file", "path"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Express method redirects user?",
    "question_hi": "यूज़र को रीडायरेक्ट करने के लिए कौन सी Express मेथड होती है?",
    "options_en": ["res.redirect()", "res.route()", "res.move()", "res.go()"],
    "options_hi": ["res.redirect()", "res.route()", "res.move()", "res.go()"],
    "answer_en": "res.redirect()",
    "answer_hi": "res.redirect()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Node.js module supports performance timing?",
    "question_hi": "परफॉर्मेंस टाइमिंग सपोर्ट कौन सा मॉड्यूल देता है?",
    "options_en": ["perf_hooks", "performance", "timers", "monitor"],
    "options_hi": ["perf_hooks", "performance", "timers", "monitor"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Express feature handles errors?",
    "question_hi": "एरर हैंडलिंग के लिए Express की कौन सी विशेषता उपयोग होती है?",
    "options_en": ["Error middleware", "Routes", "Controllers", "Services"],
    "options_hi": ["एरर मिडलवेयर", "रूट्स", "कंट्रोलर्स", "सर्विसेज"],
    "answer_en": "Error middleware",
    "answer_hi": "एरर मिडलवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Node.js module supports worker threads?",
    "question_hi": "वर्कर थ्रेड्स को सपोर्ट करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["worker_threads", "cluster", "threads", "process"],
    "options_hi": ["worker_threads", "cluster", "threads", "process"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method sets HTTP headers?",
    "question_hi": "HTTP हेडर सेट करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["res.set()", "res.header()", "res.write()", "res.send()"],
    "options_hi": ["res.set()", "res.header()", "res.write()", "res.send()"],
    "answer_en": "res.set()",
    "answer_hi": "res.set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Node.js module supports REPL?",
    "question_hi": "REPL को सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["repl", "console", "process", "debug"],
    "options_hi": ["repl", "console", "process", "debug"],
    "answer_en": "repl",
    "answer_hi": "repl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Express method sends status only?",
    "question_hi": "केवल स्टेटस भेजने के लिए कौन सी Express मेथड होती है?",
    "options_en": ["res.sendStatus()", "res.status()", "res.code()", "res.end()"],
    "options_hi": ["res.sendStatus()", "res.status()", "res.code()", "res.end()"],
    "answer_en": "res.sendStatus()",
    "answer_hi": "res.sendStatus()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js module supports VM execution?",
    "question_hi": "वर्चुअल मशीन एक्जीक्यूशन के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["vm", "v8", "engine", "runtime"],
    "options_hi": ["vm", "v8", "engine", "runtime"],
    "answer_en": "vm",
    "answer_hi": "vm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Express feature groups routes?",
    "question_hi": "रूट्स को समूह में बाँटने के लिए Express की कौन सी विशेषता है?",
    "options_en": ["Router", "Controller", "Module", "Service"],
    "options_hi": ["Router", "Controller", "Module", "Service"],
    "answer_en": "Router",
    "answer_hi": "Router",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Node.js module supports tracing?",
    "question_hi": "ट्रेसिंग के लिए कौन सा Node.js मॉड्यूल उपयोग होता है?",
    "options_en": ["trace_events", "debug", "monitor", "inspect"],
    "options_hi": ["trace_events", "debug", "monitor", "inspect"],
    "answer_en": "trace_events",
    "answer_hi": "trace_events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js command checks version?",
    "question_hi": "Node.js का वर्ज़न देखने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["node -v", "node --version", "npm -v", "node version"],
    "options_hi": ["node -v", "node --version", "npm -v", "node version"],
    "answer_en": "node -v",
    "answer_hi": "node -v",
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