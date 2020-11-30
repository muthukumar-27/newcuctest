package hooks;

import cucumber.api.java.*;

public class hookclass {
	
	
	@Before(order=0)
	public void bf()
	{
		System.out.println("bf");
	}
	@Before("@positive,@negative")
	public void bf1()
	{
		System.out.println("bf2");
	}
	
	@After("@negative")
	public void af1()
	{
		System.out.println("af1");
	}
	@After()
	public void af()
	{
		System.out.println("af");
	}

}
