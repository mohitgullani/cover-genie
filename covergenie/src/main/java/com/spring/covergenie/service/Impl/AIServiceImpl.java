package com.spring.covergenie.service.Impl;

import com.spring.covergenie.Entities.Content;
import com.spring.covergenie.OpenAIResponse;
import com.spring.covergenie.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.HttpHeaders;
import java.util.HashMap;
import java.util.Map;

@Service
public class AIServiceImpl implements AIService {
    private final RestTemplate restTemplate;

    @Autowired
    public AIServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    private String apiKey = "";

    private static final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
    @Override
    public String generateCoverLetter(Content content){
        String prompt = "Generate a Professional and human written Cover Letter not more than 350 words based on below Resume:\n" + content.getResume() + "and Job Description:\n" + content.getJd() + "" +
                "Please preform the data cleaning on resume and job description first" +
                "and also mention the details of the person on the cover letter by fetching it from the resume";

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "gpt-3.5-turbo");
        requestBody.put("messages", new Object[]{
                new HashMap<String, String>() {{
                    put("role", "system");
                    put("content", "You are a helpful assistant.");
                }},
                new HashMap<String, String>() {{
                    put("role", "user");
                    put("content", prompt);
                }}
        });
        requestBody.put("max_tokens", 500);

        // Set the headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        // Create the HTTP entity
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        // Send the POST request
        try {
            ResponseEntity<OpenAIResponse> responseEntity = restTemplate.exchange(OPENAI_API_URL, HttpMethod.POST, entity, OpenAIResponse.class);

            // Extract and return the generated cover letter
            OpenAIResponse response = responseEntity.getBody();
            if (response != null && !response.getChoices().isEmpty()) {
                return response.getChoices().get(0).getMessage().getContent().trim();
            } else {
                return "No response from OpenAI";
            }
        } catch (HttpClientErrorException.TooManyRequests e) {
            // Handle 429 Too Many Requests error
            return "You have exceeded your quota for the OpenAI API. Please try again later or check your billing details.";
        } catch (HttpClientErrorException e) {
            // Handle other client errors
            return "An error occurred: " + e.getMessage();
        }
    }
}
