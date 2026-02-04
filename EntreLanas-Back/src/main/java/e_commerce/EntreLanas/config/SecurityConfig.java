package e_commerce.EntreLanas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Desactivar CSRF (porque usaremos Tokens JWT, no cookies de sesión)
            .csrf(csrf -> csrf.disable())
            
            // 2. Configurar las reglas de las URLs
            .authorizeHttpRequests(auth -> auth
                // Permitir a todo el mundo entrar a ver productos y hacer login/registro
                .requestMatchers("/api/productos/**").permitAll() 
                .requestMatchers("/api/auth/**").permitAll()
                
                // Cualquier otra cosa (como ver pedidos), requiere estar autenticado
                .anyRequest().authenticated()
            )
            
            // 3. No guardar estado (Stateless) - Importante para REST APIs
            .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }
}
