package com.spring.covergenie.controller;

import com.spring.covergenie.Entities.Content;
import com.spring.covergenie.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1")
public class AIController {
    @Autowired
    AIService aiService;

    @PostMapping("/coverletter")
    public String getCoverLetter(@RequestBody Content content){
        System.out.println(content.resume);
        return aiService.generateCoverLetter(content);
    }
}
