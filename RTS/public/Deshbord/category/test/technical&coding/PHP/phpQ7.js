const questions = [
  {
    "num": 1,
    "question_en": "Which function is used to create a directory in PHP?",
    "question_hi": "PHP में डायरेक्टरी बनाने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["mkdir()", "create_dir()", "dir_make()", "directory()"],
    "options_hi": ["mkdir()", "create_dir()", "dir_make()", "directory()"],
    "answer_en": "mkdir()",
    "answer_hi": "mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'array_values()' function return for an associative array?",
    "question_hi": "असोसिएटिव ऐरे के लिए 'array_values()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Indexed array of values", "Numerically indexed array", "Both A and B", "Only values"],
    "options_hi": ["वैल्यूज का इंडेक्स्ड ऐरे", "न्यूमेरिकली इंडेक्स्ड ऐरे", "A और B दोनों", "सिर्फ वैल्यूज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to remove a directory in PHP?",
    "question_hi": "PHP में डायरेक्टरी रिमूव करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["rmdir()", "remove_dir()", "dir_remove()", "delete_dir()"],
    "options_hi": ["rmdir()", "remove_dir()", "dir_remove()", "delete_dir()"],
    "answer_en": "rmdir()",
    "answer_hi": "rmdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'arsort()' function?",
    "question_hi": "'arsort()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Sort array in descending order maintaining index association", "Reverse sort with keys", "Both A and B", "Associative reverse sort"],
    "options_hi": ["इंडेक्स एसोसिएशन मेंटेन करते हुए ऐरे को डिसेंडिंग ऑर्डर में सॉर्ट करता है", "कीज़ के साथ रिवर्स सॉर्ट", "A और B दोनों", "असोसिएटिव रिवर्स सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to change directory in PHP?",
    "question_hi": "PHP में डायरेक्टरी बदलने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["chdir()", "change_dir()", "dir_change()", "cd()"],
    "options_hi": ["chdir()", "change_dir()", "dir_change()", "cd()"],
    "answer_en": "chdir()",
    "answer_hi": "chdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'asort()' function do?",
    "question_hi": "'asort()' फंक्शन क्या करता है?",
    "options_en": ["Sort array in ascending order maintaining index association", "Associative sort", "Both A and B", "Sort with keys"],
    "options_hi": ["इंडेक्स एसोसिएशन मेंटेन करते हुए ऐरे को एसेंडिंग ऑर्डर में सॉर्ट करता है", "असोसिएटिव सॉर्ट", "A और B दोनों", "कीज़ के साथ सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to get the current directory contents?",
    "question_hi": "करंट डायरेक्टरी कंटेंट्स प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["scandir()", "dir()", "readdir()", "All of the above"],
    "options_hi": ["scandir()", "dir()", "readdir()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'compact()' function?",
    "question_hi": "'compact()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Creates array containing variables and their values", "Compacts variables into array", "Both A and B", "Variable to array"],
    "options_hi": ["वेरिएबल्स और उनकी वैल्यूज वाला ऐरे बनाता है", "वेरिएबल्स को ऐरे में कॉम्पैक्ट करता है", "A और B दोनों", "वेरिएबल से ऐरे"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to check if a directory exists?",
    "question_hi": "चेक करने के लिए कि डायरेक्टरी exists है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_dir()", "file_exists() for directories", "Both A and B", "dir_exists()"],
    "options_hi": ["is_dir()", "डायरेक्टरीज के लिए file_exists()", "A और B दोनों", "dir_exists()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'count()' function return for multidimensional arrays?",
    "question_hi": "मल्टीडायमेंशनल ऐरे के लिए 'count()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Number of elements in first dimension", "Can use COUNT_RECURSIVE flag", "Both A and B", "Total elements with flag"],
    "options_hi": ["पहले डायमेंशन में एलिमेंट्स की संख्या", "COUNT_RECURSIVE फ्लैग का उपयोग कर सकते हैं", "A और B दोनों", "फ्लैग के साथ टोटल एलिमेंट्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to get the current user ID?",
    "question_hi": "करंट यूजर ID प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["getmyuid()", "posix_getuid()", "Both getmyuid() and posix_getuid()", "user_id()"],
    "options_hi": ["getmyuid()", "posix_getuid()", "getmyuid() और posix_getuid() दोनों", "user_id()"],
    "answer_en": "Both getmyuid() and posix_getuid()",
    "answer_hi": "getmyuid() और posix_getuid() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'current()' function?",
    "question_hi": "'current()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns current element in array", "Gets value of array's internal pointer", "Both A and B", "Current array element"],
    "options_hi": ["ऐरे में करंट एलिमेंट रिटर्न करता है", "ऐरे के इंटरनल पॉइंटर की वैल्यू प्राप्त करता है", "A और B दोनों", "करंट ऐरे एलिमेंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to get the current group ID?",
    "question_hi": "करंट ग्रुप ID प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["getmygid()", "posix_getgid()", "Both getmygid() and posix_getgid()", "group_id()"],
    "options_hi": ["getmygid()", "posix_getgid()", "getmygid() और posix_getgid() दोनों", "group_id()"],
    "answer_en": "Both getmygid() and posix_getgid()",
    "answer_hi": "getmygid() और posix_getgid() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'each()' function return?",
    "question_hi": "'each()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Current key and value pair from array", "Array with key and value", "Both A and B", "Key-value pair"],
    "options_hi": ["ऐरे से करंट की और वैल्यू पेयर", "की और वैल्यू के साथ ऐरे", "A और B दोनों", "की-वैल्यू पेयर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to get the current inode of file?",
    "question_hi": "फाइल का करंट inode प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["fileinode()", "stat()['ino']", "Both fileinode() and stat()", "inode()"],
    "options_hi": ["fileinode()", "stat()['ino']", "fileinode() और stat() दोनों", "inode()"],
    "answer_en": "Both fileinode() and stat()",
    "answer_hi": "fileinode() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the purpose of the 'end()' function?",
    "question_hi": "'end()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Sets internal pointer to last element", "Returns last element", "Both A and B", "Goes to array end"],
    "options_hi": ["इंटरनल पॉइंटर को लास्ट एलिमेंट पर सेट करता है", "लास्ट एलिमेंट रिटर्न करता है", "A और B दोनों", "ऐरे के अंत में जाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to get file permissions?",
    "question_hi": "फाइल परमिशन प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["fileperms()", "stat()['mode']", "Both fileperms() and stat()", "perms()"],
    "options_hi": ["fileperms()", "stat()['mode']", "fileperms() और stat() दोनों", "perms()"],
    "answer_en": "Both fileperms() and stat()",
    "answer_hi": "fileperms() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'extract()' function do?",
    "question_hi": "'extract()' फंक्शन क्या करता है?",
    "options_en": ["Imports variables from array into symbol table", "Creates variables from array", "Both A and B", "Array to variables"],
    "options_hi": ["ऐरे से वेरिएबल्स को सिंबल टेबल में इम्पोर्ट करता है", "ऐरे से वेरिएबल्स बनाता है", "A और B दोनों", "ऐरे से वेरिएबल्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to get file owner?",
    "question_hi": "फाइल ओनर प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["fileowner()", "stat()['uid']", "Both fileowner() and stat()", "owner()"],
    "options_hi": ["fileowner()", "stat()['uid']", "fileowner() और stat() दोनों", "owner()"],
    "answer_en": "Both fileowner() and stat()",
    "answer_hi": "fileowner() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'in_array()' function's third parameter?",
    "question_hi": "'in_array()' फंक्शन के तीसरे पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Strict comparison", "Type checking", "Both A and B", "Exact match"],
    "options_hi": ["स्ट्रिक्ट तुलना", "टाइप चेकिंग", "A और B दोनों", "एक्जैक्ट मैच"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to get file group?",
    "question_hi": "फाइल ग्रुप प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["filegroup()", "stat()['gid']", "Both filegroup() and stat()", "group()"],
    "options_hi": ["filegroup()", "stat()['gid']", "filegroup() और stat() दोनों", "group()"],
    "answer_en": "Both filegroup() and stat()",
    "answer_hi": "filegroup() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'key()' function return?",
    "question_hi": "'key()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Key of current array element", "Current element's key", "Both A and B", "Array key"],
    "options_hi": ["करंट ऐरे एलिमेंट की की", "करंट एलिमेंट की की", "A और B दोनों", "ऐरे की"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to get file access time?",
    "question_hi": "फाइल एक्सेस टाइम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["fileatime()", "stat()['atime']", "Both fileatime() and stat()", "access_time()"],
    "options_hi": ["fileatime()", "stat()['atime']", "fileatime() और stat() दोनों", "access_time()"],
    "answer_en": "Both fileatime() and stat()",
    "answer_hi": "fileatime() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'krsort()' function?",
    "question_hi": "'krsort()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Sort array by keys in descending order", "Reverse key sort", "Both A and B", "Key reverse sort"],
    "options_hi": ["कीज़ द्वारा ऐरे को डिसेंडिंग ऑर्डर में सॉर्ट करता है", "रिवर्स की सॉर्ट", "A और B दोनों", "की रिवर्स सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to get file modification time?",
    "question_hi": "फाइल मॉडिफिकेशन टाइम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["filemtime()", "stat()['mtime']", "Both filemtime() and stat()", "mod_time()"],
    "options_hi": ["filemtime()", "stat()['mtime']", "filemtime() और stat() दोनों", "mod_time()"],
    "answer_en": "Both filemtime() and stat()",
    "answer_hi": "filemtime() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'ksort()' function do?",
    "question_hi": "'ksort()' फंक्शन क्या करता है?",
    "options_en": ["Sort array by keys in ascending order", "Key sort", "Both A and B", "Sort by keys"],
    "options_hi": ["कीज़ द्वारा ऐरे को एसेंडिंग ऑर्डर में सॉर्ट करता है", "की सॉर्ट", "A और B दोनों", "कीज़ द्वारा सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to get file change time?",
    "question_hi": "फाइल चेंज टाइम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["filectime()", "stat()['ctime']", "Both filectime() and stat()", "change_time()"],
    "options_hi": ["filectime()", "stat()['ctime']", "filectime() और stat() दोनों", "change_time()"],
    "answer_en": "Both filectime() and stat()",
    "answer_hi": "filectime() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'natcasesort()' function?",
    "question_hi": "'natcasesort()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Case-insensitive natural order sort", "Natural sort ignoring case", "Both A and B", "Case-insensitive natural sort"],
    "options_hi": ["केस-इनसेंसिटिव नेचुरल ऑर्डर सॉर्ट", "केस को इग्नोर करते हुए नेचुरल सॉर्ट", "A और B दोनों", "केस-इनसेंसिटिव नेचुरल सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to get file type?",
    "question_hi": "फाइल टाइप प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["filetype()", "stat()['type']", "Both filetype() and stat()", "type()"],
    "options_hi": ["filetype()", "stat()['type']", "filetype() और stat() दोनों", "type()"],
    "answer_en": "Both filetype() and stat()",
    "answer_hi": "filetype() और stat() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'natsort()' function do?",
    "question_hi": "'natsort()' फंक्शन क्या करता है?",
    "options_en": ["Sorts array using natural order algorithm", "Natural sorting", "Both A and B", "Human readable sort"],
    "options_hi": ["नेचुरल ऑर्डर एल्गोरिदम का उपयोग करके ऐरे सॉर्ट करता है", "नेचुरल सॉर्टिंग", "A और B दोनों", "ह्यूमन रीडेबल सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to check if file is readable?",
    "question_hi": "चेक करने के लिए कि फाइल रीडेबल है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_readable()", "readable()", "can_read()", "file_readable()"],
    "options_hi": ["is_readable()", "readable()", "can_read()", "file_readable()"],
    "answer_en": "is_readable()",
    "answer_hi": "is_readable()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'next()' function?",
    "question_hi": "'next()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Advances internal array pointer", "Returns next element", "Both A and B", "Moves to next"],
    "options_hi": ["इंटरनल ऐरे पॉइंटर को एडवांस करता है", "अगला एलिमेंट रिटर्न करता है", "A और B दोनों", "अगले पर जाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to check if file is writable?",
    "question_hi": "चेक करने के लिए कि फाइल राइटेबल है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_writable()", "is_writeable()", "Both is_writable() and is_writeable()", "writable()"],
    "options_hi": ["is_writable()", "is_writeable()", "is_writable() और is_writeable() दोनों", "writable()"],
    "answer_en": "Both is_writable() and is_writeable()",
    "answer_hi": "is_writable() और is_writeable() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'pos()' function do?",
    "question_hi": "'pos()' फंक्शन क्या करता है?",
    "options_en": ["Alias of current()", "Returns current array element", "Both A and B", "Current position"],
    "options_hi": ["current() का अलियास", "करंट ऐरे एलिमेंट रिटर्न करता है", "A और B दोनों", "करंट पोजीशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to check if file is executable?",
    "question_hi": "चेक करने के लिए कि फाइल एक्जीक्यूटेबल है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_executable()", "executable()", "can_execute()", "file_executable()"],
    "options_hi": ["is_executable()", "executable()", "can_execute()", "file_executable()"],
    "answer_en": "is_executable()",
    "answer_hi": "is_executable()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'prev()' function?",
    "question_hi": "'prev()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Rewinds internal array pointer", "Returns previous element", "Both A and B", "Moves to previous"],
    "options_hi": ["इंटरनल ऐरे पॉइंटर को रिवाइंड करता है", "पिछला एलिमेंट रिटर्न करता है", "A और B दोनों", "पिछले पर जाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to check if file is uploaded?",
    "question_hi": "चेक करने के लिए कि फाइल अपलोडेड है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_uploaded_file()", "uploaded()", "is_upload()", "file_uploaded()"],
    "options_hi": ["is_uploaded_file()", "uploaded()", "is_upload()", "file_uploaded()"],
    "answer_en": "is_uploaded_file()",
    "answer_hi": "is_uploaded_file()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'range()' function with character parameters do?",
    "question_hi": "करैक्टर पैरामीटर्स के साथ 'range()' फंक्शन क्या करता है?",
    "options_en": ["Creates array containing character range", "Character sequence array", "Both A and B", "Letter range"],
    "options_hi": ["करैक्टर रेंज वाला ऐरे बनाता है", "करैक्टर सीक्वेंस ऐरे", "A और B दोनों", "लेटर रेंज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to move uploaded file?",
    "question_hi": "अपलोडेड फाइल मूव करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["move_uploaded_file()", "upload_move()", "move_file()", "uploaded_move()"],
    "options_hi": ["move_uploaded_file()", "upload_move()", "move_file()", "uploaded_move()"],
    "answer_en": "move_uploaded_file()",
    "answer_hi": "move_uploaded_file()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'reset()' function?",
    "question_hi": "'reset()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Sets internal pointer to first element", "Returns first element", "Both A and B", "Resets array"],
    "options_hi": ["इंटरनल पॉइंटर को पहले एलिमेंट पर सेट करता है", "पहला एलिमेंट रिटर्न करता है", "A और B दोनों", "ऐरे रीसेट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to copy file?",
    "question_hi": "फाइल कॉपी करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["copy()", "file_copy()", "cp()", "duplicate()"],
    "options_hi": ["copy()", "file_copy()", "cp()", "duplicate()"],
    "answer_en": "copy()",
    "answer_hi": "copy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'rsort()' function do?",
    "question_hi": "'rsort()' फंक्शन क्या करता है?",
    "options_en": ["Sorts array in descending order", "Reverse sort", "Both A and B", "Descending sort"],
    "options_hi": ["ऐरे को डिसेंडिंग ऑर्डर में सॉर्ट करता है", "रिवर्स सॉर्ट", "A और B दोनों", "डिसेंडिंग सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to rename file?",
    "question_hi": "फाइल रीनेम करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["rename()", "file_rename()", "mv()", "ren()"],
    "options_hi": ["rename()", "file_rename()", "mv()", "ren()"],
    "answer_en": "rename()",
    "answer_hi": "rename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'shuffle()' function?",
    "question_hi": "'shuffle()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Shuffles array randomly", "Randomizes order", "Both A and B", "Random shuffle"],
    "options_hi": ["ऐरे को रैंडमली शफल करता है", "ऑर्डर रैंडमाइज करता है", "A और B दोनों", "रैंडम शफल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to touch file (update timestamps)?",
    "question_hi": "फाइल टच करने (टाइमस्टैम्प्स अपडेट करने) के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["touch()", "file_touch()", "update_time()", "stamp()"],
    "options_hi": ["touch()", "file_touch()", "update_time()", "stamp()"],
    "answer_en": "touch()",
    "answer_hi": "touch()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'sizeof()' function do?",
    "question_hi": "'sizeof()' फंक्शन क्या करता है?",
    "options_en": ["Alias of count()", "Returns number of elements", "Both A and B", "Size of array"],
    "options_hi": ["count() का अलियास", "एलिमेंट्स की संख्या रिटर्न करता है", "A और B दोनों", "ऐरे का साइज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to change file group?",
    "question_hi": "फाइल ग्रुप बदलने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["chgrp()", "change_group()", "file_group()", "group_change()"],
    "options_hi": ["chgrp()", "change_group()", "file_group()", "group_change()"],
    "answer_en": "chgrp()",
    "answer_hi": "chgrp()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'sort()' function?",
    "question_hi": "'sort()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Sorts array in ascending order", "Ascending sort", "Both A and B", "Regular sort"],
    "options_hi": ["ऐरे को एसेंडिंग ऑर्डर में सॉर्ट करता है", "एसेंडिंग सॉर्ट", "A और B दोनों", "रेगुलर सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to change file owner?",
    "question_hi": "फाइल ओनर बदलने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["chown()", "change_owner()", "file_owner()", "owner_change()"],
    "options_hi": ["chown()", "change_owner()", "file_owner()", "owner_change()"],
    "answer_en": "chown()",
    "answer_hi": "chown()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'uasort()' function do?",
    "question_hi": "'uasort()' फंक्शन क्या करता है?",
    "options_en": ["Sorts array with user function maintaining index association", "User-defined sort with keys", "Both A and B", "Associative user sort"],
    "options_hi": ["इंडेक्स एसोसिएशन मेंटेन करते हुए यूजर फंक्शन के साथ ऐरे सॉर्ट करता है", "कीज़ के साथ यूजर-डिफाइंड सॉर्ट", "A और B दोनों", "असोसिएटिव यूजर सॉर्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
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