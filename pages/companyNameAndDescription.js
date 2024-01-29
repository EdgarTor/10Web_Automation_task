import pageElements from '../uiElements/companyNameAndDescription.json'

class CompanyNameAndDescriptionPage {
    constructor(page) {
        this.page = page
    }

    async inputName(name) {
        const nameInput = await this.page.locator(pageElements.nameInput.locator)
        await nameInput.click()
        await nameInput.fill(name)
    }

    async inputDescription(description) {
        const descTextarea = await this.page.locator(pageElements.descriptionInput.locator)
        await descTextarea.click()
        await descTextarea.fill(description)
    }

    async enhanceWithAi() {
        this.page.waitForTimeout(30000)
        const enhanceBtn = await this.page.locator(pageElements.enhanceBtn.locator)
        await enhanceBtn.click()
        this.page.waitForTimeout(30000)
    }

    async clickNext() {
        const el = await this.page.locator(pageElements.nextBtn.locator)
        await el.click()
    }
}

export default CompanyNameAndDescriptionPage