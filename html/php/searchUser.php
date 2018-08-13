<?php
$link = mysqli_connect("localhost", "root", "", "database");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$action = $_POST["action"];
$query = "SELECT * FROM users WHERE username = '$action'";
$show = mysqli_query($link, $query) or die ("Error");

$res = "<h4>Verwendete Query:</h4>{$query}<br><br><h4>Gefundene Einträge:</h4><table class='usertable'><tr style='background-color: #1c8adb;color: white;'><td>ID</td><td>Username</td><td>Password</td></tr>";
while ($row = mysqli_fetch_array($show)) {
    $res .= "<tr><td>".$row['id']."</td><td>".$row['username']."</td><td>".$row['password']."</td></tr>";
}
$res .= "</table>";
echo $res;

?>