export class MetaConfig {
    title: string;
    url: string;
    description: string;
    type: string;

    constructor(title: string, url: string, description: string, type: string){
        this.title = title;
        this.url = url;
        this.description = description;
        this.type = type;
    }
}
