const questions = [
  
    {
        "num": 1,
        "question_en": "Which of the following is a covalent crystal?",
        "question_hi": "निम्नलिखित में से कौन एक सहसंयोजक क्रिस्टल है?",
        "options_en": ["Diamond", "Sodium chloride", "Potassium nitrate", "Ice"],
        "options_hi": ["हीरा", "सोडियम क्लोराइड", "पोटैशियम नाइट्रेट", "बर्फ"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The mole fraction of solute in a 1 molal aqueous solution is:",
        "question_hi": "1 मोलल जलीय विलयन में विलेय का मोल अंश है:",
        "options_en": ["0.0177", "0.0344", "0.01", "0.5"],
        "options_hi": ["0.0177", "0.0344", "0.01", "0.5"],
        "answer_en": "0.0177",
        "answer_hi": "0.0177",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In a face-centred cubic lattice, a unit cell is shared equally by how many unit cells?",
        "question_hi": "फलक-केंद्रित घनीय जालक में, एक एकक कोशिका कितनी एकक कोशिकाओं द्वारा समान रूप से साझा की जाती है?",
        "options_en": ["2", "4", "6", "8"],
        "options_hi": ["2", "4", "6", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of the following is not a colligative property?",
        "question_hi": "निम्नलिखित में से कौन एक असंख्यात्मक गुण नहीं है?",
        "options_en": ["Osmotic pressure", "Lowering of vapour pressure", "Elevation in boiling point", "Viscosity"],
        "options_hi": ["परासरण दाब", "वाष्प दाब में अवनमन", "क्वथनांक में उन्नयन", "श्यानता"],
        "answer_en": "Viscosity",
        "answer_hi": "श्यानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The order of reaction for which the half-life is independent of initial concentration is:",
        "question_hi": "अभिक्रिया की वह कोटि कौन सी है जिसके लिए अर्ध-आयु प्रारंभिक सांद्रता से स्वतंत्र होती है?",
        "options_en": ["Zero order", "First order", "Second order", "Third order"],
        "options_hi": ["शून्य कोटि", "प्रथम कोटि", "द्वितीय कोटि", "तृतीय कोटि"],
        "answer_en": "First order",
        "answer_hi": "प्रथम कोटि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is not a property of an ideal solution?",
        "question_hi": "निम्नलिखित में से कौन सा एक आदर्श विलयन का गुण नहीं है?",
        "options_en": ["It obeys Raoult's law", "ΔH_mix = 0", "ΔV_mix = 0", "It forms an azeotrope"],
        "options_hi": ["यह राउल्ट के नियम का पालन करता है", "ΔH_mix = 0", "ΔV_mix = 0", "यह एक एज़ियोट्रोप बनाता है"],
        "answer_en": "It forms an azeotrope",
        "answer_hi": "यह एक एज़ियोट्रोप बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "In the electrochemical series, the metals at the top are:",
        "question_hi": "विद्युत रासायनिक श्रेणी में, शीर्ष पर धातुएँ होती हैं:",
        "options_en": ["Strong reducing agents", "Strong oxidising agents", "Weak reducing agents", "Noble metals"],
        "options_hi": ["प्रबल अपचायक", "प्रबल ऑक्सीकारक", "दुर्बल अपचायक", "उत्कृष्ट धातुएँ"],
        "answer_en": "Strong reducing agents",
        "answer_hi": "प्रबल अपचायक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The standard electrode potential of the hydrogen electrode is:",
        "question_hi": "हाइड्रोजन इलेक्ट्रोड का मानक इलेक्ट्रोड विभव है:",
        "options_en": ["0.00 V", "1.00 V", "2.00 V", "-1.00 V"],
        "options_hi": ["0.00 V", "1.00 V", "2.00 V", "-1.00 V"],
        "answer_en": "0.00 V",
        "answer_hi": "0.00 V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of the following statements is correct for a galvanic cell?",
        "question_hi": "गैल्वेनिक सेल के लिए निम्नलिखित में से कौन सा कथन सही है?",
        "options_en": ["Reduction occurs at anode", "Oxidation occurs at cathode", "Electrons flow from anode to cathode", "Current flows from anode to cathode"],
        "options_hi": ["ऐनोड पर अपचयन होता है", "कैथोड पर ऑक्सीकरण होता है", "इलेक्ट्रॉन ऐनोड से कैथोड की ओर बहते हैं", "धारा ऐनोड से कैथोड की ओर बहती है"],
        "answer_en": "Electrons flow from anode to cathode",
        "answer_hi": "इलेक्ट्रॉन ऐनोड से कैथोड की ओर बहते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The rate constant of a reaction depends on:",
        "question_hi": "किसी अभिक्रिया का दर स्थिरांक निर्भर करता है:",
        "options_en": ["Initial concentration of reactants", "Temperature", "Time", "Extent of reaction"],
        "options_hi": ["अभिकारकों की प्रारंभिक सांद्रता", "तापमान", "समय", "अभिक्रिया की सीमा"],
        "answer_en": "Temperature",
        "answer_hi": "तापमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which of the following is a lyophobic colloid?",
        "question_hi": "निम्नलिखित में से कौन एक लियोफोबिक कोलाइड है?",
        "options_en": ["Gelatin", "Starch", "Sulphur sol", "Gum"],
        "options_hi": ["जिलेटिन", "स्टार्च", "सल्फर सॉल", "गम"],
        "answer_en": "Sulphur sol",
        "answer_hi": "सल्फर सॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Tyndall effect is observed in:",
        "question_hi": "टिंडल प्रभाव किसमें देखा जाता है?",
        "options_en": ["True solution", "Colloidal solution", "Suspension", "Both colloidal solution and suspension"],
        "options_hi": ["वास्तविक विलयन", "कोलाइडी विलयन", "निलंबन", "कोलाइडी विलयन और निलंबन दोनों"],
        "answer_en": "Both colloidal solution and suspension",
        "answer_hi": "कोलाइडी विलयन और निलंबन दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is an example of adsorption?",
        "question_hi": "निम्नलिखित में से कौन अधिशोषण का एक उदाहरण है?",
        "options_en": ["Water on silica gel", "Ammonia on charcoal", "Oxygen on metal surface", "All of the above"],
        "options_hi": ["सिलिका जेल पर जल", "चारकोल पर अमोनिया", "धातु की सतह पर ऑक्सीजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The d-block elements are called:",
        "question_hi": "d-ब्लॉक के तत्व कहलाते हैं:",
        "options_en": ["Alkali metals", "Transition metals", "Halogens", "Noble gases"],
        "options_hi": ["क्षार धातुएँ", "संक्रमण धातुएँ", "हैलोजन", "उत्कृष्ट गैसें"],
        "answer_en": "Transition metals",
        "answer_hi": "संक्रमण धातुएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following lanthanoid ions is colourless?",
        "question_hi": "निम्नलिखित में से कौन सा लैन्थेनॉइड आयन रंगहीन है?",
        "options_en": ["La³⁺", "Ce³⁺", "Pr³⁺", "Nd³⁺"],
        "options_hi": ["La³⁺", "Ce³⁺", "Pr³⁺", "Nd³⁺"],
        "answer_en": "La³⁺",
        "answer_hi": "La³⁺",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The geometry of [Ni(CN)₄]²⁻ is:",
        "question_hi": "[Ni(CN)₄]²⁻ की ज्यामिति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Linear"],
        "options_hi": ["चतुष्फलकीय", "समतल वर्गाकार", "अष्टफलकीय", "रैखिक"],
        "answer_en": "Square planar",
        "answer_hi": "समतल वर्गाकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
        "question_hi": "[Co(NH₃)₅Cl]Cl₂ का IUPAC नाम है:",
        "options_en": ["Pentaamminechloridocobalt (III) chloride", "Chloropentaamminecobalt (III) chloride", "Pentaamminecobalt (III) chloride", "Pentaamminechloridocobalt (II) chloride"],
        "options_hi": ["पेंटाएमीनक्लोराइडोकोबाल्ट (III) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट (III) क्लोराइड", "पेंटाएमीनकोबाल्ट (III) क्लोराइड", "पेंटाएमीनक्लोराइडोकोबाल्ट (II) क्लोराइड"],
        "answer_en": "Pentaamminechloridocobalt (III) chloride",
        "answer_hi": "पेंटाएमीनक्लोराइडोकोबाल्ट (III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which of the following is a monodentate ligand?",
        "question_hi": "निम्नलिखित में से कौन एक एकदंतुक लिगन्ड है?",
        "options_en": ["EDTA", "Oxalate", "Ammonia", "Ethylenediamine"],
        "options_hi": ["ईडीटीए", "ऑक्सलेट", "अमोनिया", "एथिलीनडाइमीन"],
        "answer_en": "Ammonia",
        "answer_hi": "अमोनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Chloropicrin is:",
        "question_hi": "क्लोरोपिक्रिन है:",
        "options_en": ["CCl₄", "CHCl₃", "CCl₃NO₂", "CH₃Cl"],
        "options_hi": ["CCl₄", "CHCl₃", "CCl₃NO₂", "CH₃Cl"],
        "answer_en": "CCl₃NO₂",
        "answer_hi": "CCl₃NO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which of the following is used as an antiknocking agent?",
        "question_hi": "निम्नलिखित में से किसका उपयोग प्रति-नॉकिंग एजेंट के रूप में किया जाता है?",
        "options_en": ["TEL", "Freon", "DDT", "CCl₄"],
        "options_hi": ["टीईएल", "फ्रियोन", "डीडीटी", "CCl₄"],
        "answer_en": "TEL",
        "answer_hi": "टीईएल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The product formed when chloroform is heated with silver powder is:",
        "question_hi": "क्लोरोफॉर्म को चूर्णित चांदी के साथ गर्म करने पर बनने वाला उत्पाद है:",
        "options_en": ["Acetylene", "Ethyne", "Ethene", "Methane"],
        "options_hi": ["ऐसीटिलीन", "ईथाइन", "ईथीन", "मीथेन"],
        "answer_en": "Acetylene",
        "answer_hi": "ऐसीटिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which of the following is a secondary alcohol?",
        "question_hi": "निम्नलिखित में से कौन एक द्वितीयक ऐल्कोहॉल है?",
        "options_en": ["Ethanol", "Isopropyl alcohol", "tert-Butyl alcohol", "Methanol"],
        "options_hi": ["एथेनॉल", "आइसोप्रोपिल ऐल्कोहॉल", "टर्शियरी-ब्यूटिल ऐल्कोहॉल", "मेथनॉल"],
        "answer_en": "Isopropyl alcohol",
        "answer_hi": "आइसोप्रोपिल ऐल्कोहॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The reaction of phenol with bromine water gives:",
        "question_hi": "फीनॉल की ब्रोमीन जल के साथ अभिक्रिया देती है:",
        "options_en": ["o-Bromophenol", "p-Bromophenol", "2,4,6-Tribromophenol", "m-Bromophenol"],
        "options_hi": ["ऑर्थो-ब्रोमोफीनॉल", "पैरा-ब्रोमोफीनॉल", "2,4,6-ट्राइब्रोमोफीनॉल", "मेटा-ब्रोमोफीनॉल"],
        "answer_en": "2,4,6-Tribromophenol",
        "answer_hi": "2,4,6-ट्राइब्रोमोफीनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Williamson's synthesis is used to prepare:",
        "question_hi": "विलियमसन संश्लेषण का उपयोग तैयार करने के लिए किया जाता है:",
        "options_en": ["Alcohols", "Aldehydes", "Ethers", "Ketones"],
        "options_hi": ["ऐल्कोहॉल", "ऐल्डिहाइड", "ईथर", "कीटोन"],
        "answer_en": "Ethers",
        "answer_hi": "ईथर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following gives iodoform test?",
        "question_hi": "निम्नलिखित में से कौन आयोडोफॉर्म परीक्षण देता है?",
        "options_en": ["Methanol", "Ethanol", "Benzyl alcohol", "Phenol"],
        "options_hi": ["मेथनॉल", "एथेनॉल", "बेंजिल ऐल्कोहॉल", "फीनॉल"],
        "answer_en": "Ethanol",
        "answer_hi": "एथेनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Tollens' reagent is used to detect:",
        "question_hi": "टोलेन अभिकर्मक का उपयोग पता लगाने के लिए किया जाता है:",
        "options_en": ["Aldehydes", "Ketones", "Alcohols", "Carboxylic acids"],
        "options_hi": ["ऐल्डिहाइड", "कीटोन", "ऐल्कोहॉल", "कार्बोक्सिलिक अम्ल"],
        "answer_en": "Aldehydes",
        "answer_hi": "ऐल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The product of aldol condensation between two molecules of acetaldehyde is:",
        "question_hi": "ऐसीटैल्डिहाइड के दो अणुओं के बीच ऐल्डोल संघनन का उत्पाद है:",
        "options_en": ["Acetone", "Acrolein", "3-Hydroxybutanal", "But-2-enal"],
        "options_hi": ["ऐसीटोन", "ऐक्रोलिन", "3-हाइड्रॉक्सीब्यूटनल", "ब्यूट-2-ईनल"],
        "answer_en": "3-Hydroxybutanal",
        "answer_hi": "3-हाइड्रॉक्सीब्यूटनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Cannizzaro's reaction is given by:",
        "question_hi": "कैनिज़ारो अभिक्रिया किसके द्वारा दी जाती है?",
        "options_en": ["Formaldehyde", "Acetaldehyde", "Acetone", "Benzophenone"],
        "options_hi": ["फॉर्मेल्डिहाइड", "ऐसीटैल्डिहाइड", "ऐसीटोन", "बेंज़ोफीनोन"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The compound that does not undergo haloform reaction is:",
        "question_hi": "वह यौगिक जो हैलोफॉर्म अभिक्रिया नहीं देता है:",
        "options_en": ["Ethanol", "Propanone", "Propanal", "Acetophenone"],
        "options_hi": ["एथेनॉल", "प्रोपेनोन", "प्रोपेनल", "ऐसीटोफीनोन"],
        "answer_en": "Propanal",
        "answer_hi": "प्रोपेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which of the following is the strongest acid?",
        "question_hi": "निम्नलिखित में से कौन सबसे प्रबल अम्ल है?",
        "options_en": ["Formic acid", "Acetic acid", "Benzoic acid", "Oxalic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "ऐसीटिक अम्ल", "बेंजोइक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Oxalic acid",
        "answer_hi": "ऑक्सैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The product formed when acetamide is heated with bromine and KOH is:",
        "question_hi": "ऐसीटामाइड को ब्रोमीन और KOH के साथ गर्म करने पर बनने वाला उत्पाद है:",
        "options_en": ["Methylamine", "Ethylamine", "Acetic acid", "Methyl isocyanide"],
        "options_hi": ["मेथिलऐमीन", "एथिलऐमीन", "ऐसीटिक अम्ल", "मेथिल आइसोसायनाइड"],
        "answer_en": "Methylamine",
        "answer_hi": "मेथिलऐमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Aniline reacts with bromine water to give:",
        "question_hi": "ऐनिलीन ब्रोमीन जल के साथ अभिक्रिया करके देता है:",
        "options_en": ["o-Bromoaniline", "p-Bromoaniline", "2,4,6-Tribromoaniline", "m-Bromoaniline"],
        "options_hi": ["ऑर्थो-ब्रोमोऐनिलीन", "पैरा-ब्रोमोऐनिलीन", "2,4,6-ट्राइब्रोमोऐनिलीन", "मेटा-ब्रोमोऐनिलीन"],
        "answer_en": "2,4,6-Tribromoaniline",
        "answer_hi": "2,4,6-ट्राइब्रोमोऐनिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is a natural polymer?",
        "question_hi": "निम्नलिखित में से कौन एक प्राकृतिक बहुलक है?",
        "options_en": ["Polythene", "Nylon-6", "Protein", "PVC"],
        "options_hi": ["पॉलिथीन", "नायलॉन-6", "प्रोटीन", "पीवीसी"],
        "answer_en": "Protein",
        "answer_hi": "प्रोटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The monomer of Teflon is:",
        "question_hi": "टेफ्लॉन का एकलक है:",
        "options_en": ["Ethylene", "Tetrafluoroethylene", "Vinyl chloride", "Styrene"],
        "options_hi": ["एथिलीन", "टेट्राफ्लुओरोएथिलीन", "विनाइल क्लोराइड", "स्टाइरीन"],
        "answer_en": "Tetrafluoroethylene",
        "answer_hi": "टेट्राफ्लुओरोएथिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which vitamin is also known as ascorbic acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल के रूप में भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The sugar present in milk is:",
        "question_hi": "दूध में उपस्थित शर्करा है:",
        "options_en": ["Glucose", "Fructose", "Lactose", "Sucrose"],
        "options_hi": ["ग्लूकोज", "फ्रक्टोज", "लैक्टोज", "सुक्रोज"],
        "answer_en": "Lactose",
        "answer_hi": "लैक्टोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Nucleic acids are polymers of:",
        "question_hi": "न्यूक्लिक अम्ल किसके बहुलक होते हैं?",
        "options_en": ["Nucleosides", "Nucleotides", "Amino acids", "Sugars"],
        "options_hi": ["न्यूक्लियोसाइड", "न्यूक्लियोटाइड", "अमीनो अम्ल", "शर्कराएँ"],
        "answer_en": "Nucleotides",
        "answer_hi": "न्यूक्लियोटाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The number of moles of solute present in 1 kg of solvent is called:",
        "question_hi": "विलायक के 1 kg में उपस्थित विलेय के मोलों की संख्या कहलाती है:",
        "options_en": ["Molarity", "Molality", "Mole fraction", "Normality"],
        "options_hi": ["मोलरता", "मोललता", "मोल अंश", "तुल्यांकी सांद्रता"],
        "answer_en": "Molality",
        "answer_hi": "मोललता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The unit of rate constant for a zero-order reaction is:",
        "question_hi": "शून्य कोटि अभिक्रिया के लिए दर स्थिरांक की इकाई है:",
        "options_en": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "options_hi": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "answer_en": "mol L⁻¹ s⁻¹",
        "answer_hi": "mol L⁻¹ s⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which of the following is an example of a zero-order reaction?",
        "question_hi": "निम्नलिखित में से कौन शून्य कोटि अभिक्रिया का एक उदाहरण है?",
        "options_en": ["Hydrolysis of ethyl acetate", "Decomposition of ammonia on gold surface", "Inversion of cane sugar", "Hydrolysis of sucrose"],
        "options_hi": ["एथिल ऐसीटेट का जल-अपघटन", "सोने की सतह पर अमोनिया का अपघटन", "गन्ना चीनी का व्युत्क्रमण", "सुक्रोज का जल-अपघटन"],
        "answer_en": "Decomposition of ammonia on gold surface",
        "answer_hi": "सोने की सतह पर अमोनिया का अपघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The activation energy of a reaction can be determined from the slope of a plot of:",
        "question_hi": "किसी अभिक्रिया की सक्रियण ऊर्जा निम्न के आलेख के ढाल से निर्धारित की जा सकती है:",
        "options_en": ["log k vs 1/T", "k vs T", "1/k vs log T", "k vs 1/T"],
        "options_hi": ["log k बनाम 1/T", "k बनाम T", "1/k बनाम log T", "k बनाम 1/T"],
        "answer_en": "log k vs 1/T",
        "answer_hi": "log k बनाम 1/T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which of the following is an intensive property?",
        "question_hi": "निम्नलिखित में से कौन एक गहन गुण है?",
        "options_en": ["Mass", "Volume", "Density", "Enthalpy"],
        "options_hi": ["द्रव्यमान", "आयतन", "घनत्व", "एन्थैल्पी"],
        "answer_en": "Density",
        "answer_hi": "घनत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "For a spontaneous process at constant temperature and pressure, the change in Gibbs free energy should be:",
        "question_hi": "नियत ताप और दाब पर एक स्वतःप्रवर्तित प्रक्रिया के लिए, गिब्स मुक्त ऊर्जा में परिवर्तन होना चाहिए:",
        "options_en": ["Zero", "Positive", "Negative", "Either positive or negative"],
        "options_hi": ["शून्य", "धनात्मक", "ऋणात्मक", "या तो धनात्मक या ऋणात्मक"],
        "answer_en": "Negative",
        "answer_hi": "ऋणात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The pH of a 0.01 M NaOH solution is:",
        "question_hi": "0.01 M NaOH विलयन का pH है:",
        "options_en": ["1", "2", "12", "13"],
        "options_hi": ["1", "2", "12", "13"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The common name of sodium tetraborate decahydrate is:",
        "question_hi": "सोडियम टेट्राबोरेट डेकाहाइड्रेट का सामान्य नाम है:",
        "options_en": ["Borax", "Baking soda", "Washing soda", "Gypsum"],
        "options_hi": ["बोरेक्स", "बेकिंग सोडा", "धोने का सोडा", "जिप्सम"],
        "answer_en": "Borax",
        "answer_hi": "बोरेक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which of the following is used in the manufacture of dynamite?",
        "question_hi": "निम्नलिखित में से किसका उपयोग डायनामाइट के निर्माण में किया जाता है?",
        "options_en": ["Glycerol", "Ethylene glycol", "Nitrobenzene", "Nitroglycerin"],
        "options_hi": ["ग्लिसरॉल", "एथिलीन ग्लाइकॉल", "नाइट्रोबेंजीन", "नाइट्रोग्लिसरीन"],
        "answer_en": "Nitroglycerin",
        "answer_hi": "नाइट्रोग्लिसरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which reagent is used to convert nitrobenzene to aniline?",
        "question_hi": "नाइट्रोबेंजीन को ऐनिलीन में बदलने के लिए किस अभिकर्मक का उपयोग किया जाता है?",
        "options_en": ["Sn/HCl", "H₂/Pd", "LiAlH₄", "All of the above"],
        "options_hi": ["Sn/HCl", "H₂/Pd", "LiAlH₄", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is an analgesic?",
        "question_hi": "निम्नलिखित में से कौन एक पीड़ाहारी है?",
        "options_en": ["Aspirin", "Paracetamol", "Ibuprofen", "All of the above"],
        "options_hi": ["ऐस्पिरिन", "पैरासिटामोल", "आइबूप्रोफेन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The formula of rust is:",
        "question_hi": "जंग का सूत्र है:",
        "options_en": ["Fe₂O₃", "Fe₂O₃.xH₂O", "Fe₃O₄", "FeO"],
        "options_hi": ["Fe₂O₃", "Fe₂O₃.xH₂O", "Fe₃O₄", "FeO"],
        "answer_en": "Fe₂O₃.xH₂O",
        "answer_hi": "Fe₂O₃.xH₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The hardest substance known is:",
        "question_hi": "ज्ञात सबसे कठोर पदार्थ है:",
        "options_en": ["Graphite", "Diamond", "Quartz", "Carborundum"],
        "options_hi": ["ग्रेफाइट", "हीरा", "क्वार्ट्ज", "कार्बोरंडम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
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