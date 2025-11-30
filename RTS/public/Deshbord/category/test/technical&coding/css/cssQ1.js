const questions = [
 {
    num: 1,
    question_en: "Which property aligns text to the center?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को केंद्र में संरेखित करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट संरेखण", "ऊर्ध्वाधर संरेखण", "आइटम संरेखण", "न्यायसंगत सामग्री"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property specifies the maximum width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की अधिकतम चौड़ाई निर्दिष्ट करती है?",
    options_en: ["max-width", "min-width", "width", "height"],
    options_hi: ["अधिकतम चौड़ाई", "न्यूनतम चौड़ाई", "चौड़ाई", "ऊँचाई"],
    answer_en: "max-width",
    answer_hi: "अधिकतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property is used to make an element respond to mouse hover?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को माउस होवर पर प्रतिक्रिया देने के लिए उपयोग होती है?",
    options_en: ["hover", ":hover", "mouse-over", "pointer-events"],
    options_hi: ["होवर", ":होवर", "माउस-ओवर", "पॉइंटर इवेंट्स"],
    answer_en: ":hover",
    answer_hi: ":होवर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which CSS property is used to change the font of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग एलिमेंट के फ़ॉन्ट को बदलने के लिए किया जाता है?",
    options_en: ["font-family", "font-style", "font-weight", "text-transform"],
    options_hi: ["फ़ॉन्ट परिवार", "फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-family",
    answer_hi: "फ़ॉन्ट परिवार",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property sets the outer margin of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का बाहरी मार्जिन सेट करती है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property is used to control the space inside the element’s border?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बॉर्डर के अंदर का स्पेस नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर स्पेसिंग", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property is used to hide an element but keep its space on the page?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को छुपाती है लेकिन उसकी जगह बनाए रखती है?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property removes an element completely from the page layout?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को पूरी तरह से पेज लेआउट से हटा देती है?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["प्रदर्शन", "दृश्यता", "अपारदर्शिता", "स्थिति"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property is used to make text bold?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट को बोल्ड बनाने के लिए उपयोग होती है?",
    options_en: ["font-weight", "font-style", "text-decoration", "text-transform"],
    options_hi: ["फ़ॉन्ट मोटाई", "फ़ॉन्ट शैली", "टेक्स्ट सजावट", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-weight",
    answer_hi: "फ़ॉन्ट मोटाई",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property is used to set the transparency of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की पारदर्शिता सेट करती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "प्रदर्शन", "फिल्टर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which CSS property controls the flow of elements inside a container?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेनर के अंदर एलिमेंट्स के फ्लो को नियंत्रित करती है?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "साफ़ करना", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property is used to clear floated elements?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लोटेड एलिमेंट्स को साफ़ करने के लिए उपयोग होती है?",
    options_en: ["clear", "float", "overflow", "position"],
    options_hi: ["साफ़ करना", "तैरना", "ओवरफ्लो", "स्थिति"],
    answer_en: "clear",
    answer_hi: "साफ़ करना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property controls the position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की स्थिति नियंत्रित करती है?",
    options_en: ["position", "top", "left", "right"],
    options_hi: ["स्थिति", "ऊपर", "बाएँ", "दाएँ"],
    answer_en: "position",
    answer_hi: "स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which CSS property is used to add space between lines of text?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट की लाइनों के बीच जगह जोड़ती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["लाइन ऊँचाई", "अक्षर स्पेसिंग", "शब्द स्पेसिंग", "टेक्स्ट इंडेंट"],
    answer_en: "line-height",
    answer_hi: "लाइन ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property controls the spacing between letters?",
    question_hi: "कौन-सी प्रॉपर्टी अक्षरों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-align"],
    options_hi: ["अक्षर स्पेसिंग", "शब्द स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट संरेखण"],
    answer_en: "letter-spacing",
    answer_hi: "अक्षर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property controls the stacking order of elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट्स के स्टैकिंग क्रम को नियंत्रित करती है?",
    options_en: ["z-index", "position", "stack", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति (position)", "स्टैक (stack)", "क्रम (order)"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property is used to change the background color of an element?",
    question_hi: "किस प्रॉपर्टी का उपयोग एलिमेंट के पृष्ठभूमि रंग को बदलने के लिए किया जाता है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["पृष्ठभूमि रंग", "रंग", "पृष्ठभूमि छवि", "बॉर्डर रंग"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property controls the text size?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट का आकार नियंत्रित करती है?",
    options_en: ["font-size", "text-size", "font-style", "text-style"],
    options_hi: ["फ़ॉन्ट आकार", "टेक्स्ट आकार", "फ़ॉन्ट शैली", "टेक्स्ट शैली"],
    answer_en: "font-size",
    answer_hi: "फ़ॉन्ट आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS property controls the visibility of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["visibility", "display", "opacity", "filter"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "फिल्टर"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to add a border around an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के चारों ओर बॉर्डर जोड़ने के लिए उपयोग होती है?",
    options_en: ["border", "outline", "margin", "padding"],
    options_hi: ["बॉर्डर", "आउटलाइन", "मार्जिन", "पैडिंग"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which CSS property specifies the font style?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ़ॉन्ट शैली निर्दिष्ट करती है?",
    options_en: ["font-style", "font-weight", "font-family", "text-transform"],
    options_hi: ["फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "फ़ॉन्ट परिवार", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-style",
    answer_hi: "फ़ॉन्ट शैली",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property is used to transform text to uppercase?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को अपरकेस में बदलने के लिए उपयोग होती है?",
    options_en: ["text-transform", "text-decoration", "text-align", "text-indent"],
    options_hi: ["टेक्स्ट ट्रांसफॉर्म", "टेक्स्ट सजावट", "टेक्स्ट संरेखण", "टेक्स्ट इंडेंट"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property controls the overflow of content?",
    question_hi: "कौन-सी प्रॉपर्टी कंटेंट के ओवरफ्लो को नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "text-overflow"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "टेक्स्ट ओवरफ्लो"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property is used to change the cursor on mouse hover?",
    question_hi: "माउस होवर पर कर्सर को बदलने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property is used to set the height of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की ऊँचाई सेट करने के लिए उपयोग होती है?",
    options_en: ["height", "width", "max-height", "min-height"],
    options_hi: ["ऊँचाई", "चौड़ाई", "अधिकतम ऊँचाई", "न्यूनतम ऊँचाई"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property is used to control the space between words?",
    question_hi: "शब्दों के बीच की दूरी नियंत्रित करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["शब्द स्पेसिंग", "अक्षर स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट इंडेंट"],
    answer_en: "word-spacing",
    answer_hi: "शब्द स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which CSS property is used to make an element’s corners rounded?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के कोनों को गोल बनाने के लिए उपयोग होती है?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर रेडियस", "बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property is used to set the transparency of the background image?",
    question_hi: "पृष्ठभूमि छवि की पारदर्शिता सेट करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["background-opacity", "opacity", "background-transparent", "visibility"],
    options_hi: ["पृष्ठभूमि अपारदर्शिता", "अपारदर्शिता", "पृष्ठभूमि पारदर्शिता", "दृश्यता"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property controls the style of the list item marker?",
    question_hi: "कौन-सी प्रॉपर्टी सूची आइटम मार्कर की शैली नियंत्रित करती है?",
    options_en: ["list-style-type", "list-style-position", "list-style", "marker-style"],
    options_hi: ["लिस्ट स्टाइल टाइप", "लिस्ट स्टाइल पोजीशन", "लिस्ट स्टाइल", "मार्कर स्टाइल"],
    answer_en: "list-style-type",
    answer_hi: "लिस्ट स्टाइल टाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property sets the style of the border?",
    question_hi: "कौन-सी प्रॉपर्टी बॉर्डर की शैली सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग", "बॉर्डर रेडियस"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property controls the visibility of overflow content?",
    question_hi: "कौन-सी प्रॉपर्टी ओवरफ्लो कंटेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "clip"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "क्लिप"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which CSS property specifies the stacking context?",
    question_hi: "कौन-सी CSS प्रॉपर्टी स्टैकिंग कॉन्टेक्स्ट निर्दिष्ट करती है?",
    options_en: ["z-index", "stacking-context", "position", "order"],
    options_hi: ["z-इंडेक्स", "स्टैकिंग कॉन्टेक्स्ट", "स्थिति", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property is used to change the display of an element to block?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का प्रदर्शन ब्लॉक में बदलती है?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["प्रदर्शन", "दृश्यता", "स्थिति", "तैरना"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property is used to control the position of a background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि की स्थिति नियंत्रित करती है?",
    options_en: ["background-position", "background-repeat", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-position",
    answer_hi: "पृष्ठभूमि स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property is used to repeat a background image?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को दोहराने के लिए उपयोग होती है?",
    options_en: ["background-repeat", "background-position", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि स्थिति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-repeat",
    answer_hi: "पृष्ठभूमि पुनरावृत्ति",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property specifies the size of the background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि का आकार निर्दिष्ट करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["पृष्ठभूमि आकार", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-size",
    answer_hi: "पृष्ठभूमि आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property attaches the background image to the viewport or the element?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को व्यूपोर्ट या एलिमेंट से संलग्न करती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["पृष्ठभूमि संलग्नक", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार"],
    answer_en: "background-attachment",
    answer_hi: "पृष्ठभूमि संलग्नक",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls how an element’s content is displayed when it overflows?",
    question_hi: "कौन-सी CSS प्रॉपर्टी तब कंटेंट के प्रदर्शन को नियंत्रित करती है जब वह ओवरफ्लो करता है?",
    options_en: ["overflow", "visibility", "display", "opacity"],
    options_hi: ["ओवरफ्लो", "दृश्यता", "प्रदर्शन", "अपारदर्शिता"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property specifies how elements inside a flex container are aligned?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर के अंदर एलिमेंट्स को संरेखित करने का तरीका निर्दिष्ट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-direction"],
    options_hi: ["आइटम संरेखण", "न्यायसंगत सामग्री", "सामग्री संरेखण", "फ्लेक्स दिशा"],
    answer_en: "align-items",
    answer_hi: "आइटम संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which CSS property controls the flow direction of flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के फ्लो दिशा को नियंत्रित करती है?",
    options_en: ["flex-direction", "flex-wrap", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स दिशा", "फ्लेक्स रैप", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-direction",
    answer_hi: "फ्लेक्स दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property defines the wrapping behavior of flex items?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स के रैपिंग व्यवहार को परिभाषित करती है?",
    options_en: ["flex-wrap", "flex-direction", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स रैप", "फ्लेक्स दिशा", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the ability of a flex item to grow?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-grow", "flex-shrink", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-grow",
    answer_hi: "फ्लेक्स ग्रो",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the ability of a flex item to shrink?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के सिकुड़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स श्रिंक", "फ्लेक्स ग्रो", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-shrink",
    answer_hi: "फ्लेक्स श्रिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property defines the default size of a flex item before growing or shrinking?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने या सिकुड़ने से पहले की डिफ़ॉल्ट आकार को परिभाषित करती है?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    options_hi: ["फ्लेक्स बेसिस", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स रैप"],
    answer_en: "flex-basis",
    answer_hi: "फ्लेक्स बेसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which CSS property controls the space between flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के बीच की दूरी नियंत्रित करती है?",
    options_en: ["gap", "margin", "padding", "space-between"],
    options_hi: ["गैप", "मार्जिन", "पैडिंग", "स्पेस-बिटवीन"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property specifies the type of cursor when hovering over an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट पर होवर करते समय कर्सर के प्रकार को निर्दिष्ट करती है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property specifies the transition effect when a CSS property changes?",
    question_hi: "कौन-सी प्रॉपर्टी तब संक्रमण प्रभाव निर्दिष्ट करती है जब CSS प्रॉपर्टी बदलती है?",
    options_en: ["transition", "transform", "animation", "filter"],
    options_hi: ["ट्रांजिशन", "ट्रांसफॉर्म", "एनीमेशन", "फिल्टर"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls the animation duration?",
    question_hi: "कौन-सी प्रॉपर्टी एनीमेशन की अवधि नियंत्रित करती है?",
    options_en: ["animation-duration", "animation-delay", "animation-iteration-count", "animation-name"],
    options_hi: ["एनीमेशन अवधि", "एनीमेशन विलंब", "एनीमेशन पुनरावृत्ति संख्या", "एनीमेशन नाम"],
    answer_en: "animation-duration",
    answer_hi: "एनीमेशन अवधि",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to rotate an element in CSS?",
    question_hi: "CSS में एलिमेंट को घुमाने के लिए कौन-सी प्रॉपर्टी का उपयोग होता है?",
    options_en: ["transform", "transition", "animation", "rotate"],
    options_hi: ["ट्रांसफॉर्म", "ट्रांजिशन", "एनीमेशन", "रोटेट"],
    answer_en: "transform",
    answer_hi: "ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property sets the visibility of an element without removing it from the document flow?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की दृश्यता सेट करती है बिना उसे डॉक्यूमेंट फ्लो से हटाए?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
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