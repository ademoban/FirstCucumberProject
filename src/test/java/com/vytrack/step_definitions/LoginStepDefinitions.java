package com.vytrack.step_definitions;

import com.vytrack.pages.login_navigation.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import com.vytrack.utilities.Pages;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;

import javax.security.auth.login.Configuration;

import static org.junit.Assert.*;

public class LoginStepDefinitions {
    Pages pages = new Pages();
    @Given("user is on the landing page")
    public void user_is_on_the_landing_page() {
        pages.loginPage().goLandingPage();
    }
    @Then("user logs in as a store manager")
    public void user_logs_in_as_a_store_manager() {
        String username = ConfigurationReader.getProperty("storemanagerusername");
        String password = ConfigurationReader.getProperty("storemanagerpassword");
        pages.loginPage().login(username, password);
    }
    @Then("user verifies that {string} page name is displayed")
    public void user_verifies_that_page_name_is_displayed(String expected) {
        Assert.assertEquals(expected,  pages.dashboardPage().getPageSubTitle());
    }
    @Then("user quits")
    public void user_quits() {
        Driver.closeDriver();
    }

    @Then("user logs in with {string} username and {string} password")
    public void user_logs_in_with_username_and_password(String string, String string2) {
        pages.loginPage().login(string, string2);
    }
    @Then("user verfies {string} warning message is displayed")
    public void user_verfies_warning_message_is_displayed(String string) {
   Assert.assertTrue(pages.loginPage().getErrorMessage().equalsIgnoreCase(string));
    }

}