const questions = [
 {
    num: 1,
    question_en: "Which property specifies the width of the space between table cells?",
    question_hi: "टेबल सेल्स के बीच की जगह की चौड़ाई कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["border-spacing", "padding", "margin", "border-width"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property is used to add space inside a table cell?",
    question_hi: "टेबल सेल के अंदर जगह बढ़ाने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["padding", "margin", "border-spacing", "border-collapse"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property collapses the borders between table cells?",
    question_hi: "टेबल सेल्स के बीच बॉर्डर को जोड़ने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-collapse", "border-spacing", "padding", "margin"],
    options_hi: ["बॉर्डर-कॉलैप्स (border-collapse)", "सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-collapse",
    answer_hi: "बॉर्डर-कॉलैप्स (border-collapse)",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property controls the border thickness of a table cell?",
    question_hi: "टेबल सेल की बॉर्डर की मोटाई को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-width", "padding", "margin", "border-spacing"],
    options_hi: ["बॉर्डर की मोटाई (border-width)", "पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर की मोटाई (border-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property specifies the space outside the border of a table cell?",
    question_hi: "टेबल सेल के बॉर्डर के बाहर की जगह कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["margin", "padding", "border-spacing", "border-width"],
    options_hi: ["मार्जिन (margin)", "पैडिंग (padding)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property specifies whether table borders are visible or hidden?",
    question_hi: "टेबल की बॉर्डर को दिखाने या छिपाने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-style", "border-width", "border-spacing", "border-collapse"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर की मोटाई (border-width)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which value of border-collapse collapses the borders into a single border?",
    question_hi: "border-collapse की कौन सी वैल्यू बॉर्डर्स को एकल बॉर्डर में बदलती है?",
    options_en: ["collapse", "separate", "hidden", "visible"],
    options_hi: ["कॉलैप्स (collapse)", "सेपरेट (separate)", "हिडन (hidden)", "विज़िबल (visible)"],
    answer_en: "collapse",
    answer_hi: "कॉलैप्स (collapse)",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property defines the color of the border of a table cell?",
    question_hi: "टेबल सेल की बॉर्डर का रंग कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["border-color", "background-color", "color", "border-width"],
    options_hi: ["बॉर्डर रंग (border-color)", "बैकग्राउंड रंग (background-color)", "रंग (color)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर रंग (border-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property sets the background color inside table cells?",
    question_hi: "टेबल सेल के अंदर बैकग्राउंड रंग सेट करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["background-color", "color", "border-color", "border-spacing"],
    options_hi: ["बैकग्राउंड रंग (background-color)", "रंग (color)", "बॉर्डर रंग (border-color)", "सेलों के बीच जगह (border-spacing)"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड रंग (background-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property determines the layout of the table’s borders?",
    question_hi: "टेबल के बॉर्डर के लेआउट को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-collapse", "border-spacing", "padding", "margin"],
    options_hi: ["बॉर्डर-कॉलैप्स (border-collapse)", "सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-collapse",
    answer_hi: "बॉर्डर-कॉलैप्स (border-collapse)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property sets the horizontal alignment of text in table cells?",
    question_hi: "टेबल सेल्स में टेक्स्ट की क्षैतिज संरेखण सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["text-align", "vertical-align", "padding", "margin"],
    options_hi: ["टेक्स्ट-अलाइन (text-align)", "वर्टिकल-अलाइन (vertical-align)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-अलाइन (text-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property sets the vertical alignment of content in table cells?",
    question_hi: "टेबल सेल्स में कंटेंट की ऊर्ध्वाधर संरेखण सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["vertical-align", "text-align", "padding", "margin"],
    options_hi: ["वर्टिकल-अलाइन (vertical-align)", "टेक्स्ट-अलाइन (text-align)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल-अलाइन (vertical-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property specifies the style of the border (solid, dashed, dotted) for table cells?",
    question_hi: "टेबल सेल्स के लिए बॉर्डर का स्टाइल (सॉलिड, डैश्ड, डॉटेड) कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-spacing"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर रंग (border-color)", "सेलों के बीच जगह (border-spacing)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property specifies if the table layout algorithm is fixed or automatic?",
    question_hi: "टेबल लेआउट एल्गोरिद्म फिक्स्ड या ऑटोमेटिक होने को कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["table-layout", "border-collapse", "border-spacing", "padding"],
    options_hi: ["टेबल-लेआउट (table-layout)", "बॉर्डर-कॉलैप्स (border-collapse)", "सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)"],
    answer_en: "table-layout",
    answer_hi: "टेबल-लेआउट (table-layout)",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which value of table-layout makes the table width depend on the content?",
    question_hi: "table-layout की कौन सी वैल्यू टेबल की चौड़ाई को कंटेंट पर निर्भर बनाती है?",
    options_en: ["auto", "fixed", "inherit", "initial"],
    options_hi: ["ऑटो (auto)", "फिक्स्ड (fixed)", "इनहेरिट (inherit)", "इनिशियल (initial)"],
    answer_en: "auto",
    answer_hi: "ऑटो (auto)",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property sets the caption alignment of a table?",
    question_hi: "टेबल के कैप्शन की संरेखण सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["caption-side", "caption-align", "text-align", "vertical-align"],
    options_hi: ["कैप्शन-साइड (caption-side)", "कैप्शन-अलाइन (caption-align)", "टेक्स्ट-अलाइन (text-align)", "वर्टिकल-अलाइन (vertical-align)"],
    answer_en: "caption-side",
    answer_hi: "कैप्शन-साइड (caption-side)",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property specifies the width of a table?",
    question_hi: "टेबल की चौड़ाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["width", "height", "border-width", "margin"],
    options_hi: ["चौड़ाई (width)", "ऊंचाई (height)", "बॉर्डर की मोटाई (border-width)", "मार्जिन (margin)"],
    answer_en: "width",
    answer_hi: "चौड़ाई (width)",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property sets the height of a table row?",
    question_hi: "टेबल रो की ऊंचाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["height", "width", "padding", "margin"],
    options_hi: ["ऊंचाई (height)", "चौड़ाई (width)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "height",
    answer_hi: "ऊंचाई (height)",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property controls whether table cells wrap content or overflow?",
    question_hi: "टेबल सेल्स में कंटेंट रैप हो या ओवरफ्लो हो इसे नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["white-space", "overflow", "text-wrap", "text-overflow"],
    options_hi: ["व्हाइट-स्पेस (white-space)", "ओवरफ्लो (overflow)", "टेक्स्ट-रैप (text-wrap)", "टेक्स्ट-ओवरफ्लो (text-overflow)"],
    answer_en: "white-space",
    answer_hi: "व्हाइट-स्पेस (white-space)",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to add a border around the entire table?",
    question_hi: "पूरे टेबल के चारों ओर बॉर्डर जोड़ने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["border", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर (border)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर रंग (border-color)"],
    answer_en: "border",
    answer_hi: "बॉर्डर (border)",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property sets the minimum width of a table column?",
    question_hi: "टेबल कॉलम की न्यूनतम चौड़ाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["min-width", "max-width", "width", "table-layout"],
    options_hi: ["मिन-चौड़ाई (min-width)", "मैक्स-चौड़ाई (max-width)", "चौड़ाई (width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "min-width",
    answer_hi: "मिन-चौड़ाई (min-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property controls spacing inside cells in a collapsed border table?",
    question_hi: "कॉलैप्स्ड बॉर्डर टेबल में सेल के अंदर की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["padding", "border-spacing", "margin", "border-collapse"],
    options_hi: ["पैडिंग (padding)", "सेलों के बीच जगह (border-spacing)", "मार्जिन (margin)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property makes the table responsive by setting width to 100%?",
    question_hi: "टेबल को रेस्पॉन्सिव बनाने के लिए कौन सी CSS प्रॉपर्टी की चौड़ाई 100% सेट करती है?",
    options_en: ["width", "max-width", "min-width", "table-layout"],
    options_hi: ["चौड़ाई (width)", "मैक्स-चौड़ाई (max-width)", "मिन-चौड़ाई (min-width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "width",
    answer_hi: "चौड़ाई (width)",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property sets the space between the border and the content of a table cell?",
    question_hi: "टेबल सेल के कंटेंट और बॉर्डर के बीच की जगह कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["padding", "margin", "border-spacing", "border-width"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property sets the table’s border color and style together?",
    question_hi: "टेबल के बॉर्डर का रंग और स्टाइल एक साथ सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर (border)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर रंग (border-color)"],
    answer_en: "border",
    answer_hi: "बॉर्डर (border)",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property controls the spacing between table rows?",
    question_hi: "टेबल की पंक्तियों के बीच की जगह को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "border-collapse", "padding", "margin"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which CSS property allows you to specify whether table cells have fixed or dynamic widths?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेबल सेल्स की चौड़ाई को फिक्स्ड या डायनेमिक बनाने की अनुमति देती है?",
    options_en: ["table-layout", "width", "border-collapse", "padding"],
    options_hi: ["टेबल-लेआउट (table-layout)", "चौड़ाई (width)", "बॉर्डर-कॉलैप्स (border-collapse)", "पैडिंग (padding)"],
    answer_en: "table-layout",
    answer_hi: "टेबल-लेआउट (table-layout)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the default value of the 'border-collapse' property?",
    question_hi: "'border-collapse' प्रॉपर्टी का डिफॉल्ट मान क्या है?",
    options_en: ["separate", "collapse", "hidden", "visible"],
    options_hi: ["सेपरेट (separate)", "कॉलैप्स (collapse)", "हिडन (hidden)", "विज़िबल (visible)"],
    answer_en: "separate",
    answer_hi: "सेपरेट (separate)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property can be used to control the overflow of text in table cells?",
    question_hi: "टेबल सेल्स में टेक्स्ट के ओवरफ्लो को नियंत्रित करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["text-overflow", "white-space", "overflow", "word-wrap"],
    options_hi: ["टेक्स्ट-ओवरफ्लो (text-overflow)", "व्हाइट-स्पेस (white-space)", "ओवरफ्लो (overflow)", "वर्ड-रैप (word-wrap)"],
    answer_en: "text-overflow",
    answer_hi: "टेक्स्ट-ओवरफ्लो (text-overflow)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property is used to add space between table columns?",
    question_hi: "टेबल कॉलम के बीच जगह बढ़ाने के लिए कौन सी CSS प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border-spacing", "padding", "margin", "border-collapse"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property specifies the color of the table caption?",
    question_hi: "टेबल कैप्शन का रंग सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["caption-side", "color", "caption-color", "background-color"],
    options_hi: ["कैप्शन-साइड (caption-side)", "रंग (color)", "कैप्शन-रंग (caption-color)", "बैकग्राउंड रंग (background-color)"],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property specifies the placement of the table caption?",
    question_hi: "टेबल कैप्शन की जगह निर्धारित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["caption-side", "text-align", "vertical-align", "position"],
    options_hi: ["कैप्शन-साइड (caption-side)", "टेक्स्ट-अलाइन (text-align)", "वर्टिकल-अलाइन (vertical-align)", "पोजीशन (position)"],
    answer_en: "caption-side",
    answer_hi: "कैप्शन-साइड (caption-side)",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property is used to control the spacing between rows in a table?",
    question_hi: "टेबल की पंक्तियों के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-spacing", "border-collapse", "padding", "margin"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What does the 'table-layout: fixed' property do?",
    question_hi: "'table-layout: fixed' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Fixes the table layout based on fixed column widths",
      "Adjusts column widths automatically based on content",
      "Hides table borders",
      "Adds padding inside cells"
    ],
    options_hi: [
      "फिक्स्ड कॉलम चौड़ाई पर आधारित टेबल लेआउट तय करती है",
      "कंटेंट के आधार पर कॉलम चौड़ाई को ऑटोमैटिकली एडजस्ट करती है",
      "टेबल बॉर्डर छुपाती है",
      "सेलों के अंदर पैडिंग जोड़ती है"
    ],
    answer_en: "Fixes the table layout based on fixed column widths",
    answer_hi: "फिक्स्ड कॉलम चौड़ाई पर आधारित टेबल लेआउट तय करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property can be used to add borders to individual table cells?",
    question_hi: "टेबल की व्यक्तिगत सेल्स को बॉर्डर देने के लिए कौन सी प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border", "border-spacing", "margin", "padding"],
    options_hi: ["बॉर्डर (border)", "सेलों के बीच जगह (border-spacing)", "मार्जिन (margin)", "पैडिंग (padding)"],
    answer_en: "border",
    answer_hi: "बॉर्डर (border)",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which property allows you to set the maximum width of a table?",
    question_hi: "टेबल की अधिकतम चौड़ाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["max-width", "width", "min-width", "table-layout"],
    options_hi: ["मैक्स-चौड़ाई (max-width)", "चौड़ाई (width)", "मिन-चौड़ाई (min-width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "max-width",
    answer_hi: "मैक्स-चौड़ाई (max-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "How do you specify a dashed border style for table cells?",
    question_hi: "टेबल सेल्स के लिए डैश्ड बॉर्डर स्टाइल कैसे सेट करते हैं?",
    options_en: ["border-style: dashed", "border-style: solid", "border-style: dotted", "border-style: double"],
    options_hi: [
      "border-style: dashed",
      "border-style: solid",
      "border-style: dotted",
      "border-style: double"
    ],
    answer_en: "border-style: dashed",
    answer_hi: "border-style: dashed",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property controls the space between the content and the border inside table cells?",
    question_hi: "टेबल सेल के अंदर कंटेंट और बॉर्डर के बीच की जगह को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "border-width"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property is used to specify the table’s border color?",
    question_hi: "टेबल के बॉर्डर का रंग सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-color", "background-color", "color", "border-style"],
    options_hi: ["बॉर्डर रंग (border-color)", "बैकग्राउंड रंग (background-color)", "रंग (color)", "बॉर्डर-स्टाइल (border-style)"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर रंग (border-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property sets the border radius of table cells to create rounded corners?",
    question_hi: "टेबल सेल्स के कोनों को गोल बनाने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["border-radius", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर-रेडियस (border-radius)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर रंग (border-color)"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस (border-radius)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property controls the font style inside table cells?",
    question_hi: "टेबल सेल्स के अंदर फॉन्ट स्टाइल को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-style", "font-weight", "font-family", "text-align"],
    options_hi: ["फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-फैमिली (font-family)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल (font-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property sets the font weight inside table cells?",
    question_hi: "टेबल सेल्स के अंदर फॉन्ट वेट सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-weight", "font-style", "font-family", "text-align"],
    options_hi: ["फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)", "फॉन्ट-फैमिली (font-family)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट (font-weight)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property sets the font family for text inside table cells?",
    question_hi: "टेबल सेल्स के अंदर टेक्स्ट के लिए फॉन्ट फैमिली सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-family", "font-style", "font-weight", "text-align"],
    options_hi: ["फॉन्ट-फैमिली (font-family)", "फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली (font-family)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property sets the text color inside table cells?",
    question_hi: "टेबल सेल्स के अंदर टेक्स्ट का रंग सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["color", "background-color", "border-color", "text-align"],
    options_hi: ["रंग (color)", "बैकग्राउंड रंग (background-color)", "बॉर्डर रंग (border-color)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property controls the visibility of table borders?",
    question_hi: "टेबल बॉर्डर की दृश्यता को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-style", "border-width", "border-color", "border-collapse"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर रंग (border-color)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property can be used to hide table borders without removing the border style?",
    question_hi: "बॉर्डर स्टाइल हटाए बिना टेबल बॉर्डर को छुपाने के लिए कौन सी प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border-color: transparent", "border-style: none", "border-width: 0", "border-collapse: collapse"],
    options_hi: [
      "border-color: transparent",
      "border-style: none",
      "border-width: 0",
      "बॉर्डर-कॉलैप्स: कॉलैप्स (border-collapse: collapse)"
    ],
    answer_en: "border-color: transparent",
    answer_hi: "border-color: transparent",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property can be used to add a background color to an entire table?",
    question_hi: "पूरे टेबल के लिए बैकग्राउंड रंग जोड़ने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["background-color", "border-color", "color", "border-style"],
    options_hi: ["बैकग्राउंड रंग (background-color)", "बॉर्डर रंग (border-color)", "रंग (color)", "बॉर्डर-स्टाइल (border-style)"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड रंग (background-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property defines how table content is aligned horizontally by default?",
    question_hi: "डिफॉल्ट रूप से टेबल कंटेंट की क्षैतिज संरेखण कैसे होती है?",
    options_en: ["left", "center", "right", "justify"],
    options_hi: ["लेफ्ट (left)", "सेंटर (center)", "राइट (right)", "जस्टिफाई (justify)"],
    answer_en: "left",
    answer_hi: "लेफ्ट (left)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which CSS property can be used to set spacing between the borders of adjacent table cells?",
    question_hi: "निकटवर्ती टेबल सेल्स के बॉर्डर्स के बीच जगह सेट करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["border-spacing", "padding", "margin", "border-collapse"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property is used to set the width of table columns individually?",
    question_hi: "टेबल कॉलम की चौड़ाई व्यक्तिगत रूप से सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["width", "min-width", "max-width", "table-layout"],
    options_hi: ["चौड़ाई (width)", "मिन-चौड़ाई (min-width)", "मैक्स-चौड़ाई (max-width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "width",
    answer_hi: "चौड़ाई (width)",
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