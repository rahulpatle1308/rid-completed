const questions = [
  {
    num: 1,
    question_en: "What does CSS specificity determine?",
    question_hi: "CSS specificity क्या निर्धारित करता है?",
    options_en: [
      "Which style rule is applied when multiple rules target the same element",
      "The order of stylesheets",
      "The type of HTML element",
      "The size of the element"
    ],
    options_hi: [
      "जब कई नियम एक ही एलिमेंट को टारगेट करते हैं तो कौन सा स्टाइल लागू होगा",
      "स्टाइलशीट्स का क्रम",
      "HTML एलिमेंट का प्रकार",
      "एलिमेंट का आकार"
    ],
    answer_en: "Which style rule is applied when multiple rules target the same element",
    answer_hi: "जब कई नियम एक ही एलिमेंट को टारगेट करते हैं तो कौन सा स्टाइल लागू होगा",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which selector has the highest specificity?",
    question_hi: "कौन सा सेलेक्टर सबसे अधिक specificity रखता है?",
    options_en: [
      "Inline style",
      "ID selector",
      "Class selector",
      "Element selector"
    ],
    options_hi: [
      "इनलाइन स्टाइल",
      "ID सेलेक्टर",
      "क्लास सेलेक्टर",
      "एलिमेंट सेलेक्टर"
    ],
    answer_en: "Inline style",
    answer_hi: "इनलाइन स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "In CSS specificity, what weight is given to an ID selector?",
    question_hi: "CSS specificity में ID सेलेक्टर को कौन सा weight दिया जाता है?",
    options_en: ["100", "10", "1", "0"],
    options_hi: ["100", "10", "1", "0"],
    answer_en: "100",
    answer_hi: "100",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "In CSS specificity, what weight is given to a class selector?",
    question_hi: "CSS specificity में क्लास सेलेक्टर को कौन सा weight दिया जाता है?",
    options_en: ["10", "100", "1", "0"],
    options_hi: ["10", "100", "1", "0"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "In CSS specificity, what weight is given to an element selector?",
    question_hi: "CSS specificity में एलिमेंट सेलेक्टर को कौन सा weight दिया जाता है?",
    options_en: ["1", "10", "100", "0"],
    options_hi: ["1", "10", "100", "0"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS rule will override the others if all target the same element?",
    question_hi: "यदि सभी नियम एक ही एलिमेंट को टारगेट करते हैं तो कौन सा CSS नियम ओवरराइड करेगा?",
    options_en: [
      "Rule with higher specificity",
      "First declared rule",
      "Rule with fewer selectors",
      "Rule with element selector"
    ],
    options_hi: [
      "अधिक specificity वाला नियम",
      "पहला घोषित नियम",
      "कम सेलेक्टर्स वाला नियम",
      "एलिमेंट सेलेक्टर वाला नियम"
    ],
    answer_en: "Rule with higher specificity",
    answer_hi: "अधिक specificity वाला नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the specificity of inline styles?",
    question_hi: "इनलाइन स्टाइल्स की specificity क्या होती है?",
    options_en: ["1000", "100", "10", "1"],
    options_hi: ["1000", "100", "10", "1"],
    answer_en: "1000",
    answer_hi: "1000",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "If two selectors have the same specificity, which one is applied?",
    question_hi: "यदि दो सेलेक्टर्स की specificity समान हो, तो कौन सा लागू होगा?",
    options_en: [
      "The one declared last",
      "The one declared first",
      "The one with ID selector",
      "The one with class selector"
    ],
    options_hi: [
      "जो बाद में घोषित हो",
      "जो पहले घोषित हो",
      "ID सेलेक्टर वाला",
      "क्लास सेलेक्टर वाला"
    ],
    answer_en: "The one declared last",
    answer_hi: "जो बाद में घोषित हो",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property is inherited by default?",
    question_hi: "कौन सी CSS प्रॉपर्टी डिफ़ॉल्ट रूप से इनहेरिट होती है?",
    options_en: [
      "color",
      "margin",
      "border",
      "padding"
    ],
    options_hi: [
      "रंग (color)",
      "मार्जिन (margin)",
      "बॉर्डर (border)",
      "पैडिंग (padding)"
    ],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property is NOT inherited by default?",
    question_hi: "कौन सी CSS प्रॉपर्टी डिफ़ॉल्ट रूप से इनहेरिट नहीं होती?",
    options_en: [
      "margin",
      "color",
      "font-family",
      "visibility"
    ],
    options_hi: [
      "मार्जिन (margin)",
      "रंग (color)",
      "फॉन्ट-फैमिली (font-family)",
      "दृश्यमानता (visibility)"
    ],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What keyword can be used to force inheritance of a property?",
    question_hi: "किस कीवर्ड का उपयोग किसी प्रॉपर्टी के इनहेरिट होने के लिए किया जाता है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What does the CSS keyword `initial` do?",
    question_hi: "CSS कीवर्ड `initial` क्या करता है?",
    options_en: [
      "Resets a property to its default value",
      "Forces inheritance",
      "Removes the property",
      "Sets property to none"
    ],
    options_hi: [
      "प्रॉपर्टी को डिफ़ॉल्ट मान पर रीसेट करता है",
      "इनहेरिटेंस को फोर्स करता है",
      "प्रॉपर्टी को हटाता है",
      "प्रॉपर्टी को none सेट करता है"
    ],
    answer_en: "Resets a property to its default value",
    answer_hi: "प्रॉपर्टी को डिफ़ॉल्ट मान पर रीसेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What does the CSS keyword `unset` do?",
    question_hi: "CSS कीवर्ड `unset` क्या करता है?",
    options_en: [
      "Resets property to inherited if inheritable, otherwise to initial",
      "Always resets property to initial",
      "Forces inheritance",
      "Removes the property"
    ],
    options_hi: [
      "यदि प्रॉपर्टी इनहेरिटेबल है तो इनहेरिट करता है, अन्यथा डिफ़ॉल्ट पर रीसेट करता है",
      "हमेशा प्रॉपर्टी को डिफ़ॉल्ट पर रीसेट करता है",
      "इनहेरिटेंस को फोर्स करता है",
      "प्रॉपर्टी को हटाता है"
    ],
    answer_en: "Resets property to inherited if inheritable, otherwise to initial",
    answer_hi: "यदि प्रॉपर्टी इनहेरिटेबल है तो इनहेरिट करता है, अन्यथा डिफ़ॉल्ट पर रीसेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which of these has the highest specificity?",
    question_hi: "इनमें से किसकी सबसे अधिक specificity होती है?",
    options_en: [
      "element",
      ".class",
      "#id",
      "inline style"
    ],
    options_hi: [
      "एलिमेंट",
      ".क्लास",
      "#ID",
      "इनलाइन स्टाइल"
    ],
    answer_en: "inline style",
    answer_hi: "इनलाइन स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Does the universal selector (*) add specificity?",
    question_hi: "क्या यूनिवर्सल सेलेक्टर (*) specificity जोड़ता है?",
    options_en: [
      "No",
      "Yes",
      "Only sometimes",
      "Depends on browser"
    ],
    options_hi: [
      "नहीं",
      "हाँ",
      "कभी-कभी",
      "ब्राउज़र पर निर्भर करता है"
    ],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS rule wins if two selectors have same specificity and importance?",
    question_hi: "यदि दो सेलेक्टर्स की specificity और importance समान हो, तो कौन सा CSS नियम जीतता है?",
    options_en: [
      "The one declared last",
      "The one declared first",
      "The one with ID selector",
      "The one with inline style"
    ],
    options_hi: [
      "जो बाद में घोषित हो",
      "जो पहले घोषित हो",
      "ID सेलेक्टर वाला",
      "इनलाइन स्टाइल वाला"
    ],
    answer_en: "The one declared last",
    answer_hi: "जो बाद में घोषित हो",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which CSS property controls inheritance behavior?",
    question_hi: "कौन सी CSS प्रॉपर्टी इनहेरिटेंस व्यवहार को नियंत्रित करती है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "none"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "none"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Can padding be inherited in CSS by default?",
    question_hi: "क्या padding डिफ़ॉल्ट रूप से CSS में इनहेरिट होती है?",
    options_en: [
      "No",
      "Yes",
      "Only in some browsers",
      "Depends on property"
    ],
    options_hi: [
      "नहीं",
      "हाँ",
      "कुछ ब्राउज़र में",
      "प्रॉपर्टी पर निर्भर करता है"
    ],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Is 'font-family' inherited by default in CSS?",
    question_hi: "क्या 'font-family' डिफ़ॉल्ट रूप से CSS में इनहेरिट होती है?",
    options_en: [
      "Yes",
      "No",
      "Depends on browser",
      "Only for some elements"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "ब्राउज़र पर निर्भर करता है",
      "केवल कुछ एलिमेंट्स के लिए"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of the following selectors does NOT contribute to specificity?",
    question_hi: "निम्नलिखित में से कौन सा सेलेक्टर specificity में योगदान नहीं देता?",
    options_en: [
      "Universal selector (*)",
      "ID selector",
      "Class selector",
      "Attribute selector"
    ],
    options_hi: [
      "यूनिवर्सल सेलेक्टर (*)",
      "ID सेलेक्टर",
      "क्लास सेलेक्टर",
      "एट्रिब्यूट सेलेक्टर"
    ],
    answer_en: "Universal selector (*)",
    answer_hi: "यूनिवर्सल सेलेक्टर (*)",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What happens if you use !important in CSS?",
    question_hi: "CSS में !important का क्या प्रभाव होता है?",
    options_en: [
      "Overrides any other declarations",
      "Is ignored by the browser",
      "Applies only to inline styles",
      "Removes the style"
    ],
    options_hi: [
      "किसी भी अन्य घोषणा को ओवरराइड करता है",
      "ब्राउज़र द्वारा नजरअंदाज किया जाता है",
      "केवल इनलाइन स्टाइल्स पर लागू होता है",
      "स्टाइल को हटाता है"
    ],
    answer_en: "Overrides any other declarations",
    answer_hi: "किसी भी अन्य घोषणा को ओवरराइड करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which CSS property can inherit values from its parent element?",
    question_hi: "कौन सी CSS प्रॉपर्टी पैरेंट एलिमेंट से वैल्यू इनहेरिट कर सकती है?",
    options_en: [
      "color",
      "margin",
      "border",
      "padding"
    ],
    options_hi: [
      "रंग (color)",
      "मार्जिन (margin)",
      "बॉर्डर (border)",
      "पैडिंग (padding)"
    ],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS value forces a property to revert to its inherited value?",
    question_hi: "कौन सा CSS मान प्रॉपर्टी को उसके इनहेरिटेड मान पर वापस लाता है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Can the !important declaration override inline styles?",
    question_hi: "क्या !important घोषणा इनलाइन स्टाइल्स को ओवरराइड कर सकती है?",
    options_en: [
      "Yes",
      "No",
      "Only in some browsers",
      "Depends on specificity"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "कुछ ब्राउज़र में",
      "specificity पर निर्भर करता है"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which of the following increases CSS specificity the most?",
    question_hi: "निम्नलिखित में से कौन CSS specificity को सबसे अधिक बढ़ाता है?",
    options_en: [
      "Using multiple ID selectors",
      "Using multiple element selectors",
      "Using multiple class selectors",
      "Using multiple pseudo-classes"
    ],
    options_hi: [
      "कई ID सेलेक्टर्स का उपयोग करना",
      "कई एलिमेंट सेलेक्टर्स का उपयोग करना",
      "कई क्लास सेलेक्टर्स का उपयोग करना",
      "कई pseudo-classes का उपयोग करना"
    ],
    answer_en: "Using multiple ID selectors",
    answer_hi: "कई ID सेलेक्टर्स का उपयोग करना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the specificity of an attribute selector like [type='text']?",
    question_hi: "एक एट्रिब्यूट सेलेक्टर जैसे [type='text'] की specificity क्या है?",
    options_en: ["10", "100", "1", "0"],
    options_hi: ["10", "100", "1", "0"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Does the :hover pseudo-class add to specificity?",
    question_hi: ":hover pseudo-class specificity में जुड़ता है क्या?",
    options_en: ["Yes", "No", "Only in some browsers", "Depends on usage"],
    options_hi: ["हाँ", "नहीं", "कुछ ब्राउज़रों में", "उपयोग पर निर्भर करता है"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which of the following is NOT a factor in CSS specificity?",
    question_hi: "निम्नलिखित में से कौन CSS specificity का कारक नहीं है?",
    options_en: ["Order of selectors", "Inline styles", "ID selectors", "Class selectors"],
    options_hi: ["सेलेक्टर्स का क्रम", "इनलाइन स्टाइल्स", "ID सेलेक्टर्स", "क्लास सेलेक्टर्स"],
    answer_en: "Order of selectors",
    answer_hi: "सेलेक्टर्स का क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What does the CSS 'inherit' value do?",
    question_hi: "CSS में 'inherit' मान क्या करता है?",
    options_en: [
      "Makes the property inherit the value from its parent",
      "Sets the property to its initial default",
      "Overrides all other styles",
      "Removes the property"
    ],
    options_hi: [
      "प्रॉपर्टी को उसके पैरेंट से वैल्यू इनहेरिट करने देता है",
      "प्रॉपर्टी को उसके डिफ़ॉल्ट मान पर सेट करता है",
      "सभी अन्य स्टाइल्स को ओवरराइड करता है",
      "प्रॉपर्टी को हटा देता है"
    ],
    answer_en: "Makes the property inherit the value from its parent",
    answer_hi: "प्रॉपर्टी को उसके पैरेंट से वैल्यू इनहेरिट करने देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "If a child element has 'color: inherit;', where does it get the color from?",
    question_hi: "यदि चाइल्ड एलिमेंट में 'color: inherit;' है, तो वह रंग कहाँ से लेता है?",
    options_en: ["From its parent element", "From the browser default", "From itself", "From sibling elements"],
    options_hi: ["अपने पैरेंट एलिमेंट से", "ब्राउज़र डिफ़ॉल्ट से", "खुद से", "सिब्लिंग एलिमेंट्स से"],
    answer_en: "From its parent element",
    answer_hi: "अपने पैरेंट एलिमेंट से",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property is inherited by default?",
    question_hi: "कौन सी CSS प्रॉपर्टी डिफ़ॉल्ट रूप से इनहेरिट होती है?",
    options_en: ["font-size", "border", "padding", "margin"],
    options_hi: ["font-size", "border", "padding", "margin"],
    answer_en: "font-size",
    answer_hi: "font-size",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Can pseudo-elements like ::before affect specificity?",
    question_hi: "क्या pseudo-elements जैसे ::before specificity को प्रभावित करते हैं?",
    options_en: ["Yes", "No", "Sometimes", "Only with classes"],
    options_hi: ["हाँ", "नहीं", "कभी-कभी", "केवल क्लास के साथ"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What specificity value does the universal selector (*) have?",
    question_hi: "यूनिवर्सल सेलेक्टर (*) की specificity वैल्यू क्या है?",
    options_en: ["0", "1", "10", "100"],
    options_hi: ["0", "1", "10", "100"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "If two CSS selectors have the same specificity, which rule applies?",
    question_hi: "यदि दो CSS सेलेक्टर्स की specificity समान हो, तो कौन सा नियम लागू होगा?",
    options_en: [
      "The one declared last",
      "The one declared first",
      "The one with fewer selectors",
      "The one with inline style"
    ],
    options_hi: [
      "जो बाद में घोषित हो",
      "जो पहले घोषित हो",
      "कम सेलेक्टर्स वाला",
      "इनलाइन स्टाइल वाला"
    ],
    answer_en: "The one declared last",
    answer_hi: "जो बाद में घोषित हो",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which of these CSS values removes inheritance and resets to initial?",
    question_hi: "इनमें से कौन सा CSS मान इनहेरिटेंस हटाकर प्रॉपर्टी को इनिशियल पर सेट करता है?",
    options_en: ["initial", "inherit", "unset", "revert"],
    options_hi: ["initial", "inherit", "unset", "revert"],
    answer_en: "initial",
    answer_hi: "initial",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "How is specificity calculated in CSS?",
    question_hi: "CSS में specificity कैसे कैलकुलेट की जाती है?",
    options_en: [
      "Count of inline styles, IDs, classes/attributes, elements",
      "Count of element selectors only",
      "Count of classes only",
      "Order of rules in stylesheet"
    ],
    options_hi: [
      "इनलाइन स्टाइल, IDs, क्लास/एट्रिब्यूट्स, एलिमेंट्स की गिनती",
      "केवल एलिमेंट सेलेक्टर्स की गिनती",
      "केवल क्लासेस की गिनती",
      "स्टाइलशीट में नियमों का क्रम"
    ],
    answer_en: "Count of inline styles, IDs, classes/attributes, elements",
    answer_hi: "इनलाइन स्टाइल, IDs, क्लास/एट्रिब्यूट्स, एलिमेंट्स की गिनती",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which has more specificity: .class1.class2 or #id1?",
    question_hi: ".class1.class2 और #id1 में से किसकी specificity अधिक है?",
    options_en: [
      "#id1",
      ".class1.class2",
      "Both are equal",
      "Depends on position"
    ],
    options_hi: [
      "#id1",
      ".class1.class2",
      "दोनों समान हैं",
      "स्थिति पर निर्भर करता है"
    ],
    answer_en: "#id1",
    answer_hi: "#id1",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property affects inheritance behavior?",
    question_hi: "कौन सी CSS प्रॉपर्टी इनहेरिटेंस व्यवहार को प्रभावित करती है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "all"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "all"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which of these selectors has the lowest specificity?",
    question_hi: "इनमें से किस सेलेक्टर की specificity सबसे कम है?",
    options_en: [
      "Element selector",
      "Class selector",
      "ID selector",
      "Inline style"
    ],
    options_hi: [
      "एलिमेंट सेलेक्टर",
      "क्लास सेलेक्टर",
      "ID सेलेक्टर",
      "इनलाइन स्टाइल"
    ],
    answer_en: "Element selector",
    answer_hi: "एलिमेंट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Does the order of CSS rules affect which style is applied?",
    question_hi: "क्या CSS नियमों का क्रम यह प्रभावित करता है कि कौन सा स्टाइल लागू होगा?",
    options_en: ["Yes", "No", "Only for inline styles", "Depends on browser"],
    options_hi: ["हाँ", "नहीं", "केवल इनलाइन स्टाइल्स के लिए", "ब्राउज़र पर निर्भर करता है"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS selector targets the first child of its parent?",
    question_hi: "कौन सा CSS सेलेक्टर अपने पैरेंट के पहले बच्चे को टारगेट करता है?",
    options_en: [":first-child", ":last-child", ":nth-child", ":only-child"],
    options_hi: ["पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चा (:nth-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":first-child",
    answer_hi: "पहला बच्चा (:first-child)",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS selector targets elements that are the only child of their parent?",
    question_hi: "कौन सा CSS सेलेक्टर उन एलिमेंट्स को टारगेट करता है जो अपने पैरेंट के केवल बच्चे हैं?",
    options_en: [":only-child", ":first-child", ":last-child", ":nth-child"],
    options_hi: ["केवल बच्चा (:only-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चा (:nth-child)"],
    answer_en: ":only-child",
    answer_hi: "केवल बच्चा (:only-child)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What does the CSS property 'inherit' do when applied?",
    question_hi: "CSS प्रॉपर्टी 'inherit' लागू होने पर क्या करती है?",
    options_en: [
      "Takes the value from the parent element",
      "Resets to the browser default",
      "Overrides all styles",
      "Removes the property"
    ],
    options_hi: [
      "पैरेंट एलिमेंट से वैल्यू लेती है",
      "ब्राउज़र डिफ़ॉल्ट पर रीसेट करती है",
      "सभी स्टाइल्स को ओवरराइड करती है",
      "प्रॉपर्टी हटाती है"
    ],
    answer_en: "Takes the value from the parent element",
    answer_hi: "पैरेंट एलिमेंट से वैल्यू लेती है",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which pseudo-class applies styles to elements with the 'checked' attribute?",
    question_hi: "'checked' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करने वाला pseudo-class कौन सा है?",
    options_en: [":checked", ":disabled", ":enabled", ":selected"],
    options_hi: ["चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)", "चुना हुआ (:selected)"],
    answer_en: ":checked",
    answer_hi: "चेक किया हुआ (:checked)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which pseudo-class applies styles to disabled form elements?",
    question_hi: "अक्षम फॉर्म एलिमेंट्स पर स्टाइल लागू करने वाला pseudo-class कौन सा है?",
    options_en: [":disabled", ":checked", ":enabled", ":focus"],
    options_hi: ["अक्षम (:disabled)", "चेक किया हुआ (:checked)", "सक्षम (:enabled)", "फोकस (:focus)"],
    answer_en: ":disabled",
    answer_hi: "अक्षम (:disabled)",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS selector matches all elements?",
    question_hi: "सभी एलिमेंट्स को मैच करने वाला CSS सेलेक्टर कौन सा है?",
    options_en: ["*", "html", ":root", "body"],
    options_hi: ["*", "html", ":root", "body"],
    answer_en: "*",
    answer_hi: "*",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What does the ':nth-child(odd)' selector select?",
    question_hi: ":nth-child(odd) सेलेक्टर क्या चयन करता है?",
    options_en: [
      "All odd numbered children",
      "All even numbered children",
      "Only the first child",
      "Only the last child"
    ],
    options_hi: [
      "सभी विषम संख्या वाले बच्चे",
      "सभी सम संख्या वाले बच्चे",
      "केवल पहला बच्चा",
      "केवल आखिरी बच्चा"
    ],
    answer_en: "All odd numbered children",
    answer_hi: "सभी विषम संख्या वाले बच्चे",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which selector applies styles to elements currently focused?",
    question_hi: "कौन सा सेलेक्टर वर्तमान में फोकस किए गए एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: ["फोकस (:focus)", "होवर (:hover)", "सक्रिय (:active)", "दर्शित (:visited)"],
    answer_en: ":focus",
    answer_hi: "फोकस (:focus)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the CSS property to control whether children inherit a property?",
    question_hi: "कौन सी CSS प्रॉपर्टी बच्चों को किसी प्रॉपर्टी के इनहेरिट करने को नियंत्रित करती है?",
    options_en: ["inherit", "initial", "unset", "all"],
    options_hi: ["inherit", "initial", "unset", "all"],
    answer_en: "inherit",
    answer_hi: "inherit",
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
    answer_hi: "चेक किया हुआ (:checked)",
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