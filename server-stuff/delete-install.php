<html>
<body>

You are DELETING <?php echo $_POST["install"]; ?>
<br>

<?php echo './wp-delete.sh ' . $_POST["install"]; ?>

<?php 
  
  // Use ls command to shell_exec 
  // function 
$output = shell_exec('./wp-delete.sh ' . $_POST["install"] );  
  // Display the list of all file 
  // and directory 
  echo "<pre>$output</pre>"; 

  ?>

Showing the remaining INSTALLS:

<?php

$lsoutput = shell_exec('ls /etc/nginx/sites-enabled/');  
// Display the list of all file 
// and directory 
echo "<pre>$lsoutput</pre>";   

?>


</body>

<footer>
<button onclick="window.location.href = '/';">Back</button>
</footer>

</html>
