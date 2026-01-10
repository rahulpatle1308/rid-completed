const questions= [
  {"num":1,"question_en":"Which standard library is used for input/output streams?","question_hi":"इनपुट/आउटपुट स्ट्रीम के लिए कौन सी स्टैंडर्ड लाइब्रेरी है?","options_en":["<iostream>","<cstdio>","<stream>","<io>"],"options_hi":["<iostream>","<cstdio>","<stream>","<io>"],"answer_en":"<iostream>","answer_hi":"<iostream>"},
  {"num":2,"question_en":"Which keyword defines a constant expression at compile time?","question_hi":"कम्पाइल टाइम पर कॉन्स्टेंट एक्सप्रेशन डिफाइन करने का कीवर्ड कौन सा है?","options_en":["constexpr","const","static","final"],"options_hi":["constexpr","const","static","final"],"answer_en":"constexpr","answer_hi":"constexpr"},
  {"num":3,"question_en":"Which operator is used for stream insertion?","question_hi":"स्ट्रीम इंसर्शन के लिए कौन सा ऑपरेटर उपयोग होता है?","options_en":["<<",">>","<=",">="],"options_hi":["<<",">>","<=",">="],"answer_en":"<<","answer_hi":"<<"},
  {"num":4,"question_en":"Which keyword is used to define a namespace?","question_hi":"नेमस्पेस डिफाइन करने के लिए कौन सा कीवर्ड है?","options_en":["namespace","using","scope","import"],"options_hi":["namespace","using","scope","import"],"answer_en":"namespace","answer_hi":"namespace"},
  {"num":5,"question_en":"Which cast checks type safety at runtime?","question_hi":"रनटाइम पर टाइप सेफ्टी चेक करने वाला कास्ट कौन सा है?","options_en":["dynamic_cast","static_cast","reinterpret_cast","const_cast"],"options_hi":["dynamic_cast","static_cast","reinterpret_cast","const_cast"],"answer_en":"dynamic_cast","answer_hi":"dynamic_cast"},

  {"num":6,"question_en":"Which container provides fast key-based access?","question_hi":"तेज़ key-based access कौन सा कंटेनर देता है?","options_en":["unordered_map","vector","list","set"],"options_hi":["unordered_map","vector","list","set"],"answer_en":"unordered_map","answer_hi":"unordered_map"},
  {"num":7,"question_en":"Which header file contains STL algorithms?","question_hi":"STL algorithms किस हेडर फाइल में होते हैं?","options_en":["<algorithm>","<numeric>","<iterator>","<utility>"],"options_hi":["<algorithm>","<numeric>","<iterator>","<utility>"],"answer_en":"<algorithm>","answer_hi":"<algorithm>"},
  {"num":8,"question_en":"Which function sorts elements in STL?","question_hi":"STL में एलिमेंट्स को सॉर्ट करने वाला फंक्शन कौन सा है?","options_en":["std::sort","std::order","std::arrange","std::set"],"options_hi":["std::sort","std::order","std::arrange","std::set"],"answer_en":"std::sort","answer_hi":"std::sort"},
  {"num":9,"question_en":"Which iterator points to the end of container?","question_hi":"कंटेनर के अंत को कौन सा इटरेटर पॉइंट करता है?","options_en":["end()","begin()","last()","finish()"],"options_hi":["end()","begin()","last()","finish()"],"answer_en":"end()","answer_hi":"end()"},
  {"num":10,"question_en":"Which concept ensures resource release?","question_hi":"रिसोर्स रिलीज़ सुनिश्चित करने वाला कॉन्सेप्ट कौन सा है?","options_en":["RAII","GC","Heap","Stack"],"options_hi":["RAII","GC","Heap","Stack"],"answer_en":"RAII","answer_hi":"RAII"},

  {"num":11,"question_en":"Which keyword disables exceptions?","question_hi":"एक्सेप्शन को डिसेबल करने वाला कीवर्ड कौन सा है?","options_en":["noexcept","throw","catch","try"],"options_hi":["noexcept","throw","catch","try"],"answer_en":"noexcept","answer_hi":"noexcept"},
  {"num":12,"question_en":"Which container is an adapter?","question_hi":"कौन सा कंटेनर एडैप्टर है?","options_en":["stack","vector","map","array"],"options_hi":["stack","vector","map","array"],"answer_en":"stack","answer_hi":"stack"},
  {"num":13,"question_en":"Which header supports tuple?","question_hi":"ट्यूपल को सपोर्ट करने वाला हेडर कौन सा है?","options_en":["<tuple>","<pair>","<array>","<utility>"],"options_hi":["<tuple>","<pair>","<array>","<utility>"],"answer_en":"<tuple>","answer_hi":"<tuple>"},
  {"num":14,"question_en":"Which function converts lvalue to rvalue?","question_hi":"lvalue को rvalue में बदलने वाला फंक्शन कौन सा है?","options_en":["std::move","std::copy","std::swap","std::shift"],"options_hi":["std::move","std::copy","std::swap","std::shift"],"answer_en":"std::move","answer_hi":"std::move"},
  {"num":15,"question_en":"Which constructor enables move semantics?","question_hi":"मूव सेमांटिक्स किस कन्स्ट्रक्टर से होती है?","options_en":["Move constructor","Copy constructor","Default constructor","Explicit constructor"],"options_hi":["Move constructor","Copy constructor","Default constructor","Explicit constructor"],"answer_en":"Move constructor","answer_hi":"Move constructor"},

  {"num":16,"question_en":"Which keyword avoids implicit conversion?","question_hi":"इम्प्लिसिट कन्वर्ज़न रोकने वाला कीवर्ड कौन सा है?","options_en":["explicit","inline","mutable","volatile"],"options_hi":["explicit","inline","mutable","volatile"],"answer_en":"explicit","answer_hi":"explicit"},
  {"num":17,"question_en":"Which keyword allows modification in const object?","question_hi":"const ऑब्जेक्ट में बदलाव की अनुमति देने वाला कीवर्ड कौन सा है?","options_en":["mutable","volatile","static","register"],"options_hi":["mutable","volatile","static","register"],"answer_en":"mutable","answer_hi":"mutable"},
  {"num":18,"question_en":"Which header contains smart pointers?","question_hi":"स्मार्ट पॉइंटर किस हेडर में होते हैं?","options_en":["<memory>","<pointer>","<smart>","<utility>"],"options_hi":["<memory>","<pointer>","<smart>","<utility>"],"answer_en":"<memory>","answer_hi":"<memory>"},
  {"num":19,"question_en":"Which smart pointer avoids cyclic reference?","question_hi":"साइक्लिक रेफरेंस से बचाने वाला स्मार्ट पॉइंटर कौन सा है?","options_en":["weak_ptr","shared_ptr","unique_ptr","auto_ptr"],"options_hi":["weak_ptr","shared_ptr","unique_ptr","auto_ptr"],"answer_en":"weak_ptr","answer_hi":"weak_ptr"},
  {"num":20,"question_en":"Which container uses contiguous memory?","question_hi":"कंटिग्यूस मेमोरी कौन सा कंटेनर उपयोग करता है?","options_en":["vector","list","map","set"],"options_hi":["vector","list","map","set"],"answer_en":"vector","answer_hi":"vector"},

  {"num":21,"question_en":"Which keyword checks condition at compile time?","question_hi":"कम्पाइल टाइम पर कंडीशन चेक करने वाला कीवर्ड कौन सा है?","options_en":["static_assert","assert","check","verify"],"options_hi":["static_assert","assert","check","verify"],"answer_en":"static_assert","answer_hi":"static_assert"},
  {"num":22,"question_en":"Which container maintains insertion order?","question_hi":"इंसर्शन ऑर्डर बनाए रखने वाला कंटेनर कौन सा है?","options_en":["list","set","map","unordered_set"],"options_hi":["list","set","map","unordered_set"],"answer_en":"list","answer_hi":"list"},
  {"num":23,"question_en":"Which header provides time utilities?","question_hi":"टाइम यूटिलिटीज़ किस हेडर में होती हैं?","options_en":["<chrono>","<ctime>","<time>","<clock>"],"options_hi":["<chrono>","<ctime>","<time>","<clock>"],"answer_en":"<chrono>","answer_hi":"<chrono>"},
  {"num":24,"question_en":"Which keyword prevents inheritance?","question_hi":"इनहेरिटेंस रोकने वाला कीवर्ड कौन सा है?","options_en":["final","sealed","private","stop"],"options_hi":["final","sealed","private","stop"],"answer_en":"final","answer_hi":"final"},
  {"num":25,"question_en":"Which operator accesses member via pointer?","question_hi":"पॉइंटर से मेंबर एक्सेस करने वाला ऑपरेटर कौन सा है?","options_en":["->",".","::","*"],"options_hi":["->",".","::","*"],"answer_en":"->","answer_hi":"->"},

  {"num":26,"question_en":"Which header supports regex?","question_hi":"रेगुलर एक्सप्रेशन किस हेडर में है?","options_en":["<regex>","<pattern>","<string>","<re>"],"options_hi":["<regex>","<pattern>","<string>","<re>"],"answer_en":"<regex>","answer_hi":"<regex>"},
  {"num":27,"question_en":"Which container is used for priority based access?","question_hi":"प्रायोरिटी आधारित एक्सेस के लिए कौन सा कंटेनर है?","options_en":["priority_queue","queue","deque","vector"],"options_hi":["priority_queue","queue","deque","vector"],"answer_en":"priority_queue","answer_hi":"priority_queue"},
  {"num":28,"question_en":"Which keyword indicates variable may change unexpectedly?","question_hi":"अचानक बदलने वाली वैरिएबल के लिए कौन सा कीवर्ड है?","options_en":["volatile","mutable","atomic","static"],"options_hi":["volatile","mutable","atomic","static"],"answer_en":"volatile","answer_hi":"volatile"},
  {"num":29,"question_en":"Which header supports atomic operations?","question_hi":"एटॉमिक ऑपरेशन्स किस हेडर में होते हैं?","options_en":["<atomic>","<mutex>","<thread>","<future>"],"options_hi":["<atomic>","<mutex>","<thread>","<future>"],"answer_en":"<atomic>","answer_hi":"<atomic>"},
  {"num":30,"question_en":"Which header is used for multithreading?","question_hi":"मल्टीथ्रेडिंग के लिए कौन सा हेडर है?","options_en":["<thread>","<process>","<task>","<parallel>"],"options_hi":["<thread>","<process>","<task>","<parallel>"],"answer_en":"<thread>","answer_hi":"<thread>"},

  {"num":31,"question_en":"Which synchronization primitive locks data?","question_hi":"डेटा लॉक करने वाला सिंक्रोनाइज़ेशन प्रिमिटिव कौन सा है?","options_en":["mutex","signal","gate","lockstep"],"options_hi":["mutex","signal","gate","lockstep"],"answer_en":"mutex","answer_hi":"mutex"},
  {"num":32,"question_en":"Which RAII object locks mutex automatically?","question_hi":"म्यूटेक्स को ऑटोमैटिक लॉक करने वाला RAII ऑब्जेक्ट कौन सा है?","options_en":["lock_guard","unique_lock","scoped_lock","all"],"options_hi":["lock_guard","unique_lock","scoped_lock","all"],"answer_en":"all","answer_hi":"all"},
  {"num":33,"question_en":"Which keyword makes function read-only?","question_hi":"फंक्शन को रीड-ओनली बनाने वाला कीवर्ड कौन सा है?","options_en":["const","inline","static","final"],"options_hi":["const","inline","static","final"],"answer_en":"const","answer_hi":"const"},
  {"num":34,"question_en":"Which operator checks equality?","question_hi":"इक्वैलिटी चेक करने वाला ऑपरेटर कौन सा है?","options_en":["==","=","!=","<"],"options_hi":["==","=","!=","<"],"answer_en":"==","answer_hi":"=="},
  {"num":35,"question_en":"Which container allows duplicate keys?","question_hi":"डुप्लिकेट keys की अनुमति देने वाला कंटेनर कौन सा है?","options_en":["multiset","set","map","unordered_set"],"options_hi":["multiset","set","map","unordered_set"],"answer_en":"multiset","answer_hi":"multiset"},

  {"num":36,"question_en":"Which algorithm counts occurrences?","question_hi":"ऑकरेंस गिनने वाला एल्गोरिद्म कौन सा है?","options_en":["std::count","std::size","std::length","std::find"],"options_hi":["std::count","std::size","std::length","std::find"],"answer_en":"std::count","answer_hi":"std::count"},
  {"num":37,"question_en":"Which container supports bidirectional iterator?","question_hi":"बाइडायरेक्शनल इटरेटर कौन सा कंटेनर देता है?","options_en":["list","vector","array","stack"],"options_hi":["list","vector","array","stack"],"answer_en":"list","answer_hi":"list"},
  {"num":38,"question_en":"Which OOP concept hides data?","question_hi":"डेटा को छुपाने वाला OOP कॉन्सेप्ट कौन सा है?","options_en":["Encapsulation","Abstraction","Inheritance","Polymorphism"],"options_hi":["Encapsulation","Abstraction","Inheritance","Polymorphism"],"answer_en":"Encapsulation","answer_hi":"Encapsulation"},
  {"num":39,"question_en":"Which header supports optional?","question_hi":"optional को सपोर्ट करने वाला हेडर कौन सा है?","options_en":["<optional>","<any>","<variant>","<tuple>"],"options_hi":["<optional>","<any>","<variant>","<tuple>"],"answer_en":"<optional>","answer_hi":"<optional>"},
  {"num":40,"question_en":"Which type stores one of many types?","question_hi":"कई टाइप्स में से एक स्टोर करने वाला टाइप कौन सा है?","options_en":["std::variant","std::any","std::optional","std::tuple"],"options_hi":["std::variant","std::any","std::optional","std::tuple"],"answer_en":"std::variant","answer_hi":"std::variant"},

  {"num":41,"question_en":"Which header supports filesystem?","question_hi":"फाइलसिस्टम को सपोर्ट करने वाला हेडर कौन सा है?","options_en":["<filesystem>","<files>","<path>","<fs>"],"options_hi":["<filesystem>","<files>","<path>","<fs>"],"answer_en":"<filesystem>","answer_hi":"<filesystem>"},
  {"num":42,"question_en":"Which function checks path existence?","question_hi":"पाथ के मौजूद होने की जाँच करने वाला फंक्शन कौन सा है?","options_en":["exists","check","present","verify"],"options_hi":["exists","check","present","verify"],"answer_en":"exists","answer_hi":"exists"},
  {"num":43,"question_en":"Which header supports string streams?","question_hi":"स्ट्रिंग स्ट्रीम्स किस हेडर में होती हैं?","options_en":["<sstream>","<string>","<iostream>","<stream>"],"options_hi":["<sstream>","<string>","<iostream>","<stream>"],"answer_en":"<sstream>","answer_hi":"<sstream>"},
  {"num":44,"question_en":"Which operator negates boolean value?","question_hi":"बूलियन वैल्यू को नेगेट करने वाला ऑपरेटर कौन सा है?","options_en":["!","~","^","not"],"options_hi":["!","~","^","not"],"answer_en":"!","answer_hi":"!"},
  {"num":45,"question_en":"Which macro returns function name?","question_hi":"फंक्शन का नाम बताने वाला मैक्रो कौन सा है?","options_en":["__func__","__FUNCTION__","__NAME__","__FN__"],"options_hi":["__func__","__FUNCTION__","__NAME__","__FN__"],"answer_en":"__func__","answer_hi":"__func__"},

  {"num":46,"question_en":"Which header supports assertions?","question_hi":"असर्शन सपोर्ट किस हेडर में है?","options_en":["<cassert>","<assert>","<verify>","<check>"],"options_hi":["<cassert>","<assert>","<verify>","<check>"],"answer_en":"<cassert>","answer_hi":"<cassert>"},
  {"num":47,"question_en":"Which function flushes output buffer?","question_hi":"आउटपुट बफर फ्लश करने वाला फंक्शन कौन सा है?","options_en":["std::flush","std::endl","flush()","end()"],"options_hi":["std::flush","std::endl","flush()","end()"],"answer_en":"std::flush","answer_hi":"std::flush"},
  {"num":48,"question_en":"Which keyword defines constant variable?","question_hi":"कॉन्स्टेंट वैरिएबल डिफाइन करने वाला कीवर्ड कौन सा है?","options_en":["const","constexpr","static","final"],"options_hi":["const","constexpr","static","final"],"answer_en":"const","answer_hi":"const"},
  {"num":49,"question_en":"Which operator deletes dynamic memory?","question_hi":"डायनामिक मेमोरी डिलीट करने वाला ऑपरेटर कौन सा है?","options_en":["delete","free","remove","clear"],"options_hi":["delete","free","remove","clear"],"answer_en":"delete","answer_hi":"delete"},
  {"num":50,"question_en":"Which function is program entry point?","question_hi":"प्रोग्राम का एंट्री पॉइंट कौन सा फंक्शन है?","options_en":["main()","start()","init()","run()"],"options_hi":["main()","start()","init()","run()"],"answer_en":"main()","answer_hi":"main()"}
]

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