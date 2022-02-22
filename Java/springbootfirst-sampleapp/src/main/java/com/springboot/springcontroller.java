package com.springboot;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

import com.springboot.entities.Coures;
import com.springboot.springrest.Services.CourseService;
 
@RestController
@RequestMapping()
public class springcontroller {
	
	@Autowired
	 private CourseService courseService;
	 
	@GetMapping("/home")
	public String returnValue() {
		return "Welcome to spring boot app";
		
	}
	@GetMapping("/courses")
	public List<Coures> getCourses() 
	{
		
		return this.courseService.getCourses();
		
	}
}
