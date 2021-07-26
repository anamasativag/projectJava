package com.bbtutorials.users.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class Cursos {
	
	@Id
	@Column
    private long id;

    @Column
    @NotNull(message="{NotNull.Curso.grado}")
    private String grado;

    @Column
    @NotNull(message="{NotNull.Curso.salon}")
    private String salon;

    @Column
    @NotNull(message="{NotNull.Curso.idencolegio}")
    private long idencolegio;
}
