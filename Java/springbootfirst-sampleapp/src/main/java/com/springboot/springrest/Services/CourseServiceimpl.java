package com.springboot.springrest.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.springboot.entities.Coures;

@Service
public class CourseServiceimpl implements CourseService {
	
	  List<Coures> list;
	   
	  public CourseServiceimpl() {
		
		list=new ArrayList<>();
		list.add(new Coures(145,"java","basics of java"));
		list.add(new Coures(443,"java  course","creatin an API"));
	}

	@Override
	public List<Coures> getCourses() {
		
		return list;
	}

}
