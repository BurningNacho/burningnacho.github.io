/**
 * Common scripts - Reusable JavaScript functions
 */
function renderCommonScripts() {
  return `
    <script>
        lucide.createIcons();

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('mobile-menu-button');
            
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                if (button) button.setAttribute('aria-expanded', 'true');
                // Prevent body scroll when menu is open
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('translate-x-full');
                if (button) button.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const menu = document.getElementById('mobile-menu');
            const menuButton = document.getElementById('mobile-menu-button');
            
            if (menu && menuButton && 
                !menu.contains(event.target) && 
                !menuButton.contains(event.target) &&
                !menu.classList.contains('translate-x-full')) {
                toggleMenu();
            }
        });
    </script>
`;
}
