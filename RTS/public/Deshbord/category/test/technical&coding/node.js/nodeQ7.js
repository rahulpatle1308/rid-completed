const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to get the current directory name in Node.js?",
    "question_hi": "Node.js में वर्तमान डायरेक्टरी नाम प्राप्त करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["__dirname", "__filename", "process.cwd()", "path.dirname()"],
    "options_hi": ["__dirname", "__filename", "process.cwd()", "path.dirname()"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to schedule immediate execution of a callback in Node.js?",
    "question_hi": "Node.js में कॉलबैक के तत्काल निष्पादन को शेड्यूल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["setImmediate()", "setTimeout()", "process.nextTick()", "queueMicrotask()"],
    "options_hi": ["setImmediate()", "setTimeout()", "process.nextTick()", "queueMicrotask()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which module is used to create a web framework in Node.js?",
    "question_hi": "Node.js में वेब फ्रेमवर्क बनाने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["express", "http", "web", "framework"],
    "options_hi": ["express", "http", "web", "framework"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method is used to parse command line arguments in Node.js?",
    "question_hi": "Node.js में कमांड लाइन आर्गुमेंट्स को पार्स करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["process.argv", "process.args", "process.flags", "process.options"],
    "options_hi": ["process.argv", "process.args", "process.flags", "process.options"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method is used to create a middleware in Express.js?",
    "question_hi": "Express.js में मिडलवेयर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.use()", "app.middleware()", "app.add()", "app.handle()"],
    "options_hi": ["app.use()", "app.middleware()", "app.add()", "app.handle()"],
    "answer_en": "app.use()",
    "answer_hi": "app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to handle GET requests in Express.js?",
    "question_hi": "Express.js में GET रिक्वेस्ट्स को हैंडल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.get()", "app.post()", "app.fetch()", "app.handleGet()"],
    "options_hi": ["app.get()", "app.post()", "app.fetch()", "app.handleGet()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method is used to send a JSON response in Express.js?",
    "question_hi": "Express.js में JSON रिस्पांस भेजने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.json()", "res.send()", "res.JSON()", "res.return()"],
    "options_hi": ["res.json()", "res.send()", "res.JSON()", "res.return()"],
    "answer_en": "res.json()",
    "answer_hi": "res.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to handle errors in Express.js?",
    "question_hi": "Express.js में एरर्स को हैंडल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.use() with 4 parameters", "app.error()", "app.catch()", "app.handleError()"],
    "options_hi": ["app.use() with 4 parameters", "app.error()", "app.catch()", "app.handleError()"],
    "answer_en": "app.use() with 4 parameters",
    "answer_hi": "4 पैरामीटर्स के साथ app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to serve static files in Express.js?",
    "question_hi": "Express.js में स्टैटिक फाइल्स को सर्व करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["express.static()", "express.files()", "express.public()", "express.serve()"],
    "options_hi": ["express.static()", "express.files()", "express.public()", "express.serve()"],
    "answer_en": "express.static()",
    "answer_hi": "express.static()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method is used to redirect in Express.js?",
    "question_hi": "Express.js में रीडायरेक्ट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.redirect()", "res.send()", "res.forward()", "res.route()"],
    "options_hi": ["res.redirect()", "res.send()", "res.forward()", "res.route()"],
    "answer_en": "res.redirect()",
    "answer_hi": "res.redirect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method is used to set cookies in Express.js?",
    "question_hi": "Express.js में कुकीज़ सेट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.cookie()", "res.setCookie()", "res.addCookie()", "res.storeCookie()"],
    "options_hi": ["res.cookie()", "res.setCookie()", "res.addCookie()", "res.storeCookie()"],
    "answer_en": "res.cookie()",
    "answer_hi": "res.cookie()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to handle POST requests in Express.js?",
    "question_hi": "Express.js में POST रिक्वेस्ट्स को हैंडल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.post()", "app.get()", "app.put()", "app.delete()"],
    "options_hi": ["app.post()", "app.get()", "app.put()", "app.delete()"],
    "answer_en": "app.post()",
    "answer_hi": "app.post()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to get the IP address of the client in Express.js?",
    "question_hi": "Express.js में क्लाइंट का IP एड्रेस प्राप्त करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["req.ip", "req.clientIp", "req.connection.ip", "req.remoteAddress"],
    "options_hi": ["req.ip", "req.clientIp", "req.connection.ip", "req.remoteAddress"],
    "answer_en": "req.ip",
    "answer_hi": "req.ip",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method is used to handle 404 errors in Express.js?",
    "question_hi": "Express.js में 404 एरर्स को हैंडल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.use() at the end", "app.error404()", "app.notFound()", "app.missing()"],
    "options_hi": ["अंत में app.use()", "app.error404()", "app.notFound()", "app.missing()"],
    "answer_en": "app.use() at the end",
    "answer_hi": "अंत में app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to parse JSON bodies in Express.js?",
    "question_hi": "Express.js में JSON बॉडीज़ को पार्स करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["express.json()", "express.parse()", "express.bodyParser()", "express.JSON()"],
    "options_hi": ["express.json()", "express.parse()", "express.bodyParser()", "express.JSON()"],
    "answer_en": "express.json()",
    "answer_hi": "express.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to create a router in Express.js?",
    "question_hi": "Express.js में राउटर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["express.Router()", "express.createRouter()", "express.newRouter()", "express.makeRouter()"],
    "options_hi": ["express.Router()", "express.createRouter()", "express.newRouter()", "express.makeRouter()"],
    "answer_en": "express.Router()",
    "answer_hi": "express.Router()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to handle PUT requests in Express.js?",
    "question_hi": "Express.js में PUT रिक्वेस्ट्स को हैंडल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.put()", "app.post()", "app.update()", "app.modify()"],
    "options_hi": ["app.put()", "app.post()", "app.update()", "app.modify()"],
    "answer_en": "app.put()",
    "answer_hi": "app.put()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is used to handle DELETE requests in Express.js?",
    "question_hi": "Express.js में DELETE रिक्वेस्ट्स को हैंडल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.delete()", "app.remove()", "app.del()", "app.erase()"],
    "options_hi": ["app.delete()", "app.remove()", "app.del()", "app.erase()"],
    "answer_en": "app.delete()",
    "answer_hi": "app.delete()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method is used to set the status code in Express.js?",
    "question_hi": "Express.js में स्टेटस कोड सेट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.status()", "res.code()", "res.setStatus()", "res.statusCode()"],
    "options_hi": ["res.status()", "res.code()", "res.setStatus()", "res.statusCode()"],
    "answer_en": "res.status()",
    "answer_hi": "res.status()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to parse URL-encoded bodies in Express.js?",
    "question_hi": "Express.js में URL-encoded बॉडीज़ को पार्स करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["express.urlencoded()", "express.parse()", "express.bodyParser()", "express.URL()"],
    "options_hi": ["express.urlencoded()", "express.parse()", "express.bodyParser()", "express.URL()"],
    "answer_en": "express.urlencoded()",
    "answer_hi": "express.urlencoded()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to create a custom error in Express.js?",
    "question_hi": "Express.js में कस्टम एरर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["new Error()", "express.error()", "app.error()", "res.error()"],
    "options_hi": ["new Error()", "express.error()", "app.error()", "res.error()"],
    "answer_en": "new Error()",
    "answer_hi": "new Error()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is used to set headers in Express.js?",
    "question_hi": "Express.js में हेडर्स सेट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.set()", "res.header()", "res.addHeader()", "res.setHeader()"],
    "options_hi": ["res.set()", "res.header()", "res.addHeader()", "res.setHeader()"],
    "answer_en": "res.set()",
    "answer_hi": "res.set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method is used to end the response in Express.js?",
    "question_hi": "Express.js में रिस्पांस को समाप्त करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.end()", "res.finish()", "res.close()", "res.done()"],
    "options_hi": ["res.end()", "res.finish()", "res.close()", "res.done()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to send a file as a response in Express.js?",
    "question_hi": "Express.js में फाइल को रिस्पांस के रूप में भेजने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.sendFile()", "res.file()", "res.send()", "res.attach()"],
    "options_hi": ["res.sendFile()", "res.file()", "res.send()", "res.attach()"],
    "answer_en": "res.sendFile()",
    "answer_hi": "res.sendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method is used to create a template engine in Express.js?",
    "question_hi": "Express.js में टेम्पलेट इंजन बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.set('view engine')", "app.engine()", "app.template()", "app.view()"],
    "options_hi": ["app.set('view engine')", "app.engine()", "app.template()", "app.view()"],
    "answer_en": "app.set('view engine')",
    "answer_hi": "app.set('view engine')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to render a view in Express.js?",
    "question_hi": "Express.js में एक व्यू रेंडर करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["res.render()", "res.view()", "res.template()", "res.show()"],
    "options_hi": ["res.render()", "res.view()", "res.template()", "res.show()"],
    "answer_en": "res.render()",
    "answer_hi": "res.render()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method is used to create a session in Express.js?",
    "question_hi": "Express.js में सेशन बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["express-session", "express.session()", "app.session()", "session.create()"],
    "options_hi": ["express-session", "express.session()", "app.session()", "session.create()"],
    "answer_en": "express-session",
    "answer_hi": "express-session",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to create a WebSocket server in Node.js?",
    "question_hi": "Node.js में WebSocket सर्वर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["ws", "websocket", "socket.io", "net"],
    "options_hi": ["ws", "websocket", "socket.io", "net"],
    "answer_en": "ws",
    "answer_hi": "ws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to create a RESTful API in Express.js?",
    "question_hi": "Express.js में RESTful API बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["app.get(), app.post(), etc.", "app.rest()", "app.api()", "app.REST()"],
    "options_hi": ["app.get(), app.post(), etc.", "app.rest()", "app.api()", "app.REST()"],
    "answer_en": "app.get(), app.post(), etc.",
    "answer_hi": "app.get(), app.post(), आदि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method is used to create a GraphQL server in Node.js?",
    "question_hi": "Node.js में GraphQL सर्वर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["express-graphql", "graphql-express", "apollo-server", "graphql-server"],
    "options_hi": ["express-graphql", "graphql-express", "apollo-server", "graphql-server"],
    "answer_en": "express-graphql",
    "answer_hi": "express-graphql",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method is used to create a MongoDB connection in Node.js?",
    "question_hi": "Node.js में MongoDB कनेक्शन बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["mongoose.connect()", "mongo.connect()", "mongodb.connect()", "db.connect()"],
    "options_hi": ["mongoose.connect()", "mongo.connect()", "mongodb.connect()", "db.connect()"],
    "answer_en": "mongoose.connect()",
    "answer_hi": "mongoose.connect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method is used to create a model in Mongoose?",
    "question_hi": "Mongoose में मॉडल बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["mongoose.model()", "mongoose.create()", "mongoose.new()", "mongoose.schema()"],
    "options_hi": ["mongoose.model()", "mongoose.create()", "mongoose.new()", "mongoose.schema()"],
    "answer_en": "mongoose.model()",
    "answer_hi": "mongoose.model()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to create a schema in Mongoose?",
    "question_hi": "Mongoose में स्कीमा बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["new mongoose.Schema()", "mongoose.createSchema()", "mongoose.schema()", "mongoose.newSchema()"],
    "options_hi": ["new mongoose.Schema()", "mongoose.createSchema()", "mongoose.schema()", "mongoose.newSchema()"],
    "answer_en": "new mongoose.Schema()",
    "answer_hi": "new mongoose.Schema()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to find documents in Mongoose?",
    "question_hi": "Mongoose में डॉक्युमेंट्स ढूंढने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.find()", "Model.search()", "Model.query()", "Model.get()"],
    "options_hi": ["Model.find()", "Model.search()", "Model.query()", "Model.get()"],
    "answer_en": "Model.find()",
    "answer_hi": "Model.find()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to save a document in Mongoose?",
    "question_hi": "Mongoose में डॉक्युमेंट सेव करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["document.save()", "document.store()", "document.insert()", "document.add()"],
    "options_hi": ["document.save()", "document.store()", "document.insert()", "document.add()"],
    "answer_en": "document.save()",
    "answer_hi": "document.save()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method is used to update a document in Mongoose?",
    "question_hi": "Mongoose में डॉक्युमेंट अपडेट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.updateOne()", "Model.modify()", "Model.change()", "Model.edit()"],
    "options_hi": ["Model.updateOne()", "Model.modify()", "Model.change()", "Model.edit()"],
    "answer_en": "Model.updateOne()",
    "answer_hi": "Model.updateOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to delete a document in Mongoose?",
    "question_hi": "Mongoose में डॉक्युमेंट डिलीट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.deleteOne()", "Model.remove()", "Model.erase()", "Model.del()"],
    "options_hi": ["Model.deleteOne()", "Model.remove()", "Model.erase()", "Model.del()"],
    "answer_en": "Model.deleteOne()",
    "answer_hi": "Model.deleteOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to create a middleware in Mongoose?",
    "question_hi": "Mongoose में मिडलवेयर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["schema.pre()", "schema.middleware()", "schema.use()", "schema.add()"],
    "options_hi": ["schema.pre()", "schema.middleware()", "schema.use()", "schema.add()"],
    "answer_en": "schema.pre()",
    "answer_hi": "schema.pre()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method is used to populate references in Mongoose?",
    "question_hi": "Mongoose में रेफरेंसेस पॉपुलेट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.populate()", "Model.ref()", "Model.link()", "Model.join()"],
    "options_hi": ["Model.populate()", "Model.ref()", "Model.link()", "Model.join()"],
    "answer_en": "Model.populate()",
    "answer_hi": "Model.populate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method is used to create an index in Mongoose?",
    "question_hi": "Mongoose में इंडेक्स बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["schema.index()", "schema.addIndex()", "schema.createIndex()", "schema.makeIndex()"],
    "options_hi": ["schema.index()", "schema.addIndex()", "schema.createIndex()", "schema.makeIndex()"],
    "answer_en": "schema.index()",
    "answer_hi": "schema.index()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to create a virtual in Mongoose?",
    "question_hi": "Mongoose में वर्चुअल बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["schema.virtual()", "schema.addVirtual()", "schema.createVirtual()", "schema.makeVirtual()"],
    "options_hi": ["schema.virtual()", "schema.addVirtual()", "schema.createVirtual()", "schema.makeVirtual()"],
    "answer_en": "schema.virtual()",
    "answer_hi": "schema.virtual()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a static method in Mongoose?",
    "question_hi": "Mongoose में स्टैटिक मेथड बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["schema.statics", "schema.static", "schema.addStatic", "schema.createStatic"],
    "options_hi": ["schema.statics", "schema.static", "schema.addStatic", "schema.createStatic"],
    "answer_en": "schema.statics",
    "answer_hi": "schema.statics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method is used to create an instance method in Mongoose?",
    "question_hi": "Mongoose में इंस्टेंस मेथड बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["schema.methods", "schema.method", "schema.addMethod", "schema.createMethod"],
    "options_hi": ["schema.methods", "schema.method", "schema.addMethod", "schema.createMethod"],
    "answer_en": "schema.methods",
    "answer_hi": "schema.methods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method is used to create a query in Mongoose?",
    "question_hi": "Mongoose में क्वेरी बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.find()", "Model.query()", "Model.createQuery()", "Model.makeQuery()"],
    "options_hi": ["Model.find()", "Model.query()", "Model.createQuery()", "Model.makeQuery()"],
    "answer_en": "Model.find()",
    "answer_hi": "Model.find()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to create an aggregation in Mongoose?",
    "question_hi": "Mongoose में एग्रीगेशन बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.aggregate()", "Model.group()", "Model.agg()", "Model.createAgg()"],
    "options_hi": ["Model.aggregate()", "Model.group()", "Model.agg()", "Model.createAgg()"],
    "answer_en": "Model.aggregate()",
    "answer_hi": "Model.aggregate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to create a transaction in Mongoose?",
    "question_hi": "Mongoose में ट्रांजैक्शन बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.transaction()", "Model.startTransaction()", "Model.beginTransaction()", "Model.session()"],
    "options_hi": ["Model.transaction()", "Model.startTransaction()", "Model.beginTransaction()", "Model.session()"],
    "answer_en": "Model.session()",
    "answer_hi": "Model.session()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method is used to create a validation in Mongoose?",
    "question_hi": "Mongoose में वैलिडेशन बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["schema.path().validate()", "schema.validate()", "schema.addValidation()", "schema.createValidation()"],
    "options_hi": ["schema.path().validate()", "schema.validate()", "schema.addValidation()", "schema.createValidation()"],
    "answer_en": "schema.path().validate()",
    "answer_hi": "schema.path().validate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to create a plugin in Mongoose?",
    "question_hi": "Mongoose में प्लगइन बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["schema.plugin()", "schema.addPlugin()", "schema.createPlugin()", "schema.usePlugin()"],
    "options_hi": ["schema.plugin()", "schema.addPlugin()", "schema.createPlugin()", "schema.usePlugin()"],
    "answer_en": "schema.plugin()",
    "answer_hi": "schema.plugin()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method is used to create a discriminator in Mongoose?",
    "question_hi": "Mongoose में डिस्क्रिमिनेटर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Model.discriminator()", "Model.addDiscriminator()", "Model.createDiscriminator()", "Model.makeDiscriminator()"],
    "options_hi": ["Model.discriminator()", "Model.addDiscriminator()", "Model.createDiscriminator()", "Model.makeDiscriminator()"],
    "answer_en": "Model.discriminator()",
    "answer_hi": "Model.discriminator()",
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