import pageElements from '../uiElements/businessType.json'

class BusinessTypePage {
    constructor(page) {
        this.page = page
        this.url = 'start-ai-website-building/?categories=1&website_type=default'
    }

    async inputBusinessType(business) {
        const inputDiv = await this.page.locator(pageElements.inputDiv.locator)
        await inputDiv.click()

        const inputField = await this.page.getByPlaceholder(pageElements.businessTypeInput.placeholder)
        await inputField.click()
        await inputField.fill(business)

        const option  = await this.page.locator(`[data-value=${business}]`)
        await option.click()
    }

    async clickNext() {
        const el = await this.page.locator(pageElements.nextBtn.locator)
        await el.click()
    }
}

export default BusinessTypePage