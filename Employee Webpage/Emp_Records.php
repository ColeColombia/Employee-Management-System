<html>
<head>
<link rel "stylesheet" href="">

<style>
body {
    
    font-family: Arial;
    font-size: 17px;
    padding: 8px;
}

* {
  box-sizing: border-box;

}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -16;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.btn {
  background-color: #04AA6D;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
</head>

<body>

<h1>Employee Information</h1>

<div class="row">
    <div class="col-75">
        <div class="container">
            <form action="/action_page.php">

    <div class="row">
        <div class="col-50">
         <h3>Personal Information</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="James Dean">
            
            <label for="email"><i class="fa fa-envelope"></i> Email</label> 
            <input type="text" id="email" name="email" placeholder="James@example.com">
            
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="43 F. 2th Street">
            
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="Cape Town">

            <label for="empnum"><i class="fa fa-emp-num"></i> Employee Number</label>
            <input type="text" id="empnum" name="employeenumber" placeholder="1053">

            <label for="dep"><i class="fa fa-dep"></i> Department</label>
            <input type="text" id="dep" name="department" placeholder="Finance">





























