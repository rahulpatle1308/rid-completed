const questions = [
    // Physics - JEE Advanced Level (1-25)
    {
        "num": 1,
        "question_en": "A particle moves in xy-plane with position vector r = (3t² - 2t)i + (4t³ - 6t²)j. The magnitude of acceleration at t=1s is:",
        "question_hi": "एक कण xy-तल में स्थिति सदिश r = (3t² - 2t)i + (4t³ - 6t²)j के साथ गति करता है। t=1s पर त्वरण का परिमाण है:",
        "options_en": ["6 m/s²", "10 m/s²", "12 m/s²", "14 m/s²"],
        "options_hi": ["6 m/s²", "10 m/s²", "12 m/s²", "14 m/s²"],
        "answer_en": "10 m/s²",
        "answer_hi": "10 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Two charges +4q and -q are placed at distance d. The null point where electric field is zero is at distance from +4q:",
        "question_hi": "दो आवेश +4q और -q दूरी d पर रखे गए हैं। वह शून्य बिंदु जहाँ विद्युत क्षेत्र शून्य है, +4q से दूरी पर है:",
        "options_en": ["d/3", "2d/3", "d/2", "3d/4"],
        "options_hi": ["d/3", "2d/3", "d/2", "3d/4"],
        "answer_en": "2d/3",
        "answer_hi": "2d/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A satellite is revolving in circular orbit at height h from earth surface. Its orbital velocity is proportional to:",
        "question_hi": "एक उपग्रह पृथ्वी की सतह से ऊँचाई h पर वृत्ताकार कक्षा में परिक्रमा कर रहा है। इसका कक्षीय वेग समानुपाती है:",
        "options_en": ["h", "1/√h", "1/(R+h)", "1/√(R+h)"],
        "options_hi": ["h", "1/√h", "1/(R+h)", "1/√(R+h)"],
        "answer_en": "1/√(R+h)",
        "answer_hi": "1/√(R+h)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In Young's double slit experiment using sodium light (λ=5890Å), 20 fringes occupy 2.0 cm. If sodium light is replaced by blue light (λ=4500Å), number of fringes in same distance will be:",
        "question_hi": "सोडियम प्रकाश (λ=5890Å) का उपयोग करते हुए यंग के द्वि-छिद्र प्रयोग में, 20 फ्रिंज 2.0 cm घेरते हैं। यदि सोडियम प्रकाश को नीले प्रकाश (λ=4500Å) से बदल दिया जाए, तो समान दूरी में फ्रिंजों की संख्या होगी:",
        "options_en": ["15", "20", "25", "30"],
        "options_hi": ["15", "20", "25", "30"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A particle of mass m is projected with speed u at angle θ with horizontal. The torque about point of projection when it is at highest point is:",
        "question_hi": "द्रव्यमान m का एक कण क्षैतिज से θ कोण पर चाल u से प्रक्षेपित किया जाता है। उच्चतम बिंदु पर प्रक्षेपण बिंदु के परितः बल आघूर्ण है:",
        "options_en": ["mgu cosθ", "mgu sinθ", "mgu² sin2θ/2g", "Zero"],
        "options_hi": ["mgu cosθ", "mgu sinθ", "mgu² sin2θ/2g", "शून्य"],
        "answer_en": "Zero",
        "answer_hi": "शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The de Broglie wavelength of electron in nth Bohr orbit is proportional to:",
        "question_hi": "nवीं बोहर कक्षा में इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य समानुपाती है:",
        "options_en": ["n", "n²", "1/n", "1/n²"],
        "options_hi": ["n", "n²", "1/n", "1/n²"],
        "answer_en": "n",
        "answer_hi": "n",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A solid sphere rolls without slipping on rough inclined plane. The ratio of rotational to translational kinetic energy is:",
        "question_hi": "एक ठोस गोला खुरदुरे आनत तल पर बिना फिसले लुढ़कता है। घूर्णन से स्थानांतरीय गतिज ऊर्जा का अनुपात है:",
        "options_en": ["2/5", "2/7", "1/2", "2/3"],
        "options_hi": ["2/5", "2/7", "1/2", "2/3"],
        "answer_en": "2/5",
        "answer_hi": "2/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In photoelectric effect, if frequency of light is doubled, stopping potential becomes:",
        "question_hi": "प्रकाश विद्युत प्रभाव में, यदि प्रकाश की आवृत्ति दोगुनी कर दी जाए, तो निरोधी विभव हो जाता है:",
        "options_en": ["Double", "More than double", "Less than double", "Same"],
        "options_hi": ["दोगुना", "दोगुने से अधिक", "दोगुने से कम", "समान"],
        "answer_en": "More than double",
        "answer_hi": "दोगुने से अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "A Carnot engine works between 400K and 300K. If it absorbs 1000J heat from source, heat rejected to sink is:",
        "question_hi": "एक कार्नोट इंजन 400K और 300K के बीच कार्य करता है। यदि यह स्रोत से 1000J ऊष्मा अवशोषित करता है, तो सिंक को अस्वीकृत ऊष्मा है:",
        "options_en": ["250J", "500J", "750J", "1000J"],
        "options_hi": ["250J", "500J", "750J", "1000J"],
        "answer_en": "750J",
        "answer_hi": "750J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The magnetic field at center of current carrying circular coil of radius R is B. If radius is doubled and current is halved, new magnetic field will be:",
        "question_hi": "त्रिज्या R की धारावाही वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र B है। यदि त्रिज्या दोगुनी और धारा आधी कर दी जाए, तो नया चुंबकीय क्षेत्र होगा:",
        "options_en": ["B/4", "B/2", "B", "2B"],
        "options_hi": ["B/4", "B/2", "B", "2B"],
        "answer_en": "B/4",
        "answer_hi": "B/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "A particle executes SHM with amplitude A. The distance from mean position where kinetic energy equals potential energy is:",
        "question_hi": "एक कण A आयाम के साथ सरल आवर्त गति करता है। माध्य स्थिति से वह दूरी जहाँ गतिज ऊर्जा स्थितिज ऊर्जा के बराबर है:",
        "options_en": ["A/2", "A/√2", "A√3/2", "A/4"],
        "options_hi": ["A/2", "A/√2", "A√3/2", "A/4"],
        "answer_en": "A/√2",
        "answer_hi": "A/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The ratio of radii of gyration of circular ring and circular disc about diameter is:",
        "question_hi": "वृत्ताकार वलय और वृत्ताकार डिस्क के व्यास के परितः परिभ्रमण त्रिज्याओं का अनुपात है:",
        "options_en": ["1:1", "√2:1", "2:1", "1:√2"],
        "options_hi": ["1:1", "√2:1", "2:1", "1:√2"],
        "answer_en": "√2:1",
        "answer_hi": "√2:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "In LCR circuit, when capacitive reactance equals inductive reactance, the phase difference between voltage and current is:",
        "question_hi": "LCR परिपथ में, जब धारिता प्रतिघात प्रेरक प्रतिघात के बराबर होता है, तो वोल्टेज और धारा के बीच कलांतर है:",
        "options_en": ["0°", "45°", "90°", "180°"],
        "options_hi": ["0°", "45°", "90°", "180°"],
        "answer_en": "0°",
        "answer_hi": "0°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "A convex lens of focal length f is cut into two equal parts along principal axis. The focal length of each part is:",
        "question_hi": "f फोकस दूरी के उत्तल लेंस को मुख्य अक्ष के अनुदिश दो बराबर भागों में काटा जाता है। प्रत्येक भाग की फोकस दूरी है:",
        "options_en": ["f", "2f", "f/2", "4f"],
        "options_hi": ["f", "2f", "f/2", "4f"],
        "answer_en": "f",
        "answer_hi": "f",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The work done in adiabatic process is given by:",
        "question_hi": "रुद्धोष्म प्रक्रम में किया गया कार्य दिया जाता है:",
        "options_en": ["nRΔT", "nRΔT/(γ-1)", "nRΔT/(1-γ)", "Zero"],
        "options_hi": ["nRΔT", "nRΔT/(γ-1)", "nRΔT/(1-γ)", "शून्य"],
        "answer_en": "nRΔT/(1-γ)",
        "answer_hi": "nRΔT/(1-γ)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The dimensional formula of Stefan's constant is:",
        "question_hi": "स्टीफन नियतांक का विमीय सूत्र है:",
        "options_en": ["ML²T⁻³K⁻⁴", "MLT⁻³K⁻⁴", "ML²T⁻²K⁻⁴", "ML³T⁻³K⁻⁴"],
        "options_hi": ["ML²T⁻³K⁻⁴", "MLT⁻³K⁻⁴", "ML²T⁻²K⁻⁴", "ML³T⁻³K⁻⁴"],
        "answer_en": "ML²T⁻³K⁻⁴",
        "answer_hi": "ML²T⁻³K⁻⁴",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "A body cools from 80°C to 64°C in 5 minutes. Time taken to cool from 64°C to 52°C is:",
        "question_hi": "एक पिंड 80°C से 64°C तक 5 मिनट में ठंडा होता है। 64°C से 52°C तक ठंडा होने में लगा समय है:",
        "options_en": ["5 min", "6 min", "7 min", "8 min"],
        "options_hi": ["5 min", "6 min", "7 min", "8 min"],
        "answer_en": "7 min",
        "answer_hi": "7 min",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The critical velocity of satellite in circular orbit is proportional to:",
        "question_hi": "वृत्ताकार कक्षा में उपग्रह की क्रांतिक चाल समानुपाती है:",
        "options_en": ["R", "1/R", "1/√R", "√R"],
        "options_hi": ["R", "1/R", "1/√R", "√R"],
        "answer_en": "1/√R",
        "answer_hi": "1/√R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In Young's double slit experiment, if width of one slit is doubled, the intensity at maxima becomes:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, यदि एक छिद्र की चौड़ाई दोगुनी कर दी जाए, तो उच्चिष्ट पर तीव्रता हो जाती है:",
        "options_en": ["2 times", "4 times", "9/4 times", "3/2 times"],
        "options_hi": ["2 गुना", "4 गुना", "9/4 गुना", "3/2 गुना"],
        "answer_en": "9/4 times",
        "answer_hi": "9/4 गुना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The ratio of magnetic moments of two bar magnets is 8:1. When placed in vibration magnetometer, time period ratio is 2:1. The ratio of their moments of inertia is:",
        "question_hi": "दो दंड चुंबकों के चुंबकीय आघूर्णों का अनुपात 8:1 है। कंपन चुंबकमापी में रखे जाने पर, आवर्तकाल अनुपात 2:1 है। उनके जड़त्व आघूर्णों का अनुपात है:",
        "options_en": ["1:1", "2:1", "4:1", "8:1"],
        "options_hi": ["1:1", "2:1", "4:1", "8:1"],
        "answer_en": "4:1",
        "answer_hi": "4:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "A proton and alpha particle are accelerated through same potential difference. The ratio of their de Broglie wavelengths is:",
        "question_hi": "एक प्रोटॉन और अल्फा कण समान विभवांतर से त्वरित किए जाते हैं। उनकी डी ब्रोगली तरंगदैर्ध्यों का अनुपात है:",
        "options_en": ["1:1", "1:2", "2:1", "2√2:1"],
        "options_hi": ["1:1", "1:2", "2:1", "2√2:1"],
        "answer_en": "2√2:1",
        "answer_hi": "2√2:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "In Bohr model of hydrogen atom, the ratio of kinetic energy to total energy in nth orbit is:",
        "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, nवीं कक्षा में गतिज ऊर्जा से कुल ऊर्जा का अनुपात है:",
        "options_en": ["1:1", "1:-1", "2:1", "1:-2"],
        "options_hi": ["1:1", "1:-1", "2:1", "1:-2"],
        "answer_en": "1:-1",
        "answer_hi": "1:-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "A capacitor of 2μF is charged to 100V and then connected to uncharged capacitor of 4μF. The common potential is:",
        "question_hi": "2μF का संधारित्र 100V तक आवेशित किया जाता है और फिर 4μF के अनावेशित संधारित्र से जोड़ा जाता है। सामान्य विभव है:",
        "options_en": ["50V", "100/3 V", "200/3 V", "75V"],
        "options_hi": ["50V", "100/3 V", "200/3 V", "75V"],
        "answer_en": "100/3 V",
        "answer_hi": "100/3 V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The rms speed of oxygen molecules at 27°C is v. At what temperature will rms speed be 2v?",
        "question_hi": "27°C पर ऑक्सीजन अणुओं की rms चाल v है। किस तापमान पर rms चाल 2v होगी?",
        "options_en": ["54°C", "327°C", "627°C", "927°C"],
        "options_hi": ["54°C", "327°C", "627°C", "927°C"],
        "answer_en": "927°C",
        "answer_hi": "927°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "In transformer, the core is laminated to reduce:",
        "question_hi": "ट्रांसफॉर्मर में, कोर को परतदार बनाया जाता है ताकि कम हो:",
        "options_en": ["Copper loss", "Hysteresis loss", "Eddy current loss", "All losses"],
        "options_hi": ["तांबा हानि", "शैथिल्य हानि", "भंवर धारा हानि", "सभी हानियाँ"],
        "answer_en": "Eddy current loss",
        "answer_hi": "भंवर धारा हानि",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - JEE Advanced Level (26-50)
    {
        "num": 26,
        "question_en": "The compound that gives positive iodoform test and positive Tollens test is:",
        "question_hi": "वह यौगिक जो सकारात्मक आयोडोफॉर्म परीक्षण और सकारात्मक टोलेन परीक्षण देता है:",
        "options_en": ["CH₃CHO", "CH₃CH₂OH", "CH₃COCH₃", "HCHO"],
        "options_hi": ["CH₃CHO", "CH₃CH₂OH", "CH₃COCH₃", "HCHO"],
        "answer_en": "CH₃CHO",
        "answer_hi": "CH₃CHO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The number of geometrical isomers for [Co(NH₃)₃Cl₃] is:",
        "question_hi": "[Co(NH₃)₃Cl₃] के ज्यामितीय समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "In face-centered cubic lattice, the number of atoms per unit cell is:",
        "question_hi": "फलक-केंद्रित घनीय जालक में, प्रति एकक कोशिका में परमाणुओं की संख्या है:",
        "options_en": ["1", "2", "4", "6"],
        "options_hi": ["1", "2", "4", "6"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The rate constant for first order reaction is 2.0 × 10⁻² s⁻¹. The time required for 75% completion is:",
        "question_hi": "प्रथम कोटि अभिक्रिया के लिए दर स्थिरांक 2.0 × 10⁻² s⁻¹ है। 75% पूर्ण होने के लिए आवश्यक समय है:",
        "options_en": ["34.65 s", "69.3 s", "138.6 s", "277.2 s"],
        "options_hi": ["34.65 s", "69.3 s", "138.6 s", "277.2 s"],
        "answer_en": "69.3 s",
        "answer_hi": "69.3 s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The compound that shows both geometrical and optical isomerism is:",
        "question_hi": "वह यौगिक जो ज्यामितीय और प्रकाशीय दोनों समावयवता दर्शाता है:",
        "options_en": ["[Co(en)₂Cl₂]⁺", "[Co(NH₃)₄Cl₂]⁺", "[Co(NH₃)₅Cl]²⁺", "[Co(en)₃]³⁺"],
        "options_hi": ["[Co(en)₂Cl₂]⁺", "[Co(NH₃)₄Cl₂]⁺", "[Co(NH₃)₅Cl]²⁺", "[Co(en)₃]³⁺"],
        "answer_en": "[Co(en)₂Cl₂]⁺",
        "answer_hi": "[Co(en)₂Cl₂]⁺",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The number of water molecules in washing soda (Na₂CO₃·xH₂O) is:",
        "question_hi": "धावन सोडा (Na₂CO₃·xH₂O) में जल के अणुओं की संख्या है:",
        "options_en": ["5", "7", "10", "12"],
        "options_hi": ["5", "7", "10", "12"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The compound that undergoes electrophilic substitution most readily is:",
        "question_hi": "वह यौगिक जो सबसे आसानी से इलेक्ट्रॉनरागी प्रतिस्थापन से गुजरता है:",
        "options_en": ["Nitrobenzene", "Benzene", "Toluene", "Chlorobenzene"],
        "options_hi": ["नाइट्रोबेंजीन", "बेंजीन", "टॉलूईन", "क्लोरोबेंजीन"],
        "answer_en": "Toluene",
        "answer_hi": "टॉलूईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The number of σ and π bonds in CH₂=C=CH₂ are respectively:",
        "question_hi": "CH₂=C=CH₂ में σ और π बंधों की संख्या क्रमशः है:",
        "options_en": ["6,2", "5,2", "6,3", "5,3"],
        "options_hi": ["6,2", "5,2", "6,3", "5,3"],
        "answer_en": "6,2",
        "answer_hi": "6,2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The pH of 0.01M NH₄Cl solution (Kb for NH₃ = 1.8 × 10⁻⁵) is:",
        "question_hi": "0.01M NH₄Cl विलयन का pH (NH₃ के लिए Kb = 1.8 × 10⁻⁵) है:",
        "options_en": ["3.13", "5.63", "6.63", "7.63"],
        "options_hi": ["3.13", "5.63", "6.63", "7.63"],
        "answer_en": "5.63",
        "answer_hi": "5.63",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The number of structural isomers of C₅H₁₂ is:",
        "question_hi": "C₅H₁₂ के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The compound formed when acetylene is passed through red hot iron tube is:",
        "question_hi": "वह यौगिक जो एसिटिलीन को लाल तप्त लोहे की नली से गुजारने पर बनता है:",
        "options_en": ["Benzene", "Ethylene", "Methane", "Cyclohexane"],
        "options_hi": ["बेंजीन", "एथिलीन", "मीथेन", "साइक्लोहेक्सेन"],
        "answer_en": "Benzene",
        "answer_hi": "बेंजीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The number of unpaired electrons in Cr³⁺ is:",
        "question_hi": "Cr³⁺ में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The geometry and hybridization of Xe in XeF₄ are:",
        "question_hi": "XeF₄ में Xe की ज्यामिति और संकरण हैं:",
        "options_en": ["Octahedral, sp³d²", "Square planar, sp³d²", "Tetrahedral, sp³", "Trigonal bipyramidal, sp³d"],
        "options_hi": ["अष्टफलकीय, sp³d²", "वर्ग समतलीय, sp³d²", "चतुष्फलकीय, sp³", "त्रिकोणीय द्विपिरैमिडल, sp³d"],
        "answer_en": "Square planar, sp³d²",
        "answer_hi": "वर्ग समतलीय, sp³d²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The order of basic strength in aqueous solution is:",
        "question_hi": "जलीय विलयन में क्षारकीय सामर्थ्य का क्रम है:",
        "options_en": ["CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N", "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N", "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂", "All equal"],
        "options_hi": ["CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N", "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N", "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂", "सभी समान"],
        "answer_en": "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N",
        "answer_hi": "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The number of moles of KMnO₄ required to oxidize one mole of FeC₂O₄ in acidic medium is:",
        "question_hi": "अम्लीय माध्यम में FeC₂O₄ के एक मोल को ऑक्सीकृत करने के लिए आवश्यक KMnO₄ के मोलों की संख्या है:",
        "options_en": ["0.2", "0.4", "0.6", "0.8"],
        "options_hi": ["0.2", "0.4", "0.6", "0.8"],
        "answer_en": "0.6",
        "answer_hi": "0.6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The compound that gives red precipitate with Cu₂Cl₂ and NH₄OH is:",
        "question_hi": "वह यौगिक जो Cu₂Cl₂ और NH₄OH के साथ लाल अवक्षेप देता है:",
        "options_en": ["CH₃-C≡CH", "CH₃-CH=CH₂", "CH₃-CH₂-CH₃", "C₆H₅-C≡CH"],
        "options_hi": ["CH₃-C≡CH", "CH₃-CH=CH₂", "CH₃-CH₂-CH₃", "C₆H₅-C≡CH"],
        "answer_en": "CH₃-C≡CH",
        "answer_hi": "CH₃-C≡CH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The number of optical isomers of 2,3-dichlorobutane is:",
        "question_hi": "2,3-डाइक्लोरोब्यूटेन के प्रकाशीय समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The compound that does not undergo aldol condensation is:",
        "question_hi": "वह यौगिक जो एल्डोल संघनन से नहीं गुजरता है:",
        "options_en": ["CH₃CHO", "CH₃CH₂CHO", "C₆H₅CHO", "CH₃COCH₃"],
        "options_hi": ["CH₃CHO", "CH₃CH₂CHO", "C₆H₅CHO", "CH₃COCH₃"],
        "answer_en": "C₆H₅CHO",
        "answer_hi": "C₆H₅CHO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The number of ions produced from complex [Co(NH₃)₆]Cl₃ in aqueous solution is:",
        "question_hi": "जलीय विलयन में संकुल [Co(NH₃)₆]Cl₃ से उत्पन्न आयनों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The order of reactivity towards SN¹ reaction is:",
        "question_hi": "SN¹ अभिक्रिया के प्रति अभिक्रियाशीलता का क्रम है:",
        "options_en": ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "All equal"],
        "options_hi": ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "सभी समान"],
        "answer_en": "3° > 2° > 1°",
        "answer_hi": "3° > 2° > 1°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The compound that gives blood red colour with FeCl₃ is:",
        "question_hi": "वह यौगिक जो FeCl₃ के साथ रक्त लाल रंग देता है:",
        "options_en": ["Phenol", "Acetic acid", "Ethanol", "Benzaldehyde"],
        "options_hi": ["फीनॉल", "एसिटिक अम्ल", "एथनॉल", "बेंजाल्डिहाइड"],
        "answer_en": "Phenol",
        "answer_hi": "फीनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The number of water molecules in gypsum (CaSO₄·2H₂O) is:",
        "question_hi": "जिप्सम (CaSO₄·2H₂O) में जल के अणुओं की संख्या है:",
        "options_en": ["1", "2", "5", "7"],
        "options_hi": ["1", "2", "5", "7"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The compound that shows Frenkel defect is:",
        "question_hi": "वह यौगिक जो फ्रेंकेल दोष दर्शाता है:",
        "options_en": ["NaCl", "KCl", "AgBr", "CsCl"],
        "options_hi": ["NaCl", "KCl", "AgBr", "CsCl"],
        "answer_en": "AgBr",
        "answer_hi": "AgBr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The number of π electrons in cyclopentadienyl anion is:",
        "question_hi": "साइक्लोपेंटाडाइनिल ऋणायन में π इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The compound used in Williamson's synthesis is:",
        "question_hi": "विलियमसन संश्लेषण में प्रयुक्त यौगिक है:",
        "options_en": ["Sodium alkoxide", "Sodium alkyl sulphate", "Alkyl halide", "Both A and C"],
        "options_hi": ["सोडियम ऐल्कॉक्साइड", "सोडियम ऐल्किल सल्फेट", "ऐल्किल हैलाइड", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - JEE Advanced Level (51-75)
    {
        "num": 51,
        "question_en": "If A and B are square matrices of order 3 such that |A| = 2 and |B| = 3, then |AB⁻¹| is:",
        "question_hi": "यदि A और B कोटि 3 के वर्ग आव्यूह हैं जैसे कि |A| = 2 और |B| = 3, तो |AB⁻¹| है:",
        "options_en": ["2/3", "3/2", "6", "1/6"],
        "options_hi": ["2/3", "3/2", "6", "1/6"],
        "answer_en": "2/3",
        "answer_hi": "2/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The value of ∫(0 to π/2) log(sinx) dx is:",
        "question_hi": "∫(0 से π/2) log(sinx) dx का मान है:",
        "options_en": ["-π/2 log2", "-π log2", "π/2 log2", "π log2"],
        "options_hi": ["-π/2 log2", "-π log2", "π/2 log2", "π log2"],
        "answer_en": "-π/2 log2",
        "answer_hi": "-π/2 log2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The number of real solutions of equation x² - 4|x| + 3 = 0 is:",
        "question_hi": "समीकरण x² - 4|x| + 3 = 0 के वास्तविक हलों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "If y = (sin⁻¹x)², then (1-x²)y'' - xy' is equal to:",
        "question_hi": "यदि y = (sin⁻¹x)², तो (1-x²)y'' - xy' बराबर है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The area bounded by curves y = x² and y = |x| is:",
        "question_hi": "वक्रों y = x² और y = |x| से घिरा क्षेत्रफल है:",
        "options_en": ["1/3", "2/3", "1", "4/3"],
        "options_hi": ["1/3", "2/3", "1", "4/3"],
        "answer_en": "1/3",
        "answer_hi": "1/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "If z is complex number such that |z| = 1, then |(z-1)/(z+1)| is:",
        "question_hi": "यदि z एक सम्मिश्र संख्या है जैसे कि |z| = 1, तो |(z-1)/(z+1)| है:",
        "options_en": ["0", "1", "|Im(z)|", "|Re(z)|"],
        "options_hi": ["0", "1", "|Im(z)|", "|Re(z)|"],
        "answer_en": "|Im(z)|",
        "answer_hi": "|Im(z)|",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The probability that in a family of 3 children, there is at least one girl is:",
        "question_hi": "3 बच्चों वाले परिवार में कम से कम एक लड़की होने की प्रायिकता है:",
        "options_en": ["1/8", "3/8", "5/8", "7/8"],
        "options_hi": ["1/8", "3/8", "5/8", "7/8"],
        "answer_en": "7/8",
        "answer_hi": "7/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The value of lim(x→0) (tanx - x)/x³ is:",
        "question_hi": "lim(x→0) (tanx - x)/x³ का मान है:",
        "options_en": ["0", "1/3", "1/2", "1"],
        "options_hi": ["0", "1/3", "1/2", "1"],
        "answer_en": "1/3",
        "answer_hi": "1/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "If α and β are roots of x² - 6x + 2 = 0, then the value of (α² + β²) is:",
        "question_hi": "यदि α और β, x² - 6x + 2 = 0 के मूल हैं, तो (α² + β²) का मान है:",
        "options_en": ["32", "34", "36", "38"],
        "options_hi": ["32", "34", "36", "38"],
        "answer_en": "32",
        "answer_hi": "32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The number of diagonals in a polygon is 35. The number of sides is:",
        "question_hi": "एक बहुभुज में विकर्णों की संख्या 35 है। भुजाओं की संख्या है:",
        "options_en": ["8", "9", "10", "11"],
        "options_hi": ["8", "9", "10", "11"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The value of ∫(e^x(1+x)/(1+x²)²) dx is:",
        "question_hi": "∫(e^x(1+x)/(1+x²)²) dx का मान है:",
        "options_en": ["e^x/(1+x²) + C", "xe^x/(1+x²) + C", "e^x/(1+x²)² + C", "xe^x/(1+x²)² + C"],
        "options_hi": ["e^x/(1+x²) + C", "xe^x/(1+x²) + C", "e^x/(1+x²)² + C", "xe^x/(1+x²)² + C"],
        "answer_en": "e^x/(1+x²) + C",
        "answer_hi": "e^x/(1+x²) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The function f(x) = x³ - 6x² + 9x + 15 has:",
        "question_hi": "फलन f(x) = x³ - 6x² + 9x + 15 है:",
        "options_en": ["One maximum and one minimum", "Only maximum", "Only minimum", "Neither maximum nor minimum"],
        "options_hi": ["एक उच्चिष्ट और एक निम्निष्ट", "केवल उच्चिष्ट", "केवल निम्निष्ट", "न तो उच्चिष्ट न निम्निष्ट"],
        "answer_en": "One maximum and one minimum",
        "answer_hi": "एक उच्चिष्ट और एक निम्निष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The value of ∫(0 to π) x/(1+sinx) dx is:",
        "question_hi": "∫(0 से π) x/(1+sinx) dx का मान है:",
        "options_en": ["π", "π/2", "2π", "π²/2"],
        "options_hi": ["π", "π/2", "2π", "π²/2"],
        "answer_en": "π",
        "answer_hi": "π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The solution of differential equation dy/dx = (x+y)/(x-y) is:",
        "question_hi": "अवकल समीकरण dy/dx = (x+y)/(x-y) का हल है:",
        "options_en": ["x² + y² = C", "x² - y² = C", "tan⁻¹(y/x) = log√(x²+y²) + C", "sin⁻¹(y/x) = log|x| + C"],
        "options_hi": ["x² + y² = C", "x² - y² = C", "tan⁻¹(y/x) = log√(x²+y²) + C", "sin⁻¹(y/x) = log|x| + C"],
        "answer_en": "tan⁻¹(y/x) = log√(x²+y²) + C",
        "answer_hi": "tan⁻¹(y/x) = log√(x²+y²) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The value of ∫(√(1+sinx)) dx is:",
        "question_hi": "∫(√(1+sinx)) dx का मान है:",
        "options_en": ["2(sin(x/2) - cos(x/2)) + C", "2(sin(x/2) + cos(x/2)) + C", "√2(sin(x/2) - cos(x/2)) + C", "√2(sin(x/2) + cos(x/2)) + C"],
        "options_hi": ["2(sin(x/2) - cos(x/2)) + C", "2(sin(x/2) + cos(x/2)) + C", "√2(sin(x/2) - cos(x/2)) + C", "√2(sin(x/2) + cos(x/2)) + C"],
        "answer_en": "2(sin(x/2) - cos(x/2)) + C",
        "answer_hi": "2(sin(x/2) - cos(x/2)) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of ∫(1/(x√(x²-1))) dx is:",
        "question_hi": "∫(1/(x√(x²-1))) dx का मान है:",
        "options_en": ["sec⁻¹x + C", "cos⁻¹(1/x) + C", "tan⁻¹(√(x²-1)) + C", "All of these"],
        "options_hi": ["sec⁻¹x + C", "cos⁻¹(1/x) + C", "tan⁻¹(√(x²-1)) + C", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The value of ∫(x²/(x²+1)(x²+4)) dx is:",
        "question_hi": "∫(x²/(x²+1)(x²+4)) dx का मान है:",
        "options_en": ["1/3 tan⁻¹x - 2/3 tan⁻¹(x/2) + C", "1/3 tan⁻¹x + 2/3 tan⁻¹(x/2) + C", "tan⁻¹x - tan⁻¹(x/2) + C", "1/2 tan⁻¹x - 1/4 tan⁻¹(x/2) + C"],
        "options_hi": ["1/3 tan⁻¹x - 2/3 tan⁻¹(x/2) + C", "1/3 tan⁻¹x + 2/3 tan⁻¹(x/2) + C", "tan⁻¹x - tan⁻¹(x/2) + C", "1/2 tan⁻¹x - 1/4 tan⁻¹(x/2) + C"],
        "answer_en": "1/3 tan⁻¹x - 2/3 tan⁻¹(x/2) + C",
        "answer_hi": "1/3 tan⁻¹x - 2/3 tan⁻¹(x/2) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The value of ∫(sin²x cos²x) dx is:",
        "question_hi": "∫(sin²x cos²x) dx का मान है:",
        "options_en": ["x/8 - sin4x/32 + C", "x/8 + sin4x/32 + C", "x/4 - sin4x/16 + C", "x/4 + sin4x/16 + C"],
        "options_hi": ["x/8 - sin4x/32 + C", "x/8 + sin4x/32 + C", "x/4 - sin4x/16 + C", "x/4 + sin4x/16 + C"],
        "answer_en": "x/8 - sin4x/32 + C",
        "answer_hi": "x/8 - sin4x/32 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The value of ∫(√(tanx)) dx is:",
        "question_hi": "∫(√(tanx)) dx का मान है:",
        "options_en": ["1/√2 tan⁻¹((√(tanx)-1)/√(2tanx)) + 1/2√2 log|(√(tanx)-√2√(tanx)+1)/(√(tanx)+√2√(tanx)+1)| + C", "1/√2 tan⁻¹((√(tanx)-1)/√(2tanx)) + C", "1/2√2 log|(√(tanx)-√2√(tanx)+1)/(√(tanx)+√2√(tanx)+1)| + C", "None"],
        "options_hi": ["1/√2 tan⁻¹((√(tanx)-1)/√(2tanx)) + 1/2√2 log|(√(tanx)-√2√(tanx)+1)/(√(tanx)+√2√(tanx)+1)| + C", "1/√2 tan⁻¹((√(tanx)-1)/√(2tanx)) + C", "1/2√2 log|(√(tanx)-√2√(tanx)+1)/(√(tanx)+√2√(tanx)+1)| + C", "कोई नहीं"],
        "answer_en": "1/√2 tan⁻¹((√(tanx)-1)/√(2tanx)) + 1/2√2 log|(√(tanx)-√2√(tanx)+1)/(√(tanx)+√2√(tanx)+1)| + C",
        "answer_hi": "1/√2 tan⁻¹((√(tanx)-1)/√(2tanx)) + 1/2√2 log|(√(tanx)-√2√(tanx)+1)/(√(tanx)+√2√(tanx)+1)| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The value of ∫(1/(x(xⁿ+1))) dx is:",
        "question_hi": "∫(1/(x(xⁿ+1))) dx का मान है:",
        "options_en": ["log|xⁿ/(xⁿ+1)| + C", "1/n log|xⁿ/(xⁿ+1)| + C", "log|(xⁿ+1)/xⁿ| + C", "1/n log|(xⁿ+1)/xⁿ| + C"],
        "options_hi": ["log|xⁿ/(xⁿ+1)| + C", "1/n log|xⁿ/(xⁿ+1)| + C", "log|(xⁿ+1)/xⁿ| + C", "1/n log|(xⁿ+1)/xⁿ| + C"],
        "answer_en": "1/n log|xⁿ/(xⁿ+1)| + C",
        "answer_hi": "1/n log|xⁿ/(xⁿ+1)| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The value of lim(x→0) (a^x - b^x)/x is:",
        "question_hi": "lim(x→0) (a^x - b^x)/x का मान है:",
        "options_en": ["log(a/b)", "log(b/a)", "log(ab)", "0"],
        "options_hi": ["log(a/b)", "log(b/a)", "log(ab)", "0"],
        "answer_en": "log(a/b)",
        "answer_hi": "log(a/b)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The number of points where f(x) = |x| + |x-1| is not differentiable is:",
        "question_hi": "बिंदुओं की संख्या जहाँ f(x) = |x| + |x-1| अवकलनीय नहीं है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The solution of differential equation x dy/dx + y = xy² is:",
        "question_hi": "अवकल समीकरण x dy/dx + y = xy² का हल है:",
        "options_en": ["y = 1/(x + Cx)", "y = 1/(x - Cx)", "y = x/(1 + Cx)", "y = x/(1 - Cx)"],
        "options_hi": ["y = 1/(x + Cx)", "y = 1/(x - Cx)", "y = x/(1 + Cx)", "y = x/(1 - Cx)"],
        "answer_en": "y = 1/(x + Cx)",
        "answer_hi": "y = 1/(x + Cx)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The value of ∫(sin³x cos⁵x) dx is:",
        "question_hi": "∫(sin³x cos⁵x) dx का मान है:",
        "options_en": ["cos⁶x/6 - cos⁸x/8 + C", "sin⁴x/4 - sin⁶x/6 + C", "cos⁴x/4 - cos⁶x/6 + C", "sin⁶x/6 - sin⁸x/8 + C"],
        "options_hi": ["cos⁶x/6 - cos⁸x/8 + C", "sin⁴x/4 - sin⁶x/6 + C", "cos⁴x/4 - cos⁶x/6 + C", "sin⁶x/6 - sin⁸x/8 + C"],
        "answer_en": "cos⁶x/6 - cos⁸x/8 + C",
        "answer_hi": "cos⁶x/6 - cos⁸x/8 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The area enclosed by ellipse x²/a² + y²/b² = 1 is:",
        "question_hi": "दीर्घवृत्त x²/a² + y²/b² = 1 से घिरा क्षेत्रफल है:",
        "options_en": ["πab", "2πab", "π(a²+b²)", "π(a²-b²)"],
        "options_hi": ["πab", "2πab", "π(a²+b²)", "π(a²-b²)"],
        "answer_en": "πab",
        "answer_hi": "πab",
        "attempted": false,
        "selected": ""
    },

    // Biology - JEE Advanced Level (76-100)
    {
        "num": 76,
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
        "num": 77,
        "question_en": "In DNA replication, the enzyme that joins Okazaki fragments is:",
        "question_hi": "DNA प्रतिकृति में, ओकाज़ाकी खंडों को जोड़ने वाला एंजाइम है:",
        "options_en": ["DNA polymerase", "DNA ligase", "Helicase", "Primase"],
        "options_hi": ["DNA पॉलीमरेज", "DNA लाइगेज", "हेलिकेज", "प्राइमेज"],
        "answer_en": "DNA ligase",
        "answer_hi": "DNA लाइगेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The hormone that stimulates glycogen breakdown in liver is:",
        "question_hi": "वह हार्मोन जो यकृत में ग्लाइकोजन विघटन को उत्तेजित करता है:",
        "options_en": ["Insulin", "Glucagon", "Adrenaline", "Both B and C"],
        "options_hi": ["इंसुलिन", "ग्लूकागॉन", "एड्रेनालाईन", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The process by which RNA is synthesized from DNA template is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा DNA टेम्पलेट से RNA संश्लेषित होता है, कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The plant hormone responsible for apical dominance is:",
        "question_hi": "शीर्ष प्रभुत्व के लिए जिम्मेदार पादप हार्मोन है:",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Auxin",
        "answer_hi": "ऑक्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The site of Calvin cycle in chloroplast is:",
        "question_hi": "क्लोरोप्लास्ट में केल्विन चक्र का स्थल है:",
        "options_en": ["Grana", "Stroma", "Thylakoid", "Matrix"],
        "options_hi": ["ग्रैना", "स्ट्रोमा", "थाइलाकोइड", "मैट्रिक्स"],
        "answer_en": "Stroma",
        "answer_hi": "स्ट्रोमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The enzyme that fixes atmospheric nitrogen in legume roots is:",
        "question_hi": "वह एंजाइम जो फलीय जड़ों में वायुमंडलीय नाइट्रोजन को स्थिर करता है:",
        "options_en": ["Nitrogenase", "Nitrate reductase", "Nitrite reductase", "Ammonia lyase"],
        "options_hi": ["नाइट्रोजिनेज", "नाइट्रेट रिडक्टेज", "नाइट्राइट रिडक्टेज", "अमोनिया लाइएज"],
        "answer_en": "Nitrogenase",
        "answer_hi": "नाइट्रोजिनेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The blood group that has both A and B antigens but no antibodies is:",
        "question_hi": "वह रक्त समूह जिसमें A और B दोनों प्रतिजन हैं लेकिन कोई प्रतिरक्षी नहीं है:",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "AB",
        "answer_hi": "AB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The hormone that regulates calcium metabolism is:",
        "question_hi": "वह हार्मोन जो कैल्शियम चयापचय को नियंत्रित करता है:",
        "options_en": ["Thyroxine", "Parathormone", "Insulin", "Adrenaline"],
        "options_hi": ["थायरोक्सिन", "पैराथॉर्मोन", "इंसुलिन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The process by which water moves through plant tissues is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा जल पादप ऊतकों से होकर गति करता है, कहलाती है:",
        "options_en": ["Transpiration", "Translocation", "Osmosis", "Diffusion"],
        "options_hi": ["वाष्पोत्सर्जन", "स्थानांतरण", "परासरण", "प्रसार"],
        "answer_en": "Translocation",
        "answer_hi": "स्थानांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The enzyme that digests proteins in small intestine is:",
        "question_hi": "छोटी आंत में प्रोटीनों को पचाने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
        "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
        "answer_en": "Trypsin",
        "answer_hi": "ट्रिप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The part of brain that controls body temperature is:",
        "question_hi": "मस्तिष्क का वह भाग जो शरीर के तापमान को नियंत्रित करता है:",
        "options_en": ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "हाइपोथैलेमस", "मेडुला"],
        "answer_en": "Hypothalamus",
        "answer_hi": "हाइपोथैलेमस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The process by which pollen grains are transferred from anther to stigma is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा परागकण पुंकेसर से वर्तिकाग्र तक स्थानांतरित होते हैं, कहलाती है:",
        "options_en": ["Fertilization", "Pollination", "Germination", "Fragmentation"],
        "options_hi": ["निषेचन", "परागण", "अंकुरण", "खंडन"],
        "answer_en": "Pollination",
        "answer_hi": "परागण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The vitamin that is synthesized in skin by sunlight is:",
        "question_hi": "वह विटामिन जो सूर्य के प्रकाश द्वारा त्वचा में संश्लेषित होता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The process by which plants lose water vapor is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे जल वाष्प खोते हैं, कहलाती है:",
        "options_en": ["Transpiration", "Respiration", "Photosynthesis", "Osmosis"],
        "options_hi": ["वाष्पोत्सर्जन", "श्वसन", "प्रकाश संश्लेषण", "परासरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
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
        "num": 92,
        "question_en": "The site of protein synthesis in cell is:",
        "question_hi": "कोशिका में प्रोटीन संश्लेषण का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
        "question_en": "The process by which DNA makes RNA is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा DNA, RNA बनाता है, कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The vitamin whose deficiency causes scurvy is:",
        "question_hi": "वह विटामिन जिसकी कमी से स्कर्वी होता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
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
        "num": 99,
        "question_en": "The enzyme that digests fats is:",
        "question_hi": "वह एंजाइम जो वसा को पचाता है:",
        "options_en": ["Amylase", "Pepsin", "Lipase", "Trypsin"],
        "options_hi": ["एमाइलेज", "पेप्सिन", "लाइपेज", "ट्रिप्सिन"],
        "answer_en": "Lipase",
        "answer_hi": "लाइपेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The part of flower that produces pollen grains is:",
        "question_hi": "फूल का वह भाग जो परागकण उत्पन्न करता है:",
        "options_en": ["Stigma", "Anther", "Ovary", "Style"],
        "options_hi": ["वर्तिकाग्र", "पुंकेसर", "अंडाशय", "वर्तिका"],
        "answer_en": "Anther",
        "answer_hi": "पुंकेसर",
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