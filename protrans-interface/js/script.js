// Main JavaScript functionality for ProTrans AI Tools interface

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const navItems = document.querySelectorAll('.sidebar-nav ul li a');
    const agentContainers = document.querySelectorAll('.agent-container');
    const currentAgentTitle = document.querySelector('.current-agent-title');
    
    // Toggle sidebar on mobile
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Handle navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav item
            navItems.forEach(navItem => {
                navItem.parentElement.classList.remove('active');
            });
            this.parentElement.classList.add('active');
            
            // Show corresponding agent container
            const agentId = this.getAttribute('data-agent');
            agentContainers.forEach(container => {
                container.classList.remove('active');
            });
            document.getElementById(agentId).classList.add('active');
            
            // Update header title
            currentAgentTitle.textContent = this.textContent;
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Add subtle animation to logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 1s infinite';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
    
    // Resize iframe on window resize
    window.addEventListener('resize', function() {
        const iframe = document.querySelector('.agent-iframe');
        if (iframe) {
            // Ensure iframe maintains proper dimensions
            iframe.style.height = `calc(100vh - ${document.querySelector('.main-header').offsetHeight + 40}px)`;
        }
    });
    
    // Initialize iframe height
    const iframe = document.querySelector('.agent-iframe');
    if (iframe) {
        iframe.style.height = `calc(100vh - ${document.querySelector('.main-header').offsetHeight + 40}px)`;
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});
