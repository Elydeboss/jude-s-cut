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

	// Only now that this script is demonstrably running may elements start hidden.
	// If this script never runs, styles.css never hides them — content stays visible.
	document.documentElement.classList.add('reveal-pending');

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

function initReviews() {
	const stack = document.querySelector('[data-reviews]');
	const dots = Array.from(document.querySelectorAll('[data-review-dot]'));
	if (!stack || dots.length === 0) return;

	const quotes = Array.from(stack.children);
	if (quotes.length !== dots.length) return; // keep dots and quotes in sync manually

	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	let index = 0;
	let timer = null;

	const show = (next) => {
		index = (next + quotes.length) % quotes.length;
		quotes.forEach((quote, i) => quote.classList.toggle('is-active', i === index));
		dots.forEach((dot, i) => {
			if (i === index) dot.setAttribute('aria-current', 'true');
			else dot.removeAttribute('aria-current');
		});
	};

	const stop = () => {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	};

	const play = () => {
		stop();
		if (!reduce) timer = setInterval(() => show(index + 1), 5000);
	};

	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => {
			show(i);
			play(); // restart the timer so the manual pick gets its full 5s
		});
	});

	// Reading a quote? Pause the rotation while the cursor is over it.
	stack.addEventListener('mouseenter', stop);
	stack.addEventListener('mouseleave', play);

	show(0);
	play();
}

initMenu();
initReveal();
initReviews();
