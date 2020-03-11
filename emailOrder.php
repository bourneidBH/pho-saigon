<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$errors = array();
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$pickupTime = $_POST['pickupTime'];
$orderDetails = $_POST['orderDetails'];
$specialRequests = $_POST['specialRequests'];
$orderSubtotal = $_POST['orderSubtotal'];
$tax = $_POST['tax'];
$total = $_POST['total'];
$content = "Name: $name \n";
$content .= "Phone: $phone \n";
$content .= "Email: $email \n";
$content .= "Order pick-up time: $pickupTime \n";
$content .= "Order details: $orderDetails \n";
$content .= "Special requests: $specialRequests \n";
$content .= "Order subtotal: $orderSubtotal \n";
$content .= "Tax: $tax \n Total: $total";
  
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = 'Invalid email';
    };
  };
  
  if (empty($_POST['content'])) {
    $errors[] = 'Message is empty';
  } else {
    $content = $_POST['content'];
  };

  // build email
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    $emailBody = "
    <html>
    <head>
      <title>New order from PhoSaigon-mke.com</title>
    </head>
    <body>
      <div style=\"padding:20px;\">
        Date: <span style=\"color:#888\">$date</span>
        <br />
        Order Info: <div style=\"color:#888\">$content</div>
      </div>
    </body>
    </html>
    ";

    $headers = 	'From: Order Form <' . $email . '>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = $user;
    $subject = 'New order from PhoSaigon-mke.com';
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    };
  };
};
?>

<?php if (!empty($errors)) : ?> 

  {
    "status": "fail",
    "error":  <?php echo json_encode($errors) ?>
  }
<?php endif; ?>
  
<?php if (isset($sent) && $sent === true) : ?> 

  {
    "status": "success",
    "message": "Your order was successfully submitted. We will contact you if we have any questions."
  }
<?php endif; ?>