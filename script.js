const nameInput = document.getElementById("nameInput");
const previewName = document.getElementById("previewName");

nameInput.addEventListener("input", function () {
    previewName.textContent = nameInput.value || "Your Name";
});
const jobInput = document.getElementById("jobInput");
const previewJob = document.getElementById("previewJob");

jobInput.addEventListener("input", function () {
    previewJob.textContent = jobInput.value || "Your Job Title";
});
const emailInput = document.getElementById("emailInput");
const previewEmail = document.getElementById("previewEmail");

emailInput.addEventListener("input", function () {
    previewEmail.textContent =
        emailInput.value
        ? " " + emailInput.value
        : "your@email.com";
});
const phoneInput = document.getElementById("phoneInput");
const previewPhone = document.getElementById("previewPhone");

phoneInput.addEventListener("input", function () {
    previewPhone.textContent =
        phoneInput.value
        ? " " + phoneInput.value
        : "Your Phone Number";
});
const aboutInput = document.getElementById("aboutInput");
const previewAbout = document.getElementById("previewAbout");

aboutInput.addEventListener("input", function () {
    previewAbout.textContent =
        aboutInput.value || "Your introduction will appear here.";
});
const educationInput = document.getElementById("educationInput");
const previewEducation = document.getElementById("previewEducation");

educationInput.addEventListener("input", function () {
    previewEducation.textContent =
        educationInput.value || "Your education will appear here.";
});
const experienceInput = document.getElementById("experienceInput");
const previewExperience = document.getElementById("previewExperience");

experienceInput.addEventListener("input", function () {
    previewExperience.textContent =
        experienceInput.value || "Your experience will appear here.";
});
const skillInput = document.getElementById("skillInput");
const addSkillBtn = document.getElementById("addSkillBtn");
const skillsList = document.getElementById("skillsList");
const previewSkills = document.getElementById("previewSkills");

let skills = [];

addSkillBtn.addEventListener("click", function () {

    const skill = skillInput.value.trim();

    if (skill === "") {
        return;
    }

    skills.push(skill);

    skillInput.value = "";

    showSkills();
});

function showSkills() {

    skillsList.innerHTML = "";
    previewSkills.innerHTML = "";

    skills.forEach(function (skill) {

        const skillItem = document.createElement("span");
        skillItem.textContent = skill;
        skillItem.classList.add("skill-chip");

        skillsList.appendChild(skillItem);

        const previewSkill = document.createElement("span");
        previewSkill.textContent = skill;
        previewSkill.classList.add("skill-chip");

        previewSkills.appendChild(previewSkill);
    });
}
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {

    nameInput.value = "";
    jobInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    aboutInput.value = "";
    educationInput.value = "";
    experienceInput.value = "";

    skills = [];
    previewSkills.innerHTML = "";

    previewName.textContent = "Your Name";
    previewJob.textContent = "Your Job Title";
    previewEmail.textContent = "your@email.com";
    previewPhone.textContent = "Your Phone Number";
    previewAbout.textContent = "Your introduction will appear here.";
    previewEducation.textContent = "Your education will appear here.";
    previewExperience.textContent = "Your experience will appear here.";

});
const printBtn = document.getElementById("printBtn");
printBtn.addEventListener("click", function () {

    if (
        nameInput.value.trim() === "" ||
        jobInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        aboutInput.value.trim() === "" ||
        educationInput.value.trim() === "" ||
        skills.length === 0
    ) {
        alert("Please complete all required fields before printing.");
        return;
    }

    window.print();

});
const templateSelect = document.getElementById("templateSelect");
const resumeCard = document.querySelector(".resume-card");
templateSelect.addEventListener("change", function () {
resumeCard.classList.remove("modern", "classic", "minimal");

resumeCard.classList.add(templateSelect.value);
});