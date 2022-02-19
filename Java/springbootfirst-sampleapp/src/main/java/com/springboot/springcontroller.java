package com.springboot;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;
 
@RestController
@RequestMapping()
public class springcontroller {
	
	@GetMapping
	public String returnValue() {
		return "Welcome to spring boot app";
		
	}

}
