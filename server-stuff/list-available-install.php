<html>
<body>
Available Install List:
<?php 
  
  // Use ls command to shell_exec 
  // function 
$output = shell_exec('ls /etc/nginx/sites-available/');  
  // Display the list of all file 
  // and directory 
  echo "<pre>$output</pre>"; 
  ?>

</body>
<footer>
<button onclick="window.location.href = '/';">Back</button>
</footer>
</html>
