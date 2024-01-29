import pageElements from '../uiElements/whatDoYouWantToDo.json'

class WhatDoYouWantToDoPage {
    constructor(page) {
        this.page = page
        this.url = 'start-ai-website-building/'
    }

    async open() {
        await this.page.goto(this.url)
    }

    async clickNewWebsiteWithAi() {
        const el = await this.page.locator(pageElements.websiteWithAi.locator).first()
        await el.hover()
        await el.click()
    }
}

export default WhatDoYouWantToDoPage