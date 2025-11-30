const questions = [
 {
    num: 1,
    question_en: "Which selector selects all elements of a specific type?",
    question_hi: "कौन-सा सेलेक्टर किसी विशिष्ट प्रकार के सभी एलिमेंट्स को सेलेक्ट करता है?",
    options_en: ["Class selector", "ID selector", "Type selector", "Universal selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर", "यूनिवर्सल सेलेक्टर"],
    answer_en: "Type selector",
    answer_hi: "टाइप सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which selector targets an element with a specific id?",
    question_hi: "कौन-सा सेलेक्टर किसी एलिमेंट को उसकी विशिष्ट आईडी से टारगेट करता है?",
    options_en: ["Class selector", "ID selector", "Type selector", "Attribute selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर", "एट्रिब्यूट सेलेक्टर"],
    answer_en: "ID selector",
    answer_hi: "आईडी सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which selector is used to select all elements?",
    question_hi: "सभी एलिमेंट्स को सेलेक्ट करने के लिए कौन-सा सेलेक्टर इस्तेमाल होता है?",
    options_en: ["Universal selector", "Class selector", "ID selector", "Type selector"],
    options_hi: ["यूनिवर्सल सेलेक्टर", "क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर"],
    answer_en: "Universal selector",
    answer_hi: "यूनिवर्सल सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What symbol is used for class selectors in CSS?",
    question_hi: "CSS में क्लास सेलेक्टर्स के लिए कौन-सा सिंबल इस्तेमाल होता है?",
    options_en: [". (dot)", "# (hash)", "* (asterisk)", "> (greater than)"],
    options_hi: [". (डॉट)", "# (हैश)", "* (एस्टरिस्क)", "> (ग्रेटर दैन)"],
    answer_en: ". (dot)",
    answer_hi: ". (डॉट)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What symbol is used for ID selectors in CSS?",
    question_hi: "CSS में आईडी सेलेक्टर्स के लिए कौन-सा सिंबल इस्तेमाल होता है?",
    options_en: [". (dot)", "# (hash)", "* (asterisk)", "> (greater than)"],
    options_hi: [". (डॉट)", "# (हैश)", "* (एस्टरिस्क)", "> (ग्रेटर दैन)"],
    answer_en: "# (hash)",
    answer_hi: "# (हैश)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which selector selects elements based on an attribute value?",
    question_hi: "कौन-सा सेलेक्टर किसी एट्रिब्यूट के मान के आधार पर एलिमेंट्स को सेलेक्ट करता है?",
    options_en: ["Class selector", "ID selector", "Attribute selector", "Type selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "एट्रिब्यूट सेलेक्टर", "टाइप सेलेक्टर"],
    answer_en: "Attribute selector",
    answer_hi: "एट्रिब्यूट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which selector selects only the first child element?",
    question_hi: "कौन-सा सेलेक्टर केवल पहले चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":first-child", ":last-child", ":nth-child", ":only-child"],
    options_hi: [":first-child", ":last-child", ":nth-child", ":only-child"],
    answer_en: ":first-child",
    answer_hi: ":first-child",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which selector selects all elements that are direct children of a specified element?",
    question_hi: "कौन-सा सेलेक्टर किसी निर्दिष्ट एलिमेंट के डायरेक्ट चाइल्ड को सेलेक्ट करता है?",
    options_en: [">", " ", "+", "~"],
    options_hi: [">", " ", "+", "~"],
    answer_en: ">",
    answer_hi: ">",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which selector matches elements that are siblings?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जो सिबलिंग्स हैं?",
    options_en: ["+", "~", ">", " "],
    options_hi: ["+", "~", ">", " "],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which selector selects elements that are the last child of their parent?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो अपने पैरेंट के लास्ट चाइल्ड हैं?",
    options_en: [":last-child", ":first-child", ":nth-child", ":only-child"],
    options_hi: [":last-child", ":first-child", ":nth-child", ":only-child"],
    answer_en: ":last-child",
    answer_hi: ":last-child",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which selector selects elements that have a specific class and type?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनकी एक विशेष क्लास और टाइप हो?",
    options_en: ["div.classname", ".classname", "#id", "div#id"],
    options_hi: ["div.classname", ".classname", "#id", "div#id"],
    answer_en: "div.classname",
    answer_hi: "div.classname",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which pseudo-class selector matches when an element is being hovered?",
    question_hi: "कौन-सा प्यूरडो-क्लास सेलेक्टर तब मैच करता है जब किसी एलिमेंट पर माउस होवर हो रहा हो?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: [":hover", ":active", ":focus", ":visited"],
    answer_en: ":hover",
    answer_hi: ":hover",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which selector selects elements that are checked (like checkboxes)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो चेक्ड होते हैं (जैसे चेकबॉक्स)?",
    options_en: [":checked", ":selected", ":enabled", ":disabled"],
    options_hi: [":checked", ":selected", ":enabled", ":disabled"],
    answer_en: ":checked",
    answer_hi: ":checked",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which selector selects elements that are disabled?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो डिसेबल्ड होते हैं?",
    options_en: [":disabled", ":enabled", ":checked", ":focus"],
    options_hi: [":disabled", ":enabled", ":checked", ":focus"],
    answer_en: ":disabled",
    answer_hi: ":disabled",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which selector selects elements with a specific attribute regardless of its value?",
    question_hi: "कौन-सा सेलेक्टर किसी विशेष एट्रिब्यूट वाले एलिमेंट्स को उनके मान की परवाह किए बिना सेलेक्ट करता है?",
    options_en: ["[attr]", "[attr=value]", "[attr~=value]", "[attr|=value]"],
    options_hi: ["[attr]", "[attr=value]", "[attr~=value]", "[attr|=value]"],
    answer_en: "[attr]",
    answer_hi: "[attr]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which selector selects elements whose attribute value contains a specified word?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट शब्द को शामिल करता है?",
    options_en: ["[attr~=value]", "[attr=value]", "[attr|=value]", "[attr^=value]"],
    options_hi: ["[attr~=value]", "[attr=value]", "[attr|=value]", "[attr^=value]"],
    answer_en: "[attr~=value]",
    answer_hi: "[attr~=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which selector selects elements whose attribute value begins with a specified value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट मान से शुरू होता है?",
    options_en: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr^=value]",
    answer_hi: "[attr^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which selector selects elements whose attribute value ends with a specified value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट मान पर समाप्त होता है?",
    options_en: ["[attr$=value]", "[attr^=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr$=value]", "[attr^=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr$=value]",
    answer_hi: "[attr$=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which selector selects elements whose attribute value contains a specified substring?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट सबस्ट्रिंग को शामिल करता है?",
    options_en: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    options_hi: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    answer_en: "[attr*=value]",
    answer_hi: "[attr*=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which pseudo-class selector selects elements when they receive focus?",
    question_hi: "कौन-सा प्यूरडो-क्लास सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जब वे फोकस प्राप्त करते हैं?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: [":focus", ":hover", ":active", ":visited"],
    answer_en: ":focus",
    answer_hi: ":focus",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which selector is used to select the nth child element?",
    question_hi: "कौन-सा सेलेक्टर nth चाइल्ड एलिमेंट को सेलेक्ट करने के लिए इस्तेमाल होता है?",
    options_en: [":nth-child(n)", ":first-child", ":last-child", ":only-child"],
    options_hi: [":nth-child(n)", ":first-child", ":last-child", ":only-child"],
    answer_en: ":nth-child(n)",
    answer_hi: ":nth-child(n)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which selector selects elements that are the only child of their parent?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो अपने पैरेंट के केवल एकमात्र चाइल्ड हैं?",
    options_en: [":only-child", ":first-child", ":last-child", ":nth-child"],
    options_hi: [":only-child", ":first-child", ":last-child", ":nth-child"],
    answer_en: ":only-child",
    answer_hi: ":only-child",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which selector selects an element when it is active (being clicked)?",
    question_hi: "कौन-सा सेलेक्टर तब एलिमेंट को सेलेक्ट करता है जब वह एक्टिव (क्लिक किया जा रहा हो) हो?",
    options_en: [":active", ":hover", ":focus", ":visited"],
    options_hi: [":active", ":hover", ":focus", ":visited"],
    answer_en: ":active",
    answer_hi: ":active",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which selector selects elements that have been visited (like links)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो विजिटेड (जैसे लिंक) हो चुके हों?",
    options_en: [":visited", ":link", ":hover", ":focus"],
    options_hi: [":visited", ":link", ":hover", ":focus"],
    answer_en: ":visited",
    answer_hi: ":visited",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which selector selects elements that are enabled?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो सक्षम (enabled) हैं?",
    options_en: [":enabled", ":disabled", ":checked", ":focus"],
    options_hi: [":enabled", ":disabled", ":checked", ":focus"],
    answer_en: ":enabled",
    answer_hi: ":enabled",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which selector targets all elements inside a specified element?",
    question_hi: "कौन-सा सेलेक्टर किसी निर्दिष्ट एलिमेंट के अंदर के सभी एलिमेंट्स को टारगेट करता है?",
    options_en: ["Descendant selector", "Child selector", "Adjacent sibling selector", "General sibling selector"],
    options_hi: ["डिसेंडेंट सेलेक्टर", "चाइल्ड सेलेक्टर", "एडजेसेंट सिबलिंग सेलेक्टर", "जनरल सिबलिंग सेलेक्टर"],
    answer_en: "Descendant selector",
    answer_hi: "डिसेंडेंट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which selector selects an element immediately preceded by a specified sibling?",
    question_hi: "कौन-सा सेलेक्टर उस एलिमेंट को सेलेक्ट करता है जो किसी निर्दिष्ट सिबलिंग से तुरंत पहले आता है?",
    options_en: ["Adjacent sibling selector (+)", "General sibling selector (~)", "Child selector (>)", "Descendant selector (space)"],
    options_hi: ["एडजेसेंट सिबलिंग सेलेक्टर (+)", "जनरल सिबलिंग सेलेक्टर (~)", "चाइल्ड सेलेक्टर (>)", "डिसेंडेंट सेलेक्टर (space)"],
    answer_en: "Adjacent sibling selector (+)",
    answer_hi: "एडजेसेंट सिबलिंग सेलेक्टर (+)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which selector is used to select elements that are siblings of a specified element?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो किसी निर्दिष्ट एलिमेंट के सिबलिंग्स हों?",
    options_en: ["General sibling selector (~)", "Adjacent sibling selector (+)", "Child selector (>)", "Type selector"],
    options_hi: ["जनरल सिबलिंग सेलेक्टर (~)", "एडजेसेंट सिबलिंग सेलेक्टर (+)", "चाइल्ड सेलेक्टर (>)", "टाइप सेलेक्टर"],
    answer_en: "General sibling selector (~)",
    answer_hi: "जनरल सिबलिंग सेलेक्टर (~)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which selector targets elements not represented by a selector?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को टारगेट करता है जो किसी सेलेक्टर से मैच नहीं करते?",
    options_en: [":not(selector)", ":only-child", ":first-child", ":last-child"],
    options_hi: [":not(selector)", ":only-child", ":first-child", ":last-child"],
    answer_en: ":not(selector)",
    answer_hi: ":not(selector)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which selector selects every even child element?",
    question_hi: "कौन-सा सेलेक्टर हर दूसरे (even) चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":nth-child(even)", ":nth-child(odd)", ":first-child", ":last-child"],
    options_hi: [":nth-child(even)", ":nth-child(odd)", ":first-child", ":last-child"],
    answer_en: ":nth-child(even)",
    answer_hi: ":nth-child(even)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which selector selects every odd child element?",
    question_hi: "कौन-सा सेलेक्टर हर विषम (odd) चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":nth-child(odd)", ":nth-child(even)", ":first-child", ":last-child"],
    options_hi: [":nth-child(odd)", ":nth-child(even)", ":first-child", ":last-child"],
    answer_en: ":nth-child(odd)",
    answer_hi: ":nth-child(odd)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which selector selects the first element of its type among its siblings?",
    question_hi: "कौन-सा सेलेक्टर अपने सिबलिंग्स में अपने प्रकार का पहला एलिमेंट सेलेक्ट करता है?",
    options_en: [":first-of-type", ":last-of-type", ":nth-of-type(n)", ":only-of-type"],
    options_hi: [":first-of-type", ":last-of-type", ":nth-of-type(n)", ":only-of-type"],
    answer_en: ":first-of-type",
    answer_hi: ":first-of-type",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which selector selects the last element of its type among its siblings?",
    question_hi: "कौन-सा सेलेक्टर अपने सिबलिंग्स में अपने प्रकार का आखिरी एलिमेंट सेलेक्ट करता है?",
    options_en: [":last-of-type", ":first-of-type", ":nth-of-type(n)", ":only-of-type"],
    options_hi: [":last-of-type", ":first-of-type", ":nth-of-type(n)", ":only-of-type"],
    answer_en: ":last-of-type",
    answer_hi: ":last-of-type",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which selector selects elements that are empty (have no children)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके अंदर कोई चाइल्ड न हो?",
    options_en: [":empty", ":blank", ":null", ":void"],
    options_hi: [":empty", ":blank", ":null", ":void"],
    answer_en: ":empty",
    answer_hi: ":empty",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which selector matches elements based on their language attribute?",
    question_hi: "कौन-सा सेलेक्टर एलिमेंट्स को उनके भाषा एट्रिब्यूट के आधार पर मैच करता है?",
    options_en: [":lang()", ":lang", ":language", ":lang-select"],
    options_hi: [":lang()", ":lang", ":language", ":lang-select"],
    answer_en: ":lang()",
    answer_hi: ":lang()",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which selector selects elements that are target of a URL fragment?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो URL फ्रैगमेंट के टारगेट होते हैं?",
    options_en: [":target", ":focus", ":active", ":visited"],
    options_hi: [":target", ":focus", ":active", ":visited"],
    answer_en: ":target",
    answer_hi: ":target",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which selector selects elements that are currently being edited?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो वर्तमान में एडिट किए जा रहे हैं?",
    options_en: [":read-write", ":read-only", ":edit", ":editable"],
    options_hi: [":read-write", ":read-only", ":edit", ":editable"],
    answer_en: ":read-write",
    answer_hi: ":read-write",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which selector selects elements that are read-only?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो रीड-ओनली हैं?",
    options_en: [":read-only", ":read-write", ":disabled", ":enabled"],
    options_hi: [":read-only", ":read-write", ":disabled", ":enabled"],
    answer_en: ":read-only",
    answer_hi: ":read-only",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which selector selects form elements that are invalid?",
    question_hi: "कौन-सा सेलेक्टर उन फॉर्म एलिमेंट्स को सेलेक्ट करता है जो इनवैलिड हैं?",
    options_en: [":invalid", ":valid", ":checked", ":disabled"],
    options_hi: [":invalid", ":valid", ":checked", ":disabled"],
    answer_en: ":invalid",
    answer_hi: ":invalid",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which selector selects form elements that are valid?",
    question_hi: "कौन-सा सेलेक्टर उन फॉर्म एलिमेंट्स को सेलेक्ट करता है जो वैध हैं?",
    options_en: [":valid", ":invalid", ":checked", ":disabled"],
    options_hi: [":valid", ":invalid", ":checked", ":disabled"],
    answer_en: ":valid",
    answer_hi: ":valid",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which selector selects elements that are in focus within a form?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो फॉर्म के अंदर फोकस में हैं?",
    options_en: [":focus-within", ":focus", ":active", ":hover"],
    options_hi: [":focus-within", ":focus", ":active", ":hover"],
    answer_en: ":focus-within",
    answer_hi: ":focus-within",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which selector selects elements based on their enabled state?",
    question_hi: "कौन-सा सेलेक्टर उनके सक्षम (enabled) स्थिति के आधार पर एलिमेंट्स को सेलेक्ट करता है?",
    options_en: [":enabled", ":disabled", ":checked", ":focus"],
    options_hi: [":enabled", ":disabled", ":checked", ":focus"],
    answer_en: ":enabled",
    answer_hi: ":enabled",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which selector selects elements that are being hovered over?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिन पर माउस होवर हो रहा है?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: [":hover", ":active", ":focus", ":visited"],
    answer_en: ":hover",
    answer_hi: ":hover",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which selector selects elements after they have been visited (like links)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो विजिटेड हो चुके हों (जैसे लिंक)?",
    options_en: [":visited", ":link", ":hover", ":focus"],
    options_hi: [":visited", ":link", ":hover", ":focus"],
    answer_en: ":visited",
    answer_hi: ":visited",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which selector selects elements that have been targeted by the URL fragment?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिन्हें URL फ्रैगमेंट ने टारगेट किया है?",
    options_en: [":target", ":focus", ":active", ":visited"],
    options_hi: [":target", ":focus", ":active", ":visited"],
    answer_en: ":target",
    answer_hi: ":target",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which selector matches elements with a specific attribute starting with a specific value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जिनके एट्रिब्यूट का मान किसी विशेष मान से शुरू होता है?",
    options_en: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr^=value]",
    answer_hi: "[attr^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which selector matches elements with an attribute value containing a specified substring?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट सबस्ट्रिंग को शामिल करता है?",
    options_en: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    options_hi: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    answer_en: "[attr*=value]",
    answer_hi: "[attr*=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which selector selects elements with a class name that starts with a specific string?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनकी क्लास नेम किसी विशेष स्ट्रिंग से शुरू होती है?",
    options_en: [".classname^=value", "[class^=value]", ":class^=value", "#class^=value"],
    options_hi: [".classname^=value", "[class^=value]", ":class^=value", "#class^=value"],
    answer_en: "[class^=value]",
    answer_hi: "[class^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which selector is used to select elements with multiple classes?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके पास एक से अधिक क्लासेस होती हैं?",
    options_en: [".class1.class2", ".class1 #class2", "#class1.class2", "div.class1.class2"],
    options_hi: [".class1.class2", ".class1 #class2", "#class1.class2", "div.class1.class2"],
    answer_en: ".class1.class2",
    answer_hi: ".class1.class2",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which selector targets elements inside another element using a space?",
    question_hi: "कौन-सा सेलेक्टर किसी एलिमेंट के अंदर के एलिमेंट्स को सेलेक्ट करने के लिए स्पेस का उपयोग करता है?",
    options_en: ["Descendant selector (space)", "Child selector (>)", "Adjacent sibling selector (+)", "General sibling selector (~)"],
    options_hi: ["डिसेंडेंट सेलेक्टर (स्पेस)", "चाइल्ड सेलेक्टर (>)", "एडजेसेंट सिबलिंग सेलेक्टर (+)", "जनरल सिबलिंग सेलेक्टर (~)"],
    answer_en: "Descendant selector (space)",
    answer_hi: "डिसेंडेंट सेलेक्टर (स्पेस)",
    attempted: false,
    selected: ""
  }
  // Continue adding more questions 51 to 100
];

// 


let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; // ❌ undefined error fix

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