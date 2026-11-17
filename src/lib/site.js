export const site = {
	name: 'AEA',
	title: 'AEA documentation',
	description: "Documentation for AEA, an addon for Overgrown's Origins on NeoForge 1.21.1.",
	/** The mod's repository, linked from the header. */
	repo: 'https://github.com/AlphaSuckss/AEA-NeoForge',
	/** This site's repository and where its Markdown lives, for "Edit this page" links. */
	docsRepo: 'https://github.com/AlphaSuckss/AEA-Docs',
	contentPath: 'src/content'
};

/** Sidebar sections, in order. `dir` is the folder under src/content ('' is the top level). */
export const sections = [
	{ dir: '', label: 'Introduction' },
	{ dir: 'powers', label: 'Powers' },
	{ dir: 'actions', label: 'Actions' },
	{ dir: 'conditions', label: 'Conditions' },
	{ dir: 'features', label: 'Features' }
];
