package cucutest.stepdef;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class test1step {

	@Given("^users is on google\\.com$")
	public void users_is_on_google_com() throws Throwable {
	   
	}


@Given("^thisi is back test$")
public void thisi_is_back_test() throws Throwable {
    System.out.println("thi is background");
}
	
	
	@When("^usesr enters serach term$")
	public void usesr_enters_serach_term(DataTable arg1) throws Throwable {
	
		
		
		List<Map<String,String>> m=arg1.asMaps(String.class, String.class);
		
		System.out.println(m.get(0).get("ar1"));
		System.out.println(m.get(0).get("ar"
				+ "2"));
	}


	@When("^Users hits enter$")
	public void users_hits_enter() throws Throwable {
	  
	}

	@Then("^User see the resulst$")
	public void user_see_the_resulst() throws Throwable {
		
	}

}
