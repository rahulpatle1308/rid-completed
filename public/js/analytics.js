let currentTestId = null;

function openDetails(testId) {
  if (!testId) return alert("Test ID missing");

  currentTestId = testId;

  fetch(`/api/teacher/analytics/tests/${testId}`, {
    credentials: "include"
  })
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("detailsBody");
      tbody.innerHTML = "";

      if (!data.length) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align:center">
              No student data found
            </td>
          </tr>`;
      }

      data.forEach(s => {
        tbody.innerHTML += `
          <tr>
            <td>${s.rank}</td>
            <td>${s.name}</td>
            <td>${s.roll || "-"}</td>
            <td>${s.email}</td>
            <td>${s.parentContact || "-"}</td>
            <td>${s.marks}</td>
            <td>${s.status || "Completed"}</td>
          </tr>
        `;
      });

      document.getElementById("detailsModal").classList.add("active");
    })
    .catch(err => {
      console.error("Details error:", err);
      alert("Failed to load details");
    });
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// 🔄 Auto refresh every 5 sec (OK)
setInterval(() => {
  if (currentTestId) openDetails(currentTestId);
}, 5000);
