// ===== QR SHARE SYSTEM =====
let currentShareUrl = "";

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("enroll-btn") &&
        e.target.innerText.includes("Send")) {

        const card = e.target.closest(".test-service-card");
        const testId = card.querySelector(".view-btn").dataset.id;

        openQrPopup(testId);
    }
});

function openQrPopup(testId) {
    const modal = document.getElementById("qrModal");
    const canvas = document.getElementById("qrCanvas");
    const linkInput = document.getElementById("testLink");

    const url = `${window.location.origin}/student-test/${testId}`;
    currentShareUrl = url;

    linkInput.value = url;

    QRCode.toCanvas(canvas, url, { width: 200 }, function (error) {
        if (error) console.error(error);
    });

    modal.style.display = "flex";
}

document.getElementById("closeQrBtn").onclick = () => {
    document.getElementById("qrModal").style.display = "none";
};

document.getElementById("copyBtn").onclick = () => {
    navigator.clipboard.writeText(currentShareUrl);
    alert("Link copied!");
};

document.getElementById("downloadBtn").onclick = () => {
    const canvas = document.getElementById("qrCanvas");
    const link = document.createElement("a");
    link.download = "test-qr.png";
    link.href = canvas.toDataURL();
    link.click();
};

document.getElementById("whatsappBtn").onclick = () => {
    const text = encodeURIComponent(
        "Take this test:\n" + currentShareUrl
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
};
