package cucutest.runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="featurefiles/test1.feature",glue= {"cucutest.stepdef","hooks"},
strict=true,monochrome=true,format= {"html:report/webreport","json:report/jreport.json","junit:report/xmlreport.xml"},tags= {"@positive,@negative"})

public class runner {


	
	
	
	
	
}
