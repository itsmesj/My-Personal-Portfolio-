var typed = new Typed('#element', {
    strings: ['Software Engineer', 'Web Developer', 'Python Developer', 'Java Developer'],
    typeSpeed: 50,
  });

 document.getElementById("resume-btn").addEventListener("click", function() {
    var a = document.createElement('a');
    a.href = 'resume-2k24.pdf';
    a.download = 'Sahil_Sharmas_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

document.getElementById("github-btn").addEventListener("click", function() {
    window.location.href = "https://github.com/itsmesj";
});

