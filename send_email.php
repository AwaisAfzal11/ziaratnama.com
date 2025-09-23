<?php
// Set headers to return JSON and allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // --- Sanitize and retrieve form data ---
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $personal_contact = isset($_POST['personal_contact']) ? htmlspecialchars(trim($_POST['personal_contact'])) : '';
    $office_address = isset($_POST['office_address']) ? htmlspecialchars(trim($_POST['office_address'])) : '';
    $office_since = isset($_POST['office_since']) ? htmlspecialchars(trim($_POST['office_since'])) : '';
    $office_ownership = isset($_POST['office_ownership']) ? htmlspecialchars(trim($_POST['office_ownership'])) : '';
    $ownership_since = isset($_POST['ownership_since']) ? htmlspecialchars(trim($_POST['ownership_since'])) : '';
    $office_type = isset($_POST['office_type']) ? htmlspecialchars(trim($_POST['office_type'])) : 'Not Specified';
    $office_contact = isset($_POST['office_contact']) ? htmlspecialchars(trim($_POST['office_contact'])) : '';
    $past_business = isset($_POST['past_business']) ? htmlspecialchars(trim($_POST['past_business'])) : '';
    $real_estate_experience = isset($_POST['real_estate_experience']) ? htmlspecialchars(trim($_POST['real_estate_experience'])) : 'Not Specified';
    $business_experience_years = isset($_POST['business_experience_years']) ? htmlspecialchars(trim($_POST['business_experience_years'])) : '';
    $education_level = isset($_POST['education_level']) ? htmlspecialchars(trim($_POST['education_level'])) : '';
    $education_other = isset($_POST['education_other']) ? htmlspecialchars(trim($_POST['education_other'])) : '';
    $investment_capacity = isset($_POST['investment_capacity']) ? number_format(htmlspecialchars(trim($_POST['investment_capacity']))) : '';

    // --- Validation ---
    if (empty($name) || empty($email) || empty($personal_contact)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields (Name, Email, Personal Contact)."]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }
    
    // --- Email Configuration ---
    $to = "zemaydar@gmail.com"; // Updated email address
    $subject = "New Dealer Registration Form Submission: " . $name;
    
    // Construct the email message
    $message = "You have a new dealer registration form submission:\n\n"
             . "========================================\n"
             . "PERSONAL INFORMATION\n"
             . "========================================\n"
             . "Full Name: {$name}\n"
             . "Email: {$email}\n"
             . "Personal Contact No: {$personal_contact}\n\n"
             
             . "========================================\n"
             . "OFFICE INFORMATION\n"
             . "========================================\n"
             . "Office Address: {$office_address}\n"
             . "Office Since (Year): {$office_since}\n"
             . "Office Ownership: {$office_ownership}\n"
             . "Ownership Since (Year): {$ownership_since}\n"
             . "Office Type: {$office_type}\n"
             . "Office Contact No: {$office_contact}\n\n"
             
             . "========================================\n"
             . "BUSINESS & EXPERIENCE\n"
             . "========================================\n"
             . "Past Business Details: {$past_business}\n"
             . "Experience in Real Estate: {$real_estate_experience}\n"
             . "Total Years in Business: {$business_experience_years}\n\n"

             . "========================================\n"
             . "EDUCATION & INVESTMENT\n"
             . "========================================\n"
             . "Education Level: {$education_level}\n"
             . "Other Education Details: {$education_other}\n"
             . "Initial Advertising Investment (PKR): {$investment_capacity}\n";
    
    // Set email headers
    $headers = "From: noreply@investinislamabad.com\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // --- Send Email ---
    if (mail($to, $subject, $message, $headers)) {
        // Success response
        echo json_encode(["status" => "success", "message" => "Thank you for your registration. We will get back to you soon!"]);
    } else {
        // Error response if mail() function fails
        echo json_encode(["status" => "error", "message" => "Failed to send your message. Please try again later."]);
    }
} else {
    // Handle cases where the request method is not POST
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>