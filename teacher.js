const tabs = document.querySelectorAll('.tab');

tabs[0].classList.add('active');
let tabs_active = tabs[0].textContent;
document.getElementById("content_1").innerText = tabs_active;

tabs.forEach(select_tab => {
  select_tab.addEventListener('click', () => {
    tabs.forEach(select__tab => select__tab.classList.remove('active'));
    select_tab.classList.add('active');
    tabs_active = select_tab.textContent;
    document.getElementById("content_1").innerText = tabs_active;
  });
});


const main_tabs = document.querySelectorAll('.main_tab');

main_tabs[0].classList.add('active');

main_tabs.forEach(click_tab => {
  click_tab.addEventListener('click', () => {
    main_tabs.forEach(click__tab => click__tab.classList.remove('active'));
    click_tab.classList.add('active');
    tabs_active = tabs[0].textContent;
    document.getElementById("content_1").innerText = tabs_active;
  });
});





const features = document.querySelector(".features");
const profile = document.getElementById("profile");
const main_profile = document.getElementById("main_profile");

function openProfile() {
  features.style.pointerEvents = "none";
  features.style.userSelect = 'none';
  features.style.webkitUserDrag = 'none';
  features.style.opacity = "0.4";
  features.style.transform = "translateY(45dvh)";
  profile.classList.add("active");
}

function closeProfile() {
  profile.classList.remove("active");
  features.style.transform = "translateY(0)";
  features.style.opacity = "1";
  features.style.userSelect = 'auto';
  features.style.webkitUserDrag = 'auto';
  features.style.pointerEvents = "auto";
}

function openMainProfile() {
  profile.classList.remove("active");
  features.style.transform = "translateY(0)";
  features.style.transform = "translateX(-100vw)";
  main_profile.classList.add("active");
}

function closeMainProfile() {
  main_profile.classList.remove("active");
  features.style.transform = "translateX(0)";
  features.style.opacity = "1";
  features.style.userSelect = 'auto';
  features.style.webkitUserDrag = 'auto';
  features.style.pointerEvents = "auto";
}





let currentTab = "school";
let currentOption = "a";

function selectTab(tab) {
  const __tabs = document.querySelectorAll('.tab');
  __tabs[0].classList.add('active');
  __tabs[1].classList.remove('active');
  __tabs[2].classList.remove('active');
  __tabs[3].classList.remove('active');
  __tabs[4].classList.remove('active');
  currentTab = tab;
  currentOption = "a";
  updateTabs();
}

function selectOption(option) {
  currentOption = option;
  updateTabs();
}

function setTab(id, value) {
  const el = document.getElementById(id);
  if (value && value.trim() !== "") {
    el.innerText = value;
    el.style.display = "inline-block";
  } else {
    el.innerText = "";
    el.style.display = "none";
  }
}

function updateTabs() {
  let h1, t1, t2, t3, t4, t5;
