<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // Sanitize and assign values
  $name = filter_var($data["name"] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($data["email"] ?? '', FILTER_SANITIZE_EMAIL);
    $company = filter_var($data["company"] ?? '', FILTER_SANITIZE_STRING);
    $phone = filter_var($data["phone"] ?? '', FILTER_SANITIZE_STRING);
    $service = filter_var($data["service"] ?? '', FILTER_SANITIZE_STRING);
    $messageContent = filter_var($data["message"] ?? '', FILTER_SANITIZE_STRING);

    if (empty($name) || empty($email) || empty($messageContent)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields"]);
        exit;
    }

    // Email format validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format"]);
        exit;
    }

    // Email settings
    $to = "mindlabs@gmail.com";
    $subject = "New Inquiry from MindLab Training via Contact Form";
 $emailBody = "New Contact Form Submission:\n\n";
    $emailBody .= "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Company: $company\n";
    $emailBody .= "Phone: $phone\n";
    $emailBody .= "Service Interested In: $service\n";
    $emailBody .= "Message: $messageContent\n";

    // Email headers
    $headers = "From: noreply@mindlabtraining.net\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Thank you! We will get back to you shortly."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send your message. Please try again later."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
