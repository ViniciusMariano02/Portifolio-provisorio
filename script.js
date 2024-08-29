// Seleciona o botão de alternância de tema
const themeToggleButton = document.getElementById('theme-toggle');

// Verifica se o modo claro está armazenado no localStorage
const currentTheme = localStorage.getItem('theme');

// Aplica o tema armazenado no localStorage (se houver)
if (currentTheme) {
    document.body.classList.add(currentTheme);
} else {
    // Define o tema padrão como claro se não houver tema armazenado
    document.body.classList.add('light-mode');
}

// Função para alternar entre os temas
const toggleTheme = () => {
    if (document.body.classList.contains('light-mode')) {
        // Alterna para o modo escuro
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Armazena o tema atual no localStorage
    } else {
        // Alterna para o modo claro
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Armazena o tema atual no localStorage
    }
};

// Adiciona o ouvinte de evento ao botão de alternância
themeToggleButton.addEventListener('click', toggleTheme);
