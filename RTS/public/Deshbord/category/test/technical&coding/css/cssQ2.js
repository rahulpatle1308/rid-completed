const questions = [
  {
    num: 1,
    question_en: "Which CSS property sets the space between the content and the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेंट और बॉर्डर के बीच की दूरी सेट करती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which CSS property sets the space outside the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की दूरी सेट करती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "स्पेसिंग"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the border thickness of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की बॉर्डर की मोटाई नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border-spacing"],
    options_hi: ["बॉर्डर चौड़ाई", "बॉर्डर शैली", "बॉर्डर रंग", "बॉर्डर स्पेसिंग"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property sets how the border of a table is displayed?",
    question_hi: "कौन-सी प्रॉपर्टी टेबल के बॉर्डर के प्रदर्शन को सेट करती है?",
    options_en: ["border-collapse", "border-style", "border-width", "border-spacing"],
    options_hi: ["बॉर्डर-कॉलैप्स", "बॉर्डर शैली", "बॉर्डर चौड़ाई", "बॉर्डर स्पेसिंग"],
    answer_en: "border-collapse",
    answer_hi: "बॉर्डर-कॉलैप्स",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property specifies the space between cells in a table?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेबल की कोशिकाओं के बीच की दूरी निर्दिष्ट करती है?",
    options_en: ["border-spacing", "border-collapse", "cell-padding", "cell-spacing"],
    options_hi: ["बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स", "सेल पैडिंग", "सेल स्पेसिंग"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property specifies whether the element is displayed as block, inline, or none?",
    question_hi: "कौन-सी प्रॉपर्टी सेट करती है कि एलिमेंट ब्लॉक, इनलाइन या नहीं दिखेगा?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["प्रदर्शन", "दृश्यता", "स्थिति", "तैरना"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls the position of an element relative to its normal position?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की स्थिति को उसके सामान्य स्थान के सापेक्ष नियंत्रित करती है?",
    options_en: ["position", "top", "left", "float"],
    options_hi: ["स्थिति", "ऊपर", "बायाँ", "तैरना"],
    answer_en: "position",
    answer_hi: "स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which value of position property makes an element positioned relative to the viewport?",
    question_hi: "position प्रॉपर्टी का कौन-सा मान एलिमेंट को व्यूपोर्ट के सापेक्ष स्थित करता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["फिक्स्ड", "एबसोल्यूट", "रिलेटिव", "स्टैटिक"],
    answer_en: "fixed",
    answer_hi: "फिक्स्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property specifies the top edge position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के शीर्ष किनारे की स्थिति निर्दिष्ट करती है?",
    options_en: ["top", "left", "right", "bottom"],
    options_hi: ["ऊपर", "बायाँ", "दायाँ", "नीचे"],
    answer_en: "top",
    answer_hi: "ऊपर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property specifies the left edge position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के बायें किनारे की स्थिति निर्दिष्ट करती है?",
    options_en: ["left", "top", "right", "bottom"],
    options_hi: ["बायाँ", "ऊपर", "दायाँ", "नीचे"],
    answer_en: "left",
    answer_hi: "बायाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property is used to clear floated elements?",
    question_hi: "तैरते हुए एलिमेंट्स को क्लियर करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["clear", "float", "position", "display"],
    options_hi: ["क्लियर", "तैरना", "स्थिति", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property specifies whether the element should float to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी निर्दिष्ट करती है कि एलिमेंट बाएं या दाएं तैरेगा?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "क्लियर", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which CSS property controls the width of the padding area?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पैडिंग क्षेत्र की चौड़ाई नियंत्रित करती है?",
    options_en: ["padding-left", "margin-left", "border-left", "width"],
    options_hi: ["पैडिंग-बायाँ", "मार्जिन-बायाँ", "बॉर्डर-बायाँ", "चौड़ाई"],
    answer_en: "padding-left",
    answer_hi: "पैडिंग-बायाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property sets the box-sizing behavior of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के बॉक्स का आकार निर्धारण करती है?",
    options_en: ["box-sizing", "box-shadow", "box-model", "box-layout"],
    options_hi: ["बॉक्स-साइज़िंग", "बॉक्स-शैडो", "बॉक्स-मॉडल", "बॉक्स-लेआउट"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property adds shadow effects around an element's frame?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के फ्रेम के चारों ओर छाया प्रभाव जोड़ती है?",
    options_en: ["box-shadow", "text-shadow", "shadow", "frame-shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो", "फ्रेम-शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls the space inside the border but outside the content?",
    question_hi: "कौन-सी प्रॉपर्टी बॉर्डर के अंदर लेकिन कंटेंट के बाहर की जगह नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "border-collapse"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property controls the space outside the border of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की जगह नियंत्रित करती है?",
    options_en: ["margin", "padding", "border-spacing", "border-collapse"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property controls how content flows around floated elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी तैरते हुए एलिमेंट्स के आस-पास कंटेंट के प्रवाह को नियंत्रित करती है?",
    options_en: ["clear", "float", "position", "display"],
    options_hi: ["क्लियर", "तैरना", "स्थिति", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property specifies the z-index of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट का z-इंडेक्स निर्दिष्ट करती है?",
    options_en: ["z-index", "position", "float", "clear"],
    options_hi: ["z-इंडेक्स", "स्थिति", "तैरना", "क्लियर"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which CSS property specifies the overflow behavior of content?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेंट के ओवरफ्लो व्यवहार को निर्दिष्ट करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "text-overflow"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-x", "ओवरफ्लो-y", "टेक्स्ट-ओवरफ्लो"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which value of overflow property clips the content and does not show scrollbars?",
    question_hi: "ओवरफ्लो प्रॉपर्टी का कौन-सा मान कंटेंट को क्लिप करता है और स्क्रॉलबार नहीं दिखाता?",
    options_en: ["hidden", "visible", "scroll", "auto"],
    options_hi: ["छुपा हुआ", "दिखाई दे रहा", "स्क्रॉल", "स्वचालित"],
    answer_en: "hidden",
    answer_hi: "छुपा हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which CSS property controls the cursor appearance when hovering over an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी माउस कर्सर की उपस्थिति को नियंत्रित करती है जब उसे एलिमेंट के ऊपर ले जाया जाता है?",
    options_en: ["cursor", "pointer-events", "hover", "focus"],
    options_hi: ["कर्सर", "पॉइंटर-इवेंट्स", "होवर", "फोकस"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property is used to add space between borders of adjacent cells?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एक-दूसरे के पास वाली कोशिकाओं के बॉर्डर के बीच जगह जोड़ती है?",
    options_en: ["border-spacing", "border-collapse", "cell-spacing", "cell-padding"],
    options_hi: ["बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स", "सेल स्पेसिंग", "सेल पैडिंग"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property specifies the type of box model used by an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट द्वारा उपयोग किए गए बॉक्स मॉडल के प्रकार को निर्दिष्ट करती है?",
    options_en: ["box-sizing", "box-model", "box-type", "box-style"],
    options_hi: ["बॉक्स-साइज़िंग", "बॉक्स-मॉडल", "बॉक्स-टाइप", "बॉक्स-स्टाइल"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls the layering of positioned elements?",
    question_hi: "कौन-सी प्रॉपर्टी स्थिति निर्धारण किए गए एलिमेंट्स की परतों को नियंत्रित करती है?",
    options_en: ["z-index", "position", "layer", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति", "लेयर", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which property specifies the height of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की ऊँचाई निर्धारित करती है?",
    options_en: ["height", "width", "size", "length"],
    options_hi: ["ऊँचाई", "चौड़ाई", "आकार", "लंबाई"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property specifies the width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की चौड़ाई निर्धारित करती है?",
    options_en: ["width", "height", "size", "length"],
    options_hi: ["चौड़ाई", "ऊँचाई", "आकार", "लंबाई"],
    answer_en: "width",
    answer_hi: "चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which CSS property sets the minimum height of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की न्यूनतम ऊँचाई सेट करती है?",
    options_en: ["min-height", "max-height", "height", "min-width"],
    options_hi: ["न्यूनतम ऊँचाई", "अधिकतम ऊँचाई", "ऊँचाई", "न्यूनतम चौड़ाई"],
    answer_en: "min-height",
    answer_hi: "न्यूनतम ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which CSS property sets the maximum width of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की अधिकतम चौड़ाई सेट करती है?",
    options_en: ["max-width", "min-width", "width", "max-height"],
    options_hi: ["अधिकतम चौड़ाई", "न्यूनतम चौड़ाई", "चौड़ाई", "अधिकतम ऊँचाई"],
    answer_en: "max-width",
    answer_hi: "अधिकतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property controls the visibility of an element but does not affect the layout?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है लेकिन लेआउट को प्रभावित नहीं करती?",
    options_en: ["visibility", "display", "opacity", "overflow"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "ओवरफ्लो"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property controls the opacity level of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की अपारदर्शिता स्तर नियंत्रित करती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "प्रदर्शन", "फिल्टर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property is used to specify the overflow content behavior when it exceeds the element size?",
    question_hi: "जब कंटेंट एलिमेंट के आकार से अधिक हो जाए तो overflow कंटेंट व्यवहार निर्धारित करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["overflow", "visibility", "display", "opacity"],
    options_hi: ["ओवरफ्लो", "दृश्यता", "प्रदर्शन", "अपारदर्शिता"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which value of overflow property adds scrollbars to the element?",
    question_hi: "overflow प्रॉपर्टी का कौन-सा मान एलिमेंट में स्क्रॉलबार जोड़ता है?",
    options_en: ["scroll", "hidden", "visible", "auto"],
    options_hi: ["स्क्रॉल", "छुपा हुआ", "दिखाई दे रहा", "स्वचालित"],
    answer_en: "scroll",
    answer_hi: "स्क्रॉल",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property controls the alignment of inline content within a block element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ब्लॉक एलिमेंट के अंदर इनलाइन कंटेंट की संरेखण को नियंत्रित करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट संरेखण", "वर्टिकल संरेखण", "आइटम संरेखण", "जस्टिफाई कंटेंट"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS property controls vertical alignment of inline elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी इनलाइन एलिमेंट्स की ऊर्ध्वाधर संरेखण नियंत्रित करती है?",
    options_en: ["vertical-align", "text-align", "align-items", "justify-content"],
    options_hi: ["वर्टिकल संरेखण", "टेक्स्ट संरेखण", "आइटम संरेखण", "जस्टिफाई कंटेंट"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property specifies how an element is displayed when it is hidden from the layout?",
    question_hi: "कौन-सी CSS प्रॉपर्टी सेट करती है कि एलिमेंट लेआउट से छुपाए जाने पर कैसे दिखेगा?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["प्रदर्शन", "दृश्यता", "अपारदर्शिता", "स्थिति"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which value of display property hides the element and removes it from the layout flow?",
    question_hi: "display प्रॉपर्टी का कौन-सा मान एलिमेंट को छुपाता है और लेआउट प्रवाह से हटाता है?",
    options_en: ["none", "block", "inline", "hidden"],
    options_hi: ["कोई नहीं", "ब्लॉक", "इनलाइन", "छुपा हुआ"],
    answer_en: "none",
    answer_hi: "कोई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls the box shadow's horizontal and vertical offsets?",
    question_hi: "कौन-सी CSS प्रॉपर्टी बॉक्स शैडो के क्षैतिज और ऊर्ध्वाधर ऑफसेट को नियंत्रित करती है?",
    options_en: ["box-shadow", "text-shadow", "shadow-offset", "box-offset"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो-ऑफसेट", "बॉक्स-ऑफसेट"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property controls the order in which flex items appear?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स की दिखाई देने की क्रम को नियंत्रित करती है?",
    options_en: ["order", "flex-order", "z-index", "position"],
    options_hi: ["क्रम", "फ्लेक्स-क्रम", "z-इंडेक्स", "स्थिति"],
    answer_en: "order",
    answer_hi: "क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which CSS property specifies how flex items are aligned along the main axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी मुख्य अक्ष के साथ फ्लेक्स आइटम्स की संरेखण निर्दिष्ट करती है?",
    options_en: ["justify-content", "align-items", "align-content", "flex-align"],
    options_hi: ["जस्टिफाई कंटेंट", "आइटम संरेखण", "कंटेंट संरेखण", "फ्लेक्स संरेखण"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property specifies how flex items are aligned along the cross axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी क्रॉस अक्ष के साथ फ्लेक्स आइटम्स की संरेखण निर्दिष्ट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-align"],
    options_hi: ["आइटम संरेखण", "जस्टिफाई कंटेंट", "कंटेंट संरेखण", "फ्लेक्स संरेखण"],
    answer_en: "align-items",
    answer_hi: "आइटम संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property controls the wrapping of flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के रैपिंग को नियंत्रित करती है?",
    options_en: ["flex-wrap", "flex-flow", "flex-wrap-flow", "flex-direction"],
    options_hi: ["फ्लेक्स-रैप", "फ्लेक्स-फ्लो", "फ्लेक्स-रैप-फ्लो", "फ्लेक्स-दिशा"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the space between flex items?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स के बीच की दूरी नियंत्रित करती है?",
    options_en: ["gap", "margin", "padding", "spacing"],
    options_hi: ["गैप", "मार्जिन", "पैडिंग", "स्पेसिंग"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which CSS property is used to control the floating of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के तैरने को नियंत्रित करने के लिए उपयोग होती है?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "क्लियर", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property clears the floated elements and forces the container to wrap them?",
    question_hi: "कौन-सी प्रॉपर्टी तैरते हुए एलिमेंट्स को क्लियर करती है और कंटेनर को उन्हें लपेटने के लिए मजबूर करती है?",
    options_en: ["clear", "float", "overflow", "display"],
    options_hi: ["क्लियर", "तैरना", "ओवरफ्लो", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property is used to control the stacking context of positioned elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी स्थिति निर्धारण किए गए एलिमेंट्स के स्टैकिंग संदर्भ को नियंत्रित करती है?",
    options_en: ["z-index", "position", "stack", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति", "स्टैक", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which CSS property defines how an element's width and height are calculated?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि किसी एलिमेंट की चौड़ाई और ऊँचाई कैसे गणना की जाती है?",
    options_en: ["box-sizing", "width", "height", "size"],
    options_hi: ["बॉक्स-साइज़िंग", "चौड़ाई", "ऊँचाई", "आकार"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS property controls the text indentation of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के टेक्स्ट इंडेंटेशन को नियंत्रित करती है?",
    options_en: ["text-indent", "text-align", "text-justify", "text-spacing"],
    options_hi: ["टेक्स्ट इंडेंट", "टेक्स्ट संरेखण", "टेक्स्ट जस्टिफाई", "टेक्स्ट स्पेसिंग"],
    answer_en: "text-indent",
    answer_hi: "टेक्स्ट इंडेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property controls the line height of text within an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के अंदर टेक्स्ट की लाइन ऊँचाई को नियंत्रित करती है?",
    options_en: ["line-height", "font-size", "text-height", "text-spacing"],
    options_hi: ["लाइन-ऊँचाई", "फॉन्ट साइज", "टेक्स्ट-ऊँचाई", "टेक्स्ट-स्पेसिंग"],
    answer_en: "line-height",
    answer_hi: "लाइन-ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property controls how text is wrapped inside an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी नियंत्रित करती है कि टेक्स्ट किसी एलिमेंट के अंदर कैसे लिपटा जाता है?",
    options_en: ["word-wrap", "text-wrap", "text-align", "white-space"],
    options_hi: ["वर्ड-रैप", "टेक्स्ट-रैप", "टेक्स्ट संरेखण", "व्हाइट-स्पेस"],
    answer_en: "word-wrap",
    answer_hi: "वर्ड-रैप",
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