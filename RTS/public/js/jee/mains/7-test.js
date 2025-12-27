const questions = [
    // Physics - JEE Main Level (1-25)
    {
        "num": 1,
        "question_en": "A particle moves along x-axis with velocity v = 2√x. What is acceleration at x = 4m?",
        "question_hi": "एक कण x-अक्ष के अनुदिश v = 2√x वेग से गति करता है। x = 4m पर त्वरण क्या है?",
        "options_en": ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
        "options_hi": ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
        "answer_en": "1 m/s²",
        "answer_hi": "1 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The de Broglie wavelength of electron in first Bohr orbit of hydrogen atom is:",
        "question_hi": "हाइड्रोजन परमाणु की प्रथम बोहर कक्षा में इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य है:",
        "options_en": ["2πr", "πr", "r/2", "r/π"],
        "options_hi": ["2πr", "πr", "r/2", "r/π"],
        "answer_en": "2πr",
        "answer_hi": "2πr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In Young's double slit experiment, if slit separation is doubled, fringe width becomes:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, यदि छिद्र पृथक्करण दोगुना कर दिया जाए, तो फ्रिंज चौड़ाई हो जाती है:",
        "options_en": ["Half", "Double", "Same", "Four times"],
        "options_hi": ["आधी", "दोगुनी", "समान", "चार गुनी"],
        "answer_en": "Half",
        "answer_hi": "आधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "A Carnot engine operates between 227°C and 127°C. Its efficiency is:",
        "question_hi": "एक कार्नोट इंजन 227°C और 127°C के बीच कार्य करता है। इसकी दक्षता है:",
        "options_en": ["20%", "25%", "30%", "40%"],
        "options_hi": ["20%", "25%", "30%", "40%"],
        "answer_en": "20%",
        "answer_hi": "20%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The magnetic field at center of circular coil of radius R carrying current I is:",
        "question_hi": "त्रिज्या R की वृत्ताकार कुंडली जिसमें धारा I प्रवाहित हो रही है, के केंद्र पर चुंबकीय क्षेत्र है:",
        "options_en": ["μ₀I/2R", "μ₀I/2πR", "μ₀I/R", "μ₀I/πR"],
        "options_hi": ["μ₀I/2R", "μ₀I/2πR", "μ₀I/R", "μ₀I/πR"],
        "answer_en": "μ₀I/2R",
        "answer_hi": "μ₀I/2R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "A particle executes SHM with amplitude A. Its speed is half of maximum when displacement is:",
        "question_hi": "एक कण A आयाम के साथ सरल आवर्त गति करता है। विस्थापन कितना होने पर इसकी चाल अधिकतम की आधी होगी?",
        "options_en": ["A/2", "A/√2", "A√3/2", "A/4"],
        "options_hi": ["A/2", "A/√2", "A√3/2", "A/4"],
        "answer_en": "A√3/2",
        "answer_hi": "A√3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The work function of sodium is 2.3 eV. The threshold wavelength is:",
        "question_hi": "सोडियम का कार्य फलन 2.3 eV है। देहली तरंगदैर्ध्य है:",
        "options_en": ["5400 Å", "540 Å", "540 nm", "5400 nm"],
        "options_hi": ["5400 Å", "540 Å", "540 nm", "5400 nm"],
        "answer_en": "5400 Å",
        "answer_hi": "5400 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In Bohr model of hydrogen atom, radius of first orbit is r. Radius of third orbit is:",
        "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, प्रथम कक्षा की त्रिज्या r है। तृतीय कक्षा की त्रिज्या है:",
        "options_en": ["3r", "6r", "9r", "12r"],
        "options_hi": ["3r", "6r", "9r", "12r"],
        "answer_en": "9r",
        "answer_hi": "9r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "A convex lens of focal length f is cut into two equal parts. Focal length of each part is:",
        "question_hi": "f फोकस दूरी के उत्तल लेंस को दो बराबर भागों में काटा जाता है। प्रत्येक भाग की फोकस दूरी है:",
        "options_en": ["f", "2f", "f/2", "4f"],
        "options_hi": ["f", "2f", "f/2", "4f"],
        "answer_en": "f",
        "answer_hi": "f",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The rms speed of oxygen molecules at 27°C is v. At 127°C, rms speed becomes:",
        "question_hi": "27°C पर ऑक्सीजन अणुओं की rms चाल v है। 127°C पर, rms चाल हो जाती है:",
        "options_en": ["√(4/3)v", "√(3/2)v", "√(5/3)v", "√(7/3)v"],
        "options_hi": ["√(4/3)v", "√(3/2)v", "√(5/3)v", "√(7/3)v"],
        "answer_en": "√(4/3)v",
        "answer_hi": "√(4/3)v",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "A charged particle enters uniform magnetic field with velocity perpendicular to field. Its path is:",
        "question_hi": "एक आवेशित कण एकसमान चुंबकीय क्षेत्र में क्षेत्र के लंबवत वेग से प्रवेश करता है। इसका पथ है:",
        "options_en": ["Straight line", "Circle", "Parabola", "Helix"],
        "options_hi": ["सीधी रेखा", "वृत्त", "परवलय", "कुंडलिनी"],
        "answer_en": "Circle",
        "answer_hi": "वृत्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The energy stored in capacitor of capacitance C charged to potential V is:",
        "question_hi": "धारिता C के संधारित्र जो विभव V तक आवेशित है, में संचित ऊर्जा है:",
        "options_en": ["½CV²", "CV²", "½C²V", "C²V²"],
        "options_hi": ["½CV²", "CV²", "½C²V", "C²V²"],
        "answer_en": "½CV²",
        "answer_hi": "½CV²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "In photoelectric effect, stopping potential depends on:",
        "question_hi": "प्रकाश विद्युत प्रभाव में, निरोधी विभव निर्भर करता है:",
        "options_en": ["Frequency of light", "Intensity of light", "Both A and B", "None"],
        "options_hi": ["प्रकाश की आवृत्ति", "प्रकाश की तीव्रता", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Frequency of light",
        "answer_hi": "प्रकाश की आवृत्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "A wire of resistance R is stretched to double its length. New resistance is:",
        "question_hi": "प्रतिरोध R के तार को उसकी लंबाई से दोगुना खींचा जाता है। नया प्रतिरोध है:",
        "options_en": ["R", "2R", "4R", "8R"],
        "options_hi": ["R", "2R", "4R", "8R"],
        "answer_en": "4R",
        "answer_hi": "4R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The half-life of radioactive element is 10 days. The mean life is:",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-जीवन 10 दिन है। माध्य जीवन है:",
        "options_en": ["10/ln2 days", "10 ln2 days", "20 days", "5 days"],
        "options_hi": ["10/ln2 days", "10 ln2 days", "20 days", "5 days"],
        "answer_en": "10/ln2 days",
        "answer_hi": "10/ln2 days",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "In LCR series circuit at resonance, the impedance is:",
        "question_hi": "अनुनाद पर LCR श्रेणी परिपथ में, प्रतिबाधा है:",
        "options_en": ["Maximum", "Minimum", "Zero", "Infinite"],
        "options_hi": ["अधिकतम", "न्यूनतम", "शून्य", "अनंत"],
        "answer_en": "Minimum",
        "answer_hi": "न्यूनतम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The dimensional formula of surface tension is:",
        "question_hi": "पृष्ठ तनाव का विमीय सूत्र है:",
        "options_en": ["MLT⁻²", "ML⁰T⁻²", "ML⁻¹T⁻²", "ML²T⁻²"],
        "options_hi": ["MLT⁻²", "ML⁰T⁻²", "ML⁻¹T⁻²", "ML²T⁻²"],
        "answer_en": "ML⁰T⁻²",
        "answer_hi": "ML⁰T⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "A body is projected with velocity u at angle θ. Time of flight is:",
        "question_hi": "एक पिंड को वेग u से θ कोण पर प्रक्षेपित किया जाता है। उड़ान का समय है:",
        "options_en": ["2u sinθ/g", "u sinθ/g", "u² sin2θ/g", "2u cosθ/g"],
        "options_hi": ["2u sinθ/g", "u sinθ/g", "u² sin2θ/g", "2u cosθ/g"],
        "answer_en": "2u sinθ/g",
        "answer_hi": "2u sinθ/g",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The critical angle for glass-air interface is 42°. Refractive index of glass is:",
        "question_hi": "कांच-वायु अंतरापृष्ठ के लिए क्रांतिक कोण 42° है। कांच का अपवर्तनांक है:",
        "options_en": ["1.5", "1.6", "1.4", "1.8"],
        "options_hi": ["1.5", "1.6", "1.4", "1.8"],
        "answer_en": "1.5",
        "answer_hi": "1.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "In adiabatic process, which relation is correct?",
        "question_hi": "रुद्धोष्म प्रक्रम में, कौन सा संबंध सही है?",
        "options_en": ["PV = constant", "PV^γ = constant", "TV = constant", "PT = constant"],
        "options_hi": ["PV = constant", "PV^γ = constant", "TV = constant", "PT = constant"],
        "answer_en": "PV^γ = constant",
        "answer_hi": "PV^γ = constant",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The unit of magnetic flux is:",
        "question_hi": "चुंबकीय फ्लक्स की इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "A body of mass m moving with velocity v collides elastically with stationary body of mass 2m. Final velocity of first body is:",
        "question_hi": "द्रव्यमान m का एक पिंड वेग v से गतिमान है और द्रव्यमान 2m के स्थिर पिंड से प्रत्यास्थ रूप से टकराता है। प्रथम पिंड का अंतिम वेग है:",
        "options_en": ["-v/3", "v/3", "-2v/3", "2v/3"],
        "options_hi": ["-v/3", "v/3", "-2v/3", "2v/3"],
        "answer_en": "-v/3",
        "answer_hi": "-v/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The energy of photon of wavelength 5000 Å is:",
        "question_hi": "5000 Å तरंगदैर्ध्य वाले फोटॉन की ऊर्जा है:",
        "options_en": ["2.48 eV", "3.1 eV", "4.96 eV", "6.2 eV"],
        "options_hi": ["2.48 eV", "3.1 eV", "4.96 eV", "6.2 eV"],
        "answer_en": "2.48 eV",
        "answer_hi": "2.48 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "In transformer, the ratio of secondary to primary voltage is equal to ratio of:",
        "question_hi": "ट्रांसफॉर्मर में, द्वितीयक से प्राथमिक वोल्टेज का अनुपात बराबर होता है:",
        "options_en": ["Turns ratio", "Square of turns ratio", "Inverse turns ratio", "Square root of turns ratio"],
        "options_hi": ["फेरों के अनुपात", "फेरों के अनुपात का वर्ग", "फेरों के अनुपात का व्युत्क्रम", "फेरों के अनुपात का वर्गमूल"],
        "answer_en": "Turns ratio",
        "answer_hi": "फेरों के अनुपात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The dimensional formula of power is:",
        "question_hi": "शक्ति का विमीय सूत्र है:",
        "options_en": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻³"],
        "options_hi": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻³"],
        "answer_en": "ML²T⁻³",
        "answer_hi": "ML²T⁻³",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - JEE Main Level (26-50)
    {
        "num": 26,
        "question_en": "The IUPAC name of CH₃-CH(CH₃)-CH₂-CHO is:",
        "question_hi": "CH₃-CH(CH₃)-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["3-Methylbutanal", "2-Methylbutanal", "Isopentanal", "3-Methylpropanal"],
        "options_hi": ["3-मेथिलब्यूटेनल", "2-मेथिलब्यूटेनल", "आइसोपेंटेनल", "3-मेथिलप्रोपेनल"],
        "answer_en": "3-Methylbutanal",
        "answer_hi": "3-मेथिलब्यूटेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The hybridization of carbon in CO₂ is:",
        "question_hi": "CO₂ में कार्बन का संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "dsp²"],
        "options_hi": ["sp", "sp²", "sp³", "dsp²"],
        "answer_en": "sp",
        "answer_hi": "sp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following has highest boiling point?",
        "question_hi": "निम्नलिखित में से किसका क्वथनांक सबसे अधिक है?",
        "options_en": ["n-pentane", "iso-pentane", "neo-pentane", "All equal"],
        "options_hi": ["n-पेंटेन", "आइसो-पेंटेन", "नियो-पेंटेन", "सभी समान"],
        "answer_en": "n-pentane",
        "answer_hi": "n-पेंटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The number of π bonds in benzene is:",
        "question_hi": "बेंजीन में π बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "In face-centered cubic lattice, coordination number is:",
        "question_hi": "फलक-केंद्रित घनीय जालक में, उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The rate constant of first order reaction is 0.693 min⁻¹. Its half-life is:",
        "question_hi": "प्रथम कोटि अभिक्रिया का दर स्थिरांक 0.693 min⁻¹ है। इसका अर्ध-जीवन है:",
        "options_en": ["0.5 min", "1 min", "2 min", "4 min"],
        "options_hi": ["0.5 min", "1 min", "2 min", "4 min"],
        "answer_en": "1 min",
        "answer_hi": "1 min",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is strongest oxidizing agent?",
        "question_hi": "कौन सबसे प्रबल ऑक्सीकारक है?",
        "options_en": ["F₂", "Cl₂", "Br₂", "I₂"],
        "options_hi": ["F₂", "Cl₂", "Br₂", "I₂"],
        "answer_en": "F₂",
        "answer_hi": "F₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The number of structural isomers of C₄H₁₀O is:",
        "question_hi": "C₄H₁₀O के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "In Freundlich adsorption isotherm, x/m ∝ P¹/ⁿ. Value of n is:",
        "question_hi": "फ्रेंडलिश अधिशोषण समतापी में, x/m ∝ P¹/ⁿ। n का मान है:",
        "options_en": ["Always 1", "Between 0 and 1", "Between 1 and ∞", "Always ∞"],
        "options_hi": ["सदैव 1", "0 और 1 के बीच", "1 और ∞ के बीच", "सदैव ∞"],
        "answer_en": "Between 1 and ∞",
        "answer_hi": "1 और ∞ के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The compound that gives iodoform test is:",
        "question_hi": "वह यौगिक जो आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "C₆H₅OH"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "C₆H₅OH"],
        "answer_en": "CH₃CH₂OH",
        "answer_hi": "CH₃CH₂OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The geometry of [Ni(CN)₄]²⁻ is:",
        "question_hi": "[Ni(CN)₄]²⁻ की ज्यामिति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Linear"],
        "options_hi": ["चतुष्फलकीय", "वर्ग समतलीय", "अष्टफलकीय", "रैखिक"],
        "answer_en": "Square planar",
        "answer_hi": "वर्ग समतलीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which is most acidic?",
        "question_hi": "कौन सबसे अधिक अम्लीय है?",
        "options_en": ["p-Nitrophenol", "p-Cresol", "Phenol", "m-Nitrophenol"],
        "options_hi": ["p-नाइट्रोफीनॉल", "p-क्रेसोल", "फीनॉल", "m-नाइट्रोफीनॉल"],
        "answer_en": "p-Nitrophenol",
        "answer_hi": "p-नाइट्रोफीनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The number of unpaired electrons in Fe²⁺ is:",
        "question_hi": "Fe²⁺ में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["4", "5", "6", "3"],
        "options_hi": ["4", "5", "6", "3"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "In Cannizzaro reaction, the compound used is:",
        "question_hi": "कैनिज़ारो अभिक्रिया में, प्रयुक्त यौगिक है:",
        "options_en": ["Aldehyde with no α-H", "Aldehyde with α-H", "Ketone", "Alcohol"],
        "options_hi": ["α-H रहित एल्डिहाइड", "α-H युक्त एल्डिहाइड", "कीटोन", "ऐल्कोहॉल"],
        "answer_en": "Aldehyde with no α-H",
        "answer_hi": "α-H रहित एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The pH of 10⁻⁸ M HCl solution is:",
        "question_hi": "10⁻⁸ M HCl विलयन का pH है:",
        "options_en": ["8", "7", "6", "Between 6 and 7"],
        "options_hi": ["8", "7", "6", "6 और 7 के बीच"],
        "answer_en": "Between 6 and 7",
        "answer_hi": "6 और 7 के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which shows geometrical isomerism?",
        "question_hi": "कौन ज्यामितीय समावयवता दर्शाता है?",
        "options_en": ["Propene", "1-Butene", "2-Butene", "Ethene"],
        "options_hi": ["प्रोपीन", "1-ब्यूटीन", "2-ब्यूटीन", "ईथीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The number of water molecules in CuSO₄·5H₂O is:",
        "question_hi": "CuSO₄·5H₂O में जल के अणुओं की संख्या है:",
        "options_en": ["1", "4", "5", "6"],
        "options_hi": ["1", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "In diamond, carbon atoms have hybridization:",
        "question_hi": "हीरे में, कार्बन परमाणुओं का संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "dsp²"],
        "options_hi": ["sp", "sp²", "sp³", "dsp²"],
        "answer_en": "sp³",
        "answer_hi": "sp³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The order of reactivity in SN² reaction is:",
        "question_hi": "SN² अभिक्रिया में अभिक्रियाशीलता का क्रम है:",
        "options_en": ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "All equal"],
        "options_hi": ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "सभी समान"],
        "answer_en": "1° > 2° > 3°",
        "answer_hi": "1° > 2° > 3°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The compound that gives positive Tollens test is:",
        "question_hi": "वह यौगिक जो सकारात्मक टोलेन परीक्षण देता है:",
        "options_en": ["Acetone", "Formaldehyde", "Acetic acid", "Ethanol"],
        "options_hi": ["एसीटोन", "फॉर्मेल्डिहाइड", "एसिटिक अम्ल", "एथनॉल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The number of σ bonds in ethylene is:",
        "question_hi": "एथिलीन में σ बंधों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which is not a colligative property?",
        "question_hi": "कौन सा अणुसंख्य गुणधर्म नहीं है?",
        "options_en": ["Osmotic pressure", "Lowering of vapor pressure", "Elevation in boiling point", "Viscosity"],
        "options_hi": ["परासरण दाब", "वाष्प दाब में अवनमन", "क्वथनांक में उन्नयन", "श्यानता"],
        "answer_en": "Viscosity",
        "answer_hi": "श्यानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The coordination number in body-centered cubic structure is:",
        "question_hi": "अंत:केंद्रित घनीय संरचना में उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The compound that shows tautomerism is:",
        "question_hi": "वह यौगिक जो टॉटोमेरिज्म दर्शाता है:",
        "options_en": ["Acetone", "Acetaldehyde", "Both", "None"],
        "options_hi": ["एसीटोन", "एसीटैल्डिहाइड", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The number of optical isomers of [Co(en)₃]³⁺ is:",
        "question_hi": "[Co(en)₃]³⁺ के प्रकाशीय समावयवियों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - JEE Main Level (51-75)
    {
        "num": 51,
        "question_en": "If A = [[1,2],[3,4]] and B = [[2,1],[1,2]], then AB is:",
        "question_hi": "यदि A = [[1,2],[3,4]] और B = [[2,1],[1,2]], तो AB है:",
        "options_en": ["[[4,5],[10,11]]", "[[5,4],[11,10]]", "[[4,5],[11,10]]", "[[5,4],[10,11]]"],
        "options_hi": ["[[4,5],[10,11]]", "[[5,4],[11,10]]", "[[4,5],[11,10]]", "[[5,4],[10,11]]"],
        "answer_en": "[[4,5],[10,11]]",
        "answer_hi": "[[4,5],[10,11]]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The value of ∫(0 to π/2) sin³x dx is:",
        "question_hi": "∫(0 से π/2) sin³x dx का मान है:",
        "options_en": ["1/3", "2/3", "1/2", "3/4"],
        "options_hi": ["1/3", "2/3", "1/2", "3/4"],
        "answer_en": "2/3",
        "answer_hi": "2/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The number of terms in expansion of (1 + x + x²)¹⁰ is:",
        "question_hi": "(1 + x + x²)¹⁰ के विस्तार में पदों की संख्या है:",
        "options_en": ["10", "11", "20", "21"],
        "options_hi": ["10", "11", "20", "21"],
        "answer_en": "21",
        "answer_hi": "21",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "If y = sin⁻¹(2x/(1+x²)), then dy/dx is:",
        "question_hi": "यदि y = sin⁻¹(2x/(1+x²)), तो dy/dx है:",
        "options_en": ["2/(1+x²)", "1/(1+x²)", "2x/(1+x²)", "1/(1-x²)"],
        "options_hi": ["2/(1+x²)", "1/(1+x²)", "2x/(1+x²)", "1/(1-x²)"],
        "answer_en": "2/(1+x²)",
        "answer_hi": "2/(1+x²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The area bounded by y = x² and y = 2x is:",
        "question_hi": "y = x² और y = 2x से घिरा क्षेत्रफल है:",
        "options_en": ["1/3", "2/3", "4/3", "8/3"],
        "options_hi": ["1/3", "2/3", "4/3", "8/3"],
        "answer_en": "4/3",
        "answer_hi": "4/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "If |z - 1| = |z + 1|, then z lies on:",
        "question_hi": "यदि |z - 1| = |z + 1|, तो z स्थित है:",
        "options_en": ["Real axis", "Imaginary axis", "Circle", "Line x = y"],
        "options_hi": ["वास्तविक अक्ष", "काल्पनिक अक्ष", "वृत्त", "रेखा x = y"],
        "answer_en": "Imaginary axis",
        "answer_hi": "काल्पनिक अक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The probability of getting at least one head in 3 tosses of fair coin is:",
        "question_hi": "एक निष्पक्ष सिक्के के 3 उछालों में कम से कम एक हेड आने की प्रायिकता है:",
        "options_en": ["1/8", "3/8", "7/8", "5/8"],
        "options_hi": ["1/8", "3/8", "7/8", "5/8"],
        "answer_en": "7/8",
        "answer_hi": "7/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The value of lim(x→0) (tanx - sinx)/x³ is:",
        "question_hi": "lim(x→0) (tanx - sinx)/x³ का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "If roots of x² - bx + c = 0 are two consecutive integers, then b² - 4c is:",
        "question_hi": "यदि x² - bx + c = 0 के मूल दो क्रमागत पूर्णांक हैं, तो b² - 4c है:",
        "options_en": ["-2", "-1", "0", "1"],
        "options_hi": ["-2", "-1", "0", "1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The number of diagonals in decagon is:",
        "question_hi": "एक दशभुज में विकर्णों की संख्या है:",
        "options_en": ["25", "30", "35", "40"],
        "options_hi": ["25", "30", "35", "40"],
        "answer_en": "35",
        "answer_hi": "35",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The value of ∫e^x(sinx + cosx)dx is:",
        "question_hi": "∫e^x(sinx + cosx)dx का मान है:",
        "options_en": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "options_hi": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "answer_en": "e^x sinx + C",
        "answer_hi": "e^x sinx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The function f(x) = |x - 1| + |x - 2| is:",
        "question_hi": "फलन f(x) = |x - 1| + |x - 2| है:",
        "options_en": ["Continuous but not differentiable at x=1,2", "Differentiable everywhere", "Discontinuous at x=1,2", "None"],
        "options_hi": ["x=1,2 पर संतत लेकिन अवकलनीय नहीं", "सर्वत्र अवकलनीय", "x=1,2 पर असतत", "कोई नहीं"],
        "answer_en": "Continuous but not differentiable at x=1,2",
        "answer_hi": "x=1,2 पर संतत लेकिन अवकलनीय नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The value of ∫(0 to π) x sinx dx is:",
        "question_hi": "∫(0 से π) x sinx dx का मान है:",
        "options_en": ["π", "2π", "π/2", "1"],
        "options_hi": ["π", "2π", "π/2", "1"],
        "answer_en": "π",
        "answer_hi": "π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The solution of dy/dx = y/x is:",
        "question_hi": "dy/dx = y/x का हल है:",
        "options_en": ["y = kx", "y = k/x", "y = ke^x", "y = klogx"],
        "options_hi": ["y = kx", "y = k/x", "y = ke^x", "y = klogx"],
        "answer_en": "y = kx",
        "answer_hi": "y = kx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The value of ∫(1/(1 + e^x)) dx is:",
        "question_hi": "∫(1/(1 + e^x)) dx का मान है:",
        "options_en": ["x - log(1 + e^x) + C", "log(1 + e^x) + C", "x + log(1 + e^x) + C", "log(e^x/(1 + e^x)) + C"],
        "options_hi": ["x - log(1 + e^x) + C", "log(1 + e^x) + C", "x + log(1 + e^x) + C", "log(e^x/(1 + e^x)) + C"],
        "answer_en": "x - log(1 + e^x) + C",
        "answer_hi": "x - log(1 + e^x) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of ∫(1/√(1 - x²)) dx is:",
        "question_hi": "∫(1/√(1 - x²)) dx का मान है:",
        "options_en": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "log|1 - x²| + C"],
        "options_hi": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "log|1 - x²| + C"],
        "answer_en": "sin⁻¹x + C",
        "answer_hi": "sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The value of ∫(sec²x dx) is:",
        "question_hi": "∫(sec²x dx) का मान है:",
        "options_en": ["tanx + C", "secx + C", "cotx + C", "cosecx + C"],
        "options_hi": ["tanx + C", "secx + C", "cotx + C", "cosecx + C"],
        "answer_en": "tanx + C",
        "answer_hi": "tanx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The value of ∫(e^x dx) is:",
        "question_hi": "∫(e^x dx) का मान है:",
        "options_en": ["e^x + C", "xe^x + C", "e^x/x + C", "log|e^x| + C"],
        "options_hi": ["e^x + C", "xe^x + C", "e^x/x + C", "log|e^x| + C"],
        "answer_en": "e^x + C",
        "answer_hi": "e^x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The value of ∫(1/x dx) is:",
        "question_hi": "∫(1/x dx) का मान है:",
        "options_en": ["log|x| + C", "x + C", "1/x² + C", "log|x²| + C"],
        "options_hi": ["log|x| + C", "x + C", "1/x² + C", "log|x²| + C"],
        "answer_en": "log|x| + C",
        "answer_hi": "log|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The value of ∫(sinx dx) is:",
        "question_hi": "∫(sinx dx) का मान है:",
        "options_en": ["cosx + C", "-cosx + C", "sinx + C", "-sinx + C"],
        "options_hi": ["cosx + C", "-cosx + C", "sinx + C", "-sinx + C"],
        "answer_en": "-cosx + C",
        "answer_hi": "-cosx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The value of ∫(cosx dx) is:",
        "question_hi": "∫(cosx dx) का मान है:",
        "options_en": ["sinx + C", "-sinx + C", "cosx + C", "-cosx + C"],
        "options_hi": ["sinx + C", "-sinx + C", "cosx + C", "-cosx + C"],
        "answer_en": "sinx + C",
        "answer_hi": "sinx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The value of ∫(a^x dx) is:",
        "question_hi": "∫(a^x dx) का मान है:",
        "options_en": ["a^x + C", "a^x/loga + C", "xa^x + C", "a^x/x + C"],
        "options_hi": ["a^x + C", "a^x/loga + C", "xa^x + C", "a^x/x + C"],
        "answer_en": "a^x/loga + C",
        "answer_hi": "a^x/loga + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of lim(x→0) (1 - cosx)/x² is:",
        "question_hi": "lim(x→0) (1 - cosx)/x² का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The number of points of discontinuity of f(x) = [x] in (0,2) is:",
        "question_hi": "(0,2) में f(x) = [x] के असांतत्य बिंदुओं की संख्या है:",
        "options_en": ["0", "1", "2", "Infinite"],
        "options_hi": ["0", "1", "2", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The solution of differential equation dy/dx = ky is:",
        "question_hi": "अवकल समीकरण dy/dx = ky का हल है:",
        "options_en": ["y = kx + C", "y = Ce^kx", "y = Cx^k", "y = klogx + C"],
        "options_hi": ["y = kx + C", "y = Ce^kx", "y = Cx^k", "y = klogx + C"],
        "answer_en": "y = Ce^kx",
        "answer_hi": "y = Ce^kx",
        "attempted": false,
        "selected": ""
    },

    // Biology - JEE Main Level (76-100)
    {
        "num": 76,
        "question_en": "Which enzyme converts glucose-6-phosphate to fructose-6-phosphate?",
        "question_hi": "कौन सा एंजाइम ग्लूकोज-6-फॉस्फेट को फ्रक्टोज-6-फॉस्फेट में परिवर्तित करता है?",
        "options_en": ["Hexokinase", "Phosphoglucose isomerase", "Phosphofructokinase", "Aldolase"],
        "options_hi": ["हेक्सोकाइनेज", "फॉस्फोग्लूकोज आइसोमरेज", "फॉस्फोफ्रक्टोकाइनेज", "एल्डोलेज"],
        "answer_en": "Phosphoglucose isomerase",
        "answer_hi": "फॉस्फोग्लूकोज आइसोमरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "In DNA, hydrogen bonds between adenine and thymine are:",
        "question_hi": "DNA में, एडेनीन और थाइमीन के बीच हाइड्रोजन बंध हैं:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which is a stop codon?",
        "question_hi": "कौन सा स्टॉप कोडन है?",
        "options_en": ["AUG", "UAA", "UAC", "UGC"],
        "options_hi": ["AUG", "UAA", "UAC", "UGC"],
        "answer_en": "UAA",
        "answer_hi": "UAA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The process of RNA synthesis from DNA is called:",
        "question_hi": "DNA से RNA संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which plant hormone promotes cell division?",
        "question_hi": "कौन सा पादप हार्मोन कोशिका विभाजन को बढ़ावा देता है?",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Cytokinin",
        "answer_hi": "साइटोकाइनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "In mitochondria, ATP synthesis occurs in:",
        "question_hi": "माइटोकॉन्ड्रिया में, ATP संश्लेषण होता है:",
        "options_en": ["Matrix", "Cristae", "Outer membrane", "Inner membrane"],
        "options_hi": ["मैट्रिक्स", "क्रिस्टी", "बाहरी झिल्ली", "आंतरिक झिल्ली"],
        "answer_en": "Inner membrane",
        "answer_hi": "आंतरिक झिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The enzyme that fixes CO₂ in C4 plants is:",
        "question_hi": "C4 पौधों में CO₂ स्थिर करने वाला एंजाइम है:",
        "options_en": ["RuBisCO", "PEP carboxylase", "Catalase", "Amylase"],
        "options_hi": ["RuBisCO", "PEP कार्बोक्सिलेज", "कैटालेज", "एमाइलेज"],
        "answer_en": "PEP carboxylase",
        "answer_hi": "PEP कार्बोक्सिलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "In PCR, the step at 95°C is for:",
        "question_hi": "PCR में, 95°C पर चरण है:",
        "options_en": ["Denaturation", "Annealing", "Extension", "All"],
        "options_hi": ["विकृतीकरण", "ऐनीलिंग", "विस्तार", "सभी"],
        "answer_en": "Denaturation",
        "answer_hi": "विकृतीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The hormone that regulates blood calcium level is:",
        "question_hi": "वह हार्मोन जो रक्त कैल्शियम स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The site of photosynthesis in plant cells is:",
        "question_hi": "पादप कोशिकाओं में प्रकाश संश्लेषण का स्थल है:",
        "options_en": ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम", "केंद्रक"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The enzyme that digests proteins in stomach is:",
        "question_hi": "आमाशय में प्रोटीनों को पचाने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
        "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
        "answer_en": "Pepsin",
        "answer_hi": "पेप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The hormone that stimulates milk production is:",
        "question_hi": "वह हार्मोन जो दूध उत्पादन को उत्तेजित करता है:",
        "options_en": ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
        "options_hi": ["ऑक्सीटोसिन", "प्रोलैक्टिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
        "answer_en": "Prolactin",
        "answer_hi": "प्रोलैक्टिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The enzyme that converts starch to maltose is:",
        "question_hi": "वह एंजाइम जो स्टार्च को माल्टोज में परिवर्तित करता है:",
        "options_en": ["Amylase", "Maltase", "Invertase", "Zymase"],
        "options_hi": ["एमाइलेज", "माल्टेज", "इन्वर्टेज", "जाइमेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The site of protein synthesis is:",
        "question_hi": "प्रोटीन संश्लेषण का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The hormone that regulates sleep-wake cycle is:",
        "question_hi": "वह हार्मोन जो नींद-जागने के चक्र को नियंत्रित करता है:",
        "options_en": ["Melatonin", "Insulin", "Thyroxine", "Adrenaline"],
        "options_hi": ["मेलाटोनिन", "इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन"],
        "answer_en": "Melatonin",
        "answer_hi": "मेलाटोनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The process of conversion of NO₂ to N₂ in nitrogen cycle is:",
        "question_hi": "नाइट्रोजन चक्र में NO₂ के N₂ में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The largest gland in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        "options_en": ["Pancreas", "Liver", "Kidney", "Lung"],
        "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "फेफड़ा"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which blood group is universal donor?",
        "question_hi": "कौन सा रक्त समूह सार्वत्रिक दाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The process of cell division is called:",
        "question_hi": "कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Mitosis", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "सूत्री विभाजन", "पाचन"],
        "answer_en": "Mitosis",
        "answer_hi": "सूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "DNA is found in:",
        "question_hi": "DNA पाया जाता है:",
        "options_en": ["Nucleus", "Cytoplasm", "Cell membrane", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "कोशिका झिल्ली", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The site of light reaction in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रकाश अभिक्रिया का स्थल है:",
        "options_en": ["Stroma", "Grana", "Matrix", "Cristae"],
        "options_hi": ["स्ट्रोमा", "ग्रैना", "मैट्रिक्स", "क्रिस्टी"],
        "answer_en": "Grana",
        "answer_hi": "ग्रैना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The hormone that regulates blood sugar level is:",
        "question_hi": "वह हार्मोन जो रक्त शर्करा स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The site of cellular respiration is:",
        "question_hi": "कोशिकीय श्वसन का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The enzyme that converts glucose to glucose-6-phosphate in glycolysis is:",
        "question_hi": "ग्लाइकोलाइसिस में ग्लूकोज को ग्लूकोज-6-फॉस्फेट में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Hexokinase", "Phosphofructokinase", "Pyruvate kinase", "Aldolase"],
        "options_hi": ["हेक्सोकाइनेज", "फॉस्फोफ्रक्टोकाइनेज", "पाइरुवेट काइनेज", "एल्डोलेज"],
        "answer_en": "Hexokinase",
        "answer_hi": "हेक्सोकाइनेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The brain is protected by:",
        "question_hi": "मस्तिष्क सुरक्षित रहता है:",
        "options_en": ["Skull", "Rib cage", "Spine", "Pelvis"],
        "options_hi": ["खोपड़ी", "पसली पिंजर", "रीढ़", "श्रोणि"],
        "answer_en": "Skull",
        "answer_hi": "खोपड़ी",
        "attempted": false,
        "selected": ""
    }
];
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