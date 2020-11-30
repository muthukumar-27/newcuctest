package cucutest.stepdef;

import cucumber.api.java.en.*;

public class openstep {
	@Given("^User is on google\\.com$")
	public void user_is_on_google_com() throws Throwable {
	   
	}

	@When("^User enter search term \"([^\"]*)\"$")
	public void user_enter_search_term(String arg1) throws Throwable {
	
	}

	@When("^User hits enter (\\d+)$")
	public void user_hits_enter(int arg1) throws Throwable {

	}

	@Then("^User should get the result (\\d+\\.\\d+)$")
	public void user_should_get_the_result(int arg1) throws Throwable {
	
		System.out.println("argumen1ts value"+arg1);
	}


}
