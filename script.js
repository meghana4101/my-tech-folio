 // 🌙 Dark Mode Toggle Button
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙 Dark Mode';
Object.assign(toggleButton.style, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 15px',
  borderRadius: '25px',
  border: 'none',
  backgroundColor: '#2c3e50',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer'
});
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});

// 📅 Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

