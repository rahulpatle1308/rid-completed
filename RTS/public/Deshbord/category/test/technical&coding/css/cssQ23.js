const questions = [
   {
    num: 1,
    question_en: "Which CSS property is used to create a transition effect?",
    question_hi: "ट्रांजिशन इफेक्ट बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["transition", "transform", "animation", "filter"],
    options_hi: ["ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "एनिमेशन (animation)", "फिल्टर (filter)"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन (transition)",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property controls the duration of a CSS transition?",
    question_hi: "CSS ट्रांजिशन की अवधि को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["transition-duration", "transition-delay", "animation-duration", "animation-delay"],
    options_hi: ["ट्रांजिशन-ड्यूरेशन (transition-duration)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-duration",
    answer_hi: "ट्रांजिशन-ड्यूरेशन (transition-duration)",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property defines the CSS properties to which the transition effect applies?",
    question_hi: "CSS प्रॉपर्टीज़ को कौन-सी प्रॉपर्टी निर्दिष्ट करती है जिन पर ट्रांजिशन प्रभाव लागू होता है?",
    options_en: ["transition-property", "transition-duration", "animation-name", "animation-timing-function"],
    options_hi: ["ट्रांजिशन-प्रॉपर्टी (transition-property)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-नाम (animation-name)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)"],
    answer_en: "transition-property",
    answer_hi: "ट्रांजिशन-प्रॉपर्टी (transition-property)",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property controls the timing function of a CSS transition?",
    question_hi: "CSS ट्रांजिशन के टाइमिंग फंक्शन को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["transition-timing-function", "animation-timing-function", "transition-delay", "animation-delay"],
    options_hi: ["ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-timing-function",
    answer_hi: "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property specifies the delay before a transition starts?",
    question_hi: "ट्रांजिशन शुरू होने से पहले की देरी को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["transition-delay", "animation-delay", "transition-duration", "animation-duration"],
    options_hi: ["ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-ड्यूरेशन (animation-duration)"],
    answer_en: "transition-delay",
    answer_hi: "ट्रांजिशन-डिले (transition-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property is used to define animations?",
    question_hi: "एनिमेशन को परिभाषित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["animation", "transition", "transform", "filter"],
    options_hi: ["एनिमेशन (animation)", "ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "फिल्टर (filter)"],
    answer_en: "animation",
    answer_hi: "एनिमेशन (animation)",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property specifies the name of the keyframe animation to be applied?",
    question_hi: "किस प्रॉपर्टी से लागू किए जाने वाले कीफ्रेम एनिमेशन का नाम निर्दिष्ट किया जाता है?",
    options_en: ["animation-name", "animation-duration", "animation-timing-function", "animation-delay"],
    options_hi: ["एनिमेशन-नाम (animation-name)", "एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-name",
    answer_hi: "एनिमेशन-नाम (animation-name)",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which CSS property defines how long an animation takes to complete one cycle?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेशन के एक चक्र को पूरा करने की अवधि निर्दिष्ट करती है?",
    options_en: ["animation-duration", "animation-delay", "transition-duration", "transition-delay"],
    options_hi: ["एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "ट्रांजिशन-डिले (transition-delay)"],
    answer_en: "animation-duration",
    answer_hi: "एनिमेशन-ड्यूरेशन (animation-duration)",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property controls the speed curve of an animation?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन की स्पीड कर्व को नियंत्रित करती है?",
    options_en: ["animation-timing-function", "animation-delay", "transition-timing-function", "transition-delay"],
    options_hi: ["एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "ट्रांजिशन-डिले (transition-delay)"],
    answer_en: "animation-timing-function",
    answer_hi: "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property specifies the number of times an animation should play?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेशन को कितनी बार चलाना है यह निर्धारित करती है?",
    options_en: ["animation-iteration-count", "animation-direction", "animation-fill-mode", "animation-delay"],
    options_hi: ["एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-iteration-count",
    answer_hi: "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property defines whether the animation should play in reverse on alternate cycles?",
    question_hi: "कौन-सी प्रॉपर्टी निर्दिष्ट करती है कि एनिमेशन वैकल्पिक चक्रों में उल्टी दिशा में चले?",
    options_en: ["animation-direction", "animation-iteration-count", "animation-fill-mode", "animation-delay"],
    options_hi: ["एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-direction",
    answer_hi: "एनिमेशन-डायरेक्शन (animation-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which CSS property specifies what styles are applied before and after animation execution?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेशन शुरू होने से पहले और खत्म होने के बाद कौन से स्टाइल्स लागू होंगे यह निर्दिष्ट करती है?",
    options_en: ["animation-fill-mode", "animation-iteration-count", "animation-direction", "animation-delay"],
    options_hi: ["एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-fill-mode",
    answer_hi: "एनिमेशन-फिल-मोड (animation-fill-mode)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property specifies the delay before an animation starts?",
    question_hi: "एनिमेशन शुरू होने से पहले की देरी को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["animation-delay", "transition-delay", "animation-duration", "transition-duration"],
    options_hi: ["एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)", "ट्रांजिशन-ड्यूरेशन (transition-duration)"],
    answer_en: "animation-delay",
    answer_hi: "एनिमेशन-डिले (animation-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which at-rule is used to define keyframes for CSS animations?",
    question_hi: "CSS एनिमेशन के लिए कीफ्रेम्स को परिभाषित करने के लिए कौन-सा at-rule उपयोग होता है?",
    options_en: ["@keyframes", "@media", "@font-face", "@supports"],
    options_hi: ["@keyframes", "@media", "@font-face", "@supports"],
    answer_en: "@keyframes",
    answer_hi: "@keyframes",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which keyword specifies the start state of an animation in @keyframes?",
    question_hi: "@keyframes में एनिमेशन की प्रारंभिक स्थिति को कौन-सा कीवर्ड निर्दिष्ट करता है?",
    options_en: ["from", "to", "start", "begin"],
    options_hi: ["from", "to", "start", "begin"],
    answer_en: "from",
    answer_hi: "from",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which keyword specifies the end state of an animation in @keyframes?",
    question_hi: "@keyframes में एनिमेशन की अंतिम स्थिति को कौन-सा कीवर्ड निर्दिष्ट करता है?",
    options_en: ["to", "from", "end", "finish"],
    options_hi: ["to", "from", "end", "finish"],
    answer_en: "to",
    answer_hi: "to",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the default value of animation-iteration-count?",
    question_hi: "animation-iteration-count की डिफ़ॉल्ट वैल्यू क्या है?",
    options_en: ["1", "infinite", "0", "auto"],
    options_hi: ["1", "infinite", "0", "auto"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property is used to pause and resume CSS animations?",
    question_hi: "CSS एनिमेशन को पॉज और रेज़्यूम करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["animation-play-state", "animation-delay", "animation-direction", "animation-fill-mode"],
    options_hi: ["एनिमेशन-प्ले-स्टेट (animation-play-state)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-फिल-मोड (animation-fill-mode)"],
    answer_en: "animation-play-state",
    answer_hi: "एनिमेशन-प्ले-स्टेट (animation-play-state)",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which value of animation-play-state causes the animation to pause?",
    question_hi: "animation-play-state का कौन-सा मान एनिमेशन को पॉज करता है?",
    options_en: ["paused", "running", "stopped", "halted"],
    options_hi: ["paused", "running", "stopped", "halted"],
    answer_en: "paused",
    answer_hi: "paused",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which value of animation-play-state causes the animation to run?",
    question_hi: "animation-play-state का कौन-सा मान एनिमेशन को चलाता है?",
    options_en: ["running", "paused", "stopped", "halted"],
    options_hi: ["running", "paused", "stopped", "halted"],
    answer_en: "running",
    answer_hi: "running",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which shorthand property can be used to set all animation properties at once?",
    question_hi: "सभी एनिमेशन प्रॉपर्टीज़ को एक साथ सेट करने के लिए कौन-सी शॉर्टहैंड प्रॉपर्टी उपयोग होती है?",
    options_en: ["animation", "transition", "transform", "keyframes"],
    options_hi: ["एनिमेशन (animation)", "ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "कीफ्रेम्स (keyframes)"],
    answer_en: "animation",
    answer_hi: "एनिमेशन (animation)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which timing function causes an animation to start slowly, speed up, and then slow down at the end?",
    question_hi: "कौन-सी टाइमिंग फंक्शन एनिमेशन को धीरे शुरू करने, तेज करने, और अंत में फिर से धीरे करने का प्रभाव देती है?",
    options_en: ["ease-in-out", "linear", "ease-in", "ease-out"],
    options_hi: ["ease-in-out", "linear", "ease-in", "ease-out"],
    answer_en: "ease-in-out",
    answer_hi: "ease-in-out",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which timing function makes an animation proceed at a constant speed?",
    question_hi: "कौन-सी टाइमिंग फंक्शन एनिमेशन को समान गति से चलाती है?",
    options_en: ["linear", "ease-in", "ease-out", "ease-in-out"],
    options_hi: ["linear", "ease-in", "ease-out", "ease-in-out"],
    answer_en: "linear",
    answer_hi: "linear",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property specifies whether an animation should play forwards, backwards, or both?",
    question_hi: "कौन-सी CSS प्रॉपर्टी यह निर्दिष्ट करती है कि एनिमेशन आगे, पीछे या दोनों दिशाओं में चले?",
    options_en: ["animation-fill-mode", "animation-direction", "animation-iteration-count", "animation-play-state"],
    options_hi: ["एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-प्ले-स्टेट (animation-play-state)"],
    answer_en: "animation-fill-mode",
    answer_hi: "एनिमेशन-फिल-मोड (animation-fill-mode)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property specifies the easing function for a CSS animation?",
    question_hi: "CSS एनिमेशन के लिए ईजिंग फंक्शन को कौन-सी प्रॉपर्टी निर्दिष्ट करती है?",
    options_en: ["animation-timing-function", "animation-delay", "animation-direction", "animation-iteration-count"],
    options_hi: ["एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)"],
    answer_en: "animation-timing-function",
    answer_hi: "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property can be used to specify multiple transitions?",
    question_hi: "कौन-सी CSS प्रॉपर्टी का उपयोग कई ट्रांजिशन को निर्दिष्ट करने के लिए किया जाता है?",
    options_en: ["transition", "animation", "transform", "transition-property"],
    options_hi: ["ट्रांजिशन (transition)", "एनिमेशन (animation)", "ट्रांसफॉर्म (transform)", "ट्रांजिशन-प्रॉपर्टी (transition-property)"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन (transition)",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property defines the delay before a transition starts for multiple transitions individually?",
    question_hi: "कौन-सी प्रॉपर्टी कई ट्रांजिशन के लिए अलग-अलग देरी निर्दिष्ट करती है?",
    options_en: ["transition-delay", "animation-delay", "transition-duration", "animation-duration"],
    options_hi: ["ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-ड्यूरेशन (animation-duration)"],
    answer_en: "transition-delay",
    answer_hi: "ट्रांजिशन-डिले (transition-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Can CSS transitions animate between multiple CSS property values?",
    question_hi: "क्या CSS ट्रांजिशन कई CSS प्रॉपर्टी मानों के बीच एनिमेट कर सकते हैं?",
    options_en: ["Yes", "No", "Only with JavaScript", "Only with keyframes"],
    options_hi: ["हाँ", "नहीं", "सिर्फ JavaScript के साथ", "सिर्फ कीफ्रेम्स के साथ"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which of these properties cannot be transitioned?",
    question_hi: "इनमें से कौन-सी प्रॉपर्टी ट्रांजिशन नहीं हो सकती?",
    options_en: ["display", "opacity", "color", "height"],
    options_hi: ["डिस्प्ले (display)", "अपारदर्शिता (opacity)", "रंग (color)", "ऊँचाई (height)"],
    answer_en: "display",
    answer_hi: "डिस्प्ले (display)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property controls the point of origin for transformations and animations?",
    question_hi: "ट्रांसफॉर्मेशन और एनिमेशन के लिए उत्पत्ति बिंदु को नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["transform-origin", "animation-origin", "transition-origin", "transform-position"],
    options_hi: ["ट्रांसफॉर्म-ओरिजिन (transform-origin)", "एनिमेशन-ओरिजिन (animation-origin)", "ट्रांजिशन-ओरिजिन (transition-origin)", "ट्रांसफॉर्म-पोजीशन (transform-position)"],
    answer_en: "transform-origin",
    answer_hi: "ट्रांसफॉर्म-ओरिजिन (transform-origin)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property allows an animation to run infinitely?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन को अनंत बार चलाने की अनुमति देती है?",
    options_en: ["animation-iteration-count", "animation-duration", "animation-delay", "animation-direction"],
    options_hi: ["एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)"],
    answer_en: "animation-iteration-count",
    answer_hi: "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which animation-fill-mode value keeps the animation style after it finishes?",
    question_hi: "एनिमेशन-फिल-मोड का कौन-सा मान एनिमेशन के खत्म होने के बाद उसका स्टाइल बनाए रखता है?",
    options_en: ["forwards", "backwards", "none", "both"],
    options_hi: ["फॉरवर्ड्स (forwards)", "बैकवर्ड्स (backwards)", "नन (none)", "बोथ (both)"],
    answer_en: "forwards",
    answer_hi: "फॉरवर्ड्स (forwards)",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the direction of an animation's play?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन के प्ले की दिशा को नियंत्रित करती है?",
    options_en: ["animation-direction", "animation-delay", "animation-fill-mode", "animation-play-state"],
    options_hi: ["एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-प्ले-स्टेट (animation-play-state)"],
    answer_en: "animation-direction",
    answer_hi: "एनिमेशन-डायरेक्शन (animation-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which of the following is NOT a valid value for animation-direction?",
    question_hi: "एनिमेशन-डायरेक्शन के लिए निम्नलिखित में से कौन-सा मान मान्य नहीं है?",
    options_en: ["forward", "reverse", "alternate", "alternate-reverse"],
    options_hi: ["फॉरवर्ड (forward)", "रिवर्स (reverse)", "अल्टरनेट (alternate)", "अल्टरनेट-रिवर्स (alternate-reverse)"],
    answer_en: "forward",
    answer_hi: "फॉरवर्ड (forward)",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS function is used to specify timing functions in animations and transitions?",
    question_hi: "एनिमेशन और ट्रांजिशन में टाइमिंग फंक्शन को निर्दिष्ट करने के लिए कौन-सा CSS फंक्शन उपयोग होता है?",
    options_en: ["cubic-bezier()", "linear()", "ease()", "steps()"],
    options_hi: ["cubic-bezier()", "linear()", "ease()", "steps()"],
    answer_en: "cubic-bezier()",
    answer_hi: "cubic-bezier()",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property controls the number of times a transition runs?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ट्रांजिशन के कितनी बार चलने को नियंत्रित करती है?",
    options_en: ["No CSS property controls this", "transition-iteration-count", "animation-iteration-count", "transition-duration"],
    options_hi: ["इसका नियंत्रण कोई CSS प्रॉपर्टी नहीं करती", "ट्रांजिशन-इटरेशन-काउंट (transition-iteration-count)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "ट्रांजिशन-ड्यूरेशन (transition-duration)"],
    answer_en: "No CSS property controls this",
    answer_hi: "इसका नियंत्रण कोई CSS प्रॉपर्टी नहीं करती",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property controls the starting state of an animation in keyframes?",
    question_hi: "कीफ्रेम्स में एनिमेशन की प्रारंभिक स्थिति को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["from", "to", "start", "begin"],
    options_hi: ["from", "to", "start", "begin"],
    answer_en: "from",
    answer_hi: "from",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the purpose of the 'steps()' timing function in CSS animations?",
    question_hi: "CSS एनिमेशन में 'steps()' टाइमिंग फंक्शन का उद्देश्य क्या है?",
    options_en: ["Creates a stepped animation", "Creates a smooth animation", "Creates a delay", "Controls iteration count"],
    options_hi: ["एक स्टेप्ड एनिमेशन बनाना", "एक स्मूद एनिमेशन बनाना", "एक देरी बनाना", "इटरेशन काउंट नियंत्रित करना"],
    answer_en: "Creates a stepped animation",
    answer_hi: "एक स्टेप्ड एनिमेशन बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property controls whether an animation plays in reverse on odd or even iterations?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि एनिमेशन विषम या सम इटरेशन में उल्टी दिशा में चले?",
    options_en: ["animation-direction", "animation-iteration-count", "animation-play-state", "animation-delay"],
    options_hi: ["एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-प्ले-स्टेट (animation-play-state)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-direction",
    answer_hi: "एनिमेशन-डायरेक्शन (animation-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property specifies if an animation should remain visible after it finishes?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन खत्म होने के बाद भी इसे दृश्यमान बनाए रखती है?",
    options_en: ["animation-fill-mode", "animation-delay", "animation-iteration-count", "animation-direction"],
    options_hi: ["एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-डायरेक्शन (animation-direction)"],
    answer_en: "animation-fill-mode",
    answer_hi: "एनिमेशन-फिल-मोड (animation-fill-mode)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which animation-play-state value causes an animation to run normally?",
    question_hi: "एनिमेशन-प्ले-स्टेट का कौन-सा मान एनिमेशन को सामान्य रूप से चलाता है?",
    options_en: ["running", "paused", "stopped", "halted"],
    options_hi: ["running", "paused", "stopped", "halted"],
    answer_en: "running",
    answer_hi: "running",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property defines whether an animation is playing or paused?",
    question_hi: "कौन-सी CSS प्रॉपर्टी यह निर्दिष्ट करती है कि एनिमेशन चल रहा है या पॉज है?",
    options_en: ["animation-play-state", "animation-delay", "animation-direction", "animation-fill-mode"],
    options_hi: ["एनिमेशन-प्ले-स्टेट (animation-play-state)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-फिल-मोड (animation-fill-mode)"],
    answer_en: "animation-play-state",
    answer_hi: "एनिमेशन-प्ले-स्टेट (animation-play-state)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which shorthand property is used to define all transition properties at once?",
    question_hi: "सभी ट्रांजिशन प्रॉपर्टीज़ को एक साथ परिभाषित करने के लिए कौन-सी शॉर्टहैंड प्रॉपर्टी उपयोग होती है?",
    options_en: ["transition", "animation", "transform", "keyframes"],
    options_hi: ["ट्रांजिशन (transition)", "एनिमेशन (animation)", "ट्रांसफॉर्म (transform)", "कीफ्रेम्स (keyframes)"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन (transition)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which CSS property controls the speed curve of a transition?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ट्रांजिशन की स्पीड कर्व को नियंत्रित करती है?",
    options_en: ["transition-timing-function", "animation-timing-function", "transition-delay", "animation-delay"],
    options_hi: ["ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-timing-function",
    answer_hi: "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which transition-timing-function value causes a transition to run at a constant speed?",
    question_hi: "कौन-सा transition-timing-function मान ट्रांजिशन को समान गति से चलाता है?",
    options_en: ["linear", "ease-in", "ease-out", "ease-in-out"],
    options_hi: ["linear", "ease-in", "ease-out", "ease-in-out"],
    answer_en: "linear",
    answer_hi: "linear",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property controls the order of CSS animations when multiple animations are applied?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कई एनिमेशन लागू होने पर उनकी क्रम को नियंत्रित करती है?",
    options_en: ["animation-delay", "animation-name", "animation-iteration-count", "animation-play-state"],
    options_hi: ["एनिमेशन-डिले (animation-delay)", "एनिमेशन-नाम (animation-name)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-प्ले-स्टेट (animation-play-state)"],
    answer_en: "animation-delay",
    answer_hi: "एनिमेशन-डिले (animation-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which at-rule is used to define media queries in CSS?",
    question_hi: "CSS में मीडिया क्वेरी को परिभाषित करने के लिए कौन-सा at-rule उपयोग होता है?",
    options_en: ["@media", "@keyframes", "@supports", "@font-face"],
    options_hi: ["@media", "@keyframes", "@supports", "@font-face"],
    answer_en: "@media",
    answer_hi: "@media",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS property is NOT animatable?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेटेबल नहीं है?",
    options_en: ["display", "opacity", "background-color", "transform"],
    options_hi: ["डिस्प्ले (display)", "अपारदर्शिता (opacity)", "बैकग्राउंड-कलर (background-color)", "ट्रांसफॉर्म (transform)"],
    answer_en: "display",
    answer_hi: "डिस्प्ले (display)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the default timing function of CSS transitions?",
    question_hi: "CSS ट्रांजिशन की डिफ़ॉल्ट टाइमिंग फंक्शन क्या है?",
    options_en: ["ease", "linear", "ease-in", "ease-out"],
    options_hi: ["ease", "linear", "ease-in", "ease-out"],
    answer_en: "ease",
    answer_hi: "ease",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property defines the delay before starting an animation or transition when multiple are specified?",
    question_hi: "जब कई एनिमेशन या ट्रांजिशन निर्दिष्ट हों, तो शुरू करने से पहले देरी को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["animation-delay", "transition-delay", "animation-duration", "transition-duration"],
    options_hi: ["एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)", "ट्रांजिशन-ड्यूरेशन (transition-duration)"],
    answer_en: "animation-delay",
    answer_hi: "एनिमेशन-डिले (animation-delay)",
    attempted: false,
    selected: ""
  }
  // Continue adding more questions 51 to 100
];

// 

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