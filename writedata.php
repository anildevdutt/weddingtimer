<?php
    $myfile = fopen("messages.json", "ab") or die("Unable to open file!");
    $msg->uname = $_POST["uname"];
    $msg->message = $_POST["msg"];
    $myJSON = json_encode($msg)."\n";
    fwrite($myfile, $myJSON);
    header("Refresh:0; url=index.php");
?>