export class UserProfile {
    public name: string;
    public about: string;
    public role: string;
    public company: string;
    public skills: string[];

    constructor(name: string, about: string, role: string, company: string, skills: string[]) {
        this.name = name;
        this.about = about;
        this.role = role;
        this.company = company;
        this.skills = skills;
    }
}