const main_tabs = document.querySelectorAll('.main_tab');

main_tabs[0].classList.add('active');

main_tabs.forEach(click_tab => {
  click_tab.addEventListener('click', () => {
    main_tabs.forEach(click_tab => click_tab.classList.remove('active'));
    click_tab.classList.add('active');
  });
});


const tabs = document.querySelectorAll('.tab');

tabs[0].classList.add('active');

tabs.forEach(select_tab => {
  select_tab.addEventListener('click', () => {
    tabs.forEach(select_tab => select_tab.classList.remove('active'));
    select_tab.classList.add('active');
  });
});




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

function updateTabs() {
  let h1, t1, t2, t3, t4, t5, c1;

  if (currentTab === "school" && currentOption === "a") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
    c1 = "School";
  }
  else if (currentTab === "school" && currentOption === "b") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
    c1 = "Event";
  }
  else if (currentTab === "school" && currentOption === "c") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
    c1 = "Calendar";
  }
  else if (currentTab === "school" && currentOption === "d") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
    c1 = "Attendance";
  }
  else if (currentTab === "school" && currentOption === "e") {
    h1 = "School";
    t1 = "School";
    t2 = "Event";
    t3 = "Calendar";
    t4 = "Attendance";
    t5 = "Notification";
    c1 = "Notification";
  }

  else if (currentTab === "class" && currentOption === "a") {
    h1 = "Class";
    t1 = "Class";
    t2 = "Class Attendance";
    t3 = "";
    t4 = "";
    t5 = "";
    c1 = "Class";
  }
  else if (currentTab === "class" && currentOption === "b") {
    h1 = "Class";
    t1 = "Class";
    t2 = "Class Attendance";
    t3 = "";
    t4 = "";
    t5 = "";
    c1 = "Class Attendance";
  }

  else if (currentTab === "subject" && currentOption === "a") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Missed Topic Student";
    t3 = "Subject Activity";
    t4 = "";
    t5 = "";
    c1 = "Subject";
  }
  else if (currentTab === "subject" && currentOption === "b") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Missed Topic Student";
    t3 = "Subject Activity";
    t4 = "";
    t5 = "";
    c1 = "Missed Topic Student";
  }
  else if (currentTab === "subject" && currentOption === "c") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Missed Topic Student";
    t3 = "Subject Activity";
    t4 = "";
    t5 = "";
    c1 = "Subject Activity";
  }

  else if (currentTab === "student" && currentOption === "a") {
    h1 = "Student";
    t1 = "Student";
    t2 = "Student Missed Topic";
    t3 = "";
    t4 = "";
    t5 = "";
    c1 = "Student";
  } 
  else if (currentTab === "student" && currentOption === "b") {
    h1 = "Student";
    t1 = "Student";
    t2 = "Student Missed Topic";
    t3 = "";
    t4 = "";
    t5 = "";
    c1 = "Student Missed Topic";
  }

  else if (currentTab === "timetable" && currentOption === "a") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Date Specific Timetable";
    t3 = "Exam Timetable";
    t4 = "";
    t5 = "";
    c1 = "Timetable";
  } 
  else if (currentTab === "timetable" && currentOption === "b") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Date Specific Timetable";
    t3 = "Exam Timetable";
    t4 = "";
    t5 = "";
    c1 = "Date Specific Timetable";
  }
  else if (currentTab === "timetable" && currentOption === "c") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Date Specific Timetable";
    t3 = "Exam Timetable";
    t4 = "";
    t5 = "";
    c1 = "Exam Timetable";
  }

  document.getElementById("header_1").innerText = h1;
  document.getElementById("tab_1").innerText = t1;
  document.getElementById("tab_2").innerText = t2;
  document.getElementById("tab_3").innerText = t3;
  document.getElementById("tab_4").innerText = t4;
  document.getElementById("tab_5").innerText = t5;
  document.getElementById("content_1").innerText = c1;
}














