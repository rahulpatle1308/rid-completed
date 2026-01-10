const questions = [
  {
   num: 1,
  question_en: "Which is the largest gland in the human body?",
  question_hi: "मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?",
  options_en: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
  options_hi: ["अग्न्याशय", "यकृत", "थायराइड", "पीयूष ग्रंथि"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
   num: 2,
  question_en: "What is the powerhouse of the cell called?",
  question_hi: "कोशिका के पावरहाउस को क्या कहा जाता है?",
  options_en: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
  options_hi: ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
  answer_en: "Mitochondria",
  answer_hi: "माइटोकॉन्ड्रिया",
  attempted: false,
  selected: ""
},
{
   num: 3,
  question_en: "Which blood cells carry oxygen in the body?",
  question_hi: "शरीर में ऑक्सीजन कौन सी रक्त कोशिकाएं ले जाती हैं?",
  options_en: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"],
  options_hi: ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
  answer_en: "Red Blood Cells",
  answer_hi: "लाल रक्त कोशिकाएं",
  attempted: false,
  selected: ""
},
{
   num: 4,
  question_en: "What is the study of plants called?",
  question_hi: "पौधों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Zoology", "Botany", "Ecology", "Anatomy"],
  options_hi: ["प्राणी विज्ञान", "वनस्पति विज्ञान", "पारिस्थितिकी", "शरीर रचना विज्ञान"],
  answer_en: "Botany",
  answer_hi: "वनस्पति विज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 5,
  question_en: "Which vitamin is essential for blood clotting?",
  question_hi: "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
   num: 6,
  question_en: "What is the normal human body temperature?",
  question_hi: "सामान्य मानव शरीर का तापमान कितना होता है?",
  options_en: ["36°C", "37°C", "38°C", "39°C"],
  options_hi: ["36°C", "37°C", "38°C", "39°C"],
  answer_en: "37°C",
  answer_hi: "37°C",
  attempted: false,
  selected: ""
},
{
   num: 7,
  question_en: "Which part of the plant conducts photosynthesis?",
  question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
  options_en: ["Root", "Stem", "Leaf", "Flower"],
  options_hi: ["जड़", "तना", "पत्ती", "फूल"],
  answer_en: "Leaf",
  answer_hi: "पत्ती",
  attempted: false,
  selected: ""
},
{
   num: 8,
  question_en: "What is the hardest substance in the human body?",
  question_hi: "मानव शरीर में सबसे कठोर पदार्थ क्या है?",
  options_en: ["Bone", "Tooth enamel", "Nail", "Cartilage"],
  options_hi: ["हड्डी", "दांत का इनेमल", "नाखून", "उपास्थि"],
  answer_en: "Tooth enamel",
  answer_hi: "दांत का इनेमल",
  attempted: false,
  selected: ""
},
{
   num: 9,
  question_en: "Which gas do plants release during photosynthesis?",
  question_hi: "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस छोड़ते हैं?",
  options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
   num: 10,
  question_en: "What is the scientific study of birds called?",
  question_hi: "पक्षियों के वैज्ञानिक अध्ययन को क्या कहा जाता है?",
  options_en: ["Entomology", "Ornithology", "Herpetology", "Ichthyology"],
  options_hi: ["कीटविज्ञान", "पक्षीविज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
  answer_en: "Ornithology",
  answer_hi: "पक्षीविज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 11,
  question_en: "Which organ purifies blood in the human body?",
  question_hi: "मानव शरीर में कौन सा अंग रक्त शुद्ध करता है?",
  options_en: ["Heart", "Liver", "Kidneys", "Lungs"],
  options_hi: ["हृदय", "यकृत", "गुर्दे", "फेफड़े"],
  answer_en: "Kidneys",
  answer_hi: "गुर्दे",
  attempted: false,
  selected: ""
},
{
   num: 12,
  question_en: "What is the process of cell division called?",
  question_hi: "कोशिका विभाजन की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Meiosis", "Mitosis", "Fission", "Budding"],
  options_hi: ["अर्धसूत्री विभाजन", "सूत्री विभाजन", "द्विखंडन", "कलिकायन"],
  answer_en: "Mitosis",
  answer_hi: "सूत्री विभाजन",
  attempted: false,
  selected: ""
},
{
   num: 13,
  question_en: "Which vitamin deficiency causes Night Blindness?",
  question_hi: "किस विटामिन की कमी से रतौंधी होती है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
   num: 14,
  question_en: "What is the largest bone in the human body?",
  question_hi: "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
  options_en: ["Femur", "Tibia", "Humerus", "Pelvis"],
  options_hi: ["फीमर", "टिबिया", "ह्यूमरस", "श्रोणि"],
  answer_en: "Femur",
  answer_hi: "फीमर",
  attempted: false,
  selected: ""
},
{
   num: 15,
  question_en: "Which pigment gives plants their green color?",
  question_hi: "कौन सा वर्णक पौधों को हरा रंग देता है?",
  options_en: ["Chlorophyll", "Xanthophyll", "Carotene", "Anthocyanin"],
  options_hi: ["क्लोरोफिल", "जैंथोफिल", "कैरोटीन", "एंथोसायनिन"],
  answer_en: "Chlorophyll",
  answer_hi: "क्लोरोफिल",
  attempted: false,
  selected: ""
},
{
   num: 16,
  question_en: "What is the normal human heart rate per minute?",
  question_hi: "सामान्य मानव हृदय गति प्रति मिनट कितनी होती है?",
  options_en: ["60-70", "70-80", "80-90", "90-100"],
  options_hi: ["60-70", "70-80", "80-90", "90-100"],
  answer_en: "70-80",
  answer_hi: "70-80",
  attempted: false,
  selected: ""
},
{
   num: 17,
  question_en: "Which part of the brain controls breathing?",
  question_hi: "मस्तिष्क का कौन सा भाग श्वसन को नियंत्रित करता है?",
  options_en: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
  options_hi: ["सेरेब्रम", "सेरेबेलम", "मेडुला ओब्लोंगाटा", "हाइपोथैलेमस"],
  answer_en: "Medulla oblongata",
  answer_hi: "मेडुला ओब्लोंगाटा",
  attempted: false,
  selected: ""
},
{
   num: 18,
  question_en: "What is the study of fungi called?",
  question_hi: "कवक के अध्ययन को क्या कहा जाता है?",
  options_en: ["Mycology", "Phycology", "Bryology", "Pteridology"],
  options_hi: ["कवक विज्ञान", "शैवाल विज्ञान", "ब्रायोलॉजी", "फर्न विज्ञान"],
  answer_en: "Mycology",
  answer_hi: "कवक विज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 19,
  question_en: "Which vitamin is produced by the human body when exposed to sunlight?",
  question_hi: "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
   num: 20,
  question_en: "What is the smallest bone in the human body?",
  question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
  options_en: ["Stapes", "Malleus", "Incus", "Patella"],
  options_hi: ["स्टेपीज", "मैलियस", "इंकस", "पटेला"],
  answer_en: "Stapes",
  answer_hi: "स्टेपीज",
  attempted: false,
  selected: ""
},
{
   num: 21,
  question_en: "Which gas do humans breathe out?",
  question_hi: "मनुष्य कौन सी गैस बाहर छोड़ते हैं?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
   num: 22,
  question_en: "What is the study of heredity called?",
  question_hi: "आनुवंशिकता के अध्ययन को क्या कहा जाता है?",
  options_en: ["Ecology", "Genetics", "Embryology", "Evolution"],
  options_hi: ["पारिस्थितिकी", "आनुवंशिकी", "भ्रूणविज्ञान", "विकास"],
  answer_en: "Genetics",
  answer_hi: "आनुवंशिकी",
  attempted: false,
  selected: ""
},
{
   num: 23,
  question_en: "Which vitamin deficiency causes Scurvy?",
  question_hi: "किस विटामिन की कमी से स्कर्वी रोग होता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
   num: 24,
  question_en: "What is the total number of bones in an adult human body?",
  question_hi: "वयस्क मानव शरीर में हड्डियों की कुल संख्या कितनी होती है?",
  options_en: ["206", "210", "214", "220"],
  options_hi: ["206", "210", "214", "220"],
  answer_en: "206",
  answer_hi: "206",
  attempted: false,
  selected: ""
},
{
   num: 25,
  question_en: "Which part of the plant absorbs water and minerals?",
  question_hi: "पौधे का कौन सा भाग पानी और खनिज अवशोषित करता है?",
  options_en: ["Stem", "Leaf", "Flower", "Root"],
  options_hi: ["तना", "पत्ती", "फूल", "जड़"],
  answer_en: "Root",
  answer_hi: "जड़",
  attempted: false,
  selected: ""
},
{
   num: 26,
  question_en: "What is the longest nerve in the human body?",
  question_hi: "मानव शरीर की सबसे लंबी नस कौन सी है?",
  options_en: ["Sciatic nerve", "Optic nerve", "Vagus nerve", "Facial nerve"],
  options_hi: ["साइटिक नर्व", "ऑप्टिक नर्व", "वेगस नर्व", "फेशियल नर्व"],
  answer_en: "Sciatic nerve",
  answer_hi: "साइटिक नर्व",
  attempted: false,
  selected: ""
},
{
   num: 27,
  question_en: "Which gas do plants use during photosynthesis?",
  question_hi: "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस उपयोग करते हैं?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
   num: 28,
  question_en: "What is the study of insects called?",
  question_hi: "कीटों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
  options_hi: ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
  answer_en: "Entomology",
  answer_hi: "कीटविज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 29,
  question_en: "Which vitamin deficiency causes Beriberi?",
  question_hi: "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
  options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B12", "Vitamin C"],
  options_hi: ["विटामिन B1", "विटामिन B2", "विटामिन B12", "विटामिन C"],
  answer_en: "Vitamin B1",
  answer_hi: "विटामिन B1",
  attempted: false,
  selected: ""
},
{
   num: 30,
  question_en: "What is the normal human blood pressure?",
  question_hi: "सामान्य मानव रक्तचाप कितना होता है?",
  options_en: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
  options_hi: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
  answer_en: "120/80 mmHg",
  answer_hi: "120/80 mmHg",
  attempted: false,
  selected: ""
},
{
   num: 31,
  question_en: "Which part of the brain controls memory and intelligence?",
  question_hi: "मस्तिष्क का कौन सा भाग स्मृति और बुद्धि को नियंत्रित करता है?",
  options_en: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
  options_hi: ["सेरेबेलम", "सेरेब्रम", "मेडुला", "हाइपोथैलेमस"],
  answer_en: "Cerebrum",
  answer_hi: "सेरेब्रम",
  attempted: false,
  selected: ""
},
{
   num: 32,
  question_en: "What is the study of cells called?",
  question_hi: "कोशिकाओं के अध्ययन को क्या कहा जाता है?",
  options_en: ["Cytology", "Histology", "Anatomy", "Physiology"],
  options_hi: ["कोशिका विज्ञान", "ऊतक विज्ञान", "शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान"],
  answer_en: "Cytology",
  answer_hi: "कोशिका विज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 33,
  question_en: "Which vitamin deficiency causes Rickets?",
  question_hi: "किस विटामिन की कमी से रिकेट्स रोग होता है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
   num: 34,
  question_en: "What is the smallest unit of life?",
  question_hi: "जीवन की सबसे छोटी इकाई क्या है?",
  options_en: ["Cell", "Tissue", "Organ", "Molecule"],
  options_hi: ["कोशिका", "ऊतक", "अंग", "अणु"],
  answer_en: "Cell",
  answer_hi: "कोशिका",
  attempted: false,
  selected: ""
},
{
   num: 35,
  question_en: "Which part of the eye controls the amount of light entering?",
  question_hi: "आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
  options_en: ["Cornea", "Iris", "Retina", "Lens"],
  options_hi: ["कॉर्निया", "आइरिस", "रेटिना", "लेंस"],
  answer_en: "Iris",
  answer_hi: "आइरिस",
  attempted: false,
  selected: ""
},
{
   num: 36,
  question_en: "What is the study of tissues called?",
  question_hi: "ऊतकों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Cytology", "Histology", "Embryology", "Pathology"],
  options_hi: ["कोशिका विज्ञान", "ऊतक विज्ञान", "भ्रूणविज्ञान", "रोगविज्ञान"],
  answer_en: "Histology",
  answer_hi: "ऊतक विज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 37,
  question_en: "Which vitamin deficiency causes Pellagra?",
  question_hi: "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
  options_en: ["Vitamin B3", "Vitamin B6", "Vitamin B12", "Vitamin C"],
  options_hi: ["विटामिन B3", "विटामिन B6", "विटामिन B12", "विटामिन C"],
  answer_en: "Vitamin B3",
  answer_hi: "विटामिन B3",
  attempted: false,
  selected: ""
},
{
   num: 38,
  question_en: "What is the normal human blood pH level?",
  question_hi: "सामान्य मानव रक्त pH स्तर क्या है?",
  options_en: ["6.8", "7.0", "7.4", "8.0"],
  options_hi: ["6.8", "7.0", "7.4", "8.0"],
  answer_en: "7.4",
  answer_hi: "7.4",
  attempted: false,
  selected: ""
},
{
   num: 39,
  question_en: "Which part of the plant produces seeds?",
  question_hi: "पौधे का कौन सा भाग बीज उत्पन्न करता है?",
  options_en: ["Root", "Stem", "Leaf", "Flower"],
  options_hi: ["जड़", "तना", "पत्ती", "फूल"],
  answer_en: "Flower",
  answer_hi: "फूल",
  attempted: false,
  selected: ""
},
{
   num: 40,
  question_en: "What is the study of the human body structure called?",
  question_hi: "मानव शरीर संरचना के अध्ययन को क्या कहा जाता है?",
  options_en: ["Physiology", "Anatomy", "Pathology", "Histology"],
  options_hi: ["शरीर क्रिया विज्ञान", "शरीर रचना विज्ञान", "रोगविज्ञान", "ऊतक विज्ञान"],
  answer_en: "Anatomy",
  answer_hi: "शरीर रचना विज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 41,
  question_en: "Which vitamin deficiency causes Anemia?",
  question_hi: "किस विटामिन की कमी से एनीमिया होता है?",
  options_en: ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन B12", "विटामिन C", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin B12",
  answer_hi: "विटामिन B12",
  attempted: false,
  selected: ""
},
{
   num: 42,
  question_en: "What is the total number of chromosomes in a normal human cell?",
  question_hi: "एक सामान्य मानव कोशिका में गुणसूत्रों की कुल संख्या कितनी होती है?",
  options_en: ["23", "46", "48", "52"],
  options_hi: ["23", "46", "48", "52"],
  answer_en: "46",
  answer_hi: "46",
  attempted: false,
  selected: ""
},
{
   num: 43,
  question_en: "Which part of the ear helps in maintaining balance?",
  question_hi: "कान का कौन सा भाग संतुलन बनाए रखने में मदद करता है?",
  options_en: ["Eardrum", "Cochlea", "Eustachian tube", "Semicircular canals"],
  options_hi: ["कान का पर्दा", "कोक्लीया", "यूस्टेशियन ट्यूब", "अर्धवृत्ताकार नलिकाएं"],
  answer_en: "Semicircular canals",
  answer_hi: "अर्धवृत्ताकार नलिकाएं",
  attempted: false,
  selected: ""
},
{
   num: 44,
  question_en: "What is the study of diseases called?",
  question_hi: "रोगों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Physiology", "Anatomy", "Pathology", "Histology"],
  options_hi: ["शरीर क्रिया विज्ञान", "शरीर रचना विज्ञान", "रोगविज्ञान", "ऊतक विज्ञान"],
  answer_en: "Pathology",
  answer_hi: "रोगविज्ञान",
  attempted: false,
  selected: ""
},
{
    num: 45,
  question_en: "Which vitamin is also known as Ascorbic Acid?",
  question_hi: "किस विटामिन को एस्कॉर्बिक एसिड के नाम से भी जाना जाता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
   num: 46,
  question_en: "What is the largest organ in the human body?",
  question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
  options_en: ["Liver", "Skin", "Lungs", "Heart"],
  options_hi: ["यकृत", "त्वचा", "फेफड़े", "हृदय"],
  answer_en: "Skin",
  answer_hi: "त्वचा",
  attempted: false,
  selected: ""
},
{
   num: 47,
  question_en: "Which part of the plant is modified into a potato?",
  question_hi: "पौधे का कौन सा भाग आलू में रूपांतरित होता है?",
  options_en: ["Root", "Stem", "Leaf", "Flower"],
  options_hi: ["जड़", "तना", "पत्ती", "फूल"],
  answer_en: "Stem",
  answer_hi: "तना",
  attempted: false,
  selected: ""
},
{
   num: 48,
  question_en: "What is the study of the functioning of living organisms called?",
  question_hi: "सजीवों के कार्यों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Anatomy", "Physiology", "Pathology", "Histology"],
  options_hi: ["शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान", "रोगविज्ञान", "ऊतक विज्ञान"],
  answer_en: "Physiology",
  answer_hi: "शरीर क्रिया विज्ञान",
  attempted: false,
  selected: ""
},
{
   num: 49,
  question_en: "Which vitamin is also known as Thiamine?",
  question_hi: "किस विटामिन को थायमिन के नाम से भी जाना जाता है?",
  options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
  options_hi: ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
  answer_en: "Vitamin B1",
  answer_hi: "विटामिन B1",
  attempted: false,
  selected: ""
},
{
   num: 50,
  question_en: "What is the process by which plants make their own food?",
  question_hi: "वह प्रक्रिया क्या है जिसके द्वारा पौधे अपना भोजन स्वयं बनाते हैं?",
  options_en: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
  options_hi: ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
  answer_en: "Photosynthesis",
  answer_hi: "प्रकाश संश्लेषण",
  attempted: false,
  selected: ""
}
];


/// --------------------------- GLOBAL VARS -----------------------------
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