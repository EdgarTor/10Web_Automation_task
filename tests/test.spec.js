// @ts-check
import { test, expect } from '@playwright/test';
import WhatDoYouWantToDoPage from '../pages/whatDoYouWantToDo';
import LetsStartWithAiPage from '../pages/letsStartWIthAi';
import BusinessTypePage from '../pages/businessType';
import CompanyNameAndDescriptionPage from '../pages/companyNameAndDescription';
import BenefitsPage from '../pages/benefits';

import benefitsElements from '../uiElements/benefits.json'

const companyName = 'Wine O\’Clock'
const companyDesc = 'tasty, flavory, cozy'

test.describe('Food related business website creation flow', () => {
    test('should successfully create a website with description, provided by user', async ({ page }) => {
        const whatDoYouWantToDo = new WhatDoYouWantToDoPage(page)
        whatDoYouWantToDo.open()
        whatDoYouWantToDo.clickNewWebsiteWithAi()
    
        const letsStartWithAi = new LetsStartWithAiPage(page)
        letsStartWithAi.clickInformationalWebsite()
        letsStartWithAi.clickNext()
    
        const businessType = new BusinessTypePage(page)
        businessType.inputBusinessType('food')
        businessType.clickNext()
    
        const companyNameAndDescriptionPage = new CompanyNameAndDescriptionPage(page)
        companyNameAndDescriptionPage.inputName(companyName)
        companyNameAndDescriptionPage.inputDescription(companyDesc)
        companyNameAndDescriptionPage.clickNext()
    
        const benefits = new BenefitsPage(page)
        benefits.inputBenefit1('Delicious Cuisine')
        benefits.inputBenefit2('Quality Wine')
        benefits.inputBenefit3('Savory Flavors')
        benefits.clickFinalize()
    
        await expect(page.locator(benefitsElements.successModal.locator)).toBeVisible
    
       
        await page.waitForTimeout(30000)
    });
    
    test('should successfully create a website with AI enhanced description', async ({ page }) => {
        const whatDoYouWantToDo = new WhatDoYouWantToDoPage(page)
        whatDoYouWantToDo.open()
        whatDoYouWantToDo.clickNewWebsiteWithAi()
    
        const letsStartWithAi = new LetsStartWithAiPage(page)
        letsStartWithAi.clickInformationalWebsite()
        letsStartWithAi.clickNext()
    
        const businessType = new BusinessTypePage(page)
        businessType.inputBusinessType('food')
        businessType.clickNext()
    
        const companyNameAndDescriptionPage = new CompanyNameAndDescriptionPage(page)
        companyNameAndDescriptionPage.inputName('Wine O\’Clock')
        companyNameAndDescriptionPage.inputDescription('tasty, flavory, cozy')
    
        await page.waitForTimeout(6000)
        companyNameAndDescriptionPage.enhanceWithAi()
        await page.waitForTimeout(6000)
        companyNameAndDescriptionPage.clickNext()
    
        const benefits = new BenefitsPage(page)
        benefits.inputBenefit1('Delicious Cuisine')
        benefits.inputBenefit2('Quality Wine')
        benefits.inputBenefit3('Savory Flavors')
        benefits.clickFinalize()
    
        await expect(page.locator(benefitsElements.successModal.locator)).toBeVisible
    
       
        await page.waitForTimeout(30000)
    });
})

