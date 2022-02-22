package co.com.sofka.katafullStack.repositories;


import co.com.sofka.katafullStack.models.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRespository extends CrudRepository<Todo, Long> {

    // Listar tareas
    List<Todo> findAll();
}
