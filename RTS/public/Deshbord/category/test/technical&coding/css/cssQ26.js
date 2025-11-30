const questions = [
 {
    num: 1,
    question_en: "What is the purpose of media queries in CSS?",
    question_hi: "CSS में मीडिया क्वेरी का उद्देश्य क्या है?",
    options_en: ["To apply styles based on device properties", "To animate elements", "To create JavaScript functions", "To store data"],
    options_hi: ["डिवाइस गुणों के आधार पर शैलियाँ लागू करने के लिए", "एलिमेंट्स को एनीमेट करने के लिए", "JavaScript फ़ंक्शन बनाने के लिए", "डेटा स्टोर करने के लिए"],
    answer_en: "To apply styles based on device properties",
    answer_hi: "डिवाइस गुणों के आधार पर शैलियाँ लागू करने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which keyword is used to define a media query?",
    question_hi: "मीडिया क्वेरी को परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    options_en: ["@media", "@query", "@responsive", "@screen"],
    options_hi: ["@media", "@query", "@responsive", "@screen"],
    answer_en: "@media",
    answer_hi: "@media",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the 'min-width' feature test in a media query?",
    question_hi: "'min-width' मीडिया क्वेरी में क्या परीक्षण करता है?",
    options_en: ["Minimum font size", "Minimum height", "Minimum screen width", "Minimum screen resolution"],
    options_hi: ["न्यूनतम फ़ॉन्ट आकार", "न्यूनतम ऊंचाई", "न्यूनतम स्क्रीन चौड़ाई", "न्यूनतम स्क्रीन रेजोल्यूशन"],
    answer_en: "Minimum screen width",
    answer_hi: "न्यूनतम स्क्रीन चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What unit is commonly used in media queries for width?",
    question_hi: "मीडिया क्वेरी में चौड़ाई के लिए सामान्यतः कौन-सी इकाई उपयोग होती है?",
    options_en: ["em", "rem", "px", "%"],
    options_hi: ["em", "rem", "px", "%"],
    answer_en: "px",
    answer_hi: "px",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of the following is a valid media type?",
    question_hi: "निम्नलिखित में से कौन-सा एक मान्य मीडिया प्रकार है?",
    options_en: ["text", "html", "screen", "canvas"],
    options_hi: ["टेक्स्ट", "एचटीएमएल", "स्क्रीन", "कैनवस"],
    answer_en: "screen",
    answer_hi: "स्क्रीन",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "How do media queries enhance responsive design?",
    question_hi: "मीडिया क्वेरी उत्तरदायी डिज़ाइन को कैसे बेहतर बनाती हैं?",
    options_en: ["By fixing widths", "By applying fixed layout", "By adapting layout to device", "By disabling styles"],
    options_hi: ["चौड़ाई को स्थिर करके", "स्थिर लेआउट लागू करके", "डिवाइस के अनुसार लेआउट को अनुकूल बनाकर", "शैलियाँ अक्षम करके"],
    answer_en: "By adapting layout to device",
    answer_hi: "डिवाइस के अनुसार लेआउट को अनुकूल बनाकर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which media feature checks the orientation of the device?",
    question_hi: "कौन-सा मीडिया फीचर डिवाइस की ओरिएंटेशन की जांच करता है?",
    options_en: ["min-width", "max-height", "orientation", "aspect-ratio"],
    options_hi: ["min-width", "max-height", "orientation", "aspect-ratio"],
    answer_en: "orientation",
    answer_hi: "orientation",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which orientation value indicates the device is held vertically?",
    question_hi: "कौन-सा ओरिएंटेशन मान डिवाइस के ऊर्ध्व स्थिति में होने को दर्शाता है?",
    options_en: ["landscape", "portrait", "vertical", "upright"],
    options_hi: ["लैंडस्केप", "पोर्ट्रेट", "वर्टिकल", "अप्राइट"],
    answer_en: "portrait",
    answer_hi: "पोर्ट्रेट",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the use of 'only' keyword in media queries?",
    question_hi: "मीडिया क्वेरी में 'only' कीवर्ड का उपयोग क्या है?",
    options_en: ["Exclude older browsers", "Include all browsers", "Target specific devices", "Ignore media queries"],
    options_hi: ["पुराने ब्राउज़रों को छोड़ने के लिए", "सभी ब्राउज़रों को शामिल करने के लिए", "विशिष्ट डिवाइस को लक्षित करने के लिए", "मीडिया क्वेरी को अनदेखा करने के लिए"],
    answer_en: "Exclude older browsers",
    answer_hi: "पुराने ब्राउज़रों को छोड़ने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which syntax is correct for setting max-width in a media query?",
    question_hi: "मीडिया क्वेरी में max-width सेट करने के लिए सही सिंटैक्स क्या है?",
    options_en: ["@media screen and max-width:600px", "@media screen and (max-width:600px)", "@media (max-width=600px)", "@media screen max-width:600px"],
    options_hi: ["@media screen and max-width:600px", "@media screen and (max-width:600px)", "@media (max-width=600px)", "@media screen max-width:600px"],
    answer_en: "@media screen and (max-width:600px)",
    answer_hi: "@media screen and (max-width:600px)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which feature allows styles for both portrait and landscape?",
    question_hi: "कौन-सी विशेषता पोर्ट्रेट और लैंडस्केप दोनों के लिए शैलियाँ लागू करने देती है?",
    options_en: ["min-width", "max-height", "aspect-ratio", "orientation"],
    options_hi: ["min-width", "max-height", "aspect-ratio", "orientation"],
    answer_en: "orientation",
    answer_hi: "orientation",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the main benefit of responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन का मुख्य लाभ क्या है?",
    options_en: ["Faster loading", "Attractive colors", "Works on all devices", "More animations"],
    options_hi: ["तेज़ लोडिंग", "आकर्षक रंग", "सभी डिवाइसों पर कार्य करता है", "अधिक एनिमेशन"],
    answer_en: "Works on all devices",
    answer_hi: "सभी डिवाइसों पर कार्य करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which media feature checks the height of the device?",
    question_hi: "कौन-सा मीडिया फीचर डिवाइस की ऊँचाई की जांच करता है?",
    options_en: ["min-height", "max-width", "orientation", "device-width"],
    options_hi: ["min-height", "max-width", "orientation", "device-width"],
    answer_en: "min-height",
    answer_hi: "min-height",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What is the default media type if none is specified?",
    question_hi: "यदि कोई मीडिया प्रकार निर्दिष्ट नहीं किया गया है, तो डिफ़ॉल्ट मीडिया प्रकार क्या होता है?",
    options_en: ["screen", "all", "print", "speech"],
    options_hi: ["स्क्रीन", "ऑल", "प्रिंट", "स्पीच"],
    answer_en: "all",
    answer_hi: "ऑल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property helps hide content in small screens?",
    question_hi: "कौन-सी प्रॉपर्टी छोटे स्क्रीन पर कंटेंट को छिपाने में मदद करती है?",
    options_en: ["display: none", "opacity: 0", "visibility: hidden", "All of these"],
    options_hi: ["display: none", "opacity: 0", "visibility: hidden", "इनमें से सभी"],
    answer_en: "All of these",
    answer_hi: "इनमें से सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which media type is used for printed documents?",
    question_hi: "प्रिंटेड दस्तावेजों के लिए कौन-सा मीडिया टाइप उपयोग किया जाता है?",
    options_en: ["screen", "print", "all", "text"],
    options_hi: ["स्क्रीन", "प्रिंट", "ऑल", "टेक्स्ट"],
    answer_en: "print",
    answer_hi: "प्रिंट",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is NOT a valid media feature?",
    question_hi: "निम्न में से कौन एक मान्य मीडिया फीचर नहीं है?",
    options_en: ["color", "min-width", "max-height", "font-size"],
    options_hi: ["कलर", "मिन-विथ", "मैक्स-हाइट", "फॉन्ट-साइज़"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which keyword is used to combine multiple conditions?",
    question_hi: "कई शर्तों को जोड़ने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    options_en: ["and", "or", "with", "if"],
    options_hi: ["and", "or", "with", "if"],
    answer_en: "and",
    answer_hi: "and",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which one makes your site mobile friendly?",
    question_hi: "आपकी साइट को मोबाइल फ्रेंडली बनाने के लिए क्या उपयोगी है?",
    options_en: ["Fixed layout", "Media queries", "JavaScript", "Colorful background"],
    options_hi: ["फिक्स्ड लेआउट", "मीडिया क्वेरी", "JavaScript", "रंगीन बैकग्राउंड"],
    answer_en: "Media queries",
    answer_hi: "मीडिया क्वेरी",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of the following is true about responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन के बारे में निम्न में से कौन-सा सत्य है?",
    options_en: ["Uses media queries", "Adjusts layout", "Improves UX", "All of the above"],
    options_hi: ["मीडिया क्वेरी का उपयोग करता है", "लेआउट को समायोजित करता है", "यूज़र अनुभव को बेहतर बनाता है", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What does '@media only screen and (min-width: 768px)' mean?",
    question_hi: "'@media only screen and (min-width: 768px)' का क्या मतलब है?",
    options_en: ["Applies only to screens wider than 768px", "Applies to all devices", "Applies below 768px", "Applies to printers"],
    options_hi: ["केवल 768px से बड़ी स्क्रीन पर लागू होता है", "सभी डिवाइसों पर लागू होता है", "768px से कम पर लागू होता है", "प्रिंटर पर लागू होता है"],
    answer_en: "Applies only to screens wider than 768px",
    answer_hi: "केवल 768px से बड़ी स्क्रीन पर लागू होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the typical breakpoint for mobile devices?",
    question_hi: "मोबाइल डिवाइसेस के लिए सामान्य ब्रेकपॉइंट क्या है?",
    options_en: ["320px", "768px", "1024px", "1440px"],
    options_hi: ["320px", "768px", "1024px", "1440px"],
    answer_en: "768px",
    answer_hi: "768px",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which media feature is used to check resolution?",
    question_hi: "कौन-सा मीडिया फीचर रेजोल्यूशन की जांच के लिए उपयोग किया जाता है?",
    options_en: ["resolution", "min-width", "aspect-ratio", "color"],
    options_hi: ["resolution", "min-width", "aspect-ratio", "color"],
    answer_en: "resolution",
    answer_hi: "resolution",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is meant by a flexible layout?",
    question_hi: "लचीले लेआउट का क्या अर्थ है?",
    options_en: ["Fixed width", "Changes with screen size", "Centered text", "Responsive color"],
    options_hi: ["स्थिर चौड़ाई", "स्क्रीन आकार के अनुसार बदलता है", "केंद्रित टेक्स्ट", "उत्तरदायी रंग"],
    answer_en: "Changes with screen size",
    answer_hi: "स्क्रीन आकार के अनुसार बदलता है",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which one is NOT a valid value for orientation?",
    question_hi: "निम्न में से कौन-सा ओरिएंटेशन के लिए मान्य मान नहीं है?",
    options_en: ["portrait", "landscape", "square", "none"],
    options_hi: ["पोर्ट्रेट", "लैंडस्केप", "स्क्वायर", "नन"],
    answer_en: "square",
    answer_hi: "स्क्वायर",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_en: "Which media feature checks the device's aspect ratio?",
    question_hi: "कौन-सा मीडिया फीचर डिवाइस के आस्पेक्ट अनुपात की जांच करता है?",
    options_en: ["aspect-ratio", "resolution", "orientation", "height"],
    options_hi: ["aspect-ratio", "resolution", "orientation", "height"],
    answer_en: "aspect-ratio",
    answer_hi: "aspect-ratio",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which tool is best for testing responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन का परीक्षण करने के लिए सबसे अच्छा टूल कौन-सा है?",
    options_en: ["Photoshop", "Browser DevTools", "MS Word", "Paint"],
    options_hi: ["फोटोशॉप", "ब्राउज़र डेवटूल्स", "एमएस वर्ड", "पेंट"],
    answer_en: "Browser DevTools",
    answer_hi: "ब्राउज़र डेवटूल्स",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does 'responsive' mean in web design?",
    question_hi: "वेब डिज़ाइन में 'उत्तरदायी' का क्या मतलब है?",
    options_en: ["Animated", "Adjusts to screen size", "Fast loading", "Server-based"],
    options_hi: ["एनिमेटेड", "स्क्रीन आकार के अनुसार समायोजित होता है", "तेज़ लोडिंग", "सर्वर-आधारित"],
    answer_en: "Adjusts to screen size",
    answer_hi: "स्क्रीन आकार के अनुसार समायोजित होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "How many breakpoints are recommended in responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन में कितने ब्रेकपॉइंट्स की सिफारिश की जाती है?",
    options_en: ["At least 1", "2-3", "4-5", "As needed"],
    options_hi: ["कम से कम 1", "2-3", "4-5", "जितने ज़रूरत हों"],
    answer_en: "As needed",
    answer_hi: "जितने ज़रूरत हों",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which one is a mobile-first approach?",
    question_hi: "निम्न में से कौन मोबाइल-फर्स्ट दृष्टिकोण है?",
    options_en: ["Using max-width first", "Designing for desktop only", "Using min-width first", "Using JavaScript media"],
    options_hi: ["पहले max-width का उपयोग करना", "केवल डेस्कटॉप के लिए डिज़ाइन करना", "पहले min-width का उपयोग करना", "JavaScript मीडिया का उपयोग करना"],
    answer_en: "Using min-width first",
    answer_hi: "पहले min-width का उपयोग करना",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is a breakpoint?",
    question_hi: "ब्रेकपॉइंट क्या होता है?",
    options_en: ["Screen resolution", "CSS file", "Device rotation", "Width where layout changes"],
    options_hi: ["स्क्रीन रेजोल्यूशन", "CSS फ़ाइल", "डिवाइस रोटेशन", "चौड़ाई जहाँ लेआउट बदलता है"],
    answer_en: "Width where layout changes",
    answer_hi: "चौड़ाई जहाँ लेआउट बदलता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property is commonly adjusted in media queries?",
    question_hi: "मीडिया क्वेरी में सामान्यतः कौन-सी प्रॉपर्टी समायोजित की जाती है?",
    options_en: ["color", "font-weight", "width", "text-shadow"],
    options_hi: ["रंग", "फ़ॉन्ट-वेट", "चौड़ाई", "टेक्स्ट-शैडो"],
    answer_en: "width",
    answer_hi: "चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which media type applies to all devices?",
    question_hi: "कौन-सा मीडिया प्रकार सभी डिवाइसों पर लागू होता है?",
    options_en: ["screen", "print", "all", "device"],
    options_hi: ["स्क्रीन", "प्रिंट", "ऑल", "डिवाइस"],
    answer_en: "all",
    answer_hi: "ऑल",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which of these is a best practice for responsive design?",
    question_hi: "निम्न में से कौन उत्तरदायी डिज़ाइन के लिए सर्वोत्तम अभ्यास है?",
    options_en: ["Use fixed units", "Ignore media queries", "Use relative units", "Avoid CSS"],
    options_hi: ["फिक्स्ड यूनिट्स का उपयोग करें", "मीडिया क्वेरी को अनदेखा करें", "रिलेटिव यूनिट्स का उपयोग करें", "CSS से बचें"],
    answer_en: "Use relative units",
    answer_hi: "रिलेटिव यूनिट्स का उपयोग करें",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which one is not used in media queries?",
    question_hi: "निम्न में से कौन मीडिया क्वेरी में उपयोग नहीं होता?",
    options_en: ["min-width", "max-width", "color", "padding"],
    options_hi: ["min-width", "max-width", "color", "padding"],
    answer_en: "padding",
    answer_hi: "padding",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the advantage of using 'em' in media queries?",
    question_hi: "मीडिया क्वेरी में 'em' का उपयोग करने का क्या लाभ है?",
    options_en: ["Fixed sizing", "Resolution independence", "For mobile only", "Slower performance"],
    options_hi: ["फिक्स्ड साइजिंग", "रेज़ोल्यूशन स्वतंत्रता", "केवल मोबाइल के लिए", "धीमा प्रदर्शन"],
    answer_en: "Resolution independence",
    answer_hi: "रेज़ोल्यूशन स्वतंत्रता",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which screen size is typically considered a desktop view?",
    question_hi: "कौन-सा स्क्रीन आकार सामान्यतः डेस्कटॉप दृश्य माना जाता है?",
    options_en: ["320px", "768px", "1024px", "1440px"],
    options_hi: ["320px", "768px", "1024px", "1440px"],
    answer_en: "1024px",
    answer_hi: "1024px",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property in media queries helps adjust font size?",
    question_hi: "मीडिया क्वेरी में कौन-सी प्रॉपर्टी फ़ॉन्ट साइज समायोजित करने में मदद करती है?",
    options_en: ["font-size", "line-height", "color", "padding"],
    options_hi: ["फ़ॉन्ट साइज", "लाइन-हाइट", "रंग", "पैडिंग"],
    answer_en: "font-size",
    answer_hi: "फ़ॉन्ट साइज",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which one is not a unit for screen width?",
    question_hi: "निम्न में से कौन स्क्रीन चौड़ाई के लिए इकाई नहीं है?",
    options_en: ["px", "%", "vh", "kg"],
    options_hi: ["px", "%", "vh", "किलोग्राम"],
    answer_en: "kg",
    answer_hi: "किलोग्राम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which of these is important for accessibility in responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन में इनमें से कौन एक्सेसिबिलिटी के लिए महत्वपूर्ण है?",
    options_en: ["High contrast", "Fixed layout", "Flashy colors", "Fixed font-size"],
    options_hi: ["हाई कंट्रास्ट", "फिक्स्ड लेआउट", "चमकीले रंग", "फिक्स्ड फ़ॉन्ट-साइज"],
    answer_en: "High contrast",
    answer_hi: "हाई कंट्रास्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does 'max-width: 1200px' mean in media query?",
    question_hi: "मीडिया क्वेरी में 'max-width: 1200px' का क्या अर्थ है?",
    options_en: ["Minimum width of 1200px", "Applies when width is ≤ 1200px", "Always applies", "Only for mobile"],
    options_hi: ["न्यूनतम चौड़ाई 1200px", "जब चौड़ाई ≤ 1200px हो", "हमेशा लागू होता है", "केवल मोबाइल के लिए"],
    answer_en: "Applies when width is ≤ 1200px",
    answer_hi: "जब चौड़ाई ≤ 1200px हो",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which one is NOT a responsive design framework?",
    question_hi: "निम्न में से कौन उत्तरदायी डिज़ाइन फ्रेमवर्क नहीं है?",
    options_en: ["Bootstrap", "Tailwind", "Foundation", "Photoshop"],
    options_hi: ["बूटस्ट्रैप", "टेलविंड", "फाउंडेशन", "फोटोशॉप"],
    answer_en: "Photoshop",
    answer_hi: "फोटोशॉप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which attribute is used in HTML to help with responsive images?",
    question_hi: "HTML में उत्तरदायी इमेज के लिए कौन-सा एट्रिब्यूट उपयोग होता है?",
    options_en: ["src", "srcset", "alt", "title"],
    options_hi: ["src", "srcset", "alt", "title"],
    answer_en: "srcset",
    answer_hi: "srcset",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What does 'viewport' meta tag control?",
    question_hi: "'viewport' मेटा टैग क्या नियंत्रित करता है?",
    options_en: ["Font", "Device width and scale", "Image size", "Animation speed"],
    options_hi: ["फ़ॉन्ट", "डिवाइस की चौड़ाई और स्केल", "इमेज साइज", "एनिमेशन स्पीड"],
    answer_en: "Device width and scale",
    answer_hi: "डिवाइस की चौड़ाई और स्केल",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which meta tag is essential for responsive websites?",
    question_hi: "उत्तरदायी वेबसाइट्स के लिए कौन-सा मेटा टैग आवश्यक है?",
    options_en: ["<meta charset>", "<meta viewport>", "<meta keywords>", "<meta author>"],
    options_hi: ["<meta charset>", "<meta viewport>", "<meta keywords>", "<meta author>"],
    answer_en: "<meta viewport>",
    answer_hi: "<meta viewport>",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which is the best layout strategy for responsiveness?",
    question_hi: "उत्तरदायी डिज़ाइन के लिए सबसे अच्छा लेआउट स्ट्रैटेजी कौन-सा है?",
    options_en: ["Fixed layout", "Fluid grid", "Absolute layout", "Centered div"],
    options_hi: ["फिक्स्ड लेआउट", "फ्लूइड ग्रिड", "एब्सोल्यूट लेआउट", "सेंटरड डिव"],
    answer_en: "Fluid grid",
    answer_hi: "फ्लूइड ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which value of box-sizing is better for responsive layouts?",
    question_hi: "उत्तरदायी लेआउट के लिए box-sizing का कौन-सा मान बेहतर होता है?",
    options_en: ["content-box", "border-box", "padding-box", "margin-box"],
    options_hi: ["content-box", "border-box", "padding-box", "margin-box"],
    answer_en: "border-box",
    answer_hi: "border-box",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS unit adapts well to screen size?",
    question_hi: "कौन-सी CSS यूनिट स्क्रीन साइज के अनुसार अच्छे से अनुकूल होती है?",
    options_en: ["px", "em", "rem", "%"],
    options_hi: ["px", "em", "rem", "%"],
    answer_en: "%",
    answer_hi: "%",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which tag should you use to ensure mobile responsiveness?",
    question_hi: "मोबाइल उत्तरदायित्व सुनिश्चित करने के लिए कौन-सा टैग उपयोग करें?",
    options_en: ["<meta viewport>", "<link>", "<script>", "<style>"],
    options_hi: ["<meta viewport>", "<link>", "<script>", "<style>"],
    answer_en: "<meta viewport>",
    answer_hi: "<meta viewport>",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which value of width makes element adjust to screen?",
    question_hi: "कौन-सा width मान एलिमेंट को स्क्रीन के अनुसार समायोजित करता है?",
    options_en: ["auto", "100%", "inherit", "fit-content"],
    options_hi: ["auto", "100%", "inherit", "fit-content"],
    answer_en: "100%",
    answer_hi: "100%",
    attempted: false,
    selected: ""
  }
  // Continue adding more questions 51 to 100
];

// A

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