        const questions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Madrid"],
                answer: 1,
                topic: "Geography"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: 1,
                topic: "Science"
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                answer: 1,
                topic: "Biology"
            },
            {
                question: "Which language is primarily used for web development?",
                options: ["Python", "Java", "JavaScript", "C++"],
                answer: 2,
                topic: "Technology"
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: 2,
                topic: "Art"
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                answer: 2,
                topic: "Chemistry"
            },
            {
                question: "Which country won the 2018 FIFA World Cup?",
                options: ["Germany", "Brazil", "France", "Argentina"],
                answer: 2,
                topic: "Sports"
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: 3,
                topic: "Geography"
            },
            {
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: ["J.K. Rowling", "Harper Lee", "Stephen King", "Ernest Hemingway"],
                answer: 1,
                topic: "Literature"
            },
            {
                question: "What is the tallest mountain in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                answer: 1,
                topic: "Geography"
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                answer: 1,
                topic: "Chemistry"
            },
            {
                question: "What year did World War II end?",
                options: ["1943", "1945", "1947", "1950"],
                answer: 1,
                topic: "History"
            },
            {
                question: "Which company developed the iPhone?",
                options: ["Samsung", "Apple", "Google", "Microsoft"],
                answer: 1,
                topic: "Technology"
            },
            {
                question: "What is the currency of Japan?",
                options: ["Won", "Yuan", "Yen", "Dollar"],
                answer: 2,
                topic: "Economics"
            },
            {
                question: "Who is known as the father of computers?",
                options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
                answer: 1,
                topic: "Technology"
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let timer;
        let timeLeft = 10;
        let selectedOption = null;
        let shuffledQuestions = [];

       
        const questionCountElement = document.querySelector('.question-count');
        const timerElement = document.querySelector('.timer');
        const progressBar = document.querySelector('.progress-bar');
        const questionTextElement = document.querySelector('.question-text');
        const optionsContainer = document.querySelector('.options-container');
        const nextButton = document.querySelector('.next-btn');
        const resultsModal = document.querySelector('.results-modal');
        const finalScoreElement = document.getElementById('final-score');
        const starRatingElement = document.getElementById('star-rating');
        const leaderboardEntries = document.getElementById('leaderboard-entries');
        const restartButton = document.querySelector('.restart-btn');

        
        function initQuiz() {
            
            shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 15);
            currentQuestionIndex = 0;
            score = 0;
            loadQuestion();
        }

        
        function loadQuestion() {
            resetState();
            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            
            
            questionCountElement.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
            
            
            questionTextElement.textContent = currentQuestion.question;
            
            currentQuestion.options.forEach((option, index) => {
                const optionElement = document.createElement('label');
                optionElement.classList.add('option');
                optionElement.innerHTML = `
                    <input type="radio" name="answer" value="${index}">
                    <span class="custom-radio"></span>
                    <span class="option-text">${option}</span>
                `;
                optionsContainer.appendChild(optionElement);
                
                
                optionElement.querySelector('input').addEventListener('change', (e) => {
                    selectedOption = parseInt(e.target.value);
                    nextButton.disabled = false;
                });
            });
            
          
            startTimer();
            
            
            updateProgressBar();
        }

       
        function resetState() {
            clearInterval(timer);
            timeLeft = 10;
            timerElement.textContent = `${timeLeft}s`;
            selectedOption = null;
            nextButton.disabled = true;
            
            
            while (optionsContainer.firstChild) {
                optionsContainer.removeChild(optionsContainer.firstChild);
            }
        }

        
        function startTimer() {
            clearInterval(timer);
            timeLeft = 10;
            updateTimerDisplay();
            
            timer = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    handleTimeOut();
                }
            }, 1000);
        }

        
        function updateTimerDisplay() {
            timerElement.textContent = `${timeLeft}s`;
            
           
            if (timeLeft <= 3) {
                timerElement.style.backgroundColor = '#f44336';
            } else {
                timerElement.style.backgroundColor = '#333';
            }
        }

        
        function handleTimeOut() {
            
            const radioInputs = document.querySelectorAll('input[type="radio"]');
            radioInputs.forEach(input => {
                input.disabled = true;
            });
            
            
            const correctIndex = shuffledQuestions[currentQuestionIndex].answer;
            const options = document.querySelectorAll('.option');
            options[correctIndex].classList.add('correct');
            
           
            setTimeout(() => {
                goToNextQuestion();
            }, 1500);
        }

        
        function updateProgressBar() {
            const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
            progressBar.style.transform = `scaleX(${progress}%)`;
        }

       
        function goToNextQuestion() {
           
            if (selectedOption !== null) {
                const correctIndex = shuffledQuestions[currentQuestionIndex].answer;
                const options = document.querySelectorAll('.option');
                
                if (selectedOption === correctIndex) {
                    score++;
                    options[selectedOption].classList.add('correct');
                } else {
                    options[selectedOption].classList.add('incorrect');
                    options[correctIndex].classList.add('correct');
                }
            }
            
            
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuestions.length) {
                setTimeout(() => {
                    loadQuestion();
                }, 1000);
            } else {
                showResults();
            }
        }

        function showResults() {
           
            finalScoreElement.textContent = score;
            
            const starRating = calculateStarRating();
            starRatingElement.textContent = '★'.repeat(starRating) + '☆'.repeat(5 - starRating);
            
            saveScore();
            
            displayLeaderboard();
            
           
            resultsModal.style.display = 'flex';
        }

        
        function calculateStarRating() {
            const percentage = (score / shuffledQuestions.length) * 100;
            
            if (percentage >= 90) return 5;
            if (percentage >= 70) return 4;
            if (percentage >= 50) return 3;
            if (percentage >= 30) return 2;
            return 1;
        }

        
        function saveScore() {
            const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
            const today = new Date();
            const dateString = today.toLocaleDateString() + ' ' + today.toLocaleTimeString();
            
            leaderboard.push({
                score: score,
                date: dateString,
                totalQuestions: shuffledQuestions.length
            });
            
            
            leaderboard.sort((a, b) => (b.score / b.totalQuestions) - (a.score / a.totalQuestions));
            if (leaderboard.length > 5) leaderboard.length = 5;
            
            localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
        }

        function displayLeaderboard() {
            const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
            leaderboardEntries.innerHTML = '';
            
            if (leaderboard.length === 0) {
                leaderboardEntries.innerHTML = '<p>No scores yet!</p>';
                return;
            }
            
            leaderboard.forEach((entry, index) => {
                const entryElement = document.createElement('div');
                entryElement.classList.add('leaderboard-entry');
                entryElement.innerHTML = `
                    <span>${index + 1}. ${entry.score}/${entry.totalQuestions}</span>
                    <span>${entry.date}</span>
                `;
                leaderboardEntries.appendChild(entryElement);
            });
        }

        
        nextButton.addEventListener('click', goToNextQuestion);
        restartButton.addEventListener('click', () => {
            resultsModal.style.display = 'none';
            initQuiz();
        });

        window.addEventListener('DOMContentLoaded', initQuiz);