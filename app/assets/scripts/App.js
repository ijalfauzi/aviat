import '../styles/styles.css';
import Navigation from './modules/Navigation'
import RevealOnScroll from './modules/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".service"), 75)
new RevealOnScroll(document.querySelectorAll(".post"), 75)
new RevealOnScroll(document.querySelectorAll(".partner"), 75)
new RevealOnScroll(document.querySelectorAll(".widget-content"), 75)
import Modal from './modules/Modal'

new Modal()

if (module.hot) {
    module.hot.accept()
}
