const questions = [
  {
    num: 1,
    question_en: "Which CSS property is used to apply a 2D or 3D transformation to an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग किसी एलिमेंट पर 2D या 3D ट्रांसफॉर्मेशन लागू करने के लिए किया जाता है?",
    options_en: ["transform", "transition", "animation", "transform-origin"],
    options_hi: ["ट्रांसफॉर्म (transform)", "ट्रांजिशन (transition)", "एनिमेशन (animation)", "ट्रांसफॉर्म-ओरिजिन (transform-origin)"],
    answer_en: "transform",
    answer_hi: "ट्रांसफॉर्म (transform)",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property controls the spacing between lines of text?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट की पंक्तियों के बीच की दूरी को नियंत्रित करती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["लाइन-हाइट (line-height)", "लेटर-स्पेसिंग (letter-spacing)", "वर्ड-स्पेसिंग (word-spacing)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट (line-height)",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which CSS property is used to change the background color of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग किसी एलिमेंट के बैकग्राउंड रंग को बदलने के लिए किया जाता है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["बैकग्राउंड-कलर (background-color)", "कलर (color)", "बैकग्राउंड-इमेज (background-image)", "बॉर्डर-कलर (border-color)"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड-कलर (background-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property defines the style of the border around an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के चारों ओर बॉर्डर का स्टाइल निर्धारित करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर-विथ (border-width)", "बॉर्डर-कलर (border-color)", "बॉर्डर-रेडियस (border-radius)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property is used to control the transparency of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग किसी एलिमेंट की पारदर्शिता को नियंत्रित करने के लिए किया जाता है?",
    options_en: ["opacity", "visibility", "display", "z-index"],
    options_hi: ["अपैसिटी (opacity)", "विजिबिलिटी (visibility)", "डिस्प्ले (display)", "जेड-इंडेक्स (z-index)"],
    answer_en: "opacity",
    answer_hi: "अपैसिटी (opacity)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property is used to make the text bold in CSS?",
    question_hi: "CSS में टेक्स्ट को बोल्ड बनाने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["font-weight", "font-style", "text-decoration", "text-transform"],
    options_hi: ["फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)", "टेक्स्ट-डेकोरेशन (text-decoration)", "टेक्स्ट-ट्रांसफॉर्म (text-transform)"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट (font-weight)",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which CSS property is used to change the font size?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग फॉन्ट का आकार बदलने के लिए किया जाता है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["फॉन्ट-साइज (font-size)", "फॉन्ट-फैमिली (font-family)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज (font-size)",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property specifies how an element is displayed on the page?",
    question_hi: "कौन-सी प्रॉपर्टी यह बताती है कि पेज पर किसी एलिमेंट को कैसे प्रदर्शित किया जाए?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["डिस्प्ले (display)", "विजिबिलिटी (visibility)", "पोजीशन (position)", "फ्लोट (float)"],
    answer_en: "display",
    answer_hi: "डिस्प्ले (display)",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property is used to position an element relative to its normal position?",
    question_hi: "कौन-सी प्रॉपर्टी का उपयोग एलिमेंट को उसके सामान्य स्थान के सापेक्ष पोजीशन करने के लिए किया जाता है?",
    options_en: ["position", "top", "left", "z-index"],
    options_hi: ["पोजीशन (position)", "टॉप (top)", "लेफ्ट (left)", "जेड-इंडेक्स (z-index)"],
    answer_en: "position",
    answer_hi: "पोजीशन (position)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property controls the space inside an element between its content and its border?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के अंदर उसके कंटेंट और बॉर्डर के बीच की जगह को नियंत्रित करती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property controls the space outside an element's border?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की जगह को नियंत्रित करती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["मार्जिन (margin)", "पैडिंग (padding)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property defines the font family of the text?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट के फॉन्ट फैमिली को निर्धारित करती है?",
    options_en: ["font-family", "font-size", "font-weight", "font-style"],
    options_hi: ["फॉन्ट-फैमिली (font-family)", "फॉन्ट-साइज (font-size)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली (font-family)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which CSS property controls the stacking order of overlapping elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ओवरलैपिंग एलिमेंट्स के स्टैकिंग ऑर्डर को नियंत्रित करती है?",
    options_en: ["z-index", "opacity", "visibility", "position"],
    options_hi: ["जेड-इंडेक्स (z-index)", "अपैसिटी (opacity)", "विजिबिलिटी (visibility)", "पोजीशन (position)"],
    answer_en: "z-index",
    answer_hi: "जेड-इंडेक्स (z-index)",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property is used to make an element invisible but still take up space?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को अदृश्य तो बनाती है लेकिन उसकी जगह बनाए रखती है?",
    options_en: ["visibility", "display", "opacity", "z-index"],
    options_hi: ["विजिबिलिटी (visibility)", "डिस्प्ले (display)", "अपैसिटी (opacity)", "जेड-इंडेक्स (z-index)"],
    answer_en: "visibility",
    answer_hi: "विजिबिलिटी (visibility)",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS property is used to add space between letters?",
    question_hi: "कौन-सी CSS प्रॉपर्टी अक्षरों के बीच जगह जोड़ने के लिए उपयोग होती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
    options_hi: ["लेटर-स्पेसिंग (letter-spacing)", "वर्ड-स्पेसिंग (word-spacing)", "लाइन-हाइट (line-height)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "letter-spacing",
    answer_hi: "लेटर-स्पेसिंग (letter-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls how text is transformed (uppercase, lowercase, capitalize)?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को अपरकेस, लोअरकेस या कैपिटलाइज़ करती है?",
    options_en: ["text-transform", "text-decoration", "font-style", "font-weight"],
    options_hi: ["टेक्स्ट-ट्रांसफॉर्म (text-transform)", "टेक्स्ट-डेकोरेशन (text-decoration)", "फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म (text-transform)",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property is used to underline text in CSS?",
    question_hi: "CSS में टेक्स्ट को अंडरलाइन करने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["text-decoration", "text-transform", "font-weight", "font-style"],
    options_hi: ["टेक्स्ट-डेकोरेशन (text-decoration)", "टेक्स्ट-ट्रांसफॉर्म (text-transform)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "text-decoration",
    answer_hi: "टेक्स्ट-डेकोरेशन (text-decoration)",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property allows you to set the distance between words?",
    question_hi: "कौन-सी CSS प्रॉपर्टी शब्दों के बीच की दूरी सेट करने की अनुमति देती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["वर्ड-स्पेसिंग (word-spacing)", "लेटर-स्पेसिंग (letter-spacing)", "लाइन-हाइट (line-height)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग (word-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property specifies the type of cursor to be displayed when hovering over an element?",
    question_hi: "कौन-सी प्रॉपर्टी यह बताती है कि किसी एलिमेंट पर माउस ले जाने पर कौन सा कर्सर दिखेगा?",
    options_en: ["cursor", "pointer-events", "hover", "display"],
    options_hi: ["कर्सर (cursor)", "पॉइंटर-इवेंट्स (pointer-events)", "होवर (hover)", "डिस्प्ले (display)"],
    answer_en: "cursor",
    answer_hi: "कर्सर (cursor)",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to float elements to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट्स को बाएं या दाएं फ्लोट करने के लिए उपयोग होती है?",
    options_en: ["float", "position", "clear", "display"],
    options_hi: ["फ्लोट (float)", "पोजीशन (position)", "क्लियर (clear)", "डिस्प्ले (display)"],
    answer_en: "float",
    answer_hi: "फ्लोट (float)",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property clears floated elements?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लोट किए गए एलिमेंट्स को क्लियर करती है?",
    options_en: ["clear", "float", "display", "position"],
    options_hi: ["क्लियर (clear)", "फ्लोट (float)", "डिस्प्ले (display)", "पोजीशन (position)"],
    answer_en: "clear",
    answer_hi: "क्लियर (clear)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property sets the maximum width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की अधिकतम चौड़ाई सेट करती है?",
    options_en: ["max-width", "min-width", "width", "height"],
    options_hi: ["मैक्स-विथ (max-width)", "मिन-विथ (min-width)", "विड्थ (width)", "हाइट (height)"],
    answer_en: "max-width",
    answer_hi: "मैक्स-विथ (max-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property sets the stacking context to create a new stacking order?",
    question_hi: "कौन-सी प्रॉपर्टी नया स्टैकिंग ऑर्डर बनाने के लिए स्टैकिंग कॉन्टेक्स्ट सेट करती है?",
    options_en: ["position", "z-index", "opacity", "display"],
    options_hi: ["पोजीशन (position)", "जेड-इंडेक्स (z-index)", "अपैसिटी (opacity)", "डिस्प्ले (display)"],
    answer_en: "position",
    answer_hi: "पोजीशन (position)",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property is used to add animation to an element in CSS?",
    question_hi: "CSS में किसी एलिमेंट में एनिमेशन जोड़ने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["animation", "transition", "transform", "keyframes"],
    options_hi: ["एनिमेशन (animation)", "ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "कीफ्रेम्स (keyframes)"],
    answer_en: "animation",
    answer_hi: "एनिमेशन (animation)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property specifies the duration of a CSS transition?",
    question_hi: "कौन-सी प्रॉपर्टी CSS ट्रांजिशन की अवधि निर्धारित करती है?",
    options_en: ["transition-duration", "animation-duration", "transition-delay", "animation-delay"],
    options_hi: ["ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-ड्यूरेशन (animation-duration)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-duration",
    answer_hi: "ट्रांजिशन-ड्यूरेशन (transition-duration)",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property controls the delay before a CSS transition starts?",
    question_hi: "कौन-सी प्रॉपर्टी CSS ट्रांजिशन शुरू होने से पहले की देरी को नियंत्रित करती है?",
    options_en: ["transition-delay", "transition-duration", "animation-delay", "animation-duration"],
    options_hi: ["ट्रांजिशन-डिले (transition-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)"],
    answer_en: "transition-delay",
    answer_hi: "ट्रांजिशन-डिले (transition-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property is used to specify the timing function of a CSS transition?",
    question_hi: "कौन-सी प्रॉपर्टी CSS ट्रांजिशन के टाइमिंग फंक्शन को निर्दिष्ट करती है?",
    options_en: ["transition-timing-function", "transition-delay", "animation-timing-function", "animation-delay"],
    options_hi: ["ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-timing-function",
    answer_hi: "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which CSS property is used to specify the type of positioning method used for an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के लिए पोजिशनिंग विधि का प्रकार निर्दिष्ट करती है?",
    options_en: ["position", "display", "float", "clear"],
    options_hi: ["पोजीशन (position)", "डिस्प्ले (display)", "फ्लोट (float)", "क्लियर (clear)"],
    answer_en: "position",
    answer_hi: "पोजीशन (position)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What value of the position property allows an element to be positioned relative to the nearest positioned ancestor?",
    question_hi: "पोजीशन प्रॉपर्टी का कौन सा मान एलिमेंट को उसके सबसे नजदीकी पोजीशन्ड एंसेस्टर के सापेक्ष पोजीशन करने देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["रिलेटिव (relative)", "एब्सोल्यूट (absolute)", "फिक्स्ड (fixed)", "स्टैटिक (static)"],
    answer_en: "relative",
    answer_hi: "रिलेटिव (relative)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which position value fixes an element relative to the viewport?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को व्यूपोर्ट के सापेक्ष फिक्स करता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["फिक्स्ड (fixed)", "एब्सोल्यूट (absolute)", "रिलेटिव (relative)", "स्टैटिक (static)"],
    answer_en: "fixed",
    answer_hi: "फिक्स्ड (fixed)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property specifies the stacking order of positioned elements?",
    question_hi: "कौन-सी प्रॉपर्टी पोजीशन्ड एलिमेंट्स के स्टैकिंग ऑर्डर को निर्दिष्ट करती है?",
    options_en: ["z-index", "opacity", "display", "visibility"],
    options_hi: ["जेड-इंडेक्स (z-index)", "अपैसिटी (opacity)", "डिस्प्ले (display)", "विजिबिलिटी (visibility)"],
    answer_en: "z-index",
    answer_hi: "जेड-इंडेक्स (z-index)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which CSS property controls the size of the font in an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट में फॉन्ट के आकार को नियंत्रित करती है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["फॉन्ट-साइज (font-size)", "फॉन्ट-फैमिली (font-family)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज (font-size)",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the font style such as italic or normal?",
    question_hi: "कौन-सी प्रॉपर्टी फॉन्ट स्टाइल को नियंत्रित करती है जैसे इटैलिक या सामान्य?",
    options_en: ["font-style", "font-weight", "font-family", "text-decoration"],
    options_hi: ["फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-फैमिली (font-family)", "टेक्स्ट-डेकोरेशन (text-decoration)"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल (font-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property specifies whether an element is visible or hidden?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्दिष्ट करती है कि कोई एलिमेंट दिखेगा या छिपा रहेगा?",
    options_en: ["visibility", "display", "opacity", "z-index"],
    options_hi: ["विजिबिलिटी (visibility)", "डिस्प्ले (display)", "अपैसिटी (opacity)", "जेड-इंडेक्स (z-index)"],
    answer_en: "visibility",
    answer_hi: "विजिबिलिटी (visibility)",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which value of the display property hides an element and removes it from the document flow?",
    question_hi: "डिस्प्ले प्रॉपर्टी का कौन सा मान एलिमेंट को छिपाता है और इसे डॉक्यूमेंट फ्लो से हटा देता है?",
    options_en: ["none", "block", "inline", "inline-block"],
    options_hi: ["नन (none)", "ब्लॉक (block)", "इनलाइन (inline)", "इनलाइन-ब्लॉक (inline-block)"],
    answer_en: "none",
    answer_hi: "नन (none)",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property is used to set the background image of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की बैकग्राउंड इमेज सेट करने के लिए उपयोग होती है?",
    options_en: ["background-image", "background-color", "border-image", "image"],
    options_hi: ["बैकग्राउंड-इमेज (background-image)", "बैकग्राउंड-कलर (background-color)", "बॉर्डर-इमेज (border-image)", "इमेज (image)"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज (background-image)",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which CSS property defines the transparency level of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की पारदर्शिता स्तर को परिभाषित करती है?",
    options_en: ["opacity", "visibility", "filter", "z-index"],
    options_hi: ["अपैसिटी (opacity)", "विजिबिलिटी (visibility)", "फिल्टर (filter)", "जेड-इंडेक्स (z-index)"],
    answer_en: "opacity",
    answer_hi: "अपैसिटी (opacity)",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls the space between characters in text?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट में अक्षरों के बीच की जगह को नियंत्रित करती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
    options_hi: ["लेटर-स्पेसिंग (letter-spacing)", "वर्ड-स्पेसिंग (word-spacing)", "लाइन-हाइट (line-height)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "letter-spacing",
    answer_hi: "लेटर-स्पेसिंग (letter-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property defines the shape of an element's corners?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के कॉर्नर्स के आकार को परिभाषित करती है?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर-रेडियस (border-radius)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर-विथ (border-width)", "बॉर्डर-कलर (border-color)"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस (border-radius)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property is used to create rounded corners on an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट पर गोल कोनों को बनाने के लिए उपयोग होती है?",
    options_en: ["border-radius", "border-width", "border-color", "border-style"],
    options_hi: ["बॉर्डर-रेडियस (border-radius)", "बॉर्डर-विथ (border-width)", "बॉर्डर-कलर (border-color)", "बॉर्डर-स्टाइल (border-style)"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस (border-radius)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property is used to add space between the content and the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की सामग्री और बॉर्डर के बीच जगह जोड़ने के लिए उपयोग होती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the space outside the border of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की जगह को नियंत्रित करती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["मार्जिन (margin)", "पैडिंग (padding)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which CSS property is used to specify the type of cursor displayed when hovering over an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी यह निर्दिष्ट करती है कि किसी एलिमेंट पर होवर करते समय कौन सा कर्सर दिखाया जाए?",
    options_en: ["cursor", "pointer-events", "hover", "display"],
    options_hi: ["कर्सर (cursor)", "पॉइंटर-इवेंट्स (pointer-events)", "होवर (hover)", "डिस्प्ले (display)"],
    answer_en: "cursor",
    answer_hi: "कर्सर (cursor)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property specifies the vertical alignment of an inline or table-cell element?",
    question_hi: "कौन-सी प्रॉपर्टी इनलाइन या टेबल-सेल एलिमेंट की वर्टिकल एलाइन्मेंट को निर्दिष्ट करती है?",
    options_en: ["vertical-align", "text-align", "align-items", "justify-content"],
    options_hi: ["वर्टिकल-एलाइंन (vertical-align)", "टेक्स्ट-एलाइंन (text-align)", "एलाइंन-आइटम्स (align-items)", "जस्टिफाई-कंटेंट (justify-content)"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल-एलाइंन (vertical-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which CSS property sets the alignment of text inside an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के अंदर टेक्स्ट की एलाइन्मेंट सेट करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट-एलाइंन (text-align)", "वर्टिकल-एलाइंन (vertical-align)", "एलाइंन-आइटम्स (align-items)", "जस्टिफाई-कंटेंट (justify-content)"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-एलाइंन (text-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property controls the alignment of flex items along the main axis?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स को मेन एक्सिस पर एलाइन्मेंट करती है?",
    options_en: ["justify-content", "align-items", "align-content", "flex-direction"],
    options_hi: ["जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-आइटम्स (align-items)", "एलाइंन-कंटेंट (align-content)", "फ्लेक्स-डायरेक्शन (flex-direction)"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट (justify-content)",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property controls the alignment of flex items along the cross axis?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स को क्रॉस एक्सिस पर एलाइन्मेंट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-direction"],
    options_hi: ["एलाइंन-आइटम्स (align-items)", "जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-कंटेंट (align-content)", "फ्लेक्स-डायरेक्शन (flex-direction)"],
    answer_en: "align-items",
    answer_hi: "एलाइंन-आइटम्स (align-items)",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property defines the direction of the flex container's main axis?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर के मेन एक्सिस की दिशा को परिभाषित करती है?",
    options_en: ["flex-direction", "flex-wrap", "justify-content", "align-items"],
    options_hi: ["फ्लेक्स-डायरेक्शन (flex-direction)", "फ्लेक्स-व्रैप (flex-wrap)", "जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-आइटम्स (align-items)"],
    answer_en: "flex-direction",
    answer_hi: "फ्लेक्स-डायरेक्शन (flex-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property specifies whether flex items should wrap or not?",
    question_hi: "कौन-सी प्रॉपर्टी यह निर्दिष्ट करती है कि फ्लेक्स आइटम्स रैप करें या नहीं?",
    options_en: ["flex-wrap", "flex-direction", "justify-content", "align-items"],
    options_hi: ["फ्लेक्स-व्रैप (flex-wrap)", "फ्लेक्स-डायरेक्शन (flex-direction)", "जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-आइटम्स (align-items)"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-व्रैप (flex-wrap)",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property specifies the background position of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बैकग्राउंड की स्थिति को निर्दिष्ट करती है?",
    options_en: ["background-position", "background-size", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-पोजीशन (background-position)", "बैकग्राउंड-साइज़ (background-size)", "बैकग्राउंड-रिपीट (background-repeat)", "बैकग्राउंड-अटैचमेंट (background-attachment)"],
    answer_en: "background-position",
    answer_hi: "बैकग्राउंड-पोजीशन (background-position)",
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