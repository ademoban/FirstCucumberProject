package com.vytrack.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(

        plugin = {
                "html:target\\default-cucmber-repots"
        },

tags = {"~VYT24-93"},
        features = {"src\\test\\resources\\features"},//will get where is the feature file
        glue={"com\\vytrack\\step_definitions"},// indicate path to stepdefinitions
        dryRun = false//stands for generation stepdefinitions for scenario steps. When it`s tru, you will not run
//        your code.Cucumber will check if all scenario are defined. you can generate step definitions
//        whe its false you can run your code
)
public class CukesRunner {



}
