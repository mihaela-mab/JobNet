export type Job = {
    id: number;
    name: string;
    experienceRequired: boolean;
    companyName: string;
    type: string;
    requiredExperience: number;
    domain: string;
    description: string;
    techonologies: Array<string>;
    benefits: Array<string>;
    role: Array<string>;
}