<?php

  //get email value from form post
  $email = $_POST['email'];

  //retrieve user device cookie
  $deciveType = $_COOKIE["device"];

  //database connection credentials

  $host = "uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
  $username = "di4cjt3koqw6qt8u";
  $password = "b1r2w0qjf3ohrgcy";
  $dbName = "uex4eexutw4f8l36";

  //make sql connection request
  $mysqli = new mysqli($host, $username, $password, $dbName);

  //return error message is connection is unsuccessful
  if($mysqli === false){
    die("ERROR: Could not connect to db. " . $mysqli->connect_error);
  } else {

    //insert values into sql table
    $sql = "INSERT INTO subscribers (email, deviceType) VALUES ('$email', '$deciveType')";
  
    //send message to ajax on form submission status
    if($mysqli->query($sql) === true){
      echo "Your email is now in our waiting list!";
    } else{
      echo "ERROR: Could not execute $sql. " . $mysqli->error;
    }
 
    // Close connection
    $mysqli->close(); 
  }
?>
