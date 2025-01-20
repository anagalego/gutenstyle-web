const paths = {
    //Gutenstyle
    home() {
        return `/`;
    },
    getStarted() {
        return `/get-started`;
    },
    newIn() {
        return `/new-in`;
    },
    aboutPurpose() {
        return `/about/purpose`;
    },
    aboutShowcase() {
        return `/about/showcase`;
    },
    aboutShowcaseProject(projectSlug: string) {
        return `/about/showcase/${projectSlug}`;
    },
    designTokens() {
        return `/design/tokens`;
    },
    designFoundations() {
        return `/design/foundations`;
    },
    componentsOverview() {
        return `/components/overview`;
    },
    componentsComponent(componentSlug: string) {
        return `/components/${componentSlug}`;
    }
}

export default paths;