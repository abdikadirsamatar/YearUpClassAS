function pickRandomName()
{
    if (names.length > 0)
    {
        const randomIndex = Math.floor(Math.random() * names.length);
        const randomName = names[randomIndex];
        const quotes = [
            "Believe you can and you're halfway there.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Don't watch the clock; do what it does. Keep going.",
            "The only limit to our realization of tomorrow will be our doubts of today.",
            "You are never too old to set another goal or to dream a new dream.",
            "The harder you work for something, the greater you'll feel when you achieve it.",
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "The secret to getting ahead is getting started."
        ];
        const encouragements = [
            "You have the power to make a difference.",
            "Your efforts today will shape a brighter tomorrow.",
            "Each step you take brings you closer to your goals.",
            "Embrace challenges as opportunities for growth.",
            "Your dedication and perseverance will lead to success.",
            "Your potential is limitless; believe in yourself.",
            "You are capable of amazing things. Keep going!",
            "Every mistake is a stepping stone towards improvement.",
            "Your resilience and determination inspire others.",
            "In the face of adversity, you shine even brighter.",
            "Believe you can and you're halfway there.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Don't watch the clock; do what it does. Keep going.",
            "The only limit to our realization of tomorrow will be our doubts of today.",
            "You are never too old to set another goal or to dream a new dream.",
            "The harder you work for something, the greater you'll feel when you achieve it.",
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "The secret to getting ahead is getting started."
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

        const randomNameElement = document.getElementById("randomName");
        randomNameElement.innerHTML = "<span class='text-primary'>" + randomName + "</span> - " + randomQuote;

        const nameListItems = document.getElementsByTagName("li");
        for (let i = 0; i < names.length; i++)
        {
            nameListItems[i].classList.remove("winner");
        }
        const winnerListItem = document.querySelector("li:nth-child(" + (randomIndex + 1) + ")");
        winnerListItem.classList.add("winner");

        const encouragementElement = document.createElement("p");
        encouragementElement.textContent = randomEncouragement;
        randomNameElement.appendChild(encouragementElement);
    }
}