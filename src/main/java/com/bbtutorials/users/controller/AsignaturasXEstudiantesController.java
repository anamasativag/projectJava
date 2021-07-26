package com.bbtutorials.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bbtutorials.users.entity.AsignaturasXEstudiantes;
import com.bbtutorials.users.links.AsignaturaxEstudianteLinks;
import com.bbtutorials.users.service.AsignaturasXEstudiantesService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class AsignaturasXEstudiantesController {
	
	@Autowired
	AsignaturasXEstudiantesService asignaturasxestudiantesservice;
	
	@GetMapping(path = AsignaturaxEstudianteLinks.LIST_ASIGNATURASXESTUDIANTES)
    public ResponseEntity<?> listAsignaturasxestudiantes() {
        log.info("AsignaturasXEstudiantesController:  list asignaturasxestudiantes");
        List<AsignaturasXEstudiantes> resource = asignaturasxestudiantesservice.getAsignaturasxestudiantes();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = AsignaturaxEstudianteLinks.ADD_ASIGNATURAXESTUDIANTE)
	public ResponseEntity<?> saveAsignaturaxestudiante(@RequestBody AsignaturasXEstudiantes asignaturaxestudiante) {
        log.info("AsignaturasXEstudiantesController:  list asignaturasxestudiantes");
        AsignaturasXEstudiantes resource = asignaturasxestudiantesservice.saveAsignaturaxestudiante(asignaturaxestudiante);
        return ResponseEntity.ok(resource);
    }
}
