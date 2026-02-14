import {Page,Locator} from '@playwright/test';

export class HomePage{
    readonly page:Page;
    readonly clickOnFilter:Locator;
    readonly selectFilter:Locator;
    readonly addToCartButton:Locator;


    constructor(page:Page){
        this.page=page;
        this.clickOnFilter=page.locator('.product_sort_container');
        this.selectFilter=page.locator('[data-test="product-sort-container"]');
        this.addToCartButton=page.locator('#add-to-cart-sauce-labs-onesie');
    }

    async applyFilter(){
        await this.clickOnFilter.click();
        await this.selectFilter.selectOption('lohi');
    }

    async addToCart(){
        await this.addToCartButton.click();
    }
}