const questions = [
  {
  num: 1,
  question_en: "If the roots of the equation x² + px + q = 0 are in the ratio 2:3, then what is the relation between p and q?",
  question_hi: "यदि समीकरण x² + px + q = 0 के मूल 2:3 के अनुपात में हैं, तो p और q के बीच क्या संबंध है?",
  options_en: ["6p² = 25q", "25p² = 6q", "5p² = 6q", "6p² = 5q"],
  options_hi: ["6p² = 25q", "25p² = 6q", "5p² = 6q", "6p² = 5q"],
  answer_en: "6p² = 25q",
  answer_hi: "6p² = 25q",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "The value of ∫(0 to π/2) sin³x cos²x dx is:",
  question_hi: "∫(0 से π/2) sin³x cos²x dx का मान है:",
  options_en: ["2/15", "2/35", "8/15", "8/35"],
  options_hi: ["2/15", "2/35", "8/15", "8/35"],
  answer_en: "2/15",
  answer_hi: "2/15",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "If A = [[1,2],[3,4]] and B = [[2,0],[1,2]], then the determinant of AB is:",
  question_hi: "यदि A = [[1,2],[3,4]] और B = [[2,0],[1,2]] है, तो AB का सारणिक है:",
  options_en: ["-20", "-40", "20", "40"],
  options_hi: ["-20", "-40", "20", "40"],
  answer_en: "-40",
  answer_hi: "-40",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "The sum of infinite series 1 + 1/2 + 1/4 + 1/8 + ... is:",
  question_hi: "अनंत श्रेणी 1 + 1/2 + 1/4 + 1/8 + ... का योग है:",
  options_en: ["1", "2", "3", "∞"],
  options_hi: ["1", "2", "3", "∞"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "If log₂(log₃(log₄x)) = 0, then x equals:",
  question_hi: "यदि log₂(log₃(log₄x)) = 0, तो x बराबर है:",
  options_en: ["4³", "4²", "3⁴", "2⁴"],
  options_hi: ["4³", "4²", "3⁴", "2⁴"],
  answer_en: "4³",
  answer_hi: "4³",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "The number of diagonals in a polygon with 10 sides is:",
  question_hi: "10 भुजाओं वाले बहुभुज में विकर्णों की संख्या है:",
  options_en: ["35", "40", "45", "50"],
  options_hi: ["35", "40", "45", "50"],
  answer_en: "35",
  answer_hi: "35",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "If sinθ + cosθ = √2, then the value of tanθ + cotθ is:",
  question_hi: "यदि sinθ + cosθ = √2, तो tanθ + cotθ का मान है:",
  options_en: ["1", "2", "√2", "1/√2"],
  options_hi: ["1", "2", "√2", "1/√2"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "The differential equation of all circles touching y-axis at origin is:",
  question_hi: "मूल बिंदु पर y-अक्ष को स्पर्श करने वाले सभी वृत्तों का अवकल समीकरण है:",
  options_en: ["(x² + y²)dy/dx = 2xy", "(x² + y²)dy/dx = xy", "x(dy/dx) = y", "y(dy/dx) = x"],
  options_hi: ["(x² + y²)dy/dx = 2xy", "(x² + y²)dy/dx = xy", "x(dy/dx) = y", "y(dy/dx) = x"],
  answer_en: "(x² + y²)dy/dx = 2xy",
  answer_hi: "(x² + y²)dy/dx = 2xy",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "The probability of getting a sum of 9 when two dice are thrown is:",
  question_hi: "दो पासे फेंकने पर 9 का योग आने की प्रायिकता है:",
  options_en: ["1/9", "1/12", "1/6", "1/18"],
  options_hi: ["1/9", "1/12", "1/6", "1/18"],
  answer_en: "1/9",
  answer_hi: "1/9",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "The value of lim(x→∞) (1 + 1/x)^x is:",
  question_hi: "lim(x→∞) (1 + 1/x)^x का मान है:",
  options_en: ["0", "1", "e", "∞"],
  options_hi: ["0", "1", "e", "∞"],
  answer_en: "e",
  answer_hi: "e",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "If the arithmetic mean of two numbers is 10 and geometric mean is 8, then the numbers are:",
  question_hi: "यदि दो संख्याओं का समांतर माध्य 10 और गुणोत्तर माध्य 8 है, तो संख्याएं हैं:",
  options_en: ["4 and 16", "6 and 14", "8 and 12", "2 and 18"],
  options_hi: ["4 और 16", "6 और 14", "8 और 12", "2 और 18"],
  answer_en: "4 and 16",
  answer_hi: "4 और 16",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "The area bounded by the curve y = x³, x-axis and lines x = -1 and x = 1 is:",
  question_hi: "वक्र y = x³, x-अक्ष और रेखाओं x = -1 और x = 1 से घिरा क्षेत्रफल है:",
  options_en: ["0", "1", "1/2", "2"],
  options_hi: ["0", "1", "1/2", "2"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "If z = x + iy and |z| = 1, then the locus of z is:",
  question_hi: "यदि z = x + iy और |z| = 1, तो z का बिंदुपथ है:",
  options_en: ["Circle", "Ellipse", "Parabola", "Straight line"],
  options_hi: ["वृत्त", "दीर्घवृत्त", "परवलय", "सरल रेखा"],
  answer_en: "Circle",
  answer_hi: "वृत्त",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "The number of terms in the expansion of (x + y + z)¹⁰ is:",
  question_hi: "(x + y + z)¹⁰ के प्रसार में पदों की संख्या है:",
  options_en: ["55", "66", "45", "56"],
  options_hi: ["55", "66", "45", "56"],
  answer_en: "66",
  answer_hi: "66",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "The solution of differential equation dy/dx = y/x + tan(y/x) is:",
  question_hi: "अवकल समीकरण dy/dx = y/x + tan(y/x) का हल है:",
  options_en: ["sin(y/x) = cx", "cos(y/x) = cx", "sin(y/x) = c/x", "cos(y/x) = c/x"],
  options_hi: ["sin(y/x) = cx", "cos(y/x) = cx", "sin(y/x) = c/x", "cos(y/x) = c/x"],
  answer_en: "sin(y/x) = cx",
  answer_hi: "sin(y/x) = cx",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "If A and B are symmetric matrices of same order, then AB - BA is:",
  question_hi: "यदि A और B समान क्रम के सममित आव्यूह हैं, तो AB - BA है:",
  options_en: ["Symmetric matrix", "Skew-symmetric matrix", "Zero matrix", "Identity matrix"],
  options_hi: ["सममित आव्यूह", "विषम-सममित आव्यूह", "शून्य आव्यूह", "तत्समक आव्यूह"],
  answer_en: "Skew-symmetric matrix",
  answer_hi: "विषम-सममित आव्यूह",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "The value of sin75° is:",
  question_hi: "sin75° का मान है:",
  options_en: ["(√6 + √2)/4", "(√6 - √2)/4", "(√3 + 1)/2√2", "(√3 - 1)/2√2"],
  options_hi: ["(√6 + √2)/4", "(√6 - √2)/4", "(√3 + 1)/2√2", "(√3 - 1)/2√2"],
  answer_en: "(√6 + √2)/4",
  answer_hi: "(√6 + √2)/4",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "If f(x) = x³ - 3x² + 4x + 5, then f'(2) equals:",
  question_hi: "यदि f(x) = x³ - 3x² + 4x + 5, तो f'(2) बराबर है:",
  options_en: ["0", "4", "8", "12"],
  options_hi: ["0", "4", "8", "12"],
  answer_en: "4",
  answer_hi: "4",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "The number of ways to arrange the letters of the word 'MATHEMATICS' is:",
  question_hi: "शब्द 'MATHEMATICS' के अक्षरों को व्यवस्थित करने के तरीकों की संख्या है:",
  options_en: ["11!/(2!2!2!)", "11!/(2!2!)", "11!/2!", "11!"],
  options_hi: ["11!/(2!2!2!)", "11!/(2!2!)", "11!/2!", "11!"],
  answer_en: "11!/(2!2!2!)",
  answer_hi: "11!/(2!2!2!)",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "If a, b, c are in GP and aˣ = bʸ = cᶻ, then x, y, z are in:",
  question_hi: "यदि a, b, c गुणोत्तर श्रेणी में हैं और aˣ = bʸ = cᶻ, तो x, y, z हैं:",
  options_en: ["AP", "GP", "HP", "None of these"],
  options_hi: ["समांतर श्रेणी", "गुणोत्तर श्रेणी", "हरात्मक श्रेणी", "इनमें से कोई नहीं"],
  answer_en: "HP",
  answer_hi: "हरात्मक श्रेणी",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "The value of ∫eˣ(sinx + cosx)dx is:",
  question_hi: "∫eˣ(sinx + cosx)dx का मान है:",
  options_en: ["eˣsinx + C", "eˣcosx + C", "eˣ(sinx - cosx) + C", "eˣ(sinx + cosx)/2 + C"],
  options_hi: ["eˣsinx + C", "eˣcosx + C", "eˣ(sinx - cosx) + C", "eˣ(sinx + cosx)/2 + C"],
  answer_en: "eˣsinx + C",
  answer_hi: "eˣsinx + C",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "The shortest distance between the lines (x-1)/2 = (y-2)/3 = (z-3)/4 and (x-2)/3 = (y-4)/4 = (z-5)/5 is:",
  question_hi: "रेखाओं (x-1)/2 = (y-2)/3 = (z-3)/4 और (x-2)/3 = (y-4)/4 = (z-5)/5 के बीच की न्यूनतम दूरी है:",
  options_en: ["1/√6", "√6", "1/√3", "√3"],
  options_hi: ["1/√6", "√6", "1/√3", "√3"],
  answer_en: "1/√6",
  answer_hi: "1/√6",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "If the sum of first n terms of an AP is 3n² + 5n, then its nth term is:",
  question_hi: "यदि किसी समांतर श्रेणी के प्रथम n पदों का योग 3n² + 5n है, तो इसका nवाँ पद है:",
  options_en: ["6n + 2", "3n + 2", "6n - 2", "3n - 2"],
  options_hi: ["6n + 2", "3n + 2", "6n - 2", "3n - 2"],
  answer_en: "6n + 2",
  answer_hi: "6n + 2",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "The value of tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) is:",
  question_hi: "tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) का मान है:",
  options_en: ["π", "π/2", "3π/4", "2π"],
  options_hi: ["π", "π/2", "3π/4", "2π"],
  answer_en: "π",
  answer_hi: "π",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "If A is a square matrix such that A² = A, then (I + A)³ - 7A equals:",
  question_hi: "यदि A एक वर्ग आव्यूह है जिसके लिए A² = A है, तो (I + A)³ - 7A बराबर है:",
  options_en: ["I", "A", "I - A", "I + A"],
  options_hi: ["I", "A", "I - A", "I + A"],
  answer_en: "I",
  answer_hi: "I",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "The radius of curvature of the curve y = eˣ at point (0,1) is:",
  question_hi: "वक्र y = eˣ के बिंदु (0,1) पर वक्रता त्रिज्या है:",
  options_en: ["2√2", "√2", "2", "1/√2"],
  options_hi: ["2√2", "√2", "2", "1/√2"],
  answer_en: "2√2",
  answer_hi: "2√2",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "The number of real solutions of the equation |x|² - 3|x| + 2 = 0 is:",
  question_hi: "समीकरण |x|² - 3|x| + 2 = 0 के वास्तविक हलों की संख्या है:",
  options_en: ["2", "3", "4", "0"],
  options_hi: ["2", "3", "4", "0"],
  answer_en: "4",
  answer_hi: "4",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "If the vectors a = 2i - 3j + k, b = i + 2j - 2k, c = 3i + j + λk are coplanar, then λ equals:",
  question_hi: "यदि सदिश a = 2i - 3j + k, b = i + 2j - 2k, c = 3i + j + λk समतलीय हैं, तो λ बराबर है:",
  options_en: ["-5", "5", "-7", "7"],
  options_hi: ["-5", "5", "-7", "7"],
  answer_en: "-5",
  answer_hi: "-5",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "The value of ∑(r=1 to n) r(r+1)(r+2) is:",
  question_hi: "∑(r=1 से n) r(r+1)(r+2) का मान है:",
  options_en: ["n(n+1)(n+2)(n+3)/4", "n(n+1)(n+2)/3", "n(n+1)(2n+1)/6", "n(n+1)/2"],
  options_hi: ["n(n+1)(n+2)(n+3)/4", "n(n+1)(n+2)/3", "n(n+1)(2n+1)/6", "n(n+1)/2"],
  answer_en: "n(n+1)(n+2)(n+3)/4",
  answer_hi: "n(n+1)(n+2)(n+3)/4",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "If y = sin(m sin⁻¹x), then (1-x²)y₂ - xy₁ + m²y equals:",
  question_hi: "यदि y = sin(m sin⁻¹x), तो (1-x²)y₂ - xy₁ + m²y बराबर है:",
  options_en: ["0", "1", "m", "m²"],
  options_hi: ["0", "1", "m", "m²"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "The area of triangle with vertices (1,2,3), (2,3,1) and (3,1,2) is:",
  question_hi: "शीर्षों (1,2,3), (2,3,1) और (3,1,2) वाले त्रिभुज का क्षेत्रफल है:",
  options_en: ["√3", "3√3/2", "√3/2", "3√3"],
  options_hi: ["√3", "3√3/2", "√3/2", "3√3"],
  answer_en: "3√3/2",
  answer_hi: "3√3/2",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "If the function f(x) = {x² for x≤1, ax+b for x>1} is differentiable at x=1, then values of a and b are:",
  question_hi: "यदि फलन f(x) = {x≤1 के लिए x², x>1 के लिए ax+b} बिंदु x=1 पर अवकलनीय है, तो a और b के मान हैं:",
  options_en: ["a=2, b=1", "a=2, b=-1", "a=1, b=2", "a=-1, b=2"],
  options_hi: ["a=2, b=1", "a=2, b=-1", "a=1, b=2", "a=-1, b=2"],
  answer_en: "a=2, b=-1",
  answer_hi: "a=2, b=-1",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "The number of solutions of the equation cos²x + cos²2x + cos²3x = 1 in [0, π] is:",
  question_hi: "समीकरण cos²x + cos²2x + cos²3x = 1 के [0, π] में हलों की संख्या है:",
  options_en: ["3", "4", "5", "6"],
  options_hi: ["3", "4", "5", "6"],
  answer_en: "5",
  answer_hi: "5",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "If f(x) = |x-1| + |x-2| + |x-3|, then the minimum value of f(x) is:",
  question_hi: "यदि f(x) = |x-1| + |x-2| + |x-3|, तो f(x) का न्यूनतम मान है:",
  options_en: ["1", "2", "3", "4"],
  options_hi: ["1", "2", "3", "4"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "The order and degree of differential equation d²y/dx² + (dy/dx)^(1/3) + x^(1/4) = 0 are:",
  question_hi: "अवकल समीकरण d²y/dx² + (dy/dx)^(1/3) + x^(1/4) = 0 की कोटि और घात हैं:",
  options_en: ["Order=2, Degree=3", "Order=2, Degree=1", "Order=2, Degree=not defined", "Order=1, Degree=2"],
  options_hi: ["कोटि=2, घात=3", "कोटि=2, घात=1", "कोटि=2, घात=परिभाषित नहीं", "कोटि=1, घात=2"],
  answer_en: "Order=2, Degree=not defined",
  answer_hi: "कोटि=2, घात=परिभाषित नहीं",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "The value of ∫(0 to π) x sin³x dx is:",
  question_hi: "∫(0 से π) x sin³x dx का मान है:",
  options_en: ["π/4", "π/2", "2π/3", "3π/4"],
  options_hi: ["π/4", "π/2", "2π/3", "3π/4"],
  answer_en: "2π/3",
  answer_hi: "2π/3",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "If three dice are thrown together, the probability of getting sum 10 is:",
  question_hi: "यदि तीन पासे एक साथ फेंके जाते हैं, तो योग 10 आने की प्रायिकता है:",
  options_en: ["1/8", "27/216", "25/216", "1/6"],
  options_hi: ["1/8", "27/216", "25/216", "1/6"],
  answer_en: "27/216",
  answer_hi: "27/216",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "The equation of normal to the parabola y² = 4x at point (1,2) is:",
  question_hi: "परवलय y² = 4x के बिंदु (1,2) पर अभिलंब का समीकरण है:",
  options_en: ["x + y = 3", "x - y = -1", "x + y = 1", "x - y = 1"],
  options_hi: ["x + y = 3", "x - y = -1", "x + y = 1", "x - y = 1"],
  answer_en: "x + y = 3",
  answer_hi: "x + y = 3",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "If z₁ and z₂ are complex numbers such that |z₁| = |z₂| = 1 and |z₁ + z₂| = √3, then |z₁ - z₂| equals:",
  question_hi: "यदि z₁ और z₂ सम्मिश्र संख्याएं हैं जैसे कि |z₁| = |z₂| = 1 और |z₁ + z₂| = √3, तो |z₁ - z₂| बराबर है:",
  options_en: ["0", "1", "√2", "2"],
  options_hi: ["0", "1", "√2", "2"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "The value of lim(x→0) (tanx - sinx)/x³ is:",
  question_hi: "lim(x→0) (tanx - sinx)/x³ का मान है:",
  options_en: ["0", "1/2", "1/3", "1/6"],
  options_hi: ["0", "1/2", "1/3", "1/6"],
  answer_en: "1/2",
  answer_hi: "1/2",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "If A and B are two independent events with P(A) = 0.3 and P(B) = 0.4, then P(A∪B) equals:",
  question_hi: "यदि A और B दो स्वतंत्र घटनाएं हैं जिनमें P(A) = 0.3 और P(B) = 0.4 है, तो P(A∪B) बराबर है:",
  options_en: ["0.12", "0.58", "0.7", "0.82"],
  options_hi: ["0.12", "0.58", "0.7", "0.82"],
  answer_en: "0.58",
  answer_hi: "0.58",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "The number of common tangents to circles x² + y² = 4 and x² + y² - 6x - 8y = 24 is:",
  question_hi: "वृत्तों x² + y² = 4 और x² + y² - 6x - 8y = 24 के उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
  options_en: ["1", "2", "3", "4"],
  options_hi: ["1", "2", "3", "4"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "If f(x) = x³ - 6x² + 9x + 3, then f(x) has local maximum at x =:",
  question_hi: "यदि f(x) = x³ - 6x² + 9x + 3, तो f(x) का स्थानीय अधिकतम x = पर है:",
  options_en: ["1", "2", "3", "4"],
  options_hi: ["1", "2", "3", "4"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "The value of ∫(0 to 1) x(1-x)^n dx is:",
  question_hi: "∫(0 से 1) x(1-x)^n dx का मान है:",
  options_en: ["1/[(n+1)(n+2)]", "n!/[(n+1)!]", "1/(n+1)", "n/(n+1)"],
  options_hi: ["1/[(n+1)(n+2)]", "n!/[(n+1)!]", "1/(n+1)", "n/(n+1)"],
  answer_en: "1/[(n+1)(n+2)]",
  answer_hi: "1/[(n+1)(n+2)]",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "If the lines x-1/2 = y-2/3 = z-3/4 and x-4/5 = y-1/2 = z intersect, then k equals:",
  question_hi: "यदि रेखाएं x-1/2 = y-2/3 = z-3/4 और x-4/5 = y-1/2 = z प्रतिच्छेद करती हैं, तो k बराबर है:",
  options_en: ["-1", "2/9", "9/2", "0"],
  options_hi: ["-1", "2/9", "9/2", "0"],
  answer_en: "9/2",
  answer_hi: "9/2",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "The sum of the series 1/2 + 3/4 + 7/8 + 15/16 + ... to n terms is:",
  question_hi: "श्रेणी 1/2 + 3/4 + 7/8 + 15/16 + ... के n पदों का योग है:",
  options_en: ["n - 1 + 2^(-n)", "n - 1 - 2^(-n)", "n + 1 - 2^(-n)", "n + 2^(-n)"],
  options_hi: ["n - 1 + 2^(-n)", "n - 1 - 2^(-n)", "n + 1 - 2^(-n)", "n + 2^(-n)"],
  answer_en: "n - 1 + 2^(-n)",
  answer_hi: "n - 1 + 2^(-n)",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "If the function f(x) = ax³ + bx² + 11x - 6 has critical points at x = 1 and x = 2, then values of a and b are:",
  question_hi: "यदि फलन f(x) = ax³ + bx² + 11x - 6 के x = 1 और x = 2 पर क्रांतिक बिंदु हैं, तो a और b के मान हैं:",
  options_en: ["a=1, b=-6", "a=-1, b=6", "a=2, b=-9", "a=-2, b=9"],
  options_hi: ["a=1, b=-6", "a=-1, b=6", "a=2, b=-9", "a=-2, b=9"],
  answer_en: "a=1, b=-6",
  answer_hi: "a=1, b=-6",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "The area enclosed by the ellipse x²/a² + y²/b² = 1 is:",
  question_hi: "दीर्घवृत्त x²/a² + y²/b² = 1 से घिरा क्षेत्रफल है:",
  options_en: ["πab", "π(a²+b²)", "π(a+b)", "π(a²+b²)/2"],
  options_hi: ["πab", "π(a²+b²)", "π(a+b)", "π(a²+b²)/2"],
  answer_en: "πab",
  answer_hi: "πab",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "If tanA + tanB = a and cotA + cotB = b, then tan(A+B) equals:",
  question_hi: "यदि tanA + tanB = a और cotA + cotB = b है, तो tan(A+B) बराबर है:",
  options_en: ["ab/(a+b)", "a+b", "ab", "1/ab"],
  options_hi: ["ab/(a+b)", "a+b", "ab", "1/ab"],
  answer_en: "ab",
  answer_hi: "ab",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "The number of solutions of the equation sinx + cosx = √2 in [0, 2π] is:",
  question_hi: "समीकरण sinx + cosx = √2 के [0, 2π] में हलों की संख्या है:",
  options_en: ["1", "2", "3", "4"],
  options_hi: ["1", "2", "3", "4"],
  answer_en: "2",
  answer_hi: "2",
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