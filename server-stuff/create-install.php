<html>
<body>

Create Install: <?php echo $_POST["install"]; ?>

<br>
<br>
<?php echo './wp-setup.sh ' . $_POST["install"]; ?>
<br>
<br>

<?php 
  
  // Use ls command to shell_exec 
  // function 
$output = shell_exec('./wp-setup.sh ' . $_POST["install"]);  
  // Display the list of all file 
  // and directory 
  echo "<pre>$output</pre>"; 
  ?>

Showing All INSTALLS:

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
