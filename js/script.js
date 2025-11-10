// Attend que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
    
    // Trouve le lien "Voir le contenu"
    const contentLink = document.getElementById('content-link');

    if (contentLink) {
        // Intercepte le clic
        contentLink.addEventListener('click', (e) => {
            // Empêche le navigateur de changer de page tout de suite
            e.preventDefault(); 
            
            // Récupère le lien de la page de destination
            const href = contentLink.href;

            // Ajoute la classe 'page-exit' au body
            // C'est cette classe qui va déclencher nos animations CSS
            document.body.classList.add('page-exit');
            
            // Attend 800ms (le temps de l'animation)
            setTimeout(() => {
                // Change de page "manuellement"
                window.location.href = href;
            }, 800); 
        });
    }
});
