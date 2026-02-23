package com.mcore.taxigo.auth;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mcore.taxigo.auth.dto.request.LoginRequest;
import com.mcore.taxigo.auth.dto.request.RegisterRequest;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public String login(@Valid @RequestBody LoginRequest loginRequest) {
        // Implement login logic
        return "Login successful";
    }

    @PostMapping("/register")
    public String register(@Valid @RequestBody RegisterRequest registerRequest) {
        // Implement registration logic
        return "Registration successful";
    }
}
