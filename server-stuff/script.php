<html>
<body>

Welcome <?php echo $_POST["install"]; ?><br>
Your email address is: <?php echo $_POST["install"]; ?>
<br>
<br>
<?php echo './wordpress-setup.sh ' . $_POST["install"]; ?>
<br>
<br>

<?php 
  
  // Use ls command to shell_exec 
  // function 
$output = shell_exec('./wordpress-setup.sh ' . $_POST["install"] );  
  // Display the list of all file 
  // and directory 
  echo "<pre>$output</pre>"; 
  ?>

</body>
</html>
