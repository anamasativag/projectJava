package com.bbtutorials.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bbtutorials.users.entity.Asignaturas;
import com.bbtutorials.users.links.AsignaturaLinks;
import com.bbtutorials.users.service.AsignaturasService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class AsignaturasController {
	
	@Autowired
	AsignaturasService asignaturasService;
	
	@GetMapping(path = AsignaturaLinks.LIST_ASIGNATURAS)
    public ResponseEntity<?> listAsignaturas() {
        log.info("AsignaturasController:  list asignaturas");
        List<Asignaturas> resource = asignaturasService.getAsignaturas();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = AsignaturaLinks.ADD_ASIGNATURA)
	public ResponseEntity<?> saveAsignatura(@RequestBody Asignaturas asignatura) {
        log.info("AsignaturasController:  list asignaturas");
        Asignaturas resource = asignaturasService.saveAsignatura(asignatura);
        return ResponseEntity.ok(resource);
    }
}
