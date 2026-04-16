import { gsap } from 'gsap';

export { gsap };

export function motionAllowed() {
	if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
		return false;
	}

	return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function withGsapContext(scope: Element, setup: (instance: typeof gsap) => void) {
	if (typeof window === 'undefined' || !motionAllowed()) {
		return () => {};
	}

	const context = gsap.context(() => {
		setup(gsap);
	}, scope);

	return () => context.revert();
}
