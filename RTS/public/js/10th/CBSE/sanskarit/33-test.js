const questions = [
    {
        "num": 1,
        "question_hi": "अकारान्त पुंल्लिङ्ग शब्द कौन सा है?",
        "options_hi": ["राम", "लता", "मुनि", "नदी"],
        "answer_hi": "राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "आकारान्त स्त्रीलिङ्ग शब्द कौन सा है?",
        "options_hi": ["लता", "राम", "गुरु", "मुनि"],
        "answer_hi": "लता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "राम शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामः", "रामम्", "रामेण", "रामाय"],
        "answer_hi": "रामः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "लता शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["लता", "लताम्", "लतया", "लतायै"],
        "answer_hi": "लता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "राम शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामम्", "रामः", "रामेण", "रामस्य"],
        "answer_hi": "रामम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "लता शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["लताम्", "लता", "लतया", "लतायाः"],
        "answer_hi": "लताम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "राम शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामेण", "रामाय", "रामात्", "रामे"],
        "answer_hi": "रामेण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "लता शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["लतया", "लतायै", "लतायाः", "लतायाम्"],
        "answer_hi": "लतया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "राम शब्द की चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामाय", "रामेण", "रामात्", "रामे"],
        "answer_hi": "रामाय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "लता शब्द की चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["लतायै", "लतया", "लतायाः", "लतायाम्"],
        "answer_hi": "लतायै",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "राम शब्द की पञ्चमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामात्", "रामेण", "रामाय", "रामस्य"],
        "answer_hi": "रामात्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "लता शब्द की पञ्चमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["लतायाः", "लतया", "लतायै", "लतायाम्"],
        "answer_hi": "लतायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "राम शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामस्य", "रामे", "रामात्", "रामम्"],
        "answer_hi": "रामस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "लता शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["लतायाः", "लतायाम्", "लतायै", "लतया"],
        "answer_hi": "लतायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "राम शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामे", "रामस्य", "रामात्", "रामम्"],
        "answer_hi": "रामे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "लता शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["लतायाम्", "लतायाः", "लतायै", "लतया"],
        "answer_hi": "लतायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "राम शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["रामौ", "रामाः", "रामाभ्याम्", "रामयोः"],
        "answer_hi": "रामौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "लता शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["लते", "लताः", "लताभ्याम्", "लतयोः"],
        "answer_hi": "लते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "राम शब्द की प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["रामाः", "रामौ", "रामैः", "रामेषु"],
        "answer_hi": "रामाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "लता शब्द की प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["लताः", "लते", "लताभिः", "लतासु"],
        "answer_hi": "लताः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "इकारान्त पुंल्लिङ्ग शब्द कौन सा है?",
        "options_hi": ["मुनि", "नदी", "गुरु", "धेनु"],
        "answer_hi": "मुनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "ईकारान्त स्त्रीलिङ्ग शब्द कौन सा है?",
        "options_hi": ["नदी", "मुनि", "लता", "राम"],
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "मुनि शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनिः", "मुनिम्", "मुनिना", "मुनये"],
        "answer_hi": "मुनिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "नदी शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["नदी", "नदीम्", "नद्या", "नद्यै"],
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "मुनि शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनिम्", "मुनिः", "मुनिना", "मुनेः"],
        "answer_hi": "मुनिम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "नदी शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["नदीम्", "नदी", "नद्या", "नद्याः"],
        "answer_hi": "नदीम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "मुनि शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनिना", "मुनये", "मुनेः", "मुनौ"],
        "answer_hi": "मुनिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "नदी शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["नद्या", "नद्यै", "नद्याः", "नद्याम्"],
        "answer_hi": "नद्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "मुनि शब्द की चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनये", "मुनिना", "मुनेः", "मुनौ"],
        "answer_hi": "मुनये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "नदी शब्द की चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["नद्यै", "नद्या", "नद्याः", "नद्याम्"],
        "answer_hi": "नद्यै",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "मुनि शब्द की पञ्चमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनेः", "मुनिना", "मुनये", "मुन्योः"],
        "answer_hi": "मुनेः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "नदी शब्द की पञ्चमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["नद्याः", "नद्या", "नद्यै", "नद्याम्"],
        "answer_hi": "नद्याः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "मुनि शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनेः", "मुनौ", "मुनेभ्यः", "मुनिषु"],
        "answer_hi": "मुनेः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "नदी शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["नद्याः", "नद्याम्", "नद्यै", "नद्या"],
        "answer_hi": "नद्याः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "मुनि शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनौ", "मुनेः", "मुनये", "मुनिम्"],
        "answer_hi": "मुनौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "नदी शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["नद्याम्", "नद्याः", "नद्यै", "नद्या"],
        "answer_hi": "नद्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "मुनि शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["मुनी", "मुनयः", "मुनिभ्याम्", "मुन्योः"],
        "answer_hi": "मुनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "नदी शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["नद्यौ", "नद्यः", "नदीभ्याम्", "नद्योः"],
        "answer_hi": "नद्यौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "मुनि शब्द की प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["मुनयः", "मुनी", "मुनिभिः", "मुनिषु"],
        "answer_hi": "मुनयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "नदी शब्द की प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["नद्यः", "नद्यौ", "नदीभिः", "नदीषु"],
        "answer_hi": "नद्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "उकारान्त पुंल्लिङ्ग शब्द कौन सा है?",
        "options_hi": ["गुरु", "धेनु", "पितृ", "राम"],
        "answer_hi": "गुरु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "ऊकारान्त स्त्रीलिङ्ग शब्द कौन सा है?",
        "options_hi": ["धेनु", "गुरु", "लता", "नदी"],
        "answer_hi": "धेनु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "गुरु शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरुः", "गुरुम्", "गुरुणा", "गुरवे"],
        "answer_hi": "गुरुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "धेनु शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेनुः", "धेनुम्", "धेन्वा", "धेनवे"],
        "answer_hi": "धेनुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "गुरु शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरुम्", "गुरुः", "गुरुणा", "गुरोः"],
        "answer_hi": "गुरुम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "धेनु शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेनुम्", "धेनुः", "धेन्वा", "धेनोः"],
        "answer_hi": "धेनुम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "गुरु शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरुणा", "गुरवे", "गुरोः", "गुरौ"],
        "answer_hi": "गुरुणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "धेनु शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेन्वा", "धेनवे", "धेनोः", "धेन्वाम्"],
        "answer_hi": "धेन्वा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "गुरु शब्द की चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरवे", "गुरुणा", "गुरोः", "गुरौ"],
        "answer_hi": "गुरवे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "धेनु शब्द की चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेनवे", "धेन्वा", "धेनोः", "धेन्वाम्"],
        "answer_hi": "धेनवे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "गुरु शब्द की पञ्चमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरोः", "गुरुणा", "गुरवे", "गुर्वोः"],
        "answer_hi": "गुरोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "धेनु शब्द की पञ्चमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेनोः", "धेन्वा", "धेनवे", "धेन्वाम्"],
        "answer_hi": "धेनोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "गुरु शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरोः", "गुरौ", "गुरुभ्यः", "गुरुषु"],
        "answer_hi": "गुरोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "धेनु शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेनोः", "धेन्वाम्", "धेनवे", "धेन्वा"],
        "answer_hi": "धेनोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "गुरु शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरौ", "गुरोः", "गुरवे", "गुरुम्"],
        "answer_hi": "गुरौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "धेनु शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेन्वाम्", "धेनोः", "धेनवे", "धेन्वा"],
        "answer_hi": "धेन्वाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "गुरु शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["गुरू", "गुरवः", "गुरुभ्याम्", "गुर्वोः"],
        "answer_hi": "गुरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "धेनु शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["धेनू", "धेनवः", "धेनुभ्याम्", "धेन्वोः"],
        "answer_hi": "धेनू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "गुरु शब्द की प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["गुरवः", "गुरू", "गुरुभिः", "गुरुषु"],
        "answer_hi": "गुरवः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "धेनु शब्द की प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["धेनवः", "धेनू", "धेनुभिः", "धेनुषु"],
        "answer_hi": "धेनवः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "ऋकारान्त शब्द कौन सा है?",
        "options_hi": ["पितृ", "मातृ", "राम", "लता"],
        "answer_hi": "पितृ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "पितृ शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["पिता", "पितरम्", "पित्रा", "पित्रे"],
        "answer_hi": "पिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "पितृ शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["पितरम्", "पिता", "पित्रा", "पितुः"],
        "answer_hi": "पितरम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "पितृ शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["पित्रा", "पित्रे", "पितुः", "पितरि"],
        "answer_hi": "पित्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "पितृ शब्द की चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["पित्रे", "पित्रा", "पितुः", "पितरि"],
        "answer_hi": "पित्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "पितृ शब्द की पञ्चमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["पितुः", "पित्रा", "पित्रे", "पित्रोः"],
        "answer_hi": "पितुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "पितृ शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["पितुः", "पितरि", "पितृभ्यः", "पितृषु"],
        "answer_hi": "पितुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "पितृ शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["पितरि", "पितुः", "पित्रे", "पितरम्"],
        "answer_hi": "पितरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "पितृ शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["पितरौ", "पितरः", "पितृभ्याम्", "पित्रोः"],
        "answer_hi": "पितरौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "पितृ शब्द की प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["पितरः", "पितरौ", "पितृभिः", "पितृषु"],
        "answer_hi": "पितरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "एक शब्द की प्रथमा विभक्ति पुंल्लिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकः", "एकम्", "एकेन", "एकस्मै"],
        "answer_hi": "एकः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "एक शब्द की प्रथमा विभक्ति स्त्रीलिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एका", "एकाम्", "एकया", "एकस्यै"],
        "answer_hi": "एका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "एक शब्द की प्रथमा विभक्ति नपुंसकलिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकम्", "एकः", "एकेन", "एकस्मै"],
        "answer_hi": "एकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "द्वि शब्द की प्रथमा विभक्ति पुंल्लिङ्ग में द्विवचन में क्या है?",
        "options_hi": ["द्वौ", "द्वौ", "द्वाभ्याम्", "द्वयोः"],
        "answer_hi": "द्वौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "द्वि शब्द की प्रथमा विभक्ति स्त्रीलिङ्ग में द्विवचन में क्या है?",
        "options_hi": ["द्वे", "द्वे", "द्वाभ्याम्", "द्वयोः"],
        "answer_hi": "द्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "त्रि शब्द की प्रथमा विभक्ति पुंल्लिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रयः", "त्रीणि", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "त्रि शब्द की प्रथमा विभक्ति स्त्रीलिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रयः", "त्रीणि", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "त्रि शब्द की प्रथमा विभक्ति नपुंसकलिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रीणि", "त्रयः", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रीणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "एक शब्द की द्वितीया विभक्ति पुंल्लिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकम्", "एकः", "एकेन", "एकस्मात्"],
        "answer_hi": "एकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "एक शब्द की द्वितीया विभक्ति स्त्रीलिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकाम्", "एका", "एकया", "एकस्याः"],
        "answer_hi": "एकाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "एक शब्द की द्वितीया विभक्ति नपुंसकलिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकम्", "एकः", "एकेन", "एकस्मै"],
        "answer_hi": "एकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "द्वि शब्द की द्वितीया विभक्ति पुंल्लिङ्ग में द्विवचन में क्या है?",
        "options_hi": ["द्वौ", "द्वौ", "द्वाभ्याम्", "द्वयोः"],
        "answer_hi": "द्वौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "द्वि शब्द की द्वितीया विभक्ति स्त्रीलिङ्ग में द्विवचन में क्या है?",
        "options_hi": ["द्वे", "द्वे", "द्वाभ्याम्", "द्वयोः"],
        "answer_hi": "द्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "त्रि शब्द की द्वितीया विभक्ति पुंल्लिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रीन्", "त्रीणि", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रीन्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "त्रि शब्द की द्वितीया विभक्ति स्त्रीलिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रीः", "त्रीणि", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रीः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "त्रि शब्द की द्वितीया विभक्ति नपुंसकलिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रीणि", "त्रीन्", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रीणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "एक शब्द की तृतीया विभक्ति पुंल्लिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकेन", "एकस्मै", "एकस्मात्", "एकस्मिन्"],
        "answer_hi": "एकेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "एक शब्द की तृतीया विभक्ति स्त्रीलिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकया", "एकस्यै", "एकस्याः", "एकस्याम्"],
        "answer_hi": "एकया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "एक शब्द की तृतीया विभक्ति नपुंसकलिङ्ग में एकवचन में क्या है?",
        "options_hi": ["एकेन", "एकस्मै", "एकस्मात्", "एकस्मिन्"],
        "answer_hi": "एकेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "द्वि शब्द की तृतीया विभक्ति पुंल्लिङ्ग में द्विवचन में क्या है?",
        "options_hi": ["द्वाभ्याम्", "द्वाभ्याम्", "द्वयोः", "द्वयोः"],
        "answer_hi": "द्वाभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "द्वि शब्द की तृतीया विभक्ति स्त्रीलिङ्ग में द्विवचन में क्या है?",
        "options_hi": ["द्वाभ्याम्", "द्वाभ्याम्", "द्वयोः", "द्वयोः"],
        "answer_hi": "द्वाभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "त्रि शब्द की तृतीया विभक्ति पुंल्लिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रिभिः", "त्रिभिः", "त्रिषु", "त्रिषु"],
        "answer_hi": "त्रिभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "त्रि शब्द की तृतीया विभक्ति स्त्रीलिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रिभिः", "त्रिभिः", "त्रिषु", "त्रिषु"],
        "answer_hi": "त्रिभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "त्रि शब्द की तृतीया विभक्ति नपुंसकलिङ्ग में बहुवचन में क्या है?",
        "options_hi": ["त्रिभिः", "त्रिभिः", "त्रिषु", "त्रिषु"],
        "answer_hi": "त्रिभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "एकवचन का विपरीत क्या है?",
        "options_hi": ["बहुवचन", "द्विवचन", "विभक्ति", "लिङ्ग"],
        "answer_hi": "बहुवचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "प्रथमा विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["कर्ता", "कर्म", "करण", "सम्प्रदान"],
        "answer_hi": "कर्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "द्वितीया विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["कर्म", "कर्ता", "करण", "अपादान"],
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "तृतीया विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["करण", "कर्ता", "कर्म", "सम्प्रदान"],
        "answer_hi": "करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विभक्तियों की संख्या कितनी है?",
        "options_hi": ["सात", "आठ", "छह", "पाँच"],
        "answer_hi": "सात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "लिंगों की संख्या कितनी है?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "hindi";
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