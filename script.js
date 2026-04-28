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
  const todo__tabs = document.querySelectorAll('.todo_tab');
  todo__tabs[0].classList.add('active');
  todo__tabs[1].classList.remove('active');
  todo__tabs[2].classList.remove('active');
  todo__tabs[3].classList.remove('active');
  currentTab = tab;
  updateTabs();
}

function selectOption(option) {
  const todo___tabs = document.querySelectorAll('.todo_tab');
  todo___tabs[0].classList.add('active');
  todo___tabs[1].classList.remove('active');
  todo___tabs[2].classList.remove('active');
  todo___tabs[3].classList.remove('active');
  currentOption = option;
  updateTabs();
}

function updateTabs() {
  let t1, t2, t3, t4;

  if (currentTab === "class" && currentOption === "a") {
    t1 = "Class";
    t2 = "Add Class";
    t3 = "Update Class";
    t4 = "Remove Class";
  } 
  else if (currentTab === "class" && currentOption === "b") {
    t1 = "Class Attendance";
    t2 = "Add Class Attendance";
    t3 = "Update Class Attendance";
    t4 = "Remove Class Attendance";
  }

  else if (currentTab === "subject" && currentOption === "a") {
    t1 = "Subject";
    t2 = "Add Subject";
    t3 = "Update Subject";
    t4 = "Remove Subject";
  } 
  else if (currentTab === "subject" && currentOption === "b") {
    t1 = "Subject Attendance";
    t2 = "Add Subject Attendance";
    t3 = "Update Subject Attendance";
    t4 = "Remove Subject Attendance";
  }

  else if (currentTab === "student" && currentOption === "a") {
    t1 = "Student";
    t2 = "Add Student";
    t3 = "Update Student";
    t4 = "Remove Student";
  } 
  else if (currentTab === "student" && currentOption === "b") {
    t1 = "Student Attendance";
    t2 = "Add Student Attendance";
    t3 = "Update Student Attendance";
    t4 = "Remove Student Attendance";
  }

  else if (currentTab === "teacher" && currentOption === "a") {
    t1 = "Teacher";
    t2 = "Add Teacher";
    t3 = "Update Teacher";
    t4 = "Remove Teacher";
  } 
  else if (currentTab === "teacher" && currentOption === "b") {
    t1 = "Teacher Attendance";
    t2 = "Add Teacher Attendance";
    t3 = "Update Teacher Attendance";
    t4 = "Remove Teacher Attendance";
  }

  else if (currentTab === "timetable" && currentOption === "a") {
    t1 = "Timetable";
    t2 = "Add Timetable";
    t3 = "Update Timetable";
    t4 = "Remove Timetable";
  } 
  else if (currentTab === "timetable" && currentOption === "b") {
    t1 = "Timetable Attendance";
    t2 = "Add Timetable Attendance";
    t3 = "Update Timetable Attendance";
    t4 = "Remove Timetable Attendance";
  }

  document.getElementById("1").innerText = t1;
  document.getElementById("2").innerText = t2;
  document.getElementById("3").innerText = t3;
  document.getElementById("4").innerText = t4;
}






