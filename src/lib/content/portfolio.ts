import { portfolioSchema } from './portfolio-schema';

const portfolioContent = {
	site: {
		name: 'Steve Garza',
		roleLabel: 'Growth and lifecycle leader',
		location: 'Based in the United States',
		availability: 'Open to growth, lifecycle, monetization, retention, and GTM strategy opportunities',
		intro:
			'I build measurement-led growth systems for lifecycle, monetization, retention, and go-to-market teams.',
		tagline:
			'My work connects experimentation, KPI governance, segmentation, and cross-functional operating cadence so teams can make clearer growth decisions without losing customer trust.',
		primaryCtas: {
			work: 'View Growth Work',
			contact: 'Start a Conversation'
		},
		socialLinks: [
			{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/smgarza/' },
			{ label: 'Portfolio', url: 'https://stevegithome.github.io/my-portfolio/' }
		]
	},
	seo: {
		title: 'Steve Garza | Growth and Lifecycle Leader',
		description:
			'Portfolio for Steve Garza, a growth and lifecycle leader focused on monetization, retention, experimentation, KPI governance, segmentation, and GTM operating cadence.',
		canonicalUrl: 'https://stevegithome.github.io/my-portfolio/',
		socialImage: '/social-card.svg',
		robots: 'index,follow,max-image-preview:large'
	},
	geo: {
		topicPhrases: [
			'growth and lifecycle leader portfolio',
			'monetization and retention strategy',
			'experimentation and KPI governance',
			'GTM operating cadence for growth teams'
		],
		expertiseLabels: [
			'Lifecycle strategy',
			'Monetization and retention',
			'Experimentation strategy',
			'KPI governance',
			'Segmentation and personalization',
			'GTM operating cadence'
		],
		summaryVariants: [
			'I help teams turn complex lifecycle and performance signals into practical growth decisions.',
			'My work sits at the intersection of GTM strategy, lifecycle operations, experimentation, analytics partnership, and executive-ready communication.'
		],
		faq: [
			{
				question: 'What kind of problems do I solve best?',
				answer:
					'I do my best work when a team needs growth to become an operating system: clear priorities, useful measurement, disciplined experimentation, and decisions people can act on.'
			},
			{
				question: 'How do I work with teams?',
				answer:
					'I bring calm structure, analytical judgment, and communication that works across Product, Engineering, Analytics, Finance, Legal, Marketing Ops, and leadership audiences.'
			},
			{
				question: 'What should a hiring team know quickly?',
				answer:
					'My background spans Adobe, LinkedIn, Lynda.com, and Rakuten, but this portfolio keeps the work intentionally high level so it reflects capability without exposing sensitive company details.'
			}
		]
	},
	about: {
		narrative:
			'I like working where growth strategy, lifecycle systems, and measurement meet. That often means helping teams size opportunities, create shared operating rhythms, and turn complicated performance signals into decisions that respect both business goals and customer trust.',
		principles: [
			'Use measurement to improve judgment, not to bury teams in dashboards.',
			'Build repeatable growth systems before chasing isolated wins.',
			'Protect customer trust while improving monetization and retention.'
		],
		personality: [
			{
				label: 'Measurement-led and practical',
				detail:
					'I look for the signal in complex performance information and translate it into clear next steps for growth teams.'
			},
			{
				label: 'Clear across levels',
				detail:
					'I care about making strategy and analysis understandable whether I am speaking with executives, operators, or cross-functional partners.'
			},
			{
				label: 'Customer-centered growth',
				detail:
					'I like growth work that scales outcomes while keeping value, access, and customer experience in view.'
			}
		]
	},
	projects: [
		{
			slug: 'gtm-operating-cadence',
			title: 'GTM Operating Cadence and KPI Governance',
			summary:
				'Created operating rhythms that helped growth teams connect priorities, measurement, initiative sizing, and leadership decisions.',
			role: 'GTM strategy, KPI governance, cross-functional alignment',
			context:
				'Growth work gets harder to steer when product, marketing, analytics, finance, legal, and engineering teams are looking at different signals or using different decision rhythms.',
			impact: [
				'Established clearer connections between growth priorities, KPI governance, initiative sizing, and leadership readouts.',
				'Helped teams move from scattered status updates toward a shared operating cadence for decisions and follow-through.'
			],
			stack: ['GTM cadence', 'KPI governance', 'Initiative sizing', 'Executive communication'],
			links: [
				{ label: 'Discuss this work', url: 'https://www.linkedin.com/in/smgarza/' }
			],
			featured: true
		},
		{
			slug: 'lifecycle-funnel-intelligence',
			title: 'Lifecycle Operations and Funnel Intelligence',
			summary:
				'Built lifecycle and funnel reporting practices that helped marketing teams understand where onboarding, acquisition, and retention work needed attention.',
			role: 'Lifecycle strategy, marketing operations, performance interpretation',
			context:
				'Lifecycle teams need operating discipline around audiences, journeys, channel handoffs, reporting, and decision rules so programs can scale without becoming opaque.',
			impact: [
				'Translated funnel, CRM, and campaign signals into reporting that product marketing and operations teams could use.',
				'Supported lifecycle transitions and onboarding work with clearer journey rules, governance, and performance visibility.'
			],
			stack: ['Lifecycle operations', 'Funnel analysis', 'CRM data', 'Onboarding governance'],
			links: [
				{ label: 'Discuss this work', url: 'https://www.linkedin.com/in/smgarza/' }
			],
			featured: true
		},
		{
			slug: 'segmentation-personalization-strategy',
			title: 'Segmentation and Personalization Strategy',
			summary:
				'Used segmentation, cohort thinking, and personalization strategy to help ecommerce and subscription teams decide which customer experiences to test next.',
			role: 'Segmentation strategy, personalization, test-and-learn systems',
			context:
				'Personalization can become noisy when teams do not have a clear view of customer behavior, product affinity, lifecycle stage, and the measurement needed to learn responsibly.',
			impact: [
				'Identified useful behavioral patterns and audience differences that could shape lifecycle, merchandising, and retention testing.',
				'Helped teams connect segmentation ideas to operating rhythms, measurement plans, and customer-centered decision making.'
			],
			stack: ['Segmentation', 'Personalization', 'Cohort analysis', 'Experimentation strategy'],
			links: [
				{ label: 'Discuss this work', url: 'https://www.linkedin.com/in/smgarza/' }
			],
			featured: true
		}
	],
	experience: [
		{
			title: 'Growth and Lifecycle Leadership',
			organization: 'Adobe, LinkedIn, Lynda.com, and Rakuten',
			period: 'Current focus',
			summary:
				'Builds the systems that connect lifecycle strategy, monetization and retention priorities, experimentation, analytics partnership, and GTM decision cadence.',
			bullets: [
				'Partners across Product, Engineering, Analytics, Finance, Legal, Marketing Ops, and leadership to make growth work easier to prioritize and execute.',
				'Turns complex performance signals into shared decisions without publishing sensitive company outcomes or internal details.'
			]
		},
		{
			title: 'Lifecycle Operations and Segmentation Foundation',
			organization: 'CRM, ecommerce, subscription, and professional learning environments',
			period: 'Career foundation',
			summary:
				'Grounded in CRM, email operations, segmentation, personalization, funnel analysis, and performance reporting across B2B, B2C, and global ecommerce contexts.',
			bullets: [
				'Uses segmentation and personalization as strategic inputs to lifecycle systems, not just campaign tactics.',
				'Communicates analytical findings clearly across levels so teams can act with more confidence.'
			]
		}
	],
	contact: {
		availabilityNote:
			'I’m most useful to teams that want growth to be more systematic: clearer priorities, better measurement, stronger lifecycle systems, and disciplined execution.',
		links: [
			{
				label: 'View LinkedIn',
				url: 'https://www.linkedin.com/in/smgarza/',
				emphasis: 'primary'
			},
			{
				label: 'View Portfolio',
				url: 'https://stevegithome.github.io/my-portfolio/',
				emphasis: 'secondary'
			}
		]
	}
};

export const portfolio = portfolioSchema.parse(portfolioContent);

export function getFeaturedProjects() {
	return portfolio.projects.filter((project) => project.featured);
}
