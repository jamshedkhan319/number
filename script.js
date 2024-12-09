// সঠিক ইউজারনেম এবং পাসওয়ার্ড
const correctUsername = "jk";
const correctPassword = "jk";

// ডাটা তালিকা তৈরি
const contacts = [
  { name: "Ammo", phone: "+8801881524710" },
  { name: "Apu", phone: "+8801612944496" },
  { name: "vaiya soudi number", phone: "+00966502018892" },
{ name: " দুকান মোবাইল", phone: "+8801847611697" },
{ name: "আমার সৌদি নাম্বার", phone: "0571850169" },
{ name: "জামাল মামা", phone: "+966543204270" },
{ name: "membar non", phone: "0572646662" },
];


// লগইন ফর্ম প্রসেস
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    // সফল লগইন
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("list-container").classList.remove("hidden");
    renderContacts();
  } else {
    alert("Rong User Name Password");
  }
});

// লিস্ট রেন্ডার করার ফাংশন
const renderContacts = () => {
  const contactList = document.getElementById("contact-list");
  contacts.forEach((contact) => {
    // লিস্ট আইটেম তৈরি
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div class="name">${contact.name}</div>
      <div class="number-section">
        <span class="number">${contact.phone}</span>
        <a href="tel:${contact.phone}" class="call-btn">Call</a>
      </div>
    `;
    contactList.appendChild(listItem);
  });
};
