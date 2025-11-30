const questions = [
  {
    num: 1,
    question_en: "What are the four parts of the CSS Box Model?",
    question_hi: "CSS बॉक्स मॉडल के चार भाग कौन-कौन से हैं?",
    options_en: ["Content, Padding, Border, Margin", "Text, Border, Padding, Margin", "Content, Text, Border, Margin", "Padding, Margin, Border, Font"],
    options_hi: ["कंटेंट, पैडिंग, बॉर्डर, मार्जिन", "टेक्स्ट, बॉर्डर, पैडिंग, मार्जिन", "कंटेंट, टेक्स्ट, बॉर्डर, मार्जिन", "पैडिंग, मार्जिन, बॉर्डर, फ़ॉन्ट"],
    answer_en: "Content, Padding, Border, Margin",
    answer_hi: "कंटेंट, पैडिंग, बॉर्डर, मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which part of the Box Model is used to create space inside the element, between the content and the border?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग एलिमेंट के अंदर कंटेंट और बॉर्डर के बीच जगह बनाता है?",
    options_en: ["Padding", "Margin", "Border", "Content"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "कंटेंट"],
    answer_en: "Padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which part of the Box Model creates space outside the border?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग बॉर्डर के बाहर जगह बनाता है?",
    options_en: ["Margin", "Padding", "Content", "Border"],
    options_hi: ["मार्जिन", "पैडिंग", "कंटेंट", "बॉर्डर"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property sets the thickness of the border in the Box Model?",
    question_hi: "बॉक्स मॉडल में बॉर्डर की मोटाई किस प्रॉपर्टी से सेट होती है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the default value of the 'box-sizing' property?",
    question_hi: "'box-sizing' प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options_en: ["content-box", "border-box", "padding-box", "margin-box"],
    options_hi: ["कंटेंट-बॉक्स", "बॉर्डर-बॉक्स", "पैडिंग-बॉक्स", "मार्जिन-बॉक्स"],
    answer_en: "content-box",
    answer_hi: "कंटेंट-बॉक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property controls the space between the border and the content?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर और कंटेंट के बीच जगह को नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-स्पेसिंग", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "How can you make the width and height include padding and border using box-sizing?",
    question_hi: "आप बॉक्स-साइजिंग का उपयोग करके कैसे चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल कर सकते हैं?",
    options_en: ["Set box-sizing to border-box", "Set box-sizing to content-box", "Set width and height manually", "Use margin property"],
    options_hi: ["box-sizing को border-box पर सेट करें", "box-sizing को content-box पर सेट करें", "चौड़ाई और ऊँचाई मैन्युअली सेट करें", "मार्जिन प्रॉपर्टी का उपयोग करें"],
    answer_en: "Set box-sizing to border-box",
    answer_hi: "box-sizing को border-box पर सेट करें",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property is used to add space outside the element’s border?",
    question_hi: "एलिमेंट के बॉर्डर के बाहर जगह जोड़ने के लिए कौन सी प्रॉपर्टी का उपयोग होता है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "If you want to add a red border of 2px thickness around an element, which CSS property would you use?",
    question_hi: "अगर आप किसी एलिमेंट के चारों ओर 2px मोटी लाल बॉर्डर जोड़ना चाहते हैं तो कौन सी CSS प्रॉपर्टी उपयोग करेंगे?",
    options_en: ["border: 2px solid red", "border-width: 2px red solid", "border-color: 2px red solid", "border-style: 2px red solid"],
    options_hi: ["border: 2px solid red", "border-width: 2px red solid", "border-color: 2px red solid", "border-style: 2px red solid"],
    answer_en: "border: 2px solid red",
    answer_hi: "border: 2px solid red",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property defines the inner content area size of the box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के अंदर कंटेंट एरिया का आकार निर्धारित करती है?",
    options_en: ["width and height", "padding", "margin", "border"],
    options_hi: ["चौड़ाई और ऊँचाई", "पैडिंग", "मार्जिन", "बॉर्डर"],
    answer_en: "width and height",
    answer_hi: "चौड़ाई और ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of the following is NOT part of the CSS Box Model?",
    question_hi: "निम्नलिखित में से कौन CSS बॉक्स मॉडल का हिस्सा नहीं है?",
    options_en: ["Text", "Padding", "Margin", "Border"],
    options_hi: ["टेक्स्ट", "पैडिंग", "मार्जिन", "बॉर्डर"],
    answer_en: "Text",
    answer_hi: "टेक्स्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What happens when you set 'box-sizing: border-box'?",
    question_hi: "'box-sizing: border-box' सेट करने पर क्या होता है?",
    options_en: ["Padding and border are included in width and height", "Padding and border are excluded from width and height", "Only border is included", "Only padding is included"],
    options_hi: ["पैडिंग और बॉर्डर चौड़ाई और ऊँचाई में शामिल होते हैं", "पैडिंग और बॉर्डर चौड़ाई और ऊँचाई से बाहर होते हैं", "केवल बॉर्डर शामिल होता है", "केवल पैडिंग शामिल होती है"],
    answer_en: "Padding and border are included in width and height",
    answer_hi: "पैडिंग और बॉर्डर चौड़ाई और ऊँचाई में शामिल होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How do you create space between adjacent elements using the Box Model?",
    question_hi: "बॉक्स मॉडल का उपयोग करके आसन्न एलिमेंट्स के बीच जगह कैसे बनाते हैं?",
    options_en: ["Using margin", "Using padding", "Using border", "Using content"],
    options_hi: ["मार्जिन का उपयोग करके", "पैडिंग का उपयोग करके", "बॉर्डर का उपयोग करके", "कंटेंट का उपयोग करके"],
    answer_en: "Using margin",
    answer_hi: "मार्जिन का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property can change the style of the border (solid, dotted, dashed)?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर की स्टाइल (सॉलिड, डॉटेड, डैश्ड) बदल सकती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the effect of setting margin to 'auto' on a block element?",
    question_hi: "ब्लॉक एलिमेंट पर मार्जिन को 'auto' सेट करने का क्या प्रभाव होता है?",
    options_en: ["Centers the element horizontally", "Aligns element to left", "Aligns element to right", "Removes margin"],
    options_hi: ["एलिमेंट को क्षैतिज रूप से केंद्रित करता है", "एलिमेंट को बाएँ संरेखित करता है", "एलिमेंट को दाएँ संरेखित करता है", "मार्जिन हटाता है"],
    answer_en: "Centers the element horizontally",
    answer_hi: "एलिमेंट को क्षैतिज रूप से केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls the color of the border?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर का रंग नियंत्रित करती है?",
    options_en: ["border-color", "border-style", "border-width", "background-color"],
    options_hi: ["बॉर्डर-कलर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बैकग्राउंड-कलर"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the unit of measurement for margin and padding?",
    question_hi: "मार्जिन और पैडिंग के लिए माप की इकाई क्या है?",
    options_en: ["px, %, em, rem", "only px", "only %", "only em"],
    options_hi: ["px, %, em, rem", "केवल px", "केवल %", "केवल em"],
    answer_en: "px, %, em, rem",
    answer_hi: "px, %, em, rem",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property can be used to add rounded corners to a box?",
    question_hi: "बॉक्स के कोनों को गोल बनाने के लिए कौन सी CSS प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border-radius", "border-style", "border-width", "box-shadow"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉक्स-शैडो"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What does the 'outline' property do?",
    question_hi: "'outline' प्रॉपर्टी क्या करती है?",
    options_en: ["Adds a line outside the border", "Adds space inside the box", "Changes the box size", "Changes content color"],
    options_hi: ["बॉर्डर के बाहर एक लाइन जोड़ती है", "बॉक्स के अंदर जगह जोड़ती है", "बॉक्स का आकार बदलती है", "कंटेंट का रंग बदलती है"],
    answer_en: "Adds a line outside the border",
    answer_hi: "बॉर्डर के बाहर एक लाइन जोड़ती है",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property can control the shadow effect of a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के छाया प्रभाव को नियंत्रित करती है?",
    options_en: ["box-shadow", "text-shadow", "border-shadow", "shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "बॉर्डर-शैडो", "शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property can control the minimum width and height of a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स की न्यूनतम चौड़ाई और ऊँचाई को नियंत्रित करती है?",
    options_en: ["min-width and min-height", "max-width and max-height", "width and height", "padding"],
    options_hi: ["मिन-विथ और मिन-हाइट", "मैक्स-विथ और मैक्स-हाइट", "विथ और हाइट", "पैडिंग"],
    answer_en: "min-width and min-height",
    answer_hi: "मिन-विथ और मिन-हाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the difference between margin and padding?",
    question_hi: "मार्जिन और पैडिंग में क्या अंतर है?",
    options_en: ["Margin is outside the border; Padding is inside the border", "Margin is inside the border; Padding is outside the border", "Both are inside the content", "Both are outside the border"],
    options_hi: ["मार्जिन बॉर्डर के बाहर होता है; पैडिंग बॉर्डर के अंदर होता है", "मार्जिन बॉर्डर के अंदर होता है; पैडिंग बॉर्डर के बाहर होता है", "दोनों कंटेंट के अंदर होते हैं", "दोनों बॉर्डर के बाहर होते हैं"],
    answer_en: "Margin is outside the border; Padding is inside the border",
    answer_hi: "मार्जिन बॉर्डर के बाहर होता है; पैडिंग बॉर्डर के अंदर होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which part of the box model is transparent by default?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग डिफ़ॉल्ट रूप से पारदर्शी होता है?",
    options_en: ["Margin", "Padding", "Border", "Content"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "कंटेंट"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can you use to collapse the margin between two elements?",
    question_hi: "दो एलिमेंट्स के बीच मार्जिन को कैसे एकीकृत किया जा सकता है?",
    options_en: ["margin-collapse (does not exist)", "Using margin-top and margin-bottom carefully", "Using padding", "Using border"],
    options_hi: ["margin-collapse (मौजूद नहीं है)", "margin-top और margin-bottom का सावधानीपूर्वक उपयोग", "पैडिंग का उपयोग", "बॉर्डर का उपयोग"],
    answer_en: "Using margin-top and margin-bottom carefully",
    answer_hi: "margin-top और margin-bottom का सावधानीपूर्वक उपयोग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the effect of 'overflow: hidden' in the Box Model?",
    question_hi: "बॉक्स मॉडल में 'overflow: hidden' का क्या प्रभाव होता है?",
    options_en: ["Hides the content that overflows the box", "Shows scrollbar", "Increases box size", "Adds margin"],
    options_hi: ["जो कंटेंट बॉक्स से बाहर जाता है उसे छिपा देता है", "स्क्रॉलबार दिखाता है", "बॉक्स का आकार बढ़ाता है", "मार्जिन जोड़ता है"],
    answer_en: "Hides the content that overflows the box",
    answer_hi: "जो कंटेंट बॉक्स से बाहर जाता है उसे छिपा देता है",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which CSS property adds space between the border and the element’s outer edge?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर और एलिमेंट के बाहरी किनारे के बीच जगह जोड़ती है?",
    options_en: ["margin", "padding", "border-spacing", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the effect of setting 'padding: 10px' on an element?",
    question_hi: "'padding: 10px' सेट करने से एलिमेंट पर क्या प्रभाव होता है?",
    options_en: ["Adds 10px space inside the element around content", "Adds 10px space outside the element", "Adds 10px border", "Removes margin"],
    options_hi: ["एलिमेंट के अंदर कंटेंट के चारों ओर 10px जगह जोड़ता है", "एलिमेंट के बाहर 10px जगह जोड़ता है", "10px बॉर्डर जोड़ता है", "मार्जिन हटाता है"],
    answer_en: "Adds 10px space inside the element around content",
    answer_hi: "एलिमेंट के अंदर कंटेंट के चारों ओर 10px जगह जोड़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property controls the transparency of the background color in the box model?",
    question_hi: "बॉक्स मॉडल में बैकग्राउंड रंग की पारदर्शिता को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["opacity", "visibility", "background-color", "z-index"],
    options_hi: ["opacity", "visibility", "background-color", "z-index"],
    answer_en: "opacity",
    answer_hi: "opacity",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the default display behavior of a box element?",
    question_hi: "एक बॉक्स एलिमेंट का डिफ़ॉल्ट डिस्प्ले व्यवहार क्या होता है?",
    options_en: ["block", "inline", "inline-block", "flex"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "फ्लेक्स"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property can you use to change the space between the content and the border?",
    question_hi: "किस CSS प्रॉपर्टी से कंटेंट और बॉर्डर के बीच की जगह बदली जा सकती है?",
    options_en: ["padding", "margin", "border-width", "border-style"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-विथ", "बॉर्डर-स्टाइल"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "How do you make the margin of an element collapse with the margin of another element?",
    question_hi: "किस तरह आप एक एलिमेंट का मार्जिन दूसरे एलिमेंट के मार्जिन के साथ मिलाते हैं?",
    options_en: ["By placing elements vertically adjacent", "By setting margin to zero", "By using padding", "By adding border"],
    options_hi: ["एलिमेंट्स को ऊर्ध्वाधर रूप से एक-दूसरे के करीब रखने से", "मार्जिन को ज़ीरो सेट करके", "पैडिंग का उपयोग करके", "बॉर्डर जोड़कर"],
    answer_en: "By placing elements vertically adjacent",
    answer_hi: "एलिमेंट्स को ऊर्ध्वाधर रूप से एक-दूसरे के करीब रखने से",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property can override the element’s margin collapsing?",
    question_hi: "कौन सी प्रॉपर्टी एलिमेंट के मार्जिन को एकीकृत होने से रोक सकती है?",
    options_en: ["border", "padding", "overflow", "display"],
    options_hi: ["बॉर्डर", "पैडिंग", "ओवरफ़्लो", "डिस्प्ले"],
    answer_en: "overflow",
    answer_hi: "ओवरफ़्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of the 'outline' property in CSS?",
    question_hi: "CSS में 'outline' प्रॉपर्टी का उद्देश्य क्या है?",
    options_en: ["Draws a line outside the border", "Creates padding", "Adds margin", "Sets background color"],
    options_hi: ["बॉर्डर के बाहर एक लाइन बनाती है", "पैडिंग बनाती है", "मार्जिन जोड़ती है", "बैकग्राउंड रंग सेट करती है"],
    answer_en: "Draws a line outside the border",
    answer_hi: "बॉर्डर के बाहर एक लाइन बनाती है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which property can be used to set the border color of a box?",
    question_hi: "किस प्रॉपर्टी से बॉक्स का बॉर्डर रंग सेट किया जाता है?",
    options_en: ["border-color", "color", "background-color", "border-style"],
    options_hi: ["बॉर्डर-कलर", "कलर", "बैकग्राउंड-कलर", "बॉर्डर-स्टाइल"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS property defines how the element’s width and height are calculated?",
    question_hi: "कौन सी CSS प्रॉपर्टी निर्धारित करती है कि एलिमेंट की चौड़ाई और ऊँचाई कैसे गणना की जाती है?",
    options_en: ["box-sizing", "display", "position", "float"],
    options_hi: ["box-sizing", "डिस्प्ले", "पोजीशन", "फ्लोट"],
    answer_en: "box-sizing",
    answer_hi: "box-sizing",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "If an element has 'box-sizing: content-box', what does the width property apply to?",
    question_hi: "अगर किसी एलिमेंट पर 'box-sizing: content-box' है, तो width प्रॉपर्टी किस पर लागू होती है?",
    options_en: ["Only content area", "Content + padding + border", "Only padding", "Only border"],
    options_hi: ["केवल कंटेंट क्षेत्र", "कंटेंट + पैडिंग + बॉर्डर", "केवल पैडिंग", "केवल बॉर्डर"],
    answer_en: "Only content area",
    answer_hi: "केवल कंटेंट क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What effect does adding padding have on the total size of an element when box-sizing is content-box?",
    question_hi: "जब box-sizing content-box होता है, तो पैडिंग जोड़ने से एलिमेंट के कुल आकार पर क्या प्रभाव पड़ता है?",
    options_en: ["Increases total size", "Decreases total size", "No effect", "Sets size to zero"],
    options_hi: ["कुल आकार बढ़ता है", "कुल आकार घटता है", "कोई प्रभाव नहीं", "आकार शून्य हो जाता है"],
    answer_en: "Increases total size",
    answer_hi: "कुल आकार बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property adds space inside an element but outside its content area?",
    question_hi: "कौन सी प्रॉपर्टी एलिमेंट के अंदर लेकिन कंटेंट क्षेत्र के बाहर जगह जोड़ती है?",
    options_en: ["padding", "margin", "border", "outline"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "आउटलाइन"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which part of the box model is transparent by default and does not have any color?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग डिफ़ॉल्ट रूप से पारदर्शी होता है और उसका कोई रंग नहीं होता?",
    options_en: ["Margin", "Border", "Padding", "Content"],
    options_hi: ["मार्जिन", "बॉर्डर", "पैडिंग", "कंटेंट"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the CSS shorthand property for setting all four margins at once?",
    question_hi: "चारों मार्जिन को एक साथ सेट करने के लिए CSS शॉर्टहैंड प्रॉपर्टी कौन सी है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property controls the space between table cells?",
    question_hi: "टेबल सेल्स के बीच जगह को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "padding", "margin", "border-collapse"],
    options_hi: ["बॉर्डर-स्पेसिंग", "पैडिंग", "मार्जिन", "बॉर्डर-कोलैप्स"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property can be used to prevent margin collapse between two adjacent elements?",
    question_hi: "दो आसन्न एलिमेंट्स के बीच मार्जिन को कोलैप्स होने से रोकने के लिए कौन सी प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["overflow: hidden", "margin: 0", "padding: 0", "border: none"],
    options_hi: ["overflow: hidden", "margin: 0", "padding: 0", "border: none"],
    answer_en: "overflow: hidden",
    answer_hi: "overflow: hidden",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What does the 'content-box' value mean for box-sizing?",
    question_hi: "'content-box' का box-sizing के लिए क्या मतलब होता है?",
    options_en: ["Width and height include only content", "Width and height include content, padding, border", "Width includes padding only", "Height includes border only"],
    options_hi: ["चौड़ाई और ऊँचाई केवल कंटेंट शामिल करते हैं", "चौड़ाई और ऊँचाई कंटेंट, पैडिंग, बॉर्डर शामिल करते हैं", "चौड़ाई केवल पैडिंग शामिल करती है", "ऊँचाई केवल बॉर्डर शामिल करती है"],
    answer_en: "Width and height include only content",
    answer_hi: "चौड़ाई और ऊँचाई केवल कंटेंट शामिल करते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "How does the 'border-box' value affect the size of an element?",
    question_hi: "'border-box' वैल्यू एलिमेंट के आकार को कैसे प्रभावित करती है?",
    options_en: ["Width and height include padding and border", "Width and height exclude padding and border", "Width includes padding only", "Height excludes border"],
    options_hi: ["चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल होते हैं", "चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल नहीं होते", "चौड़ाई में केवल पैडिंग शामिल होता है", "ऊँचाई में बॉर्डर शामिल नहीं होता"],
    answer_en: "Width and height include padding and border",
    answer_hi: "चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property allows you to add shadows to the box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स पर छाया जोड़ने की अनुमति देती है?",
    options_en: ["box-shadow", "text-shadow", "shadow", "border-shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो", "बॉर्डर-शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the effect of 'overflow: visible' on an element?",
    question_hi: "एलिमेंट पर 'overflow: visible' का क्या प्रभाव होता है?",
    options_en: ["Content overflowing the box is visible", "Content overflowing the box is hidden", "Scrollbar is added", "Box size increases"],
    options_hi: ["जो कंटेंट बॉक्स से बाहर जाता है वह दिखता है", "जो कंटेंट बॉक्स से बाहर जाता है वह छिपा रहता है", "स्क्रॉलबार जोड़ता है", "बॉक्स का आकार बढ़ता है"],
    answer_en: "Content overflowing the box is visible",
    answer_hi: "जो कंटेंट बॉक्स से बाहर जाता है वह दिखता है",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which CSS property sets the space between a box's border and its adjacent boxes?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉक्स के बॉर्डर और उसके आस-पास के बॉक्स के बीच की जगह सेट करती है?",
    options_en: ["margin", "padding", "border-spacing", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What does the CSS property 'box-sizing: inherit' do?",
    question_hi: "'box-sizing: inherit' CSS प्रॉपर्टी क्या करती है?",
    options_en: ["Inherits the box-sizing value from the parent", "Resets box-sizing to default", "Sets box-sizing to content-box", "Sets box-sizing to border-box"],
    options_hi: ["पेरेंट से box-sizing मान को विरासत में लेता है", "box-sizing को डिफ़ॉल्ट पर रीसेट करता है", "box-sizing को content-box पर सेट करता है", "box-sizing को border-box पर सेट करता है"],
    answer_en: "Inherits the box-sizing value from the parent",
    answer_hi: "पेरेंट से box-sizing मान को विरासत में लेता है",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which of the following affects the space outside the border but inside the parent container?",
    question_hi: "निम्नलिखित में से कौन बॉर्डर के बाहर लेकिन पेरेंट कंटेनर के अंदर की जगह को प्रभावित करता है?",
    options_en: ["margin", "padding", "border", "content"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "कंटेंट"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property controls the thickness of the box border?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के बॉर्डर की मोटाई नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
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