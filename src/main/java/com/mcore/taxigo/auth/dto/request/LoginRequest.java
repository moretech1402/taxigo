package com.mcore.taxigo.auth.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record LoginRequest(
    
    @NotNull(message="Is required")
    @Email(message="Must be a valid email")
    String email,

    @NotNull(message="Is required")
    @Size(min=6, message="Must be at least {min} characters")
    String password
) { }
