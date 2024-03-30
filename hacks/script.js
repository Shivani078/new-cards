
    function search() {
      let filter = document.getElementById('find').value.toUpperCase();
      let items = document.querySelectorAll('.product');
      items.forEach(function(item) {
        let h3 = item.querySelector('h3');
        let value = h3.innerHTML.toUpperCase() || h3.innerText.toUpperCase() || h3.textContent.toUpperCase();
        if (value.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    }

  
      // Function to filter washroom results based on checkbox filters
      function filterWashrooms() {
          
          const washroomCards = document.querySelectorAll('.product');
  
         
          const availableChecked = document.getElementById('available').checked;
          const cleanChecked = document.getElementById('clean').checked;
          const safeChecked = document.getElementById('safe').checked;
          const accessibleChecked = document.getElementById('accessible').checked;
          const amenitiesChecked = document.getElementById('amenities').checked;
          const hygieneChecked = document.getElementById('hygiene').checked;
          const privacyChecked = document.getElementById('privacy').checked;
          const complianceChecked = document.getElementById('compliance').checked;
          const covid19Checked = document.getElementById('covid19').checked;
  
          washroomCards.forEach(card => {
              const isAvailable = card.getAttribute('data-available') === 'true';
              const isClean = card.getAttribute('data-clean') === 'true';
              const isSafe = card.getAttribute('data-safe') === 'true';
              const isAccessible = card.getAttribute('data-accessible') === 'true';
              const hasAmenities = card.getAttribute('data-amenities') === 'true';
              const hasHygieneFacilities = card.getAttribute('data-hygiene') === 'true';
              const hasPrivacy = card.getAttribute('data-privacy') === 'true';
              const isCompliant = card.getAttribute('data-compliance') === 'true';
              const hasCovid19Measures = card.getAttribute('data-covid19') === 'true';
  
              
              const shouldDisplay = (!availableChecked || isAvailable) &&
                  (!cleanChecked || isClean) &&
                  (!safeChecked || isSafe) &&
                  (!accessibleChecked || isAccessible) &&
                  (!amenitiesChecked || hasAmenities) &&
                  (!hygieneChecked || hasHygieneFacilities) &&
                  (!privacyChecked || hasPrivacy) &&
                  (!complianceChecked || isCompliant) &&
                  (!covid19Checked || hasCovid19Measures);
  
             
              if (shouldDisplay) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      }
      const checkboxes = document.querySelectorAll('.filter-checkbox');
      checkboxes.forEach(checkbox => {
          checkbox.addEventListener('change', filterWashrooms);
      });
 























const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }





  const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})