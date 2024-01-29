import pageElements from '../uiElements/benefits.json'

class BenefitsPage {
    constructor(page) {
        this.page = page
    }

    async inputBenefit1(benefit) {
        const benefitInput = await this.page.getByPlaceholder(pageElements.benefitInput1.placeholder)
        await benefitInput.click()
        await benefitInput.fill(benefit)
    }

    async inputBenefit2(benefit) {
        const benefitInput = await this.page.getByPlaceholder(pageElements.benefitInput2.placeholder)
        await benefitInput.click()
        await benefitInput.fill(benefit)
    }

    async inputBenefit3(benefit) {
        const benefitInput = await this.page.getByPlaceholder(pageElements.benefitInput3.placeholder)
        await benefitInput.click()
        await benefitInput.fill(benefit)
    }

    async clickFinalize() {
        const el = await this.page.locator(pageElements.finalizeBtn.locator)
        await el.click()
    }
}

export default BenefitsPage