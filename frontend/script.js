document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all necessary elements
    const accountModal = document.getElementById('accountModal');
    const chooseRoleSelect = document.getElementById('chooseRole');
    const closeButton = document.querySelector('.close-button');
    
    // Select all buttons that trigger the modal
    const startJourneyBtn = document.getElementById('startJourneyBtn');
    const joinStudentBtn = document.getElementById('joinStudentBtn');
    const joinTeacherBtn = document.getElementById('joinTeacherBtn');
    const joinAdminBtn = document.getElementById('joinAdminBtn');
    const getStartedFooterBtn = document.getElementById('getStartedFooterBtn');

    // Select other non-modal buttons for general interactivity
    const watchDemoBtn = document.getElementById('watchDemoBtn');
    const scheduleDemoBtn = document.getElementById('scheduleDemoBtn');
    const createAccountForm = document.getElementById('createAccountForm');


    // Function to handle showing the modal and pre-selecting the role
    const showModal = (role = 'student') => {
        // Set the dropdown value
        chooseRoleSelect.value = role;
        // Show the modal by adding the 'active' class
        accountModal.classList.add('active');
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
    };

    // Function to hide the modal
    const hideModal = () => {
        accountModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };


    // 2. Attach Modal Trigger Listeners
    
    // Default trigger buttons (Start Journey, Get Started Free)
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('student'); // Default to student
        });
    }

    if (getStartedFooterBtn) {
        getStartedFooterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('student'); // Default to student
        });
    }

    // Role-specific buttons
    if (joinStudentBtn) {
        joinStudentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('student');
        });
    }

    if (joinTeacherBtn) {
        joinTeacherBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('teacher');
        });
    }

    if (joinAdminBtn) {
        joinAdminBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('admin');
        });
    }


    // 3. Attach Modal Close Listeners
    if (closeButton) {
        closeButton.addEventListener('click', hideModal);
    }
    
    // Close modal when clicking outside the content
    if (accountModal) {
        window.addEventListener('click', (event) => {
            if (event.target === accountModal) {
                hideModal();
            }
        });
    }
    
    // Close modal when Escape key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape" && accountModal.classList.contains('active')) {
            hideModal();
        }
    });


    // 4. Handle Form Submission (Mock Functionality)
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = chooseRoleSelect.value;
            const fullName = document.getElementById('fullName').value;
            
            console.log("--- FORM SUBMISSION ---");
            console.log(`Account created for ${fullName} with role: ${role}`);
            
            alert(`Success! Account created for ${fullName} as a ${role}.`);
            
            // In a real application, you would send data to a server here.
            
            hideModal();
            createAccountForm.reset(); // Clear the form
        });
    }


    // 5. Handle Other non-modal Clicks (for logging/alerts)
    const handleClick = (buttonName, actionText) => {
        console.log(`${buttonName} button clicked!`);
        alert(actionText); 
    };

    if (watchDemoBtn) {
        watchDemoBtn.addEventListener('click', () => {
            handleClick('Watch Demo', 'Playing demo video...');
        });
    }

    if (scheduleDemoBtn) {
        scheduleDemoBtn.addEventListener('click', () => {
            handleClick('Schedule Demo', 'Opening the demo scheduling form...');
        });
    }

    console.log("EduPortal page loaded. All interactive components initialized.");
});