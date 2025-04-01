document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userInputForm');
    const input = document.getElementById('userInput');
    const list = document.getElementById('userInputList');
    const userTabList = document.getElementById('userTabList');
    const inputs = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userInput = input.value.trim();
        if (userInput) {
            inputs.push(userInput);
            updateList();
            input.value = '';
        }
    });

    document.getElementById('search-bar').addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredInputs = inputs.filter(item => item.toLowerCase().includes(query));
        updateUserTabList(filteredInputs);
    });

    function updateList() {
        list.innerHTML = '';
        inputs.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
    }

    function updateUserTabList(filteredInputs) {
        userTabList.innerHTML = '';
        filteredInputs.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            userTabList.appendChild(listItem);
        });
    }
});

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('search-bar').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    // Implement search logic here, e.g., filter streams based on the query
    console.log('Search query:', query);
});

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.add('hidden');
}

function showLoading() {
    document.getElementById('loading-spinner').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading-spinner').classList.add('hidden');
}

// Example usage:
// showError('An error occurred while loading streams.');
// showLoading();
// setTimeout(() => { hideLoading(); hideError(); }, 3000);

// Add event listener for the new dark mode toggle button
document.getElementById('corner-dark-mode-toggle').addEventListener('click', (event) => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    event.target.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});
