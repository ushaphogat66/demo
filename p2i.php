<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical 2</title>
</head>
<body>
    <h1 style="text-align:center">Practical 2</h1>
    <p>2. Write a PHP code which accepts a number (from 1-12) as a month value and displays the number of days in that month (use Switch case).</p>
    
    <form method="POST">
        <div style="margin:auto;">
            <label for="month">
                Enter Month number:
            </label>
            <input type="number" name="month" id="month">
            <input type="submit" value="Calculate">
        </div>
    </form>

    <?php
        $month = isset($_POST['month']) ? $_POST['month'] : null;

        if ($month == 2) {
            echo "
                <form method='POST'>
                    <input type='hidden' name='month' value='$month'>
                    <label for='year'>
                        Enter Year:
                    </label>
                    <input type='number' name='year' id='year'><br>
                    <input type='submit' value='Submit'>
                </form>
            ";
        }
    ?>

    <?php
        $year = isset($_POST['year']) ? $_POST['year'] : null;
        $days = 0;

        switch($month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                $days = 31;
                break;
            
            case 4:
            case 6:
            case 9:
            case 11:
                $days = 30;
                break; 
            
            case 2:
                if ($year % 4 == 0 && ($year % 100 != 0 || $year % 400 == 0)) {
                    $days = 29;
                } else {
                    $days = 28;
                }
                break;
                
            default:
                if ($month){
                echo "Invalid Input!";
                }
                break;
        }
        
    ?>

    <?php if ($month){
        echo "<p>Number of Days in month $month : $days</p>";
    }
    ?>

</body>
</html>