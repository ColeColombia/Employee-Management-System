<?php
require_once("header.php");
 ?>

 <div class="selected_emp_details">

 <?php user_details($user_id['employee_id']); ?>

 </div>

<?php if($access == "Medium") showEmployeeList(); ?>

  </body>
</html>
