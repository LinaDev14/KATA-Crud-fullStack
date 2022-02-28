package co.com.sofka.katafullStack.repositories;

import co.com.sofka.katafullStack.models.Todo;
import co.com.sofka.katafullStack.models.TodoTask;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoTaskRepository extends CrudRepository<TodoTask, Long> {

    // buscar task por id
    List <TodoTask> findAllByTodoId(Long todoId);
    // Listar tareas todoTask
    List<TodoTask> findAll();

    void deleteAllByTodoId(Long id);
}
