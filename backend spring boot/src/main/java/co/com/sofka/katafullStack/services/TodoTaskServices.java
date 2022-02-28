package co.com.sofka.katafullStack.services;


import co.com.sofka.katafullStack.models.Todo;
import co.com.sofka.katafullStack.models.TodoTask;
import co.com.sofka.katafullStack.repositories.TodoTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoTaskServices {

    @Autowired
    private TodoTaskRepository todoTaskRespository;

    // listar todo el grupo de tareas
    public List<TodoTask> listTodoTask(){
        return todoTaskRespository.findAll();
    }

    // buscar tarea por id
    public Optional<TodoTask> findById(Long id){
        return todoTaskRespository.findById(id);
    }

    // obtener task por todoId
    public List<TodoTask> findAllByTodoId(Long todoId){
        return todoTaskRespository.findAllByTodoId(todoId);
    }

    // Crear nueva tarea
    public TodoTask save(TodoTask todotask){
        return todoTaskRespository.save(todotask);
    }

    // Actualizar tarea
    public TodoTask updateTodo(TodoTask todotask) {
        return todoTaskRespository.save(todotask);
    }

    // borrar tarea
    public void deleteById(Long id){
        todoTaskRespository.deleteById(id);
    }

}

