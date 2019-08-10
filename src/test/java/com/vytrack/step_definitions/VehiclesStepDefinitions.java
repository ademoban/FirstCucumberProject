package com.vytrack.step_definitions;

import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Pages;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class VehiclesStepDefinitions {
    Pages pages = new Pages();

    @Then("user  verifies that default page number is {int}")
    public void user_verifies_that_default_page_number_is(Integer expected) {
        BrowserUtils.waitPlease(3);
        Assert.assertEquals(expected, pages.vehiclesPage().getPageNumber());
    }
}





