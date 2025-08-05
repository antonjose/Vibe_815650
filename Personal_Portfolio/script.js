document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const preview = document.getElementById('resume-preview');
    const downloadPdfBtn = document.getElementById('download-pdf');
    const addExperienceBtn = document.getElementById('add-experience');
    const experienceFields = document.getElementById('experience-fields');
    const profilePicInput = document.getElementById('profile-pic');
    const addCollegeCheckbox = document.getElementById('add-college-checkbox');
    const collegeDetails = document.getElementById('college-details');

    let experienceCount = 0;
    let profilePicUrl = '';

    function updatePreview() {
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const linkedin = document.getElementById('linkedin').value;
        const summary = document.getElementById('summary').value;
        const skills = document.getElementById('skills').value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
        const frameworks = document.getElementById('frameworks').value.split(',').map(framework => `<li>${framework.trim()}</li>`).join('');
        const languages = document.getElementById('languages').value.split(',').map(language => `<li>${language.trim()}</li>`).join('');

        let experienceHTML = '';
        for (let i = 1; i <= experienceCount; i++) {
            const jobTitle = document.getElementById(`job-title-${i}`).value;
            const company = document.getElementById(`company-${i}`).value;
            const jobDates = document.getElementById(`job-dates-${i}`).value;
            const jobDesc = document.getElementById(`job-desc-${i}`).value;
            experienceHTML += `
                <div class="experience-item">
                    <h3>${jobTitle} at ${company}</h3>
                    <p class="experience-meta">${jobDates}</p>
                    <ul class="experience-details">${jobDesc.split('\n').map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            `;
        }

        const schoolName = document.getElementById('school-name').value;
        const schoolGrade = document.getElementById('school-grade').value;
        const schoolPercentage = document.getElementById('school-percentage').value;
        let educationHTML = `
            <div class="education-item">
                <h3>${schoolName}</h3>
                <p>Grade: ${schoolGrade} | Percentage: ${schoolPercentage}</p>
            </div>
        `;

        if (addCollegeCheckbox.checked) {
            const collegeName = document.getElementById('college-name').value;
            const collegeDegree = document.getElementById('college-degree').value;
            const collegeStream = document.getElementById('college-stream').value;
            const collegePercentage = document.getElementById('college-percentage').value;
            educationHTML += `
                <div class="education-item">
                    <h3>${collegeName}</h3>
                    <p>${collegeDegree} in ${collegeStream} | Percentage: ${collegePercentage}</p>
                </div>
            `;
        }

        preview.innerHTML = `
            <div class="sidebar">
                ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">` : ''}
                <div class="sidebar-section">
                    <h3>Contact</h3>
                    <ul class="contact-list">
                        <li><i class="fas fa-envelope"></i>${email}</li>
                        <li><i class="fas fa-phone"></i>${phone}</li>
                        <li><i class="fab fa-linkedin"></i>${linkedin}</li>
                    </ul>
                </div>
                <div class="sidebar-section">
                    <h3>Education</h3>
                    ${educationHTML}
                </div>
                <div class="sidebar-section">
                    <h3>Skills</h3>
                    <ul class="skills-list">${skills}</ul>
                </div>
                <div class="sidebar-section">
                    <h3>Frameworks</h3>
                    <ul class="frameworks-list">${frameworks}</ul>
                </div>
                <div class="sidebar-section">
                    <h3>Languages</h3>
                    <ul class="languages-list">${languages}</ul>
                </div>
            </div>
            <div class="main">
                <div class="header">
                    <h1>${name}</h1>
                    <p class="title">${title}</p>
                </div>
                <div class="section">
                    <h2>Profile</h2>
                    <p class="profile-text">${summary}</p>
                </div>
                <div class="section">
                    <h2>Work Experience</h2>
                    <div class="work-experience">${experienceHTML}</div>
                </div>
            </div>
        `;
    }

    function checkExperienceFields() {
        if (experienceCount > 0) {
            const lastJobTitle = document.getElementById(`job-title-${experienceCount}`).value.trim();
            const lastCompany = document.getElementById(`company-${experienceCount}`).value.trim();
            const lastJobDates = document.getElementById(`job-dates-${experienceCount}`).value.trim();
            const lastJobDesc = document.getElementById(`job-desc-${experienceCount}`).value.trim();

            if (!lastJobTitle || !lastCompany || !lastJobDates || !lastJobDesc) {
                addExperienceBtn.disabled = true;
            } else {
                addExperienceBtn.disabled = false;
            }
        } else {
            addExperienceBtn.disabled = false;
        }
    }

    form.addEventListener('input', () => {
        updatePreview();
        checkExperienceFields();
    });

    profilePicInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                profilePicUrl = event.target.result;
                updatePreview();
            };
            reader.readAsDataURL(file);
        }
    });

    addCollegeCheckbox.addEventListener('change', () => {
        collegeDetails.style.display = addCollegeCheckbox.checked ? 'block' : 'none';
        updatePreview();
    });

    addExperienceBtn.addEventListener('click', () => {
        if (experienceCount > 0) {
            const lastJobTitle = document.getElementById(`job-title-${experienceCount}`).value.trim();
            const lastCompany = document.getElementById(`company-${experienceCount}`).value.trim();
            const lastJobDates = document.getElementById(`job-dates-${experienceCount}`).value.trim();
            const lastJobDesc = document.getElementById(`job-desc-${experienceCount}`).value.trim();

            if (!lastJobTitle || !lastCompany || !lastJobDates || !lastJobDesc) {
                alert('Please fill all the fields in the previous experience block before adding a new one.');
                return;
            }
        }

        experienceCount++;
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="text" placeholder="Job Title" id="job-title-${experienceCount}" required>
            <input type="text" placeholder="Company" id="company-${experienceCount}" required>
            <input type="text" placeholder="Dates" id="job-dates-${experienceCount}" required>
            <textarea placeholder="Job Description" id="job-desc-${experienceCount}" required></textarea>
        `;
        experienceFields.appendChild(div);
        div.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                updatePreview();
                checkExperienceFields();
            });
        });
        checkExperienceFields();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    downloadPdfBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim().replace(/ /g, '_');
        const filename = name ? `${name}.pdf` : 'resume.pdf';
        const element = document.getElementById('resume-preview');

        // Temporarily resize the element to A4 dimensions for PDF generation
        element.style.width = '210mm';
        element.style.height = '297mm';

        const opt = {
            margin:       0,
            filename:     filename,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save().then(() => {
            // Restore original styles
            element.style.width = '';
            element.style.height = '';
        });
    });

    // Initial preview update
    updatePreview();
    checkExperienceFields();
});