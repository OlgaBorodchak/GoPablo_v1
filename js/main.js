import '../styles/main.css';

const toggle = document.querySelector('.nav-toggle')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-link')

function openMenu() {
  toggle.classList.add('active')
  toggle.setAttribute('aria-expanded', 'true')
  navList.classList.add('open')
}

function closeMenu() {
  toggle.classList.remove('active')
  toggle.setAttribute('aria-expanded', 'false')
  navList.classList.remove('open')
}

toggle.addEventListener('click', () => {
  const isOpen = navList.classList.contains('open')
  isOpen ? closeMenu() : openMenu()
})

navLinks.forEach((link) => link.addEventListener('click', closeMenu))

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu()
})

document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item')
    const panel = document.getElementById(btn.getAttribute('aria-controls'))
    const isOpen = btn.getAttribute('aria-expanded') === 'true'

    btn.setAttribute('aria-expanded', !isOpen)
    panel.hidden = isOpen

    item.classList.toggle('open', !isOpen)
  })
})

document.querySelectorAll('.faq-filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    // Update active button
    document
      .querySelectorAll('.faq-filter-btn')
      .forEach((b) => b.classList.remove('faq-filter-btn-active'))
    btn.classList.add('faq-filter-btn-active')

    const filter = btn.textContent.trim()

    document.querySelectorAll('.faq-section').forEach((section) => {
      const label = section
        .querySelector('.faq-section-label')
        ?.textContent.trim()
      const show = filter === 'All' || label === filter
      section.style.display = show ? '' : 'none'
    })
  })
})
