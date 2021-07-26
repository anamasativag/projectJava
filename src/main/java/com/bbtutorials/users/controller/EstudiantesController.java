package com.bbtutorials.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bbtutorials.users.entity.Estudiantes;
import com.bbtutorials.users.links.EstudianteLinks;
import com.bbtutorials.users.service.EstudiantesService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class EstudiantesController {
	
	@Autowired
	EstudiantesService estudiantesService;
	
	@GetMapping(path = EstudianteLinks.LIST_ESTUDIANTES)
    public ResponseEntity<?> listEstudiantes() {
        log.info("EstudiantesController:  list estudiantes");
        List<Estudiantes> resource = estudiantesService.getEstudiantes();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = EstudianteLinks.ADD_ESTUDIANTE)
	public ResponseEntity<?> saveEstudiante(@RequestBody Estudiantes estudiante) {
        log.info("EstudiantesController:  list estudiantes");
        Estudiantes resource = estudiantesService.saveEstudiante(estudiante);
        return ResponseEntity.ok(resource);
    }
}
