const userContainer = document.getElementById('user-container');

// Using async/await provides a cleaner, modern approach to handling Promises
const fetchAndDisplayUsers = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Loop through the users array
        data.users.forEach(user => {
            // Object destructuring makes the code cleaner and distinct from the previous version
            const { username, firstName, lastName, email, image } = user;

            const card = document.createElement("div");
            card.className = 'user-card'; // Adding a class for better CSS targeting

            // Using semantic tags inside the template literal
            card.innerHTML = `
                <img src="${image}" alt="${firstName}'s profile picture" loading="lazy">
                <h3>${firstName} ${lastName}</h3>
                <span class="username">@${username}</span>
                <span class="email">${email}</span>
            `;

            userContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Failed to fetch user data:", error);
        userContainer.innerHTML = `<p class="error-msg">Error loading directory. Please try again later.</p>`;
    }
};

// Initialize the function when the script loads
fetchAndDisplayUsers();
