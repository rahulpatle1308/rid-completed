const questions = [
  {
    "num": 1,
    "question_en": "Which value of 'list-style-position' places the bullet inside the list item?",
    "question_hi": "'list-style-position' का कौन सा मान बुलेट को सूची आइटम के अंदर रखता है?",
    "options_en": ["inside", "outside", "center", "none"],
    "options_hi": ["इनसाइड", "आउटसाइड", "सेंटर", "नन"],
    "answer_en": "inside",
    "answer_hi": "इनसाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the default value of 'list-style-type' for an unordered list?",
    "question_hi": "अविन्यस्त सूची के लिए 'list-style-type' का डिफ़ॉल्ट मान क्या है?",
    "options_en": ["disc", "circle", "square", "decimal"],
    "options_hi": ["डिस्क", "सर्कल", "स्क्वायर", "डेसिमल"],
    "answer_en": "disc",
    "answer_hi": "डिस्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which property is used to remove bullet points from a list?",
    "question_hi": "सूची से बुलेट पॉइंट हटाने के लिए कौन सी प्रॉपर्टी का उपयोग किया जाता है?",
    "options_en": ["list-style-type: none;", "list-style-position: outside;", "text-decoration: none;", "bullet: none;"],
    "options_hi": ["list-style-type: none;", "list-style-position: आउटसाइड;", "text-decoration: none;", "बुलेट: नन;"],
    "answer_en": "list-style-type: none;",
    "answer_hi": "list-style-type: none;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which CSS property controls the type of marker used in a list?",
    "question_hi": "कौन सी CSS प्रॉपर्टी सूची में उपयोग किए जाने वाले मार्कर के प्रकार को नियंत्रित करती है?",
    "options_en": ["list-style-type", "list-style-position", "marker-type", "list-marker"],
    "options_hi": ["list-style-type", "list-style-position", "marker-type", "list-marker"],
    "answer_en": "list-style-type",
    "answer_hi": "list-style-type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is NOT a valid value for 'list-style-position'?",
    "question_hi": "'list-style-position' के लिए निम्नलिखित में से कौन सा मान वैध नहीं है?",
    "options_en": ["inside", "outside", "middle", "initial"],
    "options_hi": ["इनसाइड", "आउटसाइड", "मिडल", "इनिशियल"],
    "answer_en": "middle",
    "answer_hi": "मिडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which value of 'list-style-type' displays numbers in a list?",
    "question_hi": "'list-style-type' का कौन सा मान सूची में संख्याएँ प्रदर्शित करता है?",
    "options_en": ["decimal", "disc", "circle", "square"],
    "options_hi": ["डेसिमल", "डिस्क", "सर्कल", "स्क्वायर"],
    "answer_en": "decimal",
    "answer_hi": "डेसिमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does the 'list-style' shorthand property include?",
    "question_hi": "'list-style' शॉर्टहैंड प्रॉपर्टी में क्या शामिल होता है?",
    "options_en": ["type, position, image", "color, size, font", "margin, padding, border", "width, height, display"],
    "options_hi": ["टाइप, पोजीशन, इमेज", "कलर, साइज, फॉन्ट", "मार्जिन, पैडिंग, बॉर्डर", "वाइड्थ, हाइट, डिस्प्ले"],
    "answer_en": "type, position, image",
    "answer_hi": "टाइप, पोजीशन, इमेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which CSS property specifies an image as a bullet in a list?",
    "question_hi": "सूची में बुलेट के रूप में इमेज निर्दिष्ट करने वाली CSS प्रॉपर्टी कौन सी है?",
    "options_en": ["list-style-image", "list-style-type", "list-style-position", "background-image"],
    "options_hi": ["list-style-image", "list-style-type", "list-style-position", "background-image"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does 'list-style-position: outside;' do?",
    "question_hi": "'list-style-position: outside;' क्या करता है?",
    "options_en": ["Places the bullet outside the list item", "Places the bullet inside the list item", "Removes the bullet", "Centers the bullet"],
    "options_hi": ["बुलेट को सूची आइटम के बाहर रखता है", "बुलेट को सूची आइटम के अंदर रखता है", "बुलेट हटाता है", "बुलेट को केंद्रित करता है"],
    "answer_en": "Places the bullet outside the list item",
    "answer_hi": "बुलेट को सूची आइटम के बाहर रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which value of 'list-style-type' will show Roman numerals?",
    "question_hi": "'list-style-type' का कौन सा मान रोमन अंकों को दिखाता है?",
    "options_en": ["upper-roman", "lower-alpha", "decimal", "square"],
    "options_hi": ["अप्पर-रोमन", "लोअर-आल्फा", "डेसिमल", "स्क्वायर"],
    "answer_en": "upper-roman",
    "answer_hi": "अप्पर-रोमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a valid value for 'list-style-type'?",
    "question_hi": "'list-style-type' के लिए निम्नलिखित में से कौन सा मान वैध है?",
    "options_en": ["circle", "bold", "italic", "underline"],
    "options_hi": ["सर्कल", "बोल्ड", "इटैलिक", "अंडरलाइन"],
    "answer_en": "circle",
    "answer_hi": "सर्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which CSS property allows you to change the bullet shape in an unordered list?",
    "question_hi": "अविन्यस्त सूची में बुलेट का आकार बदलने वाली CSS प्रॉपर्टी कौन सी है?",
    "options_en": ["list-style-type", "list-style-position", "bullet-shape", "marker-style"],
    "options_hi": ["list-style-type", "list-style-position", "बुलेट-आकार", "मार्कर-स्टाइल"],
    "answer_en": "list-style-type",
    "answer_hi": "list-style-type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the effect of 'list-style: none;'?",
    "question_hi": "'list-style: none;' का प्रभाव क्या होता है?",
    "options_en": ["Removes bullets and numbers", "Shows default bullets", "Changes bullet color", "Centers bullets"],
    "options_hi": ["बुलेट और नंबर हटाता है", "डिफ़ॉल्ट बुलेट दिखाता है", "बुलेट का रंग बदलता है", "बुलेट को केंद्रित करता है"],
    "answer_en": "Removes bullets and numbers",
    "answer_hi": "बुलेट और नंबर हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of these is NOT a list type in CSS?",
    "question_hi": "CSS में इनमें से कौन सा सूची प्रकार नहीं है?",
    "options_en": ["decimal-leading-zero", "circle", "bold", "square"],
    "options_hi": ["डेसिमल-लीडिंग-ज़ीरो", "सर्कल", "बोल्ड", "स्क्वायर"],
    "answer_en": "bold",
    "answer_hi": "बोल्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does 'list-style-type: square;' display?",
    "question_hi": "'list-style-type: square;' क्या दिखाता है?",
    "options_en": ["Square bullets", "Circle bullets", "Numbered list", "No bullets"],
    "options_hi": ["स्क्वायर बुलेट", "सर्कल बुलेट", "संख्या सूची", "कोई बुलेट नहीं"],
    "answer_en": "Square bullets",
    "answer_hi": "स्क्वायर बुलेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "How do you place a bullet outside the list item?",
    "question_hi": "बुलेट को सूची आइटम के बाहर कैसे रखें?",
    "options_en": ["list-style-position: outside;", "list-style-position: inside;", "list-style-type: none;", "bullet-position: outside;"],
    "options_hi": ["list-style-position: आउटसाइड;", "list-style-position: इनसाइड;", "list-style-type: नन;", "बुलेट-पोजीशन: आउटसाइड;"],
    "answer_en": "list-style-position: outside;",
    "answer_hi": "list-style-position: आउटसाइड;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which property combines 'list-style-type', 'list-style-position', and 'list-style-image'?",
    "question_hi": "कौन सी प्रॉपर्टी 'list-style-type', 'list-style-position', और 'list-style-image' को मिलाती है?",
    "options_en": ["list-style", "list-marker", "list-combine", "list-image"],
    "options_hi": ["list-style", "list-marker", "list-combine", "list-image"],
    "answer_en": "list-style",
    "answer_hi": "list-style",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which CSS property controls the position of the list item marker?",
    "question_hi": "CSS की कौन सी प्रॉपर्टी सूची आइटम मार्कर की स्थिति नियंत्रित करती है?",
    "options_en": ["list-style-position", "list-style-type", "marker-position", "list-marker"],
    "options_hi": ["list-style-position", "list-style-type", "मार्कर-पोजीशन", "list-marker"],
    "answer_en": "list-style-position",
    "answer_hi": "list-style-position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What happens if you set 'list-style-image: none;'?",
    "question_hi": "'list-style-image: none;' सेट करने पर क्या होता है?",
    "options_en": ["Default marker is used", "No marker is shown", "Image marker is shown", "Bullet color changes"],
    "options_hi": ["डिफ़ॉल्ट मार्कर उपयोग होता है", "कोई मार्कर नहीं दिखता", "इमेज मार्कर दिखता है", "बुलेट रंग बदलता है"],
    "answer_en": "Default marker is used",
    "answer_hi": "डिफ़ॉल्ट मार्कर उपयोग होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which value of 'list-style-type' is used for lowercase letters?",
    "question_hi": "निम्नलिखित में से कौन सा 'list-style-type' मान छोटे अक्षरों के लिए उपयोग किया जाता है?",
    "options_en": ["lower-alpha", "upper-alpha", "decimal", "circle"],
    "options_hi": ["लोअर-आल्फा", "अप्पर-आल्फा", "डेसिमल", "सर्कल"],
    "answer_en": "lower-alpha",
    "answer_hi": "लोअर-आल्फा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which CSS property would you use to set a custom bullet image?",
    "question_hi": "कस्टम बुलेट इमेज सेट करने के लिए कौन सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    "options_en": ["list-style-image", "background-image", "list-style-type", "content"],
    "options_hi": ["list-style-image", "background-image", "list-style-type", "कंटेंट"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "How do you hide the bullets in an unordered list?",
    "question_hi": "अविन्यस्त सूची में बुलेट्स को कैसे छिपाएं?",
    "options_en": ["list-style-type: none;", "list-style-position: none;", "display: none;", "visibility: hidden;"],
    "options_hi": ["list-style-type: none;", "list-style-position: none;", "display: none;", "विजिबिलिटी: हिडन;"],
    "answer_en": "list-style-type: none;",
    "answer_hi": "list-style-type: none;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of the following 'list-style-type' values is used for uppercase letters?",
    "question_hi": "निम्नलिखित में से कौन सा 'list-style-type' मान बड़े अक्षरों के लिए उपयोग किया जाता है?",
    "options_en": ["upper-alpha", "lower-alpha", "decimal", "disc"],
    "options_hi": ["अप्पर-आल्फा", "लोअर-आल्फा", "डेसिमल", "डिस्क"],
    "answer_en": "upper-alpha",
    "answer_hi": "अप्पर-आल्फा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the 'list-style-position: initial;' property do?",
    "question_hi": "'list-style-position: initial;' प्रॉपर्टी क्या करती है?",
    "options_en": ["Sets to default value", "Places bullet inside", "Places bullet outside", "Removes bullet"],
    "options_hi": ["डिफ़ॉल्ट मान सेट करता है", "बुलेट अंदर रखता है", "बुलेट बाहर रखता है", "बुलेट हटाता है"],
    "answer_en": "Sets to default value",
    "answer_hi": "डिफ़ॉल्ट मान सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which property allows you to combine multiple list style properties in one declaration?",
    "question_hi": "कौन सी प्रॉपर्टी आपको एक डिक्लेरेशन में कई लिस्ट स्टाइल प्रॉपर्टीज़ को जोड़ने की अनुमति देती है?",
    "options_en": ["list-style", "list-combine", "list-style-type", "list-style-position"],
    "options_hi": ["list-style", "list-combine", "list-style-type", "list-style-position"],
    "answer_en": "list-style",
    "answer_hi": "list-style",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 26,
    "question_en": "Which 'list-style-type' value displays lowercase Roman numerals?",
    "question_hi": "'list-style-type' का कौन सा मान लोअरकेस रोमन नंबर दिखाता है?",
    "options_en": ["lower-roman", "upper-roman", "decimal", "circle"],
    "options_hi": ["लोअर-रोमन", "अप्पर-रोमन", "डेसिमल", "सर्कल"],
    "answer_en": "lower-roman",
    "answer_hi": "लोअर-रोमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "How can you change the bullet color of a list?",
    "question_hi": "सूची के बुलेट का रंग कैसे बदल सकते हैं?",
    "options_en": ["Using 'color' property on list item", "Using 'list-style-color'", "Using 'bullet-color'", "Using 'background-color'"],
    "options_hi": ["लिस्ट आइटम पर 'color' प्रॉपर्टी का उपयोग", "'list-style-color' का उपयोग", "'bullet-color' का उपयोग", "'background-color' का उपयोग"],
    "answer_en": "Using 'color' property on list item",
    "answer_hi": "लिस्ट आइटम पर 'color' प्रॉपर्टी का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which property can override the default bullet with a custom image?",
    "question_hi": "डिफ़ॉल्ट बुलेट को कस्टम इमेज से ओवरराइड करने वाली प्रॉपर्टी कौन सी है?",
    "options_en": ["list-style-image", "background-image", "bullet-image", "marker-image"],
    "options_hi": ["list-style-image", "background-image", "बुलेट-इमेज", "मार्कर-इमेज"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "If you want no marker for a list item, which value do you use for 'list-style-type'?",
    "question_hi": "अगर आप सूची आइटम के लिए कोई मार्कर नहीं चाहते, तो 'list-style-type' के लिए कौन सा मान इस्तेमाल करेंगे?",
    "options_en": ["none", "hidden", "no-marker", "null"],
    "options_hi": ["none", "hidden", "नो-मार्कर", "नल"],
    "answer_en": "none",
    "answer_hi": "none",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the effect of 'list-style-position: inside;' on multi-line list items?",
    "question_hi": "'list-style-position: inside;' का मल्टी-लाइन सूची आइटम पर क्या प्रभाव होता है?",
    "options_en": ["Bullet aligns with first line text", "Bullet outside list item", "No bullet shown", "Bullet is centered"],
    "options_hi": ["बुलेट पहली लाइन के टेक्स्ट के साथ संरेखित होता है", "बुलेट सूची आइटम के बाहर", "कोई बुलेट नहीं दिखता", "बुलेट केंद्रित होता है"],
    "answer_en": "Bullet aligns with first line text",
    "answer_hi": "बुलेट पहली लाइन के टेक्स्ट के साथ संरेखित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Can 'list-style-position' accept multiple values?",
    "question_hi": "'list-style-position' क्या कई मान स्वीकार करता है?",
    "options_en": ["No", "Yes", "Only two values", "Only numeric values"],
    "options_hi": ["नहीं", "हाँ", "केवल दो मान", "केवल संख्यात्मक मान"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the correct shorthand syntax for 'list-style'?",
    "question_hi": "'list-style' के लिए सही शॉर्टहैंड सिंटैक्स क्या है?",
    "options_en": ["list-style: <type> <position> <image>;", "list-style: <color> <size>;", "list-style: <font> <weight>;", "list-style: <border> <margin>;"],
    "options_hi": ["list-style: <type> <position> <image>;", "list-style: <color> <size>;", "list-style: <font> <weight>;", "list-style: <border> <margin>;"],
    "answer_en": "list-style: <type> <position> <image>;",
    "answer_hi": "list-style: <type> <position> <image>;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the default 'list-style-position' value?",
    "question_hi": "'list-style-position' का डिफ़ॉल्ट मान क्या है?",
    "options_en": ["outside", "inside", "none", "inherit"],
    "options_hi": ["आउटसाइड", "इनसाइड", "नन", "इनहेरिट"],
    "answer_en": "outside",
    "answer_hi": "आउटसाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "How can you center the bullet points in a list?",
    "question_hi": "सूची में बुलेट पॉइंट्स को केंद्रित कैसे करें?",
    "options_en": ["CSS does not support centering bullets", "Using 'text-align: center;'", "Using 'list-style-position: center;'", "Using 'margin: auto;'"],
    "options_hi": ["CSS बुलेट केंद्रित करने का समर्थन नहीं करता", "'text-align: center;' का उपयोग", "'list-style-position: center;' का उपयोग", "'margin: auto;' का उपयोग"],
    "answer_en": "CSS does not support centering bullets",
    "answer_hi": "CSS बुलेट केंद्रित करने का समर्थन नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which 'list-style-type' value shows decimal numbers with leading zeros?",
    "question_hi": "'list-style-type' का कौन सा मान अग्रणी शून्य के साथ दशमलव नंबर दिखाता है?",
    "options_en": ["decimal-leading-zero", "decimal", "circle", "square"],
    "options_hi": ["decimal-leading-zero", "decimal", "सर्कल", "स्क्वायर"],
    "answer_en": "decimal-leading-zero",
    "answer_hi": "decimal-leading-zero",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which CSS property is NOT related to list styling?",
    "question_hi": "निम्नलिखित में से कौन सी CSS प्रॉपर्टी सूची स्टाइलिंग से संबंधित नहीं है?",
    "options_en": ["list-style-type", "list-style-position", "list-style-image", "text-decoration"],
    "options_hi": ["list-style-type", "list-style-position", "list-style-image", "text-decoration"],
    "answer_en": "text-decoration",
    "answer_hi": "text-decoration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which property controls the image used as a list item marker?",
    "question_hi": "कौन सी प्रॉपर्टी सूची आइटम मार्कर के रूप में उपयोग की जाने वाली इमेज को नियंत्रित करती है?",
    "options_en": ["list-style-image", "list-style-position", "list-style-type", "marker-image"],
    "options_hi": ["list-style-image", "list-style-position", "list-style-type", "marker-image"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Is 'list-style-position' inherited by child elements?",
    "question_hi": "क्या 'list-style-position' चाइल्ड एलिमेंट्स द्वारा विरासत में लिया जाता है?",
    "options_en": ["Yes", "No", "Only if specified", "Depends on browser"],
    "options_hi": ["हाँ", "नहीं", "केवल यदि निर्दिष्ट हो", "ब्राउज़र पर निर्भर करता है"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What value of 'list-style-type' displays a dash (-) as the bullet?",
    "question_hi": "'list-style-type' का कौन सा मान बुलेट के रूप में डैश (-) दिखाता है?",
    "options_en": ["None of the standard values", "dash", "square", "circle"],
    "options_hi": ["कोई भी मान नहीं", "डैश", "स्क्वायर", "सर्कल"],
    "answer_en": "None of the standard values",
    "answer_hi": "कोई भी मान नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Can 'list-style' shorthand property set all three: type, position, and image simultaneously?",
    "question_hi": "'list-style' शॉर्टहैंड प्रॉपर्टी क्या एक साथ type, position, और image सेट कर सकती है?",
    "options_en": ["Yes", "No", "Only two at a time", "Only image and type"],
    "options_hi": ["हाँ", "नहीं", "एक बार में केवल दो", "केवल इमेज और टाइप"],
    "answer_en": "Yes",
    "answer_hi": "हाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does 'list-style-type: none;' do?",
    "question_hi": "'list-style-type: none;' क्या करता है?",
    "options_en": ["Removes bullets or numbers", "Shows default bullets", "Changes bullet color", "Centers bullets"],
    "options_hi": ["बुलेट या नंबर हटाता है", "डिफ़ॉल्ट बुलेट दिखाता है", "बुलेट का रंग बदलता है", "बुलेट को केंद्रित करता है"],
    "answer_en": "Removes bullets or numbers",
    "answer_hi": "बुलेट या नंबर हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which CSS list style property can take a URL value?",
    "question_hi": "कौन सी CSS सूची स्टाइल प्रॉपर्टी URL मान ले सकती है?",
    "options_en": ["list-style-image", "list-style-type", "list-style-position", "list-style-url"],
    "options_hi": ["list-style-image", "list-style-type", "list-style-position", "list-style-url"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which 'list-style-type' is used for decimal numbering?",
    "question_hi": "डेसिमल नंबरिंग के लिए कौन सा 'list-style-type' उपयोग किया जाता है?",
    "options_en": ["decimal", "disc", "circle", "square"],
    "options_hi": ["decimal", "disc", "circle", "square"],
    "answer_en": "decimal",
    "answer_hi": "decimal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which CSS property affects the placement of the marker relative to the list item content?",
    "question_hi": "कौन सी CSS प्रॉपर्टी सूची आइटम सामग्री के सापेक्ष मार्कर की स्थिति को प्रभावित करती है?",
    "options_en": ["list-style-position", "list-style-type", "list-style-image", "marker-position"],
    "options_hi": ["list-style-position", "list-style-type", "list-style-image", "marker-position"],
    "answer_en": "list-style-position",
    "answer_hi": "list-style-position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Can the 'list-style-type' property accept 'decimal-leading-zero' as a value?",
    "question_hi": "'list-style-type' प्रॉपर्टी क्या 'decimal-leading-zero' को मान के रूप में स्वीकार करती है?",
    "options_en": ["Yes", "No", "Only in some browsers", "Deprecated"],
    "options_hi": ["हाँ", "नहीं", "कुछ ब्राउज़र में ही", "अप्रचलित"],
    "answer_en": "Yes",
    "answer_hi": "हाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of these values is NOT valid for 'list-style-type'?",
    "question_hi": "'list-style-type' के लिए इनमें से कौन सा मान वैध नहीं है?",
    "options_en": ["triangle", "circle", "square", "disc"],
    "options_hi": ["ट्रायंगल", "सर्कल", "स्क्वायर", "डिस्क"],
    "answer_en": "triangle",
    "answer_hi": "ट्रायंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "How do you remove bullets from an ordered list?",
    "question_hi": "क्रमबद्ध सूची से बुलेट्स कैसे हटाएं?",
    "options_en": ["list-style-type: none;", "list-style-position: none;", "list-style-image: none;", "bullet: none;"],
    "options_hi": ["list-style-type: none;", "list-style-position: none;", "list-style-image: none;", "बुलेट: नन;"],
    "answer_en": "list-style-type: none;",
    "answer_hi": "list-style-type: none;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which property sets the position of the list marker relative to the content?",
    "question_hi": "कौन सी प्रॉपर्टी सूची मार्कर की स्थिति को सामग्री के सापेक्ष सेट करती है?",
    "options_en": ["list-style-position", "list-style-type", "list-style-image", "position"],
    "options_hi": ["list-style-position", "list-style-type", "list-style-image", "पोजीशन"],
    "answer_en": "list-style-position",
    "answer_hi": "list-style-position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which CSS property can be used to set an image as a bullet?",
    "question_hi": "कौन सी CSS प्रॉपर्टी बुलेट के रूप में इमेज सेट करने के लिए उपयोग की जाती है?",
    "options_en": ["list-style-image", "background-image", "marker-image", "bullet-image"],
    "options_hi": ["list-style-image", "background-image", "मार्कर-इमेज", "बुलेट-इमेज"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the default bullet shape in an unordered list?",
    "question_hi": "अविन्यस्त सूची में डिफ़ॉल्ट बुलेट आकार क्या है?",
    "options_en": ["disc", "circle", "square", "decimal"],
    "options_hi": ["डिस्क", "सर्कल", "स्क्वायर", "डेसिमल"],
    "answer_en": "disc",
    "answer_hi": "डिस्क",
    "attempted": false,
    "selected": ""
  }
  // Continue adding more questions 51 to 100
];

// Ad

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