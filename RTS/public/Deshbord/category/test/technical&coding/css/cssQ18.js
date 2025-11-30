const questions = [
 {
    num: 1,
    question_en: "Which of the following is a valid HEX color code?",
    question_hi: "निम्नलिखित में से कौन सा एक वैध HEX कलर कोड है?",
    options_en: ["#FF5733", "#12345G", "123456", "FF5733"],
    options_hi: ["#FF5733", "#12345G", "123456", "FF5733"],
    answer_en: "#FF5733",
    answer_hi: "#FF5733",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What does RGB stand for in CSS colors?",
    question_hi: "CSS रंगों में RGB का पूरा नाम क्या है?",
    options_en: ["Red Green Blue", "Right Green Blue", "Red Gray Black", "Red Gray Blue"],
    options_hi: ["रेड ग्रीन ब्लू", "राइट ग्रीन ब्लू", "रेड ग्रे ब्लैक", "रेड ग्रे ब्लू"],
    answer_en: "Red Green Blue",
    answer_hi: "रेड ग्रीन ब्लू",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property sets the background color of an element?",
    question_hi: "कौन सी प्रॉपर्टी किसी एलिमेंट का बैकग्राउंड रंग सेट करती है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["बैकग्राउंड-कलर", "कलर", "बैकग्राउंड-इमेज", "बॉर्डर-कलर"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "How do you specify a semi-transparent color in CSS?",
    question_hi: "CSS में आप सेमी-ट्रांसपेरेंट रंग कैसे निर्दिष्ट करते हैं?",
    options_en: ["Using RGBA", "Using HEX", "Using HSL", "Using RGB"],
    options_hi: ["RGBA का उपयोग करके", "HEX का उपयोग करके", "HSL का उपयोग करके", "RGB का उपयोग करके"],
    answer_en: "Using RGBA",
    answer_hi: "RGBA का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the range of values for each RGB component?",
    question_hi: "RGB के प्रत्येक घटक के लिए मानों की सीमा क्या है?",
    options_en: ["0 to 255", "0 to 100", "0 to 1", "0 to 360"],
    options_hi: ["0 से 255", "0 से 100", "0 से 1", "0 से 360"],
    answer_en: "0 to 255",
    answer_hi: "0 से 255",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property is used to add a background image?",
    question_hi: "बैकग्राउंड इमेज जोड़ने के लिए कौन सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["background-image", "background-color", "image", "background-src"],
    options_hi: ["बैकग्राउंड-इमेज", "बैकग्राउंड-कलर", "इमेज", "बैकग्राउंड-सोर्स"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which CSS function defines colors using hue, saturation, and lightness?",
    question_hi: "कौन सा CSS फंक्शन ह्यू, सैचुरेशन और लाइटनेस का उपयोग करके रंग परिभाषित करता है?",
    options_en: ["hsl()", "rgb()", "hex()", "rgba()"],
    options_hi: ["hsl()", "rgb()", "hex()", "rgba()"],
    answer_en: "hsl()",
    answer_hi: "hsl()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "How can you make a background image cover the entire element?",
    question_hi: "आप बैकग्राउंड इमेज को पूरे एलिमेंट पर कैसे कवर कर सकते हैं?",
    options_en: ["background-size: cover", "background-repeat: no-repeat", "background-position: center", "background-attachment: fixed"],
    options_hi: ["बैकग्राउंड-साइज: कवर", "बैकग्राउंड-रिपीट: नो-रिपीट", "बैकग्राउंड-पोजीशन: सेंटर", "बैकग्राउंड-अटैचमेंट: फिक्स्ड"],
    answer_en: "background-size: cover",
    answer_hi: "बैकग्राउंड-साइज: कवर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does 'background-repeat: no-repeat' do?",
    question_hi: "'background-repeat: no-repeat' क्या करता है?",
    options_en: ["Prevents the image from repeating", "Repeats image horizontally", "Repeats image vertically", "Repeats image both ways"],
    options_hi: ["इमेज को दोहराने से रोकता है", "इमेज को क्षैतिज रूप से दोहराता है", "इमेज को लंबवत दोहराता है", "इमेज को दोनों दिशाओं में दोहराता है"],
    answer_en: "Prevents the image from repeating",
    answer_hi: "इमेज को दोहराने से रोकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property controls the position of a background image?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज की स्थिति नियंत्रित करती है?",
    options_en: ["background-position", "background-size", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-पोजीशन", "बैकग्राउंड-साइज", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-position",
    answer_hi: "बैकग्राउंड-पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the alpha value in RGBA used for?",
    question_hi: "RGBA में अल्फा वैल्यू किस लिए उपयोग होती है?",
    options_en: ["Transparency", "Brightness", "Hue", "Saturation"],
    options_hi: ["पारदर्शिता", "चमक", "ह्यू", "सैचुरेशन"],
    answer_en: "Transparency",
    answer_hi: "पारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which CSS gradient type transitions colors from one side to another horizontally?",
    question_hi: "कौन सा CSS ग्रेडियंट प्रकार रंगों को एक तरफ से दूसरी तरफ क्षैतिज रूप से स्थानांतरित करता है?",
    options_en: ["linear-gradient(to right)", "radial-gradient()", "conic-gradient()", "linear-gradient(to bottom)"],
    options_hi: ["linear-gradient(to right)", "radial-gradient()", "conic-gradient()", "linear-gradient(to bottom)"],
    answer_en: "linear-gradient(to right)",
    answer_hi: "linear-gradient(to right)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How do you repeat a background image only vertically?",
    question_hi: "आप बैकग्राउंड इमेज को केवल लंबवत कैसे दोहराते हैं?",
    options_en: ["background-repeat: repeat-y", "background-repeat: repeat-x", "background-repeat: no-repeat", "background-repeat: repeat"],
    options_hi: ["बैकग्राउंड-रिपीट: रिपीट-वाई", "बैकग्राउंड-रिपीट: रिपीट-एक्स", "बैकग्राउंड-रिपीट: नो-रिपीट", "बैकग्राउंड-रिपीट: रिपीट"],
    answer_en: "background-repeat: repeat-y",
    answer_hi: "बैकग्राउंड-रिपीट: रिपीट-वाई",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property controls the size of the background image?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज के आकार को नियंत्रित करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-साइज", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-size",
    answer_hi: "बैकग्राउंड-साइज",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which named color represents pure red?",
    question_hi: "कौन सा नामित रंग शुद्ध लाल को दर्शाता है?",
    options_en: ["red", "blue", "green", "yellow"],
    options_hi: ["रेड", "ब्लू", "ग्रीन", "येलो"],
    answer_en: "red",
    answer_hi: "रेड",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which format allows specifying colors with opacity?",
    question_hi: "कौन सा फॉर्मेट रंगों को अपारदर्शिता के साथ निर्दिष्ट करने की अनुमति देता है?",
    options_en: ["RGBA", "HEX", "HSL", "RGB"],
    options_hi: ["RGBA", "HEX", "HSL", "RGB"],
    answer_en: "RGBA",
    answer_hi: "RGBA",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the correct syntax for applying a linear gradient as background?",
    question_hi: "बैकग्राउंड के रूप में लिनियर ग्रेडियंट लागू करने के लिए सही सिंटैक्स क्या है?",
    options_en: ["background: linear-gradient(to right, red, yellow);", "background-color: linear-gradient(red, yellow);", "background-image: gradient(red, yellow);", "background-style: linear-gradient(red, yellow);"],
    options_hi: ["background: linear-gradient(to right, red, yellow);", "background-color: linear-gradient(red, yellow);", "background-image: gradient(red, yellow);", "background-style: linear-gradient(red, yellow);"],
    answer_en: "background: linear-gradient(to right, red, yellow);",
    answer_hi: "background: linear-gradient(to right, red, yellow);",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property is used to fix the background image during scroll?",
    question_hi: "स्क्रॉल के दौरान बैकग्राउंड इमेज को फिक्स करने के लिए कौन सी CSS प्रॉपर्टी का उपयोग होता है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-साइज"],
    answer_en: "background-attachment",
    answer_hi: "बैकग्राउंड-अटैचमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which of the following is NOT a valid CSS color format?",
    question_hi: "निम्नलिखित में से कौन सा CSS रंग प्रारूप मान्य नहीं है?",
    options_en: ["HEX", "RGBA", "HSL", "XYZ"],
    options_hi: ["HEX", "RGBA", "HSL", "XYZ"],
    answer_en: "XYZ",
    answer_hi: "XYZ",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property can be used to set multiple background images?",
    question_hi: "कौन सी प्रॉपर्टी का उपयोग एक साथ कई बैकग्राउंड इमेज सेट करने के लिए किया जा सकता है?",
    options_en: ["background-image", "background-color", "background-repeat", "background-position"],
    options_hi: ["बैकग्राउंड-इमेज", "बैकग्राउंड-कलर", "बैकग्राउंड-रिपीट", "बैकग्राउंड-पोजीशन"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What value for 'background-repeat' repeats the image both horizontally and vertically?",
    question_hi: "'background-repeat' का कौन सा मान इमेज को क्षैतिज और लंबवत दोनों रूपों में दोहराता है?",
    options_en: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
    options_hi: ["रिपीट", "रिपीट-एक्स", "रिपीट-वाई", "नो-रिपीट"],
    answer_en: "repeat",
    answer_hi: "रिपीट",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property adjusts the starting point of a background image?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज के आरंभ बिंदु को समायोजित करती है?",
    options_en: ["background-position", "background-size", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-पोजीशन", "बैकग्राउंड-साइज", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-position",
    answer_hi: "बैकग्राउंड-पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS color format uses degrees for the hue value?",
    question_hi: "कौन सा CSS रंग प्रारूप ह्यू वैल्यू के लिए डिग्री का उपयोग करता है?",
    options_en: ["HSL", "RGB", "HEX", "RGBA"],
    options_hi: ["HSL", "RGB", "HEX", "RGBA"],
    answer_en: "HSL",
    answer_hi: "HSL",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property can create a smooth color transition?",
    question_hi: "कौन सी CSS प्रॉपर्टी स्मूथ रंग संक्रमण बना सकती है?",
    options_en: ["background-image (gradient)", "background-color", "color", "border-color"],
    options_hi: ["बैकग्राउंड-इमेज (ग्रेडियंट)", "बैकग्राउंड-कलर", "कलर", "बॉर्डर-कलर"],
    answer_en: "background-image (gradient)",
    answer_hi: "बैकग्राउंड-इमेज (ग्रेडियंट)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls how background images scroll with the page?",
    question_hi: "कौन सी प्रॉपर्टी कंट्रोल करती है कि बैकग्राउंड इमेज पेज के साथ कैसे स्क्रॉल होती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-साइज"],
    answer_en: "background-attachment",
    answer_hi: "बैकग्राउंड-अटैचमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property controls the background image’s attachment behavior?",
    question_hi: "कौन सी CSS प्रॉपर्टी बैकग्राउंड इमेज के अटैचमेंट व्यवहार को नियंत्रित करती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-साइज"],
    answer_en: "background-attachment",
    answer_hi: "बैकग्राउंड-अटैचमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which value of background-attachment keeps the background fixed during scroll?",
    question_hi: "background-attachment का कौन सा मान स्क्रॉल के दौरान बैकग्राउंड को फिक्स रखता है?",
    options_en: ["fixed", "scroll", "local", "inherit"],
    options_hi: ["फिक्स्ड", "स्क्रॉल", "लोकल", "इनहेरिट"],
    answer_en: "fixed",
    answer_hi: "फिक्स्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does the background-position property define?",
    question_hi: "background-position प्रॉपर्टी क्या परिभाषित करती है?",
    options_en: ["Position of the background image", "Size of the background image", "Repeat of the background image", "Attachment of the background image"],
    options_hi: ["बैकग्राउंड इमेज की स्थिति", "बैकग्राउंड इमेज का आकार", "बैकग्राउंड इमेज का रिपीट", "बैकग्राउंड इमेज का अटैचमेंट"],
    answer_en: "Position of the background image",
    answer_hi: "बैकग्राउंड इमेज की स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "How do you set a background gradient from blue to green?",
    question_hi: "नीले से हरे तक बैकग्राउंड ग्रेडियंट कैसे सेट करते हैं?",
    options_en: ["background: linear-gradient(blue, green);", "background-color: linear-gradient(blue, green);", "background-image: radial-gradient(blue, green);", "background: gradient(blue, green);"],
    options_hi: ["background: linear-gradient(blue, green);", "background-color: linear-gradient(blue, green);", "background-image: radial-gradient(blue, green);", "background: gradient(blue, green);"],
    answer_en: "background: linear-gradient(blue, green);",
    answer_hi: "background: linear-gradient(blue, green);",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property allows multiple backgrounds on one element?",
    question_hi: "कौन सी CSS प्रॉपर्टी एक एलिमेंट पर कई बैकग्राउंड की अनुमति देती है?",
    options_en: ["background-image", "background-color", "background-repeat", "background-position"],
    options_hi: ["बैकग्राउंड-इमेज", "बैकग्राउंड-कलर", "बैकग्राउंड-रिपीट", "बैकग्राउंड-पोजीशन"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the default value of background-repeat?",
    question_hi: "background-repeat का डिफ़ॉल्ट मान क्या है?",
    options_en: ["repeat", "no-repeat", "repeat-x", "repeat-y"],
    options_hi: ["रिपीट", "नो-रिपीट", "रिपीट-एक्स", "रिपीट-वाई"],
    answer_en: "repeat",
    answer_hi: "रिपीट",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How do you prevent a background image from repeating?",
    question_hi: "बैकग्राउंड इमेज को दोहराने से कैसे रोकें?",
    options_en: ["background-repeat: no-repeat", "background-repeat: repeat", "background-repeat: repeat-x", "background-repeat: repeat-y"],
    options_hi: ["बैकग्राउंड-रिपीट: नो-रिपीट", "बैकग्राउंड-रिपीट: रिपीट", "बैकग्राउंड-रिपीट: रिपीट-एक्स", "बैकग्राउंड-रिपीट: रिपीट-वाई"],
    answer_en: "background-repeat: no-repeat",
    answer_hi: "बैकग्राउंड-रिपीट: नो-रिपीट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which of these is NOT a valid color format in CSS?",
    question_hi: "इनमें से कौन सा CSS में मान्य रंग प्रारूप नहीं है?",
    options_en: ["XYZ", "RGB", "HEX", "HSL"],
    options_hi: ["XYZ", "RGB", "HEX", "HSL"],
    answer_en: "XYZ",
    answer_hi: "XYZ",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "How do you specify a color with transparency in HSL?",
    question_hi: "HSL में पारदर्शिता के साथ रंग कैसे निर्दिष्ट करते हैं?",
    options_en: ["hsla()", "hsl()", "rgb()", "rgba()"],
    options_hi: ["hsla()", "hsl()", "rgb()", "rgba()"],
    answer_en: "hsla()",
    answer_hi: "hsla()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What does 'background-size: contain' do?",
    question_hi: "'background-size: contain' क्या करता है?",
    options_en: ["Scales the image to fit inside the element", "Scales the image to cover the element", "Repeats the background image", "Positions the background image"],
    options_hi: ["इमेज को एलिमेंट के अंदर फिट करने के लिए स्केल करता है", "इमेज को एलिमेंट कवर करने के लिए स्केल करता है", "बैकग्राउंड इमेज दोहराता है", "बैकग्राउंड इमेज की पोजीशन सेट करता है"],
    answer_en: "Scales the image to fit inside the element",
    answer_hi: "इमेज को एलिमेंट के अंदर फिट करने के लिए स्केल करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS function is used for radial gradients?",
    question_hi: "रेडियल ग्रेडियंट के लिए कौन सा CSS फंक्शन उपयोग किया जाता है?",
    options_en: ["radial-gradient()", "linear-gradient()", "conic-gradient()", "gradient()"],
    options_hi: ["radial-gradient()", "linear-gradient()", "conic-gradient()", "gradient()"],
    answer_en: "radial-gradient()",
    answer_hi: "radial-gradient()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "How do you set the background image position to the top right corner?",
    question_hi: "बैकग्राउंड इमेज की पोजीशन टॉप राइट कॉर्नर पर कैसे सेट करें?",
    options_en: ["background-position: top right", "background-position: bottom left", "background-position: center", "background-position: left top"],
    options_hi: ["बैकग्राउंड-पोजीशन: टॉप राइट", "बैकग्राउंड-पोजीशन: बॉटम लेफ्ट", "बैकग्राउंड-पोजीशन: सेंटर", "बैकग्राउंड-पोजीशन: लेफ्ट टॉप"],
    answer_en: "background-position: top right",
    answer_hi: "बैकग्राउंड-पोजीशन: टॉप राइट",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What does the 'background-repeat: repeat-x' property do?",
    question_hi: "'background-repeat: repeat-x' प्रॉपर्टी क्या करती है?",
    options_en: ["Repeats the background image horizontally", "Repeats the background image vertically", "Prevents repetition", "Repeats both horizontally and vertically"],
    options_hi: ["बैकग्राउंड इमेज को क्षैतिज रूप से दोहराता है", "बैकग्राउंड इमेज को लंबवत दोहराता है", "दोहराव रोकता है", "क्षैतिज और लंबवत दोनों में दोहराता है"],
    answer_en: "Repeats the background image horizontally",
    answer_hi: "बैकग्राउंड इमेज को क्षैतिज रूप से दोहराता है",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property sets the color of text?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेक्स्ट का रंग सेट करती है?",
    options_en: ["color", "background-color", "border-color", "font-color"],
    options_hi: ["कलर", "बैकग्राउंड-कलर", "बॉर्डर-कलर", "फॉन्ट-कलर"],
    answer_en: "color",
    answer_hi: "कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "How do you make a transparent background color using RGBA?",
    question_hi: "RGBA का उपयोग करके पारदर्शी बैकग्राउंड रंग कैसे बनाएं?",
    options_en: ["rgba(255, 0, 0, 0.5)", "rgb(255, 0, 0)", "hsl(120, 100%, 50%)", "hex #FF0000"],
    options_hi: ["rgba(255, 0, 0, 0.5)", "rgb(255, 0, 0)", "hsl(120, 100%, 50%)", "hex #FF0000"],
    answer_en: "rgba(255, 0, 0, 0.5)",
    answer_hi: "rgba(255, 0, 0, 0.5)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does 'background-position: center' do?",
    question_hi: "'background-position: center' क्या करता है?",
    options_en: ["Centers the background image", "Places image at top left", "Repeats image", "Fixes image in place"],
    options_hi: ["बैकग्राउंड इमेज को केंद्रित करता है", "इमेज को टॉप लेफ्ट पर रखता है", "इमेज दोहराता है", "इमेज को फिक्स करता है"],
    answer_en: "Centers the background image",
    answer_hi: "बैकग्राउंड इमेज को केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property can add a transparent overlay on a background color?",
    question_hi: "कौन सी CSS प्रॉपर्टी बैकग्राउंड कलर पर पारदर्शी ओवरले जोड़ सकती है?",
    options_en: ["background-color with alpha", "background-image", "background-repeat", "background-position"],
    options_hi: ["अल्फा के साथ बैकग्राउंड-कलर", "बैकग्राउंड-इमेज", "बैकग्राउंड-रिपीट", "बैकग्राउंड-पोजीशन"],
    answer_en: "background-color with alpha",
    answer_hi: "अल्फा के साथ बैकग्राउंड-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "How is the 'transparent' keyword used in CSS?",
    question_hi: "CSS में 'transparent' कीवर्ड कैसे उपयोग किया जाता है?",
    options_en: ["Sets full transparency", "Sets white color", "Sets black color", "Sets semi-transparency"],
    options_hi: ["पूर्ण पारदर्शिता सेट करता है", "सफेद रंग सेट करता है", "काला रंग सेट करता है", "सेमी-पारदर्शिता सेट करता है"],
    answer_en: "Sets full transparency",
    answer_hi: "पूर्ण पारदर्शिता सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property is used to position background images relative to the element’s content box?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज को एलिमेंट के कंटेंट बॉक्स के सापेक्ष पोजीशन करती है?",
    options_en: ["background-origin", "background-position", "background-attachment", "background-clip"],
    options_hi: ["बैकग्राउंड-ओरिजिन", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-क्लिप"],
    answer_en: "background-origin",
    answer_hi: "बैकग्राउंड-ओरिजिन",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What does the 'background-clip' property control?",
    question_hi: "'background-clip' प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Where the background is painted", "Background image size", "Background position", "Background repeat"],
    options_hi: ["जहां बैकग्राउंड पेंट किया जाता है", "बैकग्राउंड इमेज का आकार", "बैकग्राउंड पोजीशन", "बैकग्राउंड रिपीट"],
    answer_en: "Where the background is painted",
    answer_hi: "जहां बैकग्राउंड पेंट किया जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which of the following is NOT a valid background-repeat value?",
    question_hi: "निम्नलिखित में से कौन सा background-repeat मान्य नहीं है?",
    options_en: ["repeat-z", "repeat", "repeat-x", "repeat-y"],
    options_hi: ["repeat-z", "repeat", "repeat-x", "repeat-y"],
    answer_en: "repeat-z",
    answer_hi: "repeat-z",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "How can you set a transparent background using the 'transparent' keyword?",
    question_hi: "'transparent' कीवर्ड का उपयोग करके पारदर्शी बैकग्राउंड कैसे सेट करें?",
    options_en: ["background-color: transparent;", "background-color: none;", "background-color: rgba(0,0,0,0);", "background-color: white;"],
    options_hi: ["background-color: transparent;", "background-color: none;", "background-color: rgba(0,0,0,0);", "background-color: white;"],
    answer_en: "background-color: transparent;",
    answer_hi: "background-color: transparent;",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls the size of a background image without stretching it?",
    question_hi: "कौन सी प्रॉपर्टी बिना खींचे बैकग्राउंड इमेज के आकार को नियंत्रित करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-साइज", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-size",
    answer_hi: "बैकग्राउंड-साइज",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "How do you apply multiple background images in CSS?",
    question_hi: "CSS में कई बैकग्राउंड इमेज कैसे लागू करें?",
    options_en: ["Separate image URLs with commas in background-image", "Use multiple background-image properties", "Use background-repeat multiple times", "Use multiple background-position properties"],
    options_hi: ["background-image में कॉमा से अलग-अलग इमेज URLs", "कई background-image प्रॉपर्टी का उपयोग", "background-repeat कई बार उपयोग करें", "कई background-position प्रॉपर्टी का उपयोग"],
    answer_en: "Separate image URLs with commas in background-image",
    answer_hi: "background-image में कॉमा से अलग-अलग इमेज URLs",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS function allows you to create a conic gradient?",
    question_hi: "कौन सा CSS फंक्शन आपको कोनिक ग्रेडियंट बनाने की अनुमति देता है?",
    options_en: ["conic-gradient()", "radial-gradient()", "linear-gradient()", "gradient()"],
    options_hi: ["conic-gradient()", "radial-gradient()", "linear-gradient()", "gradient()"],
    answer_en: "conic-gradient()",
    answer_hi: "conic-gradient()",
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