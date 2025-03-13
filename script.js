document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let experience = document.getElementById("experience").value;
    let sample = document.getElementById("sample").value;

    alert(`Thank you, ${name}! Your application for ${role} has been submitted.`);
});