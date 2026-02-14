import {Page,Locator} from '@playwright/test';

export class CartPage{
    readonly page:Page;
    readonly clickOnCartButton:Locator;
    readonly checkoutButton:Locator;
    readonly firstNameInput:Locator;
    readonly lastNameInput:Locator
    readonly postalCodeInput:Locator;
    readonly continueButton:Locator;
    readonly finishButton:Locator;
   


    constructor(page:Page){
        this.page=page;
        this.clickOnCartButton=page.locator('.shopping_cart_link');
        this.checkoutButton=page.locator('#checkout');
        this.firstNameInput=page.locator('#first-name');
        this.lastNameInput=page.locator('#last-name');
        this.postalCodeInput=page.locator('#postal-code');
        this.continueButton=page.locator("[type='submit']");
        this.finishButton=page.locator('#finish');

    }

    async clickOnCart(){
        await this.clickOnCartButton.click();
        
    }

    async checkout(){
        await this.checkoutButton.click();
    }

    async details(){
        await this.firstNameInput.fill('John');
        await this.lastNameInput.fill('Doe');
        await this.postalCodeInput.fill('12345');
        await this.continueButton.click();
        await this.finishButton.click();
        

    }

}