export class Employee {

    id!: number;
    name!: string;
    email!: string;

    constructor(data:AnalyserNode) {
       Object.assign(this, data);
    }

    nameWithEmail(): string {
        return `${this.name} <${this.email}>`;
    }

}
