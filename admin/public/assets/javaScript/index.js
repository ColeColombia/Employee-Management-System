
$(document).ready(function(){

$(".department").click(()=>{
  $("#popUpWindow").css("display", "block")
  $(".remove_employee_popup").css("display", "none")
  $(".leave_response_r").css("display", "none")
  $(".occupation_popup").css("display", "none")
  $(".leave_popup").css("display", "none")
  $("#employee-popup").css("display", "none")
  $(".delete_department").css("display", "none")
})

$(".closeButton").click(()=>{
  $("#popUpWindow").css("display", "none")
})

$(".remove_department").click(()=>{
  $(".delete_department").css("display", "block")
  $(".remove_employee_popup").css("display", "none")
  $(".leave_response_r").css("display", "none")
  $(".occupation_popup").css("display", "none")
  $(".leave_popup").css("display", "none")
  $("#employee-popup").css("display", "none")
  $("#popUpWindow").css("display", "none")
})

$(".close_delete_dep").click(()=>{
  $(".delete_department").css("display", "none")
 $(".confirm_before").css("display", "block")
})

//add occupations
$(".add_occupation").click(()=>{
  $(".occupation_popup").css("display", "block")
  $(".remove_employee_popup").css("display", "none")
  $(".leave_response_r").css("display", "none")
  $(".delete_department").css("display", "none")
  $(".leave_popup").css("display", "none")
  $("#employee-popup").css("display", "none")
  $("#popUpWindow").css("display", "none")
})

$(".confirm_before_occu").click(()=>{
  $(".create_occupation").css("display", "block")
  $(".leave_response_r").css("display", "none")
  $(".confirm_before_occu").css("display", "none")
})

$(".close_occupation").click(()=>{
  $(".occupation_popup").css("display", "none")
 $(".confirm_before").css("display", "block")
})

//------------------------
$(".add_leave_type").click(()=>{
  $(".leave_popup").css("display", "block")
  $(".remove_employee_popup").css("display", "none")
  $(".leave_response_r").css("display", "none")
  $(".occupation_popup").css("display", "none")
  $("#employee-popup").css("display", "none")
  $("#popUpWindow").css("display", "none")
  $(".delete_department").css("display", "none")
})

$(".exit_leave").click(()=>{
  $(".leave_popup").css("display", "none")
})

$(".employee").click(()=>{
  $("#employee-popup").css("display", "block")
  $(".remove_employee_popup").css("display", "none")
  $(".leave_response_r").css("display", "none")
  $(".occupation_popup").css("display", "none")
  $(".leave_popup").css("display", "none")
  $("#popUpWindow").css("display", "none")
  $(".delete_department").css("display", "none")
})

$(".closePopup").click(()=>{
  $("#employee-popup").css("display", "none")
})

$(".employee_leave_response").click(()=>{
  $(".leave_response_r").css("display", "block")
  $(".remove_employee_popup").css("display", "none")
  $(".occupation_popup").css("display", "none")
  $(".delete_department").css("display", "none")
  $(".leave_popup").css("display", "none")
  $("#employee-popup").css("display", "none")
  $("#popUpWindow").css("display", "none")
})

$(".leave_responseClose").click(()=>{
  $(".leave_response_r").css("display", "none")
})

$(".remove_employee").click(()=>{
    $(".remove_employee_popup").css("display", "block")
    $(".leave_response_r").css("display", "none")
    $(".occupation_popup").css("display", "none")
    $(".delete_department").css("display", "none")
    $(".leave_popup").css("display", "none")
    $("#employee-popup").css("display", "none")
    $("#popUpWindow").css("display", "none")
})

$(".close_remove_employee").click(()=>{
  $(".remove_employee_popup").css("display", "none")
})

$(".remove_button").click(()=>{

  let form = document.querySelector("#rem_d_form");
  let action = form.getAttribute("action");
  let form_data = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('X-Requested-With', 'deleteDep');
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if(result){
        alert("Department deleted successfully");
      }
    }
  };
  xhr.send(form_data);

})

$(".rem_emp").click(()=>{

  let form = document.querySelector("#rev_emp_form");
  let action = form.getAttribute("action");
  let form_data = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('X-Requested-With', 'delete_employee');
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if(result){
        alert("Employee deleted successfully");
      }
    }
  };
  xhr.send(form_data);

})

$(".subButton").click(()=>{

  let form = document.querySelector("#dep_form");
  let action = form.getAttribute("action");
  let form_data = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('X-Requested-With', 'ajaxRequest');
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if(result){
        alert("Department added successfully");
      }
    }
  };
  xhr.send(form_data);

})

$(".employee-submit").click(()=>{
  let form = document.querySelector("#form-emp");
  let action = form.getAttribute("action");
  let form_data = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if(result){
        alert("Employee added successfully");
      }
    }
  };
  xhr.send(form_data);
})

//add leave types
$(".leave_submit").click(()=>{
  let form = document.querySelector("#leave_form");
  let action = form.getAttribute("action");
  let form_data = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('X-Requested-With', 'addLeave');
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if(result){
        alert("Leave added successfully");
      }
    }
  };
  xhr.send(form_data);
})

//update access
$(".submit_access").click(()=>{
  let form = document.querySelector("#access_form");
  let action = form.getAttribute("action");
  let form_data = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('X-Requested-With', 'updateAccess');
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if(result){
        alert("access updated successfully");
      }
    }
  };
  xhr.send(form_data);
})

//update admin pic
$(".update_image").click(()=>{
  let form = document.querySelector("#admin_pic_form");
  let action = form.getAttribute("action");
  let form_data = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('X-Requested-With', 'updateAdminPic');
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if(result){
        alert("admin image updated successfully");
      }
    }
  };
  xhr.send(form_data);
})

})
