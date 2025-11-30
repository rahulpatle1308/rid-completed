const questions = [
  {
    num: 1,
    question_en: "How do you define a CSS custom property (variable)?",
    question_hi: "CSS कस्टम प्रॉपर्टी (वैरिएबल) को कैसे परिभाषित करते हैं?",
    options_en: [
      "Using -- followed by the variable name inside a selector",
      "Using $ followed by the variable name",
      "Using @variable followed by the name",
      "Using var() function directly"
    ],
    options_hi: [
      "सेलेक्टर के अंदर -- के साथ वेरिएबल नाम लिखकर",
      "$ के साथ वेरिएबल नाम लिखकर",
      "@variable के साथ नाम लिखकर",
      "सीधे var() फंक्शन का उपयोग करके"
    ],
    answer_en: "Using -- followed by the variable name inside a selector",
    answer_hi: "सेलेक्टर के अंदर -- के साथ वेरिएबल नाम लिखकर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "How do you access the value of a CSS variable?",
    question_hi: "CSS वेरिएबल का मान कैसे प्राप्त करते हैं?",
    options_en: [
      "Using var() function",
      "Using getVariable() function",
      "Directly writing the variable name",
      "Using $ sign before variable name"
    ],
    options_hi: [
      "var() फंक्शन का उपयोग करके",
      "getVariable() फंक्शन का उपयोग करके",
      "सीधा वेरिएबल नाम लिखकर",
      "$ साइन के साथ वेरिएबल नाम लिखकर"
    ],
    answer_en: "Using var() function",
    answer_hi: "var() फंक्शन का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Where are CSS variables typically declared?",
    question_hi: "CSS वेरिएबल आमतौर पर कहाँ घोषित किए जाते हैं?",
    options_en: [
      ":root selector",
      "body selector",
      "html selector",
      "head section"
    ],
    options_hi: [
      ":root सेलेक्टर में",
      "body सेलेक्टर में",
      "html सेलेक्टर में",
      "head सेक्शन में"
    ],
    answer_en: ":root selector",
    answer_hi: ":root सेलेक्टर में",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the syntax for declaring a CSS variable named --main-color with the value red?",
    question_hi: "CSS वेरिएबल --main-color को रेड मान के साथ कैसे घोषित करते हैं?",
    options_en: [
      "--main-color: red;",
      "var(--main-color: red);",
      "$main-color: red;",
      "main-color: red;"
    ],
    options_hi: [
      "--main-color: red;",
      "var(--main-color: red);",
      "$main-color: red;",
      "main-color: red;"
    ],
    answer_en: "--main-color: red;",
    answer_hi: "--main-color: red;",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Can CSS variables inherit values from parent elements?",
    question_hi: "क्या CSS वेरिएबल पैरेंट एलिमेंट से मान विरासत में ले सकते हैं?",
    options_en: [
      "Yes",
      "No",
      "Only with !important",
      "Only inside media queries"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "!important के साथ ही",
      "सिर्फ मीडिया क्वेरी के अंदर"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS function is used to provide a fallback value for a variable?",
    question_hi: "CSS में fallback value देने के लिए कौन सा फंक्शन उपयोग किया जाता है?",
    options_en: [
      "var()",
      "fallback()",
      "default()",
      "value()"
    ],
    options_hi: [
      "var()",
      "fallback()",
      "default()",
      "value()"
    ],
    answer_en: "var()",
    answer_hi: "var()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What happens if a CSS variable is not defined but used?",
    question_hi: "अगर CSS वेरिएबल परिभाषित नहीं है लेकिन उपयोग किया गया है तो क्या होगा?",
    options_en: [
      "It will be ignored or fallback value will be used",
      "The page will break",
      "The browser will show an error",
      "The variable is automatically set to black"
    ],
    options_hi: [
      "इसे अनदेखा किया जाएगा या fallback value उपयोग होगी",
      "पेज क्रैश हो जाएगा",
      "ब्राउज़र error दिखाएगा",
      "वेरिएबल ऑटोमैटिक ब्लैक हो जाएगा"
    ],
    answer_en: "It will be ignored or fallback value will be used",
    answer_hi: "इसे अनदेखा किया जाएगा या fallback value उपयोग होगी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Can CSS variables hold any type of value?",
    question_hi: "क्या CSS वेरिएबल किसी भी प्रकार का मान रख सकते हैं?",
    options_en: [
      "Yes, any valid CSS value",
      "No, only colors",
      "No, only numbers",
      "Only strings"
    ],
    options_hi: [
      "हाँ, कोई भी वैध CSS मान",
      "नहीं, केवल रंग",
      "नहीं, केवल संख्याएं",
      "केवल स्ट्रिंग्स"
    ],
    answer_en: "Yes, any valid CSS value",
    answer_hi: "हाँ, कोई भी वैध CSS मान",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How do you override a CSS variable value in a specific selector?",
    question_hi: "किसी विशेष सेलेक्टर में CSS वेरिएबल का मान कैसे ओवरराइड करते हैं?",
    options_en: [
      "Declare the variable with a new value inside that selector",
      "Use !important with the variable",
      "Use a different variable name",
      "Cannot override variables"
    ],
    options_hi: [
      "उस सेलेक्टर के अंदर नए मान के साथ वेरिएबल घोषित करें",
      "!important का उपयोग करें",
      "अलग वेरिएबल नाम उपयोग करें",
      "वेरिएबल ओवरराइड नहीं कर सकते"
    ],
    answer_en: "Declare the variable with a new value inside that selector",
    answer_hi: "उस सेलेक्टर के अंदर नए मान के साथ वेरिएबल घोषित करें",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Are CSS variables case sensitive?",
    question_hi: "क्या CSS वेरिएबल केस सेंसिटिव होते हैं?",
    options_en: [
      "Yes",
      "No",
      "Depends on browser",
      "Only in selectors"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "ब्राउज़र पर निर्भर करता है",
      "केवल सेलेक्टर्स में"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which pseudo-class is commonly used with CSS variables for theming?",
    question_hi: "थीमिंग के लिए CSS वेरिएबल के साथ कौन सा pseudo-class आमतौर पर उपयोग होता है?",
    options_en: [
      ":root",
      ":hover",
      ":active",
      ":focus"
    ],
    options_hi: [
      ":root",
      ":hover",
      ":active",
      ":focus"
    ],
    answer_en: ":root",
    answer_hi: ":root",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Can CSS variables be used inside media queries?",
    question_hi: "क्या CSS वेरिएबल मीडिया क्वेरी के अंदर उपयोग किए जा सकते हैं?",
    options_en: [
      "Yes",
      "No",
      "Only in some browsers",
      "Only with JavaScript"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "कुछ ब्राउज़र में ही",
      "केवल जावास्क्रिप्ट के साथ"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How can you provide a fallback value using CSS variables?",
    question_hi: "CSS वेरिएबल में fallback मान कैसे प्रदान करें?",
    options_en: [
      "var(--variable, fallback-value)",
      "var(fallback-value, --variable)",
      "--variable: fallback-value;",
      "Using default() function"
    ],
    options_hi: [
      "var(--variable, fallback-value)",
      "var(fallback-value, --variable)",
      "--variable: fallback-value;",
      "default() फंक्शन का उपयोग"
    ],
    answer_en: "var(--variable, fallback-value)",
    answer_hi: "var(--variable, fallback-value)",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which CSS feature introduced custom properties (variables)?",
    question_hi: "किस CSS फीचर ने कस्टम प्रॉपर्टीज़ (वेरिएबल) को पेश किया?",
    options_en: [
      "CSS Variables Level 1",
      "CSS Selectors Level 3",
      "CSS Animations",
      "CSS Grid"
    ],
    options_hi: [
      "CSS Variables Level 1",
      "CSS Selectors Level 3",
      "CSS Animations",
      "CSS Grid"
    ],
    answer_en: "CSS Variables Level 1",
    answer_hi: "CSS Variables Level 1",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property can be used with CSS variables for color theming?",
    question_hi: "रंग थीमिंग के लिए CSS वेरिएबल के साथ कौन सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: [
      "color",
      "font-size",
      "margin",
      "border-style"
    ],
    options_hi: [
      "color",
      "font-size",
      "margin",
      "border-style"
    ],
    answer_en: "color",
    answer_hi: "color",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Can CSS variables be manipulated using JavaScript?",
    question_hi: "क्या CSS वेरिएबल को जावास्क्रिप्ट से बदला जा सकता है?",
    options_en: [
      "Yes",
      "No",
      "Only with jQuery",
      "Only in some browsers"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "केवल jQuery से",
      "कुछ ब्राउज़र में ही"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which method is used in JavaScript to change a CSS variable's value?",
    question_hi: "जावास्क्रिप्ट में CSS वेरिएबल का मान बदलने के लिए कौन सा मेथड उपयोग होता है?",
    options_en: [
      "setProperty()",
      "changeVariable()",
      "setVariable()",
      "updateProperty()"
    ],
    options_hi: [
      "setProperty()",
      "changeVariable()",
      "setVariable()",
      "updateProperty()"
    ],
    answer_en: "setProperty()",
    answer_hi: "setProperty()",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "How do you remove a CSS variable from an element using JavaScript?",
    question_hi: "जावास्क्रिप्ट से CSS वेरिएबल को एलिमेंट से कैसे हटाते हैं?",
    options_en: [
      "removeProperty()",
      "deleteProperty()",
      "unsetVariable()",
      "clearProperty()"
    ],
    options_hi: [
      "removeProperty()",
      "deleteProperty()",
      "unsetVariable()",
      "clearProperty()"
    ],
    answer_en: "removeProperty()",
    answer_hi: "removeProperty()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS variables syntax is valid?",
    question_hi: "निम्नलिखित में से कौन सी CSS वेरिएबल सिंटैक्स सही है?",
    options_en: [
      "--my-var: 10px;",
      "-my-var: 10px;",
      "my-var: 10px;",
      "$my-var: 10px;"
    ],
    options_hi: [
      "--my-var: 10px;",
      "-my-var: 10px;",
      "my-var: 10px;",
      "$my-var: 10px;"
    ],
    answer_en: "--my-var: 10px;",
    answer_hi: "--my-var: 10px;",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Can CSS variables be used to define font sizes?",
    question_hi: "क्या CSS वेरिएबल का उपयोग फॉन्ट साइज को परिभाषित करने के लिए किया जा सकता है?",
    options_en: [
      "Yes",
      "No",
      "Only for responsive fonts",
      "Only with !important"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "सिर्फ रिस्पॉन्सिव फॉन्ट के लिए",
      "!important के साथ ही"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Are CSS variables supported in all modern browsers?",
    question_hi: "क्या CSS वेरिएबल सभी आधुनिक ब्राउज़रों में समर्थित हैं?",
    options_en: [
      "Yes",
      "No",
      "Only in Chrome and Firefox",
      "Only in desktop browsers"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "सिर्फ Chrome और Firefox में",
      "सिर्फ डेस्कटॉप ब्राउज़र में"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Can CSS variables store URLs as values?",
    question_hi: "क्या CSS वेरिएबल URLs को मान के रूप में रख सकते हैं?",
    options_en: [
      "Yes",
      "No",
      "Only base64 encoded URLs",
      "Only local URLs"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "सिर्फ base64 एन्कोडेड URLs",
      "सिर्फ लोकल URLs"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Can CSS variables be animated using CSS transitions?",
    question_hi: "क्या CSS वेरिएबल्स को CSS ट्रांजिशन्स से एनिमेट किया जा सकता है?",
    options_en: [
      "No",
      "Yes",
      "Only with JavaScript",
      "Only in Firefox"
    ],
    options_hi: [
      "नहीं",
      "हाँ",
      "केवल जावास्क्रिप्ट से",
      "सिर्फ Firefox में"
    ],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the default scope of CSS variables?",
    question_hi: "CSS वेरिएबल्स का डिफ़ॉल्ट स्कोप क्या होता है?",
    options_en: [
      "Scoped to the element they are declared on and its descendants",
      "Global to the entire document",
      "Only available inside :root",
      "Scoped to JavaScript only"
    ],
    options_hi: [
      "जिस एलिमेंट पर घोषित होते हैं और उनके बच्चों तक सीमित",
      "पूरे डॉक्यूमेंट में ग्लोबल",
      ":root के अंदर ही उपलब्ध",
      "केवल जावास्क्रिप्ट के लिए सीमित"
    ],
    answer_en: "Scoped to the element they are declared on and its descendants",
    answer_hi: "जिस एलिमेंट पर घोषित होते हैं और उनके बच्चों तक सीमित",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the primary benefit of using CSS variables?",
    question_hi: "CSS वेरिएबल्स का मुख्य लाभ क्या है?",
    options_en: [
      "Easier to maintain and update values globally",
      "Faster page loading",
      "Better SEO",
      "More animations"
    ],
    options_hi: [
      "मानों को ग्लोबली मेंटेन और अपडेट करना आसान",
      "पेज तेजी से लोड होता है",
      "बेहतर SEO",
      "अधिक एनिमेशन"
    ],
    answer_en: "Easier to maintain and update values globally",
    answer_hi: "मानों को ग्लोबली मेंटेन और अपडेट करना आसान",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property is used to control the spacing between lines of text?",
    question_hi: "पाठ की लाइनों के बीच की दूरी को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग होता है?",
    options_en: [
      "line-height",
      "letter-spacing",
      "word-spacing",
      "text-indent"
    ],
    options_hi: [
      "line-height",
      "letter-spacing",
      "word-spacing",
      "text-indent"
    ],
    answer_en: "line-height",
    answer_hi: "line-height",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the default display value of a <div> element?",
    question_hi: "<div> एलिमेंट का डिफ़ॉल्ट display वैल्यू क्या है?",
    options_en: [
      "block",
      "inline",
      "inline-block",
      "none"
    ],
    options_hi: [
      "block",
      "inline",
      "inline-block",
      "none"
    ],
    answer_en: "block",
    answer_hi: "block",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "How can you apply a style to all elements of a specific class in CSS?",
    question_hi: "CSS में किसी विशिष्ट क्लास के सभी एलिमेंट्स को स्टाइल कैसे लागू करते हैं?",
    options_en: [
      "Using a dot (.) followed by the class name",
      "Using a hash (#) followed by the class name",
      "Using the element name",
      "Using the @class directive"
    ],
    options_hi: [
      "डॉट (.) के साथ क्लास नाम लिखकर",
      "हैश (#) के साथ क्लास नाम लिखकर",
      "एलिमेंट नाम का उपयोग करके",
      "@class निर्देश का उपयोग करके"
    ],
    answer_en: "Using a dot (.) followed by the class name",
    answer_hi: "डॉट (.) के साथ क्लास नाम लिखकर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property is used to change the font of an element?",
    question_hi: "किस प्रॉपर्टी का उपयोग एलिमेंट के फॉन्ट को बदलने के लिए किया जाता है?",
    options_en: [
      "font-family",
      "font-style",
      "font-weight",
      "font-variant"
    ],
    options_hi: [
      "font-family",
      "font-style",
      "font-weight",
      "font-variant"
    ],
    answer_en: "font-family",
    answer_hi: "font-family",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What does the CSS property 'z-index' control?",
    question_hi: "CSS प्रॉपर्टी 'z-index' क्या नियंत्रित करती है?",
    options_en: [
      "Stacking order of elements",
      "Opacity of an element",
      "Font size of text",
      "Positioning type"
    ],
    options_hi: [
      "एलिमेंट्स के स्टैकिंग ऑर्डर को",
      "एलिमेंट की अपारदर्शिता को",
      "पाठ के फॉन्ट साइज को",
      "पोजिशनिंग टाइप को"
    ],
    answer_en: "Stacking order of elements",
    answer_hi: "एलिमेंट्स के स्टैकिंग ऑर्डर को",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property is used to add space inside an element’s border?",
    question_hi: "किस प्रॉपर्टी का उपयोग एलिमेंट की बॉर्डर के अंदर स्पेस जोड़ने के लिए किया जाता है?",
    options_en: [
      "padding",
      "margin",
      "border-spacing",
      "gap"
    ],
    options_hi: [
      "padding",
      "margin",
      "border-spacing",
      "gap"
    ],
    answer_en: "padding",
    answer_hi: "padding",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How do you make a list with bullets in CSS?",
    question_hi: "CSS में बुलेट के साथ लिस्ट कैसे बनाते हैं?",
    options_en: [
      "list-style-type: disc;",
      "list-type: bullet;",
      "list-decoration: bullet;",
      "list-style: bullet;"
    ],
    options_hi: [
      "list-style-type: disc;",
      "list-type: bullet;",
      "list-decoration: bullet;",
      "list-style: bullet;"
    ],
    answer_en: "list-style-type: disc;",
    answer_hi: "list-style-type: disc;",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the visibility of an element but keeps the space it occupies?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है लेकिन उसकी जगह को बरकरार रखती है?",
    options_en: [
      "visibility",
      "display",
      "opacity",
      "z-index"
    ],
    options_hi: [
      "visibility",
      "display",
      "opacity",
      "z-index"
    ],
    answer_en: "visibility",
    answer_hi: "visibility",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What does the CSS 'float' property do?",
    question_hi: "CSS 'float' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Moves an element to the left or right, allowing text to wrap around it",
      "Positions an element absolutely",
      "Hides an element",
      "Changes the background color"
    ],
    options_hi: [
      "एक एलिमेंट को बाईं या दाईं तरफ ले जाकर टेक्स्ट को उसके चारों ओर लपेटने की अनुमति देती है",
      "एक एलिमेंट को absolute पोजिशन पर रखती है",
      "एक एलिमेंट को छुपाती है",
      "बैकग्राउंड कलर बदलती है"
    ],
    answer_en: "Moves an element to the left or right, allowing text to wrap around it",
    answer_hi: "एक एलिमेंट को बाईं या दाईं तरफ ले जाकर टेक्स्ट को उसके चारों ओर लपेटने की अनुमति देती है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "How do you select an element with id 'header' in CSS?",
    question_hi: "CSS में 'header' आईडी वाले एलिमेंट को कैसे सेलेक्ट करते हैं?",
    options_en: [
      "#header",
      ".header",
      "header",
      "*header"
    ],
    options_hi: [
      "#header",
      ".header",
      "header",
      "*header"
    ],
    answer_en: "#header",
    answer_hi: "#header",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property is used to make text bold?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट को बोल्ड बनाने के लिए उपयोग होती है?",
    options_en: [
      "font-weight",
      "font-style",
      "font-variant",
      "text-transform"
    ],
    options_hi: [
      "font-weight",
      "font-style",
      "font-variant",
      "text-transform"
    ],
    answer_en: "font-weight",
    answer_hi: "font-weight",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property adds space outside an element's border?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की बॉर्डर के बाहर स्पेस जोड़ती है?",
    options_en: [
      "margin",
      "padding",
      "border-spacing",
      "gap"
    ],
    options_hi: [
      "margin",
      "padding",
      "border-spacing",
      "gap"
    ],
    answer_en: "margin",
    answer_hi: "margin",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the use of the CSS 'opacity' property?",
    question_hi: "CSS 'opacity' प्रॉपर्टी का उपयोग क्या है?",
    options_en: [
      "To make an element transparent",
      "To change font size",
      "To change element position",
      "To add border"
    ],
    options_hi: [
      "एक एलिमेंट को पारदर्शी बनाने के लिए",
      "फॉन्ट साइज बदलने के लिए",
      "एलिमेंट की पोजिशन बदलने के लिए",
      "बॉर्डर जोड़ने के लिए"
    ],
    answer_en: "To make an element transparent",
    answer_hi: "एक एलिमेंट को पारदर्शी बनाने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property is used to control the size of an element’s font?",
    question_hi: "कौन-सी प्रॉपर्टी का उपयोग एलिमेंट के फॉन्ट के साइज को नियंत्रित करने के लिए किया जाता है?",
    options_en: [
      "font-size",
      "font-weight",
      "font-family",
      "text-size"
    ],
    options_hi: [
      "font-size",
      "font-weight",
      "font-family",
      "text-size"
    ],
    answer_en: "font-size",
    answer_hi: "font-size",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What does the CSS 'position: fixed;' do?",
    question_hi: "CSS में 'position: fixed;' क्या करता है?",
    options_en: [
      "Fixes the element relative to the viewport and it doesn't move on scroll",
      "Positions element relative to its parent",
      "Positions element absolutely on the page",
      "Makes element inline"
    ],
    options_hi: [
      "एलिमेंट को viewport के सापेक्ष फिक्स करता है और स्क्रॉल करने पर नहीं चलता",
      "एलिमेंट को उसके पैरेंट के सापेक्ष पोजिशन करता है",
      "एलिमेंट को पेज पर absolute पोजिशन देता है",
      "एलिमेंट को inline बनाता है"
    ],
    answer_en: "Fixes the element relative to the viewport and it doesn't move on scroll",
    answer_hi: "एलिमेंट को viewport के सापेक्ष फिक्स करता है और स्क्रॉल करने पर नहीं चलता",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property is used to change the background color of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट का बैकग्राउंड कलर बदलने के लिए उपयोग होती है?",
    options_en: [
      "background-color",
      "color",
      "background-image",
      "border-color"
    ],
    options_hi: [
      "background-color",
      "color",
      "background-image",
      "border-color"
    ],
    answer_en: "background-color",
    answer_hi: "background-color",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "How do you make an element take up the full width of its container?",
    question_hi: "किसी एलिमेंट को उसके कंटेनर की पूरी चौड़ाई लेने के लिए कैसे बनाते हैं?",
    options_en: [
      "width: 100%;",
      "width: auto;",
      "width: fit-content;",
      "width: max-content;"
    ],
    options_hi: [
      "width: 100%;",
      "width: auto;",
      "width: fit-content;",
      "width: max-content;"
    ],
    answer_en: "width: 100%;",
    answer_hi: "width: 100%;",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the horizontal alignment of text within an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के अंदर टेक्स्ट की क्षैतिज संरेखण को नियंत्रित करती है?",
    options_en: [
      "text-align",
      "vertical-align",
      "align-items",
      "justify-content"
    ],
    options_hi: [
      "text-align",
      "vertical-align",
      "align-items",
      "justify-content"
    ],
    answer_en: "text-align",
    answer_hi: "text-align",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the use of the CSS 'overflow' property?",
    question_hi: "CSS 'overflow' प्रॉपर्टी का उपयोग क्या है?",
    options_en: [
      "To control what happens when content overflows an element's box",
      "To control background color",
      "To set font size",
      "To set margin"
    ],
    options_hi: [
      "जब कंटेंट एलिमेंट के बॉक्स से बाहर निकलता है तो उसे नियंत्रित करने के लिए",
      "बैकग्राउंड कलर नियंत्रित करने के लिए",
      "फॉन्ट साइज सेट करने के लिए",
      "मार्जिन सेट करने के लिए"
    ],
    answer_en: "To control what happens when content overflows an element's box",
    answer_hi: "जब कंटेंट एलिमेंट के बॉक्स से बाहर निकलता है तो उसे नियंत्रित करने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which CSS unit is relative to the font size of the root element?",
    question_hi: "कौन-सा CSS यूनिट रूट एलिमेंट के फॉन्ट साइज के सापेक्ष होता है?",
    options_en: [
      "rem",
      "em",
      "px",
      "%"
    ],
    options_hi: [
      "rem",
      "em",
      "px",
      "%"
    ],
    answer_en: "rem",
    answer_hi: "rem",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property is used to set the space between columns in a CSS Grid layout?",
    question_hi: "CSS Grid लेआउट में कॉलम के बीच स्पेस सेट करने के लिए कौन-सी प्रॉपर्टी का उपयोग होता है?",
    options_en: [
      "column-gap",
      "row-gap",
      "grid-gap",
      "gap"
    ],
    options_hi: [
      "column-gap",
      "row-gap",
      "grid-gap",
      "gap"
    ],
    answer_en: "column-gap",
    answer_hi: "column-gap",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "How do you include an external CSS file in an HTML document?",
    question_hi: "HTML डॉक्यूमेंट में बाहरी CSS फ़ाइल कैसे शामिल करते हैं?",
    options_en: [
      "<link rel=\"stylesheet\" href=\"style.css\">",
      "<script src=\"style.css\"></script>",
      "<style src=\"style.css\"></style>",
      "<css src=\"style.css\"></css>"
    ],
    options_hi: [
      "<link rel=\"stylesheet\" href=\"style.css\">",
      "<script src=\"style.css\"></script>",
      "<style src=\"style.css\"></style>",
      "<css src=\"style.css\"></css>"
    ],
    answer_en: "<link rel=\"stylesheet\" href=\"style.css\">",
    answer_hi: "<link rel=\"stylesheet\" href=\"style.css\">",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What does the CSS property 'display: none;' do?",
    question_hi: "CSS प्रॉपर्टी 'display: none;' क्या करती है?",
    options_en: [
      "Hides the element and removes it from the layout",
      "Makes the element invisible but keeps its space",
      "Makes the element inline",
      "Displays the element as block"
    ],
    options_hi: [
      "एलिमेंट को छुपाती है और लेआउट से हटा देती है",
      "एलिमेंट को अदृश्य बनाती है लेकिन उसकी जगह रखती है",
      "एलिमेंट को inline बनाती है",
      "एलिमेंट को block के रूप में दिखाती है"
    ],
    answer_en: "Hides the element and removes it from the layout",
    answer_hi: "एलिमेंट को छुपाती है और लेआउट से हटा देती है",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which pseudo-class is used to select an element when the mouse pointer is over it?",
    question_hi: "कौन-सा pseudo-class उस एलिमेंट को सेलेक्ट करता है जिस पर माउस पॉइंटर होता है?",
    options_en: [
      ":hover",
      ":active",
      ":focus",
      ":visited"
    ],
    options_hi: [
      ":hover",
      ":active",
      ":focus",
      ":visited"
    ],
    answer_en: ":hover",
    answer_hi: ":hover",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What does the 'box-sizing: border-box;' CSS property do?",
    question_hi: "'box-sizing: border-box;' CSS प्रॉपर्टी क्या करती है?",
    options_en: [
      "Includes padding and border in the element’s total width and height",
      "Sets the box model to content-box",
      "Removes margin from element",
      "Sets the element’s display to block"
    ],
    options_hi: [
      "एलिमेंट की कुल चौड़ाई और ऊंचाई में padding और border को शामिल करता है",
      "box मॉडल को content-box सेट करता है",
      "एलिमेंट से margin हटाता है",
      "एलिमेंट का display block करता है"
    ],
    answer_en: "Includes padding and border in the element’s total width and height",
    answer_hi: "एलिमेंट की कुल चौड़ाई और ऊंचाई में padding और border को शामिल करता है",
    attempted: false,
    selected: ""
  }
  // Continue adding more questions 51 to 100
];


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