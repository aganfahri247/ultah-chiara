const audio = document.querySelector('audio');
const body = document.querySelector('body');

audio.addEventListener('play', () => {
    body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
    body.classList.remove('play-music');
});



function buatKotakConfetti() {
  const container = document.querySelector('.confetti-container');
  const colors = ['#ff4757', '#1e90ff', '#2ed573', '#ffa502', '#eccc68'];
  const jumlah = 40;

  for (let i = 0; i < jumlah; i++) {
    const kotak = document.createElement('div');
    kotak.classList.add('confetti');
    
    kotak.style.left = Math.random() * 100 + 'vw';
    kotak.style.animationDuration = (2 + Math.random() * 3) + 's';
    kotak.style.opacity = Math.random();
    kotak.style.width = kotak.style.height = 6 + Math.random() * 8 + 'px';
    kotak.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(kotak);

    setTimeout(() => {
      kotak.remove();
    }, 5000); // hapus setelah selesai
  }
}

// Ulangi setiap 0.5 detik
setInterval(buatKotakConfetti, 500);



// TAMBAHKAN DI AKHIR FILE script.js

// Polaroid Photo Effects
function initPolaroidEffects() {
    const polaroids = document.querySelectorAll('.polaroid');
    
    // Initial shake animation saat load
    window.addEventListener('load', function() {
        polaroids.forEach((polaroid, index) => {
            setTimeout(() => {
                polaroid.style.animation = 'polaroidShake 0.6s ease-in-out, polaroidFloat 3s ease-in-out infinite';
            }, index * 300);
        });
    });

    // Click effects
    polaroids.forEach((polaroid, index) => {
        polaroid.addEventListener('click', function(e) {
            // Efek klik
            this.style.transform = 'rotate(0deg) scale(1.15)';
            this.style.zIndex = '200';
            this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.6)';
            
            // Tambah efek sparkle
            createSparkleEffect(e.clientX, e.clientY);
            
            // Vibration feedback (jika device support)
            if ('vibrate' in navigator) {
                navigator.vibrate(100);
            }
            
            // Reset setelah animasi
            setTimeout(() => {
                this.style.transform = '';
                this.style.zIndex = '';
                this.style.boxShadow = '';
            }, 600);
        });

        // Double click untuk efek khusus
        polaroid.addEventListener('dblclick', function() {
            this.style.animation = 'none';
            this.style.transform = 'rotate(360deg) scale(1.3)';
            
            setTimeout(() => {
                this.style.animation = 'polaroidFloat 3s ease-in-out infinite';
                this.style.transform = '';
            }, 800);
        });
    });
}

// Fungsi untuk membuat efek sparkle
function createSparkleEffect(x, y) {
    const sparkles = ['✨', '🌟', '💫', '⭐', '💖'];
    const sparkle = document.createElement('div');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleEffect 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle animation keyframes
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleEffect {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(sparkleStyle);

// Floating polaroid photos (random)
function createFloatingPolaroid() {
    setInterval(() => {
        if (Math.random() > 0.8) {
            const floatingPhoto = document.createElement('div');
            floatingPhoto.innerHTML = '📸';
            floatingPhoto.style.position = 'fixed';
            floatingPhoto.style.left = Math.random() * 100 + '%';
            floatingPhoto.style.top = '100vh';
            floatingPhoto.style.fontSize = '25px';
            floatingPhoto.style.pointerEvents = 'none';
            floatingPhoto.style.zIndex = '5';
            floatingPhoto.style.animation = 'floatUp 4s ease-out forwards';
            
            document.body.appendChild(floatingPhoto);
            
            setTimeout(() => floatingPhoto.remove(), 4000);
        }
    }, 3000);
}

// Add float up animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatUp {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(floatStyle);

// Initialize semua efek polaroid
initPolaroidEffects();
createFloatingPolaroid();