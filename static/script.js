// const sections = [...document.querySelectorAll(".card")];
// const params = new URLSearchParams(window.location.search);

// function getName() {
//   let name = params.get("name");
//   if (!name) {
//     const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
//     if (path.startsWith("name=")) name = path.slice(5);
//   }
//   return decodeURIComponent(name || "Friend").replace(/[<>]/g, "").trim() || "Friend";
// }
// const name = getName();
// document.getElementById("userName").textContent = name;
// document.getElementById("successName").textContent = name;

// function show(id) {
//   sections.forEach(s => s.classList.toggle("active", s.id === id));
//   window.scrollTo({top:0, behavior:"smooth"});
// }

// document.querySelectorAll(".next-btn").forEach(btn => {
//   btn.addEventListener("click", () => show(btn.dataset.next));
// });

// const wishBox = document.getElementById("wishBox");
// const wishText = document.getElementById("wishText");
// document.querySelectorAll(".choice").forEach(btn => {
//   btn.addEventListener("click", () => {
//     wishText.innerHTML = btn.dataset.message;
//     wishBox.classList.add("show");
//     document.getElementById("wishContinue").dataset.secret =
//       btn.classList.contains("secret-choice") ? "true" : "false";
//     wishBox.scrollIntoView({behavior:"smooth", block:"center"});
//   });
// });

// document.getElementById("wishContinue").addEventListener("click", function() {
//   if (this.dataset.secret === "true") show("party");
//   else {
//     wishBox.classList.remove("show");
//     document.querySelector(".choice-grid").scrollIntoView({behavior:"smooth",block:"center"});
//   }
// });

// const noBtn = document.getElementById("noBtn");
// const tease = document.getElementById("tease");
// let escapes = 0;

// function escapeNo() {
//   const area = document.querySelector(".party-buttons");
//   const maxX = Math.max(0, area.clientWidth - noBtn.offsetWidth - 10);
//   const maxY = Math.max(0, area.clientHeight - noBtn.offsetHeight - 10);
//   noBtn.style.position = "absolute";
//   noBtn.style.left = Math.random() * maxX + "px";
//   noBtn.style.top = Math.random() * maxY + "px";
//   escapes++;
//   const messages = ["Nice try 😂", "Nope! 😌", "Try again!", "Not happening 😭", "Party se bach nahi sakti! 😂"];
//   tease.textContent = messages[Math.min(escapes - 1, messages.length - 1)];
// }
// ["mouseenter","touchstart","pointerdown"].forEach(evt => noBtn.addEventListener(evt, e => {
//   e.preventDefault();
//   escapeNo();
// }));

// document.getElementById("yesBtn").addEventListener("click", () => show("details"));

// document.getElementById("partyForm").addEventListener("submit", async e => {
//   e.preventDefault();
//   const location = document.getElementById("location").value.trim();
//   const partyTime = document.getElementById("partyTime").value;
//   const status = document.getElementById("status");
//   const submit = document.getElementById("submitBtn");

//   if (!location || !partyTime) return;
//   submit.disabled = true;
//   submit.textContent = "Sending... 💌";
//   status.textContent = "";

//   try {
//     const res = await fetch("/api/party", {
//       method: "POST",
//       headers: {"Content-Type":"application/json"},
//       body: JSON.stringify({name, location, partyTime})
//     });
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message || "Could not send details.");
//     show("success");
//   } catch (err) {
//     status.textContent = err.message;
//     status.style.color = "#d33";
//     submit.disabled = false;
//     submit.textContent = "Send the Party Details 🎉";
//   }
// });
