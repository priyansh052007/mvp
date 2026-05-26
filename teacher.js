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

  if (currentTab === "school" && currentOption === "a") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
  }
  else if (currentTab === "school" && currentOption === "b") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
  }
  else if (currentTab === "school" && currentOption === "c") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
  }
  else if (currentTab === "school" && currentOption === "d") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
  }
  else if (currentTab === "school" && currentOption === "e") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
  }

  else if (currentTab === "class" && currentOption === "a") {
    h1 = "Class";
    t1 = "Class";
    t2 = "Class Attendance";
    t3 = "";
    t4 = "";
    t5 = "";
  }
  else if (currentTab === "class" && currentOption === "b") {
    h1 = "Class";
    t1 = "Class";
    t2 = "Class Attendance";
    t3 = "";
    t4 = "";
    t5 = "";
  }

  else if (currentTab === "subject" && currentOption === "a") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Missed Topic Student";
    t3 = "Subject Activity";
    t4 = "";
    t5 = "";
  }
  else if (currentTab === "subject" && currentOption === "b") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Missed Topic Student";
    t3 = "Subject Activity";
    t4 = "";
    t5 = "";
  }
  else if (currentTab === "subject" && currentOption === "c") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Missed Topic Student";
    t3 = "Subject Activity";
    t4 = "";
    t5 = "";
  }

  else if (currentTab === "student" && currentOption === "a") {
    h1 = "Student";
    t1 = "Student";
    t2 = "Student Missed Topic";
    t3 = "";
    t4 = "";
    t5 = "";
  } 
  else if (currentTab === "student" && currentOption === "b") {
    h1 = "Student";
    t1 = "Student";
    t2 = "Student Missed Topic";
    t3 = "";
    t4 = "";
    t5 = "";
  }

  else if (currentTab === "timetable" && currentOption === "a") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Date Specific Timetable";
    t3 = "Exam Timetable";
    t4 = "";
    t5 = "";
  } 
  else if (currentTab === "timetable" && currentOption === "b") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Date Specific Timetable";
    t3 = "Exam Timetable";
    t4 = "";
    t5 = "";
  }
  else if (currentTab === "timetable" && currentOption === "c") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Date Specific Timetable";
    t3 = "Exam Timetable";
    t4 = "";
    t5 = "";
  }

  document.getElementById("header_1").innerText = h1;
  /*
  document.getElementById("tab_1").innerText = t1;
  document.getElementById("tab_2").innerText = t2;
  document.getElementById("tab_3").innerText = t3;
  document.getElementById("tab_4").innerText = t4;
  document.getElementById("tab_5").innerText = t5;
  */
  setTab("tab_1", t1);
  setTab("tab_2", t2);
  setTab("tab_3", t3);
  setTab("tab_4", t4);
  setTab("tab_5", t5);
}














