package com.vytrack.pages.fleet;

import com.vytrack.utilities.BasePage;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.Random;

public class VehiclesPage extends BasePage {
    @FindBy(xpath = "//label[text()='Page:']/following-sibling::ul//input")
    public WebElement pageNumber;
   @FindBy(xpath = "//table[1]//tbody[1]//tr[2]//td[1]")
    public WebElement cars;


    public Integer getPageNumber() {
        return Integer.valueOf(pageNumber.getAttribute("value"));
    }



    public WebElement selectcars() {

        Random r= new Random(25);
        int k= r.nextInt(10);
        WebElement cars= Driver.getDriver().findElement(By.xpath("//table[1]//tbody[1]//tr["+k+"]//td[1]"));

        return cars;
    }
}