const questions = [
{
 num:1,
  question_en: "Which gas is filled in electric bulbs to prevent oxidation of the filament?",
  question_hi: "तंतु के ऑक्सीकरण को रोकने के लिए विद्युत बल्बों में कौन सी गैस भरी जाती है?",
  options_en: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
  answer_en: "Argon",
  answer_hi: "आर्गन",
  attempted: false,
  selected: ""
},
{
 num:2,
  question_en: "Which instrument is used to measure atmospheric humidity?",
  question_hi: "वायुमंडलीय आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Barometer", "Hygrometer", "Thermometer", "Anemometer"],
  options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर", "एनीमोमीटर"],
  answer_en: "Hygrometer",
  answer_hi: "हाइग्रोमीटर",
  attempted: false,
  selected: ""
},
{
 num:3,
  question_en: "What is the chemical name of baking powder?",
  question_hi: "बेकिंग पाउडर का रासायनिक नाम क्या है?",
  options_en: ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Potassium bicarbonate"],
  options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "पोटेशियम बाइकार्बोनेट"],
  answer_en: "Sodium bicarbonate",
  answer_hi: "सोडियम बाइकार्बोनेट",
  attempted: false,
  selected: ""
},
{
 num:4,
  question_en: "Which metal is used in the filament of an electric bulb?",
  question_hi: "विद्युत बल्ब के तंतु में किस धातु का उपयोग किया जाता है?",
  options_en: ["Copper", "Aluminum", "Tungsten", "Iron"],
  options_hi: ["तांबा", "एल्युमिनियम", "टंगस्टन", "लोहा"],
  answer_en: "Tungsten",
  answer_hi: "टंगस्टन",
  attempted: false,
  selected: ""
},
{
 num:5,
  question_en: "What is the principle behind the working of a pressure cooker?",
  question_hi: "प्रेशर कुकर के कार्य करने का सिद्धांत क्या है?",
  options_en: ["Pascal's Law", "Boyle's Law", "Increase in boiling point with pressure", "Decrease in boiling point with pressure"],
  options_hi: ["पास्कल का नियम", "बॉयल का नियम", "दबाव के साथ क्वथनांक में वृद्धि", "दबाव के साथ क्वथनांक में कमी"],
  answer_en: "Increase in boiling point with pressure",
  answer_hi: "दबाव के साथ क्वथनांक में वृद्धि",
  attempted: false,
  selected: ""
},
{
 num:6,
  question_en: "Which type of mirror is used in solar cookers?",
  question_hi: "सोलर कुकर में किस प्रकार के दर्पण का उपयोग किया जाता है?",
  options_en: ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
  options_hi: ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
  answer_en: "Concave mirror",
  answer_hi: "अवतल दर्पण",
  attempted: false,
  selected: ""
},
{
 num:7,
  question_en: "What is the chemical formula of laughing gas?",
  question_hi: "हंसाने वाली गैस का रासायनिक सूत्र क्या है?",
  options_en: ["NO₂", "N₂O", "NO", "N₂O₅"],
  options_hi: ["NO₂", "N₂O", "NO", "N₂O₅"],
  answer_en: "N₂O",
  answer_hi: "N₂O",
  attempted: false,
  selected: ""
},
{
 num:8,
  question_en: "Which instrument is used to measure the intensity of earthquake?",
  question_hi: "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Seismograph", "Richter scale", "Both A and B", "Barometer"],
  options_hi: ["सिस्मोग्राफ", "रिक्टर पैमाना", "A और B दोनों", "बैरोमीटर"],
  answer_en: "Both A and B",
  answer_hi: "A और B दोनों",
  attempted: false,
  selected: ""
},
{
 num:9,
  question_en: "What is the chemical name of common salt?",
  question_hi: "साधारण नमक का रासायनिक नाम क्या है?",
  options_en: ["Sodium chloride", "Potassium chloride", "Calcium chloride", "Magnesium chloride"],
  options_hi: ["सोडियम क्लोराइड", "पोटेशियम क्लोराइड", "कैल्शियम क्लोराइड", "मैग्नीशियम क्लोराइड"],
  answer_en: "Sodium chloride",
  answer_hi: "सोडियम क्लोराइड",
  attempted: false,
  selected: ""
},
{
 num:10,
  question_en: "Which gas is used in fluorescent tubes?",
  question_hi: "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
  options_en: ["Neon", "Argon", "Mercury vapor", "All of these"],
  options_hi: ["नीयन", "आर्गन", "पारा वाष्प", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
 num:11,
  question_en: "What is the chemical formula of dry ice?",
  question_hi: "ड्राई आइस का रासायनिक सूत्र क्या है?",
  options_en: ["CO₂", "H₂O", "CH₄", "NH₃"],
  options_hi: ["CO₂", "H₂O", "CH₄", "NH₃"],
  answer_en: "CO₂",
  answer_hi: "CO₂",
  attempted: false,
  selected: ""
},
{
 num:12,
  question_en: "Which instrument is used to measure the purity of gold?",
  question_hi: "सोने की शुद्धता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Barometer", "Hygrometer", "Carat meter", "Gold meter"],
  options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "कैरेट मीटर", "गोल्ड मीटर"],
  answer_en: "Carat meter",
  answer_hi: "कैरेट मीटर",
  attempted: false,
  selected: ""
},
{
 num:13,
  question_en: "What is the chemical name of vinegar?",
  question_hi: "सिरका का रासायनिक नाम क्या है?",
  options_en: ["Acetic acid", "Citric acid", "Tartaric acid", "Formic acid"],
  options_hi: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "फॉर्मिक अम्ल"],
  answer_en: "Acetic acid",
  answer_hi: "एसिटिक अम्ल",
  attempted: false,
  selected: ""
},
{
 num:14,
  question_en: "Which type of lens is used in spectacles for hypermetropia?",
  question_hi: "हाइपरमेट्रोपिया के लिए चश्मे में किस प्रकार के लेंस का उपयोग किया जाता है?",
  options_en: ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
  options_hi: ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
  answer_en: "Convex lens",
  answer_hi: "उत्तल लेंस",
  attempted: false,
  selected: ""
},
{
 num:15,
  question_en: "What is the chemical formula of common bleaching powder?",
  question_hi: "सामान्य ब्लीचिंग पाउडर का रासायनिक सूत्र क्या है?",
  options_en: ["CaOCl₂", "CaCl₂", "Ca(OH)₂", "CaCO₃"],
  options_hi: ["CaOCl₂", "CaCl₂", "Ca(OH)₂", "CaCO₃"],
  answer_en: "CaOCl₂",
  answer_hi: "CaOCl₂",
  attempted: false,
  selected: ""
},
{
 num:16,
  question_en: "Which instrument is used to measure wind speed?",
  question_hi: "हवा की गति मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Anemometer", "Barometer", "Hygrometer", "Thermometer"],
  options_hi: ["एनीमोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
  answer_en: "Anemometer",
  answer_hi: "एनीमोमीटर",
  attempted: false,
  selected: ""
},
{
 num:17,
  question_en: "What is the chemical name of washing soda?",
  question_hi: "धोने का सोडा का रासायनिक नाम क्या है?",
  options_en: ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Calcium carbonate"],
  options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट"],
  answer_en: "Sodium carbonate",
  answer_hi: "सोडियम कार्बोनेट",
  attempted: false,
  selected: ""
},
{
 num:18,
  question_en: "Which gas is used in cigarette lighters?",
  question_hi: "सिगरेट लाइटर में किस गैस का उपयोग किया जाता है?",
  options_en: ["Butane", "Propane", "Methane", "Ethane"],
  options_hi: ["ब्यूटेन", "प्रोपेन", "मीथेन", "ईथेन"],
  answer_en: "Butane",
  answer_hi: "ब्यूटेन",
  attempted: false,
  selected: ""
},
{
 num:19,
  question_en: "What is the chemical formula of plaster of Paris?",
  question_hi: "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?",
  options_en: ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "CaO"],
  options_hi: ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "CaO"],
  answer_en: "CaSO₄.½H₂O",
  answer_hi: "CaSO₄.½H₂O",
  attempted: false,
  selected: ""
},
{
 num:20,
  question_en: "Which instrument is used to measure electric current?",
  question_hi: "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
  options_hi: ["वोल्टमीटर", "अमीटर", "गैल्वेनोमीटर", "ओममीटर"],
  answer_en: "Ammeter",
  answer_hi: "अमीटर",
  attempted: false,
  selected: ""
},
{
 num:21,
  question_en: "What is the chemical name of quicklime?",
  question_hi: "बिना बुझा चूना का रासायनिक नाम क्या है?",
  options_en: ["Calcium oxide", "Calcium hydroxide", "Calcium carbonate", "Calcium chloride"],
  options_hi: ["कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"],
  answer_en: "Calcium oxide",
  answer_hi: "कैल्शियम ऑक्साइड",
  attempted: false,
  selected: ""
},
{
 num:22,
  question_en: "Which gas is used in advertising signs (neon signs)?",
  question_hi: "विज्ञापन साइनों (नीयन साइन) में किस गैस का उपयोग किया जाता है?",
  options_en: ["Neon", "Argon", "Helium", "All of these"],
  options_hi: ["नीयन", "आर्गन", "हीलियम", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
 num:23,
  question_en: "What is the chemical formula of common alum?",
  question_hi: "सामान्य फिटकिरी का रासायनिक सूत्र क्या है?",
  options_en: ["K₂SO₄.Al₂(SO₄)₃.24H₂O", "Na₂SO₄.Al₂(SO₄)₃.24H₂O", "KCl.MgCl₂.6H₂O", "CaSO₄.2H₂O"],
  options_hi: ["K₂SO₄.Al₂(SO₄)₃.24H₂O", "Na₂SO₄.Al₂(SO₄)₃.24H₂O", "KCl.MgCl₂.6H₂O", "CaSO₄.2H₂O"],
  answer_en: "K₂SO₄.Al₂(SO₄)₃.24H₂O",
  answer_hi: "K₂SO₄.Al₂(SO₄)₃.24H₂O",
  attempted: false,
  selected: ""
},
{
 num:24,
  question_en: "Which instrument is used to measure potential difference?",
  question_hi: "विभवांतर मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
  options_hi: ["अमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
  answer_en: "Voltmeter",
  answer_hi: "वोल्टमीटर",
  attempted: false,
  selected: ""
},
{
 num:25,
  question_en: "What is the chemical name of lime water?",
  question_hi: "चूने के पानी का रासायनिक नाम क्या है?",
  options_en: ["Calcium oxide", "Calcium hydroxide", "Calcium carbonate", "Calcium chloride"],
  options_hi: ["कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"],
  answer_en: "Calcium hydroxide",
  answer_hi: "कैल्शियम हाइड्रॉक्साइड",
  attempted: false,
  selected: ""
},
{
 num:26,
  question_en: "Which gas is used in soda water?",
  question_hi: "सोडा वाटर में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
 num:27,
  question_en: "What is the chemical formula of gypsum?",
  question_hi: "जिप्सम का रासायनिक सूत्र क्या है?",
  options_en: ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "CaO"],
  options_hi: ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "CaO"],
  answer_en: "CaSO₄.2H₂O",
  answer_hi: "CaSO₄.2H₂O",
  attempted: false,
  selected: ""
},
{
 num:28,
  question_en: "Which instrument is used to measure the depth of the ocean?",
  question_hi: "समुद्र की गहराई मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Sonar", "Radar", "Altimeter", "Fathometer"],
  options_hi: ["सोनार", "रडार", "ऊंचाईमापी", "फैथोमीटर"],
  answer_en: "Fathometer",
  answer_hi: "फैथोमीटर",
  attempted: false,
  selected: ""
},
{
 num:29,
  question_en: "What is the chemical name of Epsom salt?",
  question_hi: "एप्सम साल्ट का रासायनिक नाम क्या है?",
  options_en: ["Magnesium sulfate", "Sodium sulfate", "Calcium sulfate", "Potassium sulfate"],
  options_hi: ["मैग्नीशियम सल्फेट", "सोडियम सल्फेट", "कैल्शियम सल्फेट", "पोटेशियम सल्फेट"],
  answer_en: "Magnesium sulfate",
  answer_hi: "मैग्नीशियम सल्फेट",
  attempted: false,
  selected: ""
},
{
 num:30,
  question_en: "Which gas is used in fire extinguishers?",
  question_hi: "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
 num:31,
  question_en: "What is the chemical formula of blue vitriol?",
  question_hi: "नीले थोथे का रासायनिक सूत्र क्या है?",
  options_en: ["CuSO₄.5H₂O", "FeSO₄.7H₂O", "MgSO₄.7H₂O", "ZnSO₄.7H₂O"],
  options_hi: ["CuSO₄.5H₂O", "FeSO₄.7H₂O", "MgSO₄.7H₂O", "ZnSO₄.7H₂O"],
  answer_en: "CuSO₄.5H₂O",
  answer_hi: "CuSO₄.5H₂O",
  attempted: false,
  selected: ""
},
{
 num:32,
  question_en: "Which instrument is used to measure the pressure of gases?",
  question_hi: "गैसों का दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Barometer", "Manometer", "Hygrometer", "Thermometer"],
  options_hi: ["बैरोमीटर", "मैनोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
  answer_en: "Manometer",
  answer_hi: "मैनोमीटर",
  attempted: false,
  selected: ""
},
{
 num:33,
  question_en: "What is the chemical name of green vitriol?",
  question_hi: "हरे थोथे का रासायनिक नाम क्या है?",
  options_en: ["Copper sulfate", "Iron sulfate", "Magnesium sulfate", "Zinc sulfate"],
  options_hi: ["कॉपर सल्फेट", "आयरन सल्फेट", "मैग्नीशियम सल्फेट", "जिंक सल्फेट"],
  answer_en: "Iron sulfate",
  answer_hi: "आयरन सल्फेट",
  attempted: false,
  selected: ""
},
{
 num:34,
  question_en: "Which gas is used in anesthesia?",
  question_hi: "एनेस्थीसिया में किस गैस का उपयोग किया जाता है?",
  options_en: ["Nitrous oxide", "Oxygen", "Nitrogen", "Carbon dioxide"],
  options_hi: ["नाइट्रस ऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
  answer_en: "Nitrous oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
 num:35,
  question_en: "What is the chemical formula of white vitriol?",
  question_hi: "सफेद थोथे का रासायनिक सूत्र क्या है?",
  options_en: ["CuSO₄.5H₂O", "FeSO₄.7H₂O", "MgSO₄.7H₂O", "ZnSO₄.7H₂O"],
  options_hi: ["CuSO₄.5H₂O", "FeSO₄.7H₂O", "MgSO₄.7H₂O", "ZnSO₄.7H₂O"],
  answer_en: "ZnSO₄.7H₂O",
  answer_hi: "ZnSO₄.7H₂O",
  attempted: false,
  selected: ""
},
{
 num:36,
  question_en: "Which instrument is used to measure the density of liquids?",
  question_hi: "तरल पदार्थों का घनत्व मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Hydrometer", "Barometer", "Hygrometer", "Thermometer"],
  options_hi: ["हाइड्रोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
  answer_en: "Hydrometer",
  answer_hi: "हाइड्रोमीटर",
  attempted: false,
  selected: ""
},
{
 num:37,
  question_en: "What is the chemical name of borax?",
  question_hi: "बोरेक्स का रासायनिक नाम क्या है?",
  options_en: ["Sodium tetraborate", "Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide"],
  options_hi: ["सोडियम टेट्राबोरेट", "सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
  answer_en: "Sodium tetraborate",
  answer_hi: "सोडियम टेट्राबोरेट",
  attempted: false,
  selected: ""
},
{
 num:38,
  question_en: "Which gas is used in welding?",
  question_hi: "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Acetylene", "Both A and B", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "एसिटिलीन", "A और B दोनों", "नाइट्रोजन"],
  answer_en: "Both A and B",
  answer_hi: "A और B दोनों",
  attempted: false,
  selected: ""
},
{
 num:39,
  question_en: "What is the chemical formula of potassium permanganate?",
  question_hi: "पोटेशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
  options_en: ["KMnO₄", "K₂MnO₄", "KMn₂O₄", "K(MnO₄)₂"],
  options_hi: ["KMnO₄", "K₂MnO₄", "KMn₂O₄", "K(MnO₄)₂"],
  answer_en: "KMnO₄",
  answer_hi: "KMnO₄",
  attempted: false,
  selected: ""
},
{
 num:40,
  question_en: "Which instrument is used to measure the intensity of light?",
  question_hi: "प्रकाश की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Photometer", "Barometer", "Hygrometer", "Thermometer"],
  options_hi: ["फोटोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
  answer_en: "Photometer",
  answer_hi: "फोटोमीटर",
  attempted: false,
  selected: ""
},
{
 num:41,
  question_en: "What is the chemical name of caustic soda?",
  question_hi: "कास्टिक सोडा का रासायनिक नाम क्या है?",
  options_en: ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"],
  options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
  answer_en: "Sodium hydroxide",
  answer_hi: "सोडियम हाइड्रॉक्साइड",
  attempted: false,
  selected: ""
},
{
 num:42,
  question_en: "Which gas is used in balloons for meteorological observations?",
  question_hi: "मौसम संबंधी अवलोकनों के लिए गुब्बारों में किस गैस का उपयोग किया जाता है?",
  options_en: ["Hydrogen", "Helium", "Both A and B", "Oxygen"],
  options_hi: ["हाइड्रोजन", "हीलियम", "A और B दोनों", "ऑक्सीजन"],
  answer_en: "Both A and B",
  answer_hi: "A और B दोनों",
  attempted: false,
  selected: ""
},
{
 num:43,
  question_en: "What is the chemical formula of potassium dichromate?",
  question_hi: "पोटेशियम डाइक्रोमेट का रासायनिक सूत्र क्या है?",
  options_en: ["K₂Cr₂O₇", "K₂CrO₄", "KCrO₄", "KCr₂O₇"],
  options_hi: ["K₂Cr₂O₇", "K₂CrO₄", "KCrO₄", "KCr₂O₇"],
  answer_en: "K₂Cr₂O₇",
  answer_hi: "K₂Cr₂O₇",
  attempted: false,
  selected: ""
},
{
 num:44,
  question_en: "Which instrument is used to measure the rotation speed of a shaft?",
  question_hi: "शाफ्ट के घूर्णन की गति मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Tachometer", "Speedometer", "Odometer", "Accelerometer"],
  options_hi: ["टैकोमीटर", "स्पीडोमीटर", "ओडोमीटर", "एक्सेलेरोमीटर"],
  answer_en: "Tachometer",
  answer_hi: "टैकोमीटर",
  attempted: false,
  selected: ""
},
{
 num:45,
  question_en: "What is the chemical name of Chile saltpetre?",
  question_hi: "चिली साल्टपीटर का रासायनिक नाम क्या है?",
  options_en: ["Sodium nitrate", "Potassium nitrate", "Ammonium nitrate", "Calcium nitrate"],
  options_hi: ["सोडियम नाइट्रेट", "पोटेशियम नाइट्रेट", "अमोनियम नाइट्रेट", "कैल्शियम नाइट्रेट"],
  answer_en: "Sodium nitrate",
  answer_hi: "सोडियम नाइट्रेट",
  attempted: false,
  selected: ""
},
{
 num:46,
  question_en: "Which gas is used in refrigerators?",
  question_hi: "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
  options_en: ["Ammonia", "Freon", "Carbon dioxide", "All of these"],
  options_hi: ["अमोनिया", "फ्रीऑन", "कार्बन डाइऑक्साइड", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
 num:47,
  question_en: "What is the chemical formula of potassium nitrate?",
  question_hi: "पोटेशियम नाइट्रेट का रासायनिक सूत्र क्या है?",
  options_en: ["KNO₂", "KNO₃", "K₂NO₃", "K(NO₃)₂"],
  options_hi: ["KNO₂", "KNO₃", "K₂NO₃", "K(NO₃)₂"],
  answer_en: "KNO₃",
  answer_hi: "KNO₃",
  attempted: false,
  selected: ""
},
{
 num:48,
  question_en: "Which instrument is used to measure the altitude of aircraft?",
  question_hi: "विमान की ऊंचाई मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Altimeter", "Barometer", "Hygrometer", "Thermometer"],
  options_hi: ["ऊंचाईमापी", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
  answer_en: "Altimeter",
  answer_hi: "ऊंचाईमापी",
  attempted: false,
  selected: ""
},
{
 num:49,
  question_en: "What is the chemical name of oil of vitriol?",
  question_hi: "ऑयल ऑफ विट्रियल का रासायनिक नाम क्या है?",
  options_en: ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
  options_hi: ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
  answer_en: "Sulfuric acid",
  answer_hi: "सल्फ्यूरिक अम्ल",
  attempted: false,
  selected: ""
},
{
  num: 50,
   question_en: "Which metal is the best conductor of electricity?",
    question_hi: "कौन सी धातु बिजली की सबसे अच्छी चालक होती है?",
    options_en: ["Iron", "Copper", "Gold", "Silver"],
    options_hi: ["लोहा", "तांबा", "सोना", "चांदी"],
    answer_en: "Silver",
    answer_hi: "चांदी",
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