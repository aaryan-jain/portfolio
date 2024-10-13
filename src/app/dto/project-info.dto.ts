export type ProjectInfo = {
    title: string;
    description: string;
    tags: {
        tagName: string;
        tagColor: string;
    }[],
    liveLink: string;
    githubLink: string;
    image: string;
    additionalInfo?: any;
}