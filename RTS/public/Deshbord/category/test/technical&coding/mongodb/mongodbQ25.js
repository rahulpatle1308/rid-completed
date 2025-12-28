const questions = [
  {
    "num": 1,
    "question_en": "Which command enables sharding for a database? (variant 28)",
    "question_hi": "किस command से किसी database के लिए sharding सक्षम किया जाता है? (वेरिएंट 28)",
    "options_en": [
      "mongoimport",
      "sh.enableSharding()",
      "Managed Backups",
      "Atlas Search"
    ],
    "options_hi": [
      "mongoimport",
      "sh.enableSharding()",
      "Managed Backups",
      "Atlas Search"
    ],
    "answer_en": "sh.enableSharding()",
    "answer_hi": "sh.enableSharding()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function starts a client session for transactions? (variant 28)",
    "question_hi": "Transactions के लिए client session शुरू करने के लिए कौन-सा function उपयोग किया जाता है? (वेरिएंट 28)",
    "options_en": [
      "Date",
      "startSession()",
      "mongorestore",
      "_id"
    ],
    "options_hi": [
      "Date",
      "startSession()",
      "mongorestore",
      "_id"
    ],
    "answer_en": "startSession()",
    "answer_hi": "startSession()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which method commits a transaction in a session? (variant 28)",
    "question_hi": "सत्र में transaction commit करने के लिए कौन-सा method उपयोग होता है? (वेरिएंट 28)",
    "options_en": [
      "Binary",
      "sh.shardCollection()",
      "Oplog",
      "session.commitTransaction()"
    ],
    "options_hi": [
      "Binary",
      "sh.shardCollection()",
      "Oplog",
      "session.commitTransaction()"
    ],
    "answer_en": "session.commitTransaction()",
    "answer_hi": "session.commitTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which tool is used for logical backups (export) of MongoDB data? (variant 28)",
    "question_hi": "MongoDB डेटा के logical backups (export) के लिए कौन-सा टूल उपयोग होता है? (वेरिएंट 28)",
    "options_en": [
      "Index Suggestions",
      "$pull",
      "mongosh",
      "mongodump"
    ],
    "options_hi": [
      "Index Suggestions",
      "$pull",
      "mongosh",
      "mongodump"
    ],
    "answer_en": "mongodump",
    "answer_hi": "mongodump",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which command restores data from a mongodump archive? (variant 28)",
    "question_hi": "mongodump archive से डेटा restore करने के लिए कौन-सा command उपयोग होता है? (वेरिएंट 28)",
    "options_en": [
      "mongorestore",
      "Compression",
      "$limit",
      "$sort"
    ],
    "options_hi": [
      "mongorestore",
      "Compression",
      "$limit",
      "$sort"
    ],
    "answer_en": "mongorestore",
    "answer_hi": "mongorestore",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which operator matches documents that contain the specified field? (variant 28)",
    "question_hi": "कौन-सा operator उन documents से मेल खाता है जिनमें निर्दिष्ट field होता है? (वेरिएंट 28)",
    "options_en": [
      "$project",
      "$replaceRoot",
      "$exists",
      "rs.initiate()"
    ],
    "options_hi": [
      "$project",
      "$replaceRoot",
      "$exists",
      "rs.initiate()"
    ],
    "answer_en": "$exists",
    "answer_hi": "$exists",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which operator matches array elements that equal all the specified values? (variant 28)",
    "question_hi": "कौन-सा operator array elements से मेल खाता है जो सभी निर्दिष्ट मानों के बराबर हों? (वेरिएंट 28)",
    "options_en": [
      "$ne",
      "Single Field Index",
      "Automatic Failover",
      "$all"
    ],
    "options_hi": [
      "$ne",
      "Single Field Index",
      "Automatic Failover",
      "$all"
    ],
    "answer_en": "$all",
    "answer_hi": "$all",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method updates a single document matching a filter? (variant 28)",
    "question_hi": "कौन-सा method filter से मेल खाती single document को update करता है? (वेरिएंट 28)",
    "options_en": [
      "db.collection.deleteOne()",
      "updateOne()",
      "Array",
      "Embedded Documents"
    ],
    "options_hi": [
      "db.collection.deleteOne()",
      "updateOne()",
      "Array",
      "Embedded Documents"
    ],
    "answer_en": "updateOne()",
    "answer_hi": "updateOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method replaces a single document? (variant 28)",
    "question_hi": "कौन-सा method single document को पूरी तरह से replace करता है? (वेरिएंट 28)",
    "options_en": [
      "replaceOne()",
      "$mul",
      "$unset",
      "Role-Based Access Control"
    ],
    "options_hi": [
      "replaceOne()",
      "$mul",
      "$unset",
      "Role-Based Access Control"
    ],
    "answer_en": "replaceOne()",
    "answer_hi": "replaceOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function returns the server status information? (variant 28)",
    "question_hi": "कौन-सा function server status जानकारी लौटाता है? (वेरिएंट 28)",
    "options_en": [
      "Arbiter",
      "db.serverStatus()",
      "Encryption at Rest",
      "Memory-Mapped Files"
    ],
    "options_hi": [
      "Arbiter",
      "db.serverStatus()",
      "Encryption at Rest",
      "Memory-Mapped Files"
    ],
    "answer_en": "db.serverStatus()",
    "answer_hi": "db.serverStatus()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which command shows current operations running on the server? (variant 28)",
    "question_hi": "सर्वर पर वर्तमान में चल रहे operations दिखाने के लिए कौन-सा command है? (वेरिएंट 28)",
    "options_en": [
      "db.currentOp()",
      "show collections",
      "mongotop",
      "$project"
    ],
    "options_hi": [
      "db.currentOp()",
      "show collections",
      "mongotop",
      "$project"
    ],
    "answer_en": "db.currentOp()",
    "answer_hi": "db.currentOp()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which MongoDB feature provides full-text search capabilities on collections? (variant 28)",
    "question_hi": "कौन-सा MongoDB फीचर collections पर full-text search क्षमताएँ प्रदान करता है? (वेरिएंट 28)",
    "options_en": [
      "Atlas Search",
      "$not",
      "insertMany()",
      "Explain"
    ],
    "options_hi": [
      "Atlas Search",
      "$not",
      "insertMany()",
      "Explain"
    ],
    "answer_en": "Atlas Search",
    "answer_hi": "Atlas Search",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator is used for element matching within arrays? (variant 28)",
    "question_hi": "Array के भीतर element matching के लिए कौन-सा operator उपयोग होता है? (वेरिएंट 28)",
    "options_en": [
      "$elemMatch",
      "$regex",
      "mongodump",
      "Range Sharding"
    ],
    "options_hi": [
      "$elemMatch",
      "$regex",
      "mongodump",
      "Range Sharding"
    ],
    "answer_en": "$elemMatch",
    "answer_hi": "$elemMatch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which index type allows automatic removal of documents after a certain time? (variant 28)",
    "question_hi": "कौन-सा index प्रकार निश्चित समय के बाद documents को automatic रूप से हटाने की अनुमति देता है? (वेरिएंट 28)",
    "options_en": [
      "$facet",
      "Read Preference",
      "LDAP",
      "TTL Index"
    ],
    "options_hi": [
      "$facet",
      "Read Preference",
      "LDAP",
      "TTL Index"
    ],
    "answer_en": "TTL Index",
    "answer_hi": "TTL Index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which MongoDB feature provides managed database-as-a-service? (variant 28)",
    "question_hi": "कौन-सा MongoDB फीचर managed database-as-a-service प्रदान करता है? (वेरिएंट 28)",
    "options_en": [
      "config servers",
      "$mul",
      "Atlas",
      "Secondary"
    ],
    "options_hi": [
      "config servers",
      "$mul",
      "Atlas",
      "Secondary"
    ],
    "answer_en": "Atlas",
    "answer_hi": "Atlas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which aggregation stage performs a left outer join with another collection? (variant 28)",
    "question_hi": "कौन-सा aggregation stage दूसरी collection के साथ left outer join करता है? (वेरिएंट 28)",
    "options_en": [
      "$lookup",
      "Arbiter",
      "Profiling",
      "show dbs"
    ],
    "options_hi": [
      "$lookup",
      "Arbiter",
      "Profiling",
      "show dbs"
    ],
    "answer_en": "$lookup",
    "answer_hi": "$lookup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which command returns statistics for a collection? (variant 28)",
    "question_hi": "कौन-सा command किसी collection के लिए statistics लौटाता है? (वेरिएंट 28)",
    "options_en": [
      "Serverless Instances",
      "$project",
      "Object",
      "db.collection.stats()"
    ],
    "options_hi": [
      "Serverless Instances",
      "$project",
      "Object",
      "db.collection.stats()"
    ],
    "answer_en": "db.collection.stats()",
    "answer_hi": "db.collection.stats()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which operator is used to increment a numeric field? (variant 28)",
    "question_hi": "किस operator से किसी numeric field को increment किया जाता है? (वेरिएंट 28)",
    "options_en": [
      "mongotop",
      "Polymorphic Schemas",
      "rs.initiate()",
      "$inc"
    ],
    "options_hi": [
      "mongotop",
      "Polymorphic Schemas",
      "rs.initiate()",
      "$inc"
    ],
    "answer_en": "$inc",
    "answer_hi": "$inc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method removes all documents from a collection but retains indexes? (variant 28)",
    "question_hi": "कौन-सा method collection के सभी documents हटाता है पर indexes बनाए रखता है? (वेरिएंट 28)",
    "options_en": [
      "deleteMany()",
      "$or",
      "Binary",
      "mongostat"
    ],
    "options_hi": [
      "deleteMany()",
      "$or",
      "Binary",
      "mongostat"
    ],
    "answer_en": "deleteMany()",
    "answer_hi": "deleteMany()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which command shows current replica set configuration? (variant 28)",
    "question_hi": "वर्तमान replica set configuration दिखाने के लिए कौन-सा command है? (वेरिएंट 28)",
    "options_en": [
      "Data Federation",
      "Regex",
      "rs.conf()",
      "ObjectId()"
    ],
    "options_hi": [
      "Data Federation",
      "Regex",
      "rs.conf()",
      "ObjectId()"
    ],
    "answer_en": "rs.conf()",
    "answer_hi": "rs.conf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which command is used to shard a collection? (variant 28)",
    "question_hi": "किस command का उपयोग collection को shard करने के लिए किया जाता है? (वेरिएंट 28)",
    "options_en": [
      "WiredTiger",
      "Covered Queries",
      "Write Concern",
      "sh.shardCollection()"
    ],
    "options_hi": [
      "WiredTiger",
      "Covered Queries",
      "Write Concern",
      "sh.shardCollection()"
    ],
    "answer_en": "sh.shardCollection()",
    "answer_hi": "sh.shardCollection()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which query operator matches documents that satisfy a regular expression? (variant 28)",
    "question_hi": "कौन-सा query operator उन documents से मेल खाता है जो regular expression को पूरा करते हैं? (वेरिएंट 28)",
    "options_en": [
      "$regex",
      "Compound Index",
      "Replica Set",
      "rs.status()"
    ],
    "options_hi": [
      "$regex",
      "Compound Index",
      "Replica Set",
      "rs.status()"
    ],
    "answer_en": "$regex",
    "answer_hi": "$regex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which update operator removes a field from a document? (variant 28)",
    "question_hi": "कौन-सा update operator किसी document से field हटाता है? (वेरिएंट 28)",
    "options_en": [
      "insertMany()",
      "Aggregation Editor",
      "Hashed Index",
      "$unset"
    ],
    "options_hi": [
      "insertMany()",
      "Aggregation Editor",
      "Hashed Index",
      "$unset"
    ],
    "answer_en": "$unset",
    "answer_hi": "$unset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which command shows current database stats? (variant 28)",
    "question_hi": "कौन-सा command वर्तमान database के stats दिखाता है? (वेरिएंट 28)",
    "options_en": [
      "$facet",
      "$limit",
      "db.stats()",
      "Atlas Search"
    ],
    "options_hi": [
      "$facet",
      "$limit",
      "db.stats()",
      "Atlas Search"
    ],
    "answer_en": "db.stats()",
    "answer_hi": "db.stats()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which BSON type stores binary data? (variant 28)",
    "question_hi": "कौन-सा BSON प्रकार binary data संग्रहीत करता है? (वेरिएंट 28)",
    "options_en": [
      "$bucket",
      "Binary",
      "sh.shardCollection()",
      "LDAP"
    ],
    "options_hi": [
      "$bucket",
      "Binary",
      "sh.shardCollection()",
      "LDAP"
    ],
    "answer_en": "Binary",
    "answer_hi": "Binary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which MongoDB feature supports horizontal scaling across shards? (variant 28)",
    "question_hi": "कौन-सा MongoDB फीचर shards के माध्यम से हॉरिजॉन्टल स्केलिंग का समर्थन करता है? (वेरिएंट 28)",
    "options_en": [
      "Oplog",
      "Covered Queries",
      "Sharding",
      "Null"
    ],
    "options_hi": [
      "Oplog",
      "Covered Queries",
      "Sharding",
      "Null"
    ],
    "answer_en": "Sharding",
    "answer_hi": "Sharding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which command shows the current primary node in a replica set? (variant 28)",
    "question_hi": "Replica set में वर्तमान primary node दिखाने के लिए कौन-सा command है? (वेरिएंट 28)",
    "options_en": [
      "rs.isMaster()",
      "db.collection.stats()",
      "Schema Analyzer",
      "Compound Index"
    ],
    "options_hi": [
      "rs.isMaster()",
      "db.collection.stats()",
      "Schema Analyzer",
      "Compound Index"
    ],
    "answer_en": "rs.isMaster()",
    "answer_hi": "rs.isMaster()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which function generates a new ObjectId value? (variant 28)",
    "question_hi": "नई ObjectId value generate करने के लिए कौन-सा function उपयोग किया जाता है? (वेरिएंट 28)",
    "options_en": [
      "db.collection.deleteMany()",
      "$setWindowFields",
      "$eq",
      "ObjectId()"
    ],
    "options_hi": [
      "db.collection.deleteMany()",
      "$setWindowFields",
      "$eq",
      "ObjectId()"
    ],
    "answer_en": "ObjectId()",
    "answer_hi": "ObjectId()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which operator matches documents where field value is in the specified array? (variant 28)",
    "question_hi": "कौन-सा operator उन documents से मेल खाता है जिनमें field मान निर्दिष्ट array में है? (वेरिएंट 28)",
    "options_en": [
      "$in",
      "$sort",
      "db.collection.updateOne()",
      "insertOne()"
    ],
    "options_hi": [
      "$in",
      "$sort",
      "db.collection.updateOne()",
      "insertOne()"
    ],
    "answer_en": "$in",
    "answer_hi": "$in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which index type improves query performance for fields containing arrays? (variant 28)",
    "question_hi": "ऐसी fields के लिए जिनमें arrays होते हैं, query प्रदर्शन सुधारने वाला कौन-सा index प्रकार है? (वेरिएंट 28)",
    "options_en": [
      "Serverless Instances",
      "Multikey Index",
      "Boolean",
      "$exists"
    ],
    "options_hi": [
      "Serverless Instances",
      "Multikey Index",
      "Boolean",
      "$exists"
    ],
    "answer_en": "Multikey Index",
    "answer_hi": "Multikey Index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which aggregation stage reshapes each document in the stream, adding or removing fields? (variant 28)",
    "question_hi": "कौन-सा aggregation stage stream में प्रत्येक document को reshape करता है, fields जोड़ता या हटाता है? (वेरिएंट 28)",
    "options_en": [
      "$project",
      "$currentDate",
      "Text Index",
      "$lookup"
    ],
    "options_hi": [
      "$project",
      "$currentDate",
      "Text Index",
      "$lookup"
    ],
    "answer_en": "$project",
    "answer_hi": "$project",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which command displays profiler data for diagnostic purposes? (variant 28)",
    "question_hi": "निदान के लिए profiler डेटा दिखाने के लिए कौन-सा command उपयोग होता है? (वेरिएंट 28)",
    "options_en": [
      "db.system.profile.find()",
      "$bucket",
      "mongostat",
      "$gte"
    ],
    "options_hi": [
      "db.system.profile.find()",
      "$bucket",
      "mongostat",
      "$gte"
    ],
    "answer_en": "db.system.profile.find()",
    "answer_hi": "db.system.profile.find()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which command lists all databases in the MongoDB shell? (variant 29)",
    "question_hi": "MongoDB shell में सभी डेटाबेस की सूची दिखाने के लिए कौन-सा कमांड है? (वेरिएंट 29)",
    "options_en": [
      "show dbs",
      "$gte",
      "mongorestore",
      "insertMany()"
    ],
    "options_hi": [
      "show dbs",
      "$gte",
      "mongorestore",
      "insertMany()"
    ],
    "answer_en": "show dbs",
    "answer_hi": "show dbs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which command lists collections in the current database? (variant 29)",
    "question_hi": "वर्तमान डेटाबेस में collections सूचीबद्ध करने के लिए कौन-सा कमांड है? (वेरिएंट 29)",
    "options_en": [
      "session.startTransaction()",
      "db.collection.updateOne()",
      "Automatic Failover",
      "show collections"
    ],
    "options_hi": [
      "session.startTransaction()",
      "db.collection.updateOne()",
      "Automatic Failover",
      "show collections"
    ],
    "answer_en": "show collections",
    "answer_hi": "show collections",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method inserts a single document into a collection? (variant 29)",
    "question_hi": "किस मेथड से एक single document collection में insert किया जाता है? (वेरिएंट 29)",
    "options_en": [
      "insertOne()",
      "Hashed Index",
      "Atlas Search",
      "References"
    ],
    "options_hi": [
      "insertOne()",
      "Hashed Index",
      "Atlas Search",
      "References"
    ],
    "answer_en": "insertOne()",
    "answer_hi": "insertOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method inserts multiple documents into a collection? (variant 29)",
    "question_hi": "किस मेथड से एक से अधिक documents collection में insert किये जाते हैं? (वेरिएंट 29)",
    "options_en": [
      "$bucket",
      "$addToSet",
      "$inc",
      "insertMany()"
    ],
    "options_hi": [
      "$bucket",
      "$addToSet",
      "$inc",
      "insertMany()"
    ],
    "answer_en": "insertMany()",
    "answer_hi": "insertMany()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which query operator matches values that are greater than a specified value? (variant 29)",
    "question_hi": "कौन-सा query operator उन मानों से मेल खाता है जो निर्दिष्ट मान से बड़े हैं? (वेरिएंट 29)",
    "options_en": [
      "Shard Key",
      "Hashed Index",
      "$gt",
      "mongorestore"
    ],
    "options_hi": [
      "Shard Key",
      "Hashed Index",
      "$gt",
      "mongorestore"
    ],
    "answer_en": "$gt",
    "answer_hi": "$gt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which update operator sets the value of a field? (variant 29)",
    "question_hi": "कौन-सा update operator किसी field का मान सेट करता है? (वेरिएंट 29)",
    "options_en": [
      "$elemMatch",
      "$set",
      "References",
      "$nin"
    ],
    "options_hi": [
      "$elemMatch",
      "$set",
      "References",
      "$nin"
    ],
    "answer_en": "$set",
    "answer_hi": "$set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which BSON type represents a 12-byte unique identifier used as primary key by default? (variant 29)",
    "question_hi": "कौन-सा BSON प्रकार 12-byte अद्वितीय पहचानकर्ता का प्रतिनिधित्व करता है जो default रूप से primary key के रूप में उपयोग होता है? (वेरिएंट 29)",
    "options_en": [
      "$lte",
      "Int64",
      "ObjectId",
      "Explain Plan"
    ],
    "options_hi": [
      "$lte",
      "Int64",
      "ObjectId",
      "Explain Plan"
    ],
    "answer_en": "ObjectId",
    "answer_hi": "ObjectId",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which index type supports text search on string content? (variant 29)",
    "question_hi": "कौन-सा index प्रकार string content पर text search का समर्थन करता है? (वेरिएंट 29)",
    "options_en": [
      "insertOne()",
      "Text Index",
      "$regex",
      "db.collection.insertMany()"
    ],
    "options_hi": [
      "insertOne()",
      "Text Index",
      "$regex",
      "db.collection.insertMany()"
    ],
    "answer_en": "Text Index",
    "answer_hi": "Text Index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which aggregation stage filters documents (like WHERE)? (variant 29)",
    "question_hi": "कौन-सा aggregation stage documents को filter करता है (जैसे WHERE)? (वेरिएंट 29)",
    "options_en": [
      "$match",
      "$lte",
      "$limit",
      "Bucketing"
    ],
    "options_hi": [
      "$match",
      "$lte",
      "$limit",
      "Bucketing"
    ],
    "answer_en": "$match",
    "answer_hi": "$match",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which aggregation stage groups documents by a specified identifier? (variant 29)",
    "question_hi": "कौन-सा aggregation stage documents को किसी निर्दिष्ट identifier द्वारा समूहित करता है? (वेरिएंट 29)",
    "options_en": [
      "balancer",
      "Polymorphic Schemas",
      "$group",
      "$push"
    ],
    "options_hi": [
      "balancer",
      "Polymorphic Schemas",
      "$group",
      "$push"
    ],
    "answer_en": "$group",
    "answer_hi": "$group",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which command shows replication status for a replica set? (variant 29)",
    "question_hi": "Replica set के लिए replication status दिखाने वाला कौन-सा command है? (वेरिएंट 29)",
    "options_en": [
      "rs.status()",
      "$or",
      "$skip",
      "deleteMany()"
    ],
    "options_hi": [
      "rs.status()",
      "$or",
      "$skip",
      "deleteMany()"
    ],
    "answer_en": "rs.status()",
    "answer_hi": "rs.status()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which command initiates a new replica set? (variant 29)",
    "question_hi": "नया replica set शुरू करने के लिए कौन-सा command उपयोग किया जाता है? (वेरिएंट 29)",
    "options_en": [
      "Int64",
      "$addToSet",
      "rs.initiate()",
      "updateMany()"
    ],
    "options_hi": [
      "Int64",
      "$addToSet",
      "rs.initiate()",
      "updateMany()"
    ],
    "answer_en": "rs.initiate()",
    "answer_hi": "rs.initiate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which command enables sharding for a database? (variant 29)",
    "question_hi": "किस command से किसी database के लिए sharding सक्षम किया जाता है? (वेरिएंट 29)",
    "options_en": [
      "$setWindowFields",
      "String",
      "$exists",
      "sh.enableSharding()"
    ],
    "options_hi": [
      "$setWindowFields",
      "String",
      "$exists",
      "sh.enableSharding()"
    ],
    "answer_en": "sh.enableSharding()",
    "answer_hi": "sh.enableSharding()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which function starts a client session for transactions? (variant 29)",
    "question_hi": "Transactions के लिए client session शुरू करने के लिए कौन-सा function उपयोग किया जाता है? (वेरिएंट 29)",
    "options_en": [
      "startSession()",
      "mongosh",
      "db.collection.updateOne()",
      "db.currentOp()"
    ],
    "options_hi": [
      "startSession()",
      "mongosh",
      "db.collection.updateOne()",
      "db.currentOp()"
    ],
    "answer_en": "startSession()",
    "answer_hi": "startSession()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method commits a transaction in a session? (variant 29)",
    "question_hi": "सत्र में transaction commit करने के लिए कौन-सा method उपयोग होता है? (वेरिएंट 29)",
    "options_en": [
      "$replaceRoot",
      "Array",
      "session.commitTransaction()",
      "find()"
    ],
    "options_hi": [
      "$replaceRoot",
      "Array",
      "session.commitTransaction()",
      "find()"
    ],
    "answer_en": "session.commitTransaction()",
    "answer_hi": "session.commitTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which tool is used for logical backups (export) of MongoDB data? (variant 29)",
    "question_hi": "MongoDB डेटा के logical backups (export) के लिए कौन-सा टूल उपयोग होता है? (वेरिएंट 29)",
    "options_en": [
      "mongodump",
      "insertOne()",
      "mongorestore",
      "ObjectId()"
    ],
    "options_hi": [
      "mongodump",
      "insertOne()",
      "mongorestore",
      "ObjectId()"
    ],
    "answer_en": "mongodump",
    "answer_hi": "mongodump",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which command restores data from a mongodump archive? (variant 29)",
    "question_hi": "mongodump archive से डेटा restore करने के लिए कौन-सा command उपयोग होता है? (वेरिएंट 29)",
    "options_en": [
      "db.collection.updateOne()",
      "$bucket",
      "mongorestore",
      "Decimal128"
    ],
    "options_hi": [
      "db.collection.updateOne()",
      "$bucket",
      "mongorestore",
      "Decimal128"
    ],
    "answer_en": "mongorestore",
    "answer_hi": "mongorestore",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which operator matches documents that contain the specified field? (variant 29)",
    "question_hi": "कौन-सा operator उन documents से मेल खाता है जिनमें निर्दिष्ट field होता है? (वेरिएंट 29)",
    "options_en": [
      "$setWindowFields",
      "$exists",
      "$replaceRoot",
      "WiredTiger"
    ],
    "options_hi": [
      "$setWindowFields",
      "$exists",
      "$replaceRoot",
      "WiredTiger"
    ],
    "answer_en": "$exists",
    "answer_hi": "$exists",
    "attempted": false,
    "selected": ""
  },
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