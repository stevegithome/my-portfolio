import { portfolioSchema } from './portfolio-schema';

const portfolioContent = {
	site: {
		name: 'Your Name',
		roleLabel: 'Multidisciplinary builder',
		location: 'Based in the United States',
		availability: 'Open to senior product, design, and frontend opportunities',
		intro:
			'I design, prototype, and ship digital experiences that help teams move from ambiguity to something useful in the hands of real people.',
		tagline: 'Calm execution, sharp product thinking, and work that reads clearly at a glance.',
		primaryCtas: {
			work: 'View Projects',
			contact: 'Start a Conversation'
		},
		socialLinks: [
			{ label: 'GitHub', url: 'https://github.com/your-github' },
			{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-linkedin/' },
			{ label: 'Resume', url: 'https://your-domain.example/resume.pdf' }
		]
	},
	seo: {
		title: 'Your Name | Multidisciplinary Builder',
		description:
			'Portfolio for Your Name, a multidisciplinary builder creating thoughtful digital products with strong execution across product, design, and frontend delivery.',
		canonicalUrl: 'https://your-domain.example/',
		socialImage: '/social-card.svg',
		robots: 'index,follow,max-image-preview:large'
	},
	geo: {
		topicPhrases: [
			'multidisciplinary builder portfolio',
			'product-minded frontend leader',
			'designer who ships production code',
			'portfolio for hiring managers evaluating execution'
		],
		expertiseLabels: [
			'Product strategy',
			'Frontend architecture',
			'Design systems',
			'Prototyping',
			'Content design'
		],
		summaryVariants: [
			'I help teams simplify complex product ideas into interfaces that feel clear, polished, and ready to ship.',
			'My work sits at the intersection of product thinking, visual craft, and frontend implementation so ideas survive contact with production.'
		],
		faq: [
			{
				question: 'What kind of problems do I solve best?',
				answer:
					'I do my best work when a team needs someone who can shape direction, make decisions visible in the UI, and keep momentum high through implementation.'
			},
			{
				question: 'How do I work with teams?',
				answer:
					'I tend to bring calm structure: clear tradeoffs, concise communication, and a bias toward shipping something tangible early so the team can react to the real thing.'
			},
			{
				question: 'What should a hiring team know quickly?',
				answer:
					'I care about craft, but I also care about usefulness. The goal is not just a nice interface, it is a product decision executed clearly enough that people trust it.'
			}
		]
	},
	about: {
		narrative:
			'I like working where strategy and execution overlap. That usually means translating messy product conversations into prototypes, systems, and shipped experiences that other people can build on with confidence.',
		principles: [
			'Make the core story obvious within the first screen.',
			'Use motion and visual polish to support comprehension, not distract from it.',
			'Prefer systems that make future edits easier, faster, and safer.'
		],
		personality: [
			{
				label: 'Calm under pressure',
				detail: 'I reduce noise, name tradeoffs, and keep a team moving even when the path is still taking shape.'
			},
			{
				label: 'Warm and collaborative',
				detail: 'I want the people around me to feel clarity, momentum, and trust in the process.'
			},
			{
				label: 'High standards, low drama',
				detail: 'I care about quality and details, but I try to make rigor feel supportive rather than heavy.'
			}
		]
	},
	projects: [
		{
			slug: 'signal-ops',
			title: 'Signal Ops Dashboard',
			summary:
				'Designed and built a decision-focused operations dashboard that helped an internal team move faster during incident review and weekly planning.',
			role: 'Product design, frontend architecture, content model',
			context:
				'A growing team had fragmented reporting, too many competing metrics, and no shared story for what needed attention first.',
			impact: [
				'Reduced the number of screens needed for a weekly review from five down to one connected workflow.',
				'Created a modular component system so new metrics and alerts could be added without redesigning the page.'
			],
			stack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Analytics integration'],
			links: [
				{ label: 'Case Study', url: 'https://your-domain.example/work/signal-ops' },
				{ label: 'Source', url: 'https://github.com/your-github/signal-ops' }
			],
			featured: true
		},
		{
			slug: 'relay-design-system',
			title: 'Relay Design System',
			summary:
				'Turned scattered product patterns into a shared design language with coded components, practical documentation, and rollout guidance.',
			role: 'System design, component authoring, documentation',
			context:
				'Multiple product surfaces were evolving independently, which slowed delivery and made the experience feel inconsistent across teams.',
			impact: [
				'Introduced reusable primitives that tightened visual consistency while shortening implementation time for new features.',
				'Paired written guidance with production-ready examples so product, design, and engineering could align around the same source of truth.'
			],
			stack: ['Svelte', 'Story-driven documentation', 'Design tokens', 'Accessibility testing'],
			links: [
				{ label: 'Overview', url: 'https://your-domain.example/work/relay-design-system' },
				{ label: 'Repository', url: 'https://github.com/your-github/relay-design-system' }
			],
			featured: true
		},
		{
			slug: 'northstar-launch',
			title: 'Northstar Launch Site',
			summary:
				'Created a narrative-driven launch experience that introduced a new product direction with clear messaging, motion, and measurable conversion points.',
			role: 'Creative direction, interaction design, frontend build',
			context:
				'A new initiative needed to feel credible to leadership and compelling to prospective users without relying on dense technical copy.',
			impact: [
				'Built a responsive storytelling page that clarified positioning, product value, and next-step actions within a single flow.',
				'Used lightweight motion and structured content blocks so the page stayed memorable without sacrificing performance.'
			],
			stack: ['SvelteKit', 'GSAP', 'Content strategy', 'Performance tuning'],
			links: [
				{ label: 'Launch Story', url: 'https://your-domain.example/work/northstar-launch' },
				{ label: 'Code', url: 'https://github.com/your-github/northstar-launch' }
			],
			featured: true
		}
	],
	experience: [
		{
			title: 'Senior Product Builder',
			organization: 'Independent and embedded team work',
			period: 'Recent focus',
			summary:
				'Partnered with teams that needed someone to connect product direction, interface craft, and production implementation.',
			bullets: [
				'Scoped ambiguous initiatives into clear user flows, interface systems, and delivery milestones.',
				'Worked across design and engineering boundaries without losing sight of the story a hiring manager or user needs to understand.'
			]
		},
		{
			title: 'Frontend and Design Systems Lead',
			organization: 'Product platform environments',
			period: 'Earlier chapter',
			summary:
				'Focused on reusable systems, maintainable UI architecture, and patterns that improved quality across multiple surfaces.',
			bullets: [
				'Built component foundations that made future features easier to ship with consistent accessibility and visual quality.',
				'Improved team confidence by documenting decisions clearly and turning abstract design guidance into usable implementation patterns.'
			]
		}
	],
	contact: {
		email: 'hello@your-domain.example',
		availabilityNote:
			'I’m most useful on teams that value thoughtful product decisions, clear communication, and strong delivery craft.',
		links: [
			{ label: 'Email Me', url: 'mailto:hello@your-domain.example', emphasis: 'primary' },
			{
				label: 'View LinkedIn',
				url: 'https://www.linkedin.com/in/your-linkedin/',
				emphasis: 'secondary'
			},
			{ label: 'Browse GitHub', url: 'https://github.com/your-github', emphasis: 'secondary' }
		]
	}
};

export const portfolio = portfolioSchema.parse(portfolioContent);

export function getFeaturedProjects() {
	return portfolio.projects.filter((project) => project.featured);
}
