const questions = [
  {
    num: 1,
    question_en: "Which pseudo-class applies styles to the first child element of its parent?",
    question_hi: "कौन सा pseudo-class अपने पैरेंट के पहले बच्चे एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":first-child", ":last-child", ":nth-child", ":only-child"],
    options_hi: ["पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चे (:nth-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":first-child",
    answer_hi: "पहला बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which pseudo-class applies styles to the last child element of its parent?",
    question_hi: "कौन सा pseudo-class अपने पैरेंट के आखिरी बच्चे एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":last-child", ":first-child", ":nth-child", ":only-child"],
    options_hi: ["आखिरी बच्चा (:last-child)", "पहला बच्चा (:first-child)", "किसी विशेष बच्चे (:nth-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":last-child",
    answer_hi: "आखिरी बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which pseudo-class applies styles to only child elements of their parent?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो अपने पैरेंट के केवल एकमात्र बच्चे होते हैं?",
    options_en: [":only-child", ":first-child", ":last-child", ":nth-child"],
    options_hi: ["केवल बच्चा (:only-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चे (:nth-child)"],
    answer_en: ":only-child",
    answer_hi: "केवल बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which pseudo-class applies styles to elements based on their position in a group?",
    question_hi: "कौन सा pseudo-class एलिमेंट्स को उनके समूह में स्थिति के आधार पर स्टाइल करता है?",
    options_en: [":nth-child", ":first-child", ":last-child", ":only-child"],
    options_hi: ["किसी विशेष बच्चे (:nth-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":nth-child",
    answer_hi: "किसी विशेष बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which pseudo-class applies styles to elements that are the nth of their type?",
    question_hi: "कौन सा pseudo-class एलिमेंट को उनके प्रकार के nवें स्थान पर होने पर स्टाइल करता है?",
    options_en: [":nth-of-type", ":nth-child", ":first-of-type", ":last-of-type"],
    options_hi: ["प्रकार का nवां (:nth-of-type)", "किसी विशेष बच्चे (:nth-child)", "प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)"],
    answer_en: ":nth-of-type",
    answer_hi: "प्रकार का nवां",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which pseudo-class applies styles to the first element of its type among its siblings?",
    question_hi: "कौन सा pseudo-class अपने समान प्रकार के पहले एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":first-of-type", ":last-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":first-of-type",
    answer_hi: "प्रकार का पहला",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which pseudo-class applies styles to the last element of its type among its siblings?",
    question_hi: "कौन सा pseudo-class अपने समान प्रकार के आखिरी एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":last-of-type", ":first-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का आखिरी (:last-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":last-of-type",
    answer_hi: "प्रकार का आखिरी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which pseudo-class applies styles to elements that are the only one of their type among siblings?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो अपने प्रकार के केवल एकमात्र होते हैं?",
    options_en: [":only-of-type", ":first-of-type", ":last-of-type", ":nth-of-type"],
    options_hi: ["केवल प्रकार का (:only-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)", "प्रकार का nवां (:nth-of-type)"],
    answer_en: ":only-of-type",
    answer_hi: "केवल प्रकार का",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which pseudo-class applies styles to an element when the user hovers over it?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब यूजर उस एलिमेंट पर होवर करता है?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: ["होवर (:hover)", "सक्रिय (:active)", "फोकस (:focus)", "देखा गया (:visited)"],
    answer_en: ":hover",
    answer_hi: "होवर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which pseudo-class applies styles to an element when it is being clicked?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब एलिमेंट पर क्लिक किया जा रहा हो?",
    options_en: [":active", ":hover", ":focus", ":visited"],
    options_hi: ["सक्रिय (:active)", "होवर (:hover)", "फोकस (:focus)", "देखा गया (:visited)"],
    answer_en: ":active",
    answer_hi: "सक्रिय",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which pseudo-class applies styles to an element when it has focus?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब एलिमेंट पर फोकस होता है?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: ["फोकस (:focus)", "होवर (:hover)", "सक्रिय (:active)", "देखा गया (:visited)"],
    answer_en: ":focus",
    answer_hi: "फोकस",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which pseudo-class applies styles to visited links?",
    question_hi: "कौन सा pseudo-class विज़िट किए गए लिंक पर स्टाइल लागू करता है?",
    options_en: [":visited", ":link", ":hover", ":active"],
    options_hi: ["देखा गया (:visited)", "लिंक (:link)", "होवर (:hover)", "सक्रिय (:active)"],
    answer_en: ":visited",
    answer_hi: "देखा गया",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which pseudo-class applies styles to unvisited links?",
    question_hi: "कौन सा pseudo-class अनविजिट किए गए लिंक पर स्टाइल लागू करता है?",
    options_en: [":link", ":visited", ":hover", ":active"],
    options_hi: ["लिंक (:link)", "देखा गया (:visited)", "होवर (:hover)", "सक्रिय (:active)"],
    answer_en: ":link",
    answer_hi: "लिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which pseudo-class applies styles to checked checkboxes or radio buttons?",
    question_hi: "कौन सा pseudo-class चेक किए गए चेकबॉक्स या रेडियो बटन पर स्टाइल लागू करता है?",
    options_en: [":checked", ":disabled", ":enabled", ":selected"],
    options_hi: ["चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)", "चुना हुआ (:selected)"],
    answer_en: ":checked",
    answer_hi: "चेक किया हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which pseudo-class applies styles to disabled elements?",
    question_hi: "कौन सा pseudo-class अक्षम एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":disabled", ":enabled", ":checked", ":selected"],
    options_hi: ["अक्षम (:disabled)", "सक्षम (:enabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":disabled",
    answer_hi: "अक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which pseudo-class applies styles to enabled elements?",
    question_hi: "कौन सा pseudo-class सक्षम एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled", ":disabled", ":checked", ":selected"],
    options_hi: ["सक्षम (:enabled)", "अक्षम (:disabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":enabled",
    answer_hi: "सक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which pseudo-class applies styles to selected options in a dropdown?",
    question_hi: "कौन सा pseudo-class ड्रॉपडाउन में चुने गए विकल्पों पर स्टाइल लागू करता है?",
    options_en: [":selected", ":checked", ":disabled", ":enabled"],
    options_hi: ["चुना हुआ (:selected)", "चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)"],
    answer_en: ":selected",
    answer_hi: "चुना हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which pseudo-class applies styles to elements when the input is invalid?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब इनपुट अमान्य होता है?",
    options_en: [":invalid", ":valid", ":checked", ":enabled"],
    options_hi: ["अमान्य (:invalid)", "मान्य (:valid)", "चेक किया हुआ (:checked)", "सक्षम (:enabled)"],
    answer_en: ":invalid",
    answer_hi: "अमान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which pseudo-class applies styles to elements when the input is valid?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब इनपुट मान्य होता है?",
    options_en: [":valid", ":invalid", ":checked", ":enabled"],
    options_hi: ["मान्य (:valid)", "अमान्य (:invalid)", "चेक किया हुआ (:checked)", "सक्षम (:enabled)"],
    answer_en: ":valid",
    answer_hi: "मान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which pseudo-class applies styles to empty elements?",
    question_hi: "कौन सा pseudo-class खाली एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":empty", ":blank", ":null", ":void"],
    options_hi: ["खाली (:empty)", "खाली (:blank)", "नल (:null)", "खाली (:void)"],
    answer_en: ":empty",
    answer_hi: "खाली",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which pseudo-class applies styles to elements not matched by a selector?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो सेलेक्टर से मेल नहीं खाते?",
    options_en: [":not()", ":has()", ":is()", ":where()"],
    options_hi: ["नहीं (:not())", "है (:has())", "है (:is())", "है (:where())"],
    answer_en: ":not()",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which pseudo-class applies styles to elements that contain a specific selector?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जिनमें एक विशेष सेलेक्टर होता है?",
    options_en: [":has()", ":not()", ":is()", ":where()"],
    options_hi: ["है (:has())", "नहीं (:not())", "है (:is())", "है (:where())"],
    answer_en: ":has()",
    answer_hi: "है",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which pseudo-class applies styles to elements that match any of a list of selectors?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो किसी सूची के किसी भी सेलेक्टर से मेल खाते हैं?",
    options_en: [":is()", ":not()", ":has()", ":where()"],
    options_hi: ["है (:is())", "नहीं (:not())", "है (:has())", "है (:where())"],
    answer_en: ":is()",
    answer_hi: "है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which pseudo-class applies styles to elements that match a selector, but with no specificity?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो सेलेक्टर से मेल खाते हैं, लेकिन बिना specificity के?",
    options_en: [":where()", ":is()", ":not()", ":has()"],
    options_hi: ["है (:where())", "है (:is())", "नहीं (:not())", "है (:has())"],
    answer_en: ":where()",
    answer_hi: "है",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which pseudo-element is used to style the first line of an element?",
    question_hi: "कौन सा pseudo-element एलिमेंट की पहली लाइन को स्टाइल करने के लिए उपयोग किया जाता है?",
    options_en: ["::first-line", "::first-letter", "::before", "::after"],
    options_hi: ["पहली लाइन (::first-line)", "पहला अक्षर (::first-letter)", "पहले (::before)", "बाद में (::after)"],
    answer_en: "::first-line",
    answer_hi: "पहली लाइन",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which pseudo-element is used to style the first letter of an element?",
    question_hi: "कौन सा pseudo-element एलिमेंट के पहले अक्षर को स्टाइल करने के लिए उपयोग किया जाता है?",
    options_en: ["::first-letter", "::first-line", "::before", "::after"],
    options_hi: ["पहला अक्षर (::first-letter)", "पहली लाइन (::first-line)", "पहले (::before)", "बाद में (::after)"],
    answer_en: "::first-letter",
    answer_hi: "पहला अक्षर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which pseudo-element inserts content before an element's content?",
    question_hi: "कौन सा pseudo-element एलिमेंट की सामग्री से पहले कंटेंट डालता है?",
    options_en: ["::before", "::after", "::first-letter", "::first-line"],
    options_hi: ["पहले (::before)", "बाद में (::after)", "पहला अक्षर (::first-letter)", "पहली लाइन (::first-line)"],
    answer_en: "::before",
    answer_hi: "पहले",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which pseudo-element inserts content after an element's content?",
    question_hi: "कौन सा pseudo-element एलिमेंट की सामग्री के बाद कंटेंट डालता है?",
    options_en: ["::after", "::before", "::first-letter", "::first-line"],
    options_hi: ["बाद में (::after)", "पहले (::before)", "पहला अक्षर (::first-letter)", "पहली लाइन (::first-line)"],
    answer_en: "::after",
    answer_hi: "बाद में",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which pseudo-class applies styles to elements that are targeted by the URL fragment?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो URL फ्रैगमेंट द्वारा टारगेट किए गए हैं?",
    options_en: [":target", ":focus", ":active", ":hover"],
    options_hi: ["लक्षित (:target)", "फोकस (:focus)", "सक्रिय (:active)", "होवर (:hover)"],
    answer_en: ":target",
    answer_hi: "लक्षित",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which pseudo-class applies styles to elements that are enabled form controls?",
    question_hi: "कौन सा pseudo-class सक्षम फॉर्म कंट्रोल्स पर स्टाइल लागू करता है?",
    options_en: [":enabled", ":disabled", ":checked", ":selected"],
    options_hi: ["सक्षम (:enabled)", "अक्षम (:disabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":enabled",
    answer_hi: "सक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which pseudo-class applies styles to elements that are disabled form controls?",
    question_hi: "कौन सा pseudo-class अक्षम फॉर्म कंट्रोल्स पर स्टाइल लागू करता है?",
    options_en: [":disabled", ":enabled", ":checked", ":selected"],
    options_hi: ["अक्षम (:disabled)", "सक्षम (:enabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":disabled",
    answer_hi: "अक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which pseudo-class applies styles to elements in the default state before user interaction?",
    question_hi: "कौन सा pseudo-class यूजर इंटरैक्शन से पहले डिफ़ॉल्ट स्टेट में एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":default", ":focus", ":hover", ":active"],
    options_hi: ["डिफ़ॉल्ट (:default)", "फोकस (:focus)", "होवर (:hover)", "सक्रिय (:active)"],
    answer_en: ":default",
    answer_hi: "डिफ़ॉल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which pseudo-class applies styles to elements that are valid form inputs?",
    question_hi: "कौन सा pseudo-class मान्य फॉर्म इनपुट्स पर स्टाइल लागू करता है?",
    options_en: [":valid", ":invalid", ":required", ":optional"],
    options_hi: ["मान्य (:valid)", "अमान्य (:invalid)", "आवश्यक (:required)", "वैकल्पिक (:optional)"],
    answer_en: ":valid",
    answer_hi: "मान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which pseudo-class applies styles to elements that are invalid form inputs?",
    question_hi: "कौन सा pseudo-class अमान्य फॉर्म इनपुट्स पर स्टाइल लागू करता है?",
    options_en: [":invalid", ":valid", ":required", ":optional"],
    options_hi: ["अमान्य (:invalid)", "मान्य (:valid)", "आवश्यक (:required)", "वैकल्पिक (:optional)"],
    answer_en: ":invalid",
    answer_hi: "अमान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which pseudo-class applies styles to elements with a 'required' attribute?",
    question_hi: "कौन सा pseudo-class 'required' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":required", ":optional", ":valid", ":invalid"],
    options_hi: ["आवश्यक (:required)", "वैकल्पिक (:optional)", "मान्य (:valid)", "अमान्य (:invalid)"],
    answer_en: ":required",
    answer_hi: "आवश्यक",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which pseudo-class applies styles to elements with an 'optional' attribute?",
    question_hi: "कौन सा pseudo-class 'optional' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":optional", ":required", ":valid", ":invalid"],
    options_hi: ["वैकल्पिक (:optional)", "आवश्यक (:required)", "मान्य (:valid)", "अमान्य (:invalid)"],
    answer_en: ":optional",
    answer_hi: "वैकल्पिक",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which pseudo-class applies styles to elements that are indeterminate (like partially checked checkboxes)?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो अनिर्णीत (जैसे आंशिक रूप से चेक किए गए चेकबॉक्स) होते हैं?",
    options_en: [":indeterminate", ":checked", ":disabled", ":enabled"],
    options_hi: ["अनिर्णीत (:indeterminate)", "चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)"],
    answer_en: ":indeterminate",
    answer_hi: "अनिर्णीत",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which pseudo-class applies styles to elements that are read-only?",
    question_hi: "कौन सा pseudo-class केवल पढ़ने योग्य (read-only) एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":read-only", ":read-write", ":disabled", ":enabled"],
    options_hi: ["केवल पढ़ने योग्य (:read-only)", "पढ़ने और लिखने योग्य (:read-write)", "अक्षम (:disabled)", "सक्षम (:enabled)"],
    answer_en: ":read-only",
    answer_hi: "केवल पढ़ने योग्य",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which pseudo-class applies styles to elements that are read-write?",
    question_hi: "कौन सा pseudo-class पढ़ने और लिखने योग्य (read-write) एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":read-write", ":read-only", ":enabled", ":disabled"],
    options_hi: ["पढ़ने और लिखने योग्य (:read-write)", "केवल पढ़ने योग्य (:read-only)", "सक्षम (:enabled)", "अक्षम (:disabled)"],
    answer_en: ":read-write",
    answer_hi: "पढ़ने और लिखने योग्य",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which pseudo-class applies styles to elements that are in the process of being validated?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो सत्यापन की प्रक्रिया में हैं?",
    options_en: [":pending", ":valid", ":invalid", ":required"],
    options_hi: ["लंबित (:pending)", "मान्य (:valid)", "अमान्य (:invalid)", "आवश्यक (:required)"],
    answer_en: ":pending",
    answer_hi: "लंबित",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which pseudo-class applies styles to elements that are enabled and checked?",
    question_hi: "कौन सा pseudo-class सक्षम और चेक किए गए एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:checked", ":disabled:checked", ":enabled", ":checked"],
    options_hi: ["सक्षम और चेक किया हुआ (:enabled:checked)", "अक्षम और चेक किया हुआ (:disabled:checked)", "सक्षम (:enabled)", "चेक किया हुआ (:checked)"],
    answer_en: ":enabled:checked",
    answer_hi: "सक्षम और चेक किया हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which pseudo-class applies styles to elements that are empty (contain no children)?",
    question_hi: "कौन सा pseudo-class खाली एलिमेंट्स (जिनमें कोई चाइल्ड नहीं होता) पर स्टाइल लागू करता है?",
    options_en: [":empty", ":blank", ":null", ":void"],
    options_hi: ["खाली (:empty)", "खाली (:blank)", "नल (:null)", "खाली (:void)"],
    answer_en: ":empty",
    answer_hi: "खाली",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which pseudo-class applies styles to elements that are enabled and focused?",
    question_hi: "कौन सा pseudo-class सक्षम और फोकस वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:focus", ":disabled:focus", ":enabled", ":focus"],
    options_hi: ["सक्षम और फोकस (:enabled:focus)", "अक्षम और फोकस (:disabled:focus)", "सक्षम (:enabled)", "फोकस (:focus)"],
    answer_en: ":enabled:focus",
    answer_hi: "सक्षम और फोकस",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which pseudo-class applies styles to elements that are the nth-last child of their parent?",
    question_hi: "कौन सा pseudo-class पैरेंट का nवां आखिरी बच्चा एलिमेंट स्टाइल करता है?",
    options_en: [":nth-last-child", ":nth-child", ":first-child", ":last-child"],
    options_hi: ["nवां आखिरी बच्चा (:nth-last-child)", "किसी विशेष बच्चा (:nth-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)"],
    answer_en: ":nth-last-child",
    answer_hi: "nवां आखिरी बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which pseudo-class applies styles to elements that are the nth-last of their type?",
    question_hi: "कौन सा pseudo-class पैरेंट के समान प्रकार का nवां आखिरी एलिमेंट स्टाइल करता है?",
    options_en: [":nth-last-of-type", ":nth-of-type", ":first-of-type", ":last-of-type"],
    options_hi: ["nवां आखिरी प्रकार (:nth-last-of-type)", "प्रकार का nवां (:nth-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)"],
    answer_en: ":nth-last-of-type",
    answer_hi: "nवां आखिरी प्रकार",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which pseudo-class applies styles to elements that are enabled and invalid?",
    question_hi: "कौन सा pseudo-class सक्षम और अमान्य एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:invalid", ":disabled:invalid", ":enabled:valid", ":disabled:valid"],
    options_hi: ["सक्षम और अमान्य (:enabled:invalid)", "अक्षम और अमान्य (:disabled:invalid)", "सक्षम और मान्य (:enabled:valid)", "अक्षम और मान्य (:disabled:valid)"],
    answer_en: ":enabled:invalid",
    answer_hi: "सक्षम और अमान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which pseudo-class applies styles to elements that are enabled and valid?",
    question_hi: "कौन सा pseudo-class सक्षम और मान्य एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:valid", ":disabled:valid", ":enabled:invalid", ":disabled:invalid"],
    options_hi: ["सक्षम और मान्य (:enabled:valid)", "अक्षम और मान्य (:disabled:valid)", "सक्षम और अमान्य (:enabled:invalid)", "अक्षम और अमान्य (:disabled:invalid)"],
    answer_en: ":enabled:valid",
    answer_hi: "सक्षम और मान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which pseudo-class applies styles to elements that are the first of their type among siblings?",
    question_hi: "कौन सा pseudo-class समान प्रकार के पहले एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":first-of-type", ":last-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":first-of-type",
    answer_hi: "प्रकार का पहला",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which pseudo-class applies styles to elements that are the last of their type among siblings?",
    question_hi: "कौन सा pseudo-class समान प्रकार के आखिरी एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":last-of-type", ":first-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का आखिरी (:last-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":last-of-type",
    answer_hi: "प्रकार का आखिरी",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which pseudo-class applies styles to elements with the 'checked' attribute?",
    question_hi: "कौन सा pseudo-class 'checked' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":checked", ":disabled", ":enabled", ":selected"],
    options_hi: ["चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)", "चुना हुआ (:selected)"],
    answer_en: ":checked",
    answer_hi: "चेक किया हुआ",
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