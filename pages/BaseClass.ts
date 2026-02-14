import {Page} from '@playwright/test';

export class BaseClass{
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async gotoUrl(url:string){
        await this.page.goto(url);
    }
}