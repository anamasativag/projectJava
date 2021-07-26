package com.bbtutorials.users.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class AsignaturasXEstudiantes {

    @Id
	@Column
    private long id;
	
	@Column
    @NotNull(message="{NotNull.Asignaturaxestudiantes.idasig}")
    private long idasig;

    @Column
    @NotNull(message="{NotNull.Asignaturaxestudiante.idestud}")
    private long idestud;
}
