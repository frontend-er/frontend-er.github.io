document.getElementById('btn-apply1').onclick = function() {
    document.getElementById('modal').classList.remove('doNotShow');
    document.getElementById('modal').classList.add('modal');
  }


  document.getElementById('modal-overlay-close').onclick = function() {
    document.getElementById('modal').classList.remove('modal');
    document.getElementById('modal').classList.add('doNotShow');
  }

  document.getElementById('modal-overlay-close-2').onclick = function() {
    document.getElementById('modal').classList.remove('modal');
    document.getElementById('modal').classList.add('doNotShow');
  }

  document.getElementById('btn-apply').onclick = function() {
    document.getElementById('modal_donation').classList.remove('doNotShow');
    document.getElementById('modal_donation').classList.add('modal_donation');
  }


  document.getElementById('modal-overlay-close2').onclick = function() {
    document.getElementById('modal_donation').classList.remove('modal_donation');
    document.getElementById('modal_donation').classList.add('doNotShow');
  }

  document.getElementById('modal-overlay-close-22').onclick = function() {
    document.getElementById('modal_donation').classList.remove('modal_donation');
    document.getElementById('modal_donation').classList.add('doNotShow');
  }
