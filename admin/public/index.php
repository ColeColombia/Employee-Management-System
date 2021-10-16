<?php
require_once("header.php");

if(isset($_GET['leaveId'])){

$leaveId     = $_GET['leaveId'];
$leaveStatus = $_GET['status'];
send_leave_response($leaveId, $leaveStatus);
}
 ?>

 <h2 class="secondHeading">Employees</h2>

 <div class="table">

   <div class="records">
     <div></div>
     <div>Name</div>
     <div>Surname</div>
     <div>Employee id</div>
     <div>Tax Number</div>

 </div>

 <div class="employee_List">
   <?php showEmployees(); ?>
 </div>

 </div>

  </body>
</html>
