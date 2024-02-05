const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const continueButton = document.getElementById('continue-button');
const usernameInput = document.getElementById('username');
const valentineQuestion = document.getElementById('valentine-question');
const buttonsContainer = document.querySelector('.buttons');
const secretCode = generateNumericCode(6); // Generates a 6-digit numeric code
let scale = 1;
const messages = [
    "Are you sure?",
    "Really sure?",
    "Are you positive???",
    "Pookie please",
    "Just think about it",
    "I'll be very sad",
    "I'll be very very sad",
    "Ok fine. I'll stop asking",
    "Just kidding, PLEASE SAY YES",
    "I'll be very very very sad",
    "You're breaking my heart",
    "Ok fine. I'll stop asking",
    "Just kidding, PLEASE SAY YES",
    "I'll be very very very very sad",
    "You're breaking my heart",
    "This is your last chance, okay?",
    "One more chance for u only, okay???",
    "I can't stop thinking about you.",
    "Being with you would be a dream come true.",
    "You're the missing piece in my life's puzzle.",
    "Our future together looks so bright, don't you think?",
    "I promise to make you smile every day if you say yes.",
    "I've waited for this moment my whole life.",
    "You have a special place in my heart, please say yes.",
    "I can't imagine my life without you in it.",
    "Let's create a memories together.",
    "You're the reason for my happiness.",
    
];
let messageIndex = 0;

function askValentine() {
    const username = usernameInput.value.trim();
    if (username) {
        valentineQuestion.innerHTML = `Will you be my Valentine, ${username}?`;
        valentineQuestion.style.display = 'block';
        buttonsContainer.style.display = 'flex';
        document.querySelector('.input-container').style.display = 'none';
    } else {
        
    }
}

yesButton.addEventListener('click', function() {
    document.body.innerHTML = `
    <div class="gif-container">
        <img src="pic2.gif" alt="Yesbutton" class="enlarged-gif"/>
        <p class="celebration-text">Hoorayyyyyyyyyy &lt;3!!!</p>
        <div class="thank-you-message">
            <p>Merci de m'avoir ouvert ton cœur.!</p>
            <p>Your secret code is: <span class="secret-code">${secretCode}</span></p>
            <p>Please send this secret code to me, I have a surprise for you.</p>
    </div>
`;
});

noButton.addEventListener('click', function() {
    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex++];
        ;
    } else {
        messageIndex = 0; 
        noButton.textContent = "u still wanna say no w me ?? =((";
    }
});
document.getElementById('submit-name').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    if(username) {
        document.getElementById('name-placeholder').textContent = username;
        document.getElementById('valentine-question').style.display = 'block';
        document.getElementById('response-buttons').style.display = 'block';
        document.getElementById('heart-gif').style.display = 'block';
        document.getElementById('name-prompt').style.display = 'none';
    }
});

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response-buttons').style.display = 'none';
    document.getElementById('valentine-question').style.display = 'none';
    document.getElementById('ok-text').style.display = 'block';
});
function generateNumericCode(length) {
    let code = '';
    for (let i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
    }
    return code;
  }

