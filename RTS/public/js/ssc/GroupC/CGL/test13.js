const questions = [
 {
  "num": 1,
  question_en: "Which vitamin deficiency causes 'Night Blindness'?",
  question_hi: "किस विटामिन की कमी से 'रतौंधी' (Night Blindness) होती है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन ए",
  attempted: false,
  selected: ""
},
{
  "num": 2,
  question_en: "What is the chemical symbol for iron?",
  question_hi: "लोहे का रासायनिक प्रतीक क्या है?",
  options_en: ["Ir", "Fe", "In", "Io"],
  options_hi: ["Ir", "Fe", "In", "Io"],
  answer_en: "Fe",
  answer_hi: "Fe",
  attempted: false,
  selected: ""
},
{
  "num": 3,
  question_en: "Which planet is known as the 'Ice Giant'?",
  question_hi: "किस ग्रह को 'बर्फ दानव' (Ice Giant) कहा जाता है?",
  options_en: ["Uranus", "Neptune", "Saturn", "Jupiter"],
  options_hi: ["अरुण (यूरेनस)", "वरुण (नेपच्यून)", "शनि", "बृहस्पति"],
  answer_en: "Uranus",
  answer_hi: "अरुण (यूरेनस)",
  attempted: false,
  selected: ""
},
{
  "num": 4,
  question_en: "Which gas is used in the manufacturing of ammonia?",
  question_hi: "अमोनिया के निर्माण में किस गैस का उपयोग होता है?",
  options_en: ["Nitrogen", "Hydrogen", "Both Nitrogen and Hydrogen", "Oxygen"],
  options_hi: ["नाइट्रोजन", "हाइड्रोजन", "नाइट्रोजन और हाइड्रोजन दोनों", "ऑक्सीजन"],
  answer_en: "Both Nitrogen and Hydrogen",
  answer_hi: "नाइट्रोजन और हाइड्रोजन दोनों",
  attempted: false,
  selected: ""
},
{
  "num": 5,
  question_en: "Who invented the 'Dynamite'?",
  question_hi: "'डायनामाइट' का आविष्कार किसने किया?",
  options_en: ["Alfred Nobel", "Thomas Edison", "Alexander Graham Bell", "Marie Curie"],
  options_hi: ["अल्फ्रेड नोबेल", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "मैरी क्यूरी"],
  answer_en: "Alfred Nobel",
  answer_hi: "अल्फ्रेड नोबेल",
  attempted: false,
  selected: ""
},
{
  "num": 6,
  question_en: "Which is the longest bone in the human body?",
  question_hi: "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
  options_en: ["Femur", "Tibia", "Humerus", "Fibula"],
  options_hi: ["फीमर (जांघ की हड्डी)", "टिबिया (पिंडली की हड्डी)", "ह्यूमरस (बांह की ऊपरी हड्डी)", "फिबुला (बाहरी पिंडली की हड्डी)"],
  answer_en: "Femur",
  answer_hi: "फीमर (जांघ की हड्डी)",
  attempted: false,
  selected: ""
},
{
  "num": 7,
  question_en: "What is the SI unit of frequency?",
  question_hi: "आवृत्ति की SI इकाई क्या है?",
  options_en: ["Hertz", "Decibel", "Watt", "Joule"],
  options_hi: ["हर्ट्ज़", "डेसिबल", "वाट", "जूल"],
  answer_en: "Hertz",
  answer_hi: "हर्ट्ज़",
  attempted: false,
  selected: ""
},
{
  "num": 8,
  question_en: "Which metal is used in the making of electrical wires?",
  question_hi: "बिजली के तार बनाने में किस धातु का उपयोग किया जाता है?",
  options_en: ["Copper", "Aluminum", "Both Copper and Aluminum", "Iron"],
  options_hi: ["तांबा", "एल्यूमीनियम", "तांबा और एल्यूमीनियम दोनों", "लोहा"],
  answer_en: "Both Copper and Aluminum",
  answer_hi: "तांबा और एल्यूमीनियम दोनों",
  attempted: false,
  selected: ""
},
{
  "num": 9,
  question_en: "Who discovered the 'Law of Conservation of Mass'?",
  question_hi: "'द्रव्यमान के संरक्षण का नियम' किसने खोजा?",
  options_en: ["Antoine Lavoisier", "John Dalton", "Robert Boyle", "Isaac Newton"],
  options_hi: ["एंटोनी लावॉज़ियर", "जॉन डाल्टन", "रॉबर्ट बॉयल", "आइजैक न्यूटन"],
  answer_en: "Antoine Lavoisier",
  answer_hi: "एंटोनी लावॉज़ियर",
  attempted: false,
  selected: ""
},
{
  "num": 10,
  question_en: "Which gland is known as the 'emergency gland'?",
  question_hi: "किस ग्रंथि को 'आपातकालीन ग्रंथि' कहा जाता है?",
  options_en: ["Adrenal", "Thyroid", "Pituitary", "Pancreas"],
  options_hi: ["अधिवृक्क ग्रंथि", "थायरॉयड ग्रंथि", "पिट्यूटरी ग्रंथि", "अग्न्याशय"],
  answer_en: "Adrenal",
  answer_hi: "अधिवृक्क ग्रंथि",
  attempted: false,
  selected: ""
},
{
  "num": 11,
  question_en: "Which planet has the fastest orbital speed around the Sun?",
  question_hi: "सूर्य के चारों ओर किस ग्रह की कक्षीय गति सबसे तेज़ है?",
  options_en: ["Mercury", "Venus", "Earth", "Mars"],
  options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  "num": 12,
  question_en: "What is the chemical formula of Glucose?",
  question_hi: "ग्लूकोज का रासायनिक सूत्र क्या है?",
  options_en: ["C6H12O6", "C12H22O11", "C2H5OH", "CH3COOH"],
  options_hi: ["C6H12O6", "C12H22O11", "C2H5OH", "CH3COOH"],
  answer_en: "C6H12O6",
  answer_hi: "C6H12O6",
  attempted: false,
  selected: ""
},
{
  "num": 13,
  question_en: "Who invented the 'Periodic Table'?",
  question_hi: "'आवर्त सारणी' का आविष्कार किसने किया?",
  options_en: ["Dmitri Mendeleev", "Henry Moseley", "John Newlands", "Antoine Lavoisier"],
  options_hi: ["दिमित्री मेंडेलीव", "हेनरी मोज़ले", "जॉन न्यूलैंड्स", "एंटोनी लावॉज़ियर"],
  answer_en: "Dmitri Mendeleev",
  answer_hi: "दिमित्री मेंडेलीव",
  attempted: false,
  selected: ""
},
{
  "num": 14,
  question_en: "Which part of the human brain is responsible for intelligence and memory?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग बुद्धि और स्मृति के लिए जिम्मेदार है?",
  options_en: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Thalamus"],
  options_hi: ["सेरेब्रम", "सेरिबैलम", "मेडुला ओब्लोंगेटा", "थैलेमस"],
  answer_en: "Cerebrum",
  answer_hi: "सेरेब्रम",
  attempted: false,
  selected: ""
},
{
  "num": 15,
  question_en: "Which gas is known as 'Marsh Gas'?",
  question_hi: "किस गैस को 'मार्श गैस' कहा जाता है?",
  options_en: ["Methane", "Ethane", "Propane", "Butane"],
  options_hi: ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
  answer_en: "Methane",
  answer_hi: "मीथेन",
  attempted: false,
  selected: ""
},
{
  "num": 16,
  question_en: "Who discovered the 'Cell'?",
  question_hi: "'कोशिका' की खोज किसने की?",
  options_en: ["Robert Hooke", "Anton van Leeuwenhoek", "Louis Pasteur", "Gregor Mendel"],
  options_hi: ["रॉबर्ट हुक", "एंटोन वॉन लीउवेनहॉक", "लुई पाश्चर", "ग्रेगर मेंडल"],
  answer_en: "Robert Hooke",
  answer_hi: "रॉबर्ट हुक",
  attempted: false,
  selected: ""
},
{
  "num": 17,
  question_en: "Which is the hardest substance in the human body?",
  question_hi: "मानव शरीर का सबसे कठोर पदार्थ कौन सा है?",
  options_en: ["Bone", "Tooth Enamel", "Nail", "Cartilage"],
  options_hi: ["हड्डी", "दंत तामचीनी (टूथ एनामेल)", "नाखून", "उपास्थि"],
  answer_en: "Tooth Enamel",
  answer_hi: "दंत तामचीनी (टूथ एनामेल)",
  attempted: false,
  selected: ""
},
{
  "num": 18,
  question_en: "What is the chemical formula of common salt?",
  question_hi: "साधारण नमक (कॉमन सॉल्ट) का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "KCl", "CaCO3", "NaHCO3"],
  options_hi: ["NaCl", "KCl", "CaCO3", "NaHCO3"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  "num": 19,
  question_en: "Who discovered 'Penicillin'?",
  question_hi: "'पेनिसिलिन' की खोज किसने की?",
  options_en: ["Alexander Fleming", "Louis Pasteur", "Joseph Lister", "Edward Jenner"],
  options_hi: ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "जोसेफ लिस्टर", "एडवर्ड जेनर"],
  answer_en: "Alexander Fleming",
  answer_hi: "अलेक्जेंडर फ्लेमिंग",
  attempted: false,
  selected: ""
},
{
  "num": 20,
  question_en: "Which planet has the most eccentric orbit?",
  question_hi: "किस ग्रह की कक्षा सबसे अधिक विलक्षण (ईसेंट्रिक) है?",
  options_en: ["Mercury", "Pluto (dwarf planet)", "Mars", "Neptune"],
  options_hi: ["बुध", "प्लूटो (बौना ग्रह)", "मंगल", "वरुण"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  "num": 21,
  question_en: "What is the chemical symbol for silver?",
  question_hi: "चांदी का रासायनिक प्रतीक क्या है?",
  options_en: ["Si", "Ag", "Au", "Sr"],
  options_hi: ["Si", "Ag", "Au", "Sr"],
  answer_en: "Ag",
  answer_hi: "Ag",
  attempted: false,
  selected: ""
},
{
  "num": 22,
  question_en: "Which gas is used in the preservation of fruits?",
  question_hi: "फलों के संरक्षण में किस गैस का उपयोग किया जाता है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Sulfur Dioxide"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "सल्फर डाइऑक्साइड"],
  answer_en: "Sulfur Dioxide",
  answer_hi: "सल्फर डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  "num": 23,
  question_en: "Who invented the 'Television'?",
  question_hi: "'टेलीविजन' का आविष्कार किसने किया?",
  options_en: ["John Logie Baird", "Philo Farnsworth", "Guglielmo Marconi", "Thomas Edison"],
  options_hi: ["जॉन लोगी बेयर्ड", "फिलो फ़र्न्सवर्थ", "गुलिएल्मो मार्कोनी", "थॉमस एडिसन"],
  answer_en: "John Logie Baird",
  answer_hi: "जॉन लोगी बेयर्ड",
  attempted: false,
  selected: ""
},
{
  "num": 24,
  question_en: "Which vitamin is also known as 'Tocopherol'?",
  question_hi: "किस विटामिन को 'टोकोफेरॉल' भी कहा जाता है?",
  options_en: ["Vitamin E", "Vitamin K", "Vitamin B1", "Vitamin D"],
  options_hi: ["विटामिन ई", "विटामिन के", "विटामिन बी1", "विटामिन डी"],
  answer_en: "Vitamin E",
  answer_hi: "विटामिन ई",
  attempted: false,
  selected: ""
},
{
  "num": 25,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सी धातु कमरे के तापमान पर तरल होती है?",
  options_en: ["Mercury", "Gallium", "Both Mercury and Gallium", "Sodium"],
  options_hi: ["पारा", "गैलियम", "पारा और गैलियम दोनों", "सोडियम"],
  answer_en: "Both Mercury and Gallium",
  answer_hi: "पारा और गैलियम दोनों",
  attempted: false,
  selected: ""
},
{
  "num": 26,
  question_en: "Who discovered 'Oxygen'?",
  question_hi: "'ऑक्सीजन' की खोज किसने की?",
  options_en: ["Joseph Priestley", "Carl Scheele", "Antoine Lavoisier", "All of the above"],
  options_hi: ["जोसेफ प्रीस्टली", "कार्ल शीले", "एंटोनी लावॉज़ियर", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
  "num": 27,
  question_en: "Which is the largest moon in our solar system?",
  question_hi: "हमारे सौर मंडल का सबसे बड़ा चंद्रमा कौन सा है?",
  options_en: ["Ganymede", "Titan", "Callisto", "Io"],
  options_hi: ["गेनीमेड", "टाइटन", "कैलिस्टो", "आयो"],
  answer_en: "Ganymede",
  answer_hi: "गेनीमेड",
  attempted: false,
  selected: ""
},
{
  "num": 28,
  question_en: "What is the chemical formula of Sulfuric Acid?",
  question_hi: "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
  options_en: ["H2SO4", "HCl", "HNO3", "H3PO4"],
  options_hi: ["H2SO4", "HCl", "HNO3", "H3PO4"],
  answer_en: "H2SO4",
  answer_hi: "H2SO4",
  attempted: false,
  selected: ""
},
{
  "num": 29,
  question_en: "Who discovered the 'Vaccine for Smallpox'?",
  question_hi: "'चेचक का टीका' किसने खोजा?",
  options_en: ["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Robert Koch"],
  options_hi: ["एडवर्ड जेनर", "लुई पाश्चर", "अलेक्जेंडर फ्लेमिंग", "रॉबर्ट कोच"],
  answer_en: "Edward Jenner",
  answer_hi: "एडवर्ड जेनर",
  attempted: false,
  selected: ""
},
{
  "num": 30,
  question_en: "Which planet has a day longer than its year?",
  question_hi: "किस ग्रह का दिन उसके वर्ष से लंबा होता है?",
  options_en: ["Venus", "Mercury", "Mars", "Jupiter"],
  options_hi: ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  "num": 31,
  question_en: "What is the chemical symbol for lead?",
  question_hi: "सीसे का रासायनिक प्रतीक क्या है?",
  options_en: ["Ld", "Pb", "Le", "Pl"],
  options_hi: ["Ld", "Pb", "Le", "Pl"],
  answer_en: "Pb",
  answer_hi: "Pb",
  attempted: false,
  selected: ""
},
{
  "num": 32,
  question_en: "Which gas is used in the production of soda water?",
  question_hi: "सोडा वाटर के उत्पादन में किस गैस का उपयोग किया जाता है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  "num": 33,
  question_en: "Who invented the 'Electric Bulb'?",
  question_hi: "'बिजली का बल्ब' किसने आविष्कार किया?",
  options_en: ["Thomas Edison", "Joseph Swan", "Both Thomas Edison and Joseph Swan", "Nikola Tesla"],
  options_hi: ["थॉमस एडिसन", "जोसेफ स्वान", "थॉमस एडिसन और जोसेफ स्वान दोनों", "निकोला टेस्ला"],
  answer_en: "Both Thomas Edison and Joseph Swan",
  answer_hi: "थॉमस एडिसन और जोसेफ स्वान दोनों",
  attempted: false,
  selected: ""
},
{
  "num": 34,
  question_en: "Which vitamin deficiency causes 'Rickets'?",
  question_hi: "किस विटामिन की कमी से 'रिकेट्स' होता है?",
  options_en: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
  options_hi: ["विटामिन डी", "विटामिन सी", "विटामिन ए", "विटामिन के"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  "num": 35,
  question_en: "What is the SI unit of electric potential?",
  question_hi: "विद्युत विभव की SI इकाई क्या है?",
  options_en: ["Volt", "Watt", "Ampere", "Ohm"],
  options_hi: ["वोल्ट", "वाट", "एम्पीयर", "ओम"],
  answer_en: "Volt",
  answer_hi: "वोल्ट",
  attempted: false,
  selected: ""
},
{
  "num": 36,
  question_en: "Which planet has the 'Great Red Spot'?",
  question_hi: "किस ग्रह पर 'ग्रेट रेड स्पॉट' है?",
  options_en: ["Jupiter", "Saturn", "Neptune", "Mars"],
  options_hi: ["बृहस्पति", "शनि", "वरुण", "मंगल"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  "num": 37,
  question_en: "Who discovered the 'Nucleus of the Cell'?",
  question_hi: "'कोशिका के केंद्रक' की खोज किसने की?",
  options_en: ["Robert Brown", "Robert Hooke", "Anton van Leeuwenhoek", "Matthias Schleiden"],
  options_hi: ["रॉबर्ट ब्राउन", "रॉबर्ट हुक", "एंटोन वॉन लीउवेनहॉक", "मैथियस श्लाइडन"],
  answer_en: "Robert Brown",
  answer_hi: "रॉबर्ट ब्राउन",
  attempted: false,
  selected: ""
},
{
  "num": 38,
  question_en: "Which gas is known as 'Producer Gas'?",
  question_hi: "किस गैस को 'प्रोड्यूसर गैस' कहा जाता है?",
  options_en: ["Carbon Monoxide and Nitrogen", "Hydrogen and Carbon Monoxide", "Methane and Hydrogen", "Carbon Dioxide and Nitrogen"],
  options_hi: ["कार्बन मोनोऑक्साइड और नाइट्रोजन", "हाइड्रोजन और कार्बन मोनोऑक्साइड", "मीथेन और हाइड्रोजन", "कार्बन डाइऑक्साइड और नाइट्रोजन"],
  answer_en: "Carbon Monoxide and Nitrogen",
  answer_hi: "कार्बन मोनोऑक्साइड और नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  "num": 39,
  question_en: "Who invented the 'Radio'?",
  question_hi: "'रेडियो' का आविष्कार किसने किया?",
  options_en: ["Guglielmo Marconi", "Nikola Tesla", "Heinrich Hertz", "James Clerk Maxwell"],
  options_hi: ["गुलिएल्मो मार्कोनी", "निकोला टेस्ला", "हेनरिक हर्ट्ज़", "जेम्स क्लर्क मैक्सवेल"],
  answer_en: "Guglielmo Marconi",
  answer_hi: "गुलिएल्मो मार्कोनी",
  attempted: false,
  selected: ""
},
{
  "num": 40,
  question_en: "Which vitamin is also known as 'Ascorbic Acid'?",
  question_hi: "किस विटामिन को 'एस्कॉर्बिक अम्ल' भी कहा जाता है?",
  options_en: ["Vitamin C", "Vitamin B", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन सी", "विटामिन बी", "विटामिन डी", "विटामिन के"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन सी",
  attempted: false,
  selected: ""
},
{
  "num": 41,
  question_en: "What is the chemical formula of Hydrogen Peroxide?",
  question_hi: "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["H2O2", "HO2", "H2O", "H3O"],
  options_hi: ["H2O2", "HO2", "H2O", "H3O"],
  answer_en: "H2O2",
  answer_hi: "H2O2",
  attempted: false,
  selected: ""
},
{
  "num": 42,
  question_en: "Who discovered 'Insulin'?",
  question_hi: "'इंसुलिन' की खोज किसने की?",
  options_en: ["Frederick Banting and Charles Best", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
  options_hi: ["फ्रेडरिक बैंटिंग और चार्ल्स बेस्ट", "अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच"],
  answer_en: "Frederick Banting and Charles Best",
  answer_hi: "फ्रेडरिक बैंटिंग और चार्ल्स बेस्ट",
  attempted: false,
  selected: ""
},
{
  "num": 43,
  question_en: "Which planet is known as the 'Giant Planet'?",
  question_hi: "किस ग्रह को 'विशाल ग्रह' (Giant Planet) कहा जाता है?",
  options_en: ["Jupiter", "Saturn", "Both Jupiter and Saturn", "Uranus"],
  options_hi: ["बृहस्पति", "शनि", "बृहस्पति और शनि दोनों", "अरुण"],
  answer_en: "Both Jupiter and Saturn",
  answer_hi: "बृहस्पति और शनि दोनों",
  attempted: false,
  selected: ""
},
{
  "num": 44,
  question_en: "What is the chemical symbol for tin?",
  question_hi: "टिन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ti", "Sn", "Tn", "Ni"],
  options_hi: ["Ti", "Sn", "Tn", "Ni"],
  answer_en: "Sn",
  answer_hi: "Sn",
  attempted: false,
  selected: ""
},
{
  "num": 45,
  question_en: "Which gas is used in gas balloons for lifting?",
  question_hi: "गैस के गुब्बारों को उठाने के लिए किस गैस का उपयोग किया जाता है?",
  options_en: ["Helium", "Hydrogen", "Both Helium and Hydrogen", "Nitrogen"],
  options_hi: ["हीलियम", "हाइड्रोजन", "हीलियम और हाइड्रोजन दोनों", "नाइट्रोजन"],
  answer_en: "Both Helium and Hydrogen",
  answer_hi: "हीलियम और हाइड्रोजन दोनों",
  attempted: false,
  selected: ""
},
{
  "num": 46,
  question_en: "Who invented the 'Jet Engine'?",
  question_hi: "'जेट इंजन' का आविष्कार किसने किया?",
  options_en: ["Frank Whittle", "Hans von Ohain", "Both Frank Whittle and Hans von Ohain", "Wright Brothers"],
  options_hi: ["फ्रैंक व्हिटल", "हेंस वॉन ओहैन", "फ्रैंक व्हिटल और हेंस वॉन ओहैन दोनों", "राइट बंधु"],
  answer_en: "Both Frank Whittle and Hans von Ohain",
  answer_hi: "फ्रैंक व्हिटल और हेंस वॉन ओहैन दोनों",
  attempted: false,
  selected: ""
},
{
  "num": 47,
  question_en: "Which vitamin is also known as 'Calciferol'?",
  question_hi: "किस विटामिन को 'कैल्सिफेरॉल' भी कहा जाता है?",
  options_en: ["Vitamin D", "Vitamin E", "Vitamin K", "Vitamin A"],
  options_hi: ["विटामिन डी", "विटामिन ई", "विटामिन के", "विटामिन ए"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  "num": 48,
  question_en: "What is the chemical formula of Nitric Acid?",
  question_hi: "नाइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
  options_en: ["HNO3", "H2SO4", "HCl", "H3PO4"],
  options_hi: ["HNO3", "H2SO4", "HCl", "H3PO4"],
  answer_en: "HNO3",
  answer_hi: "HNO3",
  attempted: false,
  selected: ""
},
{
  "num": 49,
  question_en: "Who discovered 'X-Rays'?",
  question_hi: "'एक्स-रे' की खोज किसने की?",
  options_en: ["Wilhelm Conrad Röntgen", "Marie Curie", "J.J. Thomson", "Max Planck"],
  options_hi: ["विल्हेम कॉनराड रॉन्टजन", "मैरी क्यूरी", "जे.जे. थॉमसन", "मैक्स प्लैंक"],
  answer_en: "Wilhelm Conrad Röntgen",
  answer_hi: "विल्हेम कॉनराड रॉन्टजन",
  attempted: false,
  selected: ""
},
{
  "num": 50,
  question_en: "Which planet has the largest volcano in the solar system, Olympus Mons?",
  question_hi: "किस ग्रह पर सौर मंडल का सबसे बड़ा ज्वालामुखी, ओलंपस मॉन्स है?",
  options_en: ["Mars", "Venus", "Earth", "Jupiter"],
  options_hi: ["मंगल", "शुक्र", "पृथ्वी", "बृहस्पति"],
  answer_en: "Mars",
  answer_hi: "मंगल",
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