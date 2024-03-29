package com.vytrack.step_definitions;

import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Pages;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import com.vytrack.utilities.Pages;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class TopMenuStepDefinitions {

    Pages pages = new Pages();


    @Then("user navigates to {string} and {string}")
    public void user_navigates_to_and(String tab, String module) {
        pages.dashboardPage().navigateToModule(tab, module);
    }

    @Then("user name should be {string}")
    public void user_name_should_be(String expected) {
        Assert.assertEquals(expected, pages.dashboardPage().getUserMenuName());
    }


}