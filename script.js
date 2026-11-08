// Jude's Cut: mobile menu + scroll reveal. No dependencies, no frameworks.

function initMenu() {
	const button = document.querySelector('[data-menu-button]');
	const panel = document.querySelector('[data-menu-panel]');
	const icon = document.querySelector('[data-menu-icon]');
	if (!button || !panel || !icon) return;

	const setOpen = (open) => {
		panel.classList.toggle('hidden', !open);
		button.setAttribute('aria-expanded', String(open));
		icon.className = open ? 'ph ph-x' : 'ph ph-list';
		button.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
	};

	button.addEventListener('click', () => {
		setOpen(panel.classList.contains('hidden'));
	});

	panel.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => setOpen(false));
	});
}

function initReveal() {
	const items = document.querySelectorAll('.reveal');
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	// Reduced motion or no observer support: everything simply shows, already in place.
	if (reduce || !('IntersectionObserver' in window)) {
		items.forEach((el) => el.classList.add('is-in'));
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-in');
					io.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	items.forEach((el) => {
		const delay = el.getAttribute('data-reveal-delay');
		if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
		io.observe(el);
	});
}

initMenu();
initReveal();
