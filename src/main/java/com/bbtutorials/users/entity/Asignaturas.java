package com.bbtutorials.users.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class Asignaturas {
	
	@Id
	@Column
    private long id;

    @Column
    @NotNull(message="{NotNull.Asignatura.name}")
    private String name;

    @Column
    @NotNull(message="{NotNull.Asignatura.idprofesor}")
    private long idprofesor;

    @Column
    @NotNull(message="{NotNull.Asignatura.idcurso}")
    private long idcurso;
}
