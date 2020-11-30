package cucutest.stepdef;

import cucumber.api.java.en.*;

public class test2step {
	@Given("^this is step one$")
	public void this_is_step_one() throws Throwable {
	    
	}

	@When("^this is step two \"([^\"]*)\" and \"([^\"]*)\"$")
	public void this_is_step_two_and(String arg1, String arg2) throws Throwable {
	   System.out.println("usr"+arg1+"pwd"+arg2);
	}

	@When("^this is step three$")
	public void this_is_step_three() throws Throwable {
		   
	}

	@Then("^this is step four$")
	public void this_is_step_four() throws Throwable {
	
	
	
	}


}
