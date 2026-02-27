document.addEventListener('DOMContentLoaded', () => {
    // Select the button and the main UI container from the landing page
    const enterBtn = document.getElementById('enter-btn');
    const landingUi = document.getElementById('landing-ui');

    // Only run this code if we are actually on the landing page
    if (enterBtn && landingUi) {
        enterBtn.addEventListener('click', () => {
            // 1. Add the CSS class that fades the UI out
            landingUi.classList.add('fade-to-black');
            
            // 2. Wait for the CSS transition to finish (1.5 seconds) before redirecting
            setTimeout(() => {
                window.location.href = './login.html';
            }, 1500); 
        });
    }



// --- SCENARIO BUILDER LOGIC ---
    const forgeBtn = document.getElementById('forge-btn');
    const builderUi = document.getElementById('builder-ui');

    // Check if we are on the scenario builder page
    if (forgeBtn && builderUi) {
        forgeBtn.addEventListener('click', () => {
            // Fade out the UI
            builderUi.classList.add('fade-to-black');
            
            // Wait 1.5 seconds, then redirect to the third page
            setTimeout(() => {
                window.location.href = './character-forge.html';
            }, 1500);
        });
    }
	
	
// --- IDENTITY FORGE LOGIC ---
    const characterCards = document.querySelectorAll('.character-card');
    const simulateBtn = document.getElementById('simulate-btn');
    const forgeUi = document.getElementById('forge-ui');

    if (characterCards.length > 0 && simulateBtn) {
        characterCards.forEach(card => {
            card.addEventListener('click', () => {
                // 1. Remove 'selected' class from all cards
                characterCards.forEach(c => c.classList.remove('selected'));
                
                // 2. Add 'selected' class to the clicked card
                card.classList.add('selected');
                
                // 3. Reveal the "Initialize Simulation" button
                simulateBtn.classList.remove('hidden');
                simulateBtn.style.opacity = '1';
                simulateBtn.style.pointerEvents = 'auto';
                simulateBtn.style.transform = 'translateY(0)';
            });
        });

        // Handle the final transition to the simulation page
        simulateBtn.addEventListener('click', () => {
            forgeUi.classList.add('fade-to-black');
            
            setTimeout(() => {
                window.location.href = './simulation.html';
            }, 1500);
        });
    }
	
	// ==========================================
    // PAGE 4: SIMULATION VIEWPORT LOGIC (simulation.html)
    // ==========================================
    const simBody = document.querySelector('.simulation-body');
    const simControls = document.getElementById('sim-controls');
    const wakeBtn = document.getElementById('wake-btn');
    let timeout;

    if (simBody && simControls) {
        // Function to show UI and cursor
        const showUI = () => {
            simControls.classList.add('active');
            simBody.style.cursor = 'default';
            
            // Clear the existing timeout
            clearTimeout(timeout);
            
            // Set a new timeout to hide the UI after 3 seconds of no movement
            timeout = setTimeout(() => {
                simControls.classList.remove('active');
                simBody.style.cursor = 'none'; // Hide cursor again for immersion
            }, 3000);
        };

        // Listen for mouse movement
        document.addEventListener('mousemove', showUI);
		
		// --- Play/Pause Video Logic ---
        const pauseBtn = document.getElementById('pause-btn');
        const dreamVideo = document.getElementById('dream-video');

        if (pauseBtn && dreamVideo) {
            pauseBtn.addEventListener('click', () => {
                // Check if the video is currently paused
                if (dreamVideo.paused) {
                    dreamVideo.play();
                    pauseBtn.textContent = 'Pause Scene'; // Update button text
                } else {
                    dreamVideo.pause();
                    pauseBtn.textContent = 'Resume Scene'; // Update button text
                }
            });
        }

        // Wake up button logic (Exit Simulation)
        if (wakeBtn) {
            wakeBtn.addEventListener('click', () => {
                simBody.style.transition = 'opacity 2s ease';
                simBody.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = './archive.html'; // Return to landing page
                }, 2000);
            });
        }
    }
	
	// ==========================================
    // PAGE 5: AUTHENTICATION PORTAL LOGIC (login.html)
    // ==========================================
    const loginForm = document.getElementById('login-form');
    const authUi = document.getElementById('auth-ui');

    if (loginForm && authUi) {
        // Prevent the form from actually trying to submit data to a server
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            authUi.classList.add('fade-to-black');
            
            setTimeout(() => {
                window.location.href = './scenario-builder.html';
            }, 1500);
        });
    }

    // ==========================================
    // PAGE 6: ARCHIVE GALLERY LOGIC (archive.html)
    // ==========================================
    const returnHomeBtn = document.getElementById('return-home-btn');
    const archiveUi = document.getElementById('archive-ui');

    if (returnHomeBtn && archiveUi) {
        returnHomeBtn.addEventListener('click', () => {
            archiveUi.classList.add('fade-to-black');
            
            setTimeout(() => {
                window.location.href = './scenario-builder.html';
            }, 1500);
        });
    }

// ==========================================
    // PAGE 7: THE ENGINE LOGIC (about.html)
    // ==========================================
    const backToIndexBtn = document.getElementById('back-to-index-btn');
    const aboutUi = document.getElementById('about-ui');

    if (backToIndexBtn && aboutUi) {
        backToIndexBtn.addEventListener('click', () => {
            aboutUi.classList.add('fade-to-black');
            setTimeout(() => {
                window.location.href = './dreamsim.html';
            }, 1500);
        });
    }

    // ==========================================
    // PAGE 8: USER PREFERENCES LOGIC (settings.html)
    // ==========================================
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const settingsUi = document.getElementById('settings-ui');

    if (saveSettingsBtn && settingsUi) {
        saveSettingsBtn.addEventListener('click', () => {
            settingsUi.classList.add('fade-to-black');
            setTimeout(() => {
                window.location.href = './scenario-builder.html';
            }, 1500);
        });
    }





	
});	