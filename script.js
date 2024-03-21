// Add event listener to toggle checkbox state

document.getElementsByClassName("input-radio").addEventListener("change", function() {
      // Toggle the checkbox state
      this.checked = !this.checked;
    });    