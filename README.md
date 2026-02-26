# Portfolio - Chiheb Eddine KEBBAS

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet met en valeur mes compétences en développement web et en design UI/UX à travers une interface moderne, fluide et responsive.

## 🚀 Aperçu du Projet

Ce portfolio a été conçu pour offrir une expérience utilisateur premium, en s'inspirant des standards de design modernes (notamment l'esthétique Apple style Dark/Light Mode). Il intègre des animations 3D fluides, du glassmorphism et un réseau de particules interactif en arrière-plan.

### ✨ Fonctionnalités Principales

*   **Design Premium & Thèmes Dynamiques :** Un thème sombre profond avec des halos lumineux bleus dynamiques (effets 3D fluides) et un mode clair épuré. Le choix du thème est sauvegardé via `localStorage`.
*   **Animations Fluides :** Utilisation avancée de `ScrollReveal.js` avec des courbes de Bézier personnalisées (spring animations), des mises à l'échelle et des rotations 3D au défilement.
*   **Arrière-plan Interactif :** Un réseau de particules 3D généré via Canvas HTML5, qui réagit aux mouvements de la souris (liens rayonnants).
*   **Glassmorphism :** Effets de flou d'arrière-plan (`backdrop-filter`) sur la barre de navigation et les cartes de présentation pour un rendu moderne et aéré.
*   **Formulaire de Contact Sécurisé :** Intégration de `PHPMailer` avec variables d'environnement (`.env`) protégées pour l'envoi direct d'emails depuis le site.
*   **Totalement Responsive :** Interface adaptée à toutes les tailles d'écrans (ordinateur, tablette, mobile).

## 🛠️ Stack Technique

*   **Frontend :** HTML5, CSS3 (Variables globales, Animations clés, Modèles Flexbox/Grid), Vanilla JavaScript.
*   **Backend (Formulaire) :** PHP, PHPMailer.
*   **Bibliothèques tierces :**
    *   [Typed.js](https://github.com/mattboldt/typed.js) (Effet machine à écrire)
    *   [ScrollReveal.js](https://scrollrevealjs.org/) (Animations au défilement)
    *   [Devicons](https://devicon.dev/) & [Unicons](https://iconscout.com/unicons) (Typographie vectorielle d'icônes)

## 📁 Structure du Projet

```text
├── index.html          # Structure principale de la page
├── style.css           # Feuille de style (Variables, Layout, Animations, Theming)
├── script.js           # Logique JavaScript (Canvas, ScrollReveal, Typed.js, Thème)
├── send_mail.php       # Script d'envoi de mail sécurisé via PHPMailer
├── .env                # (Non inclus) Fichier contenant les identifiants SMTP
├── .gitignore          # Fichiers à ignorer par Git (ex: .env)
├── README.md           # Documentation du projet
└── PHPMailer/          # Bibliothèque d'envoi d'emails en PHP
```

## ⚙️ Installation & Lancement en local

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/Chihebkebbas/portfolio.git
    cd portfolio
    ```

2.  **Configuration du formulaire de contact :**
    *   Créez un fichier `.env` à la racine du projet, et ajoutez vos identifiants SMTP :
        ```ini
        SMTP_HOST=smtp.gmail.com
        SMTP_USERNAME=votre_email@gmail.com
        SMTP_PASSWORD=votre_mot_de_passe_app
        SMTP_PORT=587
        ```

3.  **Lancer un serveur local :**
    Comme le projet utilise du PHP pour l'envoi d'emails, utilisez un serveur web local (comme WAMP/MAMP/XAMPP) ou le serveur PHP intégré :
    ```bash
    php -S localhost:8000
    ```
    Ouvrez ensuite `http://localhost:8000` dans votre navigateur.

## 🔗 Liens

*   **LinkedIn :** [Chiheb Eddine Kebbas](https://www.linkedin.com/in/chiheb-eddine-kebbas)
*   **Dribbble :** [kebbaschiheb](https://dribbble.com/kebbaschiheb)
*   **GitHub :** [Chihebkebbas](https://github.com/Chihebkebbas)
