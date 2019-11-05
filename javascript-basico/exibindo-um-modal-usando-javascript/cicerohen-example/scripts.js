function ModalHandler(optionalSettings = {}) {
  const settings = {
    modalClass: "modal",
    modalCloseBtnClass: "modal__close-btn",
    modalOpenedClass: "modal--opened",
    ...optionalSettings
  };

  const modals = {
    /*
      [modalId]: {
        modalId,
        toggleElement,
        modalElement,
        modalCloseBtnElement
      }
    */
  };

  function _handleModalToggleClick(e) {
    e.preventDefault();
    const modalId = e.target.dataset.toggleModal;
    openModal(modalId);
  }

  function _handleModalCloseBtnClick(e) {
    e.preventDefault();
    const modalId = e.target.modalId;
    closeModal(modalId);
  }

  function _startModalCloseBtnEvtListener() {
    for (let modalId in modals) {
      const modalCloseBtn = modals[modalId].modalCloseBtnElement;
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", _handleModalCloseBtnClick);
      }
    }
  }

  function _startModalToggleEvtListener() {
    for (let modalId in modals) {
      modals[modalId].toggleElement.addEventListener(
        "click",
        _handleModalToggleClick
      );
    }
  }

  /*public API*/

  function addModal(toggleElement) {
    const modalId = toggleElement.dataset.toggleModal;
    const modalElement = document.querySelector(`[data-modal="${modalId}"]`);
    const modalCloseBtnElement = modalElement.querySelector(
      `.${settings.modalCloseBtnClass}`
    );
    modalCloseBtnElement.modalId = modalId;
    modals[modalId] = {
      modalId,
      modalElement,
      modalCloseBtnElement,
      toggleElement
    };
    _startModalCloseBtnEvtListener();
    _startModalToggleEvtListener();
  }

  function openModal(modalId) {
    modals[modalId].modalElement.classList.add(settings.modalOpenedClass);
  }

  function closeModal(modalId) {
    modals[modalId].modalElement.classList.remove(settings.modalOpenedClass);
  }

  function init() {
    const modalToggles = document.querySelectorAll("[data-toggle-modal]");
    modalToggles.forEach(modalToggle => {
      addModal(modalToggle);
    });
  }

  return {
    init,
    addModal,
    closeModal,
    openModal
  };
}

const modalHandler = ModalHandler();

modalHandler.init();
modalHandler.openModal(1);
