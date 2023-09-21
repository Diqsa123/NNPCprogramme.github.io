document.addEventListener('DOMContentLoaded', function () {
  var shareButton = document.getElementById('shareButton');
  var submitButton = document.getElementById('submitButton');
  var range = document.getElementById('range');
  var shareCount = 0;

  range.min = 0;
  range.max = 100;
  range.value = 0;
  submitButton.style.display = 'none';

  shareButton.addEventListener('click', function () {
    shareCount += 1;
    range.value = shareCount * 10;
    
    if (shareCount >= 10) {
      shareButton.style.display = 'none'; // Hide share button after 10 shares
      submitButton.style.display = 'block'; // Show submit button after 10 shares
    }
  });
});
