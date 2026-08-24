// ====== FLOWER DATA - EDIT THESE! ======
        const flowerData = [
            {
                id: 'rose-1',
                name: 'Pink Lily',
                title: 'I\'m Sorry, Baby',
                message: 'I\'m sorry for the times my actions made you feel unappreciated. I know my intentions may be good, but I understand now that what matters is how I make you feel. I\'ll do better.'
            },
            {
                id: 'rose-2',
                name: 'Pink Carnation',
                title: 'You Mean So Much to Me',
                message: 'You bring so much happiness and light into my life. I hope you always remember how beautiful, special, and important you are to me.'
            },
            {
                id: 'rose-3',
                name: 'Pink Rose',
                title: 'I Love You',
                message: 'I love you, baby. Not only when everything is perfect, but also when we misunderstand each other. I\'ll keep choosing you, loving you, and learning how to love you better.'
            },
            {
                id: 'rose-4',
                name: 'Pink Carnation',
                title: 'I\'m Proud of You',
                message: 'I know you\'re studying and giving your best right now. I see how hard you\'re working, and I\'m genuinely proud of you. Keep going, baby. You\'re doing great.'
            },
            {
                id: 'rose-5',
                name: 'Pink Lily',
                title: 'I\'ll Do Better',
                message: 'I don\'t want you to always have to ask me for the little things you deserve. I want to learn to notice them myself, initiate them, and show you through my actions how much I appreciate you.'
            },
            {
                id: 'rose-6',
                name: 'Pink Rose',
                title: 'I\'m Here',
                message: 'While you\'re studying and chasing your dreams, I\'m here lang—supporting you, waiting for you, cheering for you, and loving you so much. You don\'t have to do everything alone.'
            },
            {
                id: 'rose-7',
                name: 'Pink Carnation',
                title: 'Forever Yours',
                message: 'No matter what challenges we face, I\'m committed to loving you, supporting you, and growing with you. You\'re my forever. Thank you for being my person. I love you so much. ❤️'
            }
        ];

        // ====== STATE ======
        let revealedRoses = new Set();

        // ====== INITIALIZATION ======
        document.addEventListener('DOMContentLoaded', () => {
            generateProgressDots();
        });

        // ====== SELECT ROSE ======
        function selectRose(index) {
            const flower = flowerData[index];
            
            // Mark as revealed
            if (!revealedRoses.has(flower.id)) {
                revealedRoses.add(flower.id);
                
                const roseElement = document.querySelector(`[data-rose-id="${flower.id}"]`);
                roseElement.classList.add('clicked');
                
                createHeartParticles();
                createPetalParticles();
                updateProgress();
            }

            // Show message popup
            document.getElementById('message-flower-name').textContent = flower.name;
            document.getElementById('message-title').textContent = flower.title;
            document.getElementById('message-text').textContent = flower.message;
            
            document.getElementById('message-backdrop').classList.add('show');
            document.getElementById('message-popup').classList.add('show');
        }

        // ====== CLOSE MESSAGE ======
        function closeMessage() {
            document.getElementById('message-backdrop').classList.remove('show');
            document.getElementById('message-popup').classList.remove('show');
        }

        // ====== UPDATE PROGRESS ======
        function updateProgress() {
            document.getElementById('progress-text').textContent = `${revealedRoses.size} / ${flowerData.length} flowers revealed 🌸`;
            
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index < revealedRoses.size) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // ====== GENERATE PROGRESS DOTS ======
        function generateProgressDots() {
            const dotsContainer = document.getElementById('progress-dots');
            dotsContainer.innerHTML = '';
            
            for (let i = 0; i < flowerData.length; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                dotsContainer.appendChild(dot);
            }
        }

        // ====== HEART PARTICLES ======
        function createHeartParticles() {
            for (let i = 0; i < 8; i++) {
                const particle = document.createElement('div');
                particle.className = 'heart-particle';
                particle.textContent = '❤️';
                
                const startX = Math.random() * window.innerWidth;
                const startY = Math.random() * window.innerHeight;
                
                particle.style.left = startX + 'px';
                particle.style.top = startY + 'px';
                particle.style.setProperty('--tx', ((Math.random() - 0.5) * 100) + 'px');
                particle.style.setProperty('--ty', (-Math.random() * 150) + 'px');
                particle.style.animationDelay = (i * 0.05) + 's';
                
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 1500);
            }
        }

        // ====== PETAL PARTICLES ======
        function createPetalParticles() {
            for (let i = 0; i < 6; i++) {
                const petalEmojis = ['🌸', '🌷', '💮'];
                const particle = document.createElement('div');
                particle.className = 'petal-particle';
                particle.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
                
                const startX = 150 + (Math.random() - 0.5) * 100;
                const startY = 200 + (Math.random() - 0.5) * 100;
                
                particle.style.left = startX + 'px';
                particle.style.top = startY + 'px';
                particle.style.animationDelay = (i * 0.1) + 's';
                
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 2000);
            }
        }

        // Close message on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMessage();
            }
        });
