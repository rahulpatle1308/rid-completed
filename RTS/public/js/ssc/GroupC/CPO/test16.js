const questions = [
  {
  "num":1,
  question_en: "What does CPU stand for in computer terminology?",
  question_hi: "कंप्यूटर शब्दावली में CPU का क्या अर्थ है?",
  options_en: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
  options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
  answer_en: "Central Processing Unit",
  answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
  attempted: false,
  selected: ""
},
{
  "num":2,
  question_en: "Which company developed the Windows operating system?",
  question_hi: "विंडोज ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
  options_en: ["Apple", "Microsoft", "IBM", "Google"],
  options_hi: ["एप्पल", "माइक्रोसॉफ्ट", "आईबीएम", "गूगल"],
  answer_en: "Microsoft",
  answer_hi: "माइक्रोसॉफ्ट",
  attempted: false,
  selected: ""
},
{
  "num":3,
  question_en: "What is the full form of RAM?",
  question_hi: "RAM का पूरा नाम क्या है?",
  options_en: ["Random Access Memory", "Read Access Memory", "Random Active Memory", "Read Active Memory"],
  options_hi: ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम एक्टिव मेमोरी", "रीड एक्टिव मेमोरी"],
  answer_en: "Random Access Memory",
  answer_hi: "रैंडम एक्सेस मेमोरी",
  attempted: false,
  selected: ""
},
{
  "num":4,
  question_en: "Which key is used to delete text to the right of the cursor?",
  question_hi: "कर्सर के दाईं ओर के टेक्स्ट को डिलीट करने के लिए किस की का उपयोग किया जाता है?",
  options_en: ["Backspace", "Delete", "Enter", "Shift"],
  options_hi: ["बैकस्पेस", "डिलीट", "एंटर", "शिफ्ट"],
  answer_en: "Delete",
  answer_hi: "डिलीट",
  attempted: false,
  selected: ""
},
{
  "num":5,
  question_en: "What does WWW stand for in internet terminology?",
  question_hi: "इंटरनेट शब्दावली में WWW का क्या अर्थ है?",
  options_en: ["World Wide Web", "Web World Wide", "World Web Wide", "Wide World Web"],
  options_hi: ["वर्ल्ड वाइड वेब", "वेब वर्ल्ड वाइड", "वर्ल्ड वेब वाइड", "वाइड वर्ल्ड वेब"],
  answer_en: "World Wide Web",
  answer_hi: "वर्ल्ड वाइड वेब",
  attempted: false,
  selected: ""
},
{
  "num":6,
  question_en: "Which programming language is known as the language of the web?",
  question_hi: "किस प्रोग्रामिंग भाषा को वेब की भाषा के रूप में जाना जाता है?",
  options_en: ["Java", "Python", "JavaScript", "C++"],
  options_hi: ["जावा", "पाइथन", "जावास्क्रिप्ट", "C++"],
  answer_en: "JavaScript",
  answer_hi: "जावास्क्रिप्ट",
  attempted: false,
  selected: ""
},
{
  "num":7,
  question_en: "What is the extension of a Microsoft Word document?",
  question_hi: "माइक्रोसॉफ्ट वर्ड दस्तावेज़ का एक्सटेंशन क्या है?",
  options_en: [".doc", ".txt", ".pdf", ".xls"],
  options_hi: [".doc", ".txt", ".pdf", ".xls"],
  answer_en: ".doc",
  answer_hi: ".doc",
  attempted: false,
  selected: ""
},
{
  "num":8,
  question_en: "Which device is used to connect a computer to the internet?",
  question_hi: "कंप्यूटर को इंटरनेट से जोड़ने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["CPU", "Modem", "Monitor", "Printer"],
  options_hi: ["CPU", "मॉडेम", "मॉनिटर", "प्रिंटर"],
  answer_en: "Modem",
  answer_hi: "मॉडेम",
  attempted: false,
  selected: ""
},
{
  "num":9,
  question_en: "What does USB stand for?",
  question_hi: "USB का क्या अर्थ है?",
  options_en: ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
  options_hi: ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
  answer_en: "Universal Serial Bus",
  answer_hi: "यूनिवर्सल सीरियल बस",
  attempted: false,
  selected: ""
},
{
  "num":10,
  question_en: "Which company developed the Android operating system?",
  question_hi: "एंड्रॉइड ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
  options_en: ["Apple", "Microsoft", "Google", "Samsung"],
  options_hi: ["एप्पल", "माइक्रोसॉफ्ट", "गूगल", "सैमसंग"],
  answer_en: "Google",
  answer_hi: "गूगल",
  attempted: false,
  selected: ""
},
{
  "num":11,
  question_en: "What is the full form of HTML?",
  question_hi: "HTML का पूरा नाम क्या है?",
  options_en: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Transfer Markup Language", "High Transfer Markup Language"],
  options_hi: ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाई टेक्स्ट मार्कअप लैंग्वेज", "हाइपर ट्रांसफर मार्कअप लैंग्वेज", "हाई ट्रांसफर मार्कअप लैंग्वेज"],
  answer_en: "Hyper Text Markup Language",
  answer_hi: "हाइपर टेक्स्ट मार्कअप लैंग्वेज",
  attempted: false,
  selected: ""
},
{
  "num":12,
  question_en: "Which key combination is used to copy selected text?",
  question_hi: "चयनित टेक्स्ट को कॉपी करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
  options_en: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
  options_hi: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
  answer_en: "Ctrl + C",
  answer_hi: "Ctrl + C",
  attempted: false,
  selected: ""
},
{
  "num":13,
  question_en: "What does PDF stand for?",
  question_hi: "PDF का क्या अर्थ है?",
  options_en: ["Portable Document Format", "Printable Document Format", "Personal Document Format", "Public Document Format"],
  options_hi: ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेबल डॉक्यूमेंट फॉर्मेट", "पर्सनल डॉक्यूमेंट फॉर्मेट", "पब्लिक डॉक्यूमेंट फॉर्मेट"],
  answer_en: "Portable Document Format",
  answer_hi: "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
  attempted: false,
  selected: ""
},
{
  "num":14,
  question_en: "Which social media platform is known for its 280-character limit?",
  question_hi: "कौन सा सोशल मीडिया प्लेटफॉर्म अपनी 280-अक्षर सीमा के लिए जाना जाता है?",
  options_en: ["Facebook", "Instagram", "Twitter", "WhatsApp"],
  options_hi: ["फेसबुक", "इंस्टाग्राम", "ट्विटर", "व्हाट्सएप"],
  answer_en: "Twitter",
  answer_hi: "ट्विटर",
  attempted: false,
  selected: ""
},
{
  "num":15,
  question_en: "What is the brain of a computer called?",
  question_hi: "कंप्यूटर के दिमाग को क्या कहा जाता है?",
  options_en: ["Monitor", "CPU", "RAM", "Hard Disk"],
  options_hi: ["मॉनिटर", "CPU", "RAM", "हार्ड डिस्क"],
  answer_en: "CPU",
  answer_hi: "CPU",
  attempted: false,
  selected: ""
},
{
  "num":16,
  question_en: "Which company created the iPhone?",
  question_hi: "आईफोन किस कंपनी ने बनाया?",
  options_en: ["Samsung", "Apple", "Google", "Microsoft"],
  options_hi: ["सैमसंग", "एप्पल", "गूगल", "माइक्रोसॉफ्ट"],
  answer_en: "Apple",
  answer_hi: "एप्पल",
  attempted: false,
  selected: ""
},
{
  "num":17,
  question_en: "What does URL stand for?",
  question_hi: "URL का क्या अर्थ है?",
  options_en: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
  options_hi: ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
  answer_en: "Uniform Resource Locator",
  answer_hi: "यूनिफॉर्म रिसोर्स लोकेटर",
  attempted: false,
  selected: ""
},
{
  "num":18,
  question_en: "Which key is used to refresh a webpage?",
  question_hi: "वेबपेज को रिफ्रेश करने के लिए किस की का उपयोग किया जाता है?",
  options_en: ["F1", "F5", "F10", "F12"],
  options_hi: ["F1", "F5", "F10", "F12"],
  answer_en: "F5",
  answer_hi: "F5",
  attempted: false,
  selected: ""
},
{
  "num":19,
  question_en: "What is the full form of VPN?",
  question_hi: "VPN का पूरा नाम क्या है?",
  options_en: ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Verified Public Network"],
  options_hi: ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वेरीफाइड प्राइवेट नेटवर्क", "वेरीफाइड पब्लिक नेटवर्क"],
  answer_en: "Virtual Private Network",
  answer_hi: "वर्चुअल प्राइवेट नेटवर्क",
  attempted: false,
  selected: ""
},
{
  "num":20,
  question_en: "Which company owns YouTube?",
  question_hi: "यूट्यूब का मालिकाना हक किस कंपनी के पास है?",
  options_en: ["Facebook", "Google", "Microsoft", "Amazon"],
  options_hi: ["फेसबुक", "गूगल", "माइक्रोसॉफ्ट", "अमेज़ॉन"],
  answer_en: "Google",
  answer_hi: "गूगल",
  attempted: false,
  selected: ""
},
{
  "num":21,
  question_en: "What does GIF stand for?",
  question_hi: "GIF का क्या अर्थ है?",
  options_en: ["Graphic Interchange Format", "Graphic Internet Format", "Graphic Image Format", "Graphic Interface Format"],
  options_hi: ["ग्राफिक इंटरचेंज फॉर्मेट", "ग्राफिक इंटरनेट फॉर्मेट", "ग्राफिक इमेज फॉर्मेट", "ग्राफिक इंटरफेस फॉर्मेट"],
  answer_en: "Graphic Interchange Format",
  answer_hi: "ग्राफिक इंटरचेंज फॉर्मेट",
  attempted: false,
  selected: ""
},
{
  "num":22,
  question_en: "Which key combination is used to paste copied text?",
  question_hi: "कॉपी किए गए टेक्स्ट को पेस्ट करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
  options_en: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
  options_hi: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
  answer_en: "Ctrl + V",
  answer_hi: "Ctrl + V",
  attempted: false,
  selected: ""
},
{
  "num":23,
  question_en: "What is the full form of BIOS?",
  question_hi: "BIOS का पूरा नाम क्या है?",
  options_en: ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Binary Internal Operating System"],
  options_hi: ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटरनल ऑपरेटिंग सिस्टम", "बाइनरी इंटरनल ऑपरेटिंग सिस्टम"],
  answer_en: "Basic Input Output System",
  answer_hi: "बेसिक इनपुट आउटपुट सिस्टम",
  attempted: false,
  selected: ""
},
{
  "num":24,
  question_en: "Which messaging app uses green and white colors?",
  question_hi: "किस मैसेजिंग ऐप में हरे और सफेद रंग का उपयोग किया जाता है?",
  options_en: ["Telegram", "WhatsApp", "Signal", "Facebook Messenger"],
  options_hi: ["टेलीग्राम", "व्हाट्सएप", "सिग्नल", "फेसबुक मैसेंजर"],
  answer_en: "WhatsApp",
  answer_hi: "व्हाट्सएप",
  attempted: false,
  selected: ""
},
{
  "num":25,
  question_en: "What does LCD stand for?",
  question_hi: "LCD का क्या अर्थ है?",
  options_en: ["Liquid Crystal Display", "Liquid Color Display", "Light Crystal Display", "Light Color Display"],
  options_hi: ["लिक्विड क्रिस्टल डिस्प्ले", "लिक्विड कलर डिस्प्ले", "लाइट क्रिस्टल डिस्प्ले", "लाइट कलर डिस्प्ले"],
  answer_en: "Liquid Crystal Display",
  answer_hi: "लिक्विड क्रिस्टल डिस्प्ले",
  attempted: false,
  selected: ""
},
{
  "num":26,
  question_en: "Which company created the Java programming language?",
  question_hi: "जावा प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
  options_en: ["Microsoft", "Sun Microsystems", "Oracle", "Google"],
  options_hi: ["माइक्रोसॉफ्ट", "सन माइक्रोसिस्टम्स", "ओरेकल", "गूगल"],
  answer_en: "Sun Microsystems",
  answer_hi: "सन माइक्रोसिस्टम्स",
  attempted: false,
  selected: ""
},
{
  "num":27,
  question_en: "What is the full form of HTTP?",
  question_hi: "HTTP का पूरा नाम क्या है?",
  options_en: ["Hyper Text Transfer Protocol", "High Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"],
  options_hi: ["हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई ट्रांसफर टेक्स्ट प्रोटोकॉल"],
  answer_en: "Hyper Text Transfer Protocol",
  answer_hi: "हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल",
  attempted: false,
  selected: ""
},
{
  "num":28,
  question_en: "Which key is used to create a new folder in Windows?",
  question_hi: "विंडोज में नया फोल्डर बनाने के लिए किस की का उपयोग किया जाता है?",
  options_en: ["Ctrl + N", "Ctrl + Shift + N", "Ctrl + F", "Ctrl + D"],
  options_hi: ["Ctrl + N", "Ctrl + Shift + N", "Ctrl + F", "Ctrl + D"],
  answer_en: "Ctrl + Shift + N",
  answer_hi: "Ctrl + Shift + N",
  attempted: false,
  selected: ""
},
{
  "num":29,
  question_en: "What does AI stand for?",
  question_hi: "AI का क्या अर्थ है?",
  options_en: ["Artificial Intelligence", "Automated Intelligence", "Artificial Information", "Automated Information"],
  options_hi: ["आर्टिफिशियल इंटेलिजेंस", "ऑटोमेटेड इंटेलिजेंस", "आर्टिफिशियल इंफॉर्मेशन", "ऑटोमेटेड इंफॉर्मेशन"],
  answer_en: "Artificial Intelligence",
  answer_hi: "आर्टिफिशियल इंटेलिजेंस",
  attempted: false,
  selected: ""
},
{
  "num":30,
  question_en: "Which company created the Python programming language?",
  question_hi: "पाइथन प्रोग्रामिंग भाषा किसने बनाई?",
  options_en: ["Guido van Rossum", "Microsoft", "Google", "Apple"],
  options_hi: ["गुइडो वैन रोसुम", "माइक्रोसॉफ्ट", "गूगल", "एप्पल"],
  answer_en: "Guido van Rossum",
  answer_hi: "गुइडो वैन रोसुम",
  attempted: false,
  selected: ""
},
{
  "num":31,
  question_en: "What is the full form of ISP?",
  question_hi: "ISP का पूरा नाम क्या है?",
  options_en: ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
  options_hi: ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सिस्टम प्रोवाइडर", "इंटरनेशनल सर्विस प्रोवाइडर", "इंटरनेशनल सिस्टम प्रोवाइडर"],
  answer_en: "Internet Service Provider",
  answer_hi: "इंटरनेट सर्विस प्रोवाइडर",
  attempted: false,
  selected: ""
},
{
  "num":32,
  question_en: "Which key is used to select all text in a document?",
  question_hi: "दस्तावेज़ में सभी टेक्स्ट को चुनने के लिए किस की का उपयोग किया जाता है?",
  options_en: ["Ctrl + A", "Ctrl + S", "Ctrl + Z", "Ctrl + X"],
  options_hi: ["Ctrl + A", "Ctrl + S", "Ctrl + Z", "Ctrl + X"],
  answer_en: "Ctrl + A",
  answer_hi: "Ctrl + A",
  attempted: false,
  selected: ""
},
{
  "num":33,
  question_en: "What does ROM stand for?",
  question_hi: "ROM का क्या अर्थ है?",
  options_en: ["Read Only Memory", "Random Only Memory", "Read Operation Memory", "Random Operation Memory"],
  options_hi: ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड ऑपरेशन मेमोरी", "रैंडम ऑपरेशन मेमोरी"],
  answer_en: "Read Only Memory",
  answer_hi: "रीड ओनली मेमोरी",
  attempted: false,
  selected: ""
},
{
  "num":34,
  question_en: "Which company created the first computer mouse?",
  question_hi: "पहला कंप्यूटर माउस किस कंपनी ने बनाया?",
  options_en: ["Microsoft", "Apple", "Xerox", "IBM"],
  options_hi: ["माइक्रोसॉफ्ट", "एप्पल", "जेरोक्स", "आईबीएम"],
  answer_en: "Xerox",
  answer_hi: "जेरोक्स",
  attempted: false,
  selected: ""
},
{
  "num":35,
  question_en: "What is the full form of SMS?",
  question_hi: "SMS का पूरा नाम क्या है?",
  options_en: ["Short Message Service", "Simple Message Service", "Short Messaging System", "Simple Messaging System"],
  options_hi: ["शॉर्ट मैसेज सर्विस", "सिंपल मैसेज सर्विस", "शॉर्ट मैसेजिंग सिस्टम", "सिंपल मैसेजिंग सिस्टम"],
  answer_en: "Short Message Service",
  answer_hi: "शॉर्ट मैसेज सर्विस",
  attempted: false,
  selected: ""
},
{
  "num":36,
  question_en: "Which key is used to save a document?",
  question_hi: "दस्तावेज़ को सेव करने के लिए किस की का उपयोग किया जाता है?",
  options_en: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
  options_hi: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
  answer_en: "Ctrl + S",
  answer_hi: "Ctrl + S",
  attempted: false,
  selected: ""
},
{
  "num":37,
  question_en: "What does GPS stand for?",
  question_hi: "GPS का क्या अर्थ है?",
  options_en: ["Global Positioning System", "Global Pointing System", "General Positioning System", "General Pointing System"],
  options_hi: ["ग्लोबल पोजिशनिंग सिस्टम", "ग्लोबल पॉइंटिंग सिस्टम", "जनरल पोजिशनिंग सिस्टम", "जनरल पॉइंटिंग सिस्टम"],
  answer_en: "Global Positioning System",
  answer_hi: "ग्लोबल पोजिशनिंग सिस्टम",
  attempted: false,
  selected: ""
},
{
  "num":38,
  question_en: "Which company created the Linux operating system?",
  question_hi: "लिनक्स ऑपरेटिंग सिस्टम किसने बनाया?",
  options_en: ["Linus Torvalds", "Microsoft", "Apple", "IBM"],
  options_hi: ["लिनुस टोर्वाल्ड्स", "माइक्रोसॉफ्ट", "एप्पल", "आईबीएम"],
  answer_en: "Linus Torvalds",
  answer_hi: "लिनुस टोर्वाल्ड्स",
  attempted: false,
  selected: ""
},
{
  "num":39,
  question_en: "What is the full form of SIM?",
  question_hi: "SIM का पूरा नाम क्या है?",
  options_en: ["Subscriber Identity Module", "Subscriber Information Module", "System Identity Module", "System Information Module"],
  options_hi: ["सब्सक्राइबर आइडेंटिटी मॉड्यूल", "सब्सक्राइबर इनफॉर्मेशन मॉड्यूल", "सिस्टम आइडेंटिटी मॉड्यूल", "सिस्टम इनफॉर्मेशन मॉड्यूल"],
  answer_en: "Subscriber Identity Module",
  answer_hi: "सब्सक्राइबर आइडेंटिटी मॉड्यूल",
  attempted: false,
  selected: ""
},
{
  "num":40,
  question_en: "Which key combination is used to undo an action?",
  question_hi: "किसी क्रिया को अनडू करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
  options_en: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + R"],
  options_hi: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + R"],
  answer_en: "Ctrl + Z",
  answer_hi: "Ctrl + Z",
  attempted: false,
  selected: ""
},
{
  "num":41,
  question_en: "What does LED stand for?",
  question_hi: "LED का क्या अर्थ है?",
  options_en: ["Light Emitting Diode", "Light Emitting Device", "Light Energy Diode", "Light Energy Device"],
  options_hi: ["लाइट एमिटिंग डायोड", "लाइट एमिटिंग डिवाइस", "लाइट एनर्जी डायोड", "लाइट एनर्जी डिवाइस"],
  answer_en: "Light Emitting Diode",
  answer_hi: "लाइट एमिटिंग डायोड",
  attempted: false,
  selected: ""
},
{
  "num":42,
  question_en: "Which company created the C programming language?",
  question_hi: "C प्रोग्रामिंग भाषा किसने बनाई?",
  options_en: ["Dennis Ritchie", "Microsoft", "IBM", "Bell Labs"],
  options_hi: ["डेनिस रिची", "माइक्रोसॉफ्ट", "आईबीएम", "बेल लैब्स"],
  answer_en: "Dennis Ritchie",
  answer_hi: "डेनिस रिची",
  attempted: false,
  selected: ""
},
{
  "num":43,
  question_en: "What is the full form of Wi-Fi?",
  question_hi: "Wi-Fi का पूरा नाम क्या है?",
  options_en: ["Wireless Fidelity", "Wireless Frequency", "Wired Fidelity", "Wired Frequency"],
  options_hi: ["वायरलेस फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वायर्ड फिडेलिटी", "वायर्ड फ्रीक्वेंसी"],
  answer_en: "Wireless Fidelity",
  answer_hi: "वायरलेस फिडेलिटी",
  attempted: false,
  selected: ""
},
{
  "num":44,
  question_en: "Which key is used to print a document?",
  question_hi: "दस्तावेज़ प्रिंट करने के लिए किस की का उपयोग किया जाता है?",
  options_en: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
  options_hi: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
  answer_en: "Ctrl + P",
  answer_hi: "Ctrl + P",
  attempted: false,
  selected: ""
},
{
  "num":45,
  question_en: "What does SSD stand for?",
  question_hi: "SSD का क्या अर्थ है?",
  options_en: ["Solid State Drive", "Solid Storage Drive", "System State Drive", "System Storage Drive"],
  options_hi: ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टोरेज ड्राइव", "सिस्टम स्टेट ड्राइव", "सिस्टम स्टोरेज ड्राइव"],
  answer_en: "Solid State Drive",
  answer_hi: "सॉलिड स्टेट ड्राइव",
  attempted: false,
  selected: ""
},
{
  "num":46,
  question_en: "Which company created the first commercially successful personal computer?",
  question_hi: "पहला व्यावसायिक रूप से सफल पर्सनल कंप्यूटर किस कंपनी ने बनाया?",
  options_en: ["IBM", "Apple", "Microsoft", "Commodore"],
  options_hi: ["आईबीएम", "एप्पल", "माइक्रोसॉफ्ट", "कमोडोर"],
  answer_en: "IBM",
  answer_hi: "आईबीएम",
  attempted: false,
  selected: ""
},
{
  "num":47,
  question_en: "What is the full form of URL?",
  question_hi: "URL का पूरा नाम क्या है?",
  options_en: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
  options_hi: ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
  answer_en: "Uniform Resource Locator",
  answer_hi: "यूनिफॉर्म रिसोर्स लोकेटर",
  attempted: false,
  selected: ""
},
{
  "num":48,
  question_en: "Which key is used to find text in a document?",
  question_hi: "दस्तावेज़ में टेक्स्ट ढूंढने के लिए किस की का उपयोग किया जाता है?",
  options_en: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"],
  options_hi: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"],
  answer_en: "Ctrl + F",
  answer_hi: "Ctrl + F",
  attempted: false,
  selected: ""
},
{
  "num":49,
  question_en: "What does MMS stand for?",
  question_hi: "MMS का क्या अर्थ है?",
  options_en: ["Multimedia Messaging Service", "Multiple Messaging Service", "Multimedia Message System", "Multiple Message System"],
  options_hi: ["मल्टीमीडिया मैसेजिंग सर्विस", "मल्टिपल मैसेजिंग सर्विस", "मल्टीमीडिया मैसेज सिस्टम", "मल्टिपल मैसेज सिस्टम"],
  answer_en: "Multimedia Messaging Service",
  answer_hi: "मल्टीमीडिया मैसेजिंग सर्विस",
  attempted: false,
  selected: ""
},
{
  "num":50,
  question_en: "Which company created the first smartphone?",
  question_hi: "पहला स्मार्टफोन किस कंपनी ने बनाया?",
  options_en: ["Apple", "IBM", "Nokia", "Motorola"],
  options_hi: ["एप्पल", "आईबीएम", "नोकिया", "मोटोरोला"],
  answer_en: "IBM",
  answer_hi: "आईबीएम",
  attempted: false,
  selected: ""
}
];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

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