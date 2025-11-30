const questions = [
{
    num: 1,
    question_en: "Which CSS property is used to set the position of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की स्थिति सेट करने के लिए उपयोग होती है?",
    options_en: ["position", "display", "float", "top"],
    options_hi: ["पोजीशन", "डिस्प्ले", "फ्लोट", "टॉप"],
    answer_en: "position",
    answer_hi: "पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What are the possible values of the CSS position property?",
    question_hi: "CSS position प्रॉपर्टी के संभावित मान कौन-कौन से हैं?",
    options_en: ["static, relative, absolute, fixed, sticky", "left, right, top, bottom", "block, inline, flex, grid", "visible, hidden, collapse"],
    options_hi: ["static, relative, absolute, fixed, sticky", "लेफ्ट, राइट, टॉप, बॉटम", "ब्लॉक, इनलाइन, फ्लेक्स, ग्रिड", "विजिबल, हिडन, कोलैप्स"],
    answer_en: "static, relative, absolute, fixed, sticky",
    answer_hi: "static, relative, absolute, fixed, sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default position value of an element in CSS?",
    question_hi: "CSS में किसी एलिमेंट की डिफ़ॉल्ट पोजीशन वैल्यू क्या होती है?",
    options_en: ["static", "relative", "absolute", "fixed"],
    options_hi: ["static", "relative", "absolute", "fixed"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which position value allows an element to be positioned relative to its normal position?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष स्थिति देने की अनुमति देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which position value removes the element from the normal document flow and positions it relative to the nearest positioned ancestor?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य डॉक्यूमेंट फ्लो से हटा देता है और उसे सबसे नज़दीकी पोजीशन्ड पूर्वज के सापेक्ष रखता है?",
    options_en: ["absolute", "fixed", "relative", "static"],
    options_hi: ["absolute", "fixed", "relative", "static"],
    answer_en: "absolute",
    answer_hi: "absolute",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which position value fixes the element relative to the viewport, so it stays in the same place even when the page is scrolled?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को व्यूपोर्ट के सापेक्ष फिक्स करता है, जिससे पेज स्क्रॉल होने पर भी वह अपनी जगह रहता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which position value is used to make an element behave like position: relative until it crosses a specified threshold, then behave like fixed?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को पहले relative की तरह व्यवहार करने देता है और फिर एक सीमा पार करने पर fixed की तरह?",
    options_en: ["sticky", "fixed", "absolute", "relative"],
    options_hi: ["sticky", "fixed", "absolute", "relative"],
    answer_en: "sticky",
    answer_hi: "sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "If an element has position: absolute, to which element is it positioned relative by default?",
    question_hi: "अगर किसी एलिमेंट का position: absolute है, तो वह डिफ़ॉल्ट रूप से किस एलिमेंट के सापेक्ष पोजीशन्ड होता है?",
    options_en: ["nearest positioned ancestor", "viewport", "body", "document"],
    options_hi: ["सबसे नज़दीकी पोजीशन्ड पूर्वज", "व्यूपोर्ट", "बॉडी", "डॉक्यूमेंट"],
    answer_en: "nearest positioned ancestor",
    answer_hi: "सबसे नज़दीकी पोजीशन्ड पूर्वज",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does the 'top' CSS property control in positioned elements?",
    question_hi: "'top' CSS प्रॉपर्टी पोजीशन्ड एलिमेंट्स में क्या नियंत्रित करती है?",
    options_en: ["Distance from the top edge of the containing block", "Font size", "Padding", "Margin"],
    options_hi: ["कंटेनिंग ब्लॉक के ऊपर की दूरी", "फॉन्ट साइज", "पैडिंग", "मार्जिन"],
    answer_en: "Distance from the top edge of the containing block",
    answer_hi: "कंटेनिंग ब्लॉक के ऊपर की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS properties can be used to move a positioned element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पोजीशन्ड एलिमेंट को मूव करने के लिए इस्तेमाल होती हैं?",
    options_en: ["top, right, bottom, left", "margin, padding", "display, position", "float, clear"],
    options_hi: ["टॉप, राइट, बॉटम, लेफ्ट", "मार्जिन, पैडिंग", "डिस्प्ले, पोजीशन", "फ्लोट, क्लियर"],
    answer_en: "top, right, bottom, left",
    answer_hi: "टॉप, राइट, बॉटम, लेफ्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What happens if you set position: static along with top: 10px?",
    question_hi: "अगर आप position: static सेट करें और साथ में top: 10px भी दें, तो क्या होगा?",
    options_en: ["top will have no effect", "Element moves 10px down", "Element moves 10px up", "Error in CSS"],
    options_hi: ["top का कोई असर नहीं होगा", "एलिमेंट 10px नीचे जाएगा", "एलिमेंट 10px ऊपर जाएगा", "CSS में एरर होगा"],
    answer_en: "top will have no effect",
    answer_hi: "top का कोई असर नहीं होगा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "If an element is positioned fixed, which coordinate system does it use?",
    question_hi: "अगर कोई एलिमेंट fixed पोजीशन है, तो वह कौन-सा कोऑर्डिनेट सिस्टम इस्तेमाल करता है?",
    options_en: ["Viewport", "Containing block", "Nearest positioned ancestor", "Document"],
    options_hi: ["व्यूपोर्ट", "कंटेनिंग ब्लॉक", "सबसे नज़दीकी पोजीशन्ड पूर्वज", "डॉक्यूमेंट"],
    answer_en: "Viewport",
    answer_hi: "व्यूपोर्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the effect of position: relative with no offset properties (top, left, etc.)?",
    question_hi: "अगर position: relative हो लेकिन top, left आदि ऑफसेट न दिए जाएं, तो क्या प्रभाव होगा?",
    options_en: ["Element stays in normal flow", "Element moves to top-left", "Element becomes fixed", "Element is hidden"],
    options_hi: ["एलिमेंट सामान्य फ्लो में रहता है", "एलिमेंट ऊपर-बाएँ चला जाता है", "एलिमेंट फिक्स्ड हो जाता है", "एलिमेंट छुप जाता है"],
    answer_en: "Element stays in normal flow",
    answer_hi: "एलिमेंट सामान्य फ्लो में रहता है",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which of these position values removes an element from document flow?",
    question_hi: "इनमें से कौन-सा पोजीशन मान एलिमेंट को डॉक्यूमेंट फ्लो से हटा देता है?",
    options_en: ["absolute, fixed", "relative, static", "static only", "sticky only"],
    options_hi: ["absolute, fixed", "relative, static", "static केवल", "sticky केवल"],
    answer_en: "absolute, fixed",
    answer_hi: "absolute, fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS property can be used with position: sticky to define the threshold?",
    question_hi: "position: sticky के साथ कौन-सी CSS प्रॉपर्टी सीमा निर्धारित करने के लिए उपयोग होती है?",
    options_en: ["top", "left", "z-index", "display"],
    options_hi: ["top", "left", "z-index", "डिस्प्ले"],
    answer_en: "top",
    answer_hi: "top",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which position value keeps the element in normal flow and allows top, bottom, left, right offsets to move it?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य फ्लो में रखता है और top, bottom, left, right ऑफसेट्स से मूव करने देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the stacking context related to position and z-index?",
    question_hi: "पोजीशन और z-index से जुड़ा स्टैकिंग कॉन्टेक्स्ट क्या है?",
    options_en: [
      "A hierarchy that controls overlapping of positioned elements",
      "A property to set font size",
      "A layout model for grids",
      "A browser setting"
    ],
    options_hi: [
      "एक हायार्की जो पोजीशन्ड एलिमेंट्स के ओवरलैपिंग को नियंत्रित करती है",
      "फॉन्ट साइज सेट करने की प्रॉपर्टी",
      "ग्रिड्स के लिए लेआउट मॉडल",
      "ब्राउज़र सेटिंग"
    ],
    answer_en: "A hierarchy that controls overlapping of positioned elements",
    answer_hi: "एक हायार्की जो पोजीशन्ड एलिमेंट्स के ओवरलैपिंग को नियंत्रित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "If an element with position: relative has z-index: 1, and another with position: absolute has z-index: 0, which one will be on top?",
    question_hi: "अगर एक एलिमेंट position: relative और z-index: 1 है, और दूसरा position: absolute और z-index: 0 है, तो कौन ऊपर होगा?",
    options_en: ["Relative element", "Absolute element", "Both overlap equally", "None"],
    options_hi: ["Relative एलिमेंट", "Absolute एलिमेंट", "दोनों समान रूप से ओवरलैप", "कोई नहीं"],
    answer_en: "Relative element",
    answer_hi: "Relative एलिमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS property controls the stacking order of positioned elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पोजीशन्ड एलिमेंट्स के स्टैकिंग क्रम को नियंत्रित करती है?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Can position: fixed elements overlap position: absolute elements?",
    question_hi: "क्या position: fixed एलिमेंट्स position: absolute एलिमेंट्स के ऊपर ओवरलैप कर सकते हैं?",
    options_en: ["Yes", "No", "Depends on z-index", "Only in IE browser"],
    options_hi: ["हाँ", "नहीं", "z-index पर निर्भर करता है", "सिर्फ IE ब्राउज़र में"],
    answer_en: "Depends on z-index",
    answer_hi: "z-index पर निर्भर करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which position value should be used to make a header stay visible at the top when scrolling?",
    question_hi: "स्क्रॉल करते समय हेडर को टॉप पर दिखाने के लिए कौन-सा पोजीशन मान इस्तेमाल किया जाना चाहिए?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the difference between relative and absolute positioning?",
    question_hi: "relative और absolute पोजीशनिंग में क्या अंतर है?",
    options_en: [
      "Relative positions relative to itself, absolute positions relative to nearest positioned ancestor",
      "Relative positions fixed to viewport, absolute moves with page",
      "Relative removes element from flow, absolute keeps in flow",
      "No difference"
    ],
    options_hi: [
      "Relative खुद के सापेक्ष स्थिति देता है, absolute सबसे नजदीकी पोजीशन्ड पूर्वज के सापेक्ष",
      "Relative व्यूपोर्ट के सापेक्ष फिक्स होता है, absolute पेज के साथ मूव करता है",
      "Relative एलिमेंट को फ्लो से हटाता है, absolute फ्लो में रखता है",
      "कोई अंतर नहीं"
    ],
    answer_en: "Relative positions relative to itself, absolute positions relative to nearest positioned ancestor",
    answer_hi: "Relative खुद के सापेक्ष स्थिति देता है, absolute सबसे नजदीकी पोजीशन्ड पूर्वज के सापेक्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property controls the order of flex items, often used along with positioning?",
    question_hi: "कौन-सी CSS प्रॉपर्टी flex आइटम्स के क्रम को नियंत्रित करती है, जो पोजीशनिंग के साथ उपयोग होती है?",
    options_en: ["order", "z-index", "position", "flex-direction"],
    options_hi: ["order", "z-index", "पोजीशन", "flex-direction"],
    answer_en: "order",
    answer_hi: "order",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can break out of the normal flow and overlap other elements?",
    question_hi: "कौन-सी प्रॉपर्टी सामान्य फ्लो से बाहर निकलकर अन्य एलिमेंट्स के ऊपर ओवरलैप कर सकती है?",
    options_en: ["position with z-index", "margin", "padding", "display"],
    options_hi: ["position के साथ z-index", "मार्जिन", "पैडिंग", "डिस्प्ले"],
    answer_en: "position with z-index",
    answer_hi: "position के साथ z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls how an element floats to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि कोई एलिमेंट बाईं या दाईं ओर फ्लोट करे?",
    options_en: ["float", "position", "display", "z-index"],
    options_hi: ["फ्लोट", "पोजीशन", "डिस्प्ले", "z-index"],
    answer_en: "float",
    answer_hi: "फ्लोट",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property controls the stacking order of elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट्स के स्टैकिंग ऑर्डर को नियंत्रित करती है?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What happens when you set z-index to a higher value?",
    question_hi: "जब आप z-index को उच्च मान देते हैं तो क्या होता है?",
    options_en: ["Element appears on top", "Element moves down", "Element hides", "No effect"],
    options_hi: ["एलिमेंट ऊपर दिखाई देता है", "एलिमेंट नीचे चला जाता है", "एलिमेंट छुप जाता है", "कोई प्रभाव नहीं"],
    answer_en: "Element appears on top",
    answer_hi: "एलिमेंट ऊपर दिखाई देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Can z-index be used without setting position?",
    question_hi: "क्या बिना position सेट किए z-index का उपयोग किया जा सकता है?",
    options_en: ["No", "Yes", "Sometimes", "Only in IE"],
    options_hi: ["नहीं", "हाँ", "कभी-कभी", "सिर्फ IE में"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which positioning allows an element to overlap others and be moved anywhere in the document?",
    question_hi: "कौन-सी पोजीशनिंग एलिमेंट को दूसरों के ऊपर ओवरलैप करने और डॉक्यूमेंट में कहीं भी मूव करने देती है?",
    options_en: ["absolute", "relative", "static", "fixed"],
    options_hi: ["absolute", "relative", "static", "fixed"],
    answer_en: "absolute",
    answer_hi: "absolute",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which positioning type keeps an element fixed relative to the browser window?",
    question_hi: "कौन-सी पोजीशनिंग टाइप एलिमेंट को ब्राउज़र विंडो के सापेक्ष फिक्स रखती है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does 'position: static' mean?",
    question_hi: "'position: static' का क्या मतलब है?",
    options_en: ["Default position, element flows normally", "Element is fixed", "Element is positioned absolutely", "Element is sticky"],
    options_hi: ["डिफ़ॉल्ट स्थिति, एलिमेंट सामान्य फ्लो में रहता है", "एलिमेंट फिक्स्ड होता है", "एलिमेंट पूरी तरह से पोजीशन्ड होता है", "एलिमेंट sticky होता है"],
    answer_en: "Default position, element flows normally",
    answer_hi: "डिफ़ॉल्ट स्थिति, एलिमेंट सामान्य फ्लो में रहता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How does 'position: sticky' behave when you scroll past its threshold?",
    question_hi: "जब आप उसके सीमा से स्क्रॉल करते हैं तो 'position: sticky' कैसे व्यवहार करता है?",
    options_en: ["Becomes fixed", "Becomes static", "Disappears", "Becomes absolute"],
    options_hi: ["फिक्स्ड हो जाता है", "स्टैटिक हो जाता है", "गायब हो जाता है", "एब्सोल्यूट हो जाता है"],
    answer_en: "Becomes fixed",
    answer_hi: "फिक्स्ड हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which CSS property defines the stacking order when elements overlap?",
    question_hi: "जब एलिमेंट्स ओवरलैप करते हैं तो स्टैकिंग ऑर्डर कौन-सी CSS प्रॉपर्टी पर निर्भर करता है?",
    options_en: ["z-index", "top", "position", "display"],
    options_hi: ["z-index", "टॉप", "पोजीशन", "डिस्प्ले"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which positioning method removes the element from the document flow?",
    question_hi: "कौन-सी पोजीशनिंग मेथड एलिमेंट को डॉक्यूमेंट फ्लो से हटा देती है?",
    options_en: ["absolute and fixed", "relative and static", "static only", "sticky only"],
    options_hi: ["absolute और fixed", "relative और static", "सिर्फ static", "सिर्फ sticky"],
    answer_en: "absolute and fixed",
    answer_hi: "absolute और fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property controls how far an absolutely positioned element is from the left of its containing block?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि एब्सोल्यूटली पोजीशन्ड एलिमेंट अपनी कंटेनिंग ब्लॉक के बाईं ओर कितनी दूर है?",
    options_en: ["left", "margin-left", "padding-left", "position"],
    options_hi: ["left", "मार्जिन-लेफ्ट", "पैडिंग-लेफ्ट", "पोजीशन"],
    answer_en: "left",
    answer_hi: "left",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Can an element with 'position: fixed' move when the page scrolls?",
    question_hi: "क्या 'position: fixed' वाला एलिमेंट पेज स्क्रॉल होने पर मूव कर सकता है?",
    options_en: ["No", "Yes", "Sometimes", "Depends on browser"],
    options_hi: ["नहीं", "हाँ", "कभी-कभी", "ब्राउज़र पर निर्भर करता है"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "If you want an element to scroll with the page but offset from its normal position, which position should you use?",
    question_hi: "अगर आप चाहते हैं कि एलिमेंट पेज के साथ स्क्रॉल करे लेकिन अपनी सामान्य स्थिति से ऑफसेट हो, तो कौन-सा पोजीशन उपयोग करें?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What does the CSS property 'bottom' control in positioned elements?",
    question_hi: "पोजीशन्ड एलिमेंट्स में 'bottom' CSS प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Distance from the bottom edge of containing block", "Font size", "Padding", "Margin"],
    options_hi: ["कंटेनिंग ब्लॉक के नीचे की दूरी", "फॉन्ट साइज", "पैडिंग", "मार्जिन"],
    answer_en: "Distance from the bottom edge of containing block",
    answer_hi: "कंटेनिंग ब्लॉक के नीचे की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Is 'position: sticky' supported in all modern browsers?",
    question_hi: "क्या 'position: sticky' सभी आधुनिक ब्राउज़रों में समर्थित है?",
    options_en: ["Yes", "No", "Only in Chrome", "Only in Firefox"],
    options_hi: ["हाँ", "नहीं", "सिर्फ Chrome में", "सिर्फ Firefox में"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the effect of setting 'position: absolute' without specifying top, left, bottom or right?",
    question_hi: "'position: absolute' सेट करने पर बिना top, left, bottom या right निर्दिष्ट किए क्या प्रभाव होगा?",
    options_en: ["Element positioned at its normal place", "Element positioned at top-left of containing block", "Element hidden", "Element fixed"],
    options_hi: ["एलिमेंट अपनी सामान्य जगह पर रहेगा", "एलिमेंट कंटेनिंग ब्लॉक के टॉप-लेफ्ट पर पोजीशन्ड होगा", "एलिमेंट छुपा होगा", "एलिमेंट फिक्स्ड होगा"],
    answer_en: "Element positioned at its normal place",
    answer_hi: "एलिमेंट अपनी सामान्य जगह पर रहेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property specifies the distance between the element’s border and its offset position?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की बॉर्डर और उसके ऑफसेट पोजीशन के बीच की दूरी बताती है?",
    options_en: ["margin", "padding", "top", "position"],
    options_hi: ["मार्जिन", "पैडिंग", "टॉप", "पोजीशन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which positioning method is best for creating overlays or modals?",
    question_hi: "ओवरले या मोडल बनाने के लिए कौन-सी पोजीशनिंग मेथड सबसे अच्छी है?",
    options_en: ["fixed", "static", "relative", "sticky"],
    options_hi: ["fixed", "static", "relative", "sticky"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which CSS property can be used to prevent an element from moving when scrolled?",
    question_hi: "स्क्रॉल करते समय एलिमेंट को मूव होने से रोकने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["position: fixed", "position: relative", "position: absolute", "position: static"],
    options_hi: ["position: fixed", "position: relative", "position: absolute", "position: static"],
    answer_en: "position: fixed",
    answer_hi: "position: fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which positioning value allows an element to scroll with the page but remain visible until a certain scroll position?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को पेज के साथ स्क्रॉल करने देता है लेकिन एक निश्चित स्क्रॉल पोजीशन तक विजिबल रखता है?",
    options_en: ["sticky", "fixed", "absolute", "relative"],
    options_hi: ["sticky", "fixed", "absolute", "relative"],
    answer_en: "sticky",
    answer_hi: "sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which position value does not remove the element from the normal document flow?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य डॉक्यूमेंट फ्लो से नहीं हटाता?",
    options_en: ["relative", "absolute", "fixed", "sticky"],
    options_hi: ["relative", "absolute", "fixed", "sticky"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "How do 'top' and 'left' properties affect an element with position: relative?",
    question_hi: "'top' और 'left' प्रॉपर्टीज़ position: relative वाले एलिमेंट को कैसे प्रभावित करती हैं?",
    options_en: [
      "Moves element relative to its normal position",
      "Positions element absolutely",
      "Fixes element to viewport",
      "No effect"
    ],
    options_hi: [
      "एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष मूव करती हैं",
      "एलिमेंट को एब्सोल्यूटली पोजीशन्ड करती हैं",
      "एलिमेंट को व्यूपोर्ट पर फिक्स करती हैं",
      "कोई प्रभाव नहीं"
    ],
    answer_en: "Moves element relative to its normal position",
    answer_hi: "एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष मूव करती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the initial value of the CSS position property?",
    question_hi: "CSS position प्रॉपर्टी का प्रारंभिक मान क्या है?",
    options_en: ["static", "relative", "absolute", "fixed"],
    options_hi: ["static", "relative", "absolute", "fixed"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS positioning allows elements to be placed relative to their siblings?",
    question_hi: "कौन-सी CSS पोजीशनिंग एलिमेंट्स को उनके सिबलिंग्स के सापेक्ष रखने देती है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Can 'position: absolute' elements overlap 'position: relative' elements?",
    question_hi: "क्या 'position: absolute' वाले एलिमेंट्स 'position: relative' एलिमेंट्स के ऊपर ओवरलैप कर सकते हैं?",
    options_en: ["Yes", "No", "Depends on z-index", "Only sometimes"],
    options_hi: ["हाँ", "नहीं", "z-index पर निर्भर करता है", "कभी-कभी"],
    answer_en: "Depends on z-index",
    answer_hi: "z-index पर निर्भर करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property defines the order in which positioned elements overlap each other?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि पोजीशन्ड एलिमेंट्स एक-दूसरे के ऊपर किस क्रम में ओवरलैप होंगे?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
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