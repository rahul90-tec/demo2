import {test,expect} from '@playwright/test';
import {BaseClass} from '../pages/BaseClass';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {CartPage} from '../pages/Cart';



test('Login to the application', async({page})=>{
    const baseClass=new BaseClass(page);
    await baseClass.gotoUrl('https://www.saucedemo.com/');

    const loginPage=new LoginPage(page);
    await loginPage.login('standard_user','secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const homePage=new HomePage(page);
    await homePage.applyFilter();
    await homePage.addToCart();

    const cart=new CartPage(page);
    await cart.clickOnCart();
    await cart.checkout();
    
    await cart.details();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

})