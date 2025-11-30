const questions = [
   {
    num: 1,
    question_en: "Which CSS property sets the width of the border?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर की चौड़ाई सेट करती है?",
    options_en: ["border-width", "border-style", "border-color", "outline-width"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "आउटलाइऩ-विथ"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which of the following is NOT a valid border style?",
    question_hi: "निम्नलिखित में से कौन सा बॉर्डर स्टाइल मान्य नहीं है?",
    options_en: ["dotted", "solid", "blurred", "dashed"],
    options_hi: ["डॉटेड", "सॉलिड", "ब्लर्ड", "डैश्ड"],
    answer_en: "blurred",
    answer_hi: "ब्लर्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default border width if not specified?",
    question_hi: "यदि बॉर्डर चौड़ाई निर्दिष्ट न हो तो डिफ़ॉल्ट चौड़ाई क्या होती है?",
    options_en: ["medium", "thin", "thick", "0"],
    options_hi: ["मीडियम", "थिन", "थिक", "0"],
    answer_en: "medium",
    answer_hi: "मीडियम",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is used to set the border color?",
    question_hi: "बॉर्डर रंग सेट करने के लिए कौन सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["border-color", "border-style", "border-width", "outline-color"],
    options_hi: ["बॉर्डर-कलर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "आउटलाइऩ-कलर"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property adds an outline around an element?",
    question_hi: "कौन सी CSS प्रॉपर्टी एलिमेंट के चारों ओर आउटलाइऩ जोड़ती है?",
    options_en: ["outline", "border", "box-shadow", "background"],
    options_hi: ["आउटलाइऩ", "बॉर्डर", "बॉक्स-शैडो", "बैकग्राउंड"],
    answer_en: "outline",
    answer_hi: "आउटलाइऩ",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following is a key difference between border and outline?",
    question_hi: "बॉर्डर और आउटलाइऩ के बीच मुख्य अंतर क्या है?",
    options_en: [
      "Outline does not take up space, border does",
      "Border does not take up space, outline does",
      "Both take up space",
      "Neither takes up space"
    ],
    options_hi: [
      "आउटलाइऩ जगह नहीं घेरता, बॉर्डर घेरता है",
      "बॉर्डर जगह नहीं घेरता, आउटलाइऩ घेरता है",
      "दोनों जगह घेरते हैं",
      "कोई नहीं जगह घेरता"
    ],
    answer_en: "Outline does not take up space, border does",
    answer_hi: "आउटलाइऩ जगह नहीं घेरता, बॉर्डर घेरता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls the space between the outline and the element's edge?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ और एलिमेंट की किनारे के बीच दूरी नियंत्रित करती है?",
    options_en: ["outline-offset", "outline-width", "border-spacing", "margin"],
    options_hi: ["आउटलाइऩ-ऑफसेट", "आउटलाइऩ-विथ", "बॉर्डर-स्पेसिंग", "मार्जिन"],
    answer_en: "outline-offset",
    answer_hi: "आउटलाइऩ-ऑफसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which value of border-style creates a border with dots?",
    question_hi: "border-style का कौन सा मान डॉट्स वाली बॉर्डर बनाता है?",
    options_en: ["dotted", "dashed", "solid", "double"],
    options_hi: ["डॉटेड", "डैश्ड", "सॉलिड", "डबल"],
    answer_en: "dotted",
    answer_hi: "डॉटेड",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How do you remove the border from an element?",
    question_hi: "एलिमेंट से बॉर्डर कैसे हटाएं?",
    options_en: ["border: none;", "border-width: 0;", "border-style: none;", "All of the above"],
    options_hi: ["बॉर्डर: नोन;", "बॉर्डर-विथ: 0;", "बॉर्डर-स्टाइल: नोन;", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property sets the thickness of the outline?",
    question_hi: "आउटलाइऩ की मोटाई सेट करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["outline-width", "border-width", "outline-style", "border-style"],
    options_hi: ["आउटलाइऩ-विथ", "बॉर्डर-विथ", "आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल"],
    answer_en: "outline-width",
    answer_hi: "आउटलाइऩ-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which outline-style value creates a dashed outline?",
    question_hi: "कौन सा outline-style मान डैश्ड आउटलाइऩ बनाता है?",
    options_en: ["dashed", "dotted", "solid", "double"],
    options_hi: ["डैश्ड", "डॉटेड", "सॉलिड", "डबल"],
    answer_en: "dashed",
    answer_hi: "डैश्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Can an outline have rounded corners like a border?",
    question_hi: "क्या आउटलाइऩ के किनारे बॉर्डर की तरह गोल हो सकते हैं?",
    options_en: ["No", "Yes", "Only in Firefox", "Only in Chrome"],
    options_hi: ["नहीं", "हाँ", "सिर्फ़ Firefox में", "सिर्फ़ Chrome में"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property is used to set the style of an outline?",
    question_hi: "आउटलाइऩ के स्टाइल को सेट करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["outline-style", "border-style", "outline-width", "border-color"],
    options_hi: ["आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल", "आउटलाइऩ-विथ", "बॉर्डर-कलर"],
    answer_en: "outline-style",
    answer_hi: "आउटलाइऩ-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What happens if you set 'outline: none;' on an element?",
    question_hi: "यदि आप एलिमेंट पर 'outline: none;' सेट करें तो क्या होगा?",
    options_en: ["Outline will be removed", "Border will be removed", "Element will be hidden", "No change"],
    options_hi: ["आउटलाइऩ हट जाएगा", "बॉर्डर हट जाएगा", "एलिमेंट छुप जाएगा", "कोई बदलाव नहीं होगा"],
    answer_en: "Outline will be removed",
    answer_hi: "आउटलाइऩ हट जाएगा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS shorthand property sets width, style, and color of border?",
    question_hi: "कौन सी CSS शॉर्थैंड प्रॉपर्टी बॉर्डर की चौड़ाई, स्टाइल और रंग सेट करती है?",
    options_en: ["border", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "How do you set different border styles for each side of an element?",
    question_hi: "एलिमेंट के प्रत्येक पक्ष के लिए अलग-अलग बॉर्डर स्टाइल कैसे सेट करें?",
    options_en: [
      "Use border-top, border-right, border-bottom, border-left",
      "Use border-style with four values",
      "Use outline-style",
      "Both first and second options"
    ],
    options_hi: [
      "border-top, border-right, border-bottom, border-left उपयोग करें",
      "border-style में चार मान दें",
      "outline-style उपयोग करें",
      "पहला और दूसरा दोनों विकल्प"
    ],
    answer_en: "Both first and second options",
    answer_hi: "पहला और दूसरा दोनों विकल्प",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property controls the color of the outline?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ का रंग नियंत्रित करती है?",
    options_en: ["outline-color", "border-color", "outline-style", "border-style"],
    options_hi: ["आउटलाइऩ-कलर", "बॉर्डर-कलर", "आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल"],
    answer_en: "outline-color",
    answer_hi: "आउटलाइऩ-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which of these properties does NOT affect the space an element occupies?",
    question_hi: "इनमें से कौन सी प्रॉपर्टी एलिमेंट द्वारा घिरी गई जगह को प्रभावित नहीं करती?",
    options_en: ["outline", "border", "margin", "padding"],
    options_hi: ["आउटलाइऩ", "बॉर्डर", "मार्जिन", "पैडिंग"],
    answer_en: "outline",
    answer_hi: "आउटलाइऩ",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "How do you set a thick red border?",
    question_hi: "मोटा लाल बॉर्डर कैसे सेट करें?",
    options_en: ["border: 5px solid red;", "border: solid red 5px;", "border: red solid 5px;", "border: 5px red solid;"],
    options_hi: ["बॉर्डर: 5px सॉलिड रेड;", "बॉर्डर: सॉलिड रेड 5px;", "बॉर्डर: रेड सॉलिड 5px;", "बॉर्डर: 5px रेड सॉलिड;"],
    answer_en: "border: 5px solid red;",
    answer_hi: "बॉर्डर: 5px सॉलिड रेड;",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Can outlines be used for accessibility focus indicators?",
    question_hi: "क्या आउटलाइऩ एक्सेसिबिलिटी फोकस इंडिकेटर के लिए उपयोग किया जा सकता है?",
    options_en: ["Yes", "No", "Only with JavaScript", "Only with CSS variables"],
    options_hi: ["हाँ", "नहीं", "सिर्फ जावास्क्रिप्ट से", "सिर्फ CSS वेरिएबल्स से"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property sets all four border widths at once?",
    question_hi: "कौन सी प्रॉपर्टी चारों बॉर्डर चौड़ाई एक साथ सेट करती है?",
    options_en: ["border-width", "border-style", "border-color", "border"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which value of border-style creates two solid lines?",
    question_hi: "border-style का कौन सा मान दो सॉलिड लाइनों वाला बॉर्डर बनाता है?",
    options_en: ["double", "solid", "dotted", "groove"],
    options_hi: ["डबल", "सॉलिड", "डॉटेड", "ग्रूव"],
    answer_en: "double",
    answer_hi: "डबल",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What happens if you set border-color but not border-style?",
    question_hi: "यदि आप border-color सेट करते हैं लेकिन border-style नहीं करते तो क्या होगा?",
    options_en: [
      "No border will be visible",
      "Default border style will apply",
      "Border color will be ignored",
      "Error will occur"
    ],
    options_hi: [
      "कोई बॉर्डर दिखाई नहीं देगा",
      "डिफ़ॉल्ट बॉर्डर स्टाइल लागू होगा",
      "बॉर्डर रंग नजरअंदाज होगा",
      "एरर आएगा"
    ],
    answer_en: "No border will be visible",
    answer_hi: "कोई बॉर्डर दिखाई नहीं देगा",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can make the border rounded?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर को गोल बना सकती है?",
    options_en: ["border-radius", "border-style", "outline-style", "outline-radius"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-स्टाइल", "आउटलाइऩ-स्टाइल", "आउटलाइऩ-रेडियस"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "How is the outline different from a border in terms of layout?",
    question_hi: "लेआउट के मामले में आउटलाइऩ बॉर्डर से कैसे भिन्न होता है?",
    options_en: [
      "Outline does not affect layout, border does",
      "Border does not affect layout, outline does",
      "Both affect layout",
      "Neither affects layout"
    ],
    options_hi: [
      "आउटलाइऩ लेआउट को प्रभावित नहीं करता, बॉर्डर करता है",
      "बॉर्डर लेआउट को प्रभावित नहीं करता, आउटलाइऩ करता है",
      "दोनों लेआउट को प्रभावित करते हैं",
      "कोई नहीं लेआउट को प्रभावित करता"
    ],
    answer_en: "Outline does not affect layout, border does",
    answer_hi: "आउटलाइऩ लेआउट को प्रभावित नहीं करता, बॉर्डर करता है",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_en: "Which property is used to set a border only at the top of an element?",
    question_hi: "कौन सी प्रॉपर्टी का उपयोग केवल एलिमेंट के टॉप बॉर्डर के लिए किया जाता है?",
    options_en: ["border-top", "border-bottom", "border-left", "border-right"],
    options_hi: ["बॉर्डर-टॉप", "बॉर्डर-बॉटम", "बॉर्डर-लेफ्ट", "बॉर्डर-राइट"],
    answer_en: "border-top",
    answer_hi: "बॉर्डर-टॉप",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "How do you make an element’s border invisible but still take space?",
    question_hi: "किस प्रकार एक एलिमेंट का बॉर्डर अदृश्य बनाएं लेकिन वह जगह घेरता रहे?",
    options_en: ["border-color: transparent;", "border-style: none;", "border-width: 0;", "outline: none;"],
    options_hi: ["बॉर्डर-कलर: ट्रांसपेरेंट;", "बॉर्डर-स्टाइल: नोन;", "बॉर्डर-विथ: 0;", "आउटलाइऩ: नोन;"],
    answer_en: "border-color: transparent;",
    answer_hi: "बॉर्डर-कलर: ट्रांसपेरेंट;",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which shorthand property sets all border sides individually?",
    question_hi: "कौन सी शॉर्थैंड प्रॉपर्टी चारों बॉर्डर साइड्स को अलग-अलग सेट करती है?",
    options_en: ["border-width", "border-style", "border", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What does the 'outline-offset' property do?",
    question_hi: "'outline-offset' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Moves the outline away from the element",
      "Changes the outline color",
      "Changes border thickness",
      "Adds shadow to outline"
    ],
    options_hi: [
      "आउटलाइऩ को एलिमेंट से दूर करती है",
      "आउटलाइऩ का रंग बदलती है",
      "बॉर्डर की मोटाई बदलती है",
      "आउटलाइऩ को छाया देती है"
    ],
    answer_en: "Moves the outline away from the element",
    answer_hi: "आउटलाइऩ को एलिमेंट से दूर करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which border-style creates a 3D grooved effect?",
    question_hi: "कौन सा border-style 3D ग्रूव्ड इफेक्ट बनाता है?",
    options_en: ["groove", "ridge", "inset", "outset"],
    options_hi: ["ग्रूव", "रिज", "इंसेट", "आउटसेट"],
    answer_en: "groove",
    answer_hi: "ग्रूव",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does the 'border-collapse' property control?",
    question_hi: "'border-collapse' प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Table borders merging", "Border color", "Border width", "Border style"],
    options_hi: ["टेबल बॉर्डर का विलय", "बॉर्डर रंग", "बॉर्डर चौड़ाई", "बॉर्डर स्टाइल"],
    answer_en: "Table borders merging",
    answer_hi: "टेबल बॉर्डर का विलय",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property controls the space between the border and the cell content in tables?",
    question_hi: "टेबल में बॉर्डर और सेल कंटेंट के बीच की जगह कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "padding", "margin", "outline-offset"],
    options_hi: ["बॉर्डर-स्पेसिंग", "पैडिंग", "मार्जिन", "आउटलाइऩ-ऑफसेट"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Can outline be styled differently than border?",
    question_hi: "क्या आउटलाइऩ को बॉर्डर से अलग तरीके से स्टाइल किया जा सकता है?",
    options_en: ["Yes", "No", "Only in some browsers", "Only with JavaScript"],
    options_hi: ["हाँ", "नहीं", "सिर्फ कुछ ब्राउज़रों में", "सिर्फ जावास्क्रिप्ट से"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property specifies the style of all four borders at once?",
    question_hi: "कौन सी CSS प्रॉपर्टी एक साथ चारों बॉर्डर का स्टाइल सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border"],
    options_hi: ["बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property is NOT part of the border shorthand property?",
    question_hi: "निम्नलिखित में से कौन सी प्रॉपर्टी बॉर्डर शॉर्थैंड प्रॉपर्टी का हिस्सा नहीं है?",
    options_en: ["border-radius", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "How do you apply a dotted border only to the left side?",
    question_hi: "सिर्फ बाएँ साइड पर डॉटेड बॉर्डर कैसे लगाएं?",
    options_en: ["border-left-style: dotted;", "border-style: dotted left;", "border-left: dotted;", "border-style-left: dotted;"],
    options_hi: ["बॉर्डर-लेफ्ट-स्टाइल: डॉटेड;", "बॉर्डर-स्टाइल: डॉटेड लेफ्ट;", "बॉर्डर-लेफ्ट: डॉटेड;", "बॉर्डर-स्टाइल-लेफ्ट: डॉटेड;"],
    answer_en: "border-left-style: dotted;",
    answer_hi: "बॉर्डर-लेफ्ट-स्टाइल: डॉटेड;",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which CSS property removes the default outline on focus?",
    question_hi: "फोकस पर डिफ़ॉल्ट आउटलाइऩ हटाने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["outline: none;", "border: none;", "outline-style: none;", "outline-width: 0;"],
    options_hi: ["आउटलाइऩ: नोन;", "बॉर्डर: नोन;", "आउटलाइऩ-स्टाइल: नोन;", "आउटलाइऩ-विथ: 0;"],
    answer_en: "outline: none;",
    answer_hi: "आउटलाइऩ: नोन;",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which border style creates an inset effect?",
    question_hi: "कौन सा बॉर्डर स्टाइल इनसेट इफेक्ट बनाता है?",
    options_en: ["inset", "outset", "groove", "ridge"],
    options_hi: ["इनसेट", "आउटसेट", "ग्रूव", "रिज"],
    answer_en: "inset",
    answer_hi: "इनसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "How can you create a double border?",
    question_hi: "डबल बॉर्डर कैसे बनाएं?",
    options_en: ["border-style: double;", "border-style: solid double;", "border-width: double;", "border-type: double;"],
    options_hi: ["बॉर्डर-स्टाइल: डबल;", "बॉर्डर-स्टाइल: सॉलिड डबल;", "बॉर्डर-विथ: डबल;", "बॉर्डर-टाइप: डबल;"],
    answer_en: "border-style: double;",
    answer_hi: "बॉर्डर-स्टाइल: डबल;",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property can be used to add space between the border and content inside a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर और बॉक्स के अंदर कंटेंट के बीच जगह जोड़ने के लिए इस्तेमाल होती है?",
    options_en: ["padding", "margin", "border-spacing", "outline-offset"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-स्पेसिंग", "आउटलाइऩ-ऑफसेट"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "How to make only the bottom border thick?",
    question_hi: "सिर्फ नीचे का बॉर्डर मोटा कैसे बनाएं?",
    options_en: ["border-bottom-width: thick;", "border-width-bottom: thick;", "border-bottom-style: thick;", "border-style-bottom: thick;"],
    options_hi: ["बॉर्डर-बॉटम-विथ: थिक;", "बॉर्डर-विथ-बॉटम: थिक;", "बॉर्डर-बॉटम-स्टाइल: थिक;", "बॉर्डर-स्टाइल-बॉटम: थिक;"],
    answer_en: "border-bottom-width: thick;",
    answer_hi: "बॉर्डर-बॉटम-विथ: थिक;",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property sets the style of the outline?",
    question_hi: "आउटलाइऩ का स्टाइल सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["outline-style", "border-style", "outline-width", "border-width"],
    options_hi: ["आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल", "आउटलाइऩ-विथ", "बॉर्डर-विथ"],
    answer_en: "outline-style",
    answer_hi: "आउटलाइऩ-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which border style looks like a ridge?",
    question_hi: "कौन सा बॉर्डर स्टाइल रिज़ जैसा दिखता है?",
    options_en: ["ridge", "groove", "inset", "outset"],
    options_hi: ["रिज", "ग्रूव", "इनसेट", "आउटसेट"],
    answer_en: "ridge",
    answer_hi: "रिज",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "How to specify the color of the outline?",
    question_hi: "आउटलाइऩ का रंग कैसे सेट करें?",
    options_en: ["outline-color", "border-color", "color", "background-color"],
    options_hi: ["आउटलाइऩ-कलर", "बॉर्डर-कलर", "कलर", "बैकग्राउंड-कलर"],
    answer_en: "outline-color",
    answer_hi: "आउटलाइऩ-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property controls the thickness of all four borders individually?",
    question_hi: "कौन सी प्रॉपर्टी चारों बॉर्डर की मोटाई अलग-अलग नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property is used to create space between adjacent table cells?",
    question_hi: "टेबल की सटती हुई सेल्स के बीच जगह बनाने के लिए कौन सी CSS प्रॉपर्टी है?",
    options_en: ["border-spacing", "border-collapse", "padding", "margin"],
    options_hi: ["बॉर्डर-स्पेसिंग", "बॉर्डर-कोलैप्स", "पैडिंग", "मार्जिन"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What effect does the 'outline' property have on the box model?",
    question_hi: "'आउटलाइऩ' प्रॉपर्टी बॉक्स मॉडल पर क्या प्रभाव डालती है?",
    options_en: [
      "Does not affect box model dimensions",
      "Increases box size",
      "Decreases box size",
      "Overrides border"
    ],
    options_hi: [
      "बॉक्स मॉडल के आयामों को प्रभावित नहीं करता",
      "बॉक्स का आकार बढ़ाता है",
      "बॉक्स का आकार कम करता है",
      "बॉर्डर को ओवरराइड करता है"
    ],
    answer_en: "Does not affect box model dimensions",
    answer_hi: "बॉक्स मॉडल के आयामों को प्रभावित नहीं करता",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property sets the space between the outline and the edge of the element?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ और एलिमेंट की किनारे के बीच जगह सेट करती है?",
    options_en: ["outline-offset", "margin", "padding", "border-spacing"],
    options_hi: ["आउटलाइऩ-ऑफसेट", "मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग"],
    answer_en: "outline-offset",
    answer_hi: "आउटलाइऩ-ऑफसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Is the outline included in the element’s size calculations?",
    question_hi: "क्या आउटलाइऩ एलिमेंट के साइज कैलकुलेशन में शामिल होता है?",
    options_en: ["No", "Yes", "Only in some browsers", "Depends on box-sizing"],
    options_hi: ["नहीं", "हाँ", "सिर्फ कुछ ब्राउज़रों में", "बॉक्स-साइजिंग पर निर्भर करता है"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property would you use to remove the outline when a button is clicked?",
    question_hi: "जब बटन क्लिक किया जाए तो आउटलाइऩ हटाने के लिए कौन सी प्रॉपर्टी इस्तेमाल करें?",
    options_en: ["outline: none;", "border: none;", "outline-style: none;", "box-shadow: none;"],
    options_hi: ["आउटलाइऩ: नोन;", "बॉर्डर: नोन;", "आउटलाइऩ-स्टाइल: नोन;", "बॉक्स-शैडो: नोन;"],
    answer_en: "outline: none;",
    answer_hi: "आउटलाइऩ: नोन;",
    attempted: false,
    selected: ""
  }
  // Continue adding more questions 51 to 100
];

// Add more questions as needed...


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