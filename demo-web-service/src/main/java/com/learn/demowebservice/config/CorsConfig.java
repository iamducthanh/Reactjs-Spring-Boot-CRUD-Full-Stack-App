package com.learn.demowebservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

//@Configuration
public class CorsConfig {

//    @Bean
//    public CorsFilter corsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//        config.addAllowedOrigin("http://localhost:3000/"); // e.g. http://domain1.com
//        config.addAllowedHeader("*");
//        config.addAllowedMethod("*");
//        System.out.println("apiiii");
//        source.registerCorsConfiguration("/api/**", config);
//        return new CorsFilter(source);
//    }

}

