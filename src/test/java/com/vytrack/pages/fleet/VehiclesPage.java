package com.vytrack.pages.fleet;

import com.vytrack.utilities.BasePage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.Random;

public class VehiclesPage extends BasePage {
    @FindBy(xpath = "//label[text()='Page:']/following-sibling::ul//input")
    public WebElement pageNumber;
    @FindBy(css = "[title='Create Car']")
    public WebElement createACarBtn;
    @FindBy(css = "[id^='custom_entity_type_LicensePlate']")
    public WebElement licensePlate;
    @FindBy(css = "[id^='custom_entity_type_Driver']")
    public WebElement driverInput;
    @FindBy(css = "[id^='custom_entity_type_Location']")
    public WebElement location;
    @FindBy(css = "[id^='custom_entity_type_ModelYear']")
    public WebElement modelYear;
    @FindBy(css = "[id^='custom_entity_type_Color']")
    public WebElement color;
    @FindBy(css = "[id^='custom_entity_type_Power']")
    public WebElement power;
    @FindBy(css = "[class='btn btn-success action-button']")
    public WebElement saveAndClose;
    @FindBy(xpath = "//span[text()='General Information']")
    public WebElement generalInfo;
    public Integer getPageNumber() {
        return Integer.valueOf(pageNumber.getAttribute("value"));
    }
    public void clickToCreateACar() {
        BrowserUtils.waitForStaleElement(createACarBtn);
        createACarBtn.click();
    }
    public void enterLicensePlate(String value) {
        licensePlate.clear();
        licensePlate.sendKeys(value);
    }
    public void enterDriver(String value) {
        //if we will do negative testing
        //and before there will be invalid text
        //we want to clear first
        //some applications have placeholders that might prevent correct text input
        driverInput.clear();
        driverInput.sendKeys(value);
    }
    public void enterLocation(String value) {
        location.clear();
        location.sendKeys(value);
    }
    public void enterModelYear(String value) {
        modelYear.clear();
        modelYear.sendKeys(value);
    }
    public void enterColor(String value) {
        color.clear();
        color.sendKeys(value);
    }
    public void enterPower(String value) {
        power.clear();
        power.sendKeys(value);
    }
    public void clickSaveAndClose() {
        saveAndClose.click();
    }
    public boolean verifyGeneralInformationIsDisplayed() {
        try {
            return generalInfo.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    public WebElement selectcars() {

        Random r= new Random(25);
        int k= r.nextInt(10);
        WebElement cars= Driver.getDriver().findElement(By.xpath("//table[1]//tbody[1]//tr["+k+"]//td[1]"));

        return cars;
    }
}