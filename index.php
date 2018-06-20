<html>
    <head>
        <?php 
            $myfile = fopen("messages.json", "r") or $myfile = "";
        ?>
        <script>
             <?php 
                echo "let pdata=[";
                if ($myfile) {
                    while (($line = fgets($myfile)) !== false) {
                        // process the line read.
                         echo "'" , substr($line,0 , -1), "'", ",";
                    }
                    echo "];";
                    fclose($myfile);
                }
             ?> 
        </script>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.js"></script>
        <script src="js/sketch.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
        <link rel="stylesheet" href="css/main.css"/>
    </head>
    <body>
        <?php
        ?>
    </body>
</html>