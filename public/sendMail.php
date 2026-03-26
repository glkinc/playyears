<?php
// sendMail.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validate input
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form correctly.";
        exit;
    }

    // Email setup
    $to = "hello@theplayyears.com";
    $subject = "New message from The Play Years contact form";
    $content = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $name <$email>";

    // Try to send
    if (mail($to, $subject, $content, $headers)) {
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    http_response_code(403);
    echo "Invalid request.";
}
?>