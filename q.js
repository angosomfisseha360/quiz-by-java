let submitButton = document.querySelector('button');

submitButton.addEventListener('click', function() {
  // Get all radio buttons grouped by question
  let questionGroups = document.querySelectorAll('ol');

  // Initialize variables to store correct answers and user score
  const correctAnswers = { q1: 'b', q2: 'a', q3: 'b', q4: 'd', q5: 'b', q6: 'b' };
  let userScore = 0;

  questionGroups.forEach(questionGroup => {
    // Get all radio buttons within the current question group
    let radios = questionGroup.querySelectorAll('input[type="radio"]');
    
    // Find the selected radio button (assuming only one can be selected per question)
    let selectedRadio = radios.find(radio => radio.checked);

    // Check if a radio button is selected and its value matches the correct answer
    if (selectedRadio && selectedRadio.value === correctAnswers[questionGroup.id.slice(1)]) {
      userScore++; // Increase score for correct answer
    }
  });
  
  // Display the score using alert or another method
  alert('Your score is: ' + userScore + ' out of 6');
});

