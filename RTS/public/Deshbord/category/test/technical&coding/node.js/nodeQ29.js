const questions=[
  {
    "num": 1,
    "question_en": "Which Node.js module is used for UDP communication?",
    "question_hi": "UDP संचार के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["dgram", "net", "http", "udp"],
    "options_hi": ["dgram", "net", "http", "udp"],
    "answer_en": "dgram",
    "answer_hi": "dgram",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Node.js module provides terminal related functions?",
    "question_hi": "टर्मिनल से संबंधित फ़ंक्शन प्रदान करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["tty", "repl", "console", "process"],
    "options_hi": ["tty", "repl", "console", "process"],
    "answer_en": "tty",
    "answer_hi": "tty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Node.js module helps in reading user input from CLI?",
    "question_hi": "CLI से यूज़र इनपुट पढ़ने में मदद करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["readline", "input", "repl", "tty"],
    "options_hi": ["readline", "input", "repl", "tty"],
    "answer_en": "readline",
    "answer_hi": "readline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Node.js module is used for HTTP/2 support?",
    "question_hi": "HTTP/2 सपोर्ट के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http2", "https", "net", "spdy"],
    "options_hi": ["http2", "https", "net", "spdy"],
    "answer_en": "http2",
    "answer_hi": "http2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Node.js module provides WebAssembly System Interface?",
    "question_hi": "WebAssembly System Interface प्रदान करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["wasi", "wasm", "vm", "v8"],
    "options_hi": ["wasi", "wasm", "vm", "v8"],
    "answer_en": "wasi",
    "answer_hi": "wasi",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which Node.js module is used for debugging and inspection?",
    "question_hi": "डिबगिंग और इंस्पेक्शन के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["inspector", "debug", "console", "util"],
    "options_hi": ["inspector", "debug", "console", "util"],
    "answer_en": "inspector",
    "answer_hi": "inspector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Node.js module tracks async operations lifecycle?",
    "question_hi": "असिंक्रोनस ऑपरेशन्स के लाइफसाइकिल को ट्रैक करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["async_hooks", "events", "hooks", "perf_hooks"],
    "options_hi": ["async_hooks", "events", "hooks", "perf_hooks"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Node.js module provides diagnostic reports?",
    "question_hi": "डायग्नोस्टिक रिपोर्ट प्रदान करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["diagnostics_channel", "report", "inspector", "debug"],
    "options_hi": ["diagnostics_channel", "report", "inspector", "debug"],
    "answer_en": "diagnostics_channel",
    "answer_hi": "diagnostics_channel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Node.js API generates a diagnostic report?",
    "question_hi": "डायग्नोस्टिक रिपोर्ट बनाने के लिए Node.js की कौन सी API उपयोग होती है?",
    "options_en": ["process.report", "process.debug", "process.inspect", "process.log"],
    "options_hi": ["process.report", "process.debug", "process.inspect", "process.log"],
    "answer_en": "process.report",
    "answer_hi": "process.report",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Node.js module provides internationalization support?",
    "question_hi": "अंतरराष्ट्रीयकरण (i18n) सपोर्ट देने वाला Node.js फीचर कौन सा है?",
    "options_en": ["Intl", "i18n", "locale", "lang"],
    "options_hi": ["Intl", "i18n", "locale", "lang"],
    "answer_en": "Intl",
    "answer_hi": "Intl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Node.js module supports ICU features?",
    "question_hi": "ICU फीचर्स सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["Intl", "icu", "locale", "unicode"],
    "options_hi": ["Intl", "icu", "locale", "unicode"],
    "answer_en": "Intl",
    "answer_hi": "Intl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Node.js stream type is read-only?",
    "question_hi": "केवल पढ़ने योग्य स्ट्रीम को Node.js में क्या कहा जाता है?",
    "options_en": ["Readable", "Writable", "Duplex", "Transform"],
    "options_hi": ["Readable", "Writable", "Duplex", "Transform"],
    "answer_en": "Readable",
    "answer_hi": "Readable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Node.js stream type is write-only?",
    "question_hi": "केवल लिखने योग्य स्ट्रीम को Node.js में क्या कहा जाता है?",
    "options_en": ["Writable", "Readable", "Duplex", "Transform"],
    "options_hi": ["Writable", "Readable", "Duplex", "Transform"],
    "answer_en": "Writable",
    "answer_hi": "Writable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Node.js stream type can both read and write?",
    "question_hi": "जो स्ट्रीम पढ़ और लिख दोनों सकती है उसे Node.js में क्या कहते हैं?",
    "options_en": ["Duplex", "Readable", "Writable", "Simplex"],
    "options_hi": ["Duplex", "Readable", "Writable", "Simplex"],
    "answer_en": "Duplex",
    "answer_hi": "Duplex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Node.js stream modifies data while passing?",
    "question_hi": "डेटा को बदलते हुए पास करने वाली Node.js स्ट्रीम कौन सी है?",
    "options_en": ["Transform", "Duplex", "Writable", "Readable"],
    "options_hi": ["Transform", "Duplex", "Writable", "Readable"],
    "answer_en": "Transform",
    "answer_hi": "Transform",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Node.js method converts stream to promise?",
    "question_hi": "स्ट्रीम को प्रॉमिस में बदलने के लिए कौन सी Node.js विधि उपयोग होती है?",
    "options_en": ["stream.promises.finished()", "stream.done()", "stream.await()", "stream.promise()"],
    "options_hi": ["stream.promises.finished()", "stream.done()", "stream.await()", "stream.promise()"],
    "answer_en": "stream.promises.finished()",
    "answer_hi": "stream.promises.finished()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Node.js API freezes an object?",
    "question_hi": "किसी ऑब्जेक्ट को फ्रीज़ करने के लिए Node.js में कौन सी API उपयोग होती है?",
    "options_en": ["Object.freeze()", "Object.lock()", "Object.seal()", "Object.stop()"],
    "options_hi": ["Object.freeze()", "Object.lock()", "Object.seal()", "Object.stop()"],
    "answer_en": "Object.freeze()",
    "answer_hi": "Object.freeze()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Node.js API prevents adding new properties to object?",
    "question_hi": "ऑब्जेक्ट में नए प्रॉपर्टी जोड़ने से रोकने वाली Node.js API कौन सी है?",
    "options_en": ["Object.seal()", "Object.freeze()", "Object.prevent()", "Object.block()"],
    "options_hi": ["Object.seal()", "Object.freeze()", "Object.prevent()", "Object.block()"],
    "answer_en": "Object.seal()",
    "answer_hi": "Object.seal()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Node.js global converts string to integer?",
    "question_hi": "स्ट्रिंग को पूर्णांक में बदलने वाला Node.js ग्लोबल कौन सा है?",
    "options_en": ["parseInt()", "Number()", "Math.int()", "toInt()"],
    "options_hi": ["parseInt()", "Number()", "Math.int()", "toInt()"],
    "answer_en": "parseInt()",
    "answer_hi": "parseInt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Node.js global checks NaN value?",
    "question_hi": "NaN वैल्यू जांचने के लिए Node.js में कौन सा ग्लोबल फ़ंक्शन है?",
    "options_en": ["isNaN()", "checkNaN()", "Number.NaN()", "Math.NaN()"],
    "options_hi": ["isNaN()", "checkNaN()", "Number.NaN()", "Math.NaN()"],
    "answer_en": "isNaN()",
    "answer_hi": "isNaN()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Node.js API schedules microtasks?",
    "question_hi": "माइक्रोटास्क शेड्यूल करने के लिए Node.js में कौन सी API उपयोग होती है?",
    "options_en": ["queueMicrotask()", "process.nextTick()", "setImmediate()", "setTimeout()"],
    "options_hi": ["queueMicrotask()", "process.nextTick()", "setImmediate()", "setTimeout()"],
    "answer_en": "queueMicrotask()",
    "answer_hi": "queueMicrotask()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Node.js API encodes URI?",
    "question_hi": "URI को एन्कोड करने के लिए Node.js में कौन सी API उपयोग होती है?",
    "options_en": ["encodeURI()", "encodeURL()", "uriEncode()", "url.encode()"],
    "options_hi": ["encodeURI()", "encodeURL()", "uriEncode()", "url.encode()"],
    "answer_en": "encodeURI()",
    "answer_hi": "encodeURI()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Node.js API decodes URI?",
    "question_hi": "URI को डिकोड करने के लिए Node.js में कौन सी API उपयोग होती है?",
    "options_en": ["decodeURI()", "decodeURL()", "uriDecode()", "url.decode()"],
    "options_hi": ["decodeURI()", "decodeURL()", "uriDecode()", "url.decode()"],
    "answer_en": "decodeURI()",
    "answer_hi": "decodeURI()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Node.js object provides environment variables?",
    "question_hi": "एनवायरनमेंट वेरिएबल्स प्रदान करने वाला Node.js ऑब्जेक्ट कौन सा है?",
    "options_en": ["process.env", "env", "system.env", "os.env"],
    "options_hi": ["process.env", "env", "system.env", "os.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Node.js method exits the process?",
    "question_hi": "प्रोसेस को बंद करने के लिए Node.js में कौन सी मेथड उपयोग होती है?",
    "options_en": ["process.exit()", "process.stop()", "process.kill()", "process.close()"],
    "options_hi": ["process.exit()", "process.stop()", "process.kill()", "process.close()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Node.js signal pauses the process?",
    "question_hi": "प्रोसेस को अस्थायी रूप से रोकने वाला Node.js सिग्नल कौन सा है?",
    "options_en": ["SIGSTOP", "SIGTERM", "SIGINT", "SIGKILL"],
    "options_hi": ["SIGSTOP", "SIGTERM", "SIGINT", "SIGKILL"],
    "answer_en": "SIGSTOP",
    "answer_hi": "SIGSTOP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Node.js signal force kills process?",
    "question_hi": "प्रोसेस को जबरदस्ती बंद करने वाला Node.js सिग्नल कौन सा है?",
    "options_en": ["SIGKILL", "SIGTERM", "SIGSTOP", "SIGINT"],
    "options_hi": ["SIGKILL", "SIGTERM", "SIGSTOP", "SIGINT"],
    "answer_en": "SIGKILL",
    "answer_hi": "SIGKILL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Node.js module supports console colors?",
    "question_hi": "कंसोल में रंग दिखाने का सपोर्ट Node.js में किसके द्वारा मिलता है?",
    "options_en": ["util", "console", "colors", "tty"],
    "options_hi": ["util", "console", "colors", "tty"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which util method formats strings?",
    "question_hi": "स्ट्रिंग को फॉर्मेट करने वाली util मेथड कौन सी है?",
    "options_en": ["util.format()", "util.stringify()", "util.print()", "util.text()"],
    "options_hi": ["util.format()", "util.stringify()", "util.print()", "util.text()"],
    "answer_en": "util.format()",
    "answer_hi": "util.format()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Node.js API checks deep equality?",
    "question_hi": "डीप इक्वालिटी जांचने वाली Node.js API कौन सी है?",
    "options_en": ["util.isDeepStrictEqual()", "Object.equal()", "deepEqual()", "compare()"],
    "options_hi": ["util.isDeepStrictEqual()", "Object.equal()", "deepEqual()", "compare()"],
    "answer_en": "util.isDeepStrictEqual()",
    "answer_hi": "util.isDeepStrictEqual()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Node.js API converts callback to promise?",
    "question_hi": "कॉलबैक को प्रॉमिस में बदलने वाली Node.js API कौन सी है?",
    "options_en": ["util.promisify()", "Promise.from()", "asyncify()", "callbackToPromise()"],
    "options_hi": ["util.promisify()", "Promise.from()", "asyncify()", "callbackToPromise()"],
    "answer_en": "util.promisify()",
    "answer_hi": "util.promisify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Node.js module handles binary data?",
    "question_hi": "बाइनरी डेटा को संभालने वाला Node.js फीचर कौन सा है?",
    "options_en": ["Buffer", "Binary", "Array", "Stream"],
    "options_hi": ["Buffer", "Binary", "Array", "Stream"],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Buffer method writes string data?",
    "question_hi": "स्ट्रिंग डेटा लिखने के लिए कौन सी Buffer मेथड उपयोग होती है?",
    "options_en": ["buffer.write()", "buffer.push()", "buffer.add()", "buffer.insert()"],
    "options_hi": ["buffer.write()", "buffer.push()", "buffer.add()", "buffer.insert()"],
    "answer_en": "buffer.write()",
    "answer_hi": "buffer.write()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Buffer method converts buffer to string?",
    "question_hi": "Buffer को स्ट्रिंग में बदलने वाली मेथड कौन सी है?",
    "options_en": ["buffer.toString()", "buffer.parse()", "buffer.decode()", "buffer.text()"],
    "options_hi": ["buffer.toString()", "buffer.parse()", "buffer.decode()", "buffer.text()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which encoding is default for Buffer?",
    "question_hi": "Buffer की डिफ़ॉल्ट एन्कोडिंग क्या होती है?",
    "options_en": ["utf8", "ascii", "base64", "hex"],
    "options_hi": ["utf8", "ascii", "base64", "hex"],
    "answer_en": "utf8",
    "answer_hi": "utf8",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Node.js module provides file permissions info?",
    "question_hi": "फाइल परमिशन की जानकारी देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["fs", "os", "path", "stat"],
    "options_hi": ["fs", "os", "path", "stat"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which fs method gets file stats?",
    "question_hi": "फाइल स्टैट्स प्राप्त करने के लिए कौन सी fs मेथड उपयोग होती है?",
    "options_en": ["fs.stat()", "fs.info()", "fs.details()", "fs.check()"],
    "options_hi": ["fs.stat()", "fs.info()", "fs.details()", "fs.check()"],
    "answer_en": "fs.stat()",
    "answer_hi": "fs.stat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which fs method renames a file?",
    "question_hi": "फाइल का नाम बदलने के लिए कौन सी fs मेथड उपयोग होती है?",
    "options_en": ["fs.rename()", "fs.move()", "fs.change()", "fs.update()"],
    "options_hi": ["fs.rename()", "fs.move()", "fs.change()", "fs.update()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which fs method deletes a file?",
    "question_hi": "फाइल हटाने के लिए कौन सी fs मेथड उपयोग होती है?",
    "options_en": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.clear()"],
    "options_hi": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.clear()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which fs method creates directory?",
    "question_hi": "डायरेक्टरी बनाने के लिए कौन सी fs मेथड उपयोग होती है?",
    "options_en": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.folder()"],
    "options_hi": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.folder()"],
    "answer_en": "fs.mkdir()",
    "answer_hi": "fs.mkdir()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which fs option creates recursive directories?",
    "question_hi": "रिकर्सिव डायरेक्टरी बनाने के लिए fs का कौन सा विकल्प उपयोग होता है?",
    "options_en": ["recursive: true", "deep: true", "nested: true", "tree: true"],
    "options_hi": ["recursive: true", "deep: true", "nested: true", "tree: true"],
    "answer_en": "recursive: true",
    "answer_hi": "recursive: true",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Node.js module supports file URLs?",
    "question_hi": "फाइल URL सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["url", "path", "fs", "net"],
    "options_hi": ["url", "path", "fs", "net"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which url method converts file path to URL?",
    "question_hi": "फाइल पाथ को URL में बदलने वाली url मेथड कौन सी है?",
    "options_en": ["pathToFileURL()", "fileToURL()", "convertPath()", "toURL()"],
    "options_hi": ["pathToFileURL()", "fileToURL()", "convertPath()", "toURL()"],
    "answer_en": "pathToFileURL()",
    "answer_hi": "pathToFileURL()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which url method converts URL to file path?",
    "question_hi": "URL को फाइल पाथ में बदलने वाली url मेथड कौन सी है?",
    "options_en": ["fileURLToPath()", "urlToPath()", "decodePath()", "parseFileURL()"],
    "options_hi": ["fileURLToPath()", "urlToPath()", "decodePath()", "parseFileURL()"],
    "answer_en": "fileURLToPath()",
    "answer_hi": "fileURLToPath()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Node.js module supports AbortController?",
    "question_hi": "AbortController सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["AbortController", "controller", "signal", "events"],
    "options_hi": ["AbortController", "controller", "signal", "events"],
    "answer_en": "AbortController",
    "answer_hi": "AbortController",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which property signals abort event?",
    "question_hi": "अबॉर्ट इवेंट को दर्शाने वाली प्रॉपर्टी कौन सी है?",
    "options_en": ["signal", "abort", "event", "stop"],
    "options_hi": ["signal", "abort", "event", "stop"],
    "answer_en": "signal",
    "answer_hi": "signal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js module supports text encoding?",
    "question_hi": "टेक्स्ट एन्कोडिंग सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["util", "buffer", "encoding", "text"],
    "options_hi": ["util", "buffer", "encoding", "text"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which util class handles text decoding?",
    "question_hi": "टेक्स्ट डिकोडिंग संभालने वाली util क्लास कौन सी है?",
    "options_en": ["TextDecoder", "TextEncoder", "StringDecoder", "BufferDecoder"],
    "options_hi": ["TextDecoder", "TextEncoder", "StringDecoder", "BufferDecoder"],
    "answer_en": "TextDecoder",
    "answer_hi": "TextDecoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which util class handles text encoding?",
    "question_hi": "टेक्स्ट एन्कोडिंग संभालने वाली util क्लास कौन सी है?",
    "options_en": ["TextEncoder", "TextDecoder", "StringEncoder", "BufferEncoder"],
    "options_hi": ["TextEncoder", "TextDecoder", "StringEncoder", "BufferEncoder"],
    "answer_en": "TextEncoder",
    "answer_hi": "TextEncoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js global checks finite number?",
    "question_hi": "किसी संख्या के सीमित (finite) होने की जांच करने वाला Node.js ग्लोबल कौन सा है?",
    "options_en": ["isFinite()", "Number.isNaN()", "Math.check()", "parseFloat()"],
    "options_hi": ["isFinite()", "Number.isNaN()", "Math.check()", "parseFloat()"],
    "answer_en": "isFinite()",
    "answer_hi": "isFinite()",
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