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


const todo_tabs = document.querySelectorAll('.todo_tab');

todo_tabs[0].classList.add('active');

todo_tabs.forEach(find_tab => {
  find_tab.addEventListener('click', () => {
    todo_tabs.forEach(find_tab => find_tab.classList.remove('active'));
    find_tab.classList.add('active');
  });
});




let currentTab = "class";
let currentOption = "a";

function selectTab(tab) {
  const __tabs = document.querySelectorAll('.tab');
  __tabs[0].classList.add('active');
  __tabs[1].classList.remove('active');
  const todo__tabs = document.querySelectorAll('.todo_tab');
  todo__tabs[0].classList.add('active');
  todo__tabs[1].classList.remove('active');
  todo__tabs[2].classList.remove('active');
  todo__tabs[3].classList.remove('active');
  currentTab = tab;
  currentOption = "a";
  updateTabs();
}

function selectOption(option) {
  const ___tabs = document.querySelectorAll('.tab');
  ___tabs[0].classList.add('active');
  ___tabs[1].classList.remove('active');
  const todo___tabs = document.querySelectorAll('.todo_tab');
  todo___tabs[0].classList.add('active');
  todo___tabs[1].classList.remove('active');
  todo___tabs[2].classList.remove('active');
  todo___tabs[3].classList.remove('active');
  currentOption = option;
  updateTabs();
}

function updateTabs() {
  let h1, t1, t2, tt1, tt2, tt3, tt4;

  if (currentTab === "class" && currentOption === "a") {
    h1 = "Class";
    t1 = "Class";
    t2 = "Class Attendance";
    tt1 = "Class";
    tt2 = "Add Class";
    tt3 = "Update Class";
    tt4 = "Remove Class";
  } 
  else if (currentTab === "class" && currentOption === "b") {
    h1 = "Class";
    t1 = "Class";
    t2 = "Class Attendance";
    tt1 = "Class Attendance";
    tt2 = "Add Class Attendance";
    tt3 = "Update Class Attendance";
    tt4 = "Remove Class Attendance";
  }

  else if (currentTab === "subject" && currentOption === "a") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Subject Attendance";
    tt1 = "Subject";
    tt2 = "Add Subject";
    tt3 = "Update Subject";
    tt4 = "Remove Subject";
  } 
  else if (currentTab === "subject" && currentOption === "b") {
    h1 = "Subject";
    t1 = "Subject";
    t2 = "Subject Attendance";
    tt1 = "Subject Attendance";
    tt2 = "Add Subject Attendance";
    tt3 = "Update Subject Attendance";
    tt4 = "Remove Subject Attendance";
  }

  else if (currentTab === "student" && currentOption === "a") {
    h1 = "Student";
    t1 = "Student";
    t2 = "Student Attendance";
    tt1 = "Student";
    tt2 = "Add Student";
    tt3 = "Update Student";
    tt4 = "Remove Student";
  } 
  else if (currentTab === "student" && currentOption === "b") {
    h1 = "Student";
    t1 = "Student";
    t2 = "Student Attendance";
    tt1 = "Student Attendance";
    tt2 = "Add Student Attendance";
    tt3 = "Update Student Attendance";
    tt4 = "Remove Student Attendance";
  }

  else if (currentTab === "teacher" && currentOption === "a") {
    h1 = "Teacher";
    t1 = "Teacher";
    t2 = "Teacher Attendance";
    tt1 = "Teacher";
    tt2 = "Add Teacher";
    tt3 = "Update Teacher";
    tt4 = "Remove Teacher";
  } 
  else if (currentTab === "teacher" && currentOption === "b") {
    h1 = "Teacher";
    t1 = "Teacher";
    t2 = "Teacher Attendance";
    tt1 = "Teacher Attendance";
    tt2 = "Add Teacher Attendance";
    tt3 = "Update Teacher Attendance";
    tt4 = "Remove Teacher Attendance";
  }

  else if (currentTab === "timetable" && currentOption === "a") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Timetable Attendance";
    tt1 = "Timetable";
    tt2 = "Add Timetable";
    tt3 = "Update Timetable";
    tt4 = "Remove Timetable";
  } 
  else if (currentTab === "timetable" && currentOption === "b") {
    h1 = "Timetable";
    t1 = "Timetable";
    t2 = "Timetable Attendance";
    tt1 = "Timetable Attendance";
    tt2 = "Add Timetable Attendance";
    tt3 = "Update Timetable Attendance";
    tt4 = "Remove Timetable Attendance";
  }

  document.getElementById("header_1").innerText = h1;
  document.getElementById("tab_1").innerText = t1;
  document.getElementById("tab_2").innerText = t2;
  document.getElementById("todo_tab_1").innerText = tt1;
  document.getElementById("todo_tab_2").innerText = tt2;
  document.getElementById("todo_tab_3").innerText = tt3;
  document.getElementById("todo_tab_4").innerText = tt4;
}








