import pageElements from '../uiElements/letStartWithAi.json'

class LetsStartWithAiPage {
    constructor(page) {
        this.page = page
    }

    async clickInformationalWebsite() {
        const el = await this.page.locator(pageElements.informationalWebsite.locator).first()
        await el.click()
    }

    async clickNext() {
        const nextBtn = await this.page.locator(pageElements.nextBtn.locator)
        await nextBtn.click()
    }
}

export default LetsStartWithAiPage