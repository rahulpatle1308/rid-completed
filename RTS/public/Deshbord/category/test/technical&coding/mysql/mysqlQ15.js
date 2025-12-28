const questions = [
 {
    "num": 1,
    "question_en": "Which data type is appropriate for storing BLOB values?",
    "question_hi": "BLOB मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CREATE TABLE",
      "CONCAT()",
      "BLOB",
      "TRUNCATE"
    ],
    "options_hi": [
      "CREATE TABLE",
      "CONCAT()",
      "BLOB",
      "TRUNCATE"
    ],
    "answer_en": "BLOB",
    "answer_hi": "BLOB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which data type is appropriate for storing DECIMAL(10,2) values?",
    "question_hi": "DECIMAL(10,2) मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "DECIMAL(10,2)",
      "MAX()",
      "DATETIME",
      "CURDATE()"
    ],
    "options_hi": [
      "DECIMAL(10,2)",
      "MAX()",
      "DATETIME",
      "CURDATE()"
    ],
    "answer_en": "DECIMAL(10,2)",
    "answer_hi": "DECIMAL(10,2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which isolation level is 'READ UNCOMMITTED'?",
    "question_hi": "'READ UNCOMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ UNCOMMITTED",
      "BEGIN",
      "RELEASE SAVEPOINT",
      "SERIALIZABLE"
    ],
    "options_hi": [
      "READ UNCOMMITTED",
      "BEGIN",
      "RELEASE SAVEPOINT",
      "SERIALIZABLE"
    ],
    "answer_en": "READ UNCOMMITTED",
    "answer_hi": "READ UNCOMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which isolation level is 'READ COMMITTED'?",
    "question_hi": "'READ COMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ COMMITTED",
      "RELEASE SAVEPOINT",
      "COMMIT",
      "ROLLBACK"
    ],
    "options_hi": [
      "READ COMMITTED",
      "RELEASE SAVEPOINT",
      "COMMIT",
      "ROLLBACK"
    ],
    "answer_en": "READ COMMITTED",
    "answer_hi": "READ COMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which isolation level is 'REPEATABLE READ'?",
    "question_hi": "'REPEATABLE READ' कौन-सा isolation level है?",
    "options_en": [
      "REPEATABLE READ",
      "SAVEPOINT",
      "BEGIN",
      "COMMIT"
    ],
    "options_hi": [
      "REPEATABLE READ",
      "SAVEPOINT",
      "BEGIN",
      "COMMIT"
    ],
    "answer_en": "REPEATABLE READ",
    "answer_hi": "REPEATABLE READ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which isolation level is 'SERIALIZABLE'?",
    "question_hi": "'SERIALIZABLE' कौन-सा isolation level है?",
    "options_en": [
      "SERIALIZABLE",
      "READ COMMITTED",
      "COMMIT",
      "BEGIN"
    ],
    "options_hi": [
      "SERIALIZABLE",
      "READ COMMITTED",
      "COMMIT",
      "BEGIN"
    ],
    "answer_en": "SERIALIZABLE",
    "answer_hi": "SERIALIZABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the role of transaction statement 'BEGIN'?",
    "question_hi": "'BEGIN' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "BEGIN",
      "ALTER TABLE",
      "RELEASE SAVEPOINT",
      "SAVEPOINT"
    ],
    "options_hi": [
      "BEGIN",
      "ALTER TABLE",
      "RELEASE SAVEPOINT",
      "SAVEPOINT"
    ],
    "answer_en": "BEGIN",
    "answer_hi": "BEGIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the role of transaction statement 'COMMIT'?",
    "question_hi": "'COMMIT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "COMMIT",
      "DROP TABLE",
      "SAVEPOINT",
      "RELEASE SAVEPOINT"
    ],
    "options_hi": [
      "COMMIT",
      "DROP TABLE",
      "SAVEPOINT",
      "RELEASE SAVEPOINT"
    ],
    "answer_en": "COMMIT",
    "answer_hi": "COMMIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the role of transaction statement 'ROLLBACK'?",
    "question_hi": "'ROLLBACK' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "ROLLBACK",
      "COMMIT",
      "CREATE INDEX",
      "DELETE"
    ],
    "options_hi": [
      "ROLLBACK",
      "COMMIT",
      "CREATE INDEX",
      "DELETE"
    ],
    "answer_en": "ROLLBACK",
    "answer_hi": "ROLLBACK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the role of transaction statement 'SAVEPOINT'?",
    "question_hi": "'SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "SAVEPOINT",
      "CREATE VIEW",
      "CREATE FUNCTION",
      "SELECT"
    ],
    "options_hi": [
      "SAVEPOINT",
      "CREATE VIEW",
      "CREATE FUNCTION",
      "SELECT"
    ],
    "answer_en": "SAVEPOINT",
    "answer_hi": "SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the role of transaction statement 'RELEASE SAVEPOINT'?",
    "question_hi": "'RELEASE SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "RELEASE SAVEPOINT",
      "ROLLBACK",
      "CREATE VIEW",
      "UPDATE"
    ],
    "options_hi": [
      "RELEASE SAVEPOINT",
      "ROLLBACK",
      "CREATE VIEW",
      "UPDATE"
    ],
    "answer_en": "RELEASE SAVEPOINT",
    "answer_hi": "RELEASE SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does the MySQL command 'EXPLAIN' do?",
    "question_hi": "MySQL कमांड 'EXPLAIN' क्या करता है?",
    "options_en": [
      "EXPLAIN",
      "DESCRIBE",
      "ANALYZE",
      "SELECT"
    ],
    "options_hi": [
      "EXPLAIN",
      "DESCRIBE",
      "ANALYZE",
      "SELECT"
    ],
    "answer_en": "EXPLAIN",
    "answer_hi": "EXPLAIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the MySQL command 'ANALYZE' do?",
    "question_hi": "MySQL कमांड 'ANALYZE' क्या करता है?",
    "options_en": [
      "ANALYZE",
      "SHOW CREATE TABLE",
      "SHOW VARIABLES",
      "DELETE"
    ],
    "options_hi": [
      "ANALYZE",
      "SHOW CREATE TABLE",
      "SHOW VARIABLES",
      "DELETE"
    ],
    "answer_en": "ANALYZE",
    "answer_hi": "ANALYZE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the MySQL command 'OPTIMIZE TABLE' do?",
    "question_hi": "MySQL कमांड 'OPTIMIZE TABLE' क्या करता है?",
    "options_en": [
      "OPTIMIZE TABLE",
      "CREATE VIEW",
      "DELETE",
      "DESCRIBE"
    ],
    "options_hi": [
      "OPTIMIZE TABLE",
      "CREATE VIEW",
      "DELETE",
      "DESCRIBE"
    ],
    "answer_en": "OPTIMIZE TABLE",
    "answer_hi": "OPTIMIZE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does the MySQL command 'FLUSH' do?",
    "question_hi": "MySQL कमांड 'FLUSH' क्या करता है?",
    "options_en": [
      "FLUSH",
      "TRUNCATE",
      "SHOW PROCESSLIST",
      "DROP TABLE"
    ],
    "options_hi": [
      "FLUSH",
      "TRUNCATE",
      "SHOW PROCESSLIST",
      "DROP TABLE"
    ],
    "answer_en": "FLUSH",
    "answer_hi": "FLUSH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does the MySQL command 'SHOW STATUS' do?",
    "question_hi": "MySQL कमांड 'SHOW STATUS' क्या करता है?",
    "options_en": [
      "SHOW STATUS",
      "DROP INDEX",
      "UPDATE",
      "SELECT"
    ],
    "options_hi": [
      "SHOW STATUS",
      "DROP INDEX",
      "UPDATE",
      "SELECT"
    ],
    "answer_en": "SHOW STATUS",
    "answer_hi": "SHOW STATUS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does the MySQL command 'SHOW PROCESSLIST' do?",
    "question_hi": "MySQL कमांड 'SHOW PROCESSLIST' क्या करता है?",
    "options_en": [
      "SHOW PROCESSLIST",
      "DROP INDEX",
      "SHOW STATUS",
      "DROP TABLE"
    ],
    "options_hi": [
      "SHOW PROCESSLIST",
      "DROP INDEX",
      "SHOW STATUS",
      "DROP TABLE"
    ],
    "answer_en": "SHOW PROCESSLIST",
    "answer_hi": "SHOW PROCESSLIST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the MySQL command 'SHOW VARIABLES' do?",
    "question_hi": "MySQL कमांड 'SHOW VARIABLES' क्या करता है?",
    "options_en": [
      "SHOW VARIABLES",
      "CREATE FUNCTION",
      "ANALYZE",
      "SHOW PROCESSLIST"
    ],
    "options_hi": [
      "SHOW VARIABLES",
      "CREATE FUNCTION",
      "ANALYZE",
      "SHOW PROCESSLIST"
    ],
    "answer_en": "SHOW VARIABLES",
    "answer_hi": "SHOW VARIABLES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does the MySQL command 'SHOW CREATE TABLE' do?",
    "question_hi": "MySQL कमांड 'SHOW CREATE TABLE' क्या करता है?",
    "options_en": [
      "SHOW CREATE TABLE",
      "OPTIMIZE TABLE",
      "CREATE VIEW",
      "SHOW PROCESSLIST"
    ],
    "options_hi": [
      "SHOW CREATE TABLE",
      "OPTIMIZE TABLE",
      "CREATE VIEW",
      "SHOW PROCESSLIST"
    ],
    "answer_en": "SHOW CREATE TABLE",
    "answer_hi": "SHOW CREATE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the MySQL command 'DESCRIBE' do?",
    "question_hi": "MySQL कमांड 'DESCRIBE' क्या करता है?",
    "options_en": [
      "DESCRIBE",
      "DROP TABLE",
      "CREATE FUNCTION",
      "REPLACE"
    ],
    "options_hi": [
      "DESCRIBE",
      "DROP TABLE",
      "CREATE FUNCTION",
      "REPLACE"
    ],
    "answer_en": "DESCRIBE",
    "answer_hi": "DESCRIBE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "In MySQL, what does 'Replication' relate to?",
    "question_hi": "MySQL में 'Replication' किससे संबंधित है?",
    "options_en": [
      "Replication",
      "OPTIMIZE TABLE",
      "FLUSH",
      "ANALYZE"
    ],
    "options_hi": [
      "Replication",
      "OPTIMIZE TABLE",
      "FLUSH",
      "ANALYZE"
    ],
    "answer_en": "Replication",
    "answer_hi": "Replication",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "In MySQL, what does 'Binary Log' relate to?",
    "question_hi": "MySQL में 'Binary Log' किससे संबंधित है?",
    "options_en": [
      "Binary Log",
      "ANALYZE",
      "EXPLAIN",
      "Change Data Capture"
    ],
    "options_hi": [
      "Binary Log",
      "ANALYZE",
      "EXPLAIN",
      "Change Data Capture"
    ],
    "answer_en": "Binary Log",
    "answer_hi": "Binary Log",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "In MySQL, what does 'GTID' relate to?",
    "question_hi": "MySQL में 'GTID' किससे संबंधित है?",
    "options_en": [
      "GTID",
      "Replication",
      "Change Data Capture",
      "OPTIMIZE TABLE"
    ],
    "options_hi": [
      "GTID",
      "Replication",
      "Change Data Capture",
      "OPTIMIZE TABLE"
    ],
    "answer_en": "GTID",
    "answer_hi": "GTID",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "In MySQL, what does 'Change Data Capture' relate to?",
    "question_hi": "MySQL में 'Change Data Capture' किससे संबंधित है?",
    "options_en": [
      "Change Data Capture",
      "SHOW PROCESSLIST",
      "EXPLAIN",
      "SHOW CREATE TABLE"
    ],
    "options_hi": [
      "Change Data Capture",
      "SHOW PROCESSLIST",
      "EXPLAIN",
      "SHOW CREATE TABLE"
    ],
    "answer_en": "Change Data Capture",
    "answer_hi": "Change Data Capture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "In MySQL, what does 'Master-Slave' relate to?",
    "question_hi": "MySQL में 'Master-Slave' किससे संबंधित है?",
    "options_en": [
      "Master-Slave",
      "Replication",
      "DESCRIBE",
      "SHOW VARIABLES"
    ],
    "options_hi": [
      "Master-Slave",
      "Replication",
      "DESCRIBE",
      "SHOW VARIABLES"
    ],
    "answer_en": "Master-Slave",
    "answer_hi": "Master-Slave",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "In MySQL, what does 'Primary-Replica' relate to?",
    "question_hi": "MySQL में 'Primary-Replica' किससे संबंधित है?",
    "options_en": [
      "Primary-Replica",
      "EXPLAIN",
      "Master-Slave",
      "SHOW STATUS"
    ],
    "options_hi": [
      "Primary-Replica",
      "EXPLAIN",
      "Master-Slave",
      "SHOW STATUS"
    ],
    "answer_en": "Primary-Replica",
    "answer_hi": "Primary-Replica",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the purpose of the 'GRANT' command in MySQL?",
    "question_hi": "MySQL में 'GRANT' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "GRANT",
      "REPLACE",
      "CREATE PROCEDURE",
      "DELETE"
    ],
    "options_hi": [
      "GRANT",
      "REPLACE",
      "CREATE PROCEDURE",
      "DELETE"
    ],
    "answer_en": "GRANT",
    "answer_hi": "GRANT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'REVOKE' command in MySQL?",
    "question_hi": "MySQL में 'REVOKE' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "REVOKE",
      "CREATE INDEX",
      "DROP TABLE",
      "INSERT"
    ],
    "options_hi": [
      "REVOKE",
      "CREATE INDEX",
      "DROP TABLE",
      "INSERT"
    ],
    "answer_en": "REVOKE",
    "answer_hi": "REVOKE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of the 'CREATE USER' command in MySQL?",
    "question_hi": "MySQL में 'CREATE USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "CREATE USER",
      "SET PASSWORD",
      "DROP TABLE",
      "INSERT"
    ],
    "options_hi": [
      "CREATE USER",
      "SET PASSWORD",
      "DROP TABLE",
      "INSERT"
    ],
    "answer_en": "CREATE USER",
    "answer_hi": "CREATE USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the purpose of the 'DROP USER' command in MySQL?",
    "question_hi": "MySQL में 'DROP USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "DROP USER",
      "CREATE FUNCTION",
      "UPDATE",
      "DELETE"
    ],
    "options_hi": [
      "DROP USER",
      "CREATE FUNCTION",
      "UPDATE",
      "DELETE"
    ],
    "answer_en": "DROP USER",
    "answer_hi": "DROP USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the purpose of the 'SET PASSWORD' command in MySQL?",
    "question_hi": "MySQL में 'SET PASSWORD' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "SET PASSWORD",
      "CREATE USER",
      "GRANT",
      "FLUSH PRIVILEGES"
    ],
    "options_hi": [
      "SET PASSWORD",
      "CREATE USER",
      "GRANT",
      "FLUSH PRIVILEGES"
    ],
    "answer_en": "SET PASSWORD",
    "answer_hi": "SET PASSWORD",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'FLUSH PRIVILEGES' command in MySQL?",
    "question_hi": "MySQL में 'FLUSH PRIVILEGES' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "FLUSH PRIVILEGES",
      "CREATE USER",
      "CREATE TABLE",
      "SELECT"
    ],
    "options_hi": [
      "FLUSH PRIVILEGES",
      "CREATE USER",
      "CREATE TABLE",
      "SELECT"
    ],
    "answer_en": "FLUSH PRIVILEGES",
    "answer_hi": "FLUSH PRIVILEGES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What kind of function is ROW_NUMBER() in SQL?",
    "question_hi": "SQL में ROW_NUMBER() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "ROW_NUMBER()",
      "COALESCE()",
      "DENSE_RANK()",
      "DATE_SUB()"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "COALESCE()",
      "DENSE_RANK()",
      "DATE_SUB()"
    ],
    "answer_en": "ROW_NUMBER()",
    "answer_hi": "ROW_NUMBER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What kind of function is RANK() in SQL?",
    "question_hi": "SQL में RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "RANK()",
      "FIRST_VALUE()",
      "IFNULL()",
      "COUNT()"
    ],
    "options_hi": [
      "RANK()",
      "FIRST_VALUE()",
      "IFNULL()",
      "COUNT()"
    ],
    "answer_en": "RANK()",
    "answer_hi": "RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What kind of function is DENSE_RANK() in SQL?",
    "question_hi": "SQL में DENSE_RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "DENSE_RANK()",
      "MIN()",
      "CONCAT()",
      "GROUP_CONCAT()"
    ],
    "options_hi": [
      "DENSE_RANK()",
      "MIN()",
      "CONCAT()",
      "GROUP_CONCAT()"
    ],
    "answer_en": "DENSE_RANK()",
    "answer_hi": "DENSE_RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What kind of function is NTILE() in SQL?",
    "question_hi": "SQL में NTILE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "NTILE()",
      "COALESCE()",
      "MIN()",
      "UPPER()"
    ],
    "options_hi": [
      "NTILE()",
      "COALESCE()",
      "MIN()",
      "UPPER()"
    ],
    "answer_en": "NTILE()",
    "answer_hi": "NTILE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What kind of function is LAG() in SQL?",
    "question_hi": "SQL में LAG() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAG()",
      "IFNULL()",
      "JSON_OBJECT()",
      "UPPER()"
    ],
    "options_hi": [
      "LAG()",
      "IFNULL()",
      "JSON_OBJECT()",
      "UPPER()"
    ],
    "answer_en": "LAG()",
    "answer_hi": "LAG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What kind of function is LEAD() in SQL?",
    "question_hi": "SQL में LEAD() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LEAD()",
      "NTILE()",
      "COUNT()",
      "FIRST_VALUE()"
    ],
    "options_hi": [
      "LEAD()",
      "NTILE()",
      "COUNT()",
      "FIRST_VALUE()"
    ],
    "answer_en": "LEAD()",
    "answer_hi": "LEAD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What kind of function is FIRST_VALUE() in SQL?",
    "question_hi": "SQL में FIRST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "FIRST_VALUE()",
      "JSON_ARRAY()",
      "LEAD()",
      "MAX()"
    ],
    "options_hi": [
      "FIRST_VALUE()",
      "JSON_ARRAY()",
      "LEAD()",
      "MAX()"
    ],
    "answer_en": "FIRST_VALUE()",
    "answer_hi": "FIRST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What kind of function is LAST_VALUE() in SQL?",
    "question_hi": "SQL में LAST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAST_VALUE()",
      "FIRST_VALUE()",
      "CONCAT()",
      "LAG()"
    ],
    "options_hi": [
      "LAST_VALUE()",
      "FIRST_VALUE()",
      "CONCAT()",
      "LAG()"
    ],
    "answer_en": "LAST_VALUE()",
    "answer_hi": "LAST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which SQL statement is used to perform the operation: SELECT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: SELECT?",
    "options_en": [
      "TRUNCATE",
      "ON",
      "SELECT",
      "CONCAT()"
    ],
    "options_hi": [
      "TRUNCATE",
      "ON",
      "SELECT",
      "CONCAT()"
    ],
    "answer_en": "SELECT",
    "answer_hi": "SELECT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which SQL statement is used to perform the operation: INSERT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: INSERT?",
    "options_en": [
      "CONCAT()",
      "DROP TABLE",
      "JOIN",
      "INSERT"
    ],
    "options_hi": [
      "CONCAT()",
      "DROP TABLE",
      "JOIN",
      "INSERT"
    ],
    "answer_en": "INSERT",
    "answer_hi": "INSERT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which SQL statement is used to perform the operation: UPDATE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: UPDATE?",
    "options_en": [
      "DROP INDEX",
      "UPDATE",
      "WHERE",
      "VARCHAR(255)"
    ],
    "options_hi": [
      "DROP INDEX",
      "UPDATE",
      "WHERE",
      "VARCHAR(255)"
    ],
    "answer_en": "UPDATE",
    "answer_hi": "UPDATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which SQL statement is used to perform the operation: DELETE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DELETE?",
    "options_en": [
      "JSON_ARRAY()",
      "DELETE",
      "TIMESTAMP",
      "DATEDIFF()"
    ],
    "options_hi": [
      "JSON_ARRAY()",
      "DELETE",
      "TIMESTAMP",
      "DATEDIFF()"
    ],
    "answer_en": "DELETE",
    "answer_hi": "DELETE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which SQL statement is used to perform the operation: TRUNCATE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: TRUNCATE?",
    "options_en": [
      "INT",
      "DROP INDEX",
      "TRUNCATE",
      "WHERE"
    ],
    "options_hi": [
      "INT",
      "DROP INDEX",
      "TRUNCATE",
      "WHERE"
    ],
    "answer_en": "TRUNCATE",
    "answer_hi": "TRUNCATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which SQL statement is used to perform the operation: REPLACE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: REPLACE?",
    "options_en": [
      "REPLACE",
      "CREATE PROCEDURE",
      "ORDER BY",
      "DROP INDEX"
    ],
    "options_hi": [
      "REPLACE",
      "CREATE PROCEDURE",
      "ORDER BY",
      "DROP INDEX"
    ],
    "answer_en": "REPLACE",
    "answer_hi": "REPLACE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which SQL statement is used to perform the operation: CREATE TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE TABLE?",
    "options_en": [
      "IFNULL()",
      "UNION",
      "CURDATE()",
      "CREATE TABLE"
    ],
    "options_hi": [
      "IFNULL()",
      "UNION",
      "CURDATE()",
      "CREATE TABLE"
    ],
    "answer_en": "CREATE TABLE",
    "answer_hi": "CREATE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which SQL statement is used to perform the operation: ALTER TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: ALTER TABLE?",
    "options_en": [
      "CURDATE()",
      "DATE_ADD()",
      "ALTER TABLE",
      "USING"
    ],
    "options_hi": [
      "CURDATE()",
      "DATE_ADD()",
      "ALTER TABLE",
      "USING"
    ],
    "answer_en": "ALTER TABLE",
    "answer_hi": "ALTER TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which SQL statement is used to perform the operation: DROP TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DROP TABLE?",
    "options_en": [
      "JSON_ARRAY()",
      "BLOB",
      "ON",
      "DROP TABLE"
    ],
    "options_hi": [
      "JSON_ARRAY()",
      "BLOB",
      "ON",
      "DROP TABLE"
    ],
    "answer_en": "DROP TABLE",
    "answer_hi": "DROP TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which SQL statement is used to perform the operation: CREATE INDEX?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE INDEX?",
    "options_en": [
      "TRUNCATE",
      "UPDATE",
      "DATE",
      "CREATE INDEX"
    ],
    "options_hi": [
      "TRUNCATE",
      "UPDATE",
      "DATE",
      "CREATE INDEX"
    ],
    "answer_en": "CREATE INDEX",
    "answer_hi": "CREATE INDEX",
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