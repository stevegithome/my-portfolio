import { z } from 'zod';

const actionLinkSchema = z.object({
	label: z.string().min(1),
	url: z.string().url()
});

const richLinkSchema = actionLinkSchema.extend({
	emphasis: z.enum(['primary', 'secondary']).default('secondary')
});

const projectSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	summary: z.string().min(1),
	role: z.string().min(1),
	context: z.string().min(1),
	impact: z.array(z.string().min(1)).min(2),
	stack: z.array(z.string().min(1)).min(2),
	links: z.array(actionLinkSchema).min(1),
	featured: z.boolean()
});

const experienceSchema = z.object({
	title: z.string().min(1),
	organization: z.string().min(1),
	period: z.string().min(1),
	summary: z.string().min(1),
	bullets: z.array(z.string().min(1)).min(2)
});

const faqSchema = z.object({
	question: z.string().min(1),
	answer: z.string().min(1)
});

const personalitySchema = z.object({
	label: z.string().min(1),
	detail: z.string().min(1)
});

export const portfolioSchema = z.object({
	site: z.object({
		name: z.string().min(1),
		roleLabel: z.string().min(1),
		location: z.string().min(1),
		availability: z.string().min(1),
		intro: z.string().min(1),
		tagline: z.string().min(1),
		primaryCtas: z
			.object({
				work: z.string().min(1),
				contact: z.string().min(1)
			})
			.strict(),
		socialLinks: z.array(actionLinkSchema).min(2)
	}),
	seo: z.object({
		title: z.string().min(1),
		description: z.string().min(50),
		canonicalUrl: z.string().url(),
		socialImage: z.string().min(1),
		robots: z.string().min(1)
	}),
	geo: z.object({
		topicPhrases: z.array(z.string().min(1)).min(3),
		expertiseLabels: z.array(z.string().min(1)).min(3),
		summaryVariants: z.array(z.string().min(1)).min(2),
		faq: z.array(faqSchema).min(2)
	}),
	about: z.object({
		narrative: z.string().min(1),
		principles: z.array(z.string().min(1)).min(3),
		personality: z.array(personalitySchema).min(3)
	}),
	projects: z.array(projectSchema).min(3),
	experience: z.array(experienceSchema).min(2),
	contact: z.object({
		email: z.string().email(),
		availabilityNote: z.string().min(1),
		links: z.array(richLinkSchema).min(2)
	})
});

export type PortfolioContent = z.infer<typeof portfolioSchema>;
export type PortfolioProject = PortfolioContent['projects'][number];
export type PortfolioExperience = PortfolioContent['experience'][number];
