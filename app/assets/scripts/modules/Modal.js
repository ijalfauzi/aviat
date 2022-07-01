class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.openModalButtons = document.querySelectorAll(".open-modal")
        this.events()
    }

    events() {
        // listen for open click
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

        // listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())

        // push any key
        document.addEventListener("keyup", e => this.keyPressHandler(e))

    }

    openTheModal(e) {
        e.preventDefault()
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal(e) {
        this.modal.classList.remove("modal--is-visible")
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal()
        }
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
            <div class="modal__inner">
                <h2 class="headline headline--centered headline--less-margin">Find Something</h2>
            <div class="wrapper wrapper--narrow">
            <input type="search" name="" id="" placeholder="Type and hit enter">
            <p class="modal__description">Type your keywords on the form above. Or, connect with us on any of the platforms below!</p>
        </div>
      <div class="social-icons">
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.webp" alt="Facebook"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.webp" alt="Instagram"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/linkedin.webp" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
        `)
    }
}

export default Modal