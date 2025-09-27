<?php
// Allow from any origin (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Decode JSON input
    $data = json_decode(file_get_contents("php://input"), true);

    // Sanitize inputs
    $name = filter_var($data["name"] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($data["email"] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = filter_var($data["phone"] ?? '', FILTER_SANITIZE_STRING);
    $date = filter_var($data["date"] ?? '', FILTER_SANITIZE_STRING);
    $package = filter_var($data["package"] ?? '', FILTER_SANITIZE_STRING);
    $messageContent = filter_var($data["message"] ?? '', FILTER_SANITIZE_STRING);

    // Validate required fields
    if (empty($name) || empty($email) || empty($messageContent)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields"]);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format"]);
        exit;
    }

    // Email settings
    $to = "ziaratnama.com@gmail.com"; // your email here
    $subject = "New Contact Form Submission - Ziaratnama";

    // Build email body
    $emailBody = "You have a new contact form submission:\n\n";
    $emailBody .= "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Phone: $phone\n";
    $emailBody .= "Preferred Travel Date: $date\n";
    $emailBody .= "Package Interest: $package\n";
    $emailBody .= "Message:\n$messageContent\n";

    // Email headers
    $headers = "From: noreply@ziaratnama.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo json_encode(["status" => "success", "message" => "Thank you! We will get back to you shortly."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send your message. Please try again later."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
