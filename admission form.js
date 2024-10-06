document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    let fullName = document.getElementById('fullName').value;
    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let program = document.getElementById('program').value;
    let comments = document.getElementById('comments').value;

    // Output to the screen
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Form Submitted Successfully</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Program Interested In:</strong> ${program}</p>
        <p><strong>Comments:</strong> ${comments}</p>
    `;
    
    // Optionally, clear the form after submission
    document.getElementById('admissionForm').reset();
});
