const questions = [
    // Physics - Modern Physics (1-20)
    {
        "num": 1,
        "question_en": "The ratio of radii of nuclei of mass numbers 27 and 64 is:",
        "question_hi": "द्रव्यमान संख्या 27 और 64 के नाभिकों की त्रिज्याओं का अनुपात है:",
        "options_en": ["3:4", "4:3", "9:16", "27:64"],
        "options_hi": ["3:4", "4:3", "9:16", "27:64"],
        "answer_en": "3:4",
        "answer_hi": "3:4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In photoelectric effect, the maximum kinetic energy of photoelectrons depends on:",
        "question_hi": "प्रकाश विद्युत प्रभाव में, फोटोइलेक्ट्रॉनों की अधिकतम गतिज ऊर्जा निर्भर करती है:",
        "options_en": ["Intensity of light", "Frequency of light", "Both A and B", "Work function"],
        "options_hi": ["प्रकाश की तीव्रता", "प्रकाश की आवृत्ति", "A और B दोनों", "कार्य फलन"],
        "answer_en": "Frequency of light",
        "answer_hi": "प्रकाश की आवृत्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The de Broglie wavelength of electron accelerated through 100V is approximately:",
        "question_hi": "100V से त्वरित इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य लगभग है:",
        "options_en": ["1.23 Å", "2.46 Å", "3.87 Å", "4.92 Å"],
        "options_hi": ["1.23 Å", "2.46 Å", "3.87 Å", "4.92 Å"],
        "answer_en": "1.23 Å",
        "answer_hi": "1.23 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In Bohr's model of hydrogen atom, the ratio of kinetic energy to potential energy is:",
        "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, गतिज ऊर्जा से स्थितिज ऊर्जा का अनुपात है:",
        "options_en": ["1:2", "1:-2", "-1:2", "2:1"],
        "options_hi": ["1:2", "1:-2", "-1:2", "2:1"],
        "answer_en": "1:-2",
        "answer_hi": "1:-2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The half-life of radioactive element is 10 days. The time taken for 7/8th of sample to decay is:",
        "question_hi": "रेडियोधर्मी तत्व का अर्ध-जीवन 10 दिन है। नमूने के 7/8 भाग के क्षय होने में लगा समय है:",
        "options_en": ["20 days", "30 days", "40 days", "50 days"],
        "options_hi": ["20 दिन", "30 दिन", "40 दिन", "50 दिन"],
        "answer_en": "30 days",
        "answer_hi": "30 दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In nuclear fission, the mass defect is converted to:",
        "question_hi": "नाभिकीय विखंडन में, द्रव्यमान क्षति परिवर्तित होती है:",
        "options_en": ["Kinetic energy", "Potential energy", "Chemical energy", "Electrical energy"],
        "options_hi": ["गतिज ऊर्जा", "स्थितिज ऊर्जा", "रासायनिक ऊर्जा", "विद्युत ऊर्जा"],
        "answer_en": "Kinetic energy",
        "answer_hi": "गतिज ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The energy equivalent of 1 amu is:",
        "question_hi": "1 amu का ऊर्जा तुल्यांक है:",
        "options_en": ["931 MeV", "511 keV", "13.6 eV", "1.6 × 10⁻¹⁹ J"],
        "options_hi": ["931 MeV", "511 keV", "13.6 eV", "1.6 × 10⁻¹⁹ J"],
        "answer_en": "931 MeV",
        "answer_hi": "931 MeV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In LASER, population inversion means:",
        "question_hi": "लेजर में, जनसंख्या व्युत्क्रम का अर्थ है:",
        "options_en": ["More atoms in ground state", "More atoms in excited state", "Equal atoms in both states", "No atoms in ground state"],
        "options_hi": ["अधिक परमाणु भूमि अवस्था में", "अधिक परमाणु उत्तेजित अवस्था में", "दोनों अवस्थाओं में समान परमाणु", "भूमि अवस्था में कोई परमाणु नहीं"],
        "answer_en": "More atoms in excited state",
        "answer_hi": "अधिक परमाणु उत्तेजित अवस्था में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The minimum wavelength in X-ray spectrum is given by:",
        "question_hi": "X-किरण स्पेक्ट्रम में न्यूनतम तरंगदैर्ध्य दी जाती है:",
        "options_en": ["λ_min = hc/eV", "λ_min = h/eV", "λ_min = c/V", "λ_min = h/mV"],
        "options_hi": ["λ_min = hc/eV", "λ_min = h/eV", "λ_min = c/V", "λ_min = h/mV"],
        "answer_en": "λ_min = hc/eV",
        "answer_hi": "λ_min = hc/eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The nuclear density is of the order of:",
        "question_hi": "नाभिकीय घनत्व का क्रम है:",
        "options_en": ["10¹⁷ kg/m³", "10²⁷ kg/m³", "10³⁷ kg/m³", "10⁴⁷ kg/m³"],
        "options_hi": ["10¹⁷ kg/m³", "10²⁷ kg/m³", "10³⁷ kg/m³", "10⁴⁷ kg/m³"],
        "answer_en": "10¹⁷ kg/m³",
        "answer_hi": "10¹⁷ kg/m³",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Coordination Compounds (11-30)
    {
        "num": 11,
        "question_en": "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
        "question_hi": "[Co(NH₃)₅Cl]Cl₂ का IUPAC नाम है:",
        "options_en": ["Pentaamminechloridocobalt(III) chloride", "Chloropentaamminecobalt(III) chloride", "Pentaamminecobalt(III) chloride", "Chloropentaamminecobalt chloride"],
        "options_hi": ["पेंटाएमीनक्लोरिडोकोबाल्ट(III) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट(III) क्लोराइड", "पेंटाएमीनकोबाल्ट(III) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट क्लोराइड"],
        "answer_en": "Pentaamminechloridocobalt(III) chloride",
        "answer_hi": "पेंटाएमीनक्लोरिडोकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "The number of geometrical isomers for [Co(NH₃)₄Cl₂]⁺ is:",
        "question_hi": "[Co(NH₃)₄Cl₂]⁺ के ज्यामितीय समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The magnetic moment of Fe³⁺ ion is:",
        "question_hi": "Fe³⁺ आयन का चुंबकीय आघूर्ण है:",
        "options_en": ["1.73 BM", "2.83 BM", "3.87 BM", "5.92 BM"],
        "options_hi": ["1.73 BM", "2.83 BM", "3.87 BM", "5.92 BM"],
        "answer_en": "5.92 BM",
        "answer_hi": "5.92 BM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The compound that shows optical isomerism is:",
        "question_hi": "वह यौगिक जो प्रकाशीय समावयवता दर्शाता है:",
        "options_en": ["[Co(en)₃]³⁺", "[Co(NH₃)₆]³⁺", "[CoF₆]³⁻", "[Ni(CN)₄]²⁻"],
        "options_hi": ["[Co(en)₃]³⁺", "[Co(NH₃)₆]³⁺", "[CoF₆]³⁻", "[Ni(CN)₄]²⁻"],
        "answer_en": "[Co(en)₃]³⁺",
        "answer_hi": "[Co(en)₃]³⁺",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The hybridization of [Ni(CN)₄]²⁻ is:",
        "question_hi": "[Ni(CN)₄]²⁻ का संकरण है:",
        "options_en": ["sp³", "dsp²", "sp³d", "d²sp³"],
        "options_hi": ["sp³", "dsp²", "sp³d", "d²sp³"],
        "answer_en": "dsp²",
        "answer_hi": "dsp²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The number of unpaired electrons in [CoF₆]³⁻ is:",
        "question_hi": "[CoF₆]³⁻ में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["0", "2", "4", "6"],
        "options_hi": ["0", "2", "4", "6"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The geometry of [Ni(CO)₄] is:",
        "question_hi": "[Ni(CO)₄] की ज्यामिति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Linear"],
        "options_hi": ["चतुष्फलकीय", "वर्ग समतलीय", "अष्टफलकीय", "रैखिक"],
        "answer_en": "Tetrahedral",
        "answer_hi": "चतुष्फलकीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The IUPAC name of K₃[Fe(CN)₆] is:",
        "question_hi": "K₃[Fe(CN)₆] का IUPAC नाम है:",
        "options_en": ["Potassium hexacyanoferrate(III)", "Potassium ferricyanide", "Potassium hexacyanoiron(III)", "Potassium ferrocyanide"],
        "options_hi": ["पोटैशियम हेक्सासायनोफेरेट(III)", "पोटैशियम फेरिसायनाइड", "पोटैशियम हेक्सासायनोआयरन(III)", "पोटैशियम फेरोसायनाइड"],
        "answer_en": "Potassium hexacyanoferrate(III)",
        "answer_hi": "पोटैशियम हेक्सासायनोफेरेट(III)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The coordination number in NaCl crystal is:",
        "question_hi": "NaCl क्रिस्टल में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Probability & Statistics (21-40)
    {
        "num": 21,
        "question_en": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A∩B) is:",
        "question_hi": "यदि A और B स्वतंत्र घटनाएँ हैं जिनमें P(A) = 0.3 और P(B) = 0.4, तो P(A∩B) है:",
        "options_en": ["0.12", "0.7", "0.1", "0.58"],
        "options_hi": ["0.12", "0.7", "0.1", "0.58"],
        "answer_en": "0.12",
        "answer_hi": "0.12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The variance of first n natural numbers is:",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का प्रसरण है:",
        "options_en": ["(n²-1)/12", "(n²+1)/12", "n(n+1)/2", "n(n-1)/12"],
        "options_hi": ["(n²-1)/12", "(n²+1)/12", "n(n+1)/2", "n(n-1)/12"],
        "answer_en": "(n²-1)/12",
        "answer_hi": "(n²-1)/12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "If P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, then P(A∪B) is:",
        "question_hi": "यदि P(A) = 0.4, P(B) = 0.8 और P(B|A) = 0.6, तो P(A∪B) है:",
        "options_en": ["0.24", "0.96", "0.56", "0.72"],
        "options_hi": ["0.24", "0.96", "0.56", "0.72"],
        "answer_en": "0.72",
        "answer_hi": "0.72",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The mean of binomial distribution B(n,p) is:",
        "question_hi": "द्विपद बंटन B(n,p) का माध्य है:",
        "options_en": ["np", "npq", "√npq", "nq"],
        "options_hi": ["np", "npq", "√npq", "nq"],
        "answer_en": "np",
        "answer_hi": "np",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "If standard deviation of data is 4, then variance is:",
        "question_hi": "यदि आँकड़ों का मानक विचलन 4 है, तो प्रसरण है:",
        "options_en": ["2", "4", "8", "16"],
        "options_hi": ["2", "4", "8", "16"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The probability of getting exactly 2 heads in 3 tosses of fair coin is:",
        "question_hi": "एक निष्पक्ष सिक्के के 3 उछालों में ठीक 2 हेड आने की प्रायिकता है:",
        "options_en": ["1/8", "3/8", "1/2", "5/8"],
        "options_hi": ["1/8", "3/8", "1/2", "5/8"],
        "answer_en": "3/8",
        "answer_hi": "3/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "If mean of numbers 2,4,6,8,x is 5, then x is:",
        "question_hi": "यदि संख्याओं 2,4,6,8,x का माध्य 5 है, तो x है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The mode of data: 2,3,4,3,5,3,6 is:",
        "question_hi": "आँकड़ों: 2,3,4,3,5,3,6 का बहुलक है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "If P(A) = 0.6, P(B) = 0.5 and P(A∩B) = 0.3, then P(A|B) is:",
        "question_hi": "यदि P(A) = 0.6, P(B) = 0.5 और P(A∩B) = 0.3, तो P(A|B) है:",
        "options_en": ["0.5", "0.6", "0.7", "0.8"],
        "options_hi": ["0.5", "0.6", "0.7", "0.8"],
        "answer_en": "0.6",
        "answer_hi": "0.6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The median of first 10 natural numbers is:",
        "question_hi": "प्रथम 10 प्राकृतिक संख्याओं की माध्यिका है:",
        "options_en": ["5", "5.5", "6", "6.5"],
        "options_hi": ["5", "5.5", "6", "6.5"],
        "answer_en": "5.5",
        "answer_hi": "5.5",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics & Evolution (31-50)
    {
        "num": 31,
        "question_en": "The phenotypic ratio in F₂ generation of monohybrid cross is:",
        "question_hi": "एकसंकर संकरण की F₂ पीढ़ी में फेनोटाइपिक अनुपात है:",
        "options_en": ["1:2:1", "3:1", "9:3:3:1", "1:1"],
        "options_hi": ["1:2:1", "3:1", "9:3:3:1", "1:1"],
        "answer_en": "3:1",
        "answer_hi": "3:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The process by which new species are formed is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा नई प्रजातियाँ बनती हैं, कहलाती है:",
        "options_en": ["Natural selection", "Speciation", "Adaptation", "Mutation"],
        "options_hi": ["प्राकृतिक चयन", "प्रजाति निर्माण", "अनुकूलन", "उत्परिवर्तन"],
        "answer_en": "Speciation",
        "answer_hi": "प्रजाति निर्माण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The number of chromosomes in human gamete is:",
        "question_hi": "मानव युग्मक में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "48", "22"],
        "options_hi": ["23", "46", "48", "22"],
        "answer_en": "23",
        "answer_hi": "23",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The theory of natural selection was proposed by:",
        "question_hi": "प्राकृतिक चयन का सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Lamarck", "Darwin", "Mendel", "Haeckel"],
        "options_hi": ["लैमार्क", "डार्विन", "मेंडल", "हेकेल"],
        "answer_en": "Darwin",
        "answer_hi": "डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The process of DNA replication is:",
        "question_hi": "DNA प्रतिकृति की प्रक्रिया है:",
        "options_en": ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        "options_hi": ["संरक्षी", "अर्ध-संरक्षी", "विकीर्ण", "यादृच्छिक"],
        "answer_en": "Semi-conservative",
        "answer_hi": "अर्ध-संरक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The genetic code is:",
        "question_hi": "आनुवंशिक कोड है:",
        "options_en": ["Universal", "Species specific", "Tissue specific", "Variable"],
        "options_hi": ["सार्वभौमिक", "प्रजाति विशिष्ट", "ऊतक विशिष्ट", "परिवर्तनशील"],
        "answer_en": "Universal",
        "answer_hi": "सार्वभौमिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The process by which mRNA is decoded to protein is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा mRNA को प्रोटीन में डिकोड किया जाता है, कहलाती है:",
        "options_en": ["Transcription", "Translation", "Replication", "Transformation"],
        "options_hi": ["प्रतिलेखन", "अनुवाद", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Translation",
        "answer_hi": "अनुवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The blood group that is universal acceptor is:",
        "question_hi": "वह रक्त समूह जो सार्वत्रिक ग्राही है:",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "AB",
        "answer_hi": "AB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The number of autosomes in human cell is:",
        "question_hi": "मानव कोशिका में स्वतंत्र गुणसूत्रों की संख्या है:",
        "options_en": ["22", "23", "44", "46"],
        "options_hi": ["22", "23", "44", "46"],
        "answer_en": "44",
        "answer_hi": "44",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The process of crossing over occurs during:",
        "question_hi": "विनिमय की प्रक्रिया होती है:",
        "options_en": ["Mitosis", "Meiosis I", "Meiosis II", "Both A and B"],
        "options_hi": ["सूत्री विभाजन", "अर्धसूत्री विभाजन I", "अर्धसूत्री विभाजन II", "A और B दोनों"],
        "answer_en": "Meiosis I",
        "answer_hi": "अर्धसूत्री विभाजन I",
        "attempted": false,
        "selected": ""
    },

    // English - Grammar & Vocabulary (51-70)
    {
        "num": 51,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["He don't like apples", "He doesn't likes apples", "He doesn't like apples", "He don't likes apples"],
        "options_hi": ["He don't like apples", "He doesn't likes apples", "He doesn't like apples", "He don't likes apples"],
        "answer_en": "He doesn't like apples",
        "answer_hi": "He doesn't like apples",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The synonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का पर्यायवाची है:",
        "options_en": ["Kind", "Cruel", "Selfish", "Greedy"],
        "options_hi": ["दयालु", "क्रूर", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Choose the correct passive voice: 'They built this house in 1990.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They built this house in 1990.'",
        "options_en": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built in 1990 by them", "This house has been built in 1990 by them"],
        "options_hi": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built in 1990 by them", "This house has been built in 1990 by them"],
        "answer_en": "This house was built in 1990 by them",
        "answer_hi": "This house was built in 1990 by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The antonym of 'Ancient' is:",
        "question_hi": "'Ancient' का विलोम है:",
        "options_en": ["Old", "Modern", "Historic", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Choose the correct word: 'She is ___ M.Sc. student.'",
        "question_hi": "सही शब्द चुनें: 'She is ___ M.Sc. student.'",
        "options_en": ["a", "an", "the", "no article"],
        "options_hi": ["a", "an", "the", "कोई article नहीं"],
        "answer_en": "an",
        "answer_hi": "an",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The correct plural of 'Child' is:",
        "question_hi": "'Child' का सही बहुवचन है:",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["Childs", "Children", "Childes", "Childern"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Choose the correct tense: 'I ___ to Delhi tomorrow.'",
        "question_hi": "सही काल चुनें: 'I ___ to Delhi tomorrow.'",
        "options_en": ["go", "went", "am going", "have gone"],
        "options_hi": ["go", "went", "am going", "have gone"],
        "answer_en": "am going",
        "answer_hi": "am going",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The meaning of 'Philanthropist' is:",
        "question_hi": "'Philanthropist' का अर्थ है:",
        "options_en": ["One who hates mankind", "One who loves mankind", "One who fears mankind", "One who ignores mankind"],
        "options_hi": ["जो मानवजाति से घृणा करता है", "जो मानवजाति से प्रेम करता है", "जो मानवजाति से डरता है", "जो मानवजाति को अनदेखा करता है"],
        "answer_en": "One who loves mankind",
        "answer_hi": "जो मानवजाति से प्रेम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Choose the correct preposition: 'He is good ___ Mathematics.'",
        "question_hi": "सही preposition चुनें: 'He is good ___ Mathematics.'",
        "options_en": ["in", "at", "on", "for"],
        "options_hi": ["in", "at", "on", "for"],
        "answer_en": "at",
        "answer_hi": "at",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The correct indirect speech: 'He said, \"I am tired.\"'",
        "question_hi": "सही अप्रत्यक्ष कथन: 'He said, \"I am tired.\"'",
        "options_en": ["He said that he is tired", "He said that he was tired", "He said that I am tired", "He said that I was tired"],
        "options_hi": ["He said that he is tired", "He said that he was tired", "He said that I am tired", "He said that I was tired"],
        "answer_en": "He said that he was tired",
        "answer_hi": "He said that he was tired",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण (71-90)
    {
        "num": 71,
        "question_en": "'विद्यालय' का पर्यायवाची शब्द है:",
        "question_hi": "'विद्यालय' का पर्यायवाची शब्द है:",
        "options_en": ["घर", "स्कूल", "मंदिर", "बगीचा"],
        "options_hi": ["घर", "स्कूल", "मंदिर", "बगीचा"],
        "answer_en": "स्कूल",
        "answer_hi": "स्कूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "'सूरज' का विलोम शब्द है:",
        "question_hi": "'सूरज' का विलोम शब्द है:",
        "options_en": ["चाँद", "तारा", "रात", "धूप"],
        "options_hi": ["चाँद", "तारा", "रात", "धूप"],
        "answer_en": "चाँद",
        "answer_hi": "चाँद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "कौन सा शब्द संज्ञा है?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["पढ़ना", "सुंदर", "लड़का", "तेज"],
        "options_hi": ["पढ़ना", "सुंदर", "लड़का", "तेज"],
        "answer_en": "लड़का",
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "'राम पुस्तक पढ़ता है' - इसमें क्रिया है:",
        "question_hi": "'राम पुस्तक पढ़ता है' - इसमें क्रिया है:",
        "options_en": ["राम", "पुस्तक", "पढ़ता", "है"],
        "options_hi": ["राम", "पुस्तक", "पढ़ता", "है"],
        "answer_en": "पढ़ता",
        "answer_hi": "पढ़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "कौन सा वाक्य शुद्ध है?",
        "question_hi": "कौन सा वाक्य शुद्ध है?",
        "options_en": ["मैं स्कूल जाता हूँ", "मैं स्कूल जाती हूँ", "मैं स्कूल जाते हूँ", "मैं स्कूल जाता है"],
        "options_hi": ["मैं स्कूल जाता हूँ", "मैं स्कूल जाती हूँ", "मैं स्कूल जाते हूँ", "मैं स्कूल जाता है"],
        "answer_en": "मैं स्कूल जाता हूँ",
        "answer_hi": "मैं स्कूल जाता हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "'गाय' का बहुवचन है:",
        "question_hi": "'गाय' का बहुवचन है:",
        "options_en": ["गायें", "गायों", "गाये", "गायाएँ"],
        "options_hi": ["गायें", "गायों", "गाये", "गायाएँ"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "कौन सा शब्द सर्वनाम है?",
        "question_hi": "कौन सा शब्द सर्वनाम है?",
        "options_en": ["लड़का", "वह", "पढ़ना", "सुंदर"],
        "options_hi": ["लड़का", "वह", "पढ़ना", "सुंदर"],
        "answer_en": "वह",
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "'प्रकाश' का विलोम है:",
        "question_hi": "'प्रकाश' का विलोम है:",
        "options_en": ["चमक", "रोशनी", "अंधकार", "दीपक"],
        "options_hi": ["चमक", "रोशनी", "अंधकार", "दीपक"],
        "answer_en": "अंधकार",
        "answer_hi": "अंधकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "कौन सा शब्द विशेषण है?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["तेज", "दौड़ना", "लड़का", "किताब"],
        "options_hi": ["तेज", "दौड़ना", "लड़का", "किताब"],
        "answer_en": "तेज",
        "answer_hi": "तेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "'मोहन खेल रहा है' - यह वाक्य किस काल में है?",
        "question_hi": "'मोहन खेल रहा है' - यह वाक्य किस काल में है?",
        "options_en": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "संदिग्ध भूत"],
        "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "संदिग्ध भूत"],
        "answer_en": "वर्तमान काल",
        "answer_hi": "वर्तमान काल",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (91-100)
    {
        "num": 91,
        "question_en": "The first Indian satellite was:",
        "question_hi": "प्रथम भारतीय उपग्रह था:",
        "options_en": ["Aryabhata", "Bhaskara", "Rohini", "INSAT"],
        "options_hi": ["आर्यभट्ट", "भास्कर", "रोहिणी", "इन्सैट"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The chemical name of vitamin C is:",
        "question_hi": "विटामिन C का रासायनिक नाम है:",
        "options_en": ["Ascorbic acid", "Citric acid", "Folic acid", "Nicotinic acid"],
        "options_hi": ["एस्कॉर्बिक अम्ल", "सिट्रिक अम्ल", "फोलिक अम्ल", "निकोटिनिक अम्ल"],
        "answer_en": "Ascorbic acid",
        "answer_hi": "एस्कॉर्बिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The planet known as Red Planet is:",
        "question_hi": "लाल ग्रह के नाम से जाना जाने वाला ग्रह है:",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
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
        "num": 96,
        "question_en": "The chemical symbol for gold is:",
        "question_hi": "सोने का रासायनिक प्रतीक है:",
        "options_en": ["Ag", "Au", "Fe", "Cu"],
        "options_hi": ["Ag", "Au", "Fe", "Cu"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की चाल है:",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The hardest natural substance on Earth is:",
        "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ है:",
        "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
        "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The process by which plants make food is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे भोजन बनाते हैं, कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The number of bones in adult human body is:",
        "question_hi": "वयस्क मानव शरीर में हड्डियों की संख्या है:",
        "options_en": ["206", "300", "150", "250"],
        "options_hi": ["206", "300", "150", "250"],
        "answer_en": "206",
        "answer_hi": "206",
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