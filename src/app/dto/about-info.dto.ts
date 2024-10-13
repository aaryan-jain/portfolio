export type AboutInfo = {
    name: string;
    designation: string;
    location?: string;
    email: string;
    phone: string;
    linkedin?: string;
    github?: string;
    personalImage: string;
    coverLetter: string;
    workexperiences: WorkExperience[];
}

export type WorkExperience = {
    company: string;
    time: string;
    designation: string;
    role: string;
};