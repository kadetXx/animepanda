<?php

  $email = $_POST['email'];
  $location = 'Nigeria';
  $deciveType = 'Mobile';

  //database connection

  $mysqli = new mysqli("localhost", "root", "", "firstdb");

  if($mysqli === false){
    die("ERROR: Could not connect to db. " . $mysqli->connect_error);
  } else {

    $sql = "INSERT INTO subscribers (email, location, deviceType) VALUES ('$email', '$location', '$deciveType')";
  
    if($mysqli->query($sql) === true){
      echo "Records inserted successfully.";
    } else{
      echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
    }
 
    // Close connection
    $mysqli->close(); 
  }
?>