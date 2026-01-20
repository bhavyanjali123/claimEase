async function loadClaims() {
    const token = localStorage.getItem("token");

    const res = await fetch("https://claimease-1.onrender.com/claims", {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const data = await res.json();

    const tableBody = document.getElementById("claimsTableBody");
    tableBody.innerHTML = "";  // clear old rows

    data.forEach(claim => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${claim.employeeName || "Unknown"}</td>
            <td>₹${claim.amount}</td>
            <td><button onclick="viewPDF('${claim._id}')" class="btn view">View PDF</button></td>
            <td>
                <button onclick="approveClaim('${claim._id}')" class="btn approve">Approve</button>
                <button onclick="rejectClaim('${claim._id}')" class="btn reject">Reject</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}
