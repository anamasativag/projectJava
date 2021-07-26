package com.bbtutorials.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bbtutorials.users.entity.Cursos;
import com.bbtutorials.users.links.CursoLinks;
import com.bbtutorials.users.service.CursosService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class CursosController {
	
	@Autowired
	CursosService cursosService;
	
	@GetMapping(path = CursoLinks.LIST_CURSOS)
    public ResponseEntity<?> listCursos() {
        log.info("CursosController:  list cursos");
        List<Cursos> resource = cursosService.getCursos();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = CursoLinks.ADD_CURSO)
	public ResponseEntity<?> saveCurso(@RequestBody Cursos curso) {
        log.info("CursosController:  list cursos");
        Cursos resource = cursosService.saveCurso(curso);
        return ResponseEntity.ok(resource);
    }
}
