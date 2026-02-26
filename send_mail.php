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

    // Charger les variables d'environnement
    $env = parse_ini_file(__DIR__ . '/.env');

    try {
        // Configuration SMTP
        $mail->isSMTP();
        $mail->Host       = $env['SMTP_HOST']; // serveur SMTP
        $mail->SMTPAuth   = true;
        $mail->Username   = $env['SMTP_USERNAME']; 
        $mail->Password   = $env['SMTP_PASSWORD']; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = $env['SMTP_PORT'];

        // Expéditeur & destinataire
        $mail->setFrom($email, $name);
        $mail->addAddress('kebbas.chihebeddine1@gmail.com'); // 👉 Ton adresse pour recevoir

        // Contenu du mail
        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message depuis le portfolio';
        $mail->Body    = "<h3>Nom: $name</h3><h3>Email: $email</h3><p>Message: $message</p>";
        $mail->AltBody = "Nom: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        echo "<script>alert('Message envoyé avec succès !'); window.location.href='index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Le message n\'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}'); window.location.href='index.html';</script>";
    }
}
?>
