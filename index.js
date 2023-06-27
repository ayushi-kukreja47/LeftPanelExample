function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.getElementsByClassName('content-section');
    for (const element of contentSections) {
      element.style.display = 'none';
    }

    // Show the selected content section
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
  }