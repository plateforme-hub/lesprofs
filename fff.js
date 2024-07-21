function searchProfessors() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Convert input to lowercase for case-insensitive search
    const searchResults = document.getElementById('searchResults');

    // Clear previous search results
    searchResults.innerHTML = '';

    // Here you would make an AJAX request to your server to fetch search results
    // and then dynamically populate the searchResults div with the results
    // For simplicity, I'm just showing a static example
    const professors = [
        { name: 'Professor John Doe', university: 'University A', location: 'City A' },
        { name: 'Professor Jane Smith', university: 'University B', location: 'City B' },
        // Add more professors as needed
    ];

    const matchingProfessors = professors.filter(professor => {
        // Search for professors whose names contain the search input
        return professor.name.toLowerCase().includes(searchInput);
    });

    if (matchingProfessors.length > 0) {
        matchingProfessors.forEach(professor => {
            const professorDiv = document.createElement('div');
            professorDiv.textContent = `${professor.name} - ${professor.university} (${professor.location})`;
            searchResults.appendChild(professorDiv);
        });
    } else {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.textContent = 'No professors found.';
        searchResults.appendChild(noResultsDiv);
    }
}

document.getElementById("searchInput").addEventListener("change", function() {
    var filterValue = this.value.toLowerCase();
    var profiles = document.getElementsByClassName("profile-frame");

    for (var i = 0; i < profiles.length; i++) {
        var profile = profiles[i];
        var profileDetails = profile.querySelector(".profile-details");
        var profileSubject = profileDetails.querySelector("p:nth-of-type(2)").textContent.toLowerCase();
        
        if (profileSubject.includes(filterValue)) {
            profile.style.display = "block";
        } else {
            profile.style.display = "none";
        }
    }
});

