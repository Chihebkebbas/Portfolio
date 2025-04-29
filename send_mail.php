<?php
// Charger PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Vérifier que le formulaire est envoyé
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {
        // Configuration SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // serveur SMTP de Gmail
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kebbas.chihebeddine1@gmail.com'; // 👉 Ton adresse Gmail
        $mail->Password   = 'agvkbtooblwjvyrn'; // 👉 Ton mot de passe d'application Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Expéditeur & destinataire
        $mail->setFrom($email, $name);
        $mail->addAddress('kebbas.chihebeddine1@gmail.com'); // 👉 Ton adresse pour recevoir

        // Contenu du mail
        $mail->isHTML(true);
        $mail->Subject = 'New message from portfolio contact form';
        $mail->Body    = "<h3>Name: $name</h3><h3>Email: $email</h3><p>Message: $message</p>";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}'); window.location.href='index.html';</script>";
    }
}
?>
