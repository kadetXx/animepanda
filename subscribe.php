<?php

  $email = $_POST['email'];
  $deciveType = $_COOKIE["device"];

  //database connection

  $mysqli = new mysqli("localhost", "root", "", "firstdb");

  if($mysqli === false){
    die("ERROR: Could not connect to db. " . $mysqli->connect_error);
  } else {

    $sql = "INSERT INTO subscribers (email, deviceType) VALUES ('$email', '$deciveType')";
  
    if($mysqli->query($sql) === true){
      echo "Records inserted successfully.";
    } else{
      echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
    }
 
    // Close connection
    $mysqli->close(); 
  }
?>
