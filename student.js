
const formContainer = document.createElement('div');
formContainer.style.width = '300px';
formContainer.style.margin = '50px auto';
formContainer.style.padding = '20px';
formContainer.style.backgroundColor = 'white';
formContainer.style.borderRadius = '8px';
formContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
document.body.appendChild(formContainer);


const formTitle = document.createElement('h2');
formTitle.textContent = 'Student Data';
formTitle.style.textAlign = 'center';
formTitle.style.color = '#333';
formContainer.appendChild(formTitle);

const form = document.createElement('form');
form.setAttribute('id', 'studentForm');
formContainer.appendChild(form);


function createInputField(labelText, inputType, inputId, inputValue) {
    const div = document.createElement('div');
    div.style.marginBottom = '15px';

    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.textContent = labelText;
    label.style.display = 'block';
    label.style.fontWeight = 'bold';
    label.style.marginBottom = '5px';
    div.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', inputId);
    input.setAttribute('name', inputId);
    input.setAttribute('value', inputValue);
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.fontSize = '14px';
    input.style.borderRadius = '4px';
    input.style.border = '1px solid #ccc';
    div.appendChild(input);

    form.appendChild(div);
}

createInputField('Name', 'text', 'name', 'BANOTHANILKUMAR');
createInputField('Age', 'number', 'age', '20');
createInputField('Email', 'email', 'email', 'banothanilkumar65@gmail.com');

const courseDiv = document.createElement('div');
courseDiv.style.marginBottom = '15px';

const courseLabel = document.createElement('label');
courseLabel.setAttribute('for', 'course');
courseLabel.textContent = 'Course:';
courseLabel.style.display = 'block';
courseLabel.style.fontWeight = 'bold';
courseLabel.style.marginBottom = '5px';
courseDiv.appendChild(courseLabel);

const courseSelect = document.createElement('select');
courseSelect.setAttribute('id', 'course');
courseSelect.setAttribute('name', 'course');
courseSelect.style.width = '100%';
courseSelect.style.padding = '10px';
courseSelect.style.fontSize = '14px';
courseSelect.style.borderRadius = '4px';
courseSelect.style.border = '1px solid #ccc';

const courses = ['Web Development', 'Data Science', 'Graphic Design'];
courses.forEach(course => {
    const option = document.createElement('option');
    option.setAttribute('value', course.toLowerCase().replace(/\s+/g, ''));
    option.textContent = course;
    courseSelect.appendChild(option);
});

courseDiv.appendChild(courseSelect);
form.appendChild(courseDiv);

const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Submit');
submitButton.style.backgroundColor = '#4CAF50';
submitButton.style.color = 'white';
submitButton.style.padding = '12px 20px';
submitButton.style.fontSize = '16px';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '4px';
submitButton.style.cursor = 'pointer';
form.appendChild(submitButton);

const resultContainer = document.createElement('div');
resultContainer.style.marginTop = '30px';
resultContainer.style.padding = '20px';
resultContainer.style.backgroundColor = '#f9f9f9';
resultContainer.style.borderRadius = '8px';
resultContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
document.body.appendChild(resultContainer);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const result = {};
    formData.forEach((value, key) => {
        result[key] = value;
    });

    resultContainer.innerHTML = `
        <h3>Submitted Information:</h3>
        <p><strong>Name:</strong> ${result.name}</p>
        <p><strong>Age:</strong> ${result.age}</p>
        <p><strong>Email:</strong> ${result.email}</p>
        <p><strong>Course:</strong> ${result.course}</p>
    `;
});
