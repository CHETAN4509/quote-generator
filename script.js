const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote-btn');

const quotes = [
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Doubt kills more dreams than failure ever will. – Suzy Kassem",
    "Whether you think you can or think you cant, you’re right. – Henry Ford",
    "Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it. —Lou Holtz",
    "The happiness of your life depends on the quality of your thoughts. – Marcus Aurelius",
    "Nothing is impossible. The word itself says ‘I’m possible!' — Audrey Hepburn"
    // Add more quotes as needed
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Event listener for the New Quote button
newQuoteButton.addEventListener('click', generateQuote);

// Function to show a notification
function showNotification() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const notification = new Notification("Random Quote", {
            body: quotes[randomIndex]
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                showNotification();
            }
        });
    }
}

// Schedule notifications every 5 minutes
setInterval(showNotification, 5 * 60 * 1000); // 5 minutes in milliseconds

// Initially generate a quote
generateQuote();
