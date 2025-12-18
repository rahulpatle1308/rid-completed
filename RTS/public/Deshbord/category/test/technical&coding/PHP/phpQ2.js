const questions = [
 
  {
    "num": 1,
    "question_en": "Which symbol is used to start a single-line comment in PHP?",
    "question_hi": "PHP में single-line टिप्पणी शुरू करने के लिए कौन-सा चिन्ह उपयोग होता है?",
    "options_en": ["//", "/* */", "##", "\\\\"],
    "options_hi": ["//", "/* */", "##", "\\\\"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does PHP stand for?",
    "question_hi": "PHP का पूरा नाम क्या है?",
    "options_en": ["Personal Home Page", "PHP: Hypertext Preprocessor", "Private Hypertext Processor", "Program Hypertext Protocol"],
    "options_hi": ["पर्सनल होम पेज", "PHP: हाइपरटेक्स्ट प्रीप्रोसेसर", "प्राइवेट हाइपरटेक्स्ट प्रोसेसर", "प्रोग्राम हाइपरटेक्स्ट प्रोटोकॉल"],
    "answer_en": "PHP: Hypertext Preprocessor",
    "answer_hi": "PHP: हाइपरटेक्स्ट प्रीप्रोसेसर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to output text in PHP?",
    "question_hi": "PHP में टेक्स्ट आउटपुट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["print()", "echo()", "printf()", "All of the above"],
    "options_hi": ["print()", "echo()", "printf()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "How do you create a constant in PHP?",
    "question_hi": "PHP में कॉन्स्टेंट कैसे बनाते हैं?",
    "options_en": ["const", "define()", "constant()", "set()"],
    "options_hi": ["const", "define()", "constant()", "set()"],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is used for concatenation in PHP?",
    "question_hi": "PHP में concatenation के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    "options_en": [".", "+", "&", "|"],
    "options_hi": [".", "+", "&", "|"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the default file extension for PHP files?",
    "question_hi": "PHP फाइलों का डिफॉल्ट एक्सटेंशन क्या है?",
    "options_en": [".php", ".html", ".xml", ".ph"],
    "options_hi": [".php", ".html", ".xml", ".ph"],
    "answer_en": ".php",
    "answer_hi": ".php",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which superglobal variable holds information about headers, paths, and script locations?",
    "question_hi": "कौन-सा सुपरग्लोबल वेरिएबल हेडर, पाथ और स्क्रिप्ट लोकेशन की जानकारी रखता है?",
    "options_en": ["$_GET", "$_SERVER", "$_ENV", "$_SESSION"],
    "options_hi": ["$_GET", "$_SERVER", "$_ENV", "$_SESSION"],
    "answer_en": "$_SERVER",
    "answer_hi": "$_SERVER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the correct way to start a session in PHP?",
    "question_hi": "PHP में सेशन शुरू करने का सही तरीका क्या है?",
    "options_en": ["session_start()", "start_session()", "begin_session()", "session_begin()"],
    "options_hi": ["session_start()", "start_session()", "begin_session()", "session_begin()"],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function returns the length of a string in PHP?",
    "question_hi": "PHP में स्ट्रिंग की लंबाई कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["strlen()", "count()", "size()", "length()"],
    "options_hi": ["strlen()", "count()", "size()", "length()"],
    "answer_en": "strlen()",
    "answer_hi": "strlen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "How do you declare a variable in PHP?",
    "question_hi": "PHP में वेरिएबल कैसे डिक्लेअर करते हैं?",
    "options_en": ["$variable_name", "var variable_name", "variable variable_name", "let variable_name"],
    "options_hi": ["$variable_name", "var variable_name", "variable variable_name", "let variable_name"],
    "answer_en": "$variable_name",
    "answer_hi": "$variable_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function converts a string to lowercase in PHP?",
    "question_hi": "PHP में स्ट्रिंग को लोअरकेस में कौन-सा फंक्शन कन्वर्ट करता है?",
    "options_en": ["strtolower()", "tolower()", "lowercase()", "str_lower()"],
    "options_hi": ["strtolower()", "tolower()", "lowercase()", "str_lower()"],
    "answer_en": "strtolower()",
    "answer_hi": "strtolower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does isset() function do in PHP?",
    "question_hi": "PHP में isset() फंक्शन क्या करता है?",
    "options_en": ["Checks if variable is set and not null", "Sets a variable", "Checks variable type", "Destroys a variable"],
    "options_hi": ["चेक करता है कि वेरिएबल सेट है और null नहीं", "वेरिएबल सेट करता है", "वेरिएबल टाइप चेक करता है", "वेरिएबल डिलीट करता है"],
    "answer_en": "Checks if variable is set and not null",
    "answer_hi": "चेक करता है कि वेरिएबल सेट है और null नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which loop always executes at least once?",
    "question_hi": "कौन-सा लूप कम से कम एक बार जरूर एक्सीक्यूट होता है?",
    "options_en": ["do...while", "while", "for", "foreach"],
    "options_hi": ["do...while", "while", "for", "foreach"],
    "answer_en": "do...while",
    "answer_hi": "do...while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the correct way to include a file in PHP?",
    "question_hi": "PHP में फाइल इन्क्लूड करने का सही तरीका क्या है?",
    "options_en": ["include 'file.php';", "require 'file.php';", "Both include and require", "import 'file.php';"],
    "options_hi": ["include 'file.php';", "require 'file.php';", "include और require दोनों", "import 'file.php';"],
    "answer_en": "Both include and require",
    "answer_hi": "include और require दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to redirect to another page in PHP?",
    "question_hi": "PHP में दूसरे पेज पर रीडायरेक्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["header()", "redirect()", "location()", "goto()"],
    "options_hi": ["header()", "redirect()", "location()", "goto()"],
    "answer_en": "header()",
    "answer_hi": "header()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the difference between == and === in PHP?",
    "question_hi": "PHP में == और === में क्या अंतर है?",
    "options_en": ["== checks value, === checks value and type", "=== checks value, == checks value and type", "Both are same", "== is for strings, === is for numbers"],
    "options_hi": ["== वैल्यू चेक करता है, === वैल्यू और टाइप चेक करता है", "=== वैल्यू चेक करता है, == वैल्यू और टाइप चेक करता है", "दोनों समान हैं", "== स्ट्रिंग के लिए है, === नंबर के लिए है"],
    "answer_en": "== checks value, === checks value and type",
    "answer_hi": "== वैल्यू चेक करता है, === वैल्यू और टाइप चेक करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function converts a string to an array in PHP?",
    "question_hi": "PHP में स्ट्रिंग को ऐरे में कौन-सा फंक्शन कन्वर्ट करता है?",
    "options_en": ["explode()", "split()", "str_split()", "Both explode() and str_split()"],
    "options_hi": ["explode()", "split()", "str_split()", "explode() और str_split() दोनों"],
    "answer_en": "Both explode() and str_split()",
    "answer_hi": "explode() और str_split() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the unset() function do in PHP?",
    "question_hi": "PHP में unset() फंक्शन क्या करता है?",
    "options_en": ["Destroys a variable", "Sets a variable to null", "Checks if variable exists", "Converts variable to string"],
    "options_hi": ["वेरिएबल डिलीट करता है", "वेरिएबल को null सेट करता है", "चेक करता है कि वेरिएबल exists है", "वेरिएबल को स्ट्रिंग में कन्वर्ट करता है"],
    "answer_en": "Destroys a variable",
    "answer_hi": "वेरिएबल डिलीट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which PHP function is used to get the current date and time?",
    "question_hi": "PHP में करंट डेट और टाइम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["date()", "time()", "datetime()", "now()"],
    "options_hi": ["date()", "time()", "datetime()", "now()"],
    "answer_en": "date()",
    "answer_hi": "date()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "How to create an array in PHP?",
    "question_hi": "PHP में ऐरे कैसे बनाते हैं?",
    "options_en": ["$array = array();", "$array = [];", "Both are correct", "None of the above"],
    "options_hi": ["$array = array();", "$array = [];", "दोनों सही हैं", "इनमें से कोई नहीं"],
    "answer_en": "Both are correct",
    "answer_hi": "दोनों सही हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to check if a variable is an array?",
    "question_hi": "यह चेक करने के लिए कि वेरिएबल ऐरे है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_array()", "array()", "check_array()", "typeof()"],
    "options_hi": ["is_array()", "array()", "check_array()", "typeof()"],
    "answer_en": "is_array()",
    "answer_hi": "is_array()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the count() function do in PHP?",
    "question_hi": "PHP में count() फंक्शन क्या करता है?",
    "options_en": ["Counts elements in an array", "Counts characters in a string", "Counts words in a string", "All of the above"],
    "options_hi": ["ऐरे में एलिमेंट्स काउंट करता है", "स्ट्रिंग में करैक्टर काउंट करता है", "स्ट्रिंग में वर्ड्स काउंट करता है", "उपरोक्त सभी"],
    "answer_en": "Counts elements in an array",
    "answer_hi": "ऐरे में एलिमेंट्स काउंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function sorts an array in descending order?",
    "question_hi": "कौन-सा फंक्शन ऐरे को डिसेंडिंग ऑर्डर में सॉर्ट करता है?",
    "options_en": ["rsort()", "arsort()", "krsort()", "All of the above"],
    "options_hi": ["rsort()", "arsort()", "krsort()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How to get the last element of an array without removing it?",
    "question_hi": "बिना रिमूव किए ऐरे का लास्ट एलिमेंट कैसे प्राप्त करें?",
    "options_en": ["end()", "array_pop()", "last()", "array_end()"],
    "options_hi": ["end()", "array_pop()", "last()", "array_end()"],
    "answer_en": "end()",
    "answer_hi": "end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to merge two or more arrays?",
    "question_hi": "दो या अधिक ऐरे मर्ज करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["array_merge()", "array_combine()", "merge()", "combine()"],
    "options_hi": ["array_merge()", "array_combine()", "merge()", "combine()"],
    "answer_en": "array_merge()",
    "answer_hi": "array_merge()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the $_POST superglobal contain?",
    "question_hi": "$_POST सुपरग्लोबल में क्या होता है?",
    "options_en": ["Data from POST requests", "Data from GET requests", "Session data", "Cookie data"],
    "options_hi": ["POST रिक्वेस्ट से डेटा", "GET रिक्वेस्ट से डेटा", "सेशन डेटा", "कुकी डेटा"],
    "answer_en": "Data from POST requests",
    "answer_hi": "POST रिक्वेस्ट से डेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to send email in PHP?",
    "question_hi": "PHP में ईमेल भेजने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mail()", "sendmail()", "email()", "smtp()"],
    "options_hi": ["mail()", "sendmail()", "email()", "smtp()"],
    "answer_en": "mail()",
    "answer_hi": "mail()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "How to create a cookie in PHP?",
    "question_hi": "PHP में कुकी कैसे बनाते हैं?",
    "options_en": ["setcookie()", "createcookie()", "cookie()", "set_cookie()"],
    "options_hi": ["setcookie()", "createcookie()", "cookie()", "set_cookie()"],
    "answer_en": "setcookie()",
    "answer_hi": "setcookie()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to read a file in PHP?",
    "question_hi": "PHP में फाइल पढ़ने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["file_get_contents()", "readfile()", "fopen()", "All of the above"],
    "options_hi": ["file_get_contents()", "readfile()", "fopen()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does PDO stand for in PHP?",
    "question_hi": "PHP में PDO का पूरा नाम क्या है?",
    "options_en": ["PHP Data Objects", "Personal Data Objects", "PHP Database Objects", "Program Data Objects"],
    "options_hi": ["PHP डेटा ऑब्जेक्ट्स", "पर्सनल डेटा ऑब्जेक्ट्स", "PHP डेटाबेस ऑब्जेक्ट्स", "प्रोग्राम डेटा ऑब्जेक्ट्स"],
    "answer_en": "PHP Data Objects",
    "answer_hi": "PHP डेटा ऑब्जेक्ट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to escape strings in MySQL queries?",
    "question_hi": "MySQL क्वेरीज में स्ट्रिंग एस्केप करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mysqli_real_escape_string()", "escape_string()", "mysql_escape()", "string_escape()"],
    "options_hi": ["mysqli_real_escape_string()", "escape_string()", "mysql_escape()", "string_escape()"],
    "answer_en": "mysqli_real_escape_string()",
    "answer_hi": "mysqli_real_escape_string()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the use of the die() function in PHP?",
    "question_hi": "PHP में die() फंक्शन का उपयोग क्या है?",
    "options_en": ["Outputs message and stops script", "Only outputs message", "Only stops script", "Continues script after message"],
    "options_hi": ["मैसेज आउटपुट करता है और स्क्रिप्ट रोकता है", "सिर्फ मैसेज आउटपुट करता है", "सिर्फ स्क्रिप्ट रोकता है", "मैसेज के बाद स्क्रिप्ट जारी रखता है"],
    "answer_en": "Outputs message and stops script",
    "answer_hi": "मैसेज आउटपुट करता है और स्क्रिप्ट रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which magic constant returns the current line number?",
    "question_hi": "कौन-सा मैजिक कॉन्स्टेंट करंट लाइन नंबर रिटर्न करता है?",
    "options_en": ["__LINE__", "__FILE__", "__DIR__", "__FUNCTION__"],
    "options_hi": ["__LINE__", "__FILE__", "__DIR__", "__FUNCTION__"],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the default method of form submission?",
    "question_hi": "फॉर्म सबमिशन की डिफॉल्ट मेथड क्या है?",
    "options_en": ["GET", "POST", "PUT", "DELETE"],
    "options_hi": ["GET", "POST", "PUT", "DELETE"],
    "answer_en": "GET",
    "answer_hi": "GET",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function returns the current timestamp?",
    "question_hi": "करंट टाइमस्टैम्प कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["time()", "strtotime()", "microtime()", "date()"],
    "options_hi": ["time()", "strtotime()", "microtime()", "date()"],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "How to get the length of an array?",
    "question_hi": "ऐरे की लंबाई कैसे प्राप्त करें?",
    "options_en": ["count()", "sizeof()", "Both count() and sizeof()", "length()"],
    "options_hi": ["count()", "sizeof()", "count() और sizeof() दोनों", "length()"],
    "answer_en": "Both count() and sizeof()",
    "answer_hi": "count() और sizeof() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function converts a string to uppercase?",
    "question_hi": "स्ट्रिंग को अपरकेस में कौन-सा फंक्शन कन्वर्ट करता है?",
    "options_en": ["strtoupper()", "uppercase()", "str_upper()", "toupper()"],
    "options_hi": ["strtoupper()", "uppercase()", "str_upper()", "toupper()"],
    "answer_en": "strtoupper()",
    "answer_hi": "strtoupper()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the use of the implode() function?",
    "question_hi": "implode() फंक्शन का उपयोग क्या है?",
    "options_en": ["Joins array elements into a string", "Splits string into array", "Explodes an array", "Combines arrays"],
    "options_hi": ["ऐरे एलिमेंट्स को स्ट्रिंग में जोड़ता है", "स्ट्रिंग को ऐरे में विभाजित करता है", "ऐरे को एक्सप्लोड करता है", "ऐरे को कॉम्बाइन करता है"],
    "answer_en": "Joins array elements into a string",
    "answer_hi": "ऐरे एलिमेंट्स को स्ट्रिंग में जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function removes whitespace from the beginning and end of a string?",
    "question_hi": "कौन-सा फंक्शन स्ट्रिंग के शुरुआत और अंत से व्हाइटस्पेस हटाता है?",
    "options_en": ["trim()", "ltrim()", "rtrim()", "All of the above"],
    "options_hi": ["trim()", "ltrim()", "rtrim()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the use of the empty() function?",
    "question_hi": "empty() फंक्शन का उपयोग क्या है?",
    "options_en": ["Checks if variable is empty", "Empties a variable", "Checks if variable exists", "Sets variable to empty"],
    "options_hi": ["चेक करता है कि वेरिएबल empty है", "वेरिएबल को empty करता है", "चेक करता है कि वेरिएबल exists है", "वेरिएबल को empty सेट करता है"],
    "answer_en": "Checks if variable is empty",
    "answer_hi": "चेक करता है कि वेरिएबल empty है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to round a number?",
    "question_hi": "नंबर राउंड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["round()", "ceil()", "floor()", "All of the above"],
    "options_hi": ["round()", "ceil()", "floor()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "How to check if a key exists in an array?",
    "question_hi": "ऐरे में की exists है या नहीं, कैसे चेक करें?",
    "options_en": ["array_key_exists()", "key_exists()", "isset()", "All of the above"],
    "options_hi": ["array_key_exists()", "key_exists()", "isset()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function returns a reversed string?",
    "question_hi": "रिवर्स्ड स्ट्रिंग कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["strrev()", "reverse()", "str_reverse()", "rev()"],
    "options_hi": ["strrev()", "reverse()", "str_reverse()", "rev()"],
    "answer_en": "strrev()",
    "answer_hi": "strrev()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "How to convert a string to a number in PHP?",
    "question_hi": "PHP में स्ट्रिंग को नंबर में कैसे कन्वर्ट करें?",
    "options_en": ["(int)", "intval()", "floatval()", "All of the above"],
    "options_hi": ["(int)", "intval()", "floatval()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function generates a random number?",
    "question_hi": "रैंडम नंबर जनरेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["rand()", "mt_rand()", "random_int()", "All of the above"],
    "options_hi": ["rand()", "mt_rand()", "random_int()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the use of the md5() function?",
    "question_hi": "md5() फंक्शन का उपयोग क्या है?",
    "options_en": ["Calculates MD5 hash", "Encrypts data", "Decrypts data", "Compresses data"],
    "options_hi": ["MD5 हैश कैलकुलेट करता है", "डेटा एन्क्रिप्ट करता है", "डेटा डिक्रिप्ट करता है", "डेटा कंप्रेस करता है"],
    "answer_en": "Calculates MD5 hash",
    "answer_hi": "MD5 हैश कैलकुलेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function returns the current directory?",
    "question_hi": "करंट डायरेक्टरी कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["getcwd()", "__DIR__", "dirname(__FILE__)", "All of the above"],
    "options_hi": ["getcwd()", "__DIR__", "dirname(__FILE__)", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How to delete a file in PHP?",
    "question_hi": "PHP में फाइल कैसे डिलीट करें?",
    "options_en": ["unlink()", "delete()", "remove()", "file_delete()"],
    "options_hi": ["unlink()", "delete()", "remove()", "file_delete()"],
    "answer_en": "unlink()",
    "answer_hi": "unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to serialize data?",
    "question_hi": "डेटा सीरियलाइज करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["serialize()", "json_encode()", "Both serialize() and json_encode()", "None of the above"],
    "options_hi": ["serialize()", "json_encode()", "serialize() और json_encode() दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both serialize() and json_encode()",
    "answer_hi": "serialize() और json_encode() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the correct way to end a PHP statement?",
    "question_hi": "PHP स्टेटमेंट एंड करने का सही तरीका क्या है?",
    "options_en": ["Semicolon (;)", "Colon (:)", "Period (.)", "Comma (,)"],
    "options_hi": ["सेमीकॉलन (;)", "कॉलन (:)", "पीरियड (.)", "कॉमा (,)"],
    "answer_en": "Semicolon (;)",
    "answer_hi": "सेमीकॉलन (;)",
    "attempted": false,
    "selected": ""
  }

];


// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};